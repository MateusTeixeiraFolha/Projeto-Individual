function simular() {
    var empresa = in_nome_empresa.value;
    var estoque = Number(in_tamanho_estoque.value);

    // foi utilizado area de captação do sensor como 50m²

    var qtd_sensores = (estoque / 50);

    text.innerHTML =
        `<hr><br>A empresa <b>${empresa}</b> terá que usar <b>${parseInt(qtd_sensores)}</b> 
        sensores para controlar seu estoque de <b>${estoque.toFixed(2)}</b> m² <br><br>`;

    text.innerHTML += `<h4>A <b>TermoTech</b> recomenda que os estoques de tecidos operem seguindo:</h4>`;

    text.innerHTML += `Temperatura ideal entre <b>22</b> e <b>23°C</b> <br><br>`;

    text.innerHTML += `Umidade ideal entre <b>40</b> e <b>60%</b> <br><br>`;

    text.innerHTML += `Esses parâmetros evitam perdas por bolores e mofos e alterações nas caracteristicas dos tecidos. <br><br>`;

    text.innerHTML += `<img style="height: 100px;"
    src="img/tecido1.png" 
    alt="foto demonstrativa do tecido">`;

    text.innerHTML += `<img style="height: 100px; margin-left: 80px;"
    src="img/tecido2.png" 
    alt="foto demonstrativa do tecido">`;
}