const element = document.querySelector('h1');

element.addEventListener('click', (e) => {
  // Detener comportamiento predeterminado
  e.preventDefault();

  // Detener la propagación del evento
  e.stopPropagation();

  // Información general
  console.log(e.type); // 'click'
  console.log(e.target); // elemento que originó el evento

  // Posición del cursor (eventos de ratón)
  console.log(e.clientX, e.clientY);
});
