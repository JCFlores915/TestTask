

// __tests__/taskSlice.test.ts
import { taskSlice, addTask } from '../../src/redux/slices/taskSlice';

describe('taskSlice', () => {
  it('should handle addTask', () => {
    const initialState = { allTasks: [] };
    const task = { id: '1', name: 'Test Task', avatar: 'avatar.jpg' };

    const nextState = taskSlice.reducer(initialState, addTask(task));

    expect(nextState.allTasks).toHaveLength(1);
    expect(nextState.allTasks[0]).toEqual(task);
  });
});
