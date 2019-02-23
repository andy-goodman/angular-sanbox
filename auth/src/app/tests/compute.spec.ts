import {compute} from './compute';

describe('compute', // suit
// test runner going to call
    () => {
        it('should return 0, is input is negative', () => {
            const result = compute (-1);
            expect(result).toBe(0);
        });
    }
);
