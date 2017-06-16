/**************************************************************
 *
 * On a 2.8 GHz Intel Core i5 processor:
 * The average hash rate is 310724.90951816115 hashes per second.
 *
 **************************************************************/
const NS_PER_SEC  = 1e9;
const SHA3        = require('sha3');
const randomWords = require('random-words');
const miner       = require('./');

const MAX_DIFFICULTY  = 20;
const HASHES_PER_TEST = 10;

let arr = [];

// go up to 20 bits for now
for (let x = 1; x <= MAX_DIFFICULTY; x++) {
  // setup a timer and track averages for the average
  let average_time = 0,
      time_start,
      time_end,
      solution = 0
      hashes_per_sec = 0;
  // run the same situation 10 times and take the average
  for (let y = 0; y < HASHES_PER_TEST; y++) {
    time_start = process.hrtime();
    // create a unique hash
    let hash = new SHA3.SHA3Hash()
                       .update(randomWords({exactly: 12, join: ' '}))
                       .digest('hex');
    // solve the hash
    solution += miner.proofOfWork(hash, x);
    // get the time
    time_end = process.hrtime(time_start);
    // add the time to average_time
    average_time += time_end[0] * NS_PER_SEC + time_end[1];
    // get total hashes per second
    hashes_per_sec += solution / ((time_end[0] * NS_PER_SEC + time_end[1]) / 1e9);
  }
  // now average the times and solution lengths:
  average_time   = average_time / HASHES_PER_TEST;
  solution       = solution / HASHES_PER_TEST;
  hashes_per_sec = hashes_per_sec / HASHES_PER_TEST;
  // Insert the datapoint
  arr.push({
    difficulty: x,
    average_iterations: solution,
    average_time_ns: average_time,
    average_time_ms: average_time / 1000000,
    average_time_s:  average_time / 1e9,
    hashes_per_sec: hashes_per_sec
  });
}

let averageHashs = 0;
arr.forEach((d) => {
  averageHashs += hashes_per_sec;
});
averageHashs = averageHashs / MAX_DIFFICULTY

console.log(arr);
console.log("average hashes per second", averageHashs);
