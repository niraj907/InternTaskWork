// Function to handle star rating click
function handleStarClick(stars, feedbackForm) {
    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('rating__star--active');
                } else {
                    s.classList.remove('rating__star--active');
                }
            });

            if (feedbackForm) {
                if (rating <= 3) {
                    feedbackForm.style.display = 'block';
                    document.querySelector('#rating').value = rating;
                } else {
                    window.location.href = 'https://maps.app.goo.gl/FBx7hfeKAhiBpiMH8';
                }
            }
        });
    });
}

// Function to reset star ratings
function resetStarRatings(stars) {
    stars.forEach((star) => {
        star.classList.remove('rating__star--active');
    });
}

// Initialize rating for hotel details
const hotelRatingStars = document.querySelectorAll('.hotel-details .rating__star');
handleStarClick(hotelRatingStars);

// Initialize rating for rating system
const ratingInterfaceStars = document.querySelectorAll('.rating-system__interface .rating__star');
const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormElement = feedbackForm.querySelector('form'); // Select the form element
handleStarClick(ratingInterfaceStars, feedbackForm);

// Handle feedback form submission
feedbackFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const rating = document.querySelector('#rating').value;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const comments = document.querySelector('#comments').value;
    
    //  pop-up feedback message using SweetAlert2 
    Swal.fire({
        title: "Good job!",
        text: "Feedback form successfully submitted!!!",
        icon: "success",
        button: "OK"
    });

    console.log(`Feedback submitted: ${rating}, ${name}, ${email}, ${comments}`);
    
    // Clear the form data
    feedbackFormElement.reset();
    
    // Reset star ratings
    resetStarRatings(ratingInterfaceStars);
    
    // Optionally hide the form again after submission
    feedbackForm.style.display = 'none';
});
