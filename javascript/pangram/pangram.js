class Pangram {
    constructor(input) {
        this.input = input;
    }
    isPangram() {
        const sentence = this.input.toLowerCase();
        return 'abcdefghijklmnopqrstuvwxyz'
            .split('')
            .filter(value => sentence.indexOf(value) === -1)
            .length === 0;
    };
};

module.exports = Pangram;