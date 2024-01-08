import { describe, it, expect } from 'vitest';
import maxProfit from './container';


describe('Максимальная прибыль должна вычисляться корректно', async () => {
    it('7, 1, 5, 3, 6, 4 ==> 5', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
    it('7, 6, 4, 3, 1 ==> 0', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });
});

