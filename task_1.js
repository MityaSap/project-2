function createStudentCard (name, age) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    h2.textContent = name;
    span.textContent = age;

    div.append(h2, span);
    return div;
}

document.body.append(createStudentCard('Игорь', 'Возраст: 17 лет'));