const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let clickPresionado = 0
let animacaoAtual = 1.5


const jump=()=>{
    mario.classList.add('jump')
    clickPresionado += 1

    if(clickPresionado == 3){
       animacaoAtual -= 0.1
        pipe.style.animation = `pipe-animation ${animacaoAtual}s infinite linear`;
        clickPresionado = 0
    
    }
    

    

    

    
    

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)

} 



const loop = setInterval(() =>{

    console.log('loop')
 const pipePosition = pipe.offsetLeft;
 const marioposition = +window.getComputedStyle(mario).bottom.replace('px', ''); 
 console.log(marioposition)


 
 if(pipePosition <=120 && pipePosition > 0 && marioposition < 80){
    pipe.style.animation ='none'
    pipe.style.left = `${pipePosition}px`

     mario.style.animation ='none'
    mario.style.bottom = `${marioposition}px`

    mario.src = './img/game-over.png';
    mario.style.width ='75px'
    mario.style.marginLeft ='50px'

    clearInterval(loop);
 }

}, 10);


document.addEventListener('keydown', jump)
