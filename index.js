import { dogs } from "./data.js"


// displays like/nope image, when button is clicked
document.getElementById("dislike").addEventListener("click", displayNope)
function displayNope(){
    document.getElementById("nope-img").style.visibility = "visible"
}


document.getElementById("like").addEventListener("click", displayLike)
function displayLike(){
    document.getElementById("like-img").style.visibility = "visible"
}


//Dog constructor - displays HTML for dog instance
class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    displayDog() {
        let {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img src=${avatar} alt="" class="profile-img">       
        <h1 class="title">${name}, ${age}</h1>
        <h2 class="subtitle">${bio}</h2>
         `
    }
}

// create dog instance, assign variable name to it
let Dog1 = new Dog(dogs[0])
let Dog2 = new Dog(dogs[1])
let Dog3 = new Dog(dogs[2])


// renders dog instance to the page. do i need to move it into constructor?
function render(dog){
    document.getElementById("dog-description").innerHTML = dog.displayDog()
 }
 
 render(Dog1)

//   what is left to do:
// after the like/dislike buttons are clicked, display another dog. use hasBeenSwiped property. move class Dog declaration to Dog.js

 

 
