var obj = {
    nameObj: 'Mouse',
    pesoObj: '150g'
};

function AlterarObj(obj) {
    let array = [];

    obj.nameObj = 'Teclado';
    obj.pesoObj = '500g';

    array.push(obj.nameObj);
    array.push(obj.pesoObj);

    return array;
}