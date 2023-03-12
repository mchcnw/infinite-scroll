import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  it('should render', () => {
  const { getByText } = render(<App />);
  const todoElement = getByText(/here be dragons/i);

  expect(todoElement).toBeInTheDocument();
  })

  it('shoud render first page of dataset on load', () => {
    expect(true).toBe(false)
  });

  it('should call next page on scroll of last', () => {
    expect(true).toBe(false)
  })

  it('should have a fixed width of 500px, with a border and center', () => {
    expect(true).toBe(false)
  })

  it('should have a sticky header', () => {
    expect(true).toBe(false)
  })

   it('should have a Header title "Books"', () => {
    expect(true).toBe(false)
  })
   it('should have a current count of books on the left', () => {
    expect(true).toBe(false)
  })

   it('should have a current count of select books on the left in {}', () => {
    expect(true).toBe(false)
  })

  it('should have a clear selection button', () => {
    expect(true).toBe(false)
  })

  it('should indicate loading', () => {
      expect(true).toBe(false)
    })

  describe('List items', () => {
    it('should have all list items same height of less than 100px', () => {
      expect(true).toBe(false)
    })
    it('should have a checkbox that add to the selected books', () => {
      expect(true).toBe(false)
    })
     
    it('should have a cover that scales to max-width 50px and max-height of 75px', () => {
      expect(true).toBe(false)
    })

    it('should author title and name below', () => {
      expect(true).toBe(false)
    })


  })


 
});

