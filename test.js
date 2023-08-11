function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
}
Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}
let sorular = [
    new Soru("1-Hangisi JavaScript Paket Yönetim Sistemidir." ,{ a : "Node.js", b : "Typescript" , c : "Npc" }, "c"),
    new Soru("2-Hangisi JavaScript Paket Yönetim Sistemidir." ,{ a : "Node.js", b : "Typescript" , c : "Npc" }, "c"),
    new Soru("3-Hangisi JavaScript Paket Yönetim Sistemidir." ,{ a : "Node.js", b : "Typescript" , c : "Npc" }, "c"),
    new Soru("4-Hangisi JavaScript Paket Yönetim Sistemidir." ,{ a : "Node.js", b : "Typescript" , c : "Npc" }, "c"),
];
function Quiz(sorular) {
    this.sorular = sorular;
    this.sorularIndex = 0;
}
    Quiz.prototype.soruGetir = function() {
       return this.sorular[this.sorularIndex];
    }
    const quiz = new Quiz(sorular);
document.querySelector(".btn-start").addEventListener("click", function(){
    if(quiz.sorular.length != quiz.sorularIndex){
        console.log(quiz.soruGetir());
        quiz.sorularIndex += 1;
    }else{
        console.log("quiz soruları bitti.");
    }
} )



// console.log(quiz.soruGetir());

// quiz.sorularIndex += 1;

// console.log(quiz.soruGetir());
// let soru1 = new Soru("1-Hangisi JavaScript Paket Yönetim Sistemidir. ",{ a : "Node.js", b : "Typescript" , c : "Npc" }, "c");
// let soru2 = new Soru("2-Hangisi Pythonda Web Geliştirmek İçin Kullanılır.", { a : "Node.js", b : "Typescript" , c : "Npc" }, "c" );