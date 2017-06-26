import { renderComponent , expect } from '../test_helper';
import Site from '../../src/components/site';

describe('Site' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Site);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
