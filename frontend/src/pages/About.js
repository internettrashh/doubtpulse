import React from 'react'
import Clock from '../public/clock.svg';
import Book from '../public/book.svg';
import fast from '../public/fast.svg';
import line from '../public/line-4.svg'

function About() {
  return (
   <div>
     <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rammetto One:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni MT:wght@700&display=swap" />
        <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
        <div style={{width: '100%', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 0px 57px', boxSizing: 'border-box', gap: '45px', letterSpacing: 'normal'}}>
          <section style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '163px', position: 'relative', textAlign: 'left', fontSize: '110px', color: '#fff', fontFamily: '"Bodoni MT"'}}>
            <div style={{height: '100%', width: '100%', position: 'absolute', margin: '0 !important', top: '0px', right: '0px', bottom: '0px', left: '0px'}}>
              <img style={{position: 'absolute', height: '100%', width: '100%', top: '2px', right: '0px', bottom: '3px', left: '0px', maxWidth: '100%', overflow: 'hidden', maxHeight: '100%', objectFit: 'cover'}} loading="eager" alt="" src={require ("../public/about-us-image@2x.png")} />
              <div style={{position: 'absolute', height: '100%', width: '100%', top: '0px', right: '0px', bottom: '0px', left: '0px', backgroundColor: 'rgba(0, 0, 0, 0.47)', zIndex: 1}} />
            </div>
            <h1 style={{margin: 0, height: '132px', position: 'relative', fontSize: 'inherit', fontWeight: 700, fontFamily: 'inherit', display: 'inline-block', zIndex: 2}}>
              About us
            </h1>
          </section>
          <footer style={{width: '1515px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 20px', boxSizing: 'border-box', gap: '62px', maxWidth: '100%', flexShrink: 0, textAlign: 'left', fontSize: '23px', color: '#fff', fontFamily: 'Urbanist'}}>
            <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', maxWidth: '100%'}}>
              <div style={{width: '419px', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '37px 34px 44px', minWidth: '419px', maxWidth: '100%'}}>
                <div style={{width: '419px', height: '440px', position: 'relative', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <img style={{width: '45px', height: '45px', position: 'relative', overflow: 'hidden', flexShrink: 0, zIndex: 1}} loading="eager" alt="" src={Book} />
                  <b style={{position: 'relative', letterSpacing: '-0.34px', zIndex: 1}}>Personalized Learning</b>
                </div>
                <div style={{width: '260px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 0px', boxSizing: 'border-box', fontSize: '22px'}}>
                  <div style={{height: '292px', flex: 1, position: 'relative', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', zIndex: 1}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation .
                  </div>
                </div>
              </div>
              <div style={{width: '419px', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '37px 27px 44px', minWidth: '419px', maxWidth: '100%'}}>
                <div style={{width: '419px', height: '440px', position: 'relative', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'none', maxWidth: '100%', zIndex: 1}} />
                <div style={{width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', padding: '45px 0px 0px', boxSizing: 'border-box', position: 'relative'}}>
                  <b style={{position: 'relative', letterSpacing: '-0.34px', zIndex: 1}}>Fast Response</b>
                  <img style={{width: '45px', height: '45px', position: 'absolute', margin: '0 !important', top: '0px', left: '0px', overflow: 'hidden', flexShrink: 0, zIndex: 1}} loading="eager" alt="" src={fast} />
                </div>
                <div style={{width: '282px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 8px', boxSizing: 'border-box', marginTop: '-6px', fontSize: '22px'}}>
                  <div style={{height: '292px', flex: 1, position: 'relative', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', zIndex: 1}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation .
                  </div>
                </div>
              </div>
              <div style={{width: '419px', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '37px 21px 44px', minWidth: '419px', maxWidth: '100%'}}>
                <div style={{width: '419px', height: '440px', position: 'relative', borderRadius: '15px', backgroundColor: '#1e1e1e', boxShadow: '0px 4px 4px rgba(102, 91, 134, 0.6)', border: '1px solid #665b86', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <img style={{width: '45px', height: '45px', position: 'relative', overflow: 'hidden', flexShrink: 0, zIndex: 1}} loading="eager" alt="" src={Clock} />
                  <b style={{position: 'relative', letterSpacing: '-0.34px', zIndex: 1}}>Time Saving
                  </b>
                </div>
                <div style={{width: '260px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 0px', boxSizing: 'border-box', fontSize: '22px'}}>
                  <div style={{height: '292px', flex: 1, position: 'relative', letterSpacing: '-0.34px', fontWeight: 500, display: 'flex', alignItems: 'center', zIndex: 1}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation .
                  </div>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: '31px', maxWidth: '100%', fontSize: '20px'}}>
              <div style={{width: '512px', height: '0px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 8px', boxSizing: 'border-box', maxWidth: '100%'}}>
                <div style={{height: '11.5px', flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img style={{height: '100%', flex: 1, maxWidth: '100%', overflow: 'hidden', objectFit: 'contain', position: 'absolute', left: '0px', top: '0px', width: '100%', transform: 'scale(1.023)'}} loading="eager" alt="" src={line} />
                </div>
              </div>
              <div style={{position: 'relative'}}>
                <span style={{fontWeight: 500}}>Disclaimer:</span>
                <span>
                  Our content may not always be entirely accurate and we cannot be
                  held responsible for any damages incurred as a result.</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
   </div>
  )
}

export default About
