import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth,
    signInWithGooglePopup } from '../../utilitys/firebase/firebase.utilis';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component'
import Footer from '../../routes/footer/footer';
const defaultFormField = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { firstName, lastName, email, password, confirmPassword } = formFields
    const displayName = lastName +' '+ firstName

    const resetFormFields = () => {
         setFormFields(defaultFormField)
    }

    const logGoogleUser = async() => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
    
        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(response.user, {displayName} )
            
            console.log()
            resetFormFields()
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error',error)
            }
            
        }

    }
    const handleChange = (event) => {
       setFormFields({...formFields, [event.target.name]:event.target.value})
    }

    return (
        <>
        <div className='sign-up-body'>
            <div className='sign-up-container'>
            <h1>Create account</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='First Name' 
                type="text" 
                required 
                name='firstName' 
                onChange={handleChange}
                value={firstName}/>
                <FormInput
                label='Last Name' 
                type="text" 
                required 
                name='lastName' 
                onChange={handleChange}
                value={lastName}/>
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
                <FormInput 
                label='Confirm Password'
                type="password" 
                required 
                name='confirmPassword' 
                onChange={handleChange}
                value={confirmPassword}/>
                <div className='btn-container'>
                    <button 
                    className='btn'
                    type='submit'
                    >Sign up</button> 
                   <button 
                    className='btn google-sign-in '
                    onClick={logGoogleUser}
                    >Register with google</button>
                    {/* <Button
                    type="submit" 
                    text="Sign up"/> */}
                </div>
            </form>
            <p className='text'>Already have an account? 
            <Link className='sign-in-link' to="/sign-In">Sign in</Link></p>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default SignUpForm;