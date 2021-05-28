# task 5 semana 12

### Introducción

Se realizaron dos ejercicios, correspondientes a la task 5 de la semana 12 del programa BeeSoft Labs,sobre programación orientada a 
objetos, temas unión de tipos, intersección de tipos, tipos literales, alias de tipos y uniones discriminadas.

### Enunciados

1. Define una función que reciba como parámetro cualquiera de las siguientes clases de eventos("concierto", "obra de teatro", "Evento deportivo") y devuelva la locación para este evento
concierto → teatro

obra de teatro → Foro

Evento deportivo → Coliseo

2. En un avión hay tres clases de boletos:
Boletos de primera clase

Boletos clase económica

Boletos a base de puntos

Todos los boletos tienen origen, destino, precio y asientos

Los de clase económica y de primera clase tienen la cantidad de equipaje que pueden llevar

Los de primera clase tienen una lista de alimentos que se les va a dar durante el vuelo

Escribe una función que reciba un boleto e imprima de que tipo es el boleto y sus características.

### Solución

Se utilizaron clases para el modelado de los objetos para cada enunciado, se hizo la unión de tipos, 
se inicializaron  las clases al ser utilizadas por medio de variables y se creo la función para cada caso,
utilizando como parámetro la union de tipos y la clave kind para la union discriminada en las clases, 
permitiendo asi conservar las propiedades de cada clase.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/task5semana12)
