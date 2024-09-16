function ready(el) {
    //var name = document.getElementById('name'); через айди
    var name = el.name.value; //через name
    var pass = el.pass.value; //через name
    var repass = el.repass.value; //через name
    var state = el.state.value;


    var error;
    if (name == "" || pass == "" || state == "") {
        var error = "заполните все поля";
    } else if (name.length < 2 || name.length > 50) {
        error = "введите корректное имя";
    } else if (pass != repass) {
        error = "пароли должны совподать!!!";
    } else if (pass.split("$").length > 1) {//split delit stroku na 2 chasti v novom spiske при наличии $, а ленгз проверяет длину списка 
        error = 'ne ispolzuyte simbol "$"'
    }

    if (error != "") {
        document.getElementById("error").innerHTML = error;
        return false;
    } else {
        alert("все заполнено корректно :)")
        //return true; # для обновления страницы 
        return false; // иначе страница обновится на месте и никакого перевода не будет
    }


    return false;
}

function cansel(){
    alert('Test Message')
    //let formRegister = document.querySelector(".formRegister");
    //formRegister.style.transform = "scale(0)";
}