export function Tama(felicidad, energia, diversion, estado, mensaje){
    this.felicidad = felicidad;
    this.energia = energia;
    //this.suciedad = suciedad;
    this.diversion = diversion;
   // this.salud = salud;
   // this.amor = amor;
    this.estado = 0;
    this.mensaje = "Esperando a que jueguen conmigo";
    console.log("Mascota creada");

}

Tama.prototype.comer = function () {
    this.felicidad++
    this.energia++;
    
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