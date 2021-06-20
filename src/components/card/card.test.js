import Card from './card';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';

it('Card component match snapshot', () => {
	const img = 'asd.jpg';
	const description = 'description';
	const price = 120;
	const title = 'title';
	const { container, getByTestId } = render(<Card tittle={title} price={price} img={img} description={description} />)
	expect(getByTestId('price')).toBeTruthy();
	expect(getByTestId('price')).toHaveTextContent(`${price}`);
	expect(getByTestId('description')).toBeTruthy();
	expect(getByTestId('description')).toHaveTextContent(description);
	expect(getByTestId('img')).toBeTruthy();
	expect(container).toMatchSnapshot();
})