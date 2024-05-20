// reklamı atla butonu
function gerisayım() {
    var sayac = 15;
    var countElement = document.getElementById('skipButton');
    var inverontal = setInterval(function () {
        countElement.innerText = "Reklamın Bitmesi için: " + sayac;
        sayac--;
        if (sayac < 0) {
            clearInterval(inverontal);
            countElement.innerText = "Reklamı Geç";
            document.getElementById('skipButton').addEventListener('click', function () {
                var reklam = document.getElementById('reklam');
                reklam.style.display = 'none';
                countElement.style.display = 'none';
            });
        }
    }, 1000);
}
gerisayım();
