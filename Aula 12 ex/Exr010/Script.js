
function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h `
    
    if (hora >= 5 && hora < 12){
        //Bom dia
        img.src = 'Foto manhã.png'
        document.body.style.backgroundColor = "#83c6f1"
    }
    else if (hora >= 12 && hora< 19)  {
        // Boa tarde
        img.src = 'Foto Tarde.png'
        document.body.style.backgroundColor = "#bf9b7d"
    }
    else {
        // Boa noite
        img.src = 'Foto noite.png'
        document.body.style.backgroundColor = "#303455"
    }

}