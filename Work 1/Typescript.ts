function Login() {
    
   
    const input1 = document.getElementById("name") as HTMLInputElement;
    const input2 = document.getElementById("password") as HTMLInputElement;

      const name:string = input1.value;
      const password:string = input2.value;
      
    if(name === "admin" && password ==="1234"){
        window.location.href = "anasayfa.html";
    }
    else{

        input1.value = "";
        input2.value = "";
        
        alert("şifre yada kullanıcı adınız HATALI lütfen tekrar deneyiniz.");
    }
 
}

