import React, { useState } from "react";
import { FaqsContainer } from "../../containers/faqs";
import { FooterContainer } from "../../containers/footer";

import { JumbotronContainer } from "../../containers/jumbotron";



import SignUp from "../signup/SignUp";
function Login() {
  const [signIn, SetSignIn] = useState(false);
  return (
      <div>
    <div className="login">
      <div className="login_header">
        <img
          src="http://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          className="login_logo"
        />

         <button className="login_button" onClick={() => SetSignIn(true)} > 
                  Sign In 
               </button> 
      </div>
      <div className="login_body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch AnyWhere,Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login_form">
              <input type="text" placeholder="Email Address" />
              <button onClick={() => SetSignIn(true)}>Get Started</button>
            </form>
          </>
        )}
      </div>
    </div>
          <div >
           <JumbotronContainer/>
           <FaqsContainer/>
           <FooterContainer/>
          

          </div>
          </div>

  );
}

export default Login;
