const CompteBancaireController = (req, res) => {
    res.render('CompteBancaire', { user: "Julien", greetings: false, objets: ["choux", "carottes", "tomates"] });
}

module.exports = {
    CompteBancaireController
}