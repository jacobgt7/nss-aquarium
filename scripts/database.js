const database = {
    fish: [
        {
            photo: "https://images.theconversation.com/files/299379/original/file-20191030-154716-1wc4d64.jpg?ixlib=rb-1.1.0&rect=0%2C12%2C2048%2C1023&q=45&auto=format&w=1356&h=668&fit=crop",
            name: "Mr. Face",
            species: "Nose Fish", 
            length: "38cm",
            from: "Changa Manga",
            food: "Chocolate"  
        },
        {
            photo: "https://static01.nyt.com/images/2022/07/19/science/00tb-lumpfish/00tb-lumpfish-superJumbo.jpg",
            name: "Night-light",
            species: "Luminous Guppy",
            length: "16cm",
            from: "Changa Manga",
            food: "Batteries"
            },
            {
                photo: "https://a-z-animals.com/media/2021/10/Flowerhorn-header-2-400x300.jpg",
               name: "Betty Bump",
               species: "Herniated Brain Fish",
               length: "32cm",
               from: "St. Crud",
               food: "Souls of the damned" 
            },
            {
                photo: "https://media.npr.org/assets/img/2016/06/17/whatafishknows_wide-e2b0800c202b1751ffddfae6394e3c7825e7d333-s1100-c50.jpg",
                name: "Terry",
                species: "Cuddle Ball",
                length: "40cm",
                from: "St. Crud",
                food: "Cotton candy"
            },
            {
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJw9A2EASumxXjdvPCo2kgesxjqnNVoatHpg&usqp=CAU",
                name: "Ninja",
                species: "Rainbow Hoarder",
                length: "32cm",
                from: "See Rocks City",
                food: "Human blood"
            },
            {
                photo: "https://static01.nyt.com/images/2021/11/09/science/03tb-fishteeth1/03tb-fishteeth1-videoSixteenByNineJumbo1600.jpg",
                name: "Snuggles",
                species: "Killer Grouper",
                length: "68cm",
                from: "See Rocks City",
                food: "Kittens"
            },
            {
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_iV5rxDYWiHNI11oAxmK5VHAaZW3IjkrytQ&usqp=CAU",
                name: "Boogie Man",
                species: "Nocturnicis Noobius",
                length: "40cm",
                from: "Destitoots",
                food: "Canned beans"
            },
            {
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdRhFoltm4NYWrV2BB3rcTI8FE_ROoxxnBg&usqp=CAU",
                name: "Sparticus",
                species: "Death Eater",
                length: "94cm",
                from: "Destitoots",
                food: "Steak"
            },
            {
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFCnO1a0czYyzA2TAdR28TXXRJ3i-XXn44Aw&usqp=CAU",
                name: "Pennyworth",
                species: "Sock-Face Shark",
                length: "112cm",
                from: "Fu-man-chu Island",
                food: "Dirty Laundry"
            },
            {
                photo: "https://i.natgeofe.com/n/8cbad77e-1465-4d3f-bf8a-01b405852131/thumbnail-snakehead-nationalgeographic-2364091_3x2.jpg",
                name: "Froggy",
                species: "Serpent Cod",
                length: "65cm",
                from: "Fu-man-chu Island",
                food: "You. He eats you."
            }
    ]        
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}