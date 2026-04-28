// JavaScript 기본 문법

const b1 = 'text'; // 상수
let b2 = 10; // 할당해도 밑에서 새로 항당해도 값이 변함

// 1) 변수 선언 (let/const)
const clickBtn = document.getElementById('click-btn');
const clickResult = document.getElementById('click-result');

// 클릭 횟수를 저장할 변수
let clickCount = 0;

// 2) 이벤트 리스너 등록
clickBtn.addEventListener('click', function () {
  // 클릭할 때마다 숫자를 1 증가
  clickCount += 1;

  // 3) DOM 텍스트 업데이트
  clickResult.textContent = '버튼을 ' + clickCount + '번 클릭했습니다.';
});

// 나이 확인 기능 요소 찾기
const numInput = document.getElementById('num-input'); // HTML id와 연결
const checkBtn = document.getElementById('check-btn');
const numResult = document.getElementById('num-result');

checkBtn.addEventListener('click', function () {
  // input.value는 문자열이므로 Number()로 숫자 변환
  const num = Number(numInput.value);

  // 입력값 검증: 숫자가 아니거나 0 이하라면 안내 문구 출력
  if (!num || num <= 0) {
    numResult.textContent = '올바른 학번을 입력해주세요.';
    return; // 함수 종료
  }

  // 4) 조건문 if / else if / else
  if (num < 20) {
    numResult.textContent = '?????????????';
  } else if (num < 22) {
    numResult.textContent = '교수님? 대학원생?';
  } else if (num < 24) {
    numResult.textContent = '뭐 그정도면.. 아직';
  } else {
    numResult.textContent = '젊은 것들';
  }
});
