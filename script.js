
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

var display = document.getElementById("display");                    



function showInfo(data, tabletop) {

    console.log(getRandomInt(data.length));

    // console.log(data);


    let shufArr = shuffle(data);
    // console.log(shufArr);

    let newArr = [shufArr[0], shufArr[1], shufArr[2]];
    // console.log(newArr);

    let rand = getRandomInt(newArr.length);


    // ********************** PRINT QUESTION **********************


    let q = document.createElement("div");
    q.innerHTML = "Q.";


    let qDiv = document.createElement("div");
    qDiv.innerHTML = newArr[rand].question;
    qDiv.setAttribute("id", `question`);
    display.appendChild(qDiv);

    // ********************** SHOW ANSWERS **********************

    let a = document.createElement("div");
    a.innerHTML = "ANSWERS:";


    // let randIntA1 = getRandomInt(data.length);


    let a1 = document.createElement("button");
    a1.innerHTML = newArr[0].answer;
    a1.setAttribute("id", `answer0`);
    display.appendChild(a1);

    // let randIntA2 = getRandomInt(data.length);


    let a2 = document.createElement("button");
    a2.innerHTML = newArr[1].answer;
    a2.setAttribute("id", `answer1`);
    display.appendChild(a2);

    // let randIntA3 = getRandomInt(data.length);


    let a3 = document.createElement("button");
    a3.innerHTML = newArr[2].answer;
    a3.setAttribute("id", `answer2`);
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


