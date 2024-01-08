import {describe, expect, test} from '@jest/globals';
import maxProfit from "./container";

describe("Максимальная прибыль должна вычисляться корректно", () => {
  test("Ввод: 7,1,5,3,6,4, Вывод: 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  
  test("Ввод: 7,6,4,3,1, Вывод: 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});


