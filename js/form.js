function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username == "") {
        document.getElementById("username-error").style.display = "block";
        return false;
    } else {
      document.getElementById("username-error").style.display = "none";
    }

    if (email == "") {
        openModal("E-posta boş olamaz.");
        return false;
    }

    if (password == "") {
        openModal("Parola boş olamaz.");
        return false;
    }

    return true;
}

function openModal(message) {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
    modalText.innerHTML = message;
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}