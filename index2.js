import { dogs } from "./data.js"

let hasBeenSwiped = false;
let hasBeenLiked = false;



// displays like/nope image, when button is clicked


//Dog constructor - displays HTML for dog instance
class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml() {
        let {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img src=${avatar} alt="" class="profile-img">       
        <h1 class="title">${name}, ${age}</h1>
        <h2 class="subtitle">${bio}</h2>
         `
    }


    displayLikeAndNew(){
        document.getElementById("like-img").style.visibility = "visible"
        document.getElementById("dislike-btn").disabled = true
        setTimeout(getNewDog, 1000)
    }

    displayNopeAndNew(){
        document.getElementById("nope-img").style.visibility = "visible"
        document.getElementById("like-btn").disabled = true
        setTimeout(getNewDog , 1000)
         }
    
}
// create dog instance, assign variable name to it
let newDogInstance

// renders dog instance to the page. 
function render(dog){
    document.getElementById("nope-img").style.visibility = "hidden"
    document.getElementById("like-img").style.visibility = "hidden"
    document.getElementById("like-btn").disabled = false
    document.getElementById("dislike-btn").disabled = false


    document.getElementById("dog-description").innerHTML = newDogInstance.getDogHtml()
 }
 render(getNewDog())

// renders Like or Nope image
document.getElementById("dislike-btn").addEventListener("click", newDogInstance.displayNopeAndNew)
document.getElementById("like-btn").addEventListener("click", newDogInstance.displayLikeAndNew)

  

function getNewDog(){
    let newDog = dogs.shift()
    newDogInstance = new Dog(newDog)
    render(newDogInstance)
    return newDog ? new Dog(newDog) : getEndHtml()
}

function getEndHtml(){
    let noMoreProfiles = `
    <h3>There are no more profiles.
        To start again, press paw!
    </h3>`
    document.getElementById("main-content").innerHTML = noMoreProfiles
}


document.getElementById("paw").addEventListener("click", render(getNewDog()))


// function startAgain(){
//     window.location.reload()
// }





