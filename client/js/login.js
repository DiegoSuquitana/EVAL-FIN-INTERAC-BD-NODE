
$('#login').on('click', function(event) {
    
    var nombreUsuario = $('#user'),
        pass = $('#pass')
    
    if (nombreUsuario.val() != "" && pass.val() != "") {
        $.post('users/login',{usuario: $('#user').val(), psw: $('#pass').val()}, function(response) {
            if (response == "Validado") {
                // Check browser support
                    //if (typeof(Storage) !== "undefined") {
                        // Store
                    localStorage.setItem("sesion", nombreUsuario.val());
                        // Retrieve
                        //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
                    //} else {
                      //  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
                    //}
                window.location.href = "http://localhost:8082/main.html"
            }else{
                alert(response);
            }
        })
    } else {
        alert("Complete todos los campos")
    }
})