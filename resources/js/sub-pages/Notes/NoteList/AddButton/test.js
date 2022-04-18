import 'regenerator-runtime';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddButton from './index';

test('NoteList Add Button renders correctly', () => {
  const initialState = { notes: [] };
  const mockStore = configureStore();

  const component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <AddButton/>
    </Provider>
  );
  const NoteListAddButton = component.toJSON();
  expect(NoteListAddButton).toMatchSnapshot();
});