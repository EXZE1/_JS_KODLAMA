// let ogrn1_ad = "Ada";
// let ogrn1_soyad = "bilgi";
// let ogrn1_dogumTarihi = "2010";
// let ogrn1_matematik1 = 40;
// let ogrn1_matematik2 = 50;
// let ogrn1_matematik3 = 70;

// let ogrn1_ort = (ogrn1_matematik1 + ogrn1_matematik2 + ogrn1_matematik3) / 3 ;

// console.log(parseFloat(ogrn1_ort));
// console.log(ogrn1_ort >= 50);

// let ogrn2_ad = "Ada";
// let ogrn2_soyad = "bilgi";
// let ogrn2_dogumTarihi = "2010";
// let ogrn2_matematik1 = 90;
// let ogrn2_matematik2 = 50;
// let ogrn2_matematik3 = 50;

// let suankiYil = new Date().getFullYear();

// let ogrn1_yas = suankiYil - parseInt(ogrn1_dogumTarihi);

// console.log(ogrn1_yas);


// ***********************************************************
// **************************************************************


// let vize1 = 40
// let vize2 = 20
// let vizeOrt = (vize1 + vize2) / 2
// let final = 60
// let not = (parseInt(vizeOrt) * 0.4) + (parseInt(final) * 0.6)
// if(final>=70){

//     console.log("finalin")
//     console.log("geçtin")
//     console.log(parseInt(not))

// }

// else if(final>50){
//     if(not>=50){

//         console.log("finalin 50 ve üstü")
//         console.log("geçtin")
//         console.log(parseInt(not))
//     }

//     else{
//         console.log("kaldın")

//     }
// }

// else{
//     console.log("kaldin")
//     console.log(parseInt(not))
    
// }
// ****************************************************************
// ****************************************************************

// let url = "file:///C:/Users/oguzhan%20yucedag/Desktop/01_html/dys-aray%C3%BCz.html"
// let KursAdi = "komple web geliştirme"



// sonuc = url.length; 

// sonuc = KursAdi.split("").length; // kaç karakter olduğunu

// sonuc = url.startsWith("file") // başlangıç ismi bu mu 

// if (KursAdi.indexOf("Eğitimi") > -1) { // içinde eğitim kelimesi varmı , bir index numarası dönmesi lazım ama -1 dönmesin diye 0 dan başlattık
//     console.log("evet var");
// } else{
//     console.log("hayır yok")
// }

// KursAdi = KursAdi.toLowerCase(); // bütün harfleri küçük yapar

// KursAdi = KursAdi.replaceAll(" ","-") //boşluklari kısa çizgiye çevirir

// sonuc = `${url}/${KursAdi}`; //url nin yanına kurs adını ekler ve bunu sonuca eşitler 



// let sayi = 10.438445

// sonuc = sayi.toPrecision(5); // bütün sayi üzerinden beş basamak alcak 
// sonuc = sayi.toFixed(5); // ondalıklı kısım üzerinden 5 basamak alır ve 6. basamak eğer bir üstüne daha yakınsa 5. basamağı bir üste yuvarlar

// sonuc = Math.sqrt(25); //karekök alma 

// sonuc = Math.pow(5,3); // 5 üstü 3

// sonuc = Math.abs(-6); // mutlak değer

// sonuc = Math.min(1,2,3,4,5); // en küçüğünü bulur

// sonuc = Math.max(1,2,3,4,5); // en büyüğünü bulur

// sonuc = Math.floor(Math.random() * 10) ; // 1 ila 9 arası sayı verir
// sonuc = Math.round(2.4); // en yakın sayıya yuvarlar

// sonuc = Math.ceil(2.2); // bir üst tam sayıya yuvarlar

// sonuc = Math.floor(2.5); // bir alt tam sayıya yuvarlar 

// let simdi =new Date(); //şimdi ki tarih

// sonuc = simdi.getDate();

// sonuc = simdi.getDay();

// sonuc = simdi.getFullYear();

// sonuc = simdi.getHours();

// sonuc = simdi.getTime();

// simdi.setFullYear(2025);
// simdi.setMonth(6);
// simdi.setDate(15);
// sonuc = simdi;

// console.log(sonuc);
// console.log(typeof sonuc); // ekrana sonucu yazdır 

// ****************************************** 

var suan = new Date();
      var ayAd = suan.getMonth() + 1;  // getMonth Ayı 0 to 11 aralığında verir
      var gunAd = suan.getDay() + 1;    // getDay Günü  0 to 6  aralığında verir  
      //document.write("<H3>"+suan+"<H3>");
      /* suan.getDate() - Ayın günü = 1 to 31
            gün no 10'dan küçükse önüne sıfır koy
           */
        if  (suan.getDate()<10)
       GunNo = "0" + suan.getDate();
        else
            GunNo = suan.getDate();
      if(gunAd==1) Gun = "Pazar,";
      if(gunAd==2) Gun = "Pazartesi,";
      if(gunAd==3) Gun = "Salı";
      if(gunAd==4) Gun = "Çarşamba";
      if(gunAd==5) Gun = "Perşembe";
      if(gunAd==6) Gun = "Cuma";
      if(gunAd==7) Gun = "Cumartesi";
      if(ayAd==1) Ay="Ocak";
      if(ayAd==2) Ay="Şubat";
      if(ayAd==3) Ay="Mart";
      if(ayAd==4) Ay="Nisan";
      if(ayAd==5) Ay="Mayıs";
      if(ayAd==6) Ay="Haziran";
      if(ayAd==7) Ay="Temmuz";
      if(ayAd==8) Ay="Ağustos";
      if(ayAd==9) Ay="Eylül";
      if(ayAd==10) Ay="Ekim";
      if(ayAd==11) Ay="Kasım";
      if(ayAd==12) Ay="Aralık";
      // o anki tarihi temsil eden stringi oluştur
      var buGunTar =(" " + GunNo + " " + Ay + " " + Gun );

      console.log(buGunTar);


// let ogrenciler = ["oguzhan","çınar","ada"]

// // sonuc = ogrenciler.length; // string bir ifadenin karakter sayısını döndürür

// sonuc = ogrenciler.toString;  //<
// sonuc = ogrenciler.join("-"); // stringlerin arasına kısa çizgi veya herhangi bir şey koyar

// sonuc = ogrenciler.pop();// son eleman silinir ve silinen elemean ekrana döndürülür 

// sonuc = ogrenciler.shift();// ilk  eleman silinir ve ekrana döndürülür

// sonuc = ogrenciler.push("oguzhan"); // sona eleman ekler

// sonuc = ogrenciler.unshift("oguzhan")// ilk eleman ekler

// let markalar1 = ["tesla","ford"];
// let markalar2 = ["BMW","citroen"];
// let markalar3 = ["opel","toyota"];

// sonuc = markalar1.concat(markalar2,markalar3); // dizileri birleştirir

// console.log(sonuc);
// console.log(ogrenciler);
// console.log(markalar1)


// ****************************************************
// let ogr1 = [
//       "yiğit",
//       "bilgi",
//       2010,
//       [70,60,80]
// ];

// let ogr2 = [
//       "ada",
//       "bilgi",
//       2005,
//       [30,20,80]
// ];

// let ogr3 = [
//       "ahmet",
//       "bilgi",
//       2003,
//       [1,60,80]
// ];

// let ogrenciler = [ogr1,ogr2,ogr3];

// let yiğit_yas = new Date().getFullYear() - ogrenciler[0][2];
// let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
// let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

// let yiğit_not = ((ogrenciler[0][3][0]) + (ogrenciler[0][3][1]) + (ogrenciler[0][3][2])) / 3 ;
// let ada_not = ((ogrenciler[1][3][0]) + (ogrenciler[1][3][1]) + (ogrenciler[1][3][2])) / 3 ;
// let ahmet_not = ((ogrenciler[2][3][0]) + (ogrenciler[2][3][1]) + (ogrenciler[2][3][2]) ) / 3;

// console.log(yiğit_not.toFixed(2),ada_not.toFixed(2),ahmet_not.toFixed(2));

// **************************************************************************************



// let siparis_1 = {
//       "siparis_id" : 101,
//       "siparis_tarihi":"30.12.2022",
//       "odeme_sekli":"kredi karti",
//       "kargo_adresi":{
//             "mahalle" :"yahya kaptan",
//             "ilce" :"izmit",
//             "sehir" :"kocaeli"
//       },
//       "urunler": [
//             {     
//                   "urun_id" : 5,
//                   "urun_adi" : "iphone 13 pro",
//                   "urun_url": "http://abc.com/iphone-13-pro",
//                   "urun_fiyat" : 22000
//             }
            
//       ]
// };

// let siparis_2 = {
//       "siparis_id" : 101,
//       "siparis_tarihi":"30.12.2022",
//       "odeme_sekli":"kredi karti",
//       "kargo_adresi":{
//             "mahalle" :"yahya kaptan",
//             "ilce" :"izmit",
//             "sehir" :"kocaeli"
//       },
//       "urunler": [
            
//             {     
//                   "urun_id" : 6,
//                   "urun_adi" : "iphone 13 pro max",
//                   "urun_url": "http://abc.com/iphone-13-pro-max",
//                   "urun_fiyat" : 25000
//             }
//       ]
// };

// let siparis1_toplam = (siparis_1.urunler[0].urun_fiyat ) * 1.18;

// let siparis2_toplam = (siparis_2.urunler[0].urun_fiyat ) * 1.18;

// let toplam_siparis = siparis1_toplam + siparis2_toplam;

// console.log("sipariş 1:" + siparis1_toplam);
// console.log("sipariş 2:" + siparis2_toplam);

// console.log("toplam ödenen miktar :" , toplam_siparis);

// let siparisler = [siparis_1,siparis_2];

// ****************************************************************


// let toplam = 0;

// // for(let i = 1; i <=10; i++){
// //       toplam += i;
// // }
// console.log(toplam);

// let sayilar = [1,2,3,4,5,6,7,8,9,10]

// for(let i=0; i < sayilar.length ; i++){ //ardışık sayılar toplamı
//       console.log(sayilar[i],".");
//       toplam += sayilar[i];
//       console.log(toplam);
// }

//***********************************************

// let sayilar = [1,20,14,15,0,10]; //karekök alma

// for (let sayi of sayilar){
//       console.log(sayi * sayi);
// }

// let sayilar = [1,13,10,25,37,45] // 5 bölününce kalan değer

// for ( let i = 0; i < sayilar.length; i++  ){
//       if(sayilar[i] % 5 == 0){
//             console.log(sayilar[i])
//       }
// }

// let ogrenciler = [
//       {"ad":"ada", "soyad":"bilgi3", "notlar" :[50,75,90]},
//       {"ad":"yigit", "soyad":"bilgi2", "notlar":[60,75,90]},
//       {"ad":"ogi", "soyad":"bilgi1", "notlar":[900,75,90]}
// ];

// for (let ogrenci of ogrenciler ){
//       let not_toplam = 0;
//       let ortalama = 0;
//       let adet = 0;
//       for(let not of ogrenci.notlar){
//             not_toplam += not;
//             adet++;
//       }
//       ortalama = not_toplam / adet;
//       console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ögrencinin not ortalamasin..: ${ortalama}.`); 
      
// }
// *********************************************************************
// function yasHesaplama(DogumYili) {
//       return console.log(new Date().getFullYear() - DogumYili);
      
// }

// yasHesaplama(1980);

// function EmekliligeKaçYilKaldi(DogumYili,isim) {
//       let yas = yasHesaplama(DogumYili);
//       let kalanSene = 65 - yas;
      
//       if(yas > 65){
//             console.log("emeklisin");
//       }
//       else{
//             console.log(`${isim} emeklilige ${kalanSene} kaldi`)
//       }
      
// }

// EmekliligeKaçYilKaldi(1900,"o");




