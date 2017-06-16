/**************************************************************
 *
 * On a 2.8 GHz Intel Core i5 processor:
 * The average hash rate is 310724.90951816115 hashes per second.
 *
 **************************************************************/
const NS_PER_SEC  = 1e9;
const SHA3        = require('sha3');
const randomWords = require('random-words');
const miner       = require('./src/proofOfWork');

const MAX_DIFFICULTY  = 21;
const HASHES_PER_TEST = 10;

let arr = [];

// go up to 20 bits for now
for (let x = 20; x <= MAX_DIFFICULTY; x++) {
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


/**
[ { difficulty: 1,
    average_iterations: 1.4,
    average_time_ns: 277720.7,
    average_time_ms: 0.2777207,
    average_time_s: 0.0002777207,
    hashes_per_sec: 104147.93407423713 },
  { difficulty: 2,
    average_iterations: 2.4,
    average_time_ns: 547618.3,
    average_time_ms: 0.5476183,
    average_time_s: 0.0005476183,
    hashes_per_sec: 35668.021936709214 },
  { difficulty: 3,
    average_iterations: 4.4,
    average_time_ns: 824500.1,
    average_time_ms: 0.8245001,
    average_time_s: 0.0008245001,
    hashes_per_sec: 46988.549767154494 },
  { difficulty: 4,
    average_iterations: 9.9,
    average_time_ns: 717848.1,
    average_time_ms: 0.7178481,
    average_time_s: 0.0007178481,
    hashes_per_sec: 250501.05305545282 },
  { difficulty: 5,
    average_iterations: 31.2,
    average_time_ns: 1397540.1,
    average_time_ms: 1.3975401,
    average_time_s: 0.0013975401,
    hashes_per_sec: 237806.1162727781 },
  { difficulty: 6,
    average_iterations: 102.9,
    average_time_ns: 4698157,
    average_time_ms: 4.698157,
    average_time_s: 0.004698157,
    hashes_per_sec: 279216.9572938799 },
  { difficulty: 7,
    average_iterations: 199.5,
    average_time_ns: 8051689.6,
    average_time_ms: 8.0516896,
    average_time_s: 0.0080516896,
    hashes_per_sec: 600816.7332277157 },
  { difficulty: 8,
    average_iterations: 310.2,
    average_time_ns: 12241940.2,
    average_time_ms: 12.241940199999998,
    average_time_s: 0.012241940199999999,
    hashes_per_sec: 251280.00155820782 },
  { difficulty: 9,
    average_iterations: 475.1,
    average_time_ns: 19861294,
    average_time_ms: 19.861294,
    average_time_s: 0.019861294,
    hashes_per_sec: 502295.91780565074 },
  { difficulty: 10,
    average_iterations: 516.3,
    average_time_ns: 21905321.8,
    average_time_ms: 21.9053218,
    average_time_s: 0.021905321800000002,
    hashes_per_sec: 2794524.574811132 },
  { difficulty: 11,
    average_iterations: 2298.8,
    average_time_ns: 101780030.4,
    average_time_ms: 101.7800304,
    average_time_s: 0.10178003040000001,
    hashes_per_sec: 662930.546180878 },
  { difficulty: 12,
    average_iterations: 4552.9,
    average_time_ns: 215712081.5,
    average_time_ms: 215.7120815,
    average_time_s: 0.2157120815,
    hashes_per_sec: 332072.0529194716 },
  { difficulty: 13,
    average_iterations: 9781.3,
    average_time_ns: 501567513.2,
    average_time_ms: 501.5675132,
    average_time_s: 0.5015675132,
    hashes_per_sec: 563326.5471486767 },
  { difficulty: 14,
    average_iterations: 10334.7,
    average_time_ns: 517112822.6,
    average_time_ms: 517.1128226000001,
    average_time_s: 0.5171128226,
    hashes_per_sec: 6196010.319767763 },
  { difficulty: 15,
    average_iterations: 26587.8,
    average_time_ns: 1109230842.6,
    average_time_ms: 1109.2308426,
    average_time_s: 1.1092308426,
    hashes_per_sec: 173197.08268059185 },
  { difficulty: 16,
    average_iterations: 42095.7,
    average_time_ns: 2055885291.1,
    average_time_ms: 2055.8852911,
    average_time_s: 2.0558852911,
    hashes_per_sec: 317581.5619490528 },
  { difficulty: 17,
    average_iterations: 129561.5,
    average_time_ns: 5865308457.8,
    average_time_ms: 5865.3084578,
    average_time_s: 5.8653084578,
    hashes_per_sec: 414355.97171171696 },
  { difficulty: 18,
    average_iterations: 93378.6,
    average_time_ns: 4278738563.1,
    average_time_ms: 4278.7385631,
    average_time_s: 4.2787385631,
    hashes_per_sec: 435760.7849792551 },
  { difficulty: 19,
    average_iterations: 354872.4,
    average_time_ns: 15499006581.1,
    average_time_ms: 15499.0065811,
    average_time_s: 15.4990065811,
    hashes_per_sec: 254802.69981548865 },
  { difficulty: 20,
    average_iterations: 435848.5,
    average_time_ns: 19378330305.4,
    average_time_ms: 19378.330305400003,
    average_time_s: 19.378330305400002,
    hashes_per_sec: 310724.9095181612 } ]
average hashes per second 310724.90951816115
**/
