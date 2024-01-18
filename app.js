"use strict"

const numberOfSeries = +prompt ("Nechta serial ko'rdingiz", "");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

if (seriesDB.count < 5) {
    console.log("Kam serial ko'rarkansiz");
} else if (seriesDB.count > 5 && seriesDB.count < 10) {
    console.log("Siz classik tomashabin ekansiz");
} else if (seriesDB.count > 10) {
    console.log("Siz serialchi zvezda ekansiz");
} else {
    console.log("Error");
}

for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?", ""),  // optimallashtirilgan
    b = +prompt ("Nechi baxo berasiz?", "")
    if (a != null && b != null && (a != "") && (b != "")) {
        seriesDB.series[a] = b;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}
console.log(seriesDB);

// const a = prompt("Oxirgi ko'rgan serialingiz?", ""),  // optimallashtirilmagan
//     b = +prompt ("Nechi baxo berasiz?", ""),
//     c = prompt("Oxirgi ko'rgan serialingiz?", ""),
//     d = +prompt ("Nechi baxo berasiz?", "");