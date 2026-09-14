import { getHighest } from "./day3";

export function day3b(ranges: string[]): number {
  let total = 0;

  ranges.map((range) => {
    // console.log(range);
    const nums = [];
    let substring = range;

    for (let i = 12; i > 0; i--) {
      // check of by one
      const { highestNum, highestIndex } = getHighest(
        substring.slice(0, substring.length - (i - 1))
      );
      nums.push(highestNum);
      substring = substring.slice(highestIndex + 1);
      // console.log(
      //   `highestNum: ${highestNum}, highestIndex: ${highestIndex}, substring: ${substring}`
      // );
      // console.log(nums);
    }
    const subtotal = nums.join("");
    // console.log(`done loop; subtotal ${subtotal}`);
    total += Number(subtotal);
  });

  return total;
}
