const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const images = document.querySelectorAll('.main-word img');
let selectedQuestions = []; // selectedQuestions 배열을 외부에 선언하고 초기화
let selectedTypes = [];
let random = 0; // count 변수를 함수 외부에 선언하고 초기화
let count = 0; // count 변수를 함수 외부에 선언하고 초기화
let i = 0; // i 변수를 함수 외부에 선언하고 초기화
let k = 1; // k 변수를 함수 외부에 선언하고 초기화
let s = 2; // s 변수를 함수 외부에 선언하고 초기화
var t;

function addAnswer(answerText, answerType){
  var a = document.querySelector('.answerBox'); //HTML 문서에서 클래스가 'answerBox'인 요소 찾음
  var answer = document.createElement('button'); // 새로운 버튼 요소 생성
  answer.classList.add('answerList'); // 새로 생성된 버튼에 'answerList'클래스 추가
  a.appendChild(answer); // 'answerBox'요소에 새로생성된 버튼을 자식 요소로 추가

  // 타입 정보를 버튼 요소에 저장
  answer.dataset.type = answerType;

<<<<<<< HEAD
  answer.innerHTML = answerText;  // answerText를 HTML 문서에 삽입 

  answer.addEventListener("click", function(){ //'answer'에 클릭 이벤트 추가
    var children = document.querySelectorAll('.answerList'); //HTML 문서에서 클래스가 'answerList'인 요소를 선택하여 'children' 변수에 저장
    for(let i = 0; i < children.length; i ++){ // 생성된 모든 버튼에 대해 반복
      children[i].disabled = true; // 현재 순회 중인 버튼 비활성화
      children[i].style.display = 'none'; // 현재 순회 중인 버튼 화면에서 숨김
    }
    
    // 선택된 답변의 타입을 selectedTypes 배열에 추가
    selectedTypes.push(answer.dataset.type);
    
    goNext1(); //goNext함수 호출
=======
function addAnswer(answerText){
  var a = document.querySelector('.answerBox'); // HTML 문서에서 클래스명이 'answerBox'인 요소를 가져옴
  var answer = document.createElement('button'); // 새로운 버튼 요소를 생성함
  answer.classList.add('answerList'); // 'answerList' 클래스를 버튼 요소에 추가함
  a.appendChild(answer);
  
  answer.innerHTML = answerText;  // answerText를 HTML 문서에 삽입 

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList'); // 모든 버튼 요소를 가져옴
    for(let i = 0; i < children.length; i ++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext1(); // 다음 질문으로 이동하는 함수 호출
>>>>>>> 68853c0782ca7a0a6a58fb8777b498b8c7dab347
  }, false);
}

function getRandomQuestionIndex() {
  let randomIdx; // randomIdx 변수 선언
  do {
    randomIdx = Math.floor(Math.random() * feeling.length); // feeling 배열의 길이만큼 랜덤 값 생성
  } while (selectedQuestions.includes(feeling[randomIdx])); // 랜덤 값 중복확인
  selectedQuestions.push(feeling[randomIdx]); // 랜덤 값 배열에 추가
  return randomIdx * 3; // 랜덤 숫자 * 3
}


function goNext1(){
  if(selectedQuestions.length === feeling.length){ // 배열의 길이가 같을 시 답변 선택 가능
    return;
  }
  
  var randomIdx = getRandomQuestionIndex(); //randomIdx 변수에 getRandomQuestionIndex 함수 호출
  console.log(randomIdx); // radomIdx 콘솔창에서 값 확인
  var q = document.querySelector('.qBox'); // q 변수에 HTML 문서에서 클래스명이 'qBox'인 요소를 가져옴
  if(i > 18){
    count ++; // count 값 1 증가
    random = randomIdx + 1; // random 변수에 randomIdx 값 + 1
    goNext2(); // goNext2 함수 호출
  }
  if(i <= 18 && i % 3 == 0 && randomIdx % 3 == 0){
    q.innerHTML = qnaList[randomIdx].q; // qnaList 배열에서 [randmIdx]번째 질문을 HTML문서에 삽입
<<<<<<< HEAD
    for(let j in qnaList[randomIdx].a){
      addAnswer(qnaList[randomIdx].a[j].answer);
    }
    console.log(selectedTypes);
    console.log(selectedQuestions); 
    console.log(qnaList[randomIdx]);
=======
    for(let j in qnaList[randomIdx].a){ // 선택된  [randmIdx]번째 질문의 각 답변에 대해 반복
      addAnswer(qnaList[randomIdx].a[j].answer); //  [randmIdx]번째 질문의 각 답변을 버튼으로 HTML에 추가
    }
    console.log(selectedQuestions); //console에 선택된 질문 배열을 출력
    console.log(qnaList[randomIdx]); //console에 선택된 질문을 출력
>>>>>>> 68853c0782ca7a0a6a58fb8777b498b8c7dab347
    i+=3;
    console.log(i);
    if(i >=18 ){
      i++;
      selectedQuestions = []; // 질문 배열을 초기화
    }
  }
}

function goNext2(){
  if(selectedQuestions.length === qnaList.length){
    return;
  }
  
  // 선택된 질문을 화면에 표시
  var q = document.querySelector('.qBox');

  if (k > 19){
    random = random + 1;
    goNext3();
  }
  if(k <= 19 && k % 3 == 1 && random % 3 == 1){
    q.innerHTML = qnaList[random].q; 
    for(let j in qnaList[random].a){
      addAnswer(qnaList[random].a[j].answer);
    }
    k += 3;
    console.log(selectedQuestions);
    console.log(qnaList[random]);
    if(k >= 19){
      k++;
      selectedQuestions = [];
    }
  }
}

function goNext3(){
  if(selectedQuestions.length === qnaList.length){
    return;
  }
  var q = document.querySelector('.qBox');

  if(s % 3 == 2 && random % 3 == 2){
    q.innerHTML = qnaList[random].q;
    for(let j in qnaList[random].a){
      addAnswer(qnaList[random].a[j].answer);
    }
    console.log(selectedQuestions);
    s +=3;
  }
}


function begin(){
  // 메인 화면을 서서히 사라지게 하는 애니메이션 설정
  main.style.webkitAnimation = "fadeOut 1s"; 
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    // 질문 화면을 서서히 나타나게 하는 애니메이션 설정
    qna.style.webkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() =>{
      main.style.display = "none"; // 메인 화면을 숨김
      qna.style.display = "block" // 질문 화면을 표시
      goNext1(); // goNext1()으로 이동하는 함수 호출
    }, 450)
    
  }, 450)
} 

function scaleImages() {
  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = 'scale(1.3)'; // 이미지 크기를 1.3배로 확대하는 애니메이션 설정
    }, index * 1000); // 이미지마다 1초씩 차이를 두고 실행

    setTimeout(() => {
      image.style.transform = 'scale(1)'; // 이미지 크기를 원래 크기로 복원하는 애니메이션 설정
    }, (index + 1) * 1000); // 이미지마다 1초씩 차이를 두고 실행
  });
}

window.onload = function () {
  scaleImages(); // scaleImages() 함수 호출
};


