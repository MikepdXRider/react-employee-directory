import { render } from '@testing-library/react'
import ProfileForm from './ProfileForm.jsx';


it('renders ProfileForm', () => {
    const {container} = render(
            <ProfileForm user={{email: 'test@test.com'}}/>
    )

    expect(container).toMatchSnapshot();
})