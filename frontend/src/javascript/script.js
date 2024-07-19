document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('butaologin');
    const cadastroButton = document.getElementById('butaocadastro');
    const loginForm = document.getElementById('login');
    const cadastroForm = document.getElementById('cadastro');

    // Inicialmente, mostra apenas o formulário de login
    loginForm.style.display = 'block';
    cadastroForm.style.display = 'none';

    loginButton.addEventListener('click', function() {
        loginForm.style.display = 'block';
        cadastroForm.style.display = 'none';
    });

    cadastroButton.addEventListener('click', function() {
        loginForm.style.display = 'none';
        cadastroForm.style.display = 'block';
    });
});
