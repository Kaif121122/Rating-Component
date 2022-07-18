// DOM ELEMENTS 

const submitButton = document.getElementById('submit-btn');
const userRating = document.getElementById('user-rating');
const ratingButtons = document.querySelectorAll('.rating');
const ratingSection = document.querySelector('.rating-section');
const thankSection = document.querySelector('.thanks-section');
let rateNumber;

// Loop For Which Button Get Clicked 

for (let i = 0; i < ratingButtons.length; i++) {

    ratingButtons[i].addEventListener('click', () => {
        removeActive();
        ratingButtons[i].classList.add('rating-active');

        rateNumber = ratingButtons[i].textContent;
        userRating.textContent = rateNumber;

    })

}
// Remove Other Active Buttons 

function removeActive() {
    ratingButtons.forEach(buttons => {

        buttons.classList.remove('rating-active');

    })
}

// Submit Button 

submitButton.addEventListener('click', () => {
    if (rateNumber > 0) {

        ratingSection.classList.add('none');
        thankSection.classList.add('block');
    }

})
