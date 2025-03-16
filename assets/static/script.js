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

//test
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle modal opening and closing
    function setupModal(modalId, buttonClass, closeClass) {
        const modal = document.getElementById(modalId);
        const openBtn = document.querySelector(`.${buttonClass}`);
        const closeBtns = document.querySelectorAll(`.${closeClass}`);

        if (openBtn) { 
            openBtn.addEventListener("click", function () {
                modal.style.display = "flex";
            });
        }

        closeBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Function to handle image preview
    function setupImagePreview(inputId, previewId) {
        const input = document.getElementById(inputId);
        const preview = document.getElementById(previewId);

        if (input && preview) {
            input.addEventListener("change", function (event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        preview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }

    // Set up modals
    setupModal("userModal", "update-profile-btn", "modal1-close");
    setupModal("vehicleModal", "add-vehicle-btn", "modal2-close");

    // Set up image previews
    setupImagePreview("profileUpload", "profilePreview");
    setupImagePreview("vehicleUpload", "VehiclePreview");
});
