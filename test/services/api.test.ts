import { getElementsUser } from '../../src/services/api';
import { IDataType } from '../../src/redux/interfaces';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(
            [
                { id: '1', name: 'Element 1', avatar: 'avatar.jpg', createdAt: '2021-01-01', username: 'user1', password: 'password1'  }, 
                { id: '2', name: 'Element 2', avatar: 'avatar.jpg', createdAt: '2021-01-01', username: 'user2', password: 'password2'}
            ] as IDataType[])
    }) as unknown as Promise<Response>
);


describe('API Tests', () => {
        it('should fetch all elements', async () => {
                const elements = await getElementsUser();
                expect(elements).toBeDefined();
                expect(Array.isArray(elements)).toBe(true);
        });
});
