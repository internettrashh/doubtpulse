import React from 'react';
import { useNavigate } from 'react-router-dom';


const YourReactComponent = () => {
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

          const navHelp = () => {
            navigate('/help');
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
        <div style={{width: '100%', position: 'relative',  backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '33px 0px 250px', boxSizing: 'border-box', gap: '199px', letterSpacing: 'normal', textAlign: 'left', fontSize: '70px', color: '#fff', fontFamily: 'Inika'}}>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 20px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px', maxWidth: '100%'}}>
              <header style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', gap: '50px', maxWidth: '100%', textAlign: 'left', fontSize: '24px', color: '#fff', fontFamily: 'Inter'}}>
                <h2 style={{margin: 0, height: '45px', marginRight:'45px', width: '361px', position: 'relative', fontSize: '40px', letterSpacing: '-0.34px', fontWeight: 400, fontFamily: '"Rammetto One"', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textShadow: '0px 20px 4px rgba(0, 0, 0, 0.25)', maxWidth: '100%', zIndex: 1}}>
                  doubtPulse
                </h2>
               
                <div style={{height: '38px', width: '118px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px', boxSizing: 'border-box'}}>
                  <div onClick={navAbout} style={{ cursor:'pointer',height: '29px', position: 'relative', fontWeight: 500, display: 'inline-block'}}>
                    About
                  </div>
                </div>
                <div style={{height: '38px', width: '98px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px', boxSizing: 'border-box'}}>
                  <div onClick={navHelp} style={{cursor:'pointer',width: '54.6px', position: 'relative', fontWeight: 500, display: 'inline-block'}}>
                    Help
                  </div>
                </div>
                <div style={{height: '38px', width: '184px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px', boxSizing: 'border-box'}}>
                  <div onClick={navContributor} style={{cursor:'pointer',height: '29px', position: 'relative', fontWeight: 500, display: 'inline-block'}}>
                    Contributors
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 12px'}}>
                  <div style={{width: '39px', height: '39px', position: 'relative', borderRadius: '50%', backgroundColor: '#e6b921'}} />
                </div>
              </header>
             
            </div>
          </div>
          <div style={{width: '987px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', padding: '0px 20px 102px', boxSizing: 'border-box', maxWidth: '100%'}}>
            <h1 style={{margin: 0, height: '182px', position: 'relative', fontSize: 'inherit', fontWeight: 700, fontFamily: 'inherit', display: 'inline-block', zIndex: 1}}>
              <p style={{margin: 0}}>Empowering Learning,</p>
              <p style={{margin: 0}}>Illuminating Pathways</p>
            </h1>
          </div>
          <div style={{width: '850px', height: '1030px', position: 'absolute', margin: '0 !important', top: '-487px', left: '-505px'}}>
            <div style={{position: 'absolute', top: '0px', left: '0px', borderRadius: '50%', backgroundColor: '#766191', filter: 'blur(350px)', width: '100%', height: '100%'}} />
            <div style={{position: 'absolute', top: '757px', left: '592px', borderRadius: '50%', backgroundColor: '#fe9e24', width: '23px', height: '23px', zIndex: 1}} />
          </div>
          <div style={{width: '893px', height: '1248px', position: 'absolute', margin: '0 !important', right: '-135px', bottom: '-131px'}}>
            <div style={{position: 'absolute', top: '146px', left: '43px', borderRadius: '50%', backgroundColor: '#766191', filter: 'blur(350px)', width: '850px', height: '850px'}} />
            <div style={{position: 'absolute', top: '94px', left: '0px', borderRadius: '103px', width: '200px', height: '650px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '10px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require("../public/yellow@2x.png")} />
            </div>
            <div style={{position: 'absolute', top: '776px', left: '0px', borderRadius: '103px', width: '200px', height: '416px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '10px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require("../public/pink@2x.png")} />
            </div>
            <div style={{position: 'absolute', top: '0px', left: '234px', borderRadius: '103px', width: '200px', height: '635px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '56px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require("../public/purple@2x.png") }/>
            </div>
            <div style={{position: 'absolute', top: '558px', left: '234px', borderRadius: '103px', width: '200px', height: '651px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '10px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require("../public/dark-blue@2x.png") }/>
            </div>
            <div style={{position: 'absolute', top: '195px', left: '468px', borderRadius: '103px', width: '200px', height: '518px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '10px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require("../public/light-blue@2x.png")} />
            </div>
            <div style={{position: 'absolute', top: '744px', left: '468px', borderRadius: '103px', width: '200px', height: '504px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img style={{width: '100%', height: '100%', zIndex: 1, objectFit: 'contain', position: 'absolute', left: '0px', top: '10px', transform: 'scale(1.8)'}} loading="eager" alt="" src={require ("../public/green@2x.png") }/>
            </div>
            <div style={{position: 'absolute', top: '713px', left: '673px', borderRadius: '50%', backgroundColor: '#66c264', width: '39px', height: '39px', zIndex: 1}} />
          </div>
          <div style={{width: '39px', height: '39px', position: 'absolute', margin: '0 !important', right: '792px', bottom: '341px', borderRadius: '50%', backgroundColor: '#ec4c59'}} />
          <div style={{width: '517px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', padding: '0px 20px', boxSizing: 'border-box', maxWidth: '100%'}}>
            <button onClick={handleGetStartedClick} style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: '#fff', borderRadius: '50px 50px 50px 0px', boxShadow: '0px 10px 4px rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(250px)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{borderRadius: '50px 50px 50px 0px', backgroundColor: '#665b86', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '24px 35px 23px 36px', whiteSpace: 'nowrap'}}>
                <div style={{height: '91px', width: '273px', position: 'relative', borderRadius: '50px 50px 50px 0px', backgroundColor: '#665b86', display: 'none'}} />
                <div style={{height: '44px', position: 'relative', fontSize: '36px', fontWeight: 600, fontFamily: 'Inter', color: '#fff', textAlign: 'left', display: 'inline-block', zIndex: 1}}>
                  Get Started
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
};

export default YourReactComponent;

