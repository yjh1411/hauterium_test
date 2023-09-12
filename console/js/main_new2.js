setTimeout(() => {
    document.getElementById("s1").classList.add("init")
},500)
ScrollTrigger.create({
    scroller: scroller,
    trigger: "#main",
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
    onToggle: self => {
        if(self.isActive){
            console.log("active")
        } else {
        }
    },
    onUpdate: self => {
        // console.log("progress:", self.progress.toFixed(3), "direction:",self.direction, "velocity", self.getVelocity())
    },
    onEnter: () => {
        console.log("onEnter")
    },
    onEnterback: () => {
        console.log("onEnterBack")
    },
    onLeave: () => {
        console.log("onLeave")
    },
    onLeaveBack: ()=> {
        console.log("onLeaveBack")
    },
    onUpdate: (self) => {
        if(self.direction > 0) { // 스크롤 다운
            $('.header').addClass('hide')
        }else { // 스크롤 업
            $('.header').removeClass('hide')
        }
    }
})
function makeScrollTrigger(trigger,target,start = "top top",end = "bottom top",scrub = 1){
    ScrollTrigger.create({
        scroller: scroller,
        trigger : trigger,
        animation: target,
        start : start,
        end : end,
        scrub : scrub,
        invalidateOnRefresh: true,
    })
}
gsap.to(".s1--belt-text",{
    x:"0%",
    duration:10,
    repeat: -1,
    ease:"none"
})
gsap.to(".s1--belt-text02",{
    x:"-100%",
    duration:20,
    repeat: -1,
    ease:"none"
})
gsap.to(".s2--view-beltItem",{
    x:"-100%",
    duration:10,
    repeat: -1,
    ease:"none"
})
gsap.to(".s3--horizon-beltWrap",{
    x:"-100%",
    duration:50,
    repeat: -1,
    ease:"none"
})
gsap.to(".topBtn--circle",{
    rotate:360,
    duration:30,
    repeat: -1,
    ease:"none"
})
gsap.to(".topBtn--circle2",{
    rotate:-360,
    duration:10,
    repeat: -1,
    ease:"none"
})
const tl_topBtnCircle2 = gsap.timeline().to(".topBtn--circleWrap",{rotate:360})
makeScrollTrigger("body",tl_topBtnCircle2,"top top","bottom top",1)

const tl_s2text02 = gsap.timeline().to(".s1--text01",{scale:3,rotation:360})
makeScrollTrigger("#s1",tl_s2text02,"top top", "bottom top",1)

ScrollTrigger.matchMedia({
    '(min-width:1080px)': function(){
        const tl_s3horizonWrap = gsap.timeline().to(".s3--horizonWrap",{x:"-100%"})
        makeScrollTrigger("#s3",tl_s3horizonWrap,"5% top","95% bottom")
    },
    '(max-width:1079px)':function(){
        const tl_s3horizonWrap = gsap.timeline().to(".s3--horizonWrap",{y:"-100%"})
        makeScrollTrigger("#s3",tl_s3horizonWrap,"5% top","95% bottom")
    }
})



const tl_s1topRow01 = gsap.timeline().to(".s1--top-row01",{x:"-80%"})
makeScrollTrigger("#s1",tl_s1topRow01,"5% top","95% bottom")
const tl_s1topRow02 = gsap.timeline().to(".s1--top-row02",{x:"80%"})
makeScrollTrigger("#s1",tl_s1topRow02,"5% top","95% bottom")

const tl_s1aRow01 = gsap.timeline().to(".s1a--row01 .s1a--row-text02",{x:"0%",opacity:1})
makeScrollTrigger("#s1a",tl_s1aRow01,"5% bottom","95% bottom")
const tl_s1aRow02 = gsap.timeline().to(".s1a--row02 .s1a--row-text02",{x:"0%",opacity:1})
makeScrollTrigger("#s1a",tl_s1aRow02,"5% bottom","95% bottom")
const tl_s1aRow03 = gsap.timeline().to(".s1a--row02 .s1a--row-text01",{opacity:1})
makeScrollTrigger("#s1a",tl_s1aRow03,"50% bottom","95% bottom")
const tl_s1aBlueIco = gsap.timeline().to(".s1a--blueIco",{rotate:"180deg"})
makeScrollTrigger("#s1a",tl_s1aBlueIco,"5% 100%","10% 10%")
//sticky 속성 만드는 코드
ScrollTrigger.create({
    scroller: scroller,
    trigger: ".s2--col1-sticky",//sticky속성 요소
    endTrigger: "#s2",//sticky 부모 요소
    start: "top top",
    end:"bottom bottom",
    pin: true,
    pinSpacing: false,
    scrub: false,
})
ScrollTrigger.create({
    scroller: scroller,
    trigger: ".s3--horizon",
    start: "top top",
    end:"bottom bottom",
    endTrigger: "#s3",
    pin: true,
    pinSpacing: false,
    scrub: false,
})
let sect2Chapter = gsap.utils.toArray("#s2 .s2--chapter");
const s2 = document.getElementById("s2")
sect2Chapter.forEach((el, index, arr) => {
        ScrollTrigger.create({
            trigger : el, 
            scroller : scroller,
            start: "0% top",
            end : "top 50%",
            scrub:true,
            markers:false,
            pin : false,
            invalidateOnRefresh: true,
            onEnter : () => {
                s2.setAttribute('data-level',index)
                console.log("enter to" + index)
                if(index === 5){
                    $('.header').removeClass('white')
                }
            },
            onEnterBack : () => {
                s2.setAttribute('data-level',index)
                console.log('back to' + index)
                if(index === 5){
                    $('.header').addClass('white')
                }
            },
        });
});
const s4 = document.getElementById('s4')

ScrollTrigger.create({
    trigger : s4,
    scroller : scroller,
    start: "0% 100%",
    end: "0% 100%",
    scrub:true,
    markers:false,
    pin : false,
    invalidateOnRefresh: true,
    onEnter : () => {
        s4.classList.add("on-view")
    },
    onEnterBack : () => {
        s4.classList.remove("on-view")
    },
})

var winH = window.innerHeight
var winW = window.innerWidth
function setHeight(){
    if(winW>=1080){
        document.querySelector('.s3--horizonWrap').style.height = winH + 'px'
        document.querySelector('.s3--horizon-back').style.height = '100%'
    }else{
        document.querySelector('.s3--horizonWrap').style.height = ''
        document.querySelector('.s3--horizon-back').style.height = winH + 'px'
    }
    document.querySelector('.s2--view').style.height = winH * 0.9 + 'px'
    document.querySelector('.s2--viewWrap').style.height = winH * 0.9 + 'px'
}
setHeight()
window.addEventListener('resize',function(){
    winH = window.innerHeight
    setHeight()
})