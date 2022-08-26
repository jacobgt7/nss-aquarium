import { getFish } from "./database.js";

export const FishList = () => {
    const fishes = getFish()
    
    let htmlString = `\n  <h2 class="fishies__header header">Currently Owned Fish</h2>
    <cards class="fishies__cards">`

    for (let fish of fishes) {
        htmlString += `<card class="fish card">  
        <img class="fish__img" src="${fish.photo}">
        <h3 class="fish__name">"${fish.name}"</h3>
        <ul class="fish__info no_bullets">
            <li><b>Species:</b>  ${fish.species}</li>
            <li><b>Length:</b>  ${fish.length}</li>
            <li><b>From:</b>  ${fish.from}</li>
            <li><b>Food:</b>  ${fish.food}</li>
        </ul>
    </card>`
    }
    htmlString += `\n   </cards>`
    return htmlString
}