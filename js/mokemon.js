let ataquejugador
let ataqueEnemigo
let resultado
let vidasJugador=3
let vidasEnemigo=3
function iniciarJuego(){
    let sectionSeleccionarReiniciar=document.getElementById("reiniciar")
    sectionSeleccionarReiniciar.style.display="none"
    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="none"
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonReiniciar=document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

    //MASCOTA
    function seleccionarMascotaJugador(){
        let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
        sectionSeleccionarAtaque.style.display="block"
        let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
        sectionSeleccionarMascota.style.display="none"
        let inputHipodoge=document.getElementById("Hipodoge")
        let inputCapipepo=document.getElementById("Capipepo")
        let inputRatigueya=document.getElementById("Ratigueya")
        let spanmascotaJugador=document.getElementById("mascota-jugador")
        if (inputHipodoge.checked){
            spanmascotaJugador.innerHTML="Hipodoge"
        }
        else if (inputCapipepo.checked){
            spanmascotaJugador.innerHTML="Capipepo"
        }
        else if (inputRatigueya.checked){
            spanmascotaJugador.innerHTML="Ratigueya"
        }
        else {
            alert("SELECCIONA UNA MASCOTA")
        }

        seleccionarMascotaEnemigo()
    }

    function seleccionarMascotaEnemigo(){
        let mascotaAleatorio=aleatorio(1,3)
        let spanMascotaEnemigo=document.getElementById("mascota-enemigo")
        if (mascotaAleatorio==1){
            spanMascotaEnemigo.innerHTML="Hipodoge"
        }
        else if(mascotaAleatorio==2){
            spanMascotaEnemigo.innerHTML="Capipepo"
        }
        else if(mascotaAleatorio==3){
            spanMascotaEnemigo.innerHTML="Ratigueya"
        }
    }

    function ataqueFuego(){
        ataquejugador="FUEGO"
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataquejugador="AGUA"
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataquejugador="TIERRA"
        ataqueAleatorioEnemigo()
    }
    function ataqueAleatorioEnemigo(){
        ataquealeatorio=aleatorio(1, 3)
        if (ataquealeatorio==1){
            ataqueEnemigo="FUEGO"
        }
        else if (ataquealeatorio==2){
            ataqueEnemigo="AGUA"
        }
        else if (ataquealeatorio==3){
            ataqueEnemigo="TIERRA"
        }
        combate()
        crearMensaje()
    }
    function combate(){
        let spanvidasjugador=document.getElementById("vidas-jugador")
        let spanvidasenemigo=document.getElementById("vidas-enemigo")
        if(ataquejugador==ataqueEnemigo){
            resultado="EMPATE"

        }
        else if(ataquejugador=="FUEGO" && ataqueEnemigo=="TIERRA" || ataquejugador=="AGUA" && ataqueEnemigo=="FUEGO" || ataquejugador=="TIERRA" && ataqueEnemigo=="AGUA"){
            resultado="GANASTE"
            vidasEnemigo=vidasEnemigo-1
            spanvidasenemigo.innerHTML=vidasEnemigo
        }
        else{
            resultado="PERDISTE"
            vidasJugador=vidasJugador-1
            spanvidasjugador.innerHTML=vidasJugador
        }
        
    }
    function revisarvidas(){
        if (vidasEnemigo==0){
            crearMensajeFinal("FELICITACIONES GANASTE!")
        }
        else if(vidasJugador==0){
            crearMensajeFinal("LO LAMENTO PERDISTE:(")
        }
    }
        
    function crearMensaje(){
        let sectionMensajes=document.getElementById("mensajes")
        let parrafo = document.createElement("p")
        parrafo.innerHTML="Tu mascota ataco con " + ataquejugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultado
        sectionMensajes.appendChild(parrafo)
        revisarvidas()
    }
    function crearMensajeFinal(resultadoFinal){
        let sectionSeleccionarReiniciar=document.getElementById("reiniciar")
        sectionSeleccionarReiniciar.style.display="block"
        let sectionMensajes=document.getElementById("mensajes")
        let parrafo = document.createElement("p")
        parrafo.innerHTML= resultadoFinal
        sectionMensajes.appendChild(parrafo)
        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled=true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled=true
        let botonTierra = document.getElementById("boton-tierra")
        botonTierra.disabled=true
    }
    function reiniciarJuego(){
        location.reload()
    }
    function aleatorio(min, max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    
window.addEventListener("load", iniciarJuego)
