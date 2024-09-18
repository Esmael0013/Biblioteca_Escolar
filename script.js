// Carrega os empréstimos do LocalStorage ao carregar a página
window.onload = function() {
    carregarEmprestimos();
};

function adicionarEmprestimo() {
    const nome = document.getElementById('nome').value;
    const livro = document.getElementById('livro').value;

    if (nome === "" || livro === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const emprestimo = { nome, livro };

    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.push(emprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));

    limparFormulario();
    carregarEmprestimos();
}

function carregarEmprestimos() {
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = `
        <tr>
            <th>Nome da Pessoa</th>
            <th>Nome do Livro</th>
            <th>Ações</th>
        </tr>
    `;

    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];

    emprestimos.forEach((emprestimo, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).textContent = emprestimo.nome;
        row.insertCell(1).textContent = emprestimo.livro;
        const actionsCell = row.insertCell(2);

        const editButton = document.createElement('button');
        editButton.textContent = "Editar";
        editButton.onclick = () => editarEmprestimo(index);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Deletar";
        deleteButton.onclick = () => deletarEmprestimo(index);
        actionsCell.appendChild(deleteButton);
    });
}

function editarEmprestimo(index) {
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos'));
    const emprestimo = emprestimos[index];

    document.getElementById('nome').value = emprestimo.nome;
    document.getElementById('livro').value = emprestimo.livro;

    deletarEmprestimo(index);
}

function deletarEmprestimo(index) {
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos'));
    emprestimos.splice(index, 1);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    carregarEmprestimos();
}

function limparFormulario() {
    document.getElementById('nome').value = "";
    document.getElementById('livro').value = "";
}

// Função de busca
function buscarEmprestimos() {
    const filtro = document.getElementById('buscar').value.toLowerCase();
    const tabela = document.getElementById('tabela');
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    
    tabela.innerHTML = `
        <tr>
            <th>Nome da Pessoa</th>
            <th>Nome do Livro</th>
            <th>Ações</th>
        </tr>
    `;

    emprestimos
        .filter(emprestimo => emprestimo.nome.toLowerCase().includes(filtro))
        .forEach((emprestimo, index) => {
            const row = tabela.insertRow();
            row.insertCell(0).textContent = emprestimo.nome;
            row.insertCell(1).textContent = emprestimo.livro;
            const actionsCell = row.insertCell(2);

            const editButton = document.createElement('button');
            editButton.textContent = "Editar";
            editButton.onclick = () => editarEmprestimo(index);
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.onclick = () => deletarEmprestimo(index);
            actionsCell.appendChild(deleteButton);
        });
}
document.addEventListener('DOMContentLoaded', () => {
    carregarEmprestimos();
});

function adicionarEmprestimo() {
    const nome = document.getElementById('nome').value;
    const livro = document.getElementById('livro').value;
    const turma = document.getElementById('turma').value;

    if (nome === "" || livro === "" || turma === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const emprestimo = { nome, livro, turma };
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.push(emprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));

    carregarEmprestimos();
    document.getElementById('formulario').reset();
}

function carregarEmprestimos() {
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    emprestimos.forEach((emprestimo, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).textContent = emprestimo.nome;
        row.insertCell(1).textContent = emprestimo.livro;
        row.insertCell(2).textContent = emprestimo.turma;
        const cellAcoes = row.insertCell(3);
        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = 'Deletar';
        btnDeletar.onclick = () => deletarEmprestimo(index);
        cellAcoes.appendChild(btnDeletar);
    });
}

function deletarEmprestimo(index) {
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.splice(index, 1);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    carregarEmprestimos();
}

function exportarDados() {
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    const dadosJSON = JSON.stringify(emprestimos, null, 2);
    const blob = new Blob([dadosJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emprestimos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

















// Função para adicionar um empréstimo
function adicionarEmprestimo() {
    const nome = document.getElementById('nome').value;
    const livro = document.getElementById('livro').value;
    const turma = document.getElementById('turma').value;

    if (nome === "" || livro === "" || turma === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const emprestimo = { nome, livro, turma };
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.push(emprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));

    carregarEmprestimos();
    document.getElementById('formulario').reset();
}

// Função para carregar os empréstimos do LocalStorage
function carregarEmprestimos() {
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';

    emprestimos.forEach((emprestimo, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).textContent = emprestimo.nome;
        row.insertCell(1).textContent = emprestimo.livro;
        row.insertCell(2).textContent = emprestimo.turma;
        const cellAcoes = row.insertCell(3);
        const btnDeletar = document.createElement('button');
        btnDeletar.textContent = 'Deletar';
        btnDeletar.onclick = () => deletarEmprestimo(index);
        cellAcoes.appendChild(btnDeletar);
    });
}

// Função para deletar um empréstimo
function deletarEmprestimo(index) {
    let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    emprestimos.splice(index, 1);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    carregarEmprestimos();
}

// Função para exportar os dados
function exportarDados() {
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];
    const dadosJSON = JSON.stringify(emprestimos, null, 2);
    const blob = new Blob([dadosJSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emprestimos.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Função para importar os dados de um arquivo JSON
document.getElementById('importarArquivo').addEventListener('change', (event) => {
    const arquivo = event.target.files[0];
    if (!arquivo) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);
            if (Array.isArray(dados)) {
                localStorage.setItem('emprestimos', JSON.stringify(dados));
                carregarEmprestimos();
                alert('Dados importados com sucesso!');
            } else {
                alert('Formato de arquivo inválido. O arquivo deve ser um JSON de uma lista.');
            }
        } catch (error) {
            alert('Erro ao importar o arquivo: ' + error.message);
        }
    };
    reader.readAsText(arquivo);
});

// Carregar os empréstimos ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarEmprestimos();
});
