//mercado//


alert("lista de mercado: carne, arroz, leche, atun, zanahoria");



let escoger = prompt("escribe uno de los productos de la lista de mercado para obtener su precio");





switch (escoger) {
    case "carne":
        alert("el precio de la carne es: 6.500")
        break;


    case "arroz":
        alert("el precio del arroz es de: 1.500")
        break;


    case "leche":
        alert("el precio de la leche es de: 3.200")
        break;


    case "atun":
        alert("el precio del atun es de: 2.200")
        break;


    case "zanahoria":
        alert("el precio de la zanahoria es de: 1.200")
        break;
    default:
        alert("escogiste algo fuera de la lista")
        break;
}
