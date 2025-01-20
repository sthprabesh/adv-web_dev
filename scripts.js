/*document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
	console.log('Document is ready');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    console.log('Document is ready');

    // Smooth scrolling
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active link on scroll
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        sections.forEach(function(section, index) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 100) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                navLinks[index].classList.add('active');
            }
        });
    });


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && validateEmail(email) && message.length >= 10) {
            alert("Form submitted successfully!");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
        } else {
            alert("Please fill all fields correctly.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

