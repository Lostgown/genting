onload = function auth() {
    var auth = localStorage.getItem('auth');
    let btnLogin = document.getElementById("btn-login");
    let btnProfile = document.getElementById("btn-profile");

    if(auth == 0) {
        btnProfile.style.display = "block";
        btnLogin.style.display = "none";
    } 

    
}