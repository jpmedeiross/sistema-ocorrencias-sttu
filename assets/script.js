document.querySelectorAll('[newTab]').forEach(link => {
    const conteudo = document.getElementById('conteudo')
    
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('newTab'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})