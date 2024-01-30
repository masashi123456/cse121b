/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Masashi Ota';
let currentYear = new Date().getFullYear()
let profilePicture = 'images/me.JPG'




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
console.log("hello")
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.getElementsByTagName('img')[0];





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textcontent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullname}`);





/* Step 5 - Array */
let favfood = ['egg', 'Hamburger', 'Cheese','Rootbear']
foodElement.innerHTML = favfood;
let food2 = "Takoyaki";
favfood.push(food2);
foodElement.innerHTML += `<br>${favfood}`;
favfood.shift();
foodElement.innerHTML += `<br>${favfood}`;
favfood.pop();
foodElement.innerHTML += `<br>${favfood}`;






