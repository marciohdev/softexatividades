function conversao(temperatura){
    return (temperatura - 32)  * 5/9;
}

const Celsius = conversao(45).toFixed(2);
console.log(Celsius)