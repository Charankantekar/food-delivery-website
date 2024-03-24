//Initials
let dnames = ["butter_chicken","tandoori_chicken","mutton_curry","chicken_biriyani","panner","chicken_manchurian","haleem","fish_fry","egg rice","prawn_thokku"];
let deserts=["matar_paneer","aloo_puri","chole_bhature","malai_kofta","dal","rajma","raitha","pav_bhaji","lemon_rice","veg_biriyani","chana_masala"];
let allnames=deserts.concat(dnames);
let heads=["Top Non-Veggies","Top Veggies"];
let cart = [];
let hotel = "cosmos hotel";
let mncats = document.querySelector("#mncats");
let locpop = document.querySelector("#locpop");
let cartitems = document.querySelector("#cartitems");
let locsnames = ["Hyderabad", "Delhi", "Mumbai", "Chennai", "Bangalore", "Pune"];
let loginstatus = false;
let fullname;
let number;
let password,email,address;
let searchitem;
let s;
let key;
let x;
let selected;
// let acphoto=document.getElementById("acphoto");
function remove(item){
    cart= cart.filter((value)=>{
         return item!=value
        });
     
      document.querySelector("#cartitems").innerHTML = '';
     for (let key of cart) {
         document.querySelector("#cartitems").innerHTML += `<div class="cartsmall" id="incart${key}">
         <span > <img class="cartimg" src="images.jpeg" alt="error"></span>
         <span >
             <b>${key.replace("_"," ")}</b>
             COSMOS HOTEL
             10min-20min
             <span class="stars">   &#9733;&#9733;&#9733;&#9733;&#9734;</span>
             <button class="nonlogoitems" onclick= remove("${key}") >Remove</button></span></div>`;
     }
 }
function order(){
   document.getElementById("orderpop").innerHTML="Your order is successfull";
    
    document.getElementById("orderpop").style.visibility="visible";
    document.getElementById("cartitems").innerHTML=`<span style="font-size: 50px;"  >EMPTY</span>`;
    setTimeout(()=>{document.getElementById("orderpop").style.visibility="hidden";},2000);
    cart=[];

}
function search() {
    s = document.getElementById("searchclick").value;
    if(s!=""){
        document.getElementById("searchpop").style.visibility="visible";  
        document.getElementById("locpop").style.visibility = "hidden";
        document.getElementById("logpop").style.visibility = "hidden";
        document.getElementById("cartpop").style.visibility = "hidden";
        document.querySelector("#searchpop").innerHTML = "";
       
         for (key of allnames) {
        
        
          for (let i = 0; i < (key.length); i++) {
            
            if (s === key.slice(0, i + 1)) {
                console.log("fond");
                
                document.querySelector("#searchpop").innerHTML += `<div class="cartsmall">
                 <span > <img class="cartimg" src="images.jpeg" alt="error"></span>
                 <span >
                 <ul><b>${key.replace("_"," ")}</b></ul>
                 <ul>COSMOS HOTEL</ul>
                 <ul>10min-20min</ul>
                 <ul><span class="stars">   &#9733;&#9733;&#9733;&#9733;&#9734;</span></ul>
                </span><button  class="nonlogoitems" type="button" onclick= cartaddclick(value="${key}") >Add to Cart</button></div>`;
                
            }}
           
        }}
    else{document.getElementById("searchpop").style.visibility="hidden";}

}
function locsclick(value) {
    document.getElementById("location").value= value;
    document.getElementById("locpop").style.visibility = "hidden";
}
function locclick() {
    
    if (document.getElementById("locpop").style.visibility == "visible") {
        document.getElementById("locpop").style.visibility = "hidden";
    }
    else { document.getElementById("locpop").style.visibility = "visible";
    document.getElementById("cartpop").style.visibility = "hidden"; 
    document.getElementById("searchpop").style.visibility="hidden";
    document.getElementById("logpop").style.visibility = "hidden";}
}
function cartclick() {
   
    if (document.getElementById("cartpop").style.visibility == "visible") {
        document.getElementById("cartpop").style.visibility = "hidden";
    }
    else { document.getElementById("cartpop").style.visibility = "visible"; 
    document.getElementById("logpop").style.visibility = "hidden";
    document.getElementById("locpop").style.visibility = "hidden";
    document.getElementById("searchpop").style.visibility="hidden"; 
 
   }
}
function cartaddclick(value) {
    document.querySelector("#cartitems").innerHTML = '';
    cart.push(value);

    for (let key of cart) {
        document.querySelector("#cartitems").innerHTML += `<div class="cartsmall" id="incart${key}">
        <span > <img class="cartimg" src="images.jpeg" alt="error"></span>
        <span >
            <b>${key.replace("_"," ")}</b>
            COSMOS HOTEL
            10min-20min
            <span class="stars">   &#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <button class="nonlogoitems" onclick=remove("${key}") >Remove</button></span></div>`;
    }
   
}
function login() {
    
    fullname = document.getElementById("fullname").value;
    number = document.getElementById("number").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    loginstatus = true;
    document.getElementById("logbut").value = `profile`;
    logclick();
}
function logclick() {
    if (loginstatus == false) {
        document.getElementById("logpop").innerHTML = `<div class="logpro1"><form class="logpro">
        <h1><u>Create Account</u></h1>
        <input  required type="text" id="fullname" placeholder="Full Name"><br>
        <input required type="email" id="email" placeholder="enter email"><br>
        <input required type="text" id="number" placeholder="enter number"><br>
        <input required type="password" name="password" placeholder="enter new password" id="password"></input><br>
        <input required type="text" id="address" placeholder="enter address"><br>
        <input  type="submit" class="nonlogoitems" value="Login" onclick="login()">
        </form></div>
     
        
     `;
    }
    else {
        document.getElementById("logpop").innerHTML = `<div class="logpro1"><div class="logpro">
        <img id="photo" src="emptyprofile.png" alt="">
        <input id="photofile" onchange="acphoto()" type="file">
             <div name="lo"> name:${fullname}</div><br>
             <div name="lo">address:${address}</div><br>
             <button class="nonlogoitems" onclick="logout()"> Logout</button></div></div></div>
             `;
             //  add it to string
            //  <div> <img id="photo" src="emptyprofile.png" alt=""></div>
             //  <input class="nonlogoitems" id="acphoto"  type="button" value="Add photo">
    }
    if (document.getElementById("logpop").style.visibility == "visible") {
        document.getElementById("logpop").style.visibility = "hidden";
    }
    else { document.getElementById("logpop").style.visibility = "visible";
    document.getElementById("cartpop").style.visibility = "hidden"; 
    document.getElementById("locpop").style.visibility = "hidden";
    document.getElementById("searchpop").style.visibility="hidden"; }
}
// function selected(){
//     document.getElementById("photo").setAttribute("scr",document.getElementById(acphoto.value));
// }
// MAIN code
function logout(){
    document.getElementById("logbut").value = `Login`;
    loginstatus = false;
    logclick();
}

function catprint(names,num){
    let cat=document.getElementById(num);
    for (key of names) {
    
        cat.innerHTML += `<div class="items">
        <img class="itemimg" src="images.jpeg" alt="error">
        <div class="itemtext">
            <ul><b>${key.replace("_"," ")}</b></ul>
            <ul>COSMOS HOTEL</ul>
            <ul>10min-20min</ul>
            <ul class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</ul>
            <button class="nonlogoitems" type="button" onclick= cartaddclick(value="${key}") >Add to Cart</button></div></div>`;
        }
}

function catgoriesfun(catnames,num){
    // let catnames,num;
    document.querySelector("#mncats").innerHTML +=`<div class="catname">${num}</div>
                             <div id="${num}" class="catgories"></div>`;
    catprint(catnames,num);
    
}
function acphoto() {
    console.log("starated");
   let r=new FileReader();
    r.readAsDataURL(document.getElementById("photofile").files[0]);
   console.log(r);
   r.onload=()=>{
      document.getElementById("photo").setAttribute("src",r.result);
   }
}
catgoriesfun(dnames,heads[0]);
catgoriesfun(deserts,heads[1]);
for (key of locsnames) {
    locpop.innerHTML += ` <button type="button" onclick=locsclick(value="${key}") class="locs">${key}</button>`;
}
function vegclick(){
   if(document.getElementById("randpop").style.visibility=="hidden"){
    document.getElementById("randpop").style.visibility="visible";
    selected=deserts[Math.floor(Math.random()*10)];
    document.getElementById("randitem").innerHTML=` <h1>Panda Suggest's You</h1>
   <div class="cartsmall"> <img class="itemimg"  src="images.jpeg" alt="error">
    <div class="itemtext">
        <ul><b>${selected.replace("_"," ")}</b></ul>
        <ul>COSMOS HOTEL</ul>
        <ul>10min-20min</ul>
        <ul class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</ul>
        <button class="nonlogoitems" type="button" onclick= cartaddclick(value="${selected}") >Add to Cart</button></div></div>`;
   }
   else{
    document.getElementById("randpop").style.visibility="hidden";
   }
}
function nonvegclick(){
   
    if(document.getElementById("randpop").style.visibility=="hidden"){
        document.getElementById("randpop").style.visibility="visible";
        selected=dnames[Math.floor(Math.random()*10)];
        document.getElementById("randitem").innerHTML=` <h1>Panda Suggest's You</h1>
       <div class="cartsmall"> <img class="itemimg"  src="images.jpeg" alt="error">
        <div class="itemtext">
            <ul><b>${selected.replace("_"," ")}</b></ul>
            <ul>COSMOS HOTEL</ul>
            <ul>10min-20min</ul>
            <ul class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</ul>
            <button class="nonlogoitems" type="button" onclick= cartaddclick(value="${selected}") >Add to Cart</button></div></div>`;
       }
       else{
        document.getElementById("randpop").style.visibility="hidden";
       }
      
    }






