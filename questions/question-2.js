function Funcao (texto, vezes) {
    let string, i;

    for(i = 0; i < vezes; i++) {
        if(i == 0)
            string = texto + ', ';
        else
            string = string + texto + ', ';
    }

    return console.log(string + vezes);
}

