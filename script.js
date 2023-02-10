const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const mensage = form.elements["msg"].value;
   
    alert(`Nome : ${name}, Email : ${email} ,Mensagem: ${mensage}`)
});
