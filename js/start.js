const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const images = document.querySelectorAll('.main-word img');
let selectedQuestions = []; // selectedQuestions 배열을 외부에 선언하고 초기화
let selectedQuestions2 = [];
let selectedQuestions3 = [];
let selectedTypes = [];
let Intersection = [];
let Intersection2 = [];
let i = 0; // i 변수를 함수 외부에 선언하고 초기화
let k = 0; // k 변수를 함수 외부에 선언하고 초기화
let s = 0; // s 변수를 함수 외부에 선언하고 초기화
const feelingValues = {
  'Peace': 0,
  'Toughness': 1,
  'Anger': 2,
  'Love': 3,
  'Happy': 4,
  'Sad': 5
};

const intersectionValues = Intersection.map(feeling => feelingValues[feeling]);

function addAnswer(answerText, type){
  var a = document.querySelector('.answerBox'); //HTML 문서에서 클래스가 'answerBox'인 요소 찾음
  var answer = document.createElement('button'); // 새로운 버튼 요소 생성
  answer.classList.add('answerList'); // 새로 생성된 버튼에 'answerList'클래스 추가
  a.appendChild(answer); // 'answerBox'요소에 새로생성된 버튼을 자식 요소로 추가
  
  answer.innerHTML = answerText;  // answerText를 HTML 문서에 삽입 

  answer.addEventListener("click", function(){ //'answer'에 클릭 이벤트 추가
    var children = document.querySelectorAll('.answerList'); //HTML 문서에서 클래스가 'answerList'인 요소를 선택하여 'children' 변수에 저장
    for(let i = 0; i < children.length; i ++){ // 생성된 모든 버튼에 대해 반복
      children[i].disabled = true; // 현재 순회 중인 버튼 비활성화
      children[i].style.display = 'none'; // 현재 순회 중인 버튼 화면에서 숨김
    }

    // 선택된 답변의 타입을 selectedTypes 배열에 추가
    selectedTypes.push(type);
    console.log(selectedTypes);
    goNext1(); //goNext함수 호출
  }, false);
}

function getRandomQuestionIndex() {
  let randomIdx; // randomIdx 변수 선언
  do {
    randomIdx = Math.floor(Math.random() * feelingList.length); // feelingList 배열의 길이만큼 랜덤 값 생성
  } while (selectedQuestions.includes(feelingList[randomIdx])); // 랜덤 값 중복확인
  selectedQuestions.push(feelingList[randomIdx]); // 랜덤 값 배열에 추가
  return randomIdx; // 랜덤 숫자 * 3
}

function goNext1(){
  if(selectedQuestions.length === feelingList.length){ // 배열의 길이가 같을 시 답변 선택 가능
    return;
  }
  
  var randomIdx = getRandomQuestionIndex(); //randomIdx 변수에 getRandomQuestionIndex 함수 호출
  var q = document.querySelector('.qBox'); // q 변수에 HTML 문서에서 클래스명이 'qBox'인 요소를 가져옴
  if(i === 19){
    Intersection.push(...feelingList.filter(x => selectedTypes.includes(x)));
    i++;
    if(i === 20){
      selectedTypes = [];
      i++;
      goNext2(); // goNext2 함수 호출
    }
  } else if(i === 21){
    goNext2(); // goNext2 함수 호출
  }

  if(i <= 18 && i % 3 == 0){
    q.innerHTML = qnaList[randomIdx][0].q; // qnaList 배열에서 [randmIdx]번째 질문을 HTML문서에 삽입
    for(let j in qnaList[randomIdx][0].a){
      addAnswer(qnaList[randomIdx][0].a[j].answer, qnaList[randomIdx][0].a[j].type);
    }
    i+=3;
    console.log(i);
    if(i >=18 ){
      i++;
      selectedQuestions = []; // 질문 배열을 초기화
    }
  }
}

function getRandomQuestionIndex2() {
  let randomIdx2; // randomIdx 변수 선언
  do {
    randomIdx2 = Math.floor(Math.random() * Intersection.length); // feelingList 배열의 길이만큼 랜덤 값 생성
  } while (selectedQuestions2.includes(Intersection[randomIdx2])); // 랜덤 값 중복확인
  selectedQuestions2.push(Intersection[randomIdx2]); // 랜덤 값 배열에 추가
  return feelingValues[Intersection[randomIdx2]];
}

function goNext2(){
  if(selectedQuestions2.length === Intersection.length){
    return;
  }
  
  // 선택된 질문을 화면에 표시
  var q = document.querySelector('.qBox');
  var randomIdx2 = getRandomQuestionIndex2();

    if(k > Intersection.length && s === 0){
      Intersection2.push(...feelingList.filter(x => selectedTypes.includes(x)));
      console.log(Intersection2);
      s++;
      if(s===1){
        selectedTypes = [];
        s++;
        goNext3(); // goNext2 함수 호출
      }
    }else if(k > Intersection.length && s === 2){
      goNext3();
    }

  if( k <= Intersection.length){
    q.innerHTML = qnaList[randomIdx2][1].q; 
    for(let j in qnaList[randomIdx2][1].a){
      addAnswer(qnaList[randomIdx2][1].a[j].answer, qnaList[randomIdx2][1].a[j].type);
    }
    k++;
    if (k===Intersection.length){
      selectedQuestions2 = []; // selectedQuestions2 배열을 초기화
      k++;
    }
  } 
  
}

function getRandomQuestionIndex3() {
  let randomIdx3; // randomIdx 변수 선언
  do {
    randomIdx3 = Math.floor(Math.random() * Intersection2.length); // Intersection2 배열의 길이만큼 랜덤 값 생성
  } while (selectedQuestions3.includes(Intersection2[randomIdx3])); // 랜덤 값 중복확인
  selectedQuestions3.push(Intersection2[randomIdx3]); // 랜덤 값 배열에 추가
  return feelingValues[Intersection2[randomIdx3]];
}

function goNext3(){
  if(selectedQuestions3.length === Intersection2.length){
    return;
  }
  var q = document.querySelector('.qBox');
  var randomIdx3 = getRandomQuestionIndex3();

    q.innerHTML = qnaList[randomIdx3][2].q;
    for(let j in qnaList[randomIdx3][2].a){
      addAnswer(qnaList[randomIdx3][2].a[j].answer, qnaList[randomIdx3][2].a[j].type);
    }
    console.log(selectedQuestions3);
    console.log(Intersection2);
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