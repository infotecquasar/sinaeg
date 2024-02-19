function focusById(idDiv) {
    var div = document.getElementById(idDiv);

    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
        div.focus();
    }
    
} 