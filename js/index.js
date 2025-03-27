const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input1 = +form['number1'].value;
  const input2 = +form['number2'].value;

  const result = input1 + input2;

  document.getElementById('result').innerHTML = result;
});