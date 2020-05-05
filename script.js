
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
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}




function showInfo(data, tabletop) {

    const shufArr = shuffle(data);



    shufArr.forEach(function(index, i) {
        
   
        let wrongAns = shufArr.filter(item => item !== shufArr[i]);
        wrongAns = shuffle(wrongAns);
        console.log(wrongAns);
        
        let choices = [];
        choices[0] = shufArr[i].answer;
        choices[1] = wrongAns[0].answer;
        choices[2] = wrongAns[1].answer;
        const choicesShuf = shuffle(choices);



        let q = document.createElement("div");
        q.innerHTML = index.question;
        container.appendChild(q);

        for (var i = 0; i < 3; i++) {
            let a = document.createElement("div");
            container.appendChild(a);

            let butt = document.createElement("button");
            butt.innerHTML = choicesShuf[i];
            

            a.appendChild(butt);
            butt.onclick = function(){
                console.log(choicesShuf[i]);
                if (choicesShuf[i] == shufArr[i].answer) {
                    alert('Correct!')
                } else {
                    alert('Wrong!')
                }
            };
        }



    })
}

window.addEventListener('DOMContentLoaded', init);
