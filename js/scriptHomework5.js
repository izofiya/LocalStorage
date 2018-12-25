//Превратите объект leader из примера ниже в JSON:
/*var leader = {
    name: "Василий Иванович",
    age: 35
  };
  var leaderStr = JSON.stringify(leader);
  console.log(leaderStr);

  var leaderParse = JSON.parse(leaderStr);
  console.log(leaderParse);*/

/* 1. Заведите функцию sum, которая считает сумму аргументов и 
сохраняет его в localStorage. Если в localStorage уже сохранен
результат предыдущего запуска, она сохраняет сумму предыдущего 
результата и нового.*/

function sum(a, b) {
    let result = a + b;
    const saved = localStorage.getItem('keySum');
    if(saved) {
        console.log(result += parseInt(saved));
    } else {
        console.log(result); 
    }
    localStorage.setItem('keySum', result);
};
sum(2, 2);
sum(3, 2);
sum(1, 2);


// Второй вариант
function sum2(arguments) {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
       result += arguments[i];
    }
    const saved = localStorage.getItem('keySum2');
    if(saved) {
        console.log(result += parseInt(saved));
    } else {
        console.log(result); 
    }
    localStorage.setItem('keySum2', result);
};
sum2([3, 3, 3]);
sum2([1, 1, 1]);
sum2([2, 2, 2]);


/*2. Заведите таблицу задач. Одна строка - одна задача. 
Есть input и кнопка для добавления. 
Задачи не должны теряться при перегрузке страниц.
Подумайте как организовать данные, в какой структуре.

3. Добавьте к задаче признак выполнена/невыполнена. В таблице это
checkbox. Подумайте, как это отразить в структуре данных.*/ 

var butt = document.querySelector('#butt');
var inp = document.querySelector('#inp');
var ulTaskList = document.querySelector('#taskList');

var TaskList;
function toLocal() {
    TaskList = ulTaskList.innerHTML;
    localStorage.setItem('TaskList', TaskList)
}
function onClickNewElement() {
    var li = document.createElement('li');
    ulTaskList.appendChild(li);
    li.innerHTML = inp.value + '<input type="checkbox">';
    li.style.border = "1px solid black";
    li.style.backgroundColor = "pink";
    li.style.display = "block";
    li.style.width = "350px";
    toLocal();
    inp.value = '';
}
if (localStorage.getItem('TaskList')) {
    ulTaskList.innerHTML = localStorage.getItem('TaskList');
}
butt.addEventListener('click', onClickNewElement);

/*var todoList = [];
if (localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    out1();
}

document.getElementById('add').onclick = function () {
    var d = document.getElementById('in');
    var temp = {};
    temp.todo = d.value;
    temp.check = false;
    var i = todoList.length;
    todoList[i] = temp;
    d.value = '';
    console.log(todoList);
    out1();
    localStorage.setItem('todo', JSON.stringify(todoList));
 }
 
 function out1() {
     var out = ''; 
     for (var key in todoList) {
         if(todoList[key].check === true) {
            out += '<input type="checkbox" checked>';
         } else {
            out += '<input type="checkbox">';
         }
        out += todoList[key].todo + '<br>';
     }
     var div1 = document.getElementById('out');
    div1.innerHTML = out;
 }
*/









