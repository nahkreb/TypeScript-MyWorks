//Ucgen alan hesaplama

function UcgenAlanHesaplama (Taban:number,Yukseklik:number){

    const Sonuc:number = (Taban*Yukseklik)/2

    return Sonuc;

}

console.log(UcgenAlanHesaplama(20,5)); 


//Tarih Çıktısı Alma

 function Tarih(){
   
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
        
    return formattedTime;

}


console.log(Tarih());

 


//girilen değerin uzunluğunu söyleyen program

 function Uzunluk(x:any){

    return console.log(x.length)
}

Uzunluk("deneme");




//2 basamaklı sayıların basamaklarını söyleyen program

 function OndalıkBolme(sayi: number) {

    let Birler: number = sayi % 10;
    let Onlar = Math.floor((sayi % 100)/ 10);


    console.log("Birler Basamağı: " + Birler + " Onlar Basamağı: " + Onlar);

}

OndalıkBolme(67); 


//girilen sayının basamaklarını söyleyen program

 function OndalıkBolme2(sayi: number) {
    let basamakSayisi = sayi.toString().length;

    for (let i = 0; i < basamakSayisi; i++) {
        let basamakDegeri = Math.floor((sayi % Math.pow(10, i + 1)) / Math.pow(10, i));
        console.log((i + 1) + ". Basamak: " + basamakDegeri);
    }
}

OndalıkBolme2(12525); 