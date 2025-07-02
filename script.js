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

form.addEventListener('submit', function (e) {
    e.preventDefault(); // ➤ μπλοκάρει την προεπιλεγμένη συμπεριφορά (υποβολή HTML)

    // ➤ εμφάνιση του loader
    loader.style.display = 'block';

    // ➤ αποστολή του email μέσω EmailJS
    emailjs.sendForm('service_mygmail', 'template_contactyou', this)
        .then(function () {
            // Απόκρυψη loader και εμφάνιση μηνύματος επιτυχίας
            loader.style.display = 'none';
            alert('✅ Το μήνυμα στάλθηκε επιτυχώς!');
            form.reset(); // καθάρισε τη φόρμα
        }, function (error) {
            // Απόκρυψη loader και εμφάνιση μηνύματος αποτυχίας
            loader.style.display = 'none';
            alert('❌ Αποτυχία αποστολής. Προσπάθησε ξανά αργότερα.');
            console.error('EmailJS Error:', error);
        });
});