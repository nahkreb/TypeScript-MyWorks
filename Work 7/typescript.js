//POP-UP REKLAM
function gerisayim() {
    var sayac = 35; // toplam süre
    var countElement = document.getElementById('skipButton');
    var progressBar = document.getElementById('progress');
    var totalTime = sayac;
    var interval = 1000;
    var elapsed = 0; // geçen süre
    if (!countElement || !progressBar) {
        console.error('Elementler bulunamadı!');
        return;
    }
    var intervalId = window.setInterval(function () {
        elapsed++;
        countElement.innerText = "Reklam\u0131n Bitmesi i\u00E7in: ".concat(totalTime - elapsed);
        var progressPercentage = (elapsed / totalTime) * 100;
        progressBar.style.width = progressPercentage + '%';
        if (elapsed >= totalTime) {
            clearInterval(intervalId);
            countElement.innerText = "Reklam Bitti";
            closeAd();
        }
    }, interval);
}
function closeAd() {
    var adPopup = document.getElementById('ad-popup');
    var blurBackground = document.getElementById('blur-background');
    if (adPopup && blurBackground) {
        adPopup.style.display = 'none';
        blurBackground.style.display = 'none';
    }
    else {
        console.error('Elementler bulunamadı!');
    }
}
gerisayim();
