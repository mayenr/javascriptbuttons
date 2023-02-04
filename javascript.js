//JS number 1 - Opening a new page with different content
var button = document.getElementById('button1');

    button.addEventListener('click', function(){
        alert('Click OK to go to the Second Page');
        window.location = 'secondpage.html';
        
    });



//JS number 2 - Changing Text Content After Button Click
const changeText = () => {
    
    const phrase = document.querySelector("h3");
    phrase.textContent = "Wow. Congratulations! Pahingi naman balato!";

}

//JS number 7 - Appending Text Content to a List
var alertList = document.querySelectorAll('.alert');
            alertList.forEach(function (alert) {
            new bootstrap.Alert(alert)
        })
function dagdag() {
    var li = document.createElement("li");
    li.innerHTML = "1 Million";
    document.getElementById("money").appendChild(li);
  }


$(".control_save").click(function () {
                $("#testform").saveForm();
                $("#message").text('Data was successfully submitted. Click Reset Button to reset data submitted, and you can click Restore Button to restore previous data entered');
                return false;
            });

            $(".control_restore").click(function () {
                $("#testform").restoreForm();
                $("#message").empty();
                return false;
            });







let smallWindow;

function openWin() {
  smallWindow = window.open("thirdpage.html", "", "width=360,height=500");
  
}

function closeWin() {
  smallWindow.close();
}

let main = "index.html"

function closeMain() {
    main.close();
}
