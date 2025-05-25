const button1 = document.querySelector("#button1");
            const modal1 = document.querySelector("#modal1");
            const button_close1 = document.querySelector("#button_close1");
           
            const button2 = document.querySelector("#button2");
            const modal2 = document.querySelector("#modal2");
            const button_close2 = document.querySelector("#button_close2"); 

            const button3 = document.querySelector("#button3");
            const modal3 = document.querySelector("#modal3");
            const button_close3 = document.querySelector("#button_close3"); 

            const button4 = document.querySelector("#button4");
            const modal4 = document.querySelector("#modal4");
            const button_close4 = document.querySelector("#button_close4"); 

            const button5 = document.querySelector("#button5");
            const modal5 = document.querySelector("#modal5");
            const button_close5 = document.querySelector("#button_close5"); 

            const button6 = document.querySelector("#button6");
            const modal6 = document.querySelector("#modal6");
            const button_close6 = document.querySelector("#button_close6"); 

            button1.onclick = function () {
                modal1.showModal();
            }

            button2.onclick = function () {
                modal2.showModal();
            }
            
            button3.onclick = function () {
                modal3.showModal();
            }

            button4.onclick = function () {
                modal4.showModal();
            }

            button5.onclick = function () {
                modal5.showModal();
            }

            button6.onclick = function () {
                modal6.showModal();
            }

            button_close1.onclick = function () {
                modal1.close();
            }

            button_close2.onclick = function() {
                modal2.close();
            }

            button_close3.onclick = function() {
                modal3.close();
            }

            button_close4.onclick = function() {
                modal4.close();
            }

            button_close5.onclick = function() {
                modal5.close();
            }

            button_close6.onclick = function() {
                modal6.close();
            }