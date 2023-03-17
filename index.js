const reactEl = document.getElementById("react");
const memoryEl = document.getElementById("memory");
const verbalEl = document.getElementById("verbal");
const visualEl = document.getElementById("visual");
const elementsArr = [reactEl, memoryEl, verbalEl, visualEl];

const myScoreEl = document.getElementById("my-score-el");

let data = [
    {
      "category": "Reaction",
      "score": randomScore(),
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": randomScore(),
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": randomScore(),
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": randomScore(),
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

function randomScore() {
    let num = Math.floor(Math.random() * 101);
    return num;
}


function yourScore() {
    let totScore = 0;
    for(let i = 0; i < data.length; i++) {
        totScore += data[i].score;
    }
    return Math.floor(totScore / data.length)
}

myScoreEl.textContent = yourScore();

for(let i = 0; i < data.length; i++) {
    elementsArr[i].innerHTML = 
        `
        <span>
            <img src=${data[i].icon} />
            <p>${data[i].category}</p>
        </span>
        <p><span>${data[i].score}</span> / 100</p>
        `
};