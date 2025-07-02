const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

const form = document.getElementById('contact-form');
const loader = document.getElementById('loader');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // αποτρέπουμε την κανονική υποβολή

    // Εμφανίζουμε τον loader
    loader.style.display = 'block';

    // Προσομοίωση καθυστέρησης αποστολής (π.χ. AJAX request ή email API)
    setTimeout(() => {
        loader.style.display = 'none';
        alert("Your message has been sent!");

        // Καθαρίζουμε τη φόρμα (προαιρετικό)
        form.reset();
    }, 2000); // 2 δευτερόλεπτα καθυστέρηση
});
