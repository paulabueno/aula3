const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    ''
    e.preventDefault();

    const name = document.getElementsById("name").value;
    const email = document.getElementsById("email").value;
    const mensage = document.getElementsById("msg").value;
   
    alert(name, email, mensage)
});

