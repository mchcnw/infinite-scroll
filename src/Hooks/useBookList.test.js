import { useBooksList } from './useBookList';
import { act, renderHook } from '@testing-library/react'

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: [], count: 0, previous: '', next: '' }),
    })
);

beforeEach(() => {
    jest.restoreAllMocks();
})

describe('useBookList', () => {
    //  (0 , _react.renderHook) is not a function ???
    it.skip('should handle error', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        const { result } = renderHook(() => useBooksList())
        await act(async () => { result.current.listBooks() });
        expect(result.current.error).toBeTruthy()

    });

    it.skip('should return books', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ results: [{ title: 'title 1' }] }),
        }));
        const { result } = renderHook(() => useBooksList())
        await act(async () => { result.current.listBooks() });
        expect(result.current.books[0].title).toEqual('title 1')
    });

});
