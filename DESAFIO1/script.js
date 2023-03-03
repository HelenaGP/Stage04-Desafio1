let firstNumber 
let secondNumber 
function verifyEven(a){
  if(a%2 == 0){
    alert(`A soma ${a} é par`)
  }else{
    alert(`A soma ${a} é ímpar`)
  }
}
function verifyEquality(a, b){
  if(a == b){
    alert('Os dois números são iguais')
  }else{
    alert('Os dois números são diferentes')
  }
}

firstNumber = Number(prompt('Insira o primeiro número:'))
secondNumber = Number(prompt('Insira o segundo número:'))
let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multp = firstNumber * secondNumber
let div = firstNumber / secondNumber
let rest = firstNumber % secondNumber
alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multp}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)
verifyEven(sum)
verifyEquality(firstNumber,secondNumber)