class AusgabenReschner {
    
    constructor(gehalt){
        this._gehalt = gehalt;
        this._ausgaben = [];
        this._fixAusgaben = [];
        this._bonusGehalt = [];
        this._sparRate = 0;
        this._sparGuthaben = []; // [{Date: 12.12.22, Einzahlung: 100},{...}]
        this._summSparGuthaben = 0;
        
    }

    // Ausgabe von Gehalt, Ausgaben, Fixkosten, Bonusgehalt, Sparrate, Sparguthaben, Summe des Sparguthabens
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

    get sparRate() {
        return this._sparRate
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

    get sparGuthaben() {
        return this._sparGuthaben
    }

    get summSparGuthaben() {
        return this._summSparGuthaben;
    }

    

    // Monatliche Fixkosten eintragen
    addFix(zahl, name){
        this._fixAusgaben.push({
            Betrag:zahl,
            name:name,
            time: new Date()
            });
        this._gehalt -= zahl;
    }

    // Ausgaben eintragen
     addAusgabe(zahl, name) {
    this._ausgaben.push({
        Betrag:zahl,
        name:name,
        time: new Date()
    });
    this._gehalt -= zahl;    
    }

    // Bonuszahlung zum Gehalt summieren und zusätlich 
    // speicherung in _bonusGehalt
    addBonus(zahl, name) {
        let objekt = {
        Betrag:zahl,
        name:name,
        time: new Date()
    }
    this._bonusGehalt.push(objekt);
    this._gehalt += zahl;    
    }

    // Monatlichen Sparbetrag festlegen 
    addSparRate(number) {
        this._sparRate = number;
        this._sparGuthaben.push(
            {date: new Date(),
            Einzahlung: number});
        this._summSparGuthaben += number
    }

    // Einmalige Sonderzahlung von Gehalt zu Sparguthaben !!
    addSparGuthaben(number) {
        this._gehalt -= number;
        this._sparGuthaben.push(
            {date: new Date(),
            Einmalzahlung: number});
        this._summSparGuthaben += number
    }

     // Einmalige Sonderzahlung von Aussen(Bonusszahlung) zu Sparguthaben !!
     addBonusSparen(number) {
        this._sparGuthaben.push(
            {date: new Date(),
            Einmalzahlung: number});
        this._summSparGuthaben += number
    }

    //Auzahlung vom Sparguthaben 

    entnahmeSparguthaben(number) {
        this._sparGuthaben.push(
            {date: new Date(),
            Auszahlung: number});
        this._summSparGuthaben -= number

    }


}



const Test = new AusgabenReschner(1000);

Test.addAusgabe(10, "Bröttchen");
Test.addAusgabe(5, "Kaffe");
Test.addAusgabe(5, "Brot");



Test.addFix(20, "Spotify");
Test.addFix(20, "Fitnesstudio");

Test.addBonus(100, "Wheinachtsgeld");




//console.log(Test._ausgaben)
console.log("Gehalt: "+Test.gehalt)

Test.addBonusSparen(999);
Test.addSparGuthaben(100)
Test.entnahmeSparguthaben(91)
console.log("Gehalt: "+Test.gehalt)
console.log(Test.sparGuthaben)

console.log(Test.summSparGuthaben)

