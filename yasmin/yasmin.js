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
                texto1.innerHTML = '<h1>Olha, eu queria fazer algo legal kkk, eu sei que isso é bem nerdola</h1>'
                nerd.style.display = 'block'
                texto1.style.fontSize = '1em'
                break;
            case 2:
                texto1.innerHTML = '<h1>Vamos deixar de conversa e vamos logo para o joguinho</h1>'
                nerd.style.display = 'none'
                texto1.style.fontSize = '1em'
                break;
            case 3:
                texto1.innerHTML = '<h1>Vamos Pegue essa goiaba :)</h1>'
                goiaba.style.display = 'block'
                botao.style.display = 'none'
                break;
            case 4:
                goiaba.style.marginLeft = '20%'
                break;
            case 5:
                goiaba.style.marginLeft = '50%'
                goiaba.style.marginTop = '10%'
                break;
            case 6:
                goiaba.style.marginLeft = '40%'
                goiaba.style.marginTop = '5%'
                break;
            case 7:
                texto1.innerHTML = '<h1>Você por acaso é lesada gatinha? Não tem como comer essa goiaba, ela é uma imagem XD</h1>'
                goiaba.style.display = 'none'
                rindo.style.display = 'block'
                botao.style.display = 'block'
                break;
            case 8:
                texto1.innerHTML = '<h1>Agora vamos ver se você não é lesada mesmo,<br> Qual desses é uma gatinha?</h1>'
                botao.style.display = 'none'
                rindo.style.display = 'none'
                choose.style.display = 'block'
                break;
            case 9:
                texto1.innerHTML = '<h1>Você acertou se escolheu essa</h1>'
                pidao.style.display = "none"
                botao.style.display = 'block'
                yasmin.style.paddingRight = '0%'
                break;
            case 10:
                texto1.innerHTML = '<h1>VAMOS UMA CANTADA AGORA</h1>'
                love.style.display = 'block'
                choose.style.display = 'none'
                break;
            case 11:
                texto1.innerHTML = '<h1>Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui.</h1>'
                oi.style.display = 'block'
                love.style.display = 'none'
                oi.style.padding = '10px'
                break;
            case 12:
                texto1.innerHTML = '<h1>KK desculpa, só queria ser legal</h1>'
                timido.style.display = 'block'
                oi.style.display = 'none'
                break;
            case 13:
                texto1.innerHTML = '<h1>De verdade, você é a pessoa mais especial e incrivel que conheci<br> e que amo muito</h1>'
                break;
            case 14:
                texto1.innerHTML = '<h1>Por isso queria saber...<br>Você gosta de mim?</h1>'
                botao.style.display = 'none'
                timido.style.display = 'none'
                choose1.style.display = 'block'
                break;
            case 15:
                texto1.innerHTML = '<h1>Que bom gatinha, eu fico muito feliz :)</h1>'
                botao.style.display = 'block'
                choose1.style.display = 'none'
                love.style.display = 'block'
                break;
            case 16:
                texto1.innerHTML = '<h1>Mas agora estou convidando para sair comigo :) <br> responda no zap</h1>'
                love.style.display = 'block'
                break;
            case 17:
                texto1.innerHTML = '<h1>Te amo</h1>'
                love.style.display = 'none'
                catdance.style.display = 'block'
                botao.style.display = 'none'
                break;   
        }
        c++
    }
}
