/*fUNÇÃO DE AUMENTAR E DIMINUIR */
 /* posição0 */
var contagem0 = 0;   var contagem1 = 0;var contagem2 = 0;var contagem3 = 0;var contagem4 = 0;var contagem5 = 0;var contagem6 = 0;
function diminuir0() {
    contagem0 -= 1;
    if(contagem0 >=0){

        b_numerico7.innerHTML = `${contagem0}`;
    }

}

function aumentar0() {
    contagem0 += 1;
    b_numerico7.innerHTML = `${contagem0}`;

}
function salvar0() {
    b_numerico7.innerHTML = '0';
}


 /* posição1 */
function diminuir1() {
    contagem1 -= 1;
    if(contagem1 >=0){

        b_numerico8.innerHTML = `${contagem1}`;
    }

}

function aumentar1() {
    contagem1 += 1;
    b_numerico1.innerHTML = `${contagem1}`;

} 
function salvar1() {
    b_numerico1.innerHTML = '0';
}
 /* posição2 */
function diminuir2() {
    contagem2 -= 1;
    if(contagem >=0){

        b_numerico9.innerHTML = `${contagem2}`;
    }

}


function aumentar2() {
    contagem2 += 1;
    b_numerico2.innerHTML = `${contagem2}`;

} 
function salvar2() {
    b_numerico2.innerHTML = '0';
}
 /* posição3 */
function diminuir3() {
    contagem3 -= 1;
    if(contagem3 >=0){

        b_numerico10.innerHTML = `${contagem3}`;
    }

}

function aumentar3() {
    contagem3 += 1;
    b_numerico3.innerHTML = `${contagem3}`;

}
function salvar3() {
    b_numerico3.innerHTML = '0';
}
 /* posição4 */
function diminuir4() {
    contagem4 -= 1;
    if(contagem4 >=0){

        b_numerico11.innerHTML = `${contagem4}`;
    }

}

function aumentar4() {
    contagem4 += 1;
    b_numerico4.innerHTML = `${contagem4}`;

}
function salvar4() {
    b_numerico4.innerHTML = '0';
}
 /* posição5 */
function diminuir5() {
    contagem5 -= 1;
    if(contagem5 >=0){

        b_numerico12.innerHTML = `${contagem5}`;
    }

}

function aumentar5() {
    contagem5 += 1;
    b_numerico5.innerHTML = `${contagem5}`;

}
function salvar5() {
    b_numerico5.innerHTML = '0';
}  
 /* posição6 */
function diminuir6() {
    contagem6 -= 1;
    if(contagem6 >=0){

        b_numerico13.innerHTML = `${contagem6}`;
    }

}

function aumentar6() {
    contagem6 += 1;
    b_numerico6.innerHTML = `${contagem6}`;

}
function salvar6() {
    b_numerico6.innerHTML = '0';
}

/*CONTROLE DE ABAS*/ 
function estoqued() {
    produto.style.display = 'none';
    estoque.style.display = 'block';
    pro2.style.color='black'
    pro1.style.color = 'green';
    painel_perf.style.height= '850px';
    

}
function produtod() {
    produto.style.display = 'block';
    estoque.style.display = 'none';
    pro2.style.color='green';
    pro1.style.color='black';
    painel_perf.style.height= '550px';
}

function cliented() {
    pedido.style.display = 'block';
    cliente.style.display = 'none';
    pro4.style.color='green';
    pro3.style.color='black';
    painel_perf.style.height= '550px';
}

function pedidod() {
    pedido.style.display = 'none';
    cliente.style.display = 'block';
    pro4.style.color='black'
    pro3.style.color = 'green';
    painel_perf.style.height= '850px';


}
