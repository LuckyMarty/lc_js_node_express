export default class CompteBancaire {
    #numero;
    #solde;
    #nom;

    constructor(numero, solde, nom) {
        this.#numero = numero;
        this.#solde = solde;
        this.#nom = nom;
    }


    get numero() {
        return this.#numero;
    }

    get solde() {
        return this.#solde;
    }

    get nom() {
        return this.#nom;
    }

    credit(montant) {
        this.#solde += montant;
    }

    debit(montant) {
        this.#solde -= montant;
    }
}