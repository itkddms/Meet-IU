const modalOpenButton = document.getElementById('menu');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});


//노래

document.addEventListener('DOMContentLoaded', function() {
const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.pause')
const cd = document.querySelector('.cd');




function playAudio() {
  audioContainer.volume = 0.2;
  audioContainer.loop = true;
  audioContainer.play();  
}

function stopAudio() {
  audioContainer.pause();  
  cd.classList.remove('rotate');
}

function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `IU_BOO.mp3`;
  playAudio();
}


// playBtn.addEventListener('click', loadAudio);

// stopBtn.addEventListener('click', stopAudio);



// 초기에는 Pause 버튼을 숨겨둠

stopBtn.classList.add('invisible');

playBtn.addEventListener('click', () => {
  loadAudio();
  cd.classList.add('rotate');
  // Play 버튼을 눌렀을 때
  playBtn.classList.add('invisible'); // Play 버튼 숨김
  stopBtn.classList.remove('invisible'); // Pause 버튼 표시
  
  
  // 음악을 로드하고 재생하는 코드
  
});

stopBtn.addEventListener('click', () => {
  stopAudio();
  // Pause 버튼을 눌렀을 때
  stopBtn.classList.add('invisible'); // Pause 버튼 숨김
  playBtn.classList.remove('invisible'); // Play 버튼 표시
  cd.classList.remove('rotate');
  // 여기에 음악 일시 정지 코드 추가
  
});

document.body.style.overflowY = 'scroll';

});


