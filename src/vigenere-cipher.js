const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (this.alphabet.indexOf(letter) === -1) {
        encrypted += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = this.alphabet.indexOf(keyLetter);
      const letterIndex = this.alphabet.indexOf(letter);
      const newIndex = (letterIndex + (this.isDirect ? 1 : -1) * keyIndex) % this.alphabet.length;
      const newLetter = this.alphabet[newIndex < 0 ? newIndex + this.alphabet.length : newIndex];
      encrypted += newLetter;

      j++;
    }

    return this.isDirect ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decrypted = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];
      if (this.alphabet.indexOf(letter) === -1) {
        decrypted += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = this.alphabet.indexOf(keyLetter);
      const letterIndex = this.alphabet.indexOf(letter);
      const newIndex = (letterIndex - (this.isDirect ? 1 : -1) * keyIndex) % this.alphabet.length;
      const newLetter = this.alphabet[newIndex < 0 ? newIndex + this.alphabet.length : newIndex];
      decrypted += newLetter;

      j++;
    }

    return this.isDirect ? decrypted : decrypted.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
