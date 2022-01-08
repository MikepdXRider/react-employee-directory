import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { ProvideAuth } from '../../context/ProvideAuth.jsx';
import PrivateRoute from './PrivateRoute.jsx';

jest.mock('../../context/ProvideAuth.jsx');

it('renders PrivateRoute', () => {
    const {container} = render(
        <ProvideAuth>
            <MemoryRouter>
                <PrivateRoute location='/'/>
            </MemoryRouter>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})