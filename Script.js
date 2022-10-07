function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let nivel = ''

        if (fsex[0].checked){
            genero = 'homem'
            if (idade < 14){
                nivel = 'criança'
                img.setAttribute('src', 'criança_homem.png')
            }
            else if (idade < 21){
                nivel = 'jovem'
                img.setAttribute('src', 'jovem_homem.png')
            }
            else if (idade < 50){
                nivel = 'adulto'
                img.setAttribute('src', 'adulto_homem.png')
            }
            else{
                nivel = 'idoso'
                img.setAttribute('src', 'idoso_homem.png')
            }

        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade < 14){
                nivel = 'criança'
                img.setAttribute('src', 'criança_mulher.png')
            }
            else if (idade < 21){
                nivel = 'jovem'
                img.setAttribute('src', 'jovem_mulher.png')
            }
            else if (idade < 50){
                nivel = 'adulto'
                img.setAttribute('src', 'adulto_mulher.png')
            }
            else{
                nivel = 'idoso'
                img.setAttribute('src', 'idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${nivel} / ${genero} / ${idade}`
        res.appendChild(img)
    }
}
