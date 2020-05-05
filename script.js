
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1MuKQNEpUKI8LoSsAkrV9JWdot1gMZRa8fj4rEAro6JI/edit?usp=sharing';


function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                    callback: showInfo,
                    simpleSheet: true } );
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var display = document.getElementById("display");                    



function showInfo(data, tabletop) {

    console.log(getRandomInt(data.length));


    let randIntQ = getRandomInt(data.length);

    let q = document.createElement("div");
    q.innerHTML = "Q.";


    let qDiv = document.createElement("div");
    qDiv.innerHTML = data[randIntQ].question;
    qDiv.setAttribute("id", `question${randIntQ}`);
    display.appendChild(qDiv);


    let a = document.createElement("div");
    a.innerHTML = "ANSWERS:";


    let randIntA1 = getRandomInt(data.length);


    let a1 = document.createElement("div");
    a1.innerHTML = data[randIntA1].answer;
    a1.setAttribute("id", `answer${randIntA1}`);
    display.appendChild(a1);

    let randIntA2 = getRandomInt(data.length);


    let a2 = document.createElement("div");
    a2.innerHTML = data[randIntA2].answer;
    a2.setAttribute("id", `answer${randIntA2}`);
    display.appendChild(a2);

    let randIntA3 = getRandomInt(data.length);


    let a3 = document.createElement("div");
    a3.innerHTML = data[randIntA3].answer;
    a3.setAttribute("id", `answer${randIntA3}`);
    display.appendChild(a3);





    

    // data.forEach(function(data, i) {

    //     let qDiv = document.createElement("div");
    //     qDiv.innerHTML = data.question;
    //     qDiv.setAttribute("id", `question${i}`);
    //     display.appendChild(qDiv);

    //     let aDiv = document.createElement("div");
    //     aDiv.innerHTML = data.answer;
    //     aDiv.setAttribute("id", `answer${i}`);
    //     display.appendChild(aDiv);



    //     let br = document.createElement("br")
    //     display.appendChild(br);

    // });
}



window.addEventListener('DOMContentLoaded', init);


