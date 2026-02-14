/* ============================================
   A CARA DO PEDRO - STYLE.CSS v2.0
   Tecnologia com Propósito | Execução com Resultado
   ============================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ============================================
   VARIÁVEIS DE COR E TIPOGRAFIA
   ============================================ */

:root {
    --primary-color: #0a3a52;
    --secondary-color: #1e5a8e;
    --accent-color: #ff6b35;
    --light-bg: #f8f9fa;
    --dark-text: #1a1a1a;
    --border-color: #e0e0e0;
    --success-color: #27ae60;
    --danger-color: #e74c3c;
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================
   ESTILOS GERAIS
   ============================================ */

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background-color: var(--light-bg);
    color: var(--dark-text);
    line-height: 1.6;
}

/* ============================================
   HEADER E NAVEGAÇÃO
   ============================================ */

header {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: #fff;
    padding: 50px 20px;
    text-align: center;
    border-bottom: 4px solid var(--accent-color);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
}

header p {
    font-size: 1.1rem;
    opacity: 0.95;
    margin-bottom: 30px;
    font-weight: 300;
}

nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 10px 15px;
    border-radius: 4px;
    transition: var(--transition);
    position: relative;
}

nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.15);
}

nav a:hover::after {
    width: 100%;
}

/* ============================================
   SEÇÕES
   ============================================ */

section {
    max-width: 1000px;
    margin: 0 auto;
    padding: 60px 20px;
    scroll-margin-top: 80px;
}

section:nth-child(even) {
    background-color: #fff;
}

section h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: var(--primary-color);
    border-left: 5px solid var(--accent-color);
    padding-left: 15px;
    font-weight: 700;
}

section h3 {
    font-size: 1.3rem;
    margin-top: 25px;
    margin-bottom: 15px;
    color: var(--secondary-color);
    font-weight: 600;
}

section p {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555;
}

/* ============================================
   LISTAS DE SERVIÇOS
   ============================================ */

ul {
    list-style: none;
    margin: 25px 0;
}

ul li {
    background: #fff;
    border-left: 4px solid var(--secondary-color);
    padding: 18px 20px;
    margin-bottom: 12px;
    border-radius: 4px;
    transition: var(--transition);
    font-size: 0.95rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

ul li:hover {
    border-left-color: var(--accent-color);
    background-color: var(--light-bg);
    transform: translateX(8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* ============================================
   BUSCA DE SERVIÇO
   ============================================ */

.busca-servico {
    background: linear-gradient(135deg, var(--light-bg) 0%, #fff 100%);
    padding: 30px;
    border-radius: 8px;
    margin-top: 30px;
    border: 1px solid var(--border-color);
}

.busca-servico h3 {
    margin-top: 0;
}

#searchInput {
    width: 100%;
    padding: 14px 16px;
    font-size: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    transition: var(--transition);
    font-family: var(--font-primary);
}

#searchInput:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(30, 90, 142, 0.1);
}

#resultadoBusca {
    margin-top: 16px;
    padding: 12px 16px;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
    display: none;
}

#resultadoBusca:not(:empty) {
    display: block;
}

#resultadoBusca:has-text {
    background-color: rgba(39, 174, 96, 0.1);
    color: var(--success-color);
}

/* ============================================
   LINKS E CONTATOS
   ============================================ */

a {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

a:hover {
    color: var(--accent-color);
    text-decoration: underline;
}

section#contato p a {
    display: inline-block;
    padding: 10px 0;
    margin: 8px 0;
}

/* ============================================
   FORMULÁRIO (futuro)
   ============================================ */

form input,
form textarea,
form button {
    width: 100%;
    padding: 12px 16px;
    margin: 12px 0;
    font-size: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 6px;
    font-family: var(--font-primary);
    transition: var(--transition);
}

form input:focus,
form textarea:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(30, 90, 142, 0.1);
}

form button {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 10px;
}

form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(10, 58, 82, 0.2);
}

form button:active {
    transform: translateY(0);
}

/* ============================================
   RODAPÉ
   ============================================ */

footer {
    background: var(--primary-color);
    color: #fff;
    text-align: center;
    padding: 30px 20px;
    font-size: 0.9rem;
    border-top: 4px solid var(--accent-color);
    margin-top: 60px;
}

footer p {
    margin: 0;
    opacity: 0.9;
}

/* ============================================
   RESPONSIVIDADE - TABLET
   ============================================ */

@media (max-width: 768px) {
    header {
        padding: 40px 15px;
    }

    header h1 {
        font-size: 2rem;
    }

    header p {
        font-size: 0.95rem;
    }

    nav {
        gap: 10px;
    }

    nav a {
        font-size: 0.85rem;
        padding: 8px 12px;
    }

    section {
        padding: 40px 15px;
    }

    section h2 {
        font-size: 1.6rem;
    }

    section h3 {
        font-size: 1.1rem;
    }

    section p {
        font-size: 0.95rem;
    }

    ul li {
        padding: 15px 16px;
    }
}

/* ============================================
   RESPONSIVIDADE - MOBILE
   ============================================ */

@media (max-width: 480px) {
    header {
        padding: 30px 10px;
    }

    header h1 {
        font-size: 1.5rem;
    }

    header p {
        font-size: 0.85rem;
    }

    nav {
        flex-direction: column;
        gap: 8px;
    }

    nav a {
        font-size: 0.8rem;
        padding: 6px 10px;
    }

    section {
        padding: 30px 10px;
    }

    section h2 {
        font-size: 1.4rem;
        padding-left: 10px;
    }

    section h3 {
        font-size: 1rem;
    }

    section p {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    ul li {
        padding: 12px 14px;
        margin-bottom: 10px;
        font-size: 0.85rem;
    }

    form input,
    form textarea,
    form button {
        padding: 10px 12px;
        font-size: 0.9rem;
    }

    .busca-servico {
        padding: 20px;
    }

    footer {
        padding: 20px 10px;
        font-size: 0.8rem;
    }
}

/* ============================================
   ACESSIBILIDADE E UTILITÁRIOS
   ============================================ */

:focus {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
}

/* Suporte para preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
