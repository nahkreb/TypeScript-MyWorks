
// TC Kimlik No üreten program

let dizi: number[] = [];


for (let i = 0; i < 9; i++) {

    if (i == 0) {
        let sayi = Math.floor(Math.random() * (10 - 1)) + 1;
        dizi.push(sayi);
    }
    else {
        let sayi = Math.floor(Math.random() * 10);
        dizi.push(sayi);
    }
}

const TcNoOn: number = (((dizi[0] + dizi[2] + dizi[4] + dizi[6] + dizi[8]) * 7) - (dizi[1] + dizi[3] + dizi[5] + dizi[7])) % 10;
dizi[9] = TcNoOn;

const TcToplam: number = (dizi[0] + dizi[1] + dizi[2] + dizi[3] + dizi[4] + dizi[5] + dizi[6] + dizi[7] + dizi[8] + dizi[9]) % 10;
dizi[10] = TcToplam;

let TCno:string= String(dizi[0]+""+dizi[1]+""+dizi[2]+""+dizi[3]+""+dizi[4]+""+dizi[5]+""+dizi[6]+""+dizi[7]+""+dizi[8]+""+dizi[9]+""+dizi[10]);


console.log(TCno);






