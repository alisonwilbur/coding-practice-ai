export function day2(ranges: string[]): number {
  let products = 0;

  ranges.map((range) => {
    const start = Number(range.split("-")[0]);
    const end = Number(range.split("-")[1]);
    for (let i = start; i <= end; i++) {
      const curr = i.toString();
      const currLength = curr.length;
      if (currLength % 2 === 0) {
        const left = curr.slice(0, currLength / 2);
        const right = curr.slice(currLength / 2);
        if (left === right) {
          products += i;
        }
      }
    }
  });
  return products;
}

export function day2b(ranges: string[]): number {
  let products = 0;

  ranges.map((range) => {
    const start = Number(range.split("-")[0]);
    const end = Number(range.split("-")[1]);
    for (let i = start; i <= end; i++) {
      const curr = i.toString();
      const currLength = curr.length;

      for (let numRepeats = 2; numRepeats <= currLength; numRepeats++) {
        if (currLength % numRepeats !== 0) {
          continue;
        }

        // const substrings = Array.from({ length: Math.ceil(curr.length / numRepeats) }, (v, ii) =>
        //   curr.slice(ii * numRepeats, ii * numRepeats + numRepeats)
        // );
        const substringSize = Math.ceil(curr.length / numRepeats);
        const substrings = Array.from({ length: numRepeats }, (v, i) =>
          curr.slice(i * substringSize, i * substringSize + substringSize)
        );

        const allEqual = (arr: string[]) => arr.every((val) => val === arr[0]);
        if (allEqual(substrings)) {
          // console.log(`i: ${i}, substrings: ${substrings}`);
          products += i;
          break;
        }
      }
    }
  });
  return products;
}
