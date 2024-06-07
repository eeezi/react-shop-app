import Form from '../../../components/form/Form'
import { useState } from 'react';

const SignIn = () => {
    const [firebaseError] = useState<string>('');
    const handleLogin = (email: string, password: string) => {}

    return (
        <Form
            title={"로그인"}
            getDataForm={handleLogin}
            firebaseError={firebaseError}
        />
    )
}

export default SignIn