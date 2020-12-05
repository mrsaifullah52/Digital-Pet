const cartoon = document.querySelector(".cartoon");

const btnNeutral = document.getElementById("Neutral");
const btnHappy = document.getElementById("Happy");
const btnSad = document.getElementById("Sad");
const btnLaugh = document.getElementById("Laugh");
const btnAngry = document.getElementById("Angry");


btnNeutral.addEventListener("click",()=>{
    cartoon.data = "img/Faces/Neutral/Neutral.svg";
    gsap.from(".cartoon",{duration: 1.5, opacity: 0, scale: 0.1, ease: "back"});
});

btnHappy.addEventListener("click",()=>{
    cartoon.data = "img/Faces/Happy/Happy.svg";
    gsap.from(".cartoon",{duration: 1.5, opacity: 0, scale: 0.1, ease: "back"});
});
btnSad.addEventListener("click",()=>{
    cartoon.data = "img/Faces/Sad/Sad.svg";
    gsap.from(".cartoon",{duration: 1.5, opacity: 0, scale: 0.1, ease: "back"});
});
btnLaugh.addEventListener("click",()=>{
    cartoon.data = "img/Faces/Laugh/Laugh.svg";
    gsap.from(".cartoon",{duration: 1.5, opacity: 0, scale: 0.1, ease: "back"});
});
btnAngry.addEventListener("click",()=>{
    cartoon.data = "img/Faces/Angry/Angry.svg";
    gsap.from(".cartoon",{duration: 1.5, opacity: 0, scale: 0.1, ease: "back"});
});


