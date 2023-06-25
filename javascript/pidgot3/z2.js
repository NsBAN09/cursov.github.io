function enter(){
    let email =document.getElementById("email").value
    let password =document.getElementById("password").value
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user)

    if(email == user.email.length && password == user.password){
        document.getElementById("message").innerHTML = '<div class="alert alert-danger col-6">Помилка</div>'
        user.logen = true;
        localStorage.setItem("user", JSON.stringify(user))
    }else{
        document.getElementById("message").innerHTML = '<div class="alert alert-success col-6">Успіх</div>'
    }
}