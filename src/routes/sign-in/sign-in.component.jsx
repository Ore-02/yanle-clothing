import {  useState} from 'react';
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword,
} from '../../utilitys/firebase/firebase.utilis';
import { Link } from "react-router-dom";
import FormInput from '../../components/form-input/form-input.component';
import './sign-in.styles.scss'
import Footer from '../footer/footer';

const defaultFormField = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password, } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField)
   }

   const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password)
        resetFormFields()
    } catch(error) {
        if(error.code === 'auth/user-not-found'){
            alert('Cannot login, Email not registered')
            resetFormFields()
        } else if(error.code === 'auth/wrong-password'){
            alert('Wrong Email or Password')
            resetFormFields()
        }else {
            console.log('user creation encountered an error',error)
        }
        
    }
}

    const handleChange = (event) => {
        setFormFields({...formFields, [event.target.name]:event.target.value})
     }


    // useEffect(() => {
    //     const getResult = async () => {
    //         const response = await getRedirectResult(auth)
    //         console.log(response)
    //     if(response) {
    //         const userDocRef = createUserDocumentFromAuth(response.user)
    //         console.log(userDocRef)
    //     }
    //     }
    //     getResult()
    // }, [])

    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
    };

    return (
        <>
        <div className='sign-in-body'>
            <div className='sign-in-container'>
            <h1>Sign-in</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label='Email'
                type="email" 
                required 
                name='email' 
                onChange={handleChange}
                value={email}/>

                <FormInput 
                label='Password'
                type="password" 
                required 
                name='password' 
                onChange={handleChange}
                value={password}/>

                <div className='btn-container'>
                    <button 
                    className='btn'
                    type='submit'
                    >Sign in</button> 
                    <button 
                    type='button'
                    className='btn google-sign-in '
                    onClick={signInWithGoogle}
                    >Sign in with google</button> 
                    {/* <Button
                    type="submit" 
                    text="Sign in"/>
                    <Button 
                    buttonType='google'
                    onClick={signInWithGoogle}
                    text="Sign in with Google"/> */}
                </div>
            </form>
            <p className='text'>Don't have an account? 
            <Link className='sign-up-link' to="/sign-Up">Sign up</Link></p>
            </div>

            
        </div>
            <Footer/>
        </>
    )


        // <div>
        //     <div>Sign In Page</div>
        //     <button onClick={logGoogleUser}>Sin in with Google</button>
        //     <button onClick={signInWithGoogleRedirect}>Sin in with Google Redirect</button>
        //     <p>Don't have an account?<Link className="" to="/sign-Up">
        //         Sign Up
        //     </Link></p>

        // </div>

    
}

export default SignIn;
