var btn0 = document.querySelector('.btn_0');
var btn1 = document.querySelector('.btn_1');
var btn2 = document.querySelector('.btn_2');
var btn3 = document.querySelector('.btn_3');
var btn4 = document.querySelector('.btn_4');
var btn5 = document.querySelector('.btn_5');
var btn6 = document.querySelector('.btn_6');
var btn7 = document.querySelector('.btn_7');
var btn8 = document.querySelector('.btn_8');
var btn9 = document.querySelector('.btn_9');
var btnplus = document.querySelector('.btn_plus');
var btnminus = document.querySelector('.btn_minus');
var btnmult = document.querySelector('.btn_mult');
var btndiv = document.querySelector('.btn_div');
var btndot = document.querySelector('.btn_dot');
var btnequal = document.querySelector('.btn_equal');
var btnclear = document.querySelector('.btn_clr');
var screen = document.querySelector('#m_screen');
var val1 = 0;
var val2 = 0;
var opr = "";



btn0.addEventListener('click', function () {
    console.log("0 Clicked");
    if (screen.value === "0") {
        screen.value = "";
    }
    screen.value += "0";
});
btn1.addEventListener('click', function () {
    console.log("1 Clicked");
    if (screen.value === "0") {
        screen.value = "";
    }
    screen.value += "1";
});
btn2.addEventListener('click', function () {
    console.log("2 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "2";
});
btn3.addEventListener('click', function () {
    console.log("3 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "3";
});
btn4.addEventListener('click', function () {
    console.log("4 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "4";
});
btn5.addEventListener('click', function () {
    console.log("5 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "5";
});
btn6.addEventListener('click', function () {
    console.log("6 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "6";
});
btn7.addEventListener('click', function () {
    console.log("7 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "7";
});
btn8.addEventListener('click', function () {
    console.log("8 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "8";
});
btn9.addEventListener('click', function () {
    console.log("9 Clicked");
    if (screen.value == "0") {
        screen.value = "";
    }
    screen.value += "9";
});
btndiv.addEventListener('click', function () {
    console.log("/ Clicked");
    val1 = parseFloat(screen.value);
    opr = "/";
    screen.value = "";
});
btnmult.addEventListener('click', function () {
    console.log("x Clicked");
    val1 = parseFloat(screen.value);
    opr = "x";
    screen.value = "";
});
btnminus.addEventListener('click', function () {
    console.log("- Clicked");
    val1 = parseFloat(screen.value);
    opr = "-";
    screen.value = "";
});
btnplus.addEventListener('click', function () {
    console.log("+ Clicked");
    opr = "+";
    val1 = parseFloat(screen.value);
    screen.value = "";

});
btndot.addEventListener('click', function () {
    console.log(". Clicked");
    screen.value += ".";

});
btnequal.addEventListener('click', function () {
    console.log("= Clicked");
    val2 = parseFloat(screen.value);
    if (opr === "+") {
        var add = val1 + val2;
        screen.value = add;
    }
    else if (opr === "x") {
        var mult = val1 * val2;
        screen.value = mult;
    }
    else if (opr === "/") {
        var div = val1 / val2;
        screen.value = div;
    }
    else if (opr === "-") {
        var minus = val1 - val2;
        screen.value = minus;
    }
    else {
        screen.value = "Error";
    }
    


});
btnclear.addEventListener('click', function () {
    console.log("Clr Clicked");
    screen.value = "0";
});

