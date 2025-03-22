// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable Screenshot using Keyboard Shortcuts
document.addEventListener("keydown", function(event) {
    if (
        event.key == "PrintScreen" ||
        (event.ctrlKey && event.key === "s") ||  // Ctrl + S (Save Page)
        (event.ctrlKey && event.shiftKey && event.key === "I") ||  // Ctrl + Shift + I (Inspect Element)
        (event.ctrlKey && event.shiftKey && event.key === "C") ||  // Ctrl + Shift + C (Developer Tools)
        (event.ctrlKey && event.key === "u")  // Ctrl + U (View Source)
    ) {
        event.preventDefault();
        alert("This action is disabled!");
    }
});

// Prevent Dragging Images
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

// Disable Screenshot by Overriding Print Screen
document.addEventListener("keyup", function(event) {
    if (event.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots are disabled!");
    }
});



// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Down Animation
const scrollDown = document.querySelector('.scroll-down');
scrollDown.addEventListener('click', () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Animate Scroll Down Indicator
function animateScrollDown() {
    scrollDown.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        scrollDown.style.transform = 'translateY(0)';
    }, 500);
}
setInterval(animateScrollDown, 1000);

//TO SHOW THE EXCEL SHEET
const scriptURL = 'https://script.google.com/macros/s/AKfycbx3zXiXOcxoWpSxku8nvttY88B_TF4ZLyJLft1RNqKxDohTNQCvfqDL--3Xog4yDA0h/exec'; // Replace with your Web App URL
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            successMessage.style.display = "block"; 
            form.reset();
            setTimeout(() => { successMessage.style.display = "none"; }, 3000);
        } else {
            alert("Error submitting form. Please try again.");
        }
    } catch (error) {
        console.error('Error!', error);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".accomp-card");

    cards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const certCards = document.querySelectorAll(".cert-card");

    certCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select all images inside the certification grid
    const certImages = document.querySelectorAll(".cert-card img");

    // Create modal structure dynamically
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const closeModal = document.createElement("span");
    closeModal.classList.add("close");
    closeModal.innerHTML = "&times;";

    const modalImg = document.createElement("img");
    modalImg.classList.add("modal-content");

    modal.appendChild(closeModal);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Event Listener for each image click
    certImages.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close modal on clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
