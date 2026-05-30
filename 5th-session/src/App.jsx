import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:3001';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      // 왜 얘만? -> 렌더링할 때 불러와야 함(나머지는 버튼 클릭)
      const response = await fetch(`${BASE_URL}/todos`);
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!input.trim()) return;

    const response = await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: input, completed: false }),
    });

    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = async (todo) => {
    const response = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });

    const updated = await response.json();
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  // DELETE - 할일 삭제
  const deleteTodo = async (id) => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
    });

    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>To-do list</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
          >
            <span
              onClick={() => toggleTodo(todo)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'gray' : 'white',
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
