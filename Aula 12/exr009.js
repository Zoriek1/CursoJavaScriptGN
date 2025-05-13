var agora = new Date
var hora = agora.getHours()

console.log(`agora são exatamente ${hora} horas`)
    
if (hora < 12 && hora > 4 ){
    console.log("ainda está de manhã, BOM DIA!")
}
    else if (hora >= 12 && hora < 18){
        console.log("já está de tarde, BOA TARDE!")
}
        else {
            console.log("Já anoiteceu, BOA NOITE!")
}
            