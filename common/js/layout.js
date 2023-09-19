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

//로그인 처리
const temp = localStorage.getItem("HAUTE_RIUM_IF");
let user_info = {
    email: "",
    name: "",
    image: {}
};
try {
    user_info = JSON.parse(temp);
} catch (e) { }
let user_k = localStorage.getItem("HAUTE_RIUM_K");

//login_info id 생성
document.getElementsByClassName("header--member-btn header--openBtn")[0].id = "login_info";

//로그인/회원가입 버튼 생성
const header_btn = document.getElementsByClassName("header--member");
//<div id="login_btn" class="header--member-btn header--openBtn">로그인/회원가입</div>
const make_div = document.createElement('div');
make_div.classList.add("header--member-btn");
make_div.classList.add("header--openBtn");
make_div.id = "login_btn";
make_div.innerText = "로그인/회원가입";
header_btn[0].appendChild(make_div);

if (user_info == null || user_info == "" || user_info.email == "") {
    document.getElementById("login_btn").style.display = "block";
    document.getElementById("login_info").style.display = "none";
} else {
    document.getElementById("login_btn").style.display = "none";
    document.getElementById("login_info").style.display = "";

    document.getElementById("login_info").innerHTML = `<p>${user_info.name}</p> <span></span>`;
    document.getElementsByClassName("header--member-name")[0].innerHTML = `${user_info.name} 님`;
    document.getElementsByClassName("header--member-mail")[0].innerHTML = `${user_info.email}`;
}

document.getElementById("login_btn").addEventListener('click',function(){
    window.location.href = "http://hauterium.com/sign/?from=main";
});

document.querySelector(".header--member-console").addEventListener('click',function(){
    window.location.href = "http://hauterium.com/console/booth/";
});

document.querySelector(".header--member-mypage").addEventListener('click',function(){
    window.location.href = "http://hauterium.com/mypage/";
});

document.querySelector(".header--cs").addEventListener('click',function(){
    window.location.href = "http://hauterium.com/console/booth/";
});

document.querySelector(".header--member-logout").addEventListener('click',function(){
    localStorage.removeItem("HAUTE_RIUM_IF");
    localStorage.removeItem("HAUTE_RIUM_K");
    localStorage.removeItem("HAUTE_RIUM");
    user_name = null;
    user_image = null;
    user_k = null;
    document.getElementById("login_btn").style.display = "block";
    document.getElementById("login_info").style.display = "none";
    document.querySelectorAll(".header--openList").forEach(item => {
        item.classList.remove("open");
    })
});

//구글 번역
const create_google_translate_element = document.createElement("div");
create_google_translate_element.id = "google_translate_element";
create_google_translate_element.style.display = "none";
document.body.appendChild(create_google_translate_element);

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'ko',
            autoDisplay: true,
            includedLanguages : 'en,ko'
        },
        'google_translate_element'
    );
}

var script = document.createElement("script");
script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(script);

document.querySelector('.translation-links').addEventListener('click',function(event) {
    let el = event.target;
    if(el != null){
        while(el.nodeName == 'FONT' || el.nodeName == 'SPAN'){el = el.parentElement;}//data-lang 속성이 있는 태그 찾기
        const tolang = el.dataset.lang; // 변경할 언어 코드 얻기
        
        translatePage(tolang);
    }
    return false;
});

const translatePage = (tolang) => {

    const gtcombo = document.querySelector('.goog-te-combo');
    if (gtcombo == null) {
        alert("Error: Could not find Google translate Combolist.");
        return false;
    }

    gtcombo.value = tolang; // 변경할 언어 적용
    gtcombo.dispatchEvent(new Event('change')); // 변경 이벤트 트리거
    //ko > en 버그 있어서 무조건 한번 더 호출
    setTimeout(() => {
        gtcombo.dispatchEvent(new Event('change')); // 변경 이벤트 트리거
    },100)
    
    // sessionStorage.setItem("lang", tolang);
    document.querySelectorAll(".header--openList").forEach(item => {
        item.classList.remove("open");
    })
}