  const intro = document.getElementById('intro');
  const main = document.getElementById('main');
  const cake = document.getElementById('cake');
  const envelope = document.getElementById('envelope');
  const messageBox = document.getElementById('messageBox');
  const song = document.getElementById('song');
  const polaroids = document.querySelectorAll('.polaroid');


  intro.addEventListener('click', () => {
    intro.style.display = 'none';
    main.style.display = 'block';
    song.play();
  });

  cake.addEventListener('click', () => {
    cake.style.filter = 'drop-shadow(0 0 20px yellow)';
  });

  envelope.addEventListener('click', () => {
  messageBox.classList.add('show-message');
});

messageBox.addEventListener('click', () => {
  messageBox.classList.remove('show-message');
  polaroid.classList.remove('show-photos')
});

envelope.addEventListener('click', () => {
  messageBox.classList.add('show-message');
  
  polaroids.forEach(p => polaroid.classList.add('show-photos'));
});