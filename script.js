const button = document.getElementById('confetti-btn');
const container = document.getElementById('confetti-container');

button.addEventListener('click', () => {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
   
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();

    container.appendChild(confetti);

    
    setTimeout(() => {
      confetti.remove();
    }, 1000);
  }
});

function getRandomColor() {
  const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C92C6D'];
  return colors[Math.floor(Math.random() * colors.length)];
}
