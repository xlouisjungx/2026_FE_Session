// function App() {
//   return (
//     <div className="App">
//       {' '}
//       // 부모태그(회상단의 태그)가 하나만 있어야 하며, 그 안에 여러개의
//       자식태그가 올 수 있다. (반대로 업승면 오류가 발생한다.)
//       <h1>Hello React</h1>
//       <p>리엑트 개발환경 세팅 완료</p>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = 'choi';
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   );
// }

// export default App;

/**
 * camelcase
 * ex) const myName = 'choi';
 *
 * snake_case\
 * ex) const my_name = 'choi';
 *
 * Pascalcase
 * ex) const MyName = 'choi';
 *
 */

// function Section() {
//   return (
//     <div>
//       <h2>Hello Component</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>main page</h1>
//       <Section />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = 'JUNG';
//   const age = '22';

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>이름: {name}</p>
//       <p>나이: {age}</p>
//       <p>{age > 25 ? '20대 후반' : '20대 초반'}</p>
//     </div>
//   );
// }

// export default App;

// import UserCard from './UserCard';

// function App() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <UserCard name="철수" job="학생" color="royalblue" />
//       <UserCard name="영희" job="학생" color="lightcoral" />
//       <UserCard name="민수" job="개발자" color="lightgreen" />
//     </div>
//   );
// }

// export default App;

/**
 * Mount
 * Update
 * UnMount
 */

import { useState } from 'react';
import Timer from './Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? '타이머 숨기기' : '타이머 보이기'}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
