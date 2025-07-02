const loginButton = document.getElementsByClassName("btn_login")[0];

if (loginButton) {
    loginButton.addEventListener("click", handleLogin);
}

function handleLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const form = document.getElementById("form");

    if (user === "admin" && pass === "123") {
        form.action = "../adminPanel/dashboard.html";
    } else if (user === "" || pass === "") {
        alert("please fill up the form");
    } else {
        alert("Incorrect username or password");
    }
}
