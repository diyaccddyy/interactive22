// let element = document.querySelector('#rectangler1')
// let element2 = document.querySelector('#circle1')
// let element3 = document.querySelector('#rectangler2')
// let element4 = document.querySelector('#circle2')



// let element5 = document.querySelector('#circle1')
// let element6 = document.querySelector('#rectangler1')
// let element7 = document.querySelector('#rectangler2')
// let element8 = document.querySelector('#circle2')



// let element9 = document.querySelector('#rectangler2')
// let element10 = document.querySelector('#rectangler1')
// let element11 = document.querySelector('#circle1')
// let element12= document.querySelector('#circle2')




// let element13 = document.querySelector('#circle2')
// let element14 = document.querySelector('#rectangler1')
// let element15 = document.querySelector('#circle1')
// let element16= document.querySelector('#rectangler2')

let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')

let slices = document.querySelectorAll('img')

// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){
  
  // get the date object
  
  let d = new Date();

  // get hours, minutes, and seconds from the date object
  
  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  // update the clock's text with our time vars
  
  let timeText = h + ":" + m + ":" + s
  timeEl.innerText = timeText


  
  for(let i = 0; i < slices.length; i ++){
  	if(i < s%9){
  		slices[i].classList.add('show')
  	} else {
  		slices[i].classList.remove('show')
  	}
  }


  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
  // secondHand.style.transform = 'rotate('+ s * 6 +'deg)'  
  
  // // detect if its a minute divisible by 5
  
  // if(m % 5 == 0){
  // 	clockEl.classList.add('aFiveMinute');
  // } else {
  // 	clockEl.classList.remove('aFiveMinute');
  // }
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


let listOfElements = document.querySelectorAll('.thing')


let zIndex = -4

for(let counter = 0; counter <  listOfElements.length; counter++){
	listOfElements[counter].addEventListener('mouseenter',function(){	

		if(listOfElements[counter] === listOfElements[topElement]){
			



			for(let i = 0; i < listOfElements.length; i++){
				if(listOfElements[counter] != listOfElements[i]){
					listOfElements[i].classList.add('goaway');
				}
			}

			setTimeout(function(){
				for(let i = 0; i < listOfElements.length; i++){
					if(listOfElements[counter] != listOfElements[i]){
						listOfElements[i].classList.remove('goaway');
					}
				}
				listOfElements[counter].style.zIndex = zIndex
				zIndex --
				topElement ++

				if(topElement >= 4){
					topElement = 0
				}


			}, 1000)
		}
	})
}

// element.addEventListener('mouseenter',function(){


let topElement = 0


// element.addEventListener('mouseenter',function(){

// 	// if(hasEntered == false){
// 		// hasEntered = true
// 	if(element === listOfElements[topElement]){
// 		topElement = 1

// 		element2.classList.add('goaway');
// 		element3.classList.add('goaway2');
// 		element4.classList.add('goaway3');

// 		setTimeout(function(){
// 		element2.classList.remove('goaway')
// 		element3.classList.remove('goaway2')
// 		element4.classList.remove('goaway3')
// 		element.style.zIndex = element.style.zIndex - 5

// 		}, 1000)
// 	}

// })

// // element.addEventListener('mouseleave',function(){
// // 	console.log('hasleft')
// // 	hasEntered = false
// // })


// // document.addEventListener('mousemove',function(event){
// // 	if(event.clientX < 900 && event.clientX > 500){
// // 		console.log('middle!')
// // 	} else {
// // 		hasEntered = false
// // 	}
// // })




// element5.addEventListener('mouseenter',function(){

// if(element5 === listOfElements[topElement]){
// 	topElement = 2
// 	element6.classList.add('goaway4');
// 	element7.classList.add('goaway5');
// 	element8.classList.add('goaway6');

// 	setTimeout(function(){
// 	element6.classList.remove('goaway4')
// 	element7.classList.remove('goaway5')
// 	element8.classList.remove('goaway6')
// 	element5.style.zIndex = element.style.zIndex - 5

// 	}, 1000)
// }


// })






// element9.addEventListener('mouseenter',function(){
// 	if(element9 === listOfElements[topElement]){
// 	topElement = 3
// 	element10.classList.add('goaway7');
// 	element11.classList.add('goaway8');
// 	element12.classList.add('goaway9');

// 	setTimeout(function(){
// 	element10.classList.remove('goaway7')
// 	element11.classList.remove('goaway8')
// 	element12.classList.remove('goaway9')
// 	element9.style.zIndex = element.style.zIndex - 5

// 	}, 1000)
// 	}

// })




// element13.addEventListener('mouseenter',function(){
// if(element13 === listOfElements[topElement]){
// 	topElement = 0
// 	element14.classList.add('goaway10');
// 	element15.classList.add('goaway11');
// 	element16.classList.add('goaway12');

// 	setTimeout(function(){
// 	element14.classList.remove('goaway10')
// 	element15.classList.remove('goaway11')
// 	element16.classList.remove('goaway12')
// 	element13.style.zIndex = element.style.zIndex - 5

// 	}, 1000)
// }


// })

