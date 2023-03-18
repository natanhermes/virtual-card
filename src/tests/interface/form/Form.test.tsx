import { render } from '@testing-library/react';

import { Form } from '../../../components/form';
import { MockedProvider } from '@apollo/react-testing';

import { mocks } from '../../../mocks/apollo/queries';

describe('<Form />', () => {
  it('should be able form to be defined', async () => {
    const form = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Form />
      </MockedProvider>,
    );
    const formA = await form.queryByTestId('form-virtual-card');

    expect(formA).toBeInTheDocument();
  });
});
