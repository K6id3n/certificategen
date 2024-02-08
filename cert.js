document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("enterBut");
  

    button.addEventListener("click", function(event) {

      event.preventDefault();
  
    });
  });
  

function getCertificate() {

    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    var output1 = document.getElementById("input1").value;
    var output2 = document.getElementById("input2").value;
    var output3 = document.getElementById("input3").value;
    var output4 = document.getElementById("input4").value;

    const nameFinal = document.getElementById("nametext");
    const awardFinal = document.getElementById("awardtext");
    const issueFinal = document.getElementById("issuetext");
    const dateFinal = document.getElementById("datetext");

    nameFinal.textContent = output1;
    awardFinal.textContent = output2;
    issueFinal.textContent = output3;
    dateFinal.textContent = output4;

}