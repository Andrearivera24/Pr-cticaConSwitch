// console.log("--> bienvenidos ya se cargó tu fichero JS <--");

// let numero = parseInt(prompt ("Ingrese un número")) ;

// const CANTIDAD_DE_PASOS = 10;
// for (let paso = 0; paso < CANTIDAD_DE_PASOS; paso++) { //9 pasos
// // (index = index + 1) ==index ++
// //Bloque de código del cuerpo de mi ciclo
// console.log(
//     "--> " +
//       paso.toString() +
//       " x " +
//       numero.toString() +
//       " = " +
//       (paso * numero).toString()
//   );
  
// }


// //TENDRÁ TRES PARÁMETROS
// for (desde; hasta; cambio) 



//------------------------------BREAK---------------------------
// let limite = parseInt(prompt("¿Cuántos pacientes quieres lista?"));

// for (let i = 1; i < 10; i++) {
//   if (i == limite + 1) {
//     break;
//   }
//   let nombre = prompt("Ingrese el nombre del paciente número: " + i.toString());
//   console.log("--> Turno N° " + i.toString() + " para el paciente " + nombre);
// }
//----------------------------------------------CONTINUE----
// let limite = parseInt(prompt("¿Qué número de turno quieres apartar?"));

// for (let i = 1; i < 5; i++) {
//   if (i == limite) {
//     continue;
//   }
//   let nombre = prompt("Ingrese el nombre del paciente número: " + i.toString());
//   console.log("--> Turno N° " + i.toString() + " para el paciente " + nombre);
// }


// usar el algoritmo 



// let numero = 0;
// do {
//     numero = prompt("Ingrese un Número");
//     console.log("--> Ingresaste el valor: "+numero.toString(), parseInt(numero));
// } while (parseInt(numero));


let profesorElegido = parseInt (prompt ("Choose a teacher for your Spanish class! Select option 1) Andrea 2) Tomás 3) Nahuél 4) Geraldine"))
switch (parseInt(profesorElegido)){//Switch para el profesor
case 1://Andrea
  let leccion1 = prompt ("What lesson would you like to do? Select option 1) Simple present 2) Simple past 3) Conditional from")
  switch (parseInt(leccion1)) { // switch para la lección
    case 1: //Simple Present
    let dia1 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
    switch (parseInt (dia1)) {// switch para Día de la semana
      case 1://Lunes
        let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora1)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 10:00 am on Monday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 15:00 on Monday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 17:00 on Monday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 19:00 on Monday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del Lunes
    
        case 2://Martes
        let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora2)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 10:00 am on Tusday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 15:00 on Tusday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 17:00 on Tusday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 19:00 on Tusday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del martes 
      case 3://Miercoles
        let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora3)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 10:00 am on Wednesday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 15:00 on  Wednesday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 17:00 on Wednesday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 19:00 on  Wednesday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del miercoles  
      case 4://Jueves
        let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora4)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 10:00 am on Thursday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 15:00 on  Thursday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 17:00 on Thursday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 19:00 on  Thursday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del Jueves

      case 5://Viernes
        let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora5)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 10:00 am on Friday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 15:00 on  Friday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 17:00 on Friday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Andrea as your teacher, the lesson Simple present at 19:00 on  Friday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; }// aquí termina el ciclo del Viernes
     

      case 2: //Simple Past
        let dia2 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
        switch (parseInt (dia2)) {// switch para Día de la semana
          case 1://Lunes
            let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora1)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past at 10:00 am on Monday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 15:00 on Monday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 17:00 on Monday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 19:00 on Monday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del Lunes
        
            case 2://Martes
            let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora2)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 10:00 am on Tusday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past at 15:00 on Tusday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past at 17:00 on Tusday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past at 19:00 on Tusday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del martes 
          case 3://Miercoles
            let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora3)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 10:00 am on Wednesday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 15:00 on  Wednesday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 17:00 on Wednesday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 19:00 on  Wednesday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del miercoles  
          case 4://Jueves
            let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora4)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 10:00 am on Thursday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 15:00 on  Thursday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 17:00 on Thursday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 19:00 on  Thursday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del Jueves
    
          case 5://Viernes
            let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora5)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 10:00 am on Friday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 15:00 on  Friday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 17:00 on Friday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Andrea as your teacher, the lesson Simple past  at 19:00 on  Friday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; }// aquí termina el ciclo del Viernes



      case 3: //Conditional Form
            let dia3 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
            switch (parseInt (dia3)) {// switch para Día de la semana
              case 1://Lunes
                let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora1)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 10:00 am on Monday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 15:00 on Monday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 17:00 on Monday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 19:00 on Monday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del Lunes
            
                case 2://Martes
                let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora2)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 10:00 am on Tusday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 15:00 on Tusday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 17:00 on Tusday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 19:00 on Tusday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del martes 
              case 3://Miercoles
                let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora3)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 10:00 am on Wednesday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 15:00 on  Wednesday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 17:00 on Wednesday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 19:00 on  Wednesday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del miercoles  
              case 4://Jueves
                let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora4)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 10:00 am on Thursday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 15:00 on  Thursday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 17:00 on Thursday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 19:00 on  Thursday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del Jueves
        
              case 5://Viernes
                let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora5)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 10:00 am on Friday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 15:00 on  Friday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 17:00 on Friday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Andrea as your teacher, the lesson Conditional Form at 19:00 on  Friday. ¡Good luck!");
                    break; //Cierra ciclo de horas            
                    }
                    
                break; }// aquí termina el ciclo días
    break} //termina ciclo de lecciones con Andrea

//----------TOMÁS

case 2://Tomás
  let leccion2 = prompt ("What lesson would you like to do? Select option 1) Simple present 2) Simple past 3) Conditional from")
  switch (parseInt(leccion2)) { // switch para la lección
    case 1: //Simple Present
    let dia1 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
    switch (parseInt (dia1)) {// switch para Día de la semana
      case 1://Lunes
        let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora1)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 10:00 am on Monday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 15:00 on Monday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 17:00 on Monday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 19:00 on Monday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del Lunes
    
        case 2://Martes
        let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora2)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 10:00 am on Tusday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 15:00 on Tusday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 17:00 on Tusday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 19:00 on Tusday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del martes 
      case 3://Miercoles
        let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora3)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 10:00 am on Wednesday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 15:00 on  Wednesday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 17:00 on Wednesday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 19:00 on  Wednesday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del miercoles  
      case 4://Jueves
        let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora4)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 10:00 am on Thursday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 15:00 on  Thursday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 17:00 on Thursday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 19:00 on  Thursday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; // aquí termina el ciclo del Jueves

      case 5://Viernes
        let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
        switch (parseInt(hora5)) {// switch para hora
          case 1:// 10:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 10:00 am on Friday. ¡Good luck!");
            break;
          case 2:// 15:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 15:00 on  Friday. ¡Good luck!");
            break;
          case 3:// 17:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 17:00 on Friday. ¡Good luck!");
            break;
          case 4:// 19:00
            alert ("You successfully chose Tomás as your teacher, the lesson Simple present at 19:00 on  Friday. ¡Good luck!");
            break; //Cierra ciclo de hora lunes, simple present             
            }
        break; }// aquí termina el ciclo del Viernes
     

      case 2: //Simple Past
        let dia2 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
        switch (parseInt (dia2)) {// switch para Día de la semana
          case 1://Lunes
            let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora1)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past at 10:00 am on Monday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 15:00 on Monday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 17:00 on Monday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 19:00 on Monday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del Lunes
        
            case 2://Martes
            let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora2)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 10:00 am on Tusday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past at 15:00 on Tusday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past at 17:00 on Tusday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past at 19:00 on Tusday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del martes 
          case 3://Miercoles
            let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora3)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 10:00 am on Wednesday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 15:00 on  Wednesday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 17:00 on Wednesday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 19:00 on  Wednesday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del miercoles  
          case 4://Jueves
            let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora4)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 10:00 am on Thursday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 15:00 on  Thursday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 17:00 on Thursday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 19:00 on  Thursday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; // aquí termina el ciclo del Jueves
    
          case 5://Viernes
            let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
            switch (parseInt(hora5)) {// switch para hora
              case 1:// 10:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 10:00 am on Friday. ¡Good luck!");
                break;
              case 2:// 15:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 15:00 on  Friday. ¡Good luck!");
                break;
              case 3:// 17:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 17:00 on Friday. ¡Good luck!");
                break;
              case 4:// 19:00
                alert ("You successfully chose Tomás as your teacher, the lesson Simple past  at 19:00 on  Friday. ¡Good luck!");
                break; //Cierra ciclo de hora lunes, simple present             
                }
            break; }// aquí termina el ciclo del Viernes



      case 3: //Conditional Form
            let dia3 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
            switch (parseInt (dia3)) {// switch para Día de la semana
              case 1://Lunes
                let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora1)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 10:00 am on Monday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 15:00 on Monday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 17:00 on Monday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 19:00 on Monday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del Lunes
            
                case 2://Martes
                let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora2)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 10:00 am on Tusday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 15:00 on Tusday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 17:00 on Tusday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 19:00 on Tusday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del martes 
              case 3://Miercoles
                let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora3)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 10:00 am on Wednesday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 15:00 on  Wednesday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 17:00 on Wednesday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 19:00 on  Wednesday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del miercoles  
              case 4://Jueves
                let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora4)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 10:00 am on Thursday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 15:00 on  Thursday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 17:00 on Thursday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 19:00 on  Thursday. ¡Good luck!");
                    break; //Cierra ciclo de hora lunes, simple present             
                    }
                break; // aquí termina el ciclo del Jueves
        
              case 5://Viernes
                let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                switch (parseInt(hora5)) {// switch para hora
                  case 1:// 10:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 10:00 am on Friday. ¡Good luck!");
                    break;
                  case 2:// 15:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 15:00 on  Friday. ¡Good luck!");
                    break;
                  case 3:// 17:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 17:00 on Friday. ¡Good luck!");
                    break;
                  case 4:// 19:00
                    alert ("You successfully chose Tomás as your teacher, the lesson Conditional Form at 19:00 on  Friday. ¡Good luck!");
                    break; //Cierra ciclo de horas            
                    }
                break; }// aquí termina el ciclo días
    break} //termina ciclo de lecciones

