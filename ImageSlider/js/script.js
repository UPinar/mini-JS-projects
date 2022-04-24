(function(){
    "use strict";

    const myImages = ['../images/image1.jpg',
            '../images/image2.jpg',
            '../images/image3.jpg',
            '../images/image4.jpg',
            '../images/image5.jpg']

    let imageIndex = 0;

    const imageContainer = document.querySelector('.image-container')

//CREATE FIRST IMAGE
const imageFile = document.createElement('img');
imageFile.src = myImages[imageIndex];
imageContainer.appendChild(imageFile);


const buttons =  document.querySelectorAll('.button-container a');

//Button[0] is previous 
//Button[1] is next
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {

        let returnImage;

    

        if (i === 0){
            if(imageIndex !== 0){
                imageIndex--;
            }
            else{
                imageIndex = myImages.length - 1;
            }
            returnImage = addImage(imageIndex);
            addAnimationImage(returnImage);
        }
        else{
            if(imageIndex !== myImages.length - 1){
                imageIndex++;
            }
            else{
                imageIndex = 0;
            }
            returnImage = addImage(imageIndex)
            addAnimationImage(returnImage);
        }
    })
}


function addImage(imageIndex){
    const imageFile = document.createElement('img');
    imageFile.setAttribute('src', myImages[imageIndex]);
    imageContainer.appendChild(imageFile);

    return imageFile;
}

function addAnimationImage(image){

    const count = imageContainer.childElementCount;
    if(count > 2 ){
        imageContainer.removeChild(imageContainer.firstChild);
    }

    image.classList.add("animation");
    // setTimeout(() => {
    //     image.classList.remove("animation");
    // }, 2000);
}
})();





