document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha os valores dos campos de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples para o login
    if (username === 'admin' && password === '123456') {
        alert('Login bem-sucedido!');
        window.location.href = '/dashboard';  // Redireciona para a página de dashboard (ou qualquer outra página)
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
// Abrir modal de Termos de Serviço
document.getElementById('termsLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('termsModal').style.display = 'block';
});

// Abrir modal de Política de Privacidade
document.getElementById('privacyLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('privacyModal').style.display = 'block';
});

// Fechar modais
document.getElementById('closeTerms').addEventListener('click', function() {
    document.getElementById('termsModal').style.display = 'none';
});

document.getElementById('closePrivacy').addEventListener('click', function() {
    document.getElementById('privacyModal').style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('termsModal') || event.target == document.getElementById('privacyModal')) {
        document.getElementById('termsModal').style.display = 'none';
        document.getElementById('privacyModal').style.display = 'none';
    }
});
