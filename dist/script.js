const header=document.querySelector(".header"),toggle=document.querySelector(".toggle"),menuToUp=()=>anime({targets:".toggle-menu",translateY:-600}),menuToDown=()=>anime({targets:".toggle-menu",translateY:0});toggle.addEventListener("click",(()=>{header.classList.toggle("open"),header.classList.contains("open")?anime({targets:".toggle-menu",translateY:0}):anime({targets:".toggle-menu",translateY:-600})}));
//# sourceMappingURL=script.js.map