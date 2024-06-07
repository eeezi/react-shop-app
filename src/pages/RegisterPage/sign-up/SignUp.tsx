import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import Form from '../../../components/form/Form'
import { useDispatch } from "react-redux";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firebaseError, setFirebaseError] = useState("");

    const handleSignupAndLogin = (email: string, password: string) => {}

    return (
        <Form
            title={"가입하기"}
            getDataForm={handleSignupAndLogin}
            firebaseError={firebaseError}
        />
    );
};

export default SignUp