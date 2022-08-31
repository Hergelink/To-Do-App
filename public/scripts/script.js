
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.getElementById('list');







form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    inputValue = input.value;
    
    if(inputValue !== "") {
        const listItem = document.createElement('li'); 
        

        listItem.classList.add('list-item'); // added html class name.
        

        listItem.appendChild(document.createTextNode(inputValue));

        list.appendChild(listItem);
       

      
    }

    input.value = ""; //delete the input after submit

});





    






function clearAll() {
    list.innerHTML = "";
}

deleteButton.addEventListener('click', clearAll);






