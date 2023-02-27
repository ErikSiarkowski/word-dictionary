const enviar = document.getElementById('submit');
const inputValor = document.querySelector('#search-word')
const resultados = document.querySelector('.search-results')
var url = `https://dicio-api-ten.vercel.app/v2/ `
var palavra = ""
enviar.addEventListener('click', ()=>{
    palavra = inputValor.value;
    url = `https://dicio-api-ten.vercel.app/v2/${palavra}`;
    
    getSignificado();
})

async function getSignificado(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].meanings)

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    elemento = document.querySelector('.temp')
    if(elemento){
        resultados.removeChild(elemento)
    }
    p.innerText = data[0].meanings;
    h1.innerText = palavra;
    div.appendChild(h1);
    div.appendChild(p);
    div.classList.add('temp')
    console.log(div)
    resultados.appendChild(div);
}