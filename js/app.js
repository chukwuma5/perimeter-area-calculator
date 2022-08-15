let f;
let overAll;
let firstArea;

document.getElementById("myButton").onclick = function () {
    f = document.getElementById("firstSide").value;
    f = Number(f);
    
    overAll = 4 * f;
    overAll = Math.floor(overAll);

    firstArea = Math.pow(f, 2);

    document.getElementById("myFigure").innerHTML = `p = ${overAll}`;
    document.getElementById("mySecondFigure").innerHTML = `A = ${firstArea}`;
}

let a;
let b;
let c;
let secondArea;

document.getElementById("myButtonOne").onclick = function () {
    a = document.getElementById("thirdSide").value;
    a = Number(a);
    
    b = document.getElementById("fourthSide").value;
    b = Number(b);

    c = 2 * a + 2 * b;
    c = Math.floor(c);

    secondArea = a * b;
    
    document.getElementById("myFigureOne").innerHTML = `p = ${c}`;
    document.getElementById("mySecondFigureOne").innerHTML = `A = ${secondArea}`;
}

let d;
let e;
let g;
let base;
let height;
let h;

document.getElementById("myButtonTwo").onclick = function () {
    d = document.getElementById("fifthSide").value;
    d = Number(d);
    
    e = document.getElementById("sixthSide").value;
    e = Number(e);

    h = document.getElementById("seventhSide").value;
    h = Number(h);

    base = document.getElementById("newSide").value;
    base = Number(base);

    height = document.getElementById("newSecondSide").value;
    height = Number(height);
    
    g = d + e + h;
    g = Math.floor(g);

    ThirdArea = 0.5 * base * height;

    document.getElementById("myFigureTwo").innerHTML = `p = ${g}`;
    document.getElementById("mySecondFigureTwo").innerHTML = `A = ${thirdArea}`;
}




