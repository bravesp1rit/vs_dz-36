void function(){
'use strict';

const liElements = document.getElementById('ulId').getElementsByTagName('li');
let arrOfLi = [];

for(let i = 0; i < liElements.length; i++){
    arrOfLi.push(liElements[i].textContent);
    if(i == liElements.length - 1){
        console.log('Общее количество элементов:', liElements.length);
    }
}
console.log(arrOfLi);

}()