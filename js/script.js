
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


	required.add('Full_Name','NOT_EMPTY','Full Name');
	required.add('Email_Address','EMAIL','Email Address');
	required.add('Your_Message','NOT_EMPTY','Your Message');
	required.add('AntiSpam','NOT_EMPTY','Anti-Spam Question');
	