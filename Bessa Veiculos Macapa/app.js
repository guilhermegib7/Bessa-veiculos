let posicaoEdicao = null;

const formVeiculo = document.getElementById("veiculo");

if (formVeiculo) {
    formVeiculo.addEventListener("submit", function(evento) {
        evento.preventDefault();
        
        const marca = window.document.getElementById("marca").value;
        const modelo = window.document.getElementById("modelo").value;
        const ano = window.document.getElementById("ano").value;
        const preco = window.document.getElementById("preco").value;
        
        const inputImagem = window.document.getElementById("imagem");
        const imagem = inputImagem ? inputImagem.value : "";

        const inputDescricao = window.document.getElementById("descricao");
        const descricao = inputDescricao ? inputDescricao.value : "";

        const novoVeiculo = {
            marca, modelo, ano, preco, imagem, descricao
        };  

        const lista = JSON.parse(localStorage.getItem("listaveiculo")) || [];

        if (posicaoEdicao !== null) {
            lista[posicaoEdicao] = novoVeiculo;
            posicaoEdicao = null;
        } else {
            lista.push(novoVeiculo);
        }
        
        const veiculoEmtexto = JSON.stringify(lista); 
        localStorage.setItem("listaveiculo", veiculoEmtexto); 
        
        carregarVeiculos();
        formVeiculo.reset();    
    });
}

