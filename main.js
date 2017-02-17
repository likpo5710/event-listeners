// GO!
var answerBoxNode = document.querySelector('.answer-box')
var navNode = document.querySelector('.nav-menu')

var navNodeState = {
	isShowing: true,
	opacity: 1,
}


var toggleButton = document.createElement('button')

answerBoxNode.appendChild(toggleButton)
toggleButton.innerHTML='hide nav' 

toggleButton.addEventListener('click', function(eventObj){
	if(navNodeState.isShowing===true){
		navNode.style.opacity = '0'
		navNodeState.isShowing = false
		toggleButton.innerHTML='show nav'
	}
	else{
		navNode.style.opacity = '1'
		navNodeState.isShowing = true
		toggleButton.innerHTML='hide nav'
	}
})

//*************************************************************************************************************

var textBoxNode = document.querySelector('#textBox')
var ulNode = document.querySelector('.guest-list')


textBoxNode.addEventListener('keydown', function(eventObj) {
  if (eventObj.keyCode === 13) { 
    var liNode = document.createElement('li');
    liNode.className = "guest"; 
    ulNode.appendChild(liNode);
    liNode.innerHTML = eventObj.target.value;
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

