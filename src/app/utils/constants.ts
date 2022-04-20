type LetterBag = String[];

declare global {
    interface Array<T> {
        shuffle: (take: number) => LetterBag
        generate: (length: number) => LetterBag
    }
}


Array.prototype.generate = function(length: number) {
    return new Array<string>(length).fill("");
}


Array.prototype.shuffle = function(take: number) {
    
    return this;
}

const LETTERS: LetterBag = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","Q","R","S","T","U","W","W","X","Y","Z"];



export default LETTERS;

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = 1;
      result = characters.charAt(Math.floor(Math.random() * charactersLength));
   return result;
}
