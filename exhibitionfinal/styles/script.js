let redSplotch = document.querySelector('.cls-1')
let figure13 = document.querySelector('.figure1-3')

redSplotch.addEventListener('click',function(){
  figure13.classList.toggle('hide')  
})






let yellow1 = document.querySelector('.styellow')
let art1yellow = document.querySelector('.art1yellow')

yellow1.addEventListener('click',function(){
  art1yellow.classList.toggle('hide')  
})




let art1greencircle = document.querySelector('.art1greencircle')
let figure11 = document.querySelector('.figure1-1')

art1greencircle.addEventListener('click',function(){
  figure11.classList.toggle('hide')  
})








let art2redcircle = document.querySelector('.art2redcircle')
let art2red = document.querySelector('.art2red')

art2redcircle.addEventListener('click',function(){
   art2red.classList.toggle('hide')  
})



let art2blackcircle = document.querySelector('.art2blackcircle')
let art2black = document.querySelector('.art2black')

art2blackcircle.addEventListener('click',function(){
  art2black.classList.toggle('hide')  
})



let art3greencircle = document.querySelector('.art3greencircle')
let art3green = document.querySelector('.art3green')

art3greencircle.addEventListener('click',function(){
  art3green.classList.toggle('hide')  
})



let art3redcircle = document.querySelector('.art3redcircle')
let art3red = document.querySelector('.art3red')

art3redcircle.addEventListener('click',function(){
  art3red.classList.toggle('hide')  
})





let art3blackcircle = document.querySelector('.art3blackcircle')
let art3black = document.querySelector('.art3black')

art3blackcircle.addEventListener('click',function(){
  art3black.classList.toggle('hide')  
})





window.addEventListener('big',pageResized)


function pageResized(){
  
  let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100
  
  let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
  document.body.style.color = colorFromScreenHeight
  
}

pageResized()

