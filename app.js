let formNombres;
formNombres = document.getElementById('formNombres');

formNombres.addEventListener('submit', getData);

function getData(event) {
    event.preventDefault();
    //Obtencion datos del form
    let pais;
    let numNombres;
    let genero;


    pais = document.getElementById('menuPaises').value;

    genero = document.getElementById('menuGenero').value;

    numNombres = document.getElementById('numNombres').value;

    
    //Armado de las URL de la API
    let url = '';

    url += 'https://uinames.com/api/?'

    //endpoints
    if(pais !== '0'){
        url += `region=${pais}&`;
    }

    if(genero !== '0'){
        url += `gender=${genero}&`;
    }

    if(numNombres !== ''){
        url += `amount=${numNombres}&`;
    }

    //Obtencion de los datos y dibujado en el DOM
    let names;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onload = function(){
        let names = JSON.parse(xhr.responseText);
        let listNames = document.getElementById('listNames');
        listNames.innerHTML = '';
        let li ;
        for (const namePerson of names) {
            li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = namePerson.name;
            listNames.appendChild(li);
        }
    }

    xhr.send();

}