//----------------Nahuél

    case 3://Nahuel
    let leccion3 = prompt ("What lesson would you like to do? Select option 1) Simple present 2) Simple past 3) Conditional from")
    switch (parseInt(leccion3)) { // switch para la lección
      case 1: //Simple Present
      let dia1 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
      switch (parseInt (dia1)) {// switch para Día de la semana
        case 1://Lunes
          let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora1)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 10:00 am on Monday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 15:00 on Monday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 17:00 on Monday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 19:00 on Monday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del Lunes
      
          case 2://Martes
          let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora2)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose  Nahuél as your teacher, the lesson Simple present at 10:00 am on Tusday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose  Nahuél as your teacher, the lesson Simple present at 15:00 on Tusday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose  Nahuél as your teacher, the lesson Simple present at 17:00 on Tusday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose  Nahuél as your teacher, the lesson Simple present at 19:00 on Tusday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del martes 
        case 3://Miercoles
          let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora3)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose  Nahuél as your teacher, the lesson Simple present at 10:00 am on Wednesday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 15:00 on  Wednesday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 17:00 on Wednesday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 19:00 on  Wednesday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del miercoles  
        case 4://Jueves
          let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora4)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 10:00 am on Thursday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 15:00 on  Thursday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 17:00 on Thursday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 19:00 on  Thursday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del Jueves
  
        case 5://Viernes
          let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora5)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 10:00 am on Friday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 15:00 on  Friday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 17:00 on Friday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Nahuél as your teacher, the lesson Simple present at 19:00 on  Friday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; }// aquí termina el ciclo del Viernes
       
  
        case 2: //Simple Past
          let dia2 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
          switch (parseInt (dia2)) {// switch para Día de la semana
            case 1://Lunes
              let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora1)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past at 10:00 am on Monday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 15:00 on Monday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 17:00 on Monday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 19:00 on Monday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del Lunes
          
              case 2://Martes
              let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora2)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 10:00 am on Tusday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past at 15:00 on Tusday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past at 17:00 on Tusday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past at 19:00 on Tusday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del martes 
            case 3://Miercoles
              let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora3)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 10:00 am on Wednesday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 15:00 on  Wednesday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 17:00 on Wednesday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 19:00 on  Wednesday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del miercoles  
            case 4://Jueves
              let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora4)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 10:00 am on Thursday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 15:00 on  Thursday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 17:00 on Thursday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 19:00 on  Thursday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del Jueves
      
            case 5://Viernes
              let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora5)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 10:00 am on Friday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 15:00 on  Friday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 17:00 on Friday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Nahuél as your teacher, the lesson Simple past  at 19:00 on  Friday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; }// aquí termina el ciclo del Viernes
  
  
  
        case 3: //Conditional Form
              let dia3 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
              switch (parseInt (dia3)) {// switch para Día de la semana
                case 1://Lunes
                  let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                  switch (parseInt(hora1)) {// switch para hora
                    case 1:// 10:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 10:00 am on Monday. ¡Good luck!");
                      break;
                    case 2:// 15:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 15:00 on Monday. ¡Good luck!");
                      break;
                    case 3:// 17:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 17:00 on Monday. ¡Good luck!");
                      break;
                    case 4:// 19:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 19:00 on Monday. ¡Good luck!");
                      break; //Cierra ciclo de hora lunes, simple present             
                      }
                  break; // aquí termina el ciclo del Lunes
              
                  case 2://Martes
                  let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                  switch (parseInt(hora2)) {// switch para hora
                    case 1:// 10:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 10:00 am on Tusday. ¡Good luck!");
                      break;
                    case 2:// 15:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 15:00 on Tusday. ¡Good luck!");
                      break;
                    case 3:// 17:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 17:00 on Tusday. ¡Good luck!");
                      break;
                    case 4:// 19:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 19:00 on Tusday. ¡Good luck!");
                      break; //Cierra ciclo de hora lunes, simple present             
                      }
                  break; // aquí termina el ciclo del martes 
                case 3://Miercoles
                  let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                  switch (parseInt(hora3)) {// switch para hora
                    case 1:// 10:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 10:00 am on Wednesday. ¡Good luck!");
                      break;
                    case 2:// 15:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 15:00 on  Wednesday. ¡Good luck!");
                      break;
                    case 3:// 17:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 17:00 on Wednesday. ¡Good luck!");
                      break;
                    case 4:// 19:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 19:00 on  Wednesday. ¡Good luck!");
                      break; //Cierra ciclo de hora lunes, simple present             
                      }
                  break; // aquí termina el ciclo del miercoles  
                case 4://Jueves
                  let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                  switch (parseInt(hora4)) {// switch para hora
                    case 1:// 10:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 10:00 am on Thursday. ¡Good luck!");
                      break;
                    case 2:// 15:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 15:00 on  Thursday. ¡Good luck!");
                      break;
                    case 3:// 17:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 17:00 on Thursday. ¡Good luck!");
                      break;
                    case 4:// 19:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 19:00 on  Thursday. ¡Good luck!");
                      break; //Cierra ciclo de hora lunes, simple present             
                      }
                  break; // aquí termina el ciclo del Jueves
          
                case 5://Viernes
                  let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
                  switch (parseInt(hora5)) {// switch para hora
                    case 1:// 10:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 10:00 am on Friday. ¡Good luck!");
                      break;
                    case 2:// 15:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 15:00 on  Friday. ¡Good luck!");
                      break;
                    case 3:// 17:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 17:00 on Friday. ¡Good luck!");
                      break;
                    case 4:// 19:00
                      alert ("You successfully chose Nahuél as your teacher, the lesson Conditional Form at 19:00 on  Friday. ¡Good luck!");
                      break; //Cierra ciclo de horas            
                      }
                  break; }// aquí termina el ciclo días
      break} //termina ciclo de lecciones

