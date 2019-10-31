
let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element15 = document.querySelector('#element-15')
let element17 = document.querySelector('#element-17')






element3.addEventListener('click',function() {
  
  element3.animate([{
			opacity: getComputedStyle(this).opacity,
			marginLeft: getComputedStyle(this).marginLeft,
			fontSize:  getComputedStyle(this).fontSize,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 2,
			marginLeft: '255px',
			fontSize: '64px',
			borderWidth: '10px'
		}], {
      duration: 5000,
      iterations: 5,
      fill:'forwards'
  });

})
  
element6.addEventListener('pointermove',function(e){
  var xPos = e.pageX-200;
  var yPos = e.pageY-95;

  console.log(e.pageX,e.pageY)

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})
  
element4.addEventListener("click", function() {
  this.classList.add("gradient-background");

});

element5.addEventListener("click", function() {
  element5.classList.toggle("circle");
});



    document.querySelector('.hamburger').addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('is-active');
    })





