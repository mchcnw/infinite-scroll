import Header from './Header'
import { render, fireEvent } from '@testing-library/react';

describe('<Header />', () => {
    it('should render', () => {
        const { getByText } = render(<Header />);
        expect(getByText('Books')).toBeInTheDocument()
    })

    it('should render current count', () => {
        const { getByText } = render(<Header currentCount={10} />);
        expect(getByText('10 books')).toBeInTheDocument()
    })

    it('should render selected count', () => {
        const { getByText } = render(<Header selectedCount={2} />);
        expect(getByText('(2 selected)')).toBeInTheDocument()
    })

    it('should render clear selection button', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('button', { name: /Clear selection/ })).toBeInTheDocument()
    })

    it('should call reset onclick of clear selection button', () => {
        const resetSpy = jest.fn()
        const { getByRole } = render(<Header reset={resetSpy} />);
        const resetBtn = getByRole('button', { name: /Clear selection/ });
        fireEvent.click(resetBtn)
        expect(resetSpy).toHaveBeenCalled()
    })
})