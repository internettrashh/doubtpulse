import React from 'react';
import learning from '../public/learning-illustration.svg';
import { useNavigate } from 'react-router-dom';

function Help() {
  const navigate = useNavigate();

  const navMath = () => {
    navigate('/math');
  };

  const navSub = () => {
    navigate('/sub');
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni MT:wght@700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rammetto One:wght@400&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@700&display=swap" />
      <style
        dangerouslySetInnerHTML={{
          __html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    ",
        }}
      />
      <div
        style={{
          width: '100%',
          position: 'relative',
          backgroundColor: '#1e1e1e',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          rowGap: '20px',
          letterSpacing: 'normal',
          textAlign: 'left',
          fontSize: '80px',
          color: '#fff',
          fontFamily: '"Bodoni MT"',
        }}
      >
        {/* Uncommented div (the one you want to appear above the image) */}
        <div
          style={{
            height: '895px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '0px 0px 0px',
            boxSizing: 'border-box',
            minWidth: '562px',
            maxWidth: '100%',
          }}
        >
          {/* ... your content here ... */}



          <div style={{height: '895px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px', boxSizing: 'border-box', minWidth: '562px', maxWidth: '100%'}}>
        <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '77px', maxWidth: '100%', flexShrink: 0,marginRight:'-150px'}}>
          <div style={{width: '831px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 20px 0px 0px', boxSizing: 'border-box', gap: '8px', maxWidth: '100%'}}>
            <h1 style={{margin: 0, width: '615px', height: '192px', position: 'relative', fontSize: 'inherit', fontWeight: 700, fontFamily: 'inherit', display: 'flex', alignItems: 'center', maxWidth: '100%'}}>
              <span style={{width: '100%'}}>
                <span>Need help with your </span>
                <span style={{color: '#665b86'}}>Homework?</span>
              </span>
            </h1>
            <div style={{alignSelf: 'stretch', height: '76px', position: 'relative', fontSize: '32px', fontWeight: 500, fontFamily: 'Urbanist', display: 'inline-block'}}>
              Looking to verify your answers to previous year's questions? Look
              no further - we've got you covered!
            </div>
          </div>
          <div style={{width: '651px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 20px 49px 0px', boxSizing: 'border-box', gap: '64px', maxWidth: '100%', fontSize: '35px', fontFamily: 'Urbanist'}}>
            <b style={{position: 'relative', display: 'inline-block', maxWidth: '100%'}}>Please select your area of interest:</b>
            <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '59px', fontSize: '32px'}}>
              <button onClick={navMath} style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0px 6px 4px rgba(102, 91, 134, 0.5)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{borderRadius: '15px', backgroundColor: '#665b86', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: '19px 13px 19px 19px', whiteSpace: 'nowrap'}}>
                  <div style={{height: '76px', width: '269px', position: 'relative', borderRadius: '15px', backgroundColor: '#665b86', display: 'none'}} />
                  <div style={{position: 'relative', fontSize: '32px', fontWeight: 800, fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', zIndex: 1}}>
                    Numeric Studies
                  </div>
                </div>
              </button>
              <div onClick={navSub} style={{flex: 1, borderRadius: '20px', backgroundColor: '#fff', boxShadow: '0px 6px 4px rgba(102, 91, 134, 0.5)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', minWidth: '197px'}}>
                <div style={{width: '312px', borderRadius: '15px', backgroundColor: '#665b86', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', padding: '19px 0px 19px 9px', boxSizing: 'border-box', whiteSpace: 'nowrap'}}>
                  <div style={{height: '76px', width: '312.4px', position: 'relative', borderRadius: '15px', backgroundColor: '#665b86', display: 'none'}} />
                  <div style={{flex: 1,cursor:'pointer', position: 'relative', fontWeight: 800, textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', zIndex: 1}}>
                    Qualitative Studies
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{alignSelf: 'stretch', height: '514px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', maxWidth: '100%'}}>
            <div style={{alignSelf: 'stretch', width: '346px', position: 'relative', borderRadius: '50%', backgroundColor: '#9176b4', filter: 'blur(450px)', maxWidth: '100%'}} />
          </div>
        </div>
      </div> 



          <h1
            style={{
              margin: 0,
              width: '615px',
              height: '192px',
              position: 'relative',
              fontSize: 'inherit',
              fontWeight: 700,
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '100%',
            }}
          >
            <span style={{ width: '100%' }}>
              <span>Need help with your </span>
              <span style={{ color: '#665b86' }}>Homework?</span>
            </span>
          </h1>
          <div
            style={{
              alignSelf: 'stretch',
              height: '76px',
              position: 'relative',
              fontSize: '32px',
              fontWeight: 500,
              fontFamily: 'Urbanist',
              display: 'inline-block',
            }}
          >
            Looking to verify your answers to previous year's questions? Look no further - we've got you covered!
          </div>
        </div>

        {/* Image div */}
        <div
          style={{
            flex: '0.9641',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '0px 31px 0px 0px',
            boxSizing: 'border-box',
            minWidth: '562px',
            minHeight: '1117px',
            maxWidth: '100%',
          }}
        >
          {/* ... your content here ... */}
          <div
            style={{
              alignSelf: 'stretch',
              height: '970px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                borderRadius: '50%',
                backgroundColor: '#9176b4',
                filter: 'blur(450px)',
                width: '314px',
                height: '336px',
              }}
            />
            <img
              style={{
                position: 'absolute',
                top: '83px',
                left: '19px',
                width: '814px',
                height: '887px',
                overflow: 'hidden',
                zIndex: 1,
              }}
              loading="eager"
              alt=""
              src={learning}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
