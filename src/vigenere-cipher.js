const { NotImplementedError } = require('../lib');

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
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      const code = msg.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        const shift = k.charCodeAt(keyIndex % k.length) - 65;
        const newCode = ((code - 65 + shift) % 26) + 65;
        result += String.fromCharCode(newCode);
        keyIndex += 1;
      } else {
        result += ch;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      const code = msg.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        const shift = k.charCodeAt(keyIndex % k.length) - 65;
        const newCode = ((code - 65 - shift + 26) % 26) + 65;
        result += String.fromCharCode(newCode);
        keyIndex += 1;
      } else {
        result += ch;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
