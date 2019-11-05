function generateURL(numberOfDogs){
    console.log(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`);
    return `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;

}

function listenToNumber(){
    let numberDogs = $('form').find('input[type="number"]').val();
    if(numberDogs<=50 && numberDogs>=1){
        return generateURL(numberDogs);
    }else{
        throw alert('Enter a number between 1 and 50');
    }
}


function displayResults(responseJson) {
    console.log(responseJson);
}

function getDogImages(URL){
    fetch(URL)
    .then(response => {
        if(response.ok){
           return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong'));
}



function watchForm(){
    $('form').on('click', 'button', function(e){
        e.preventDefault();
        let apiURL = listenToNumber();
        getDogImages(apiURL);
    })
}


$(watchForm);