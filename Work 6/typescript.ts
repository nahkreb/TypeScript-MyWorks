 // reklamı atla butonu
 
function gerisayım() {

    let sayac: number = 15;

    const countElement = document.getElementById('skipButton');

    let inverontal = setInterval((): void => {

        countElement.innerText = "Reklamın Bitmesi için: "+sayac;
        sayac--;

        if(sayac < 0){
            clearInterval(inverontal);
            countElement.innerText = "Reklamı Geç";

            document.getElementById('skipButton').addEventListener('click', () => {
                const reklam = document.getElementById('reklam');
                reklam.style.display = 'none';
                countElement.style.display ='none';
            });
        }
    }, 1000)
}


gerisayım();