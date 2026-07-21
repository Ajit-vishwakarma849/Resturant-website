console.log("website loaded succesfully");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
} )

// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const email=document.getElementById("email").value.trim();

    const phone=document.getElementById("phone").value.trim();

    const message=document.getElementById("message").value.trim();

    if(name==="" || email==="" || phone==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Thank you! Your message has been sent.");

    form.reset();

});