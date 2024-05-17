
// TC KİMLİK NO DOĞRULAMA PROGRAMI

function TcDogrulama(Tcno: string) {

    if (Tcno.length == 11 && Tcno[0] != "0") {

        let dizi: number[] = [];

        for (let i = 0; i < Tcno.length; i++) {

            dizi.push(Number(Tcno[i]));
        }

        const TcNoOn: number = (((dizi[0] + dizi[2] + dizi[4] + dizi[6] + dizi[8]) * 7) - (dizi[1] + dizi[3] + dizi[5] + dizi[7])) % 10;

        if (String(TcNoOn) == Tcno[9]) {

            const TcToplam: number = (dizi[0] + dizi[1] + dizi[2] + dizi[3] + dizi[4] + dizi[5] + dizi[6] + dizi[7] + dizi[8] + dizi[9]) % 10;

            if (String(TcToplam) == Tcno[10]) {
              
                console.log("TC Doğru");

            } else {

                console.log("TC yanlış");
                
            }
        } else {

            console.log("TC yanlış");

        }

    } else {

        console.log("TC yanlış");

    }
}

TcDogrulama("68560109892");





