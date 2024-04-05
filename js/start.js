const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
let selectedQuestions = [];
const images = document.querySelectorAll('.main-word img');
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
    randomIdx = Math.floor(Math.random() * qnaList.length);
  } while (selectedQuestions.includes(randomIdx));
  selectedQuestions.push(randomIdx);
  return randomIdx;
}

function goNext1(){
  if(selectedQuestions.length === qnaList.length){
    return;
  }
  var randomIdx = getRandomQuestionIndex();
  var q = document.querySelector('.qBox');

  if( i % 3 == 0){
    q.innerHTML = qnaList[i].q;
    for(let j in qnaList[i].a){
      addAnswer(qnaList[i].a[j].answer);
    }
    if(i >= 15){
      i++;
    }
  }else if(k % 3 == 1){
    q.innerHTML = qnaList[k].q;
    for(let j in qnaList[k].a){
      addAnswer(qnaList[k].a[j].answer);
    }
    k += 3;
    if (k > 16){
      k++;
    }
  }else if(s % 3 == 2){
    q.innerHTML = qnaList[s].q;
    for(let j in qnaList[s].a){
      addAnswer(qnaList[s].a[j].answer);
    }
    s +=3 ;
  }
  i += 3;
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