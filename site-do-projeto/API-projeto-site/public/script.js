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
