const header = document.getElementById('header');
// header.textContent = '<h1>DOM</h1>';
header.innerHTML = '<h1>DOM</h1>';
// header.style.backgroundColor = '#234B96';
// header.style.color = '#F1F5F8';
header.classList.add('header');
header.setAttribute('title', 'Header');

const input = document.querySelector('input');
console.log(input);

setTimeout(() => {
  input.setAttribute('placeholder', 'Find something');
}, 1000);