import render from '@testing-library/react'
import { ProvideAuth } from '../../context/ProvideAuth.jsx'
import Layout from './Layout.jsx'

it('renders layout', () => {
    const {container} = render(
        <ProvideAuth>
            <Layout>
                <div></div>
            </Layout>
        </ProvideAuth>
    )

    expect(container).toMatchSnapshot();
})