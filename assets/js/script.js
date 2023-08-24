/*
Autor: Jorge Marcelo
Data de Criação: 16/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

let textArea = document.getElementById("textarea");
let contadorChar = document.getElementById("contadorChar");
let contadorWord = document.getElementById("contadorWord");
let charStyle = document.getElementById("charStyle");
let wordStyle = document.getElementById("wordStyle");

/*Função que faz a contagem*/
function contadores(evento){
evento.preventDefault();

/*Pegando o comprimento dos caracteres*/
contadorChar.textContent = textArea.value.length;
/*Removendo os espaços para não contar como caractetrs*/
let texto = textArea.value.trim();

/*Usando a Regex para contar os espaços como palavras*/
let wordArray = texto.split(/\s+/).filter(item => item);
contadorWord.textContent = wordArray.length;
}
/*Escutador de evento dos contadores*/
textArea.addEventListener("input", contadores);

/*Limitadores*/
function limitadores(evento){
evento.preventDefault();

/*Condições para cada limite de caracteres*/
if (textArea.value.length > 130){
textArea.style.borderColor = "red";
textArea.style.color = "red";

wordStyle.style.color = "red";
wordStyle.style.borderColor = "red";

charStyle.style.color = "red";
charStyle.style.borderColor = "red";

contadorChar.style.color = "red";
contadorWord.style.color = "red";
}

if (textArea.value.length === 130){
textArea.style.borderColor = "blue";
textArea.style.color = "blue";

wordStyle.style.color = "blue";
wordStyle.style.borderColor = "blue";

charStyle.style.color = "blue";
charStyle.style.borderColor = "blue";

contadorChar.style.color = "blue";
contadorWord.style.color = "blue";
}

if (textArea.value.length < 130){
textArea.style.borderColor = "white";
textArea.style.color = "white";

wordStyle.style.color = "white";
wordStyle.style.borderColor = "white"

charStyle.style.color = "white";
charStyle.style.borderColor = "white"

contadorChar.style.color = "white";
contadorWord.style.color = "white";
}
}
textArea.addEventListener("input", limitadores);


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})


