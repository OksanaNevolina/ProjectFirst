document.querySelector('.inp1').addEventListener('click', function () {
    document.querySelector('img').style.display = "flex" ;
    document.querySelector('.inp1').disable = true;
    document.querySelector('.inp2').disable = false;
})
document.querySelector('.inp2').addEventListener('click', function () {
    document.querySelector('img').style.display = "none";
    document.querySelector('.inp1').disable = false;
    document.querySelector('.inp2').disable = true;
})
