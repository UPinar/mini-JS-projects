(function(){

    'use strict';

    const form = document.querySelector('form');

    const resultContainer = document.querySelector('.result-container')
    
    const resultText = document.createElement('p');


    let conversionType = "KM";
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const distance = document.querySelector('form input[type="text"]')
    
        const distanceValue = parseFloat(distance.value);

        if(conversionType === "KM"){
            if(distanceValue && distanceValue > 0 ){
                let mileValue = (distanceValue / 1.609344).toFixed(3);
        
                console.log(distanceValue)
            
                resultText.innerHTML = `${distanceValue} kilometers is ${mileValue} miles`;
            }
            else{
                resultText.innerHTML = 'Please enter a valid number';
            }
        }
        else if(conversionType === "MK"){
            if(distanceValue && distanceValue > 0 ){
                let kilometerValue = (distanceValue * 1.609344).toFixed(3);
        
                console.log(distanceValue)
            
                resultText.innerHTML = `${distanceValue} miles is ${kilometerValue} kilometers`;
            }
            else{
                resultText.innerHTML = 'Please enter a valid number';
            }
        }
    
        resultContainer.append(resultText);
    })

    const converstionTypeDiv = document.querySelector('.container__text');
    const conversionHeading = document.createElement('h1'); 

    const valueContainerParagraph = document.querySelector('.value-container p');

    ChangeConvertionTypeTexts(conversionType);
    converstionTypeDiv.append(conversionHeading);

    let charAsciiValue = "";
    
    document.addEventListener('keypress', (e)=>{

        charAsciiValue = e.key;

        if(charAsciiValue === "k" || charAsciiValue === "K" ){
            conversionType = "KM";
            ChangeConvertionTypeTexts(conversionType);
        }
        else if(charAsciiValue === "m" || charAsciiValue === "M" ){
            conversionType = "MK";
            ChangeConvertionTypeTexts(conversionType);
        }

    })

    function ChangeConvertionTypeTexts(coversionType){
        if(conversionType == "KM"){
            conversionHeading.innerText = "Kilometers to miles converter";

            valueContainerParagraph.innerText = "Type in a number of kilometers and click the button to convert distance to miles."
        }
        else{
            conversionHeading.innerText = "Miles to kilometers converter";

            valueContainerParagraph.innerText = "Type in a number of miles and click the button to convert distance to kilometers."
        }
    }

}());

