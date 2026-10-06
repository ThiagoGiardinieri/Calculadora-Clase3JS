const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function calculadora(nro1, nro2, operacion) {
  switch (operacion) {
    case "+":
      console.log(sumar(nro1, nro2));
      alert("El resultado es " + sumar(nro1, nro2));
      break;

    case "-":
      console.log(restar(nro1, nro2));
      alert("El resultado es " + restar(nro1, nro2));
      break;

    case "*":
      console.log(multiplicar(nro1, nro2));
      alert("El resultado es " + multiplicar(nro1, nro2));
      break;

    case "/":
      console.log(dividir(nro1, nro2));
      alert("El resultado es " + dividir(nro1, nro2));
      break;

    default:
      alert("Ingreso inválido");
  }
}

while (confirm("¿Deseas usar la calculadora?")) {
  let operacion = prompt(
    "¿Qué operación deseas realizar? Ingresa el símbolo correspondiente:\n" +
      "+ : sumar\n" +
      "- : restar\n" +
      "* : multiplicar\n" +
      "/ : dividir"
  );

  let numero1 = Number(prompt("Ingresa el número 1"));
  let numero2 = Number(prompt("Ingresa el número 2"));

  calculadora(numero1, numero2, operacion);
}






