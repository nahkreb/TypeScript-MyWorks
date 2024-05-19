// SAYAÇ

function sayac() {

    let sayi: number = 0;

    let Sayac = setInterval((): void => {

        console.log(sayi);
        sayi++;


        if (sayi > 10) {
            clearInterval(Sayac);
            console.log("Bitti");

        }
    }, 200);
}


sayac();