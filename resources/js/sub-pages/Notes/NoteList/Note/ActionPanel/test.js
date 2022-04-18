import renderer from 'react-test-renderer';
import ActionPanel from './index';

test('Note Action Panel renders correctly', () => {
  const component = renderer.create(
    <ActionPanel/>
  );
  const NoteActionPanel = component.toJSON();
  expect(NoteActionPanel).toMatchSnapshot();
});