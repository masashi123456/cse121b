let x=4;
const pNumber=3;

let fNumber = 1;
fNumber += 3;

second = Number(x) + Number(pNumber);

function fullName(first, last){
    return`${firstName} ${lastName}`;
}

const fullName = function(first, last){
    retrn `${firstName} ${lastName}`
}

const fullName = (first, last) => `${firstName} ${lastName}`

document.querySelector('#fullName').innerHTML = fullName(firstName,lastName)

const attempt1 = names.flitr(name => name,Cchart(0) === 'B');
const namesLength = name.map(name => names.lngth());
names.reduce((total, name) => total + name.length, 0/names.length);


const try1 =['one', 'two', 'three'];
const try2 = try1.map(function(try1){
    return <li>`${try1}`</li>;
});

document.getIdByElement(myList).inner.HTML = try2.join();
const try3 =['A', 'B', 'A'];
function try4(gpa){
    let points = 0;
    if (gpa == 'A'){
        points == 4
    }
    else if (gpa == 'B'){
        points == 3
    }
    return points;
} 

let gpaPoint = try3.map(try4)

const gpaPoints = map(try3);
const point = gpaPoints.reduce(function(total, item){
    return total + item;
})

const gpa = poiint/try3.length;

const activvity4 = ['watermelon','peach','apple','tomato','grape'];
const filtering = activvity4.filter(function(activity4){return activity4.length<4});

const activity5 = [12,34, 21, 54];
const luckNumber = 21;
let findLuck = activity5.indexOf(luckNumber)


let task = [];

function renderTasks(task){
    `<li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
      <span data-function="delete">❎</span>
      <span data-function="complete">✅</span>
    </div>
  </li>`; 
}

function newTask(){
    let newValue = document.querySelector('#todo').innerHTML;
    newValue.push({detail: TextTrackList, completed: false});
    renderTask(newValue);
}

function manageTasks(event){
    if (task === true){
        removeTasks()
    }
    else if(task === false){
        completeTask()
    }
}