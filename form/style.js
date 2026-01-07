const form = document.getElementById('regForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(event) {
  msg.style.display = 'none';

  setTimeout(() => {
    msg.style.display = 'block';
    form.reset();
  }, 500);
});

