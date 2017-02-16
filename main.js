// GO!
var answerNode = document.querySelector('.answer-box')

var buttonPress = document.querySelector('#hideNav')

var navNode = document.querySelector('.nav-menu')
var hideNode = document.querySelector('.nav-menu-hidden') 
var buttonObj = { 
	pressed: true 
}

buttonPress.addEventListener('click', function (){ 
 	if(buttonObj.pressed) { 
 	navNode.style.opacity = '0' 
 	buttonPress.innerHTML = 'Show Nav' 
 	buttonObj.pressed = false 
 }
 	else{ 
 		navNode.style.opacity = '1' 
 		buttonPress.innerHTML = "Hide Nav" 
 		buttonObj.pressed = true 
 	}


})

//*************************************************************************************************************

var textBoxNode = document.querySelector('#textBox')
var ulNode = document.querySelector('.guest-list')


textBoxNode.addEventListener('keydown', function(eventObj) {
  if (eventObj.keyCode === 13) { 
    var liNode = document.createElement('li')
    liNode.className = "guest" 
    ulNode.appendChild(liNode)
    liNode.innerHTML = eventObj.target.value
    eventObj.target.value = '' 
		}	
})

//**************************************************************************************************************

var textBoxNode2 = document.querySelector('#textBox2')
var ulNode2 = document.querySelector('#add-guest-bonus .guest-list')
console.log(ulNode)


textBoxNode2.addEventListener('keydown', function(eventObj){
  if (eventObj.keyCode === 13) { 
    var liNode = document.createElement('li') 
    liNode.className = "guest" 
    ulNode2.appendChild(liNode)
    liNode.innerHTML = eventObj.target.value
    eventObj.target.value = '' 

    var removeButton = document.createElement('button')
    removeButton.innerHTML = 'X'
    liNode.appendChild(removeButton) 
    
    removeButton.addEventListener('click', function(eventObj) {
    	ulNode2.removeChild(liNode)
    })
}})

