
$('.loginButton').on('click', function(event) {
    alert("login");
    
    var nombreUsuario = $('#user'),
        pass = $('#pass')
    
    if (nombreUsuario.val() != "" && pass.val() != "") {
        $.post('users/login',{email: $('#user').val(), psw: $('#pass').val()}, function(response) {
            if (response == "Validado") {
                //window.location.href = "http://localhost:3000/main.html"
                window.location.href = "http://localhost:8082/main.html"
            }
        })
    } else {
        alert("Complete todos los campos")
    }
})
  