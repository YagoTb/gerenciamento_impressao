// Dados fictícios para demonstração
let usuarios = [
    { nome: "Maria Silva", email: "maria@escola.com", perfil: "Administrador" },
    { nome: "João Souza", email: "joao@escola.com", perfil: "Usuário" }
];

let impressoras = [
    { nome: "HP LaserJet 1020", localizacao: "Sala dos Professores", status: "Ativa" },
    { nome: "Epson L3150", localizacao: "Secretaria", status: "Inativa" }
];

// Função para renderizar usuários na tabela
function renderUsuarios() {
    const tbody = document.getElementById('usuarios-lista');
    tbody.innerHTML = '';
    usuarios.forEach((usuario, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.perfil}</td>
            <td>
                <button onclick="editarUsuario(${idx})">Editar</button>
                <button onclick="removerUsuario(${idx})" style="background:#e74c3c;">Remover</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para renderizar impressoras na tabela
function renderImpressoras() {
    const tbody = document.getElementById('impressoras-lista');
    tbody.innerHTML = '';
    impressoras.forEach((impressora, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${impressora.nome}</td>
            <td>${impressora.localizacao}</td>
            <td>${impressora.status}</td>
            <td>
                <button onclick="editarImpressora(${idx})">Editar</button>
                <button onclick="removerImpressora(${idx})" style="background:#e74c3c;">Remover</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Modal de Usuário
function abrirModalNovoUsuario() {
    const modal = document.getElementById('modal-novo-usuario');
    modal.innerHTML = `
        <div>
            <h3>Novo Usuário</h3>
            <label>Nome: <input type="text" id="novo-nome"></label><br>
            <label>Email: <input type="email" id="novo-email"></label><br>
            <label>Perfil:
                <select id="novo-perfil">
                    <option>Administrador</option>
                    <option>Usuário</option>
                </select>
            </label><br>
            <button onclick="salvarNovoUsuario()">Salvar</button>
            <button onclick="fecharModal('modal-novo-usuario')" style="background:#888;">Cancelar</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function salvarNovoUsuario() {
    const nome = document.getElementById('novo-nome').value.trim();
    const email = document.getElementById('novo-email').value.trim();
    const perfil = document.getElementById('novo-perfil').value;
    if (nome && email) {
        usuarios.push({ nome, email, perfil });
        renderUsuarios();
        fecharModal('modal-novo-usuario');
    } else {
        alert('Preencha todos os campos.');
    }
}

function editarUsuario(idx) {
    const usuario = usuarios[idx];
    const modal = document.getElementById('modal-novo-usuario');
    modal.innerHTML = `
        <div>
            <h3>Editar Usuário</h3>
            <label>Nome: <input type="text" id="edit-nome" value="${usuario.nome}"></label><br>
            <label>Email: <input type="email" id="edit-email" value="${usuario.email}"></label><br>
            <label>Perfil:
                <select id="edit-perfil">
                    <option${usuario.perfil === "Administrador" ? " selected" : ""}>Administrador</option>
                    <option${usuario.perfil === "Usuário" ? " selected" : ""}>Usuário</option>
                </select>
            </label><br>
            <button onclick="salvarEdicaoUsuario(${idx})">Salvar</button>
            <button onclick="fecharModal('modal-novo-usuario')" style="background:#888;">Cancelar</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function salvarEdicaoUsuario(idx) {
    const nome = document.getElementById('edit-nome').value.trim();
    const email = document.getElementById('edit-email').value.trim();
    const perfil = document.getElementById('edit-perfil').value;
    if (nome && email) {
        usuarios[idx] = { nome, email, perfil };
        renderUsuarios();
        fecharModal('modal-novo-usuario');
    } else {
        alert('Preencha todos os campos.');
    }
}

function removerUsuario(idx) {
    if (confirm('Deseja remover este usuário?')) {
        usuarios.splice(idx, 1);
        renderUsuarios();
    }
}

// Modal de Impressora
function abrirModalNovaImpressora() {
    const modal = document.getElementById('modal-nova-impressora');
    modal.innerHTML = `
        <div>
            <h3>Nova Impressora</h3>
            <label>Nome: <input type="text" id="nova-nome"></label><br>
            <label>Localização: <input type="text" id="nova-localizacao"></label><br>
            <label>Status:
                <select id="nova-status">
                    <option>Ativa</option>
                    <option>Inativa</option>
                </select>
            </label><br>
            <button onclick="salvarNovaImpressora()">Salvar</button>
            <button onclick="fecharModal('modal-nova-impressora')" style="background:#888;">Cancelar</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function salvarNovaImpressora() {
    const nome = document.getElementById('nova-nome').value.trim();
    const localizacao = document.getElementById('nova-localizacao').value.trim();
    const status = document.getElementById('nova-status').value;
    if (nome && localizacao) {
        impressoras.push({ nome, localizacao, status });
        renderImpressoras();
        fecharModal('modal-nova-impressora');
    } else {
        alert('Preencha todos os campos.');
    }
}

function editarImpressora(idx) {
    const impressora = impressoras[idx];
    const modal = document.getElementById('modal-nova-impressora');
    modal.innerHTML = `
        <div>
            <h3>Editar Impressora</h3>
            <label>Nome: <input type="text" id="edit-nome-impressora" value="${impressora.nome}"></label><br>
            <label>Localização: <input type="text" id="edit-localizacao" value="${impressora.localizacao}"></label><br>
            <label>Status:
                <select id="edit-status">
                    <option${impressora.status === "Ativa" ? " selected" : ""}>Ativa</option>
                    <option${impressora.status === "Inativa" ? " selected" : ""}>Inativa</option>
                </select>
            </label><br>
            <button onclick="salvarEdicaoImpressora(${idx})">Salvar</button>
            <button onclick="fecharModal('modal-nova-impressora')" style="background:#888;">Cancelar</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function salvarEdicaoImpressora(idx) {
    const nome = document.getElementById('edit-nome-impressora').value.trim();
    const localizacao = document.getElementById('edit-localizacao').value.trim();
    const status = document.getElementById('edit-status').value;
    if (nome && localizacao) {
        impressoras[idx] = { nome, localizacao, status };
        renderImpressoras();
        fecharModal('modal-nova-impressora');
    } else {
        alert('Preencha todos os campos.');
    }
}

function removerImpressora(idx) {
    if (confirm('Deseja remover esta impressora?')) {
        impressoras.splice(idx, 1);
        renderImpressoras();
    }
}

// Fechar modais
function fecharModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Feedback rápido ao salvar formulários principais
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Configuração salva com sucesso!');
    });
});

// Inicialização ao carregar a página
window.onload = function() {
    renderUsuarios();
    renderImpressoras();
};

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        window.location.href = '../pglogin/index.html';
      });
    }
  });