console.group("Nossas mensagens de um grupo");

console.log("estou escrevendo no console");
console.error("eu sou um error");
console.warn("eu sou um aviso");

var num = 12;
console.assert(num<=10, "numero nao pode ser maior que 10");

console.groupEnd();

console.groupCollapsed("Nossas mensagens de um grupo collapsed");
console.log("estou escrevendo no console");
console.groupEnd();

console.table([
    [1, 2, 3],
    [3, 2, 1]
]);

console.table([
    { nome: "Braga"},
    { nome: "Thai"}
]);