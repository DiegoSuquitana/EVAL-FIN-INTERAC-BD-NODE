
$('.loginButton').on('click', function(event) {
    
    var nombreUsuario = $('#user'),
        pass = $('#pass')
    
    if (nombreUsuario.val() != "" && pass.val() != "") {
        $.post('users/login',{usuario: $('#user').val(), psw: $('#pass').val()}, function(response) {
            if (response == "Validado") {
                window.location.href = "http://localhost:8082/main.html"
            }else{
                alert(response);
            }
        })
    } else {
        alert("Complete todos los campos")
    }
})
  