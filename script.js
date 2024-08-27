
function criptografar() {
    const textoInput = document.getElementById('input-texto').value;
    const textoCriptografado = textoInput
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    exibirTexto(textoCriptografado);
}

function descriptografar() {
    const textoInput = document.getElementById('input-texto').value;
    const textoDescriptografado = textoInput
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    exibirTexto(textoDescriptografado);
}

function exibirTexto(texto) {
    const outputDiv = document.getElementById('output');
    
     outputDiv.innerHTML = '';

    const h2 = document.createElement('h2');
    h2.textContent = texto;

    const copiarButton = document.createElement('button');
    copiarButton.textContent = 'Copiar';
    copiarButton.className = 'btn-copiar';
    copiarButton.onclick = function() {
        navigator.clipboard.writeText(texto)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
                
                location.reload();
            })
            .catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
    };

    outputDiv.appendChild(h2);
    outputDiv.appendChild(copiarButton);
}

function inicializarOutput() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML;
}

document.addEventListener('DOMContentLoaded', inicializarOutput);
