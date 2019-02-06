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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button_to_go_to_top_of_the_page").style.display = "block";
    } else {
        document.getElementById("button_to_go_to_top_of_the_page").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
