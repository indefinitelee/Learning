// This is my solution for AlgoDaily problem Treats Distribution
// Located at https://algodaily.com/challenges/treats-distribution

var assert = require('assert');

function treatsDistribution(snacks) {
  // max she can get is half
  let uniques = 0
  let half = snacks.length /2
  let maxUniqueToSister = 0 
  const typeCounts = {}
  
  for (const type of snacks) {
        if (!typeCounts[type])  {
        typeCounts[type] = 1; 
          uniques++
          if (maxUniqueToSister < half) {
          maxUniqueToSister ++
          }
        }
    if (typeCounts[type]) {
      typeCounts[type] ++
    } 
    
    

  }
  
  return maxUniqueToSister; 
}

console.log(treatsDistribution([1, 1, 2, 4]));

try {
  assert.deepEqual(treatsDistribution([2, 2, 3, 3, 4, 4]), 3);

  console.log(
    'PASSED: ' + 'treatsDistribution([2, 2, 3, 3, 4, 4]) should equal 3'
  );
} catch (err) {
  console.log(err);
}

try {
  assert.deepEqual(treatsDistribution([1, 1, 2, 4]), 2);

  console.log('PASSED: ' + 'treatsDistribution([1, 1, 2, 4]) should equal 2');
} catch (err) {
  console.log(err);
}

try {
  assert.deepEqual(treatsDistribution([7, 7]), 1);

  console.log('PASSED: ' + 'treatsDistribution([7, 7]) should equal 2');
} catch (err) {
  console.log(err);
}
