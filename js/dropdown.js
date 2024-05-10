function saFunction() {
    document.getElementById("saDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.sa-drop-button')) {
        var saDropdown = document.getElementById("saDropdown");
        if (saDropdown.classList.contains('show')) {
            saDropdown.classList.remove('show');
        }
    }
}

// İlk sekmeye gitmek için JavaScript kodu
document.addEventListener("DOMContentLoaded", function() {
    
    var firstTab = document.querySelector('.dropdown-menu .dropdown-item:first-child');
    
    if (firstTab) {
        firstTab.click();
    }
});
