function clear(){
    alert("hej");
    let a = document.getElementById("a");
    a.value = "";
    console.log("A er klikket");
}

function add(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = parseInt(a.value) + parseInt(b.value);

}

function sub(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = parseInt(a.value) - parseInt(b.value);

}

function times(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = parseInt(a.value) * parseInt(b.value);

}

function divide(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");

    c.value = parseInt(a.value) / parseInt(b.value);

}