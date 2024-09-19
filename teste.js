let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let ID = carrinho.length;


let criarItem = (produtoId) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let ID = carrinho.length + 1;
    let produto;

    switch (produtoId) {
        case 'produto1':
            produto = { ID: ID, Nome: 'Camiseta', Quantidade: 1, Valor: 29.99 };
            console.log('Produto 1 adicionado ao carrinho');
            break;
        case 'produto2':
            produto = { ID: ID, Nome: 'Calça Jeans', Quantidade: 1, Valor: 99.99 };
            console.log('Produto 2 adicionado ao carrinho');
            break;
        case 'produto3':
            produto = { ID: ID, Nome: 'Tênis', Quantidade: 1, Valor: 149.90 };
            console.log('Produto 3 adicionado ao carrinho');
            break;
        default:
            return;
    }

    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
};


document.querySelectorAll('.adicionarProduto').forEach(button => {
    button.addEventListener('click', (event) => {
        const produtoId = event.target.id;
        criarItem(produtoId);
    });
});


function removerProduto(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(produto => produto.ID !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}


function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    if (carrinho.length > 0) {
        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = `${produto.Nome} - Quantidade: ${produto.Quantidade} - Valor: R$ ${produto.Valor.toFixed(2)}`;

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removerProduto(produto.ID));
            li.appendChild(removeButton);
            listaProdutos.appendChild(li);
        });
    } else {
        listaProdutos.textContent = 'O carrinho está vazio!';
    }
}

exibirCarrinho();
