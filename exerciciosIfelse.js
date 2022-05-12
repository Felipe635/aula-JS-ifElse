 //Exercicio 1

    let n = prompt('Dos números de 1 a 5, em qual estou pensando');

    if(n == 4){
        alert('Você acertou!');
    }else{
        alert('Você não acertou');
    }

//Exercicio 2
    
    let vel = prompt('Qual a velocidade do carro?');

    if (vel > 80){
        let acima = vel - 80;
        let multa = acima * 5;
        alert(`Você foi multado. O valor da multa é de ${multa} reais`);
    }else{
        alert('Você esta no limite de velocidade');
    }

//Exercicio 3

    let n1 = prompt('Digite um número inteiro');

    let res = n1 % 2;

    if(res == 0){
        alert('O número é par');
    }else{
        alert('O número é ímpar');
    }

//Exercicio 4

    let sal = parseInt(prompt('Digite seu salário'));

    if(sal > 1250){
        let salfinal = (sal * 10 / 100) + sal;
        alert(`Com um aumento de 10%, seu salário final é de ${salfinal}`);
    }else{
        let salfinal = (sal * 15 / 100) + sal;
        alert(`Com o aumento de 15%, seu salário final é de ${salfinal}`);
    }

