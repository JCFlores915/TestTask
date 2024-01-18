import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../../src/components/Layout';

describe('Layout Component', () => {
    it('renders children correctly', () => {
        const children = <div>Test Content</div>;
        const tree = renderer.create(<Layout>{children}</Layout>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});
