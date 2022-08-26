import { getFish } from "./database.js";
import { FishList } from "./FishList.js";

const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

let parentHTMLElement = document.querySelector(".fishies")

parentHTMLElement.innerHTML = FishList()