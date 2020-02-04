let formNombres;
formNombres = document.getElementById('formNombres');

formNombres.addEventListener('submit', getData);

function getData(event) {
    event.preventDefault();
    //get option selected
    let pais;
    let numNombres;
    let genero;


    pais = document.getElementById('menuPaises').value;

    genero = document.getElementById('menuGenero').value;

    numNombres = document.getElementById('numNombres').value;

    console.log(pais, genero , numNombres);
    
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

    console.log(url)


}

