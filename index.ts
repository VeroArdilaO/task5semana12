/*1- Define una función que reciba como parámetro cualquiera de las siguientes clases de eventos("concierto", "obra de teatro", "Evento deportivo") y devuelva la locación para este evento
concierto → teatro

obra de teatro → Foro

Evento deportivo → Coliseo */


 class  Concierto  {
    evento: string
    locacion: string;
}

class ObraDeTeatro {
    evento: string;
    locacion: string;
}

class EventoDeportivo  {
    evento: string;
    locacion: string;
}
type Evento = Concierto | ObraDeTeatro | EventoDeportivo;

const EventoConcierto:Evento = {
  evento: "Concierto",
  locacion: "Teatro"
}

const EventoObraDeTeatro: Evento = {
  evento: "Obra de Teatro",
  locacion: "Foro"
}
const EventoDeportes: Evento = {
  evento: "Evento Deportivo",
    locacion: "Coliseo "
}



function seleccionarEvento(nuevoEvento: Evento):string {
   switch(nuevoEvento.evento){
    case "Concierto":
      return (`La locación para este ${nuevoEvento.evento} es en el ${nuevoEvento.locacion}`)
    case "Obra de Teatro":
       return (`La locación para esta ${nuevoEvento.evento} es en el ${nuevoEvento.locacion}`)
    case  "Evento Deportivo":
      return (`La locación para este  ${nuevoEvento.evento} es en el ${nuevoEvento.locacion}`)
  
   }
}

console.log(seleccionarEvento(EventoConcierto)) // Teatro
console.log(seleccionarEvento(EventoObraDeTeatro)) // Foro
console.log(seleccionarEvento(EventoDeportes)) // Coliseo


/*2- En un avión hay tres clases de boletos:

Boletos de primera clase

Boletos clase económica

Boletos a base de puntos

Todos los boletos tienen origen, destino, precio y asientos

Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar

Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo

Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características */


class PrimeraClase  {
  kind:"Primera Clase";
  origen: string;
  destino:string;
  precio: string;
  asientos: number;
  listaAlimentos: string[];
  cantidadEquipaje: number;
  constructor(origen: string, destino:string,precio:string, asientos:number,listaAlimentos:string[], cantidadEquipaje:number){
  this.origen = origen;
    this.destino = destino;
    this.precio = precio;
    this.asientos = asientos;
    this.listaAlimentos = listaAlimentos;
    this.cantidadEquipaje = cantidadEquipaje;
  

  }
}

class ClaseEconomica  {
  kind: "Clase Económica";
  origen: string;
  destino:string;
  precio: string;
  asientos: number;
  cantidadEquipaje: number;
  constructor(origen: string, destino:string,precio:string, asientos:number, cantidadEquipaje:number){
  this.origen = origen;
    this.destino = destino;
    this.precio = precio;
    this.asientos = asientos;
    this.cantidadEquipaje = cantidadEquipaje;

  }
} 

class BasePuntos  {
  kind: "Base Puntos";
  origen: string;
  destino:string;
  precio: string;
  asientos: number;
  
 constructor(origen: string, destino:string,precio:string, asientos:number){
  
    this.origen = origen;
    this.destino = destino;
    this.precio = precio;
    this.asientos = asientos;
 }
} 

type Reserva = PrimeraClase | ClaseEconomica | BasePuntos;

const BoletoPrimeraClase: Reserva = {
  kind: "Primera Clase",
  origen : "Cancún",
  destino :  "Orlando Florida",
  precio : "US $2000",
  asientos : 2,
  listaAlimentos : [
    "Ensalada de la casa",
    "Arroz Frito", 
    "Sushi", 
    "Pollo con camarones",
    "Jugo natural"],
  cantidadEquipaje: 2
}
const BoletoClaseEconomica: Reserva = {
  kind: "Clase Económica",
  origen : "Cancún",
  destino :  "Orlando Florida",
  precio : "US $1250",
  asientos : 1,
  cantidadEquipaje : 1
}

const BoletoBasePuntos: Reserva = {
  kind: "Base Puntos",
  origen : "Cancún",
  destino :  "Orlando Florida",
  precio : "US $1000",
  asientos : 1,
}


let seleccionarBoleto = (Boleto: Reserva):string => {
 
    switch(Boleto.kind) {

      case "Primera Clase":
      return (` Este boleto  es de ${Boleto.kind},
             partiendo desde la ciudad de  ${Boleto.origen}
             hacia la ciudad de ${Boleto.destino},
             el precio del vuelo es de ${Boleto.precio},
             para un total de  ${Boleto.asientos} asientos VIP, incluye la siguiente lista de alimentos 
             ${Boleto.listaAlimentos} y capacidad para llevar 
             ${Boleto.cantidadEquipaje}  equipajes de 20 kg cada uno`) 

    
    case "Clase Económica" : 
      return (` Este boleto  es de ${Boleto.kind},
             partiendo desde la ciudad ${Boleto.origen}
             hacia la ciudad de ${Boleto.destino},
             el precio del vuelo es de ${Boleto.precio},
             para un total de  ${Boleto.asientos} asiento,
             con capacidad para llevar ${Boleto.cantidadEquipaje} equipaje de 20 kg`)

     case "Base Puntos": 
            return (` Este boleto  es de ${Boleto.kind},
             partiendo desde la ciudad de  ${Boleto.origen}
             hacia la ciudad de ${Boleto.destino},
             el precio del vuelo es de ${Boleto.precio},
             para un total de  ${Boleto.asientos} asiento`) 
    } 
}

//console.log(seleccionarBoleto(BoletoPrimeraClase)) 
console.log(seleccionarBoleto(BoletoClaseEconomica))
//console.log(seleccionarBoleto(BoletoBasePuntos))

            