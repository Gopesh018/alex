gsap.from('.page1 .sub-title, .page1 h1, .page1 .description-box ',{
    x: -300,
    delay:1,
    duration:1,
    stagger:true,
    opacity:0
});

gsap.from('.page2 h1, .page2 .line, .page2 img ',{
    scrollTrigger:{
        trigger:".page2",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    duration:1
});

gsap.from('.page3 .sub-title, .page3 .icon-box, .page3 h2, .page3 p, .page3 h6, .page3 hr ',{
    scrollTrigger:{
        trigger:".page3",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    x:-300,
    duration:1
});

gsap.from('.page4 .image-box .inner, .page4 .image-box .inner .sub-inner',{
    scrollTrigger:{
        trigger:".page4",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    scale:.5,
    duration:.5
});

gsap.from('.page5 .elements',{
    scrollTrigger:{
        trigger:".page5",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    x:300,
    duration:.5
});

gsap.from('.page6 .inner-left',{
    scrollTrigger:{
        trigger:".page6",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    duration:.5
});

let pageSevenTl = gsap.timeline({
    scrollTrigger:{
        trigger:".page7",
        start: " 60% 10%",
        end:"20% 40%",
        scrub:2
    }
})

pageSevenTl.from('.page7 .inner-left',{
    opacity:0,
    duration:1
});

pageSevenTl.from('.page7 .inner-right',{
    opacity:0,
    x:300,
    duration:1
});

gsap.from('.page8 .inner-left',{
    scrollTrigger:{
        trigger:".page8",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    x:-300,
    duration:1
});

gsap.from('.page9 .inner-right',{
    scrollTrigger:{
        trigger:".page9",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    x:300,
    duration:1
});

gsap.from('.page10 .inner',{
    scrollTrigger:{
        trigger:".page10",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    scale:.5,
    duration:1
});

gsap.from('.page11 .inner-right',{
    scrollTrigger:{
        trigger:".page11",
        start: " 50% 10%",
        end:"20% 40%",
        scrub:2
    },
    opacity:0,
    x:300,
    duration:1
});

gsap.from('footer .inner-left img',{
    scrollTrigger:{
        trigger:"footer",
        start: " 80% 10%",
        end: "40% 70%",
        scrub:2
    },
    opacity:0,
    scale:0,
    duration:1
});
