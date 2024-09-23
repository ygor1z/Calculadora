var v1 = 0;
var cont = 1;
var op,v2;

function btn1(){
    if (document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";
    
    document.getElementById('lblvalor').innerHTML += 1;
}

function btn2(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 2;
    
}

function btn3(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 3;
}

function btn4(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 4;
}

function btn5(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 5;
}

function btn6(){
    if(document.getElementById('lblvalor').innerHTML =="0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 6;
}

function btn7(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 7;
}

function btn8(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 8;
}

function btn9(){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML = "";

    document.getElementById('lblvalor').innerHTML += 9;
}

function btn0 (){
    if(document.getElementById('lblvalor').innerHTML == "0")
        document.getElementById('lblvalor').innerHTML == "";

    document.getElementById('lblvalor').innerHTML += 0;
}

// essas funções atribuem valores aos botões criados

function btnIgual(direto = true){
    
    v2 = parseFloat(document.getElementById('lblvalor').innerHTML);

    if (op == "+") {
        v1 = v1 + v2;
    } else if (op == "-") {
        v1 = v1 - v2;
    } else if (op == "*") {
        v1 = v1 * v2;
    } else if (op == "/") {
        if (v2 == 0) {
            document.getElementById('lblvalor').innerHTML = "Não é possível dividir por 0";
            return;
        } else {
            v1 = v1 / v2;
        }
    }

    document.getElementById('lblvalor').innerHTML = v1;

    if (direto) {
        op = "";
        cont = 1;
    }

}

// função responsavel pelo botao igual e que realiza as operações basicas quando chamada pelas outras funções...

function btnClear(){
    v1 = 0;
    cont = 1;
    op = ""
    document.getElementById('lblvalor').innerText = "0";

} // função para limpar o campo de texto e as variaveis

function btnSoma(){
    if (cont == 1){

        v1 = parseFloat((document.getElementById('lblvalor').innerHTML));
        cont += 1;
        document.getElementById('lblvalor').innerHTML = "";
        op = "+";

    } else { 

        if (op != "+"){

            btnIgual(false);

        } else {

            btnIgual(false);
        }
    }

    document.getElementById('lblvalor').innerHTML = "";
    op = "+";
} 

function btnSubtracao(){
    
    if (cont == 1) {
        v1 = parseFloat(document.getElementById('lblvalor').innerHTML);
        cont += 1;
    } else {
        if (op != "-") {
            btnIgual(false);
        } else {
            btnIgual(false);
        }
    }

    document.getElementById('lblvalor').innerHTML = "";
    op = "-";
} //tive que adaptar pois iniciei v1 com 0. Fiz um if para corrgir o problema pois as contas ficavam erradas e adicionei uma variavel cont para evitar o problema de zerar a contagem ao chegar em zero;

function btnMultiplicacao(){


    if (cont == 1){
        v1 = parseFloat((document.getElementById('lblvalor').innerHTML));
        cont += 1;
    } else{

        if (op != "*"){

            btnIgual(false);

        } else {
            btnIgual(false);
        }
    }

    document.getElementById('lblvalor').innerHTML = "";
    op = "*";

} // adcionei um if pois se v1 iniciasse como 0, toda a multiplicação teria resultado 0

function btnDivisao(){

    if (cont == 1) {

        v1 = parseFloat(document.getElementById('lblvalor').innerHTML);
        cont += 1;

    } else {

        if (op != "/"){

            btnIgual(false);

        } else {

            btnIgual(false);

        }     
    }  

    document.getElementById('lblvalor').innerHTML = "";
    op = "/";
   
} //Usei a variavel cont para iniciar v1 com algum valor, depois usei a variavel dividir para verificar se não estava dividindo por 0

function btnSeno(){
    v1 = parseFloat(document.getElementById('lblvalor').innerHTML);
    var rad = (v1*Math.PI)/180;
    document.getElementById('lblvalor').innerHTML = Math.sin(rad);
}

function btnCosseno(){
    v1 = parseFloat(document.getElementById('lblvalor').innerHTML);
    var rad = (v1*Math.PI)/180;
    document.getElementById('lblvalor').innerHTML = Math.cos(rad);
}

// converti graus para radianos e usei a função seno e cosseno da biblioteca Math do javaScript

function btnInverter(){
    v1 = parseFloat(document.getElementById('lblvalor').innerHTML);
    v1 *= -1;
    document.getElementById('lblvalor').innerHTML = v1;
} // para inverter basta multiplicar por -1 


function btnPonto(){
    if(!document.getElementById('lblvalor').innerHTML.includes(".")){
        document.getElementById('lblvalor').innerHTML += ".";
    }
} // usei a função includes para verificar se a label possui valor com ponto, em caso negativo ele adiciona o ponto caso o botão for acionado