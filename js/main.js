/**
 * Created by dimitar on 03/02/2019.
 */
function toggleHamburgerButtonFunction() {
    document.getElementById("collapse_target").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.navbar-toggler')) {
        var dropdowns = document.getElementsByClassName("navbar-collapse");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeText(obj, text) {

    obj.innerText = text;
}

var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("message","req","Please provide your message");
frmvalidator.addValidation("email","email", "Please enter a valid email address");

