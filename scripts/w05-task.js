/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(temple=>{
        let newArt = document.createElement('article');
        
        let newH3 = document.createElement('h3')
        newH3.textContent = temple.templeName;
        let newImg = document.createElement('img');
        newImg.src = temple.imageUrl
        newImg.alt = temple.location
        newArt.appendChild(newH3);
        newArt.appendChild(newImg);
        templeElement.appendChild(newArt);
    })
};







/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    try{
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
        templeList = await response.json();
        displayTemples(templeList);
        console.log(templeList)
    } catch(error){
        console.error('error', error);
    }
    
}

/* reset Function */
function reset(){
    templeElement.innerHTML = ('');
}

/* filterTemples Function */
const filterTemples = (temples)=>{
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter){
        case 'utah':
            const utah = temples.filter(temple=>temple.location.includes('Utah'));
            displayTemples(utah);
            break;
        case 'notutah':
            const notUtah = temples.filter(temple=> !temple.location.includes('Utah'));
            displayTemples(notUtah);
            break;
        case 'older':
            const date = new Date(1950, 0, 1)
            const older = temples.filter(temple => new Date(temple.dedicated) < date);
            displayTemples(older);
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', ()=>filterTemples(templeList));

