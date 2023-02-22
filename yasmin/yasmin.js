var botao = document.getElementById('continue')
var texto1 = document.getElementById('texto1')
var goiaba = document.getElementById('goiaba')
var choose = document.getElementById('choose')
var choose1 = document.getElementById('choose1')
var pidao = document.getElementById('pidao')
var yasmin = document.getElementById('yasmin')
var oi = document.getElementById('oi')
var sim = document.getElementById('sim')
var nao = document.getElementById('nao')
var nerd = document.getElementById('nerd')
var timido = document.getElementById('timido')
var love = document.getElementById('love')
var rindo = document.getElementById('rindo')
var catdance = document.getElementById('catdance')
var buque = document.getElementById('buque')

botao.addEventListener('click', sla)
goiaba.addEventListener('click', sla)
choose.addEventListener('click', sla)
nao.addEventListener('click', negar)
sim.addEventListener('click', sla)

var c = 1
var n = 18
var m = n + 1;

function negar() {
    nao.innerHTML = 'parou de funcionar esse botão,<br> o jeito é o outro'
    nao.style.width = '20%'
}

function sla() {

    if (c < m) {
        switch (c) {
            case 1:
                texto1.innerHTML = '<h1>Esse é meu pedido real de namoro, eu quero um recomeço 100% sincero</h1>'
                buque.style.display = 'block'
                texto1.style.fontSize = '1em'
                break;
            case 2:
                texto1.innerHTML = '<h1>Então, Eu te amo muito e no momento que você chegou melhorou minha vida na hora, e eu não cuidei, mas dessa vez vou cuidar de verdade porque eu te amo muito e nunca mais vou te perder, então quer namorar comigo?</h1>'
                pidao.style.display = 'block'
                texto1.style.fontSize = '1em'
                choose1.style.display = 'block'
                break;
            case 3:
                texto1.innerHTML = '<h1>Me responda no zap :)</h1>'
                catdance.style.display = 'block'
                buque.style.display = 'none'
                botao.style.display = 'none'
                choose1.style.display = 'none'
                break;
        }
        c++
    }
}
