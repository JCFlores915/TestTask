import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CustomButton from '../../../src/components/Button';
import React from 'react';

describe('Button Component', () => {
    test('Renderizar el CustomButton  de manera correcta', () => {
        const wrapper = renderer.create(<CustomButton type="warning" text="Home"  />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    });

    test('Renderizar el CustomButton de manera correcta con block vacío', () => {
        const wrapper = renderer.create(<CustomButton type="warning" text="Home" block="" />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomButton de manera correcta con diferentes tipos', () => {
        const wrapper = renderer.create(<CustomButton type="success" text="Submit" htmlType="submit" block="full" />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomButton de manera correcta con el prop de texto vacío', () => {
        const wrapper = renderer.create(<CustomButton type="warning" text="" block="" />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test(
        'Hacer click en el CustomButton y que se ejecute la funcion onClick'
        , () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<CustomButton type="warning" text="Home" onClick={onClickMock} />);
        fireEvent.click(getByText('Home'));
        expect(onClickMock).toHaveBeenCalled();
    })

    
});
