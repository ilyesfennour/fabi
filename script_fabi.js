var point = 1;//document.getElementById("point")
var bg1 = document.getElementById("bg1");
bg1.addEventListener("click", sbg1);
function sbg1() {
    if (point>=1) {
        alert("sd");
        point -= 1;        
    } else {
        alert("no");
    }
}
