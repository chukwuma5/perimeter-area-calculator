let i;
let j;
let k;
let base;
let height;
let fourthArea;

document.getElementById("myButtonThree").onclick = function () {
    i = document.getElementById("eightSide").value;
    i = Number(i);
    
    j = document.getElementById("ninthSide").value;
    j = Number(j);

    base = document.getElementById("newNinthSide").value;
    base = Number(base);

    height = document.getElementById("secondNewNinthSide").value;
    height = Number(height);

    fourthArea = base * height; 
    
    k = 2 * i + 2 * j;
    k = Math.floor(k);
    

    document.getElementById("myFigureThree").innerHTML = `p = ${k}`;
    document.getElementById("myNewFigureThree").innerHTML = `p = ${fourthArea}`;
}

let l;
let m;
let n;
let o;
let p;
let fivthArea;

document.getElementById("myButtonFour").onclick = function () {
    l = document.getElementById("tenthSide").value;
    l = Number(l);
    
    m = document.getElementById("eleventhSide").value;
    m = Number(m);

    n = document.getElementById("twelvthSide").value;
    n = Number(n);

    o = document.getElementById("thirteenSide").value;
    o = Number(o);
    
    fivthArea = 0.5 * (l + m) * m;

    p = l + m + n + o;
    p = Math.floor(p);

    document.getElementById("myFigureFour").innerHTML = `p = ${p}`;
    document.getElementById("myNewFigureFour").innerHTML = `A = ${fivthArea}`;
}