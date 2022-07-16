let menuBurger = document.querySelector('.menu');
function menuChangeColor (){
  burger.style
}

menuBurger.addEventListener('mouseover', function(){
  document.getElementsByClassName('burger')[0].style.backgroundColor = 'white'
  document.getElementsByClassName('burger')[1].style.backgroundColor = 'white'
  document.getElementsByClassName('burger')[2].style.backgroundColor = 'white'
})
menuBurger.addEventListener('mouseout', function(){
  document.getElementsByClassName('burger')[0].style.backgroundColor = '#c7c7c7'
  document.getElementsByClassName('burger')[1].style.backgroundColor = '#c7c7c7'
  document.getElementsByClassName('burger')[2].style.backgroundColor = '#c7c7c7'
})

function myFunction(x) {
  x.classList.toggle('change');
}
