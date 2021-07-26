const cardComparing = function (card, arrDeCartas) {
    const [card1, card2] = card;
    if (card1.i === card2.i) return;
    if (card1.icono === card2.icono) {
        card1.flipped = true;
        card2.flipped = true;
        card1.adivinada = true;
        card2.adivinada = true;

    };

    if (card1.icono !== card2.icono) {
        card1.flipped = false;
        card2.flipped = false;

    }
    const totalAdivinada = arrDeCartas.filter(card => card.adivinada);

    if (arrDeCartas.length === totalAdivinada.length) {
        alert('Ganaste');
        arrDeCartas = arrDeCartas.map(card => {
            card.adivinada = false;
            card.flipped = false;
        });
        return 'Ganaste';
    }
};

export default cardComparing;

