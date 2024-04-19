$ = (selector) => document.querySelector(selector);
        const processEntries = () => {
            var firstname=$("#fName").value
            var lastname=$("#lName").value;
            var email=$("#email").value;
            var organization=$("#org").value;
            var reason=$("#reason").value
            var isValid = false;
            if (firstname == "") {
                alert("Please enter firstname");
                isValid = true;
            } 
            if (lastname == "") {
                alert("Please enter lastname");
                isValid = true;
            }
            if (email == ""){
                alert("Please enter email");
                isValid = true;
            }
            if (organization == "") {
                alert("Please enter organization");
                isValid = true;
            }
            if (isValid) {
                evt.preventDefault();
            }
            else{
                alert ("Thank You, " + firstname + " " + lastname + " I will be in touch with you soon!")
            }
        };
        const buttonClick = () => {
            $("#submit").addEventListener("click", processEntries);
        };
        document.addEventListener("DOMContentLoaded", buttonClick);