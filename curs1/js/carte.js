class Carte{
    constructor(titlu, autor, editura, anAparitie,pret,nrPagini){
        this.titlu=titlu;
        this.autor=autor;
        this.editura=editura;
        this.anAparitie=anAparitie;
        this.pret=pret;
        this.nrPagini=nrPagini;
    }
    deschidCartea(pagina){
        console.log(`Am deschis cartea la pagina ${pagina}`);
    }
    randomIntFromInterval(min, max){//min and max included
        return Math.floor(Math.random()*(max - min +1)+min)

    }
    modificaPret(pretNou){
        if(pretNou <100 && pretNou > this.pret){
            this.pret=pretNou;
            console.log(`Pretul nou este: ${this.pret}`);

        }
    }
    reducere(procent){
        // this.pret=this.pret-(procent/100*this.pret)
        this.pret-=(procent * this.pret)/100
        console.log(`Pretul cu reducere este: ${this.pret}`);
    }
}
const carte=new Carte('Poezii', 'M. Eminescu', 'Humanitas',2010, 50, 120)
console.log(carte);
carte.modificaPret(75);
console.log(carte);
carte.reducere(10);
console.log(carte);

