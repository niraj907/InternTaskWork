// Function to handle star rating click
function handleStarClick(stars, feedbackForm) {
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            stars.forEach((s, i) => {
                i < rating ? s.classList.add('rating__star--active') : s.classList.remove('rating__star--active');
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
    
    alert('Feedback form successfully submitted!!!');
    console.log(`Feedback submitted: ${rating}, ${name}, ${email}, ${comments}`);
    
    // Clear the form data
    feedbackFormElement.reset();
    
    // Optionally hide the form again after submission
    feedbackForm.style.display = 'none';
});