function ControledeWidth(maxW, idElement) {
    maxW = 1170; // question
    let element = document.getElementById(idElement).offsetWidth;
    if(element > maxW)
        console.log('Aviso: o elemento de id "' + idElement + '" está extrapolando a width máxima de ' + maxW + 'px');
}