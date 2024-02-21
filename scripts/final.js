const memberInfo = document.getElementById('members');
const countInfo = document.getElementById('count');
let memberList = [];

const getMembers = async () =>{
    try{
        const getMem = await fetch("https://masashi123456.github.io/cse121b/final.json");
        memberList = await getMem.json();
        displayMembers(memberList);
        console.log(memberList);
    }catch(error){
        console.error('error', error)
    }

}

const displayCount = (number, section) =>{
    let countNumber = document.createElement('p');
    countNumber.textContent = `The number of ${section} is ${number} `;
    countInfo.innerHTML = '';
    countInfo.appendChild(countNumber);

}

const displayCount2 = (number, section) =>{
    let countNumber = document.createElement('p');
    countNumber.textContent = `${number} members in this word are not ${section} `;
    countInfo.innerHTML = '';
    countInfo.appendChild(countNumber);

}


const displayMembers = (members) =>{
    members.forEach(member =>{
        let newArt = document.createElement('article');
        let newH = document.createElement('h1');
        newH.textContent = 'Name: ' + member.name;
        let h2 = document.createElement('h2');
        h2.textContent= 'Age:' + member.age;
        let h3 = document.createElement('h3');
        h3.textContent= 'Gender:' + member.gender;
        let img = document.createElement('img');
        img.src = member.url;
        h2.appendChild(h3);
        newArt.appendChild(newH);
        newArt.appendChild(h2)
        newArt.appendChild(img);
        memberInfo.appendChild(newArt);

    })
}

const reset = ()=>{
    memberInfo.innerHTML = '';
}

const filterMembers = (members) =>{
    reset();
    const filter = document.getElementById('filter').value;
    switch(filter){
        case 'everyone':
            displayMembers(members);
            displayCount(members.length, 'the members');
            break;
        case 'older':
            const older = members.slice().sort ((a,b) => b.age - a.age);
            displayMembers(older);
            break;
        case 'younger':
            const younger = members.slice().sort ((a,b) => a.age - b.age);
            displayMembers(younger);
            break;
        case 'ysa':
            const ysa = members.filter(member=>member.age > 17 && member.age < 31 && member.married === 'No') ;
            displayMembers(ysa);
            displayCount(ysa.length, 'YSA');
            break;
        case 'youth':
            const youth = members.filter(member=>member.age > 11 && member.age < 18) ;
            displayMembers(youth);
            displayCount(youth.length, 'Youth');
            break;
        case 'primary':
            const primary = members.filter(member=>member.age < 11) ;
            displayMembers(primary);
            displayCount(primary.length, 'Primary');
            break;
        case 'male':
            const male = members.filter(member=>member.gender === 'Male');
            displayMembers(male);
            displayCount(male.length, 'brothers');
            break;
        case 'female':
            const female = members.filter(member=>member.gender === 'Female');
            displayMembers(female);
            displayCount(female.length, 'sisters');
            break;
        case 'married':
            const married = members.filter(member=>member.married === 'No');
            displayMembers(married);
            displayCount2(married.length, 'married');
            break;
        case 'assignment':
            const assignment = members.filter(member=>member.assignment === 'N/A');
            displayMembers(assignment);
            displayCount2(assignment.length, 'assigned');
            break;
        

    }
}
getMembers()

document.getElementById('filter').addEventListener('change', ()=>filterMembers(memberList));

