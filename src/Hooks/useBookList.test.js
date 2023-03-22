import { useBooksList } from './useBookList';
import { act, renderHook } from '@testing-library/react-hooks'

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
    it('should handle error', async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        const { result } = renderHook(() => useBooksList())
        await act(async () => { result.current.listBooks() });
        expect(result.current.error).toBeTruthy()

    });

    it('should return books', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ results: [{ title: 'title 1' }] }),
        }));
        const { result } = renderHook(() => useBooksList())
        await act(async () => { result.current.listBooks() });
        expect(result.current.books[0].title).toEqual('title 1')
    });


    it('should return error if response not OK', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            ok: false,
            json: () => Promise.resolve({ results: [{ title: 'title 1' }] }),
        }));
        const { result } = renderHook(() => useBooksList())
        await act(async () => { result.current.listBooks() });
        expect(result.current.error).toBeTruthy()
    });

});
