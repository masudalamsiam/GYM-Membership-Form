 //validate the check box.
function check() {

    if (document.getElementById("box").checked == true) {
        document.getElementById("check").className = "hide";

        //var Div2 = document.getElementById("check")
        //Div2.parentNode.removeChild(Div2);
    }

    if (document.getElementById("box").checked == false) {
        document.getElementById("check").className = "Show";
    }

}
