// @flow
const SHA3    = require('sha3');
const bencode = require('bencode');
const bigInt  = require('big-integer');

interface Input {
  transactionHash: string,
  transactionIndex: number,
  unlockingScript: string,
  nonce: bigInt
}

interface Output {
  amount: bigInt,
  lockingScript: string
}

interface Transaction {
  version: string,
  inputs: Input,
  outputs: Output,
  locktime: Date
}

// target is in bits. For instance if the payload hash and noce had
// a binary output of "0010110100001..." and the target was 3
// than we would check "001" to see if they are all zeros. Since
// we still have a one left over, we rehash with a new nonce
function proofOfWork(payload: Array<Transaction> | string, target: number, nonce: number = -1) {
  // assuming the payload is an array of transactions (objects)
  // we should convert it to a bencode string
  if (Array.isArray(payload))
    payload = bencode.encode(payload);

  let solution = null;

  do {
    nonce++;
    solution = parseInt(
      toBinary(
        new SHA3.SHA3Hash()
          .update(
            new SHA3.SHA3Hash()
              .update( payload + nonce )
              .digest()
          )
          .digest('hex')
      ).substr(0, target)
    , 10);
    // console.log(solution)
  } while (solution)

  return nonce;
}

function verify(payload: Array<Transaction> | string, target: number, nonce: number) {
  // assuming the payload is an array of transactions (objects)
  // we should convert it to a bencode string
  if (Array.isArray(payload))
    payload = bencode.encode(payload);

  solution = parseInt(
    toBinary(
      new SHA3.SHA3Hash()
        .update(
          new SHA3.SHA3Hash()
            .update( payload + nonce )
            .digest()
        )
        .digest('hex')
    ).substr(0, target)
  , 10);

  return (solution === 0) ? true : false;
}

function toBinary(input: Array<string>): string {
  return input.split('').map((c) => {
    return conversion(c);
  }).join('');
}

function conversion(input:string): string {
  switch (input) {
    case '0':
      return '0000';
    case '1':
      return '0001';
    case '2':
      return '0010';
    case '3':
      return '0011';
    case '4':
      return '0100';
    case '5':
      return '0101';
    case '6':
      return '0110';
    case '7':
      return '0111';
    case '8':
      return '1000';
    case '9':
      return '1001';
    case 'a':
      return '1010';
    case 'b':
      return '1011';
    case 'c':
      return '1100';
    case 'd':
      return '1101';
    case 'e':
      return '1110';
    case 'f':
      return '1111';
    default:
      return '0000';
  }
}

module.exports = {
  proofOfWork,
  verify
};
