import React, { useEffect, useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , provider } from './config';
import { useNavigate } from 'react-router-dom';
import Rectangle from '../public/lorem-ipsum-rectangle.svg'
import   whiteBottom  from  '../public/white-bottom-right-rect.svg'
import mydeie  from '../public/mdieye.svg';

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };


  const handleSignUp = () => {
    if (email !== confirmEmail || password !== confirmPassword) {
      alert('Email or password do not match');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in  
        const user = userCredential.user;
        navigate('/Help');
        console.log('nahi chal raha ')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        navigate('/Help');
       
      })
      .catch((error) => {
        // Handle the specific error when the popup is closed by the user
        if (error.code === 'auth/popup-closed-by-user') {
          console.log('User closed the authentication popup');
        } else {
          // Handle other errors
          console.error('Error during sign-in:', error);
        }
      });
  };
  
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rammetto One:wght@400&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" />
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '71px 98px 90px', boxSizing: 'border-box', gap: '226px', letterSpacing: 'normal', textAlign: 'left', fontSize: '48px', color: '#fff', fontFamily: 'Urbanist'}}>
      <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }} style={{margin: '0', width: '584px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '47px', minWidth: '584px', maxWidth: '100%'}}>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 11px'}}>
          <h2 style={{margin: '0', position: 'relative', fontSize: '35px', letterSpacing: '-0.34px', fontWeight: 700, fontFamily: 'Urbanist', color: '#fff', textAlign: 'center'}}>
            Please enter your details
          </h2>
        </div>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 20px', boxSizing: 'border-box', gap: '23px', maxWidth: '100%'}}>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 4px', gap: '10px'}}>
            <div style={{position: 'relative', fontSize: '22px', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#efefef', textAlign: 'center'}}>
              Email
            </div>
            <div style={{alignSelf: 'stretch', borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #e1e1e3', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '22px 10px'}}>
            <input style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '20px', backgroundColor: 'transparent', height: '24px', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '150px', maxWidth: 'calc(100% - 33px)'}} placeholder="Enter your Email" type="text" onChange={handleEmailChange} />
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '4px'}}>
            <div style={{position: 'relative', fontSize: '22px', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#efefef', textAlign: 'center'}}>
              Confirm Email
            </div>
            <div style={{alignSelf: 'stretch', borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #767676', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '22px 10px', zIndex: 1}}>
            <input onChange={handleConfirmEmailChange} style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '20px', backgroundColor: 'transparent', height: '24px', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '150px', maxWidth: 'calc(100% - 33px)'}} placeholder="Confirm your Email" type="text" />
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%'}}>
            <div style={{position: 'relative', fontSize: '22px', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#efefef', textAlign: 'center'}}>
              Password
            </div>
            <div style={{alignSelf: 'stretch', height: '78px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%', zIndex: 1, marginTop: '-5px'}}>
              <div style={{alignSelf: 'stretch', height: '88px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{alignSelf: 'stretch', flex: 1, borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #e1e1e3', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '16px 11px 16px 9px', gap: '10px', maxWidth: '100%'}}>
                  <input onChange={handlePasswordChange} style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '20px', backgroundColor: 'transparent', height: '24px', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '150px', maxWidth: 'calc(100% - 33px)'}} placeholder="Enter your Password" type="password" />
                  <img style={{height: '21px', width: '23px', position: 'relative', overflow: 'hidden', flexShrink: 0}} alt="" src={mydeie }/>
                </div>
              </div>
            </div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%'}}>
            <div style={{position: 'relative', fontSize: '22px', letterSpacing: '-0.34px', fontWeight: 600, fontFamily: 'Urbanist', color: '#efefef', textAlign: 'center'}}>
              Confirm Password
            </div>
            <div style={{alignSelf: 'stretch', height: '78px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', maxWidth: '100%', zIndex: 1}}>
              <div style={{alignSelf: 'stretch', height: '88px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '10px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{alignSelf: 'stretch', flex: 1, borderRadius: '15px', backgroundColor: '#f7f7f7', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px solid #e1e1e3', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '16px 11px 16px 9px', gap: '10px', maxWidth: '100%'}}>
                  <input onChange={handleConfirmPasswordChange} style={{width: 'calc(100% - 43px)', border: 'none', outline: 'none', fontFamily: 'Urbanist', fontSize: '20px', backgroundColor: 'transparent', height: '24px', flex: 1, position: 'relative', letterSpacing: '-0.34px', color: '#767676', textAlign: 'left', display: 'flex', alignItems: 'center', minWidth: '150px', maxWidth: 'calc(100% - 33px)'}} placeholder="Confirm Password" type="password" />
                  <img style={{height: '21px', width: '23px', position: 'relative', overflow: 'hidden', flexShrink: 0}} alt="" src={mydeie }/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '44px', maxWidth: '100%'}}>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '38px', maxWidth: '100%'}}>
            <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 5px', boxSizing: 'border-box', maxWidth: '100%'}}>
              <button style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: '#fff', flex: 1, borderRadius: '15px', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', zIndex: 1}}>
                <div style={{flex: 1, borderRadius: '15px', backgroundColor: '#665b86', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '12px 11px 11px', boxSizing: 'border-box', maxWidth: '100%'}}>
                  <div style={{height: '61px', width: '569px', position: 'relative', borderRadius: '15px', backgroundColor: '#665b86', display: 'none', maxWidth: '100%'}} />
                  <div style={{width: '117.4px', position: 'relative', fontSize: '32px', fontWeight: 600, fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', display: 'inline-block', flexShrink: 0, zIndex: 1}}>
                    Sign in
                  </div>
                </div>
              </button>
            </div>
            <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: '2px'}}>
              <div style={{height: '6px', width: '204px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 11px 0px 0px', boxSizing: 'border-box'}}>
              <img style={{alignSelf: 'stretch', height: '1.9px', position: 'relative', maxWidth: '100%', overflow: 'hidden', flexShrink: 0, objectFit: 'contain'}} loading="eager" alt="" />
              </div>
              <div style={{height: '32px', width: '134px', position: 'relative', fontSize: '20px', fontWeight: 600, fontFamily: 'Urbanist', color: '#c1b9b9', textAlign: 'left', display: 'inline-block', flexShrink: 0}}>
                or sign in with
              </div>
              <div  style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 7px', boxSizing: 'border-box', minWidth: '157px'}}>
                <img style={{alignSelf: 'stretch', height: '1.9px', position: 'relative', maxWidth: '100%', overflow: 'hidden', flexShrink: 0, objectFit: 'contain'}} loading="eager" alt="" />
              </div>
            </div>
          </div>
          <div onClick={handleClick} style={{cursor:'pointer',alignSelf: 'stretch', height: '68px', position: 'relative', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.5)', border: '1px solid #3c3b3b', boxSizing: 'border-box'}} />
          <button onClick={handleClick} style={{ cursor: 'pointer', border: 'none', padding: 0, backgroundColor: '#fff', flex: 1, borderRadius: '15px', boxShadow: '0px 6px 4px rgba(0, 0, 0, 0.25)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: '100%', zIndex: 1 }}>
        <img style={{ height: '80px', width: '64px', position: 'absolute', margin: '0 !important', bottom: '161px', left: '350px', objectFit: 'cover', zIndex: 1 }} loading="eager" alt="Google Sign In" src={require('../public/google-icon@2x.png')} />
      </button>
       
        </div>
      </form>
    
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '90px 0px 53px', boxSizing: 'border-box', marginRight:'500px', position: 'relative', gap: '104px', minWidth: '679px', maxWidth: '100%', marginLeft: '-50px'}}>
    <img style={{width: '100%', height: '100%', position: 'absolute', margin: '0 !important', top: '0px', right: '0px', bottom: '0px', left: '0px', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', zIndex: 1}} alt="" src={Rectangle} />
    <div style={{width: '487px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', padding: '0px 0px 5px', boxSizing: 'border-box', gap: '65px', maxWidth: '100%', textAlign: 'center'}}>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 27px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
            <h1 style={{margin: 0, height: '116px', flex: 1, position: 'relative', fontSize: 'inherit', letterSpacing: '-0.34px', fontWeight: 700, fontFamily: 'inherit', whiteSpace: 'pre-wrap', display: 'flex', alignItems: 'center', maxWidth: '100%', zIndex: 2}}>
                <span>
                    <p style={{margin: 0}}>Explore</p>
                    <p style={{margin: 0}}>The World of Knowledge</p>
                </span>
            </h1>
        </div>
        <div style={{width: '444px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', position: 'relative', maxWidth: '100%', textAlign: 'left', fontSize: '20px'}}>
            <div style={{height: '463px', width: '448px', position: 'absolute', margin: '0 !important', bottom: '-354px', left: '-348px', borderRadius: '50%', backgroundColor: '#9176b4', filter: 'blur(350px)'}} />
            <div style={{height: '72px', flex: 1, position: 'relative', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', maxWidth: '100%', zIndex: 2}}>
                "Unlock the power of instant learning! Sign up to Doubt Pulse and get answers to your math, physics, and theory questions by simply scanning images."
            </div>
        </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 34px 0px 43px', boxSizing: 'border-box', maxWidth: '100%', fontSize: '22px'}}>
        <div style={{width: '602px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '13px', maxWidth: '100%'}}>
            <div style={{position: 'relative', letterSpacing: '-0.34px', fontWeight: 800, zIndex: 2}}>
                Simplify Your Learning
            </div>
            <div style={{alignSelf: 'stretch', height: '72px', position: 'relative', fontSize: '20px', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', zIndex: 2}}>
                "Our cutting-edge technology empowers you to focus on understanding concepts, not just solving problems. Join us in revolutionizing the way you learn!"
            </div>
        </div>
    </div>
    <div style={{width: '649px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 43px', boxSizing: 'border-box', maxWidth: '100%', fontSize: '27px', color: '#000'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '31px 34px 45px', boxSizing: 'border-box', position: 'relative', maxWidth: '100%'}}>
            <img style={{height: '100%', width: '100%', position: 'absolute', margin: '0 !important', top: '0px', right: '0px', bottom: '0px', left: '0px', borderRadius: '15px', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', zIndex: 2}} loading="eager" alt="" src={whiteBottom} />
            <h3 style={{margin: 0, height: '64px', width: '403px', position: 'relative', fontSize: 'inherit', letterSpacing: '-0.34px', fontWeight: 800, fontFamily: 'inherit', display: 'flex', alignItems: 'center', flexShrink: 0, maxWidth: '100%', zIndex: 3}}>
                Unlock a World of Knowledge
            </h3>
            <div style={{width: '403px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '88px 0px 0px', boxSizing: 'border-box', maxWidth: '100%', marginLeft: '-403px', fontSize: '20px'}}>
                <div style={{alignSelf: 'stretch', height: '72px', position: 'relative', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', zIndex: 3}}>
                    "Dive into a realm of knowledge where your questions are answered promptly. Experience learning like never before with Doubt Pulse!"
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  
  </div>
  )
}

export default Login
