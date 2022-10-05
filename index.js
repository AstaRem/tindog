import { dogs } from "./data.js"
import { Dog } from "./Dog.js"


// create dog instance, assign variable name to it
 export let newDogInstance

 export function getNewDog(){
    let newDog = dogs.shift()

    if(newDog){
        newDogInstance = new Dog(newDog)
        render(newDogInstance)
    } else {
        getEndHtml()
    }  
}

// displays end message
export function getEndHtml(){
    let noMoreProfiles = `
    <h3>There are no more profiles.
        To start again, refresh the page!
    </h3>`
    document.getElementById("main-content").innerHTML = noMoreProfiles
}


// renders dog instance to the page. 
export function render(dog){
    document.getElementById("nope-img").style.visibility = "hidden"
    document.getElementById("like-img").style.visibility = "hidden"
    document.getElementById("like-btn").disabled = false
    document.getElementById("dislike-btn").disabled = false

    document.getElementById("dog-description").innerHTML = newDogInstance.getDogHtml()
 }
 render(getNewDog())

// renders Like or Nope image and gets new dog profile after delay
document.getElementById("dislike-btn").addEventListener("click", newDogInstance.displayNopeAndNew)
document.getElementById("like-btn").addEventListener("click", newDogInstance.displayLikeAndNew)








