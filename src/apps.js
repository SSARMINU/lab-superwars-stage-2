
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        const playerStrength = getRandomStrength();
        const playerImage = "super-" + (i + 1) + ".png";
        const playerType = i % 2 === 0 ? "hero" : "villain";

        const player = {
            name: players[i],
            strength: playerStrength,
            img: playerImage,
            type: playerType
        };

        detailedPlayers.push(player);
    }


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (1,100]
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for (let i = 0; i < players.length; i++) {
        if (players[i].type === type) {
            fragment += `
                <div class="player">
                    <img src="${players[i].img}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                </div>
            `;
        }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}