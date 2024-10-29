function createStudentCard (student) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');
    
    h2.textContent = student.name;
    span.textContent = student.age;

    div.append(h2, span);
    return div; 
}

let studentObj={
    name: 'Игорь',
    age: 'Возраст: 17 лет'
}

document.body.append(createStudentCard(studentObj)); 
