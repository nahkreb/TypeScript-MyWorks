//POP-UP REKLAM

function gerisayim(): void {
    const sayac: number = 35; // toplam süre
    const countElement: HTMLElement | null = document.getElementById('skipButton');
    const progressBar: HTMLElement | null = document.getElementById('progress');
    const totalTime: number = sayac;
    const interval: number = 1000;
    let elapsed: number = 0; // geçen süre

    if (!countElement || !progressBar) {
        console.error('Elementler bulunamadı!');
        return;
    }

    const intervalId: number = window.setInterval((): void => {
        elapsed++;
        countElement.innerText = `Reklamın Bitmesi için: ${totalTime - elapsed}`;
        const progressPercentage: number = (elapsed / totalTime) * 100;
        progressBar.style.width = progressPercentage + '%';

        if (elapsed >= totalTime) {
            clearInterval(intervalId);
            countElement.innerText = "Reklam Bitti";
            closeAd();
        }
    }, interval);
}

function closeAd(): void {
    const adPopup: HTMLElement | null = document.getElementById('ad-popup');
    const blurBackground: HTMLElement | null = document.getElementById('blur-background');

    if (adPopup && blurBackground) {
        adPopup.style.display = 'none';
        blurBackground.style.display = 'none';
    } else {
        console.error('Elementler bulunamadı!');
    }
}

gerisayim();
