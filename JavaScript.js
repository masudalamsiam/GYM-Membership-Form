
function validateForm() {

    var letters = /^[a-zA-Z]+$/;
    var numbers = /^[0-9]+$/;
    var numANDlett = /^[0-9a-zA-Z]+$/;
    var emailcheck = /^[@]+$/;

    if (document.getElementById("Fname").value == "" || document.getElementById("Fname").value.match(numbers)) {
        alert("Please provide your Fast Name.");
        return false;
    }

    if (document.getElementById("Lname").value == "" || document.getElementById("Lname").value.match(numbers)) {
        alert("Please provide your Last Name.");


    }

    if (document.getElementById("Pnumber").value == "" || document.getElementById("Pnumber").value.length != 10 || document.getElementById("Pnumber").value.match(letters)) {
        alert("Please provide a Phone number in the format ##########.");

        return false;
    }

    var x = document.getElementById("Email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }

    if (document.getElementById("Street").value == "") {
        alert("Please provide your Street Address.");

        return false;
    }

    if (document.getElementById("City").value == "" || document.getElementById("City").value.match(numbers)) {
        alert("Please provide your City Name.");

        return false;
    }

    if (document.getElementById("State").value == "") {
        alert("Please Select Your State.");

        return false;
    }

    if (document.getElementById("Zip").value == "" || document.getElementById("Zip").value.length != 5 || document.getElementById("Zip").value.match(letters)) {
        alert("Please provide a Zip code in the format #####.");

        return false;
    }








    if (document.getElementById("box").checked == false) {

        if (document.getElementById("Fname2").value == "" || document.getElementById("Fname").value.match(numbers)) {
            alert("Please provide your First Name.");
            return false;
        }
        if (document.getElementById("Lname2").value == "" || document.getElementById("Lname").value.match(numbers)) {
            alert("Please provide your Last Name.");
            return false;
        }
        if (document.getElementById("Pnumber2").value == "" || document.getElementById("Pnumber").value.length != 10 || document.getElementById("Pnumber2").value.match(letters)) {
            alert("Please provide a Phone number in the format ##########.");
            return false;
        }
        var x = document.getElementById("Email2").value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            alert("Not a valid e-mail address");
            return false;
        }
        if (document.getElementById("Street2").value == "") {
            alert("Please provide your Street Address.");
            return false;
        }
        if (document.getElementById("City2").value == "" || document.getElementById("City2").value.match(numbers)) {
            alert("Please provide your City Name.");
            return false;
        }
        if (document.getElementById("State2").value == "") {
            alert("Please Select Your State.");
            return false;
        }
        if (document.getElementById("Zip2").value == "" || document.getElementById("Zip2").value.length != 5 || document.getElementById("Zip2").value.match(letters)) {
            alert("Please provide a Zip code in the format #####.");
            return false;
        }
    }


    if (document.getElementById("card").value == "" || document.getElementById("card").value.length != 16 || document.getElementById("card").value.match(letters)) {
        alert("Please provide Your 16 digits Card Number.");
        return false;
    }



    if (document.getElementById("Month").value == "") {
        alert("Please Select a Month.");
        return false;
    }


    if (document.getElementById("Date").value == "") {
        alert("Please Select a Date.");
        return false;
    }


    document.getElementById("myForm").submit();
}
