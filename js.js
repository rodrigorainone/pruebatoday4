const holaItems = document.querySelectorAll('.hola');

holaItems.forEach((holaItem) => {
  const h1 = holaItem.querySelector('.displayh1');
  const volver = holaItem.querySelector('.volver');

  holaItem.addEventListener('mouseenter', () => {
    if(!holaItem.classList.contains('active'))
    h1.style.display = 'block';
  });

  holaItem.addEventListener('mouseleave', () => {
    h1.style.display = 'none';
  });
  
  holaItem.addEventListener('click', ()=>{
    holaItem.classList.add('active');
    h1.style.display='none';
  })

  volver.addEventListener('click' , (e)=>{
    e.stopPropagation();
    holaItem.classList.remove('active');
  })
});

