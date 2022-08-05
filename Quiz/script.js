let personData = `{
    "q1":{"name":"q1","question":"Это для макияжа?"},
    "q1qY":{"name":"q1qY","question":"Средство для губ?"},
    "q1qYqY":{"name":"q1qYqY","question":"Контуринг?"},
    "q1qYqYqY":{"name":"q1qYqYqY","question":"Карандаш для губ!"},
    "q1qYqYqN":{"name":"q1qYqYqN","question":"Помада!"},
    "q1qYqN":{"name":"q1qYqN","question":"Средство для бровей?"},
    "q1qYqNqY":{"name":"q1qYqNqY","question":"Гель"},
    "q1qYqNqN":{"name":"q1qYqNqN","question":"Средство для глаз?"},
    "q1qYqNqNqY":{"name":"q1qYqNqNqY","question":"Для век?"},
    "q1qYqNqNqYqY":{"name":"q1qYqNqNqYqY","question":"Контуринг?"},
    "q1qYqNqNqYqYqY":{"name":"q1qYqNqNqYqYqY","question":"Подводка"},
    "q1qYqNqNqYqYqN":{"name":"q1qYqNqNqYqYqN","question":"Тени"},
    "q1qYqNqNqYqN":{"name":"q1qYqNqNqYqN","question":"Тушь!"},
    "q1qYqNqNqN":{"name":"q1qYqNqNqN","question":"Лицо?"},
    "q1qYqNqNqNqN":{"name":"q1qYqNqNqNqN","question":"Лак!"},
    "q1qYqNqNqNqY":{"name":"q1qYqNqNqNqY","question":"База?"},
    "q1qYqNqNqNqYqY":{"name":"q1qYqNqNqNqYqY","question":"Праймер!"},
    "q1qYqNqNqNqYqN":{"name":"q1qYqNqNqNqYqN","question":"Тональное средство!"},
    "q1qN":{"name":"q1qN","question":"Для лица?"},
    "q1qNqY":{"name":"q1qNqY","question":"Очишающие?"},
    "q1qNqYqY":{"name":"q1qNqYqY","question":"Мицелярная вода!"},
    "q1qNqYqN":{"name":"q1qNqYqN","question":"Тонизирующие?"},
    "q1qNqYqNqY":{"name":"q1qNqYqNqY","question":"Тоник"},
    "q1qNqYqNqN":{"name":"q1qNqYqNqN","question":"Увложняюший крем!"},
    "q1qNqN":{"name":"q1qNqN","question":"Питательное для тела?"},
    "q1qNqNqY":{"name":"q1qNqNqY","question":"Крем!"},
    "q1qNqNqN":{"name":"q1qNqNqN","question":"Косметика для волос?"},
    "q1qNqNqNqY":{"name":"q1qNqNqNqY","question":"Кондиционер!"},
    "q1qNqNqNqN":{"name":"q1qNqNqNqN","question":"Интимная косметика!"}
}`;
var quiz = JSON.parse(personData);

const button = document.querySelector('button')

let dT = 'q1';
function yes() {
    dT += 'qY';
    Sort();
}   
function no() {
    dT +='qN'
   Sort();
}
function start() {
    document.getElementById("Ybutton").disabled = false;
    document.getElementById("Nbutton").disabled = false;
    document.getElementById("StartB").disabled = true;
    dT = 'q1';
    document.getElementById('text').innerHTML = quiz.q1.question;
}
function DisBut(){
    document.getElementById("Ybutton").disabled = true;
    document.getElementById("Nbutton").disabled = true;
    document.getElementById("StartB").disabled = false;
}
function Sort(){
    switch(dT) {
        case quiz.q1qY.name:  
            document.getElementById('text').innerHTML = quiz.q1qY.question;
            break;
        case quiz.q1qYqY.name:
            document.getElementById('text').innerHTML = quiz.q1qYqY.question;
            break;
        case quiz.q1qYqYqY.name:  //1
            document.getElementById('text').innerHTML = quiz.q1qYqYqY.question;
            DisBut()
            break;
        case quiz.q1qYqYqN.name:  //2
            document.getElementById('text').innerHTML = quiz.q1qYqYqN.question;
            DisBut()
            break;
        case quiz.q1qYqN.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqN.question;
            break;
        case quiz.q1qYqNqY.name: //3
            document.getElementById('text').innerHTML = quiz.q1qYqNqY.question;
            DisBut()
            break;
        case quiz.q1qYqNqN.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqNqN.question;
            break;
        case quiz.q1qYqNqNqY.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqY.question;
            break;
        case quiz.q1qYqNqNqYqY.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqYqY.question;
            break;
        case quiz.q1qYqNqNqYqYqY.name: //4
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqYqYqY.question;
            DisBut()
            break;
        case quiz.q1qYqNqNqYqYqN.name:  //5
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqYqYqN.question;
            DisBut()
            break;
        case quiz.q1qYqNqNqYqN.name: //6 
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqYqN.question;
            DisBut()
            break;
        case quiz.q1qYqNqNqN.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqN.question;
            break;
        case quiz.q1qYqNqNqNqN.name: //7
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqNqN.question;
            DisBut()
            break;
        case quiz.q1qYqNqNqNqY.name:  
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqNqY.question;
            break;
        case quiz.q1qYqNqNqNqYqY.name: //8  
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqNqYqY.question;
            DisBut()
            break;
        case quiz.q1qYqNqNqNqYqN.name:  //9
            document.getElementById('text').innerHTML = quiz.q1qYqNqNqNqYqN.question;
            DisBut()
            break;
        case quiz.q1qN.name:  
            document.getElementById('text').innerHTML = quiz.q1qN.question;
            break;
        case quiz.q1qNqY.name:
            document.getElementById('text').innerHTML = quiz.q1qNqY.question;
            break;
        case quiz.q1qNqYqY.name: //10 
            document.getElementById('text').innerHTML = quiz.q1qNqYqY.question;
            DisBut()
            break;
        case quiz.q1qNqYqN.name:  
            document.getElementById('text').innerHTML = quiz.q1qNqYqN.question;
            break;
        case quiz.q1qNqYqNqY.name:  //11
            document.getElementById('text').innerHTML = quiz.q1qNqYqNqY.question;
            DisBut()
            break;
        case quiz.q1qNqYqNqN.name: //12
            document.getElementById('text').innerHTML = quiz.q1qNqYqNqN.question;
            DisBut()
            break;
        case quiz.q1qNqN.name: 
            document.getElementById('text').innerHTML = quiz.q1qNqN.question;
            break;
        case quiz.q1qNqNqY.name: //13
            document.getElementById('text').innerHTML = quiz.q1qNqNqY.question;
            DisBut()
            break;
        case quiz.q1qNqNqN.name: 
            document.getElementById('text').innerHTML = quiz.q1qNqNqN.question;
            break;
        case quiz.q1qNqNqNqY.name: //14 
            document.getElementById('text').innerHTML = quiz.q1qNqNqNqY.question;
            DisBut()
            break;
        case quiz.q1qNqNqNqN.name: //15 
            document.getElementById('text').innerHTML = quiz.q1qNqNqNqN.question;
            DisBut()
            break;
        default:
          console.log('Конец');
      }
}