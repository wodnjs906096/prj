const main = document.querySelector("#main"); //HTML 문서에서 id가 'main'인 요소를 찾아 main 변수에 할당
const qna = document.querySelector("#qna"); //HTMl 문서에서 id가 'qna'인 요소를 찾아 qna 변수에 할당
let selectedQuestions = []; // 이미 선택된 질문을 추적하기 위한 배열

function addAnswer(answerText){
  var a = document.querySelector('.answerBox'); //HTML 문서에서 클래스가 'answerBox'인 요소를 찾음
  var answer = document.createElement('button'); //새로운 버튼 요소 생성
  answer.classList.add('answerList'); //새로운 'answerList' 클래스 추가

  a.appendChild(answer);  // 생성된 버튼에 주어진 답변 텍스트 설정
  answer.innerHTML = answerText;  

  answer.addEventListener("click", function(){  //생성된 버튼 클릭 시 이벤트 추가
    var children = document.querySelectorAll('.answerList');  //HTML 문서에서 클래스가 'answerList'인 모든 요소를 찾아 비활성화
    for(let i = 0; i < children.length; i ++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext(); //goNext 함수 호출
  }, false);
}

function getRandomQuestionIndex() {
  let randomIdx; //randomIdx 변수 선언
  do {
    randomIdx = Math.floor(Math.random() * qnaList.length);//0부터 배열의 길이까 랜덤한 부동소수점 생성 후 소수점 버림하여 정수 변환
  } while (selectedQuestions.includes(randomIdx)); // 이미 선택된 질문이면 다시 선택
  selectedQuestions.push(randomIdx); // 선택된 질문을 추적으로 인해 마지막 질문 선택 불가
  return randomIdx; //함수를 호출한 곳으로 랜덤한 질문 인덱스 전달
}

function getRandomQuestionIndex2() {
  let randomIdx2; //randomIdx 변수 선언
  do {
    randomIdx2 = Math.floor(Math.random() * qnaList[0].length);//0부터 배열의 길이까 랜덤한 부동소수점 생성 후 소수점 버림하여 정수 변환
  } while (selectedQuestions.includes(randomIdx2)); // 이미 선택된 질문이면 다시 선택
  selectedQuestions.push(randomIdx2); // 선택된 질문을 추적으로 인해 마지막 질문 선택 불가
  return randomIdx2; //함수를 호출한 곳으로 랜덤한 질문 인덱스 전달
}


function goNext(){
  if(selectedQuestions.length === qnaList.length){  //마지막 질문 선택 가능
    return;
  }
  var randomIdx = getRandomQuestionIndex(); // 중복되지 않는 랜덤한 질문 인덱스 가져오기
  var q = document.querySelector('.qBox'); //HTML 문서에서 클래스가 'qBox'인 요소 찾음
  q.innerHTML = qnaList[randomIdx][0].q; //질문의 텍스트 설정
  for(let i in qnaList[randomIdx][0].a){
    addAnswer(qnaList[randomIdx][0].a[i].answer); //해당 질문의 답변을 표시하기 위해 'addAnswer()' 함수 호출
  }
}


function begin(){
  main.style.webkitAnimation = "fadeOut 1s";  //main 요소에 페이드 아웃 애니메이션 적용
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.webkitAnimation = "fadeIn 1s" // qna 요소에 페이드인 애니메이션 적용
    qna.style.animation = "fadeIn 1s";
    setTimeout(() =>{
      main.style.display = "none"; //일정시간이 지난 후 main 화면 없애고 qna 화면 표시
      qna.style.display = "block"
      goNext(); // goNext 함수 호출
    }, 450)
    
  }, 450)
} 

const images = document.querySelectorAll('.main-word img');

// 이미지 확대 함수
function scaleImages() {
  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = 'scale(1.3)'; // 이미지 확대
    }, index * 1000);

    setTimeout(() => {
      image.style.transform = 'scale(1)'; // 원래 크기로 복원
    }, (index + 1) * 1000);// 1초 간격으로 이미지 확대
  });
}

// 페이지 로드 시 이미지 확대 시작
window.onload = function () {
  scaleImages();
};