type LetterBag = String[];

interface Alea {
    (seed: string): () => number;
}

declare const alea: Alea;

declare global {
    interface Array<T> {
        shuffle: () => LetterBag
        generate: (length: number) => LetterBag
    }

    // interface Math {
    //     seedrandom: (seed: string, options?: SeedRandom) => () => number;
    // }
}

const LETTERS: LetterBag = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "M", "N", "P", "Q", "R", "S", "T", "U", "W", "W", "X", "Y", "Z"];


// const shuffler = Math.seedrandom(LETTERS.join(""), { entropy: true });
// const shuffler = alea(LETTERS.join(""));

const range = (min: number, max: number, magic: number) => Math.floor(Math.random() * (max - (magic - min)) + min)

Array.prototype.generate = (length: number) => {
    return LETTERS.concat(new Array<string>(length - LETTERS.length).fill("").map(_ => LETTERS[Math.floor(Math.random() * 26)])).shuffle();
}


Array.prototype.shuffle = function () {

    return this.reverse().sort((a: string, b: string) => range(26, this.length, a.charCodeAt(0)) - range(26, this.length, b.charCodeAt(0)));
}


export default LETTERS;