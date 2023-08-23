let p = document.querySelector("p")
let addbtn = document.querySelector("#addbtn")
let savebtn = document.querySelector("#savebtn")
let resetbtn = document.querySelector("#resetbtn")
let savenumber = document.querySelector("#savenumber")

addbtn.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    savebtn.classList.remove("btnDisable");
})

savebtn.addEventListener("click", () => {
    if (p.innerHTML == 0) {
        savebtn.classList.add("btnDisable");
    }
    else {
        if (savenumber.innerHTML == 0) {
            savenumber.innerHTML = p.innerHTML;
        }

        else {
            savenumber.innerHTML = savenumber.innerHTML + ', ' + p.innerHTML;
        }
        p.innerHTML = 0;
    }
})
resetbtn.addEventListener("click", function () {
    p.innerHTML = 0;
    savenumber.innerHTML = 0;
})
