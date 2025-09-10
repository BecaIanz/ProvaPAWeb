let num1 = 0;
let num2 = 0;
let num3 = 0;
let maior = 0;
let menor = 0;
let media = 0;

const Calcular = () => {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);
    
    media = soma(num1, num2, num3);
    media = divisao(media, 3);

    if(num1 > num2 && num1 > num3)
    {
        maior = num1;
    }
    else if(num2 > num1 && num2 > num3)
    {
        maior = num2;
    }
    else
    {
        maior = num3;
    }

    if(num1 < num2 && num1 < num3)
    {
        menor = num1;
    }
    else if(num2 < num1 && num2 < num3)
    {
        menor = num2;
    }
    else
    {
        menor = num3;
    }
    

    console.log("1: " + num1);
    console.log("2: " + num2);
    console.log("3: " + num3);
    
    console.log(maior);
    console.log(media);
    
    document.getElementById("result").innerHTML += "<h3>Resultado</h3> <p>Maior Numero: " + maior + "</p> <p>Menor Numero:" + menor +"</p> <p>Media: " + media + "</p>";
}
function soma(x, y, z) {
    return x+y+z;
}
function divisao( x, y) {
    return x / y;
}