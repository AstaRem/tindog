import { getNewDog } from "./index.js"

export class Dog {
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

    // below two methods make possible to display like or nope image after clicking a button, and move to the next profile after delay
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
