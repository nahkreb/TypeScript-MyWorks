function Login() {
    var input1 = document.getElementById("name");
    var input2 = document.getElementById("password");
    var name = input1.value;
    var password = input2.value;
    if (name === "admin" && password === "1234") {
        window.location.href = "anasayfa.html";
    }
    else {
        input1.value = "";
        input2.value = "";
        alert("şifre yada kullanıcı adınız HATALI lütfen tekrar deneyiniz.");
    }
}
