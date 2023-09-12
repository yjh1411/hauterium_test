let mouseField, pointer01, pointer02, pointerSpan01, pointerSpan02;

pointer01 = document.createElement('div')
pointer01.classList.add('pointerWrap')
pointerSpan01 = document.createElement('span')
pointerSpan01.classList.add('pointerSpan01')
pointer01.append(pointerSpan01)

pointer02 = document.createElement('div')
pointer02.classList.add('pointerWrap')
pointerSpan02 = document.createElement('span')
pointerSpan02.classList.add('pointerSpan02')
pointer02.append(pointerSpan02)


mouseField = document.getElementById('mouseField')
if(mouseField){
    mouseField.append(pointer02, pointer01)
    mouseField.style.position = 'fixed'
    mouseField.style.top = 0
    mouseField.style.left = 0
    mouseField.style.width = "100%"
    mouseField.style.height = "100%"
    mouseField.style.pointerEvents = "none"
}

window.addEventListener("mousemove", e => {
    let [ x, y ] = [ e.clientX, e.clientY ]
    TweenLite.to(pointer01,.1,{
        css:{transform:`matrix(1,0,0,1,${x},${y})`},
    })
    TweenLite.to(pointer02,.2,{
        css:{transform:`matrix(1,0,0,1,${x},${y})`},
        delay:.04,
    })
})