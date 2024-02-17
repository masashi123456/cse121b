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
    plceLived:[
        'Sapporo, Japan',
        'Utah provo',
        'Sao Paulo, Brasil',
        'Nagoya, Japan'
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
const photoEl = document.getElementByid('photo');
photoEl.alt = myProfile.photo;

/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


