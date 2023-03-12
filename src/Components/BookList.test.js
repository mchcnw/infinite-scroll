import BookList from './BookList';
import { render, fireEvent} from '@testing-library/react';
import {useBooksList} from '../Hooks/useBookList'

jest.mock('../Hooks/useBookList');
const mockUseBooksList = useBooksList;

describe('<BookList />', () => {
    it('should render', () => {
        mockUseBooksList.mockReturnValue({
            loading: false,
            error: false,
            books: [{ title: 'test title', authors: [{name: 'test author'}]}],
            listBooks: jest.fn()
          })
        const { getByText } = render(<BookList />);
        expect(getByText('Books')).toBeInTheDocument()
    })

    it('should have a fixed width of 500px', () => {
        mockUseBooksList.mockReturnValue({
            loading: false,
            error: false,
            books: [{ title: 'test title', authors: [{name: 'test author'}]}],
            listBooks: jest.fn()
          })
        const { getByTestId } = render(<BookList />);
        
        expect(getByTestId('book-list-scroll')).toHaveAttribute('style', expect.stringContaining('height: 500px'))
      })

      it('should call next page on scroll of last', () => {
        const listBooksSpy = jest.fn()
        mockUseBooksList.mockReturnValue({
            loading: false,
            error: false,
            books: [{ title: 'test title', authors: [{name: 'test author'}]}],
            listBooks: listBooksSpy,
            next: 'https://test?page=2'
          })
        const { getByTestId } = render(<BookList />);
        fireEvent.scroll(getByTestId('book-list-scroll'))
        expect(listBooksSpy).toHaveBeenLastCalledWith('https://test?page=2')
      });

      it('should have a current count of bookst', () => {
        mockUseBooksList.mockReturnValue({
          loading: false,
          error: false,
          retrievedCount: 1,
          books: [{ title: 'test title', authors: [{name: 'test author'}]}],
          listBooks: jest.fn()
        })
      const { getByText } = render(<BookList />);
      expect( getByText(/1 books/i)).toBeInTheDocument();
      })
    })
