import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/landing.css';


const Landing = () => {
    const navigate = useNavigate();
   
    
  

    const handleGetStartedClick = () => {
        navigate('/login');
    };

    const navAbout = () => {
        navigate('/about');
    };

    const navContributor = () => {
        navigate('/contributors');
    };


    
    return (
      <div className="lund">
       
      <div className="overlap-group-wrapper">
      
        <div className="overlap-group">
          <div className="glow-right-centre" />
         
          <div className="div" />
         
          <div className="frame">
          
          <div className="nav-bar">
          <div className='logo'>DoubtPulse</div>
                    <div className="navbar">
                        <div onClick={navAbout} className="text-wrapper">About</div>
                        <div onClick={navContributor} className="text-wrapper-4">Creators</div>
                    </div>
                </div>
          </div>
          <div className="yellow-wrapper">
            <img className="yellow" alt="Yellow" src={require("../public/yellow@2x.png")} />
          </div>
          <div className="purple-wrapper">
            <img className="purple" alt="Purple" src={require("../public/purple@2x.png") } />
          </div>
          <div className="light-blue-wrapper">
            <img className="light-blue" alt="Light blue" src={require("../public/light-blue@2x.png")}
 />
          </div>
          <div className="green-wrapper">
            <img className="green" alt="Green" src={require('../public/green@2x.png')} />
          </div>
          <div className="empowering-learning-wrapper">
            <div className="empowering-learning">
              Empowering Learning,
              <br />
              Illuminating Pathways
            </div>
          </div>
          <div className="get-started-button-wrapper">
            <button className="get-started-button">
              <button className="div-wrapper">
                <div onClick={handleGetStartedClick} className="text-wrapper-5">Get Started</div>
              </button>
            </button>
          </div>
          <div className="orange-bubble-wrapper">
            <div className="orange-bubble" />
          </div>
          <div className="yellow-bubble-wrapper">
            <div className="yellow-bubble" />
          </div>
          <div className="green-bubble-wrapper">
            <div className="green-bubble" />
          </div>
          <div className="red-bubble-wrapper">
            <div className="red-bubble" />
          </div>
          <div className="group">
            <div className="group-2">
              <div className="pink-wrapper">
                <img className="pink" alt="Pink" src={require("../public/pink@2x.png")} />
              </div>
              <div className="dark-blue-wrapper">
                <img className="dark-blue" alt="Dark blue" src={require("../public/dark-blue@2x.png") } />
              </div>
              {/* <div className="sign-in-button-wrapper">
                <div className="sign-in-button">
                  <div className="sign-in-button-2">
                    <div className="text-wrapper-6">Sign in</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Landing;

