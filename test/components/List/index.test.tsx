import React from 'react';
import renderer from 'react-test-renderer';
import CustomListScroll from '../../../src/components/List';
import '../../matchMedia.mock';
import { IDataType } from '../../../src/redux/interfaces';
describe('List Component', () => {
    test('Renderizar el CustomListScroll de manera correcta', () => {
        const wrapper = renderer.create(<CustomListScroll data={[]} getListData={() => {}} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    });

    test('Renderizar el CustomListScroll de manera correcta con hasMore true', () => {
        const wrapper = renderer.create(<CustomListScroll data={[]} getListData={() => {}} hasMore={true} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomListScroll de manera correcta con hasMore false', () => {
        const wrapper = renderer.create(<CustomListScroll data={[]} getListData={() => {}} hasMore={false} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomListScroll de manera correcta con data vacío', () => {
        const wrapper = renderer.create(<CustomListScroll data={[]} getListData={() => {}} hasMore={false} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomListScroll de manera correcta con data lleno', () => {
        const wrapper = renderer.create(<CustomListScroll data={[{id: '1', name: 'name', username: 'username', avatar: 'avatar', createdAt: '2021-10-22T05:01:39.680Z'}]} getListData={() => {}} hasMore={false} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomListScroll de manera correcta con data lleno y hasMore true', () => {
        const wrapper = renderer.create(<CustomListScroll data={[{id: '1', name: 'name', username: 'username', avatar: 'avatar', createdAt: '2021-10-22T05:01:39.680Z'}]} getListData={() => {}} hasMore={true} />).toJSON();
        expect(wrapper).toMatchSnapshot();        
    })

    test('Renderizar el CustomListScroll de manera correcta con data lleno mayor a 50 y hasMore true', () => {
    
        const data: Array<IDataType> = [];
        for (let i = 0; i < 51; i++) {
            data.push({id: '1', name: 'name', username: 'username', avatar: 'avatar', createdAt: '2021-10-22T05:01:39.680Z'} as never);
        }
        const wrapper = renderer.create(<CustomListScroll data={data} getListData={() => {}} hasMore={true} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    })

    test('Renderizar el CustomListScroll de manera correcta con data lleno mayor a 50 y hasMore false', () => {
    
        const data: Array<IDataType> = [];
        for (let i = 0; i < 51; i++) {
            data.push({id: '1', name: 'name', username: 'username', avatar: 'avatar', createdAt: '2021-10-22T05:01:39.680Z'} as never);
        }
        const wrapper = renderer.create(<CustomListScroll data={data} getListData={() => {}} hasMore={false} />).toJSON();
        expect(wrapper).toMatchSnapshot();
    })

    

});