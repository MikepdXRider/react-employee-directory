import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ProvideAuth } from '../../context/ProvideAuth.jsx'
import Layout from './Layout.jsx'

// jest.mock('../../services/users.js');
jest.mock('../../context/ProvideAuth.jsx');

it('renders layout w/o user', () => {
    const {container} = render(
        <ProvideAuth>
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})

it('renders layout w/ user', () => {
    const {container} = render(
        <ProvideAuth mockUser={{email: 'hi@test.com'}}>
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})