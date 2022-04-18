import 'regenerator-runtime';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Note from './index';

test('Note renders correctly', () => {
  const data = { id: 1 };
  const initialState = {
    notes: {
      collectionId: 1
    },
    note: {
      data: {}
    }
  };
  const mockStore = configureStore();

  const component = renderer.create(
    <Provider store={mockStore(initialState)}>
      <Note
        data={data}
      />
    </Provider>
  );
  const NoteComponent = component.toJSON();
  expect(NoteComponent).toMatchSnapshot();
});