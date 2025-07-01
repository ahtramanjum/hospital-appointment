// alert("ok")
const humberg = document.querySelector(".humberg");
const navMenu = document.querySelector(".navmenu");

humberg.addEventListener("click", () =>{
    humberg.classList.toggle("active");
    navMenu.classList.toggle("active");

})

// for appointment main
// const openbtn1 = document.querySelector(".open-btn1");

const openbtn = document.querySelector(".open-btn");
const popup = document.querySelector(".popup");
openbtn.addEventListener("click", () =>{
    openbtn.classList.toggle("active");
    // openbtn1.classList.toggle("active");
    popup.classList.toggle("active");
    // alert("You Have Succesfully Submited")

})

// for app hamberger 

// const openbtn1 = document.querySelector(".open-btn1");
// const popup1 = document.querySelector(".popup");
// openbtn1.addEventListener("click", () =>{
//     // openbtn.classList.toggle("active");
//     openbtn1.classList.toggle("active");
//     popup1.classList.toggle("active");

// })


// const marks = document.querySelector(".close-icon");
// const remPop =  document.querySelector(".removed");
//     marks.addEventListener("click", () =>{
//     remPop.classList.toggle("removed");

// })
$("#close-btn").click(function(){
    $("#popup").addClass("remove")
}) 

$("#app").click(function(){ 
    $("#popup").removeClass("remove")
    $("#popup").addClass("activeon")
})

// for hamberg appmnt

$("#close-btn").click(function(){
    $("#popup").addClass("remove")
}) 

$("#appe").click(function(){ 
    $("#popup").removeClass("remove")
    $("#popup").addClass("activeon")
})