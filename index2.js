function getUsers() {

    var users = ["924835", "924836", "222924835", "33924835", "924837"]

    for (var i = 0; i < users.length; i += 1) {
        var url = 'https://www.3djuegos.com/comunidad.php?zona=perfil&id_perfil=' + users[i]

        fetch(url).then(response => {
            var responseURL = response.url
            var responseIsOk = response.status === 200
            var splitURL = responseURL.split("perfil=");
            var id = splitURL[1]

            var userCardHTML = getUserCardHTML(id, responseIsOk)

            $('.container').append(userCardHTML)
            setTimeout(function () {
                $(".card").css("display", "none");
            }, 3000);

        })
    }
}

function getUserCardHTML(userID, userExists) {
    var noString = ""
    if (!userExists) {
        noString = "No"
    }

    return ` 
        <div class="card">
        <div class="userCard"> ` + userID + " - " + noString` está en 3d juegos!</div>
        </div> `
}

