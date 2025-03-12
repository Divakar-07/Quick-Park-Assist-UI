function scrollToSlide(slideIndex) {
    const testimonialScroll = document.querySelector('.testimonial-scroll');
    const slideWidth = document.querySelector('.testimonial-slide').clientWidth;
    testimonialScroll.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

    // Update indicators
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

// login page signin and sighnup
function toggleForm() {
    const container = document.getElementById('container');
    container.classList.toggle('active');
}

function signUp(event) {
    event.preventDefault();
    const formData = {
        name: event.target[0].value,
        email: event.target[1].value,
        password: event.target[2].value
    };
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Registration successful!');
    toggleForm();
}

function signIn(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(user && user.email === email && user.password === password) {
        alert('Login successful!');
        window.location.href = "/userdashboard.html"; // Redirect to dashboard
    } else {
        alert('Invalid credentials!');
    }
}

// Add this mobile-specific toggle function
function mobileToggleForm() {
    const signin = document.querySelector('.signin');
    const signup = document.querySelector('.signup');
    
    if(signin.style.display === 'none') {
        signin.style.display = 'block';
        signup.style.display = 'none';
    } else {
        signin.style.display = 'none';
        signup.style.display = 'block';
    }
}