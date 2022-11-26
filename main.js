class AusgabenReschner {
    
    constructor(gehalt){
        this._gehalt = gehalt;
        this._ausgaben = [];
        this._fixAusgaben = [];
        this._bonusGehalt = [];
        
    }

    // Ausgabe von Gehalt, Ausgaben, Fixkosten, Bonusgehalt
    get gehalt() {
        return this._gehalt
    }

    get ausgaben() {
        return this._ausgaben
    }

    get fixAusgaben() {
        return this._fixAusgaben
    }

    get bonusGehalt() {
        return this._bonusGehalt
    }

    //Summe aller Fixkosten
    get summfix() {
        let summ = 0;
        for(let i =0;i < this._fixAusgaben.length; i++ ){
            summ += this._fixAusgaben[i].Betrag;
        }
        return summ;
    }



    //Summe aller Ausgaben
    get summAusgaben() {
        let summ = 0;
        for(let i =0;i < this._ausgaben.length; i++ ){
            summ += this._ausgaben[i].Betrag;
        }
        return summ;
    }

    // Aktuelles Saldo: Gehalt - (Ausgabe + Fixkosten)
    get saldo() {
        return this._gehalt - (this.summAusgaben + this.summfix);
    }

    // Monatliche Fixkosten eintragen
    addFix(zahl, name){
        let objekt = {Betrag:zahl,
        name:name,
        time: new Date()
        }
        this._fixAusgaben.push(objekt);
    }

    // Ausgaben eintragen
     addAusgabe(zahl, name) {
        let objekt = {
        Betrag:zahl,
        name:name,
        time: new Date()
    }
    this._ausgaben.push(objekt);    
    }

    // Bonuszahlung zum Gehalt summieren und zusätlich 
    // speicherung in _bonusGehalt
    addBous(zahl, name) {
        let objekt = {
        Betrag:zahl,
        name:name,
        time: new Date()
    }
    this._bonusGehalt.push(objekt);
    this._gehalt += zahl;    
    }

  

}
const Test = new AusgabenReschner(1000);

Test.addAusgabe(12, "Bröttchen");
Test.addAusgabe(5, "Kaffe");
Test.addAusgabe(4, "Brot");
Test.addAusgabe(5, "Käse");

console.log(Test.ausgaben);

console.log(Test.summAusgaben);
 
Test.addFix(16, "Spotify");
Test.addFix(20, "Fitnesstudio");



console.log(Test.saldo)
console.log(Test.bonusGehalt)

Test.addBous(100, "Wheinachtsgeld");

console.log(Test.saldo)
console.log(Test.bonusGehalt)