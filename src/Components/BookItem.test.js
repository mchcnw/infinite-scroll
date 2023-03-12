import BookItem from "./BookItem";
import { render, fireEvent } from '@testing-library/react';

describe('<BookItem />', () => {
    it('should render', () => {
        const book = { title: 'test 1' }
        const { getByText } = render(<BookItem book={book} />);
        expect(getByText('test 1')).toBeInTheDocument()
    })

    it('should have all list items same height of less than 100px', () => {
        const book = { title: 'test 1' }
        const { getByTestId } = render(<BookItem book={book} />);
        expect(getByTestId('book-item')).toHaveAttribute('style', expect.stringContaining('max-height: 100px'))
    })
})