export function getRandomArrayOfNum(num: number): Array {
  let randoms = [];
  for (let i = 0; i < num; i++) {
    randoms.push(Math.floor(Math.random() * 4))
  }
  return randoms
}

export function getRandomInt(max: number, min: number = 0): Array {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
