body = document.querySelector('body');

button = document.createElement('button');
button.textContent = 'Показать список';
body.append(button);

function createStudentCard (obj) {
    let li = document.createElement('li');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    h2.textContent = obj.name;
    span.textContent = obj.age;

    li.append(h2, span);
    return li;
}

function createStudentsList (listArr) {
    let ul = document.createElement('ul');
    
    for(let student of listArr) {
        ul.append(createStudentCard(student));
    }

    return ul;
}

button.addEventListener('click', function() {
    let studentsList = createStudentsList(allStudents);
    body.append(studentsList);
});

let allStudents = [
    {name: 'Валя', age:'Возраст: 11 лет'},
    {name: 'Таня',age: 'Возраст: 24 лет'},
    {name: 'Рома',age: 'Возраст: 21 лет'},
    {name: 'Надя', age: 'Возраст: 34 лет'},
    {name: 'Антон', age: 'Возраст: 7 лет'}
];