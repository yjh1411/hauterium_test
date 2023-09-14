document.querySelector('.header').classList.add('black')
document.querySelectorAll('.ft--s2-r-tit').forEach((el,idx) => {
    el.addEventListener('click', e => {
        const parent = el.closest('.ft--s2-r-col')
        parent.classList.toggle('open')
    })
})

// 푸터 펑션
const s6SwitchTextBtn = document.querySelector('.ft--s3-switch-text-btn');
const s6SwitchPop = document.querySelector('.ft--s3-switch-pop');
s6SwitchTextBtn.addEventListener('mouseenter', () => s6SwitchPop.classList.add('show'));
s6SwitchTextBtn.addEventListener('mouseleave', () => s6SwitchPop.classList.remove('show'));
s6SwitchTextBtn.addEventListener('focus', () => s6SwitchPop.classList.add('show'));
s6SwitchTextBtn.addEventListener('blur', () => s6SwitchPop.classList.remove('show'));
const s6SwitchDown = document.querySelector('.ft--s3-switch-down');
const s6 = document.querySelector('.ft--s3');
const s6Cont = s6.querySelector('.ft--s3-cont');
s6SwitchDown.addEventListener('click', () => {
    var isOpen = s6.classList.contains('show')
    if(isOpen){
        s6SwitchDown.setAttribute('aria-expanded', 'false');
        s6Cont.setAttribute('aria-hidden', 'true');
        s6.classList.remove('show');
    }else{
        s6SwitchDown.setAttribute('aria-expanded', 'true');
        s6Cont.setAttribute('aria-hidden', 'false');
        s6.classList.add('show');
    }
});

//헤더 버튼 펑션
const headerOpenList = document.querySelectorAll('.header--openList');
const headerOpenBtn = document.querySelectorAll('.header--openBtn');
headerOpenBtn.forEach((el,idx) => {
    el.addEventListener('click', e => {
        const parent = el.parentNode
        if(parent.querySelector('.header--openList').classList.contains('open')){
            el.classList.remove('open')
            parent.querySelector('.header--openList').classList.remove('open')
            return
        }
        for(item of headerOpenBtn){
            item.classList.remove('open')
        }
        for(item of headerOpenList){
            item.classList.remove('open')
        }
        parent.querySelector('.header--openList').classList.toggle('open')
        parent.querySelector('.header--openBtn').classList.toggle('open')
    })
})
const mobMenuBtn = document.querySelectorAll('.mob--menu-openBtn');
const mobMenuList = document.querySelectorAll('.mob--menu-openList');
mobMenuBtn.forEach((el,idx) => {
    el.addEventListener('click', e => {
        const parent = el.parentNode
        if(parent.querySelector('.mob--menu-openList').classList.contains('open')){
            el.classList.remove('open')
            parent.querySelector('.mob--menu-openList').classList.remove('open')
            return
        }
        for(item of mobMenuBtn){
            item.classList.remove('open')
        }
        for(item of mobMenuList){
            item.classList.remove('open')
        }
        parent.querySelector('.mob--menu-openList').classList.toggle('open')
        parent.querySelector('.mob--menu-openBtn').classList.toggle('open')
    })
})
// 스크롤 막는 펑션
function scrollOff(){
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}
function scrollOn(){
    document.body.style.overflow = null;
}
document.querySelector('.header--r-mob-menu').addEventListener('click',function(){
    scrollOff()
    document.querySelector('.mob--menu').classList.add('open')
})
document.querySelector('.mob--menu-close').addEventListener('click',function(){
    scrollOn()
    document.querySelector('.mob--menu').classList.remove('open')
})
window.addEventListener('resize',function(){
    if(window.innerWidth > 1024){
        scrollOn()
        document.querySelector('.mob--menu').classList.remove('open')
    }
})


// 알럿 
document.querySelectorAll('.alertReady').forEach(el => {
    el.addEventListener('click',function(){
        alert('준비중 입니다.')
    })
})