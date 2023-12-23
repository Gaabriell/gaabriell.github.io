const  myImage = document.querySelector ("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'pictures/gta1.png') {
      myImage.setAttribute ('src','pictures/gta2.png');
    } else {
      myImage.setAttribute ('src','pictures/gta1.png');
    }
  }

let myButton =  document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUrserName(){
    const myName = prompt("Por favor digite seu nome");
    localStorage.setItem ("name", myName);
    myHeading.textContent = `Grand Theft Auto San Andreas, ${myName}`;
}

if (!localStorage.getItem("name")){
    setUrserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem Vindo, ${storedName}`;
}

myButton.onclick = () =>  {
    setUrserName ();
}

function setUrserName(){
    const myName = prompt("por favor digite seu nome:");
    if (!myName){
        setUrserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Bem Vindo, ${myName}`;
    }
}