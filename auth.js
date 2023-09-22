onload = function auth() {
    var auth = localStorage.getItem('auth');
    let btnLogin = document.getElementById("btn-login");

    if(auth == 0) {
        btnLogin.style.display = "none";
    } 

    
}