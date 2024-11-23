
function scrollToSection(section) {
    const element = document.getElementById(section);
    
    if (element) {

        element.style.opacity = 0; // Reset opacity before starting fade
        element.style.animation = 'none'; // Reset animation
        
       sh
        setTimeout(function() {
            element.style.animation = 'fadeInContent 2s forwards';
        }, 10); 
        

        element.scrollIntoView({ behavior: 'smooth' });
    }
}


