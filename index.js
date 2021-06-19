function getUsers() {

    var users = ["924835", "924836", "222924835", "33924835", "924837"]

    for (var i = 0; i < users.length; i += 1) {
        var url = 'https://www.3djuegos.com/comunidad.php?zona=perfil&id_perfil=' + users[i]

        fetch(url).then(response => {
            var responseURL = response.url
            var id = responseURL.split("perfil=");

            var userCardHTML = ""

            if (response.status === 200) {
                userCardHTML = ` <div class="card">    
                <div class="userCard"> ` + id[1] + ` Está en 3d juegos!</div>
                </div> `
            } else {
                userCardHTML = ` <div class="card">
                <div class="userCard"> ` + id[1] + ` No está en 3d juegos!</div>
                </div> `
            }

            $('.container').append(userCardHTML)

            setTimeout(function () {
                $(".card").css("display", "none");
            }, 3000);

        })
    }
}

/*response.json().then(function (showCards) {
    for (var i = 0; i < users.length; i++) {
        var userCard = users[i]

        var userCardHTML = `<div class="user-card">
        `+ users[i]` </div> `
        $('.user-card').append(userCardHTML)
    }
})
*/
