document.addEventListener("DOMContentLoaded", function(event) {
    var lowerCaseArr = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m",
      "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];
    
    var upperCaseArr = [
      "A","B","C","D","E","F","G","H","I","J","K","L","M",
      "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ];

    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var specCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "="];

    var result = document.getElementById("result");

    var userGeneratedPassword = "";
    var userPassArr = [];
    var length;

    function prompts() {
        userGeneratedPassword = "";
        userPassArr = [];
        var lengthTemp = prompt(
            "How long would you like your password to be between 8 and 128 characters?"
        );
        var lowerPrompt = confirm("Would you like to include lower case letters?");
        var upperPrompt = confirm("Would you like to include upper case letters?");
        var numPrompt = confirm("Would you like to include numbers?");
        var specCharPrompt = confirm(
            "Would you like to include special characters?"
        );

        length = parseInt(lengthTemp);

        if (lowerPrompt) {
            userPassArr = userPassArr.concat(lowerCaseArr);
        }
        if (upperPrompt) {
            userPassArr = userPassArr.concat(upperCaseArr);
        }
        if (numPrompt) {
            userPassArr = userPassArr.concat(numArr);
        }
        if (specCharPrompt) {
            userPassArr = userPassArr.concat(specCharArr);
        }
        password();
    }

    function password() {
        for (var i = 0; i < length; i++) {
            userGeneratedPassword +=
            userPassArr[Math.floor(Math.random() * userPassArr.length)];
            // userGeneratedPassword.push(passValues[i]);
            console.log(userGeneratedPassword);
            result.textContent = userGeneratedPassword;
        }
    }

    document.querySelector("#one").addEventListener("click", function() {
        console.log("YOU CLICKED IT");
        prompts();
    });

    document.getElementById("two").addEventListener("click", function() {
        console.log("YOU CLICKED IT");
        var text = document.getElementById("result").innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
    });
});