export function getHighest(range: string): { highestNum: number; highestIndex: number } {
  // console.log(range);
  let highestNum = 0;
  let highestIndex = -1;
  for (let i = 0; i < range.length; i++) {
    const currNum = Number(range[i]);
    if (currNum > highestNum) {
      highestNum = currNum;
      highestIndex = i;
    }
  }
  return { highestNum, highestIndex };
}

export function day3(ranges: string[]): number {
  let total = 0;

  ranges.map((range) => {
    const { highestNum, highestIndex } = getHighest(range.slice(0, range.length - 1));
    const { highestNum: secondHighestNum } = getHighest(range.slice(highestIndex + 1));
    const subtotal = Number(`${highestNum}${secondHighestNum}`);
    // console.log(subtotal);
    total += subtotal;
  });

  return total;
}

// export function day3b(ranges: string[]): number {
//   let products = 0;

//   ranges.map((range) => {
//     const start = Number(range.split("-")[0]);
//     const end = Number(range.split("-")[1]);
//     for (let i = start; i <= end; i++) {
//       const curr = i.toString();
//       const currLength = curr.length;

//       for (let numRepeats = 2; numRepeats <= currLength; numRepeats++) {
//         if (currLength % numRepeats !== 0) {
//           continue;
//         }

//         // const substrings = Array.from({ length: Math.ceil(curr.length / numRepeats) }, (v, ii) =>
//         //   curr.slice(ii * numRepeats, ii * numRepeats + numRepeats)
//         // );
//         const substringSize = Math.ceil(curr.length / numRepeats);
//         const substrings = Array.from({ length: numRepeats }, (v, i) =>
//           curr.slice(i * substringSize, i * substringSize + substringSize)
//         );

//         const allEqual = (arr: string[]) => arr.every((val) => val === arr[0]);
//         if (allEqual(substrings)) {
//           // console.log(`i: ${i}, substrings: ${substrings}`);
//           products += i;
//           break;
//         }
//       }
//     }
//   });
//   return products;
// }