//----------Geraldine    
case 4://Geraldin
let leccion4 = prompt ("What lesson would you like to do? Select option 1) Simple present 2) Simple past 3) Conditional from")
switch (parseInt(leccion4)) { // switch para la lección
  case 1: //Simple Present
  let dia1 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
  switch (parseInt (dia1)) {// switch para Día de la semana
    case 1://Lunes
      let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
      switch (parseInt(hora1)) {// switch para hora
        case 1:// 10:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 10:00 am on Monday. ¡Good luck!");
          break;
        case 2:// 15:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 15:00 on Monday. ¡Good luck!");
          break;
        case 3:// 17:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 17:00 on Monday. ¡Good luck!");
          break;
        case 4:// 19:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 19:00 on Monday. ¡Good luck!");
          break; //Cierra ciclo de hora lunes, simple present             
          }
      break; // aquí termina el ciclo del Lunes
  
      case 2://Martes
      let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
      switch (parseInt(hora2)) {// switch para hora
        case 1:// 10:00
          alert ("You successfully chose  Geraldine as your teacher, the lesson Simple present at 10:00 am on Tusday. ¡Good luck!");
          break;
        case 2:// 15:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 15:00 on Tusday. ¡Good luck!");
          break;
        case 3:// 17:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 17:00 on Tusday. ¡Good luck!");
          break;
        case 4:// 19:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 19:00 on Tusday. ¡Good luck!");
          break; //Cierra ciclo de hora lunes, simple present             
          }
      break; // aquí termina el ciclo del martes 
    case 3://Miercoles
      let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
      switch (parseInt(hora3)) {// switch para hora
        case 1:// 10:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 10:00 am on Wednesday. ¡Good luck!");
          break;
        case 2:// 15:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 15:00 on  Wednesday. ¡Good luck!");
          break;
        case 3:// 17:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 17:00 on Wednesday. ¡Good luck!");
          break;
        case 4:// 19:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 19:00 on  Wednesday. ¡Good luck!");
          break; //Cierra ciclo de hora lunes, simple present             
          }
      break; // aquí termina el ciclo del miercoles  
    case 4://Jueves
      let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
      switch (parseInt(hora4)) {// switch para hora
        case 1:// 10:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 10:00 am on Thursday. ¡Good luck!");
          break;
        case 2:// 15:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 15:00 on  Thursday. ¡Good luck!");
          break;
        case 3:// 17:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 17:00 on Thursday. ¡Good luck!");
          break;
        case 4:// 19:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 19:00 on  Thursday. ¡Good luck!");
          break; //Cierra ciclo de hora lunes, simple present             
          }
      break; // aquí termina el ciclo del Jueves

    case 5://Viernes
      let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
      switch (parseInt(hora5)) {// switch para hora
        case 1:// 10:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 10:00 am on Friday. ¡Good luck!");
          break;
        case 2:// 15:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 15:00 on  Friday. ¡Good luck!");
          break;
        case 3:// 17:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 17:00 on Friday. ¡Good luck!");
          break;
        case 4:// 19:00
          alert ("You successfully chose Geraldine as your teacher, the lesson Simple present at 19:00 on  Friday. ¡Good luck!");
          break; //Cierra ciclo de hora lunes, simple present             
          }
      break; }// aquí termina el ciclo del Viernes
   

    case 2: //Simple Past
      let dia2 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
      switch (parseInt (dia2)) {// switch para Día de la semana
        case 1://Lunes
          let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora1)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past at 10:00 am on Monday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 15:00 on Monday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 17:00 on Monday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 19:00 on Monday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del Lunes
      
          case 2://Martes
          let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora2)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 10:00 am on Tusday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past at 15:00 on Tusday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past at 17:00 on Tusday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past at 19:00 on Tusday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del martes 
        case 3://Miercoles
          let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora3)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 10:00 am on Wednesday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 15:00 on  Wednesday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 17:00 on Wednesday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 19:00 on  Wednesday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del miercoles  
        case 4://Jueves
          let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora4)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 10:00 am on Thursday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 15:00 on  Thursday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 17:00 on Thursday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 19:00 on  Thursday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; // aquí termina el ciclo del Jueves
  
        case 5://Viernes
          let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
          switch (parseInt(hora5)) {// switch para hora
            case 1:// 10:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 10:00 am on Friday. ¡Good luck!");
              break;
            case 2:// 15:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 15:00 on  Friday. ¡Good luck!");
              break;
            case 3:// 17:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 17:00 on Friday. ¡Good luck!");
              break;
            case 4:// 19:00
              alert ("You successfully chose Geraldine as your teacher, the lesson Simple past  at 19:00 on  Friday. ¡Good luck!");
              break; //Cierra ciclo de hora lunes, simple present             
              }
          break; }// aquí termina el ciclo del Viernes



    case 3: //Conditional Form
          let dia3 = prompt ("What day would you like to book? Select option 1) Monday 2) Tusday 3) Wednesday 4) Thursday 5) Friday")
          switch (parseInt (dia3)) {// switch para Día de la semana
            case 1://Lunes
              let hora1= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora1)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 10:00 am on Monday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 15:00 on Monday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 17:00 on Monday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 19:00 on Monday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del Lunes
          
              case 2://Martes
              let hora2= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora2)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 10:00 am on Tusday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 15:00 on Tusday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 17:00 on Tusday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 19:00 on Tusday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del martes 
            case 3://Miercoles
              let hora3= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora3)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 10:00 am on Wednesday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 15:00 on  Wednesday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 17:00 on Wednesday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 19:00 on  Wednesday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del miercoles  
            case 4://Jueves
              let hora4= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora4)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 10:00 am on Thursday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 15:00 on  Thursday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 17:00 on Thursday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 19:00 on  Thursday. ¡Good luck!");
                  break; //Cierra ciclo de hora lunes, simple present             
                  }
              break; // aquí termina el ciclo del Jueves
      
            case 5://Viernes
              let hora5= prompt ("What time would you like to book? Select option 1) 10:00 am 2) 15:00 3) 17:00 4) 19:00")
              switch (parseInt(hora5)) {// switch para hora
                case 1:// 10:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 10:00 am on Friday. ¡Good luck!");
                  break;
                case 2:// 15:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 15:00 on  Friday. ¡Good luck!");
                  break;
                case 3:// 17:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 17:00 on Friday. ¡Good luck!");
                  break;
                case 4:// 19:00
                  alert ("You successfully chose Geraldine as your teacher, the lesson Conditional Form at 19:00 on  Friday. ¡Good luck!");
                  break; //Cierra ciclo de horas            
                  }
              break; }// aquí termina el ciclo días
  break} //termina ciclo de lecciones





break;// TERMINA CICLO DE PROFESORES}
} 


