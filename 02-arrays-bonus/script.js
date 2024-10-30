const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.slice();
for (i= 0; i < longNames.length; i++){
  if(longNames[i].length < 5){
    longNames.splice(i, 1)
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers

console.log(teachers)
teachers.splice(1, 1)
console.log(teachers)