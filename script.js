
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
        

        let ansArr = [];

        ansArr[0] = index.answer;
        ansArr[1] = 'Answer Two';
        ansArr[2] = 'Answer Three';

        let q = document.createElement("div");
        q.innerHTML = index.question;
        container.appendChild(q);

        for (var i = 0; i < 3; i++) {
            let a = document.createElement("div");
            // a.innerHTML = ansArr[i];
            container.appendChild(a);

            let butt = document.createElement("button");
            butt.innerHTML = ansArr[i];
            a.appendChild(butt);
        }



    })
}

window.addEventListener('DOMContentLoaded', init);
