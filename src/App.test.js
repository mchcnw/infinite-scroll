import React from 'react';
import { render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {useBooksList} from './Hooks/useBookList';

jest.mock('./Hooks/useBookList');
const mockUseBooksList = useBooksList;

describe('<App />', () => {

  it('shoud render first page of dataset on load', () => {
    mockUseBooksList.mockReturnValue({
      loading: false,
      error: false,
      books: [{ title: 'test title', authors: [{name: 'test author'}]}],
      listBooks: jest.fn()
    })
  const { getByText } = render(<App />);
  expect( getByText(/test title/i)).toBeInTheDocument();
  });
 

   it('should have a Header title "Books"', () => {
    mockUseBooksList.mockReturnValue({
      loading: false,
      error: false,
      books: [],
      listBooks: jest.fn()
    })
  const { getByText } = render(<App />);
  expect(getByText(/Books/)).toBeInTheDocument();
  })
  
  it('should have a clear selection button', () => {
    mockUseBooksList.mockReturnValue({
      loading: false,
      error: false,
      books: [{ title: 'test title', authors: [{name: 'test author'}]}],
      listBooks: jest.fn()
    })
  const { getByRole } = render(<App />);
  expect( getByRole('button', {name: /Clear selection/i})).toBeInTheDocument();
  })

  it('should indicate loading', () => {
    mockUseBooksList.mockReturnValue({
      loading: true,
      error: false,
      books: [{ title: 'test title', authors: [{name: 'test author'}]}],
      listBooks: jest.fn()
    })
  const { getByText } = render(<App />);
  expect( getByText(/...loading/i)).toBeInTheDocument();
    })

  describe('List items', () => {
    it('should have a checkbox to add to the selected books count', async() => {
      mockUseBooksList.mockReturnValue({
        loading: false,
        error: false,
        books: [{ title: 'test title', authors: [{name: 'test author'}]}, { title: 'test title 2', authors: [{name: 'test author 2'}]}],
        listBooks: jest.fn()
      })
    const { getAllByRole, getByText } = render(<App />);
    const cbBooks = getAllByRole('checkbox');
    userEvent.click(cbBooks[0]);
    await waitFor(() => {
      expect(getByText('(1 selected)')).toBeInTheDocument()
    });
    userEvent.click(cbBooks[1]);
    await waitFor(() => {
      expect(getByText('(2 selected)')).toBeInTheDocument()
    });
    })
     
    it('should have a cover', () => {
      mockUseBooksList.mockReturnValue({
        loading: false,
        error: false,
        books: [{ title: 'test title', authors: [{name: 'test author'}], formats: {'image/jpeg': 'http://test'}}],
        listBooks: jest.fn()
      })
      const { getByRole } = render(<App />);
      expect( getByRole('img', {src: 'http://test'})).toBeInTheDocument();
    })

    it('should author title and name below', () => {
      mockUseBooksList.mockReturnValue({
        loading: false,
        error: false,
        books: [{ title: 'test title', authors: [{name: 'test author'}]}, { title: 'test title 2', authors: [{name: 'test author 2'}]}],
        listBooks: jest.fn()
      })
      const { getByText } = render(<App />);
      expect(getByText('test title 2')).toBeInTheDocument()
      expect(getByText('test author 2')).toBeInTheDocument()
    })


  })

});

