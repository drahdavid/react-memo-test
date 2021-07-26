

export default () => {
    const iconsFontAwesome = ['fa-camera-retro', 'fa-bath', 'fa-battery-full', 'fa-bug', 'fa-cubes', 'fa-puzzle-piece', 'fa-futbol-o', 'fa-btc',
        'fa-toggle-on', 'fa-umbrella'];
    const cantidadCartas = 20;
    let arrCartas = [];


    while (arrCartas.length < cantidadCartas) {
        const i = Math.floor(Math.random() * iconsFontAwesome.length);
        const carta = {
            icono: iconsFontAwesome.splice(i, 1)[0],
            adivinada: false,
            flipped: false
        };


        arrCartas.push(carta);
        arrCartas.push(carta);

    };


    arrCartas = arrCartas.sort(() => Math.random() - 0.5);
    return arrCartas;
}; 

