(function(){
    'use strict'

    const formElement = document.querySelector('.form-container');

    const wishListHeader =  document.querySelector('.card-container h2');
    
    const cardElement = document.querySelector('.card-container')
    
    if (cardElement.children.length === 1){
        wishListHeader.textContent = "My Wish List";
    }
    
    formElement.addEventListener('submit', handleFormSubmit, false);
    
    formElement.addEventListener('submit', addButtons, false);
    
    function addButtons(){
        if (cardElement.children.length === 3){
    
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            buttonContainer.style.display = "flex";
            buttonContainer.style.justifyContent = "space-between";
            buttonContainer.style.marginTop = "1rem"
            cardElement.append(buttonContainer);
        
            const previousButton = document.createElement('button');
            previousButton.innerText = 'Previous';
            previousButton.style.padding = "0.5rem 1rem";
            previousButton.style.width = "50%";
            buttonContainer.append(previousButton);
        
            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next';
            nextButton.style.padding = "0.5rem 1rem";
            nextButton.style.width = "50%";
            buttonContainer.append(nextButton);
    
    
            let shownCardIndex;
            let allCards;
    
            previousButton.addEventListener('click', () =>{
                allCards = document.querySelectorAll('.card');
           
                for (let i = 0;  i < allCards.length; i++){
                     if (allCards[i].style.visibility === "visible"){
                        shownCardIndex = i;
                        if (shownCardIndex != 0){
                            allCards[shownCardIndex].style.visibility = "hidden";
                            allCards[shownCardIndex - 1].style.visibility = "visible";
                            const cardImage = allCards[i - 1].getElementsByTagName('img')[0];
                            wishListHeader.innerText = cardImage.alt;
                            shownCardIndex = i - 1;
                            return;
                        }
                    }  
                }
            })
    
            nextButton.addEventListener('click', () =>{
                allCards = document.querySelectorAll('.card');
    
                for (let i = 0;  i < allCards.length; i++){
                    if (allCards[i].style.visibility === "visible"){
                        shownCardIndex = i;
                        if (shownCardIndex != allCards.length - 1){
                            allCards[shownCardIndex].style.visibility = "hidden";
                            allCards[shownCardIndex + 1].style.visibility = "visible";
                            const cardImage = allCards[i + 1].getElementsByTagName('img')[0];
                            wishListHeader.innerText = cardImage.alt;
                            shownCardIndex = i + 1;
                            return;
                        }
                    }  
                }
            })
    
        }
    }
    
    
    function handleFormSubmit (e){
        e.preventDefault();
    
        const formDestination = e.target.elements["destination"].value;
        const formLocation = e.target.elements["location"].value;
        const formPhotoUrl = e.target.elements["photo"].value;
        const formDescription = e.target.elements["description"].value;
    
        clearFormElements();
        createCard(formDestination,formLocation,formPhotoUrl, formDescription);
        
    }
    
    function clearFormElements (){
        for (let i = 0; i < formElement.length - 1; i++){
            formElement.elements[i].value = "";
        }
    }
    
    
    function createCard (name, location, photoUrl, description){
    
        const allCards = document.querySelectorAll('.card');
    
        for (let i = 0;  i < allCards.length; i++){
            allCards[i].style.visibility = "hidden";
        }
    
        const cardDiv = document.createElement('div');
        cardDiv.style.visibility = "visible";
        cardDiv.classList.add('card');
        
    
        cardElement.append(cardDiv);
    
        wishListHeader.innerText = name;
    
        const cardImage = document.createElement('img');
        cardImage.setAttribute('alt', name);
        if (!photoUrl){
            photoUrl = '../images/signpost.jpg';
        }
        cardImage.setAttribute('src', photoUrl);
        cardDiv.append(cardImage);
    
        const cardLocation = document.createElement('h3');
        cardLocation.innerText = location;
        cardDiv.append(cardLocation);
    
        const cardDescription =  document.createElement('h4');
        cardDescription.innerText = description;
        cardDiv.append(cardDescription);
    
    }
})();

