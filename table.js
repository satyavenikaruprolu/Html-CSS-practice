

document.getElementById('submit').onclick = () => {
    const number = parseInt(document.getElementById('number').value);
    const card = document.getElementById('card');
    card.textContent = ''        
    if(isNaN(number)){
        card.textContent = 'oops that\'s not a number'
    }else{
        for(let i = 1;  i <= 10;  i++){
            const tag = document.createElement('p');
            tag.textContent = number + " * " + i +  " = " + number * i
            tag.classList.add('table-row');
            card.appendChild(tag)
        }
    }
    
}