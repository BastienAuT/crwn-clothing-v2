
import {  signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };



    return (
  <div className="">
    <h1>Sign In Page</h1>
    <button onClick = {logGoogleUser}> Sign in with google popup </button>
    <SignUpForm />
  </div>
 );
};
export default SignIn;
