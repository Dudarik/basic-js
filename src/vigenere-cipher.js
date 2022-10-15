const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    const FIRST_LETTER_CODE = 65;
    const COUNT_ALPHABET_LETTERS = 26;

    this.direct = direct;

    this.alphBig = Array(COUNT_ALPHABET_LETTERS)
      .fill(0)
      .map((_, index) => String.fromCharCode(FIRST_LETTER_CODE + index));
  }

  _getKey = (str, key) => {
    let keyId = 0;
    return [...str]
      .map((char) => {
        if (!this.alphBig.includes(char)) return " ";
        if (keyId === key.length) keyId = 0;
        return key[keyId++];
      })
      .join("");
  };

  _getCodeFromAlph = (char) => this.alphBig.findIndex((item) => item === char);

  _charToCode = (char, keyChar) => {
    const charCode = this._getCodeFromAlph(char);
    const keyCharCode = this._getCodeFromAlph(keyChar);

    if (charCode === -1) return char;

    return this.alphBig[(charCode + keyCharCode) % this.alphBig.length];
  };

  _codeToChar = (char, keyChar) => {
    const charCode = this._getCodeFromAlph(char);
    const keyCharCode = this._getCodeFromAlph(keyChar);

    if (charCode === -1) return char;

    const charPosInAlph = (charCode - keyCharCode) % this.alphBig.length;

    return charPosInAlph >= 0
      ? this.alphBig[charPosInAlph]
      : this.alphBig[this.alphBig.length + charPosInAlph];
  };

  encrypt(...args) {
    if (args.length < 2 || !args[0] || !args[1])
      throw new Error("Incorrect arguments!");

    let message = args[0].toUpperCase(),
      key = args[1].toUpperCase();

    if (message.length > key.length) key = this._getKey(message, key);

    const result = [...message].map((char, index) =>
      this._charToCode(char, key[index])
    );

    return this.direct ? result.join("") : result.reverse().join("");
  }

  decrypt(...args) {
    if (args.length < 2 || !args[0] || !args[1])
      throw new Error("Incorrect arguments!");

    let message = args[0].toUpperCase(),
      key = args[1].toUpperCase();
    if (message.length > key.length) key = this._getKey(message, key);

    const result = [...message].map((char, index) =>
      this._codeToChar(char, key[index])
    );

    return this.direct ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
