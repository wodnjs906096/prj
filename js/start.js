const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
let selectedQuestions = [];
const images = document.querySelectorAll('.main-word img');
let random = 0;
let count = 0;
let i = 0; // i 변수를 함수 외부에 선언하고 초기화
let k = 1;
let s = 2;

function addAnswer(answerText){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  a.appendChild(answer);
  
  answer.innerHTML = answerText;    

  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i ++){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext1();
  }, false);
}

function getRandomQuestionIndex() {
  let randomIdx;
  do {
    randomIdx = Math.floor(Math.random() * feeling.length);
  } while (selectedQuestions.includes(randomIdx));
  selectedQuestions.push(randomIdx);
  return randomIdx * 3;
}

function goNext1(){
  if(selectedQuestions.length === feeling.length){
    return;
  }
  var randomIdx = getRandomQuestionIndex();
  console.log(randomIdx);
  var q = document.querySelector('.qBox');
  if(i > 18){
    count ++;
    random = randomIdx + 1;
    goNext2();
  }
  if(i <= 18 &&i % 3 == 0 && randomIdx % 3 == 0){
    q.innerHTML = qnaList[randomIdx].q;
    for(let j in qnaList[randomIdx].a){
      addAnswer(qnaList[randomIdx].a[j].answer);
    }
    console.log(selectedQuestions);
    console.log(qnaList[randomIdx]);
    i+=3;
    console.log(i);
    if(i >=18 ){
      i++;
      selectedQuestions = [];
    }
  }
  
}

function goNext2(){
  if(selectedQuestions.length === qnaList.length){
    return;
  }
  var q = document.querySelector('.qBox');
  if (k > 19){
    random = random + 1;
    goNext3();
  }
  if(k <= 19 &&k % 3 == 1 && random % 3 == 1){
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
  main.style.webkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.webkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() =>{
      main.style.display = "none";
      qna.style.display = "block"
      goNext1();
    }, 450)
    
  }, 450)
} 

function scaleImages() {
  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = 'scale(1.3)';
    }, index * 1000);

    setTimeout(() => {
      image.style.transform = 'scale(1)';
    }, (index + 1) * 1000);
  });
}

window.onload = function () {
  scaleImages();
};