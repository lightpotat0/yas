var botao = document.getElementById('continue')
var texto1 = document.getElementById('texto1')
var goiaba = document.getElementById('goiaba')
var gato = document.getElementById('gato')

botao.addEventListener('click', sla)
goiaba.addEventListener('click', sla)

var c = 1
var n = 18
var m = n + 1;

function sla() {

    if (c < m) {
        switch (c) {
            case 1:
                texto1.innerHTML = '<h1>Então, um site chato denovo haha</h1>'
                texto1.style.fontSize = '1em'
                break;
            case 2:
                texto1.innerHTML = '<h1>pegue essa goiaba kkk</h1>'
                goiaba.style.display = 'block'
                botao.style.display = 'none'
                break;
            case 3:
                texto1.innerHTML = '<h1>achou que ela ia fugir kk? não, era só pra pegar mesmo</h1>'
                goiaba.style.display = 'none'
                botao.style.display = 'block'
                break;
            case 4: 
                texto1.innerHTML = '<h1>Então, é o dia das mulheres então resolvi fazer um presente pra mulher mais especial desse mundo</h1>'
                break;
            case 5:
                texto1.innerHTML = '<h1>não tem como eu lhe dar um presente, mas posso dar uma mensagem legal</h1>'
                break;
            case 6:
                texto1.innerHTML = '<h1>Yasmin, você é uma garota muito especial, a mais especial e linda deste mundo, hoje é um dia que temos que ressaltar mulheres incríveis como você</h1>'
                break;
            case 7:
                texto1.innerHTML = '<h1>Apenas a melhor jogadora de FF do mundo, dá capa na minha mente😎</h1>'
                break;
            case 8:
                texto1.innerHTML = '<h1>Como pode existir alguém tão perfeita como você, Afrodite ta pedindo o título de Deusa da Beleza de volta</h1>'
                break;
            case 9:
                texto1.innerHTML = '<h1>Uma mulher muito inteligente também, como você faz pra ser linda e inteligente ao mesmo tempo?</h1>'    
                break;
            case 10:
                texto1.innerHTML = '<h1>Yasmin, parabéns por ser mulher(OBS:Mulherão), e ser a pessoa maravilhosa que você é, continue assim que não há ninguém como você</h1>'
                break;
            case 11:
                texto1.innerHTML = '<h1>Boa noite e feliz dia das mulheres princesa gatinha</h1>'
                gato.style.display = 'block'
                botao.style.display = 'none'
                break;
            }
        c++
    }
}