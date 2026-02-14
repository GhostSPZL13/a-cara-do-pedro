* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #0f0f0f;
    color: #f1f1f1;
    line-height: 1.6;
    scroll-behavior: smooth;
}

/* HEADER */

header {
    background: #1a1a1a;
    padding: 60px 20px;
    text-align: center;
    border-bottom: 2px solid #00ff88;
}

header h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    color: #00ff88;
}

header p {
    color: #ccc;
    margin-bottom: 25px;
    font-size: 1.1rem;
}

nav {
    margin-top: 20px;
}

nav a {
    color: #f1f1f1;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #00ff88;
}

/* BOTÃO CTA */

button {
    padding: 12px 25px;
    border: none;
    background: #00ff88;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
}

button:hover {
    background: #00cc6a;
    transform: scale(1.05);
}

/* SECTIONS */

section {
    padding: 70px 20px;
    max-width: 900px;
    margin: auto;
}

h2 {
    margin-bottom: 25px;
    color: #00ff88;
    border-left: 4px solid #00ff88;
    padding-left: 10px;
}

/* LISTAS */

ul {
    list-style: none;
    margin-top: 20px;
}

ul li {
    background: #1a1a1a;
    padding: 15px;
    margin-bottom: 12px;
    border-left: 4px solid #00ff88;
    transition: 0.3s;
    border-radius: 5px;
}

ul li:hover {
    background: #222;
    transform: translateX(5px);
}

/* BUSCA */

.busca-servico input {
    padding: 12px;
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
}

#resultadoBusca {
    margin-top: 10px;
    font-weight: bold;
}

/* GALERIA */

.galeria {
    text-align: center;
    margin-top: 30px;
}

.foto {
    width: 250px;
    border-radius: 10px;
    margin: 10px;
    transition: 0.3s;
}

.foto:hover {
    transform: scale(1.05);
}

/* FOOTER */

footer {
    text-align: center;
    padding: 30px;
    background: #1a1a1a;
    margin-top: 40px;
    font-size: 0.9rem;
}
