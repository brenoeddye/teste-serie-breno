function RemoverVogais (string) {
    string = 'Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita.'
    return string.replace(/[aeiouà-ú]/gi,'');
}
