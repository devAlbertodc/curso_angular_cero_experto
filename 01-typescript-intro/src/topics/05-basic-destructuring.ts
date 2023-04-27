interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    },
};

const {
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

//Desestructure complex object inside interfaces:
console.log({ song: anotherSong });
console.log({ songDuration: duration });

const { author, year } = details
console.log({ author, year });

//Create array and get info about them.
//In this case, I am only interesting in getting the third value. 
//I can skip the others leaving , I put a default value in case that the third value is not found.
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']
console.log("Personaje 3:", trunks);

export { };
