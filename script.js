document.getElementById("donorForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const contact = document.getElementById("contact").value;
    const location = document.getElementById("location").value;

    alert(`Thank you ${name}! Your donation details have been recorded.`);
    

});
