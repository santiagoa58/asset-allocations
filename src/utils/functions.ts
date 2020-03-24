export const safeAdd = (...nums: any[]): number =>
  nums.reduce((sum, nextNum) => {
    if (isNaN(Number(nextNum))) {
      return sum;
    }
    return sum + Number(nextNum);
  }, 0);
