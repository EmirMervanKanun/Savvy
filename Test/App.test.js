import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

  it('checks if Async Storage is used', async () => {
    await asyncOperationOnAsyncStorage();
  
    expect(AsyncStorage.getItem).toBeCalledWith('myKey');
  });

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
