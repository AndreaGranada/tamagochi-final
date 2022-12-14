export function Tama(felicidad, energia, diversion, estado, mensaje){
    this.felicidad = felicidad;
    this.energia = energia;
    //this.suciedad = suciedad;
    this.diversion = diversion;
    //this.salud = salud;
    //this.amor = amor;
    this.estado = 0;
    this.mensaje = "Hazme caso desgraciao";
    this.machango = document.getElementById('machanguito')
    console.log("Mascota creada");
}

Tama.prototype.comer = function (alimento) {
   //this.energia = this.energia +
   
    if(this.energia >= 100){
        this.felicidad --
        return 'Estoy llenito'
    } else if( this.energia > 0){
        this.machango.src = "./images/cama.png"
        this.felicidad++
        this.energia++;
        return '¡DAAME DE COMER!'
    } else {
        return 'Los muertos no hablan'
    }
}

Tama.prototype.sueño = function () {
    this.felicidad++
    this.energia++;
}

Tama.prototype.juego = function () {
    this.felicidad++;
    this.energia--;
    //this.suciedad - 4
    this.diversion++;
    //this.amor++;
}
