// Registration Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('registration-modal');
    const registerBtn = document.querySelector('.register-btn');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('registration-form');

    // Open modal when register button is clicked
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    // Close modal when X is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                company: document.getElementById('company-name').value,
                contact: document.getElementById('contact-person').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                country: document.getElementById('country').value,
                minerals: document.getElementById('minerals').value,
                capacity: document.getElementById('production-capacity').value
            };

            // Here you would normally send data to server
            console.log('Registration submitted:', formData);
            
            // Show success message
            alert('Thank you for registering! We will contact you shortly.');
            
            // Close modal and reset form
            modal.style.display = 'none';
            form.reset();
        });
    }

    // Gallery Lightbox Functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.gallery-caption').textContent;
            
            lightbox.querySelector('.lightbox-img').src = imgSrc;
            lightbox.querySelector('.lightbox-caption').textContent = caption;
            lightbox.style.display = 'block';
        });
    });

    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
