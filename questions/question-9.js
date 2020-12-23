function posDiv() {
    let elements = document.getElementsByTagName('div');

    for(let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("data-id", i);
    }

    return console.log(elements);
}
