const root = document.getElementById('root');
console.log(root);

// root.innerHTML = '<h2>Is the best language</h2>';

const newHeading = document.createElement('h2');
// <h2></h2>
newHeading.textContent = 'Is the best language';
// <h2>Is the best language</h2>
root.appendChild(newHeading);

// document.querySelector('body').removeChild(document.querySelector('p'));
document.querySelector('p').remove();
