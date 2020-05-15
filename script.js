

var regexUrl = 'https://docs.google.com/spreadsheets/d/19_68Tj24EK2-c4HvJwkU_RyujpXPAiwCN5FQjyJbV-4/edit?usp=sharing';


let data = [];
let count = 0;
let correctCount = 0;
const root = document.getElementById("root");


function init() {
    Tabletop.init( { key: regexUrl,
                    callback: getData,
                    simpleSheet: true } );
}


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function renderScore(score) {
    let result = document.createElement("div");
        result.setAttribute("id", "score");
        result.innerHTML = 
            `Score is ${score * 10}% <br>
            <button style="margin-top:120px;" onClick="window.location.reload();">Try again</button>`;
        root.appendChild(result);
}



function getData(data, tabletop) {
    shuffle(data);   

    function renderDiv() {

        let wrongAns = data.filter(item => item !== data[count]);
        shuffle(wrongAns);

        let choices = [
            data[count].answer,
            wrongAns[0].answer,
            wrongAns[1].answer,
        ]

        shuffle(choices);

        const container = document.createElement("div");
        container.setAttribute("id", "container");
        root.appendChild(container);

        const q = document.createElement("div");
        q.setAttribute("id", "question");
        q.innerHTML = data[count].question;
        container.appendChild(q);

        for (var j = 0; j < 3; j++) {
            let a = document.createElement("div");
            a.setAttribute("id", "buttons");
            container.appendChild(a);

            let butt = document.createElement("button");
            butt.innerHTML = choices[j];
            a.appendChild(butt);


            butt.onclick = function(e){
                const choice = e.target.textContent;

                if (choice == data[count].answer) {
                    butt.style.backgroundColor = "green";
                    correctCount ++;
                } else {
                    butt.style.backgroundColor = "red";
                }
                count ++;

                setTimeout(function(){ 
                    var element = document.getElementById("container");
                    element.parentNode.removeChild(element);
                    
                    if (count !== 10) {
                        renderDiv();
                    } else {
                        renderScore(correctCount);
                    }
                }, 1300);

            };
        }
    }
    renderDiv();

}



window.addEventListener('DOMContentLoaded', init);