function carregarVeiculos() {
    const tabela = document.getElementById("tabela-veiculos");
    if (!tabela) return;
    
    tabela.innerHTML = "";
    const lista = JSON.parse(localStorage.getItem("listaveiculo")) || [];

    for(let i = 0; i < lista.length; i++) {
        let carro = lista[i];
        const linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${carro.marca}</td>
        <td>${carro.modelo}</td>
        <td>${carro.ano}</td>
        <td>${Number(carro.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        <td>    
            <button onclick="editarVeiculo(${i})">Editar</button>
            <button onclick="apagarVeiculo(${i})">Excluir</button>
        </td>
        `;
        tabela.appendChild(linha); 
    }
}
    
function apagarVeiculo(posicao) {
    const lista = JSON.parse(localStorage.getItem("listaveiculo")) || [];
    lista.splice(posicao, 1);
    localStorage.setItem("listaveiculo", JSON.stringify(lista));
    carregarVeiculos(); 
}

function editarVeiculo(posicao) {
    const lista = JSON.parse(localStorage.getItem("listaveiculo")) || [];
    let carro = lista[posicao];
    posicaoEdicao = posicao;
    
    document.getElementById("marca").value = carro.marca;
    document.getElementById("modelo").value = carro.modelo;
    document.getElementById("ano").value = carro.ano;
    document.getElementById("preco").value = carro.preco;
    
    const inputImagem = document.getElementById("imagem");
    if (inputImagem) {
        inputImagem.value = carro.imagem || "";
    }

    const inputDescricao = document.getElementById("descricao");
    if (inputDescricao) {
        inputDescricao.value = carro.descricao || "";
    }
}
    
carregarVeiculos();

function sair() {
    sessionStorage.removeItem("logado");
    window.location.href = "admin.html";
}

function carregarVitrine() {
    const vitrine = document.getElementById("vitrine-veiculos");
    if (!vitrine) return;

    const veiculos = JSON.parse(localStorage.getItem("listaveiculo")) || [];

    if (veiculos.length === 0) {
        vitrine.innerHTML = "<p>Nenhum veículo em estoque no momento.</p>";
        return;
    }

    vitrine.innerHTML = "";
    
    veiculos.forEach(carro => {
        vitrine.innerHTML += `
            <div class="card-carro">
                <img src="${carro.imagem || 'https://via.placeholder.com/300x180?text=Sem+Foto'}" alt="${carro.modelo}">
                <h3>${carro.marca} ${carro.modelo}</h3>
                <p>Ano: ${carro.ano}</p>
                <p class="descricao">${carro.descricao || ''}</p>
                <p class="preco">${Number(carro.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        `;
    });
}

window.onload = carregarVitrine;

const btnContato = document.getElementById("btncontato");
const mensagemErro = document.getElementById("msgerro");

if (btnContato) {
    btnContato.addEventListener("click", function(evento) {
        evento.preventDefault();

        const nome = document.getElementById("nomecontato").value.trim();
        const celular = document.getElementById("celularcontato").value.trim();

        if (!nome || !celular) {
            if (mensagemErro) {
                mensagemErro.textContent = "Por favor, preencha seu nome e celular.";
                mensagemErro.style.display = "block";
            }
            return;
        }

        if (mensagemErro) {
            mensagemErro.style.display = "none";
        }

        const textoMensagem = `Olá, meu nome é ${nome} e gostaria de mais informações sobre o estoque. Meu contato é ${celular}.`;
        const numeroWhatsApp = "5596981089092";
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensagem)}`;

        window.open(linkWhatsApp, "_blank");
    });
}

let posicaoEdicaoVendedor = null;
const formVendedor = document.getElementById("form-vendedor");

if (formVendedor) {
    formVendedor.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const nome = document.getElementById("nome-vendedor").value;
        const matricula = document.getElementById("matricula-vendedor").value;
        const novoVendedor = { nome, matricula };  
        const lista = JSON.parse(localStorage.getItem("listavendedor")) || [];

        if (posicaoEdicaoVendedor !== null) {
            lista[posicaoEdicaoVendedor] = novoVendedor;
            posicaoEdicaoVendedor = null;
        } else {
            lista.push(novoVendedor);
        }
        
        localStorage.setItem("listavendedor", JSON.stringify(lista)); 
        carregarVendedores();
        formVendedor.reset();    
    });
}

function carregarVendedores() {
    const tabela = document.getElementById("tabela-vendedores");
    if (!tabela) return;
    tabela.innerHTML = "";
    const lista = JSON.parse(localStorage.getItem("listavendedor")) || [];

    lista.forEach((vendedor, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${vendedor.nome}</td>
            <td>${vendedor.matricula}</td>
            <td>    
                <button onclick="editarVendedor(${i})">Editar</button>
                <button onclick="apagarVendedor(${i})">Excluir</button>
            </td>
        </tr>`;
    });
}

function apagarVendedor(posicao) {
    const lista = JSON.parse(localStorage.getItem("listavendedor")) || [];
    lista.splice(posicao, 1);
    localStorage.setItem("listavendedor", JSON.stringify(lista));
    carregarVendedores(); 
}

function editarVendedor(posicao) {
    const lista = JSON.parse(localStorage.getItem("listavendedor")) || [];
    posicaoEdicaoVendedor = posicao;
    document.getElementById("nome-vendedor").value = lista[posicao].nome;
    document.getElementById("matricula-vendedor").value = lista[posicao].matricula;
}

let posicaoEdicaoCliente = null;
const formCliente = document.getElementById("form-cliente");

if (formCliente) {
    formCliente.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const nome = document.getElementById("nome-cliente").value;
        const celular = document.getElementById("celular-cliente").value;
        const novoCliente = { nome, celular };  
        const lista = JSON.parse(localStorage.getItem("listacliente")) || [];

        if (posicaoEdicaoCliente !== null) {
            lista[posicaoEdicaoCliente] = novoCliente;
            posicaoEdicaoCliente = null;
        } else {
            lista.push(novoCliente);
        }
        
        localStorage.setItem("listacliente", JSON.stringify(lista)); 
        carregarClientes();
        formCliente.reset();    
    });
}

function carregarClientes() {
    const tabela = document.getElementById("tabela-clientes");
    if (!tabela) return;
    tabela.innerHTML = "";
    const lista = JSON.parse(localStorage.getItem("listacliente")) || [];

    lista.forEach((cliente, i) => {
        tabela.innerHTML += `
        <tr>
            <td>${cliente.nome}</td>
            <td>${cliente.celular}</td>
            <td>    
                <button onclick="editarCliente(${i})">Editar</button>
                <button onclick="apagarCliente(${i})">Excluir</button>
            </td>
        </tr>`;
    });
}

function apagarCliente(posicao) {
    const lista = JSON.parse(localStorage.getItem("listacliente")) || [];
    lista.splice(posicao, 1);
    localStorage.setItem("listacliente", JSON.stringify(lista));
    carregarClientes(); 
}

function editarCliente(posicao) {
    const lista = JSON.parse(localStorage.getItem("listacliente")) || [];
    posicaoEdicaoCliente = posicao;
    document.getElementById("nome-cliente").value = lista[posicao].nome;
    document.getElementById("celular-cliente").value = lista[posicao].celular;
}

carregarVendedores();
carregarClientes();