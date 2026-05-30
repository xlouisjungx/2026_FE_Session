type Operator = '+' | '-' | '*' | '/';

interface CalculatorProps {
  numA: string; // 첫번째 값
  numB: string; // 두번째 값
  onChangeA: (value: string) => void; // setNumA
  onChangeB: (value: string) => void; // setNumB
  operator: Operator; // 연산자
  onChangeOperator: (op: Operator) => void; // setOperator
  onCalculate: () => void; // 계산 함수
  result: number | null; // 결과가 없을 수도 있음
  error: string | null;
}

export default function Calculator({
  numA,
  numB,
  onChangeA,
  onChangeB,
  operator,
  onChangeOperator,
  onCalculate,
  result,
  error,
}: CalculatorProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 240,
      }}
    >
      <input
        placeholder="첫 번째 숫자"
        value={numA}
        onChange={(e) => onChangeA(e.target.value)}
        // 문자열로 값을 받아옴
      />
      <input
        placeholder="두 번째 숫자"
        value={numB}
        onChange={(e) => onChangeB(e.target.value)}
        // 문자열로 값을 받아옴
      />

      <div style={{ display: 'flex', gap: 4 }}>
        {(['+', '-', '*', '/'] as Operator[]).map((op) => (
          <button
            key={op}
            onClick={() => onChangeOperator(op)}
            style={{ fontWeight: operator === op ? 'bold' : 'normal' }}
          >
            {op === '*' ? '×' : op === '/' ? '÷' : op}
          </button>
        ))}
      </div>

      <button onClick={onCalculate}>계산하기</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>결과: {result}</p>}
    </div>
  );
}
