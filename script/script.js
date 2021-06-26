function calcular() {
    let assinatura = document.getElementById('assinatura')
    assinatura.style.display = 'none'

    let inputAdultos = document.getElementById('adultos')
    let inputCriancas = document.getElementById('criancas')
    let inputDuracao = document.getElementById('duracao')

    var resultado = document.getElementById('resultado')
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    let totalCarne = 0
    let totalCerveja = 0
    let totalBebida = 0

    if (adultos < 0 || criancas < 0 || duracao < 0) {
        alert('Digite valores válidos!')
    } else if (adultos == 0 && criancas == 0) {
        alert('Não há churrasco sem pessoas ;)')
    } else {
        if (duracao > 6) {
            totalCarne += (650 * adultos) + (325 * criancas)
            totalCerveja += adultos * 2000
            totalBebida += (adultos * 1500) + (criancas * 750) 

        } else {
            totalCarne += (400 * adultos) + (200 * criancas)
            totalCerveja += adultos * 1200
            totalBebida += (adultos * 1000) + (criancas * 500)
        }
    }

    let carneKg = totalCarne / 1000
    let latasCerveja = Math.ceil(totalCerveja / 350)
    let garrafas = Math.ceil((totalBebida / 1000) / 2)

    if (carneKg != 0 || latasCerveja != 0 || garrafas != 0) {
        resultado.innerHTML = `<p>${carneKg}kg de Carne</p><p>${latasCerveja} latas de cerveja</p><p>${garrafas} garrafa(s) de 2 litros</p>`        
    }
    
}

function reset() {
    let inputAdultos = document.getElementById('adultos')
    let inputCriancas = document.getElementById('criancas')
    let inputDuracao = document.getElementById('duracao')
    var resultado = document.getElementById('resultado')

    inputAdultos.value = ''
    inputCriancas.value = ''
    inputDuracao.value = ''
    resultado.innerHTML = ''
}