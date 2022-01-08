import { render } from '@testing-library/react'
import AuthForm from './AuthForm.jsx';

it('renders AuthForm', () => {
    const {container} = render(
            <AuthForm/>
    )

    expect(container).toMatchSnapshot();
})
