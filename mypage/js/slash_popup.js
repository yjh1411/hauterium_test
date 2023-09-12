//script for use popup
document.addEventListener('DOMContentLoaded', function() {
    //create the popup text. first is title, second is content.
    //for example, pop01text is first popup's text.
    //if you want to add popup, add pop03text, pop04text, ...
    //last, push your popup's text in popupTextArr.
    const pop01text = [
    '이용약관',

    `첫팝내용.<br><br>
    <span>
    내용은 이러이러합니다. &nbsp;&nbsp;&nbsp;내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.<br><br>
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.<br><br>
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.<br><br>
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.<br><br>
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.
    내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다. 내용은 이러이러합니다.<br><br>
    </span>
    `]
    const pop02text = [
    '개인정보처리방침',

    `두팝.<br>
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.<br><br>
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.
    두번째팝입니다. 감사합니다. 두번째팝입니다. 감사합니다 두번째팝입니다. 감사합니다.<br><br>
    `]
    const popTextArr = [pop01text, pop02text]


    //agreepopup elements setting
    const agreePop = document.getElementById('agreePop')
    const agreePopBg = document.createElement('div')
    agreePopBg.classList.add('agreePop--bg')
    agreePop.append(agreePopBg)
    const agreePopContWrap = document.createElement('div')
    agreePopContWrap.classList.add('agreePop--contWrap')
    agreePop.append(agreePopContWrap)

    //get popup texts and make popup contents
    const agreePopContArr = []
    popTextArr.forEach(el => {
        let agreePopCont = document.createElement('div')
        agreePopCont.classList.add('agreePop--cont')
        agreePopCont.innerHTML = `
        <div class="agreePop--top">
            <div class="agreePop--tit">${el[0]}</div>
            <div class="agreePop--close"><span></span><span></span></div>
        </div>
        <div class="agreePop--body">${el[1]}</div>
        `

        agreePopContWrap.append(agreePopCont)
        agreePopContArr.push(agreePopCont)
    })

    //function when open popup
    //if use locomotive scroll, activate the locoScroll functions in each function
    var winY = window.scrollY
    var savedWinY = winY
    window.addEventListener('resize',e => {
        winY = window.scrollY
    })
    window.addEventListener('scroll',e => {
        winY = window.scrollY
    })
    function agreePopOpen(){
        // locoScroll.stop()
        // document.body.classList.add('hidden')
        agreePop.classList.add('show')
        savedWinY = winY
        document.body.style.position = 'fixed';
        document.body.style.top = `-${winY}px`;
    }
    //function when close popup
    function agreePopClose(){
        // locoScroll.start()
        // document.body.classList.remove('hidden')
        agreePop.classList.remove('show')
        document.body.style.position = 'relative';
        document.body.style.top = '';
        window.scrollTo(savedWinY,savedWinY)
    }

    //the open popup button must include a js-openPop class
    //also it must include a data-pop attribute.
    //and the attribute value is index number of popup.(the value type must be number)
    //if you click the button with the attribute value 1, the first popup will be open.
    const openPopBtn = document.querySelectorAll('.js-openPop')
    openPopBtn.forEach(function(el){
        el.addEventListener('click', e => {
            let popIdx = Number(el.getAttribute('data-pop') - 1)
            console.log(popIdx)
            if(!Number.isInteger(popIdx) || popIdx < 0 || popIdx > agreePopContArr.length - 1){
                console.log("wrong data-pop value")
                return
            }
            for(let a of agreePopContArr){
                a.classList.remove('selected')
            }
            agreePopContArr[popIdx].classList.add('selected')
            agreePopOpen()
        })
    })

    const agreePopCloseBtn = document.querySelectorAll('.agreePop--close')
    agreePopCloseBtn.forEach(function(el){
        el.addEventListener('click', e => {
            console.log('hi')
            agreePopClose()
        })
    })
    agreePopBg.addEventListener('click',e => {
        agreePopClose()
    })
}, false);