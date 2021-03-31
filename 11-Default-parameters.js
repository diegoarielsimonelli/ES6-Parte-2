// Parametros por defecto
// Son valores que le podemos asignar por default a los parametros que recibimos en una función
// En el ejemplo de abajo, si al momento de realizar el registro de un usuario, no nos pasan un parametro
// como por ej. el telefono, podemos mediante un if-else statement setear el telefono con un valor si el mismo
// nos llega vacío

// function registrarUsuario(name, lastName, age, city, telephone) {
//   if (!telephone) {
//     telephone = '1111111111';
//   }
//   return `El nombre del usuario es ${name} ${lastName}, su edad es de ${age} años de edad y vive en la ciudad de ${city}.
// Si necesitamos contactarte lo haremos al telefono ${telephone}`;
// }

// console.log(registrarUsuario('Micaela', 'Perez', 20, 'Mar del Plata'));

// ************************************************************************************************ //

// No obstante, con los parametros por defecto, resolver este problema, es mucho más fácil

const registrarUsuario = (
  name = 'XXXXXXXXXX',
  lastName,
  age,
  city,
  telephone = '11111111'
) => {
  return `El nombre del usuario es ${name} ${lastName}, su edad es de ${age} años de edad y vive en la ciudad de ${city}.
Si necesitamos contactarte lo haremos al telefono ${telephone}`;
};

console.log(
  registrarUsuario(undefined, 'Perez', 20, 'Mar del Plata', 55555555)
);
