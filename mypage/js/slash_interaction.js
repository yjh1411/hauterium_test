$('.interaction--text-btn').click(function(){
    $(this).closest('.interaction--text-row').removeClass('active')
    $(this).closest('.interaction--text-row').find('*').addClass('delay0')
    setTimeout(()=>{
        $(this).closest('.interaction--text-row').find('*').removeClass('delay0')
        $(this).closest('.interaction--text-row').addClass('active')
    },100)
})
function sliceTextBySpace(el, spd){
    const delayInterval = spd
    const text = el.innerText
    const textArr = text.split(' ')
    console.log(textArr.length)
    const textArr2 = textArr.map((item, idx)=>{
        if(idx < textArr.length - 1) {item = item + '&nbsp;';}
        return `<div class="interaction--text-p-div"><span style="transition-delay:${idx/delayInterval}s">${item}</span></div>`
    })
    el.innerHTML = ''
    el.innerHTML = textArr2.join('')
}
function sliceTextByAlphabet(el,speed){

    let delayInterval = speed
    let text = el.innerText
    el.innerHTML = ''
    let textArr = text.split(' ')
    let alphabetCount = 0;

    textArr.forEach((textItem, idx)=>{

        let wrap = document.createElement('div')
        wrap.classList.add('interaction--text-p-div')
        let wordArr = textItem.split('')

        wordArr.forEach((wordItem, idx2)=>{

            let span = document.createElement('span')
            span.innerText = wordItem
            span.style.transitionDelay = `${(alphabetCount)/delayInterval}s`
            wrap.appendChild(span)
            alphabetCount += 1
            if(idx2 == wordArr.length - 1 && idx < textArr.length - 1){ 
                let emptySpan = document.createElement('span')
                let space = '\u00A0'
                emptySpan.innerText = space
                wrap.appendChild(emptySpan)
            }
        })
        el.appendChild(wrap)
    })
}
function sliceTextByAlphabet2(el,speed){

    let delayInterval = speed
    let text = el.innerText
    el.innerHTML = ''
    let textArr = text.split(' ')
    let alphabetCount = 0;

    textArr.forEach((textItem, idx)=>{

        let wrap = document.createElement('div')
        wrap.classList.add('interaction--text-p-div')
        let wordArr = textItem.split('')

        wordArr.forEach((wordItem, idx2)=>{
            let spanParent = document.createElement('div')
            spanParent.classList.add('interaction--text-p-div-parent')
            let span = document.createElement('span')
            span.innerText = wordItem
            span.style.transitionDelay = `${(alphabetCount)/delayInterval}s`
            spanParent.appendChild(span)
            wrap.appendChild(spanParent)
            alphabetCount += 1
            if(idx2 == wordArr.length - 1 && idx < textArr.length - 1){ 
                let emptySpan = document.createElement('span')
                let space = '\u00A0'
                emptySpan.innerText = space
                wrap.appendChild(emptySpan)
            }
        })
        el.appendChild(wrap)
    })
}
const randomAlphabet = [
'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
'!','@','#','$','%','^','&','*','(',')','_','+','-','=','{','}','[',']','|','\\',':',';','"',"'",'<','>',',','.','?','/','~','`',
'0','1','2','3','4','5','6','7','8','9'
]
function alphabetSuffle(el,spd,delay){
    let text = el.innerText
    let textArr = text.split('')
    el.innerHTML = ''
    textArr.forEach((item,idx)=>{

        let span = document.createElement('span')
        if (item == ' ') {item = '\u00A0'}
        span.innerText = item
        el.appendChild(span)

        let shuffle = setInterval(()=>{
            let randomText = ''
            let randomIdx = Math.floor(Math.random() * randomAlphabet.length)
            randomText += randomAlphabet[randomIdx]
            span.innerText = randomText
        },spd)
        setTimeout(()=>{
            clearInterval(shuffle)
            span.innerText = item
        },idx * delay)

    })
    setTimeout(()=>{
        el.innerHTML = text
    },textArr.length * delay)
}
const interactionText03 = document.querySelector('.interaction--textType03 .interaction--text-p')
const interactionText04 = document.querySelector('.interaction--textType04 .interaction--text-p')
const interactionText05 = document.querySelector('.interaction--textType05 .interaction--text-p')
const interactionText07 = document.querySelector('.interaction--textType07 .interaction--text-p')
sliceTextBySpace(interactionText03, 30)
sliceTextByAlphabet(interactionText04, 20)
sliceTextByAlphabet2(interactionText05, 20)
document.querySelector('.interaction--text-btn7').addEventListener('click',function(){
    alphabetSuffle(interactionText07,20,200)
})

// interaction animation
function rotationInteraction(el){
    let direction = el.getAttribute('data-rotation-direction')
    var spd = 10000/(el.getAttribute('data-rotation-speed'))
    var dir = '360deg'
    if(direction === 'left'){
        dir = '-360deg'
    }else if (direction === 'right'){
        dir = '360deg'
    }
    anime({
        targets: el,
        rotate: dir,
        duration: spd,
        easing: 'linear',
        loop: true,
    })
}
const interactionRotateEl = document.querySelectorAll('[data-rotation]')
interactionRotateEl.forEach((item,idx)=>{
    rotationInteraction(item)
})
document.querySelectorAll('.interaction--belt01 .interaction--beltItem').forEach(function(item,idx){
    anime({
        targets: item,
        translateX:'-100%',
        duration:5000,
        easing:'linear',
        loop: true,
    })
})
document.querySelectorAll('.interaction--belt02 .interaction--beltItem').forEach(function(item,idx){
    anime({
        targets: item,
        translateX:['-100%','0%'],
        duration:5000,
        easing:'linear',
        loop: true,
    })
})

// mouse pointer
const mouseSpeed = {
    target01: 0.1,
    target02: 0.3,
    target03: 0.2,
}
window.addEventListener("mousemove", e => {
    let [ x, y ] = [ e.clientX, e.clientY ]
    anime({
        targets: '#pointerItem01',
        translateX: x,
        translateY: y,
        duration:100,
    })
    anime({
        targets: '#pointerItem02',
        translateX: x,
        translateY: y,
        duration:100,
        easing:'easeOutQuad',
    })
    anime({
        targets: '#pointerItem03',
        translateX: x,
        translateY: y,
        duration:50,
        easing:'easeOutQuad',
    })
})

const mouseDetectElements = document.querySelectorAll('[data-mouse]')
const pointer = document.getElementById('pointer')
mouseDetectElements.forEach((item,idx)=>{
    var itemText = ''
    var itemType = 'type'
    if(item.hasAttribute('data-mouse-text')){
        itemText = item.getAttribute('data-mouse-text')
    }
    if(item.hasAttribute('data-mouse-type')){
        itemType = item.getAttribute('data-mouse-type')
    }
    item.addEventListener('mouseenter',function(){
        pointer.classList.add('pointer--hover')
        pointer.classList.add(itemType)
        document.querySelector('#pointerItem03 div').innerText = itemText
    })
    item.addEventListener('mouseleave',function(){
        pointer.classList.remove('pointer--hover')
        pointer.classList.remove(itemType)
        document.querySelector('#pointerItem03 div').innerText = ''
    })
})