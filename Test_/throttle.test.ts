import { throttleFunction } from '../src/throttle';

jest.useFakeTimers();

describe('throttleFunction', () => {
    let mockCallback: jest.Mock;

        beforeEach(() => {
            mockCallback = jest.fn();
        });

        it('should call de callback inmediately on firts call', () => {
            const throttled = throttleFunction(mockCallback, 1000);
            throttled(1, 2);

            expect(mockCallback).toHaveBeenLastCalledWith(1, 2);
        });

        it('should throttle subsequent calls within the delay period', () => {
            const throttled = throttleFunction(mockCallback, 1000);
            throttled(1, 2);
            throttled(3, 4);

            expect(mockCallback).toHaveBeenCalledTimes(1);
            expect(mockCallback).toHaveBeenCalledWith(1, 2);

            jest.advanceTimersByTime(1000);
            expect(mockCallback).toHaveBeenCalledTimes(2);
            expect(mockCallback).toHaveBeenCalledWith(3, 4);

        });

        it('should only call the last throttled call with the delay period', () => {

            const throttled = throttleFunction(mockCallback, 1000);
            throttled(1, 2);
            throttled(3, 4);
            throttled(5, 6);

            jest.advanceTimersByTime(1000);
            expect(mockCallback).toHaveBeenCalledTimes(2);
            expect(mockCallback).toHaveBeenCalledWith(5, 6);
        });

        it('should reset throttle afteer delay', () => {
            const throttled = throttleFunction(mockCallback, 1000);
            throttled(1, 2);

            jest.advanceTimersByTime(1000);
            expect(mockCallback).toHaveBeenCalledTimes(1);

            throttled(3, 4);
            expect(mockCallback).toHaveBeenCalledTimes(2);
            expect(mockCallback).toHaveBeenCalledWith(3, 4);


        });

    });