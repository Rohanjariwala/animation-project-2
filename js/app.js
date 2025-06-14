document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
 
  ScrollSmoother.create({
  smooth: 1.5, 
  effects: true, 
  smoothTouch: 0.1,
});


gsap.from('#hero',{opacity:0, scale:1.1,duration:3,ease: "power4.out"})

  let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#hero",
        start: 'top top', 
		end: '+=3500',
        scrub: 1,
        pin:true
    }
  })
  tl.to('#hero .first_part .logo ',{
    opacity:0,
    scale:0.95,
    duration:0.5
  });
  tl.to('#hero .first_part .play_button, .scroll_text',{
    opacity:0,
    duration:0.5
  },'<');
  tl.to('#hero .first_part .bg_image',{
    scale:1,
    duration:1.5
},'<');
  
  tl.to('#hero .first_part .mask-wrapper',{
    webkitMaskSize:"15%",
    WebkitMaskPosition:"center 17%",
    backgroundSize:"15%",
    backgroundPosition:"center 17%",
    duration:2.
  },"-=1.50");
   tl.to('#hero .first_part .bg_image',{
    opacity:0,
    duration:1.5,
    delay:0.5
},'<');
tl.to('#hero .second_part',{
   zIndex:10,
 },"-=1.50");
 
  tl.to('#hero .second_part .heading',{
    backgroundImage:"radial-gradient(circle at 50% -30vh,#ffd687 0,#fc5243 50vh,#9d2f6a 90vh,rgba(32,31,66,0) 150vh)",
    duration:2
 },"-=0.50");
 tl.to('#hero .first_part .main_logo',{
    webkitMaskImage:"linear-gradient(to bottom, #0000 -100% , #000 50%)",
    duration:1.5
  },"-=1.70");
  tl.from('.platform_logos',{
    opacity:0,
    duration:2
  },"-=1.30")
  
  tl.to(".hero_inner",{
    scale:0.8,
    duration:4.5
  },"-=2.50");
    tl.to('#hero .first_part',{
    webkitMaskImage:"linear-gradient(to bottom, #000 -100%, #0000 10%)",
     duration:1.5
  },"-=2.40");
  tl.to('#hero .second_part',{
    webkitMaskImage:"linear-gradient(to bottom, #000 -100%, #0000 20%)",
     duration:2
  },"-=2.30");
  
 });