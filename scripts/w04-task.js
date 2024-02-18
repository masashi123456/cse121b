/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Masashi Ota",
    photo: "images/me.JPG",
    favoriteFoods:[
        'rice',
        'egg',
        'cheese', 
        'Udon',
        'Ramen',
    ],
    hobbies:[
        'Watching Movie',
        'Playing Games',
        'Playing Japanese Chess'
    ],
    placeLived:[
        
    ],


};



/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: 'Nagoya, Japan',
        length: '2 year',
    }
);

myProfile.placeLived.push(
    {
        place: 'Sapporo, Japan',
        length: '20 year',
    }
);

myProfile.placeLived.push(
    {
        place: 'Provo, UT',
        length: '2 month',
    }
);

myProfile.placeLived.push(
    {
        place: 'Sao Paulo, Brazil',
        length: '2 month',
    }
);





/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;
/* Photo with attributes */
const photoEl = document.getElementById('photo');
photoEl.src = myProfile.photo;
photoEl.alt = myProfile.name;


/* Favorite Foods List*/
let favoriteFoodContent = document.getElementById('favorite-foods')
myProfile.favoriteFoods.forEach(food =>{
    let newLi = document.createElement('li');
    newLi.textContent = food;
    favoriteFoodContent.append(newLi)
});


/* Hobbies List */
let hobbiesContent = document.getElementById('hobbies')
myProfile.hobbies.forEach(hobby =>{
    let newUl = document.createElement('ul');
    newUl.textContent = hobby;
    hobbiesContent.append(newUl);
});


/* Places Lived DataList */
let livedList = document.getElementById('places-lived')
myProfile.placeLived.forEach(places =>{
    let newDt = document.createElement('dt');
    newDt.textContent = places.place;
    livedList.appendChild(newDt);
    let newDd = document.createElement('dd');
    newDd.textContent = places.length;
    livedList.appendChild(newDd);
});




