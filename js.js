

 var mytext = document.querySelector("div"),
          i = 0,
          intr = setInterval(function () {
            mytext.textContent += mytext.getAttribute("data-text")[i];
            i = i + 1;
            if(i > mytext.getAttribute("data-text").length - 1){
              clearInterval(intr);
            }
          },75);

 function generateSerials() {
   var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
       serialLength = 20,
       randomSerial = "",
       randomNumber,
       i;
       for(i = 0 ; i < serialLength ; i += 1){
         randomNumber = Math.floor((Math.random() * chars.length));
         randomSerial += chars[randomNumber];
       }
       document.getElementById("serial").textContent = randomSerial;
 }
