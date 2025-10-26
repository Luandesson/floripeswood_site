/**
 * main.js
 * Arquivo de script personalizado para Floripes Wood Design
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Script para alterar o estilo do Header ao rolar a página
    const mainNav = document.getElementById('main-nav');
    const scrollThreshold = 50; // Altera após 50px de rolagem

    if (mainNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                // Adiciona uma classe para mudar o fundo ou adicionar uma borda
                mainNav.classList.add('scrolled');
            } else {
                // Remove a classe quando volta ao topo
                mainNav.classList.remove('scrolled');
            }
        });
    }

    // 2. Script para fechar o menu mobile do Bootstrap após clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapseElement = document.getElementById('navbarNav');

    if (navbarCollapseElement) {
        // Inicializa o objeto Collapse do Bootstrap UMA VEZ
        const bsCollapse = new bootstrap.Collapse(navbarCollapseElement, {
            toggle: false
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Se o menu estiver visível (classe 'show'), esconde
                if (navbarCollapseElement.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }


    // 3. (OPCIONAL) Validação simples de formulário antes de enviar
    const quoteForm = document.getElementById('quote-form');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(event) {
            // Se você usar um serviço de backend, descomente 'event.preventDefault()'
            // para fazer a validação JS antes de enviar.
            // event.preventDefault();
            
            // Lógica de validação adicional pode ser adicionada aqui
            console.log("Formulário de orçamento enviado!");
            // Exemplo de alerta (descomente para testar)
            // alert("Thank you for your request! We will contact you shortly.");
        });
    }
});