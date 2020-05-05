
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1MuKQNEpUKI8LoSsAkrV9JWdot1gMZRa8fj4rEAro6JI/edit?usp=sharing';


function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                    callback: showInfo,
                    simpleSheet: true } );
}


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}






function showInfo(data, tabletop) {

    const shufArr = shuffle(data);



    shufArr.forEach(function(index, i) {
        
        // remove the correct answer from shufArr
        // remove shufArr[i]
        let wrongAns = shufArr.filter(item => item !== shufArr[i])
        console.log(wrongAns);
        
        const k = i + 1;
        let choices = [];
        choices[0] = shufArr[i].answer;
        choices[1] = wrongAns[i].answer;
        choices[2] = wrongAns[k].answer;
        choices = shuffle(choices);



        let q = document.createElement("div");
        q.innerHTML = index.question;
        container.appendChild(q);

        for (var i = 0; i < 3; i++) {
            let a = document.createElement("div");
            container.appendChild(a);

            let butt = document.createElement("button");
            butt.innerHTML = choices[i];
            a.appendChild(butt);
            butt.onclick = function(){
                if (choices[i] == shufArr[i].answer) {
                    let p = document.createElement("p");
                    p.innerHTML = "Correct";
                    q.appendChild(p);
                }
            };
        }



    })
}

window.addEventListener('DOMContentLoaded', init);
