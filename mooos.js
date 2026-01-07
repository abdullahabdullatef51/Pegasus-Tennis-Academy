// --- Scroll Reveal Animation ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});


// --- Form Validation ---
// Checking if the form exists on the current page to avoid errors on index.html
const contactForm = document.getElementById('contactform');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;
        const formGroups = document.querySelectorAll('.form-group');

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorSpan = group.querySelector('.error-msg');

            // Only validate if input exists in this group
            if (!input) return;

            // Clear previous errors
            if (errorSpan) errorSpan.textContent = '';
            input.style.borderColor = "#ddd";

            // 1. Check Required fields
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                if (errorSpan) errorSpan.textContent = 'This field is required';
                input.style.borderColor = "red";
            }

            // 2. Email Validation
            if (input.type === 'email' && input.value.trim() !== '') {
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(input.value.trim())) {
                    isValid = false;
                    if (errorSpan) errorSpan.textContent = 'Please enter a valid email address';
                    input.style.borderColor = "red";
                }
            }

            // 3. Phone Validation (Simple check for Egyptian numbers or general length)
            if (input.type === 'tel' && input.value.trim() !== '') {
                if (input.value.length < 10 || isNaN(input.value)) {
                    isValid = false;
                    if (errorSpan) errorSpan.textContent = 'Please enter a valid phone number';
                    input.style.borderColor = "red";
                }
            }
        });

        // If Valid, simulate submission
        if (isValid) {
            // In a real scenario, you would do contactForm.submit() here or fetch()
            const msg = document.getElementById('msg');
            if (msg) {
                msg.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // contactForm.reset(); // Optional: reset after success
            alert('Form Submitted Successfully!');
        }
    });
}
