// pour l'index
let btna = document.getElementsByClassName("btna");

console.log(btna);

for (let i = 0; i < btna.length; i++) {
    btna[i].addEventListener("mouseover", () => {
        btna[i].style.backgroundColor = "var(--trans-ad-color)";
        btna[i].style.color = "var(--white-ad-color)";
        btna[i].style.fontWeight = "bold";
        btna[i].style.boxShadow = "5px 5px 30px white";
        btna[i].style.borderColor = "var(--white-ad-color";
    })
    btna[i].addEventListener("mouseout", () => {
        btna[i].style.backgroundColor = "var(--white-ad-color";
        btna[i].style.color = "var(--primary-ad-color)";
        btna[i].style.fontWeight = "normal";
        btna[i].style.boxShadow = "none";
    })
}


let btno = document.getElementsByClassName("btno");

console.log(btno);

for (let i = 0; i < btno.length; i++) {
    btno[i].addEventListener("mouseover", () => {
        btno[i].style.backgroundColor = "var(--white-ad-color)";
        btno[i].style.color = "var(--primary-ad-color";
        btno[i].style.fontWeight = "bold";
        btno[i].style.boxShadow = "5px 5px 30px white";
        btno[i].style.borderColor = "var(--white-ad-color";
    })
    btno[i].addEventListener("mouseout", () => {
        btno[i].style.backgroundColor = "var(--trans-ad-color)";
        btno[i].style.color = "var(--white-ad-color)";
        btno[i].style.fontWeight = "normal";
        btno[i].style.boxShadow = "none";
    })
}


let btnn = document.getElementsByClassName("btnn");

console.log(btnn);

for (let i = 0; i < btnn.length; i++) {
    btnn[i].addEventListener("mouseover", () => {
        btnn[i].style.backgroundColor = "var(--white-ad-color";
        btnn[i].style.color = "var(--blue-color";
        btnn[i].style.fontWeight = "bold";
        btnn[i].style.boxShadow = "5px 5px 30px white";
        btnn[i].style.borderColor = "var(--white-ad-color";
    })
    btnn[i].addEventListener("mouseout", () => {
        btnn[i].style.backgroundColor = "var(--trans-ad-color)";
        btnn[i].style.color = "var(--white-ad-color)";
        btnn[i].style.fontWeight = "normal";
        btnn[i].style.boxShadow = "none";
    })
}


let btn3 = document.getElementsByClassName("btn3");

console.log(btn3);

for (let i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener("mouseover", () => {
        btn3[i].style.backgroundColor = "var(--black-ad-color)";
        btn3[i].style.color = "var(--white-ad-color";
        btn3[i].style.fontWeight = "bold";
        btn3[i].style.boxShadow = "5px 5px 30px white";
        btn3[i].style.borderColor = "var(--white-ad-color";
    })
    btn3[i].addEventListener("mouseout", () => {
        btn3[i].style.backgroundColor = "var(--white-ad-color";
        btn3[i].style.color = "var(--black-ad-color)";
        btn3[i].style.fontWeight = "normal";
        btn3[i].style.boxShadow = "none";
    })
}


let btn4 = document.getElementsByClassName("btn4");

console.log(btn4);

for (let i = 0; i < btn4.length; i++) {
    btn4[i].addEventListener("mouseover", () => {
        btn4[i].style.backgroundColor = "var(--white-ad-color)";
        btn4[i].style.color = "var(--primary-ad-color";
        btn4[i].style.fontWeight = "bold";
        btn4[i].style.boxShadow = "5px 5px 30px white";
        btn4[i].style.borderColor = "var(--white-ad-color";
    })
    btn4[i].addEventListener("mouseout", () => {
        btn4[i].style.backgroundColor = "var(--primary-ad-color";
        btn4[i].style.color = "var(--white-ad-color)";
        btn4[i].style.fontWeight = "normal";
        btn4[i].style.boxShadow = "none";
    })
}
// pour adversaire
let btn5 = document.getElementsByClassName("btn5");

console.log(btn5);

for (let i = 0; i < btn5.length; i++) {
    btn5[i].addEventListener("mouseover", () => {
        btn5[i].style.backgroundColor = "var(--white-ad-color)";
        btn5[i].style.color = "var(--primary-ad-color";
        btn5[i].style.fontWeight = "bold";
        btn5[i].style.boxShadow = "5px 5px 30px white";
        btn5[i].style.borderColor = "var(--white-ad-color";
    })
    btn5[i].addEventListener("mouseout", () => {
        btn5[i].style.backgroundColor = "var(--primary-ad-color";
        btn5[i].style.color = "var(--white-ad-color)";
        btn5[i].style.fontWeight = "normal";
        btn5[i].style.boxShadow = "none";
    })
}


let foico = document.getElementsByClassName("footer-icones");

console.log(foico);

for (let i = 0; i < foico.length; i++) {
    foico[i].addEventListener("mouseover", () => {
        foico[i].style.color = "var(--white-ad-color";
    })
    foico[i].addEventListener("mouseout", () => {
        foico[i].style.color = "var(--black-ad-color)";
    })
}