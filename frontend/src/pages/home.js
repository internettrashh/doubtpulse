import React, { useRef, useState } from 'react';
import upload from '../public/upload.svg';
import image from '../public/image.svg';
import Latex from 'react-latex';
import loader from '../public/loader-purple-ezgif.com-gif-maker.gif'

function Home() {
  const fileInputRef = useRef(null);
  const [answer, setAnswer] = useState(null); // State to hold the answer
  const [showAnswer, setShowAnswer] = useState(false); // State to track if the answer should be shown
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  
  const handleUploadClick = (event) => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    setIsLoading(true); // Set loading to true when uploading

    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://127.0.0.1:3001/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.text();
      setAnswer(result); // Update the answer state
      setShowAnswer(true); // Set the flag to show the answer
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setIsLoading(false); // Set loading to false when upload is complete (success or failure)
    }
  };




  
  return (
    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni MT:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni MT:wght@700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rammetto One:wght@400&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inika:wght@700&display=swap" />
   
    <style dangerouslySetInnerHTML={{ __html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{ width: '100%', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '37px 0px 0px', boxSizing: 'border-box', gap: '310px', letterSpacing: 'normal', textAlign: 'left', fontSize: '32px', color: '#fff', fontFamily: 'Urbanist' }}>

      <div style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '37px 0px 0px', boxSizing: 'border-box', gap: '310px', letterSpacing: 'normal', textAlign: 'left', fontSize: '32px', color: '#fff', fontFamily: 'Urbanist' }}>
        {isLoading ? (
          <img src={loader} alt="Loading..." style={{ width: '400px', height: '400px' }} />
        ) : (
          renderContent()
        )}
      </div>
    </div>
  </div>
);



function renderContent() {

  const prettifyAnswer = (answer) => {
    // Split the answer into lines after each full stop
    const lines = answer.split('.').map((line) => line.trim()).filter(Boolean);
    // Join the lines with line breaks
    return lines.join('.\n');
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
    <style dangerouslySetInnerHTML={{__html: "\n      body {\n        margin: 0;\n        line-height: normal;\n      }\n    " }} />
    <div style={{width: '100%', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '37px 0px 0px', boxSizing: 'border-box', gap: '310px', letterSpacing: 'normal', textAlign: 'left', fontSize: '32px', color: '#fff', fontFamily: 'Urbanist'}}>

    {showAnswer ? (
        <div style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
        
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '37px  0px  0px',
          boxSizing: 'border-box',
          gap: '310px',
          letterSpacing: 'normal',
          textAlign: 'left',
          fontSize: '32px',
          color: '#fff',
          fontFamily: 'Urbanist'
        }}>
          <div style={{ border: '6px',  borderRadius: '20px', borderColor: 'white', width: '70vw', height: '60vw' }}>
            <div style={{ alignSelf: 'stretch',backgroundImage:` url('../public/Answer_backgrond.jpeg')`, height: '70vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '100%' }}>
              <h2 style={{ color: 'white ', fontSize: '30px' }}>Here Is Your Answer </h2>
             
            <Latex>{prettifyAnswer(answer)}</Latex>
            </div>
          </div>
        </div>
      ):(
<>
      <section style={{width: '1602px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 20px', boxSizing: 'border-box', position: 'relative', maxWidth: '100%', textAlign: 'left', fontSize: '60px', color: '#fff', fontFamily: 'Urbanist'}}>
        <div style={{height: '688px', width: '1533px', margin: '0 !important', position: 'absolute', bottom: '-632px', left: '32px', backgroundColor: '#1e1e1e', border: '1px dashed #fff', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '251px 20px 251px 36px', maxWidth: '100%'}}>
          <div style={{width: '1533px', height: '688px', position: 'relative', backgroundColor: '#1e1e1e', border: '1px dashed #fff', boxSizing: 'border-box', display: 'none', maxWidth: '100%'}} />
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', position: 'relative', maxWidth: '100%'}}>
            <div style={{height: '488px', width: '405px', position: 'absolute', margin: '0 !important', bottom: '-223px', left: '169px'}}>
              <img style={{position: 'absolute', top: '0px', left: '80px', width: '224px', height: '193px', overflow: 'hidden', zIndex: 1}} loading="eager" alt="" src={upload}/>
              <div style={{position: 'absolute', top: '83px', left: '0px', borderRadius: '50%', backgroundColor: '#9176b4', filter: 'blur(500px)', width: '405px', height: '405px', zIndex: 2}} />
            </div>
            <h2 style={{margin: 0, height: '72px', position: 'relative', fontSize: 'inherit', fontWeight: 600, fontFamily: 'inherit', display: 'inline-block', zIndex: 3}}>
              Drag and drop your files here
            </h2>
          </div>
        </div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 96px 0px', boxSizing: 'border-box', maxWidth: '100%', fontSize: '56px'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '55px', maxWidth: '100%'}}>
            <h2 style={{margin: 0, height: '67px', position: 'relative', fontSize: 'inherit', fontWeight: 800, fontFamily: 'inherit', display: 'inline-block', maxWidth: '100%', zIndex: 1}}>
            Get any Math Doubt Solved in Seconds!!!
            </h2>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '22px', maxWidth: '100%', fontSize: '35px'}}>
              <button style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: 'transparent', width: '70px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{height: '70px', flex: 1, position: 'relative'}}>
                  <div style={{position: 'absolute', top: '0px', left: '0px', borderRadius: '50%', backgroundColor: '#665b86', width: '100%', height: '100%'}} />
                  <img style={{position: 'absolute', top: '12px', left: '12px', width: '45px', height: '45px', overflow: 'hidden', zIndex: 1}} alt="" src={image }/>
                </div>
              </button>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '1px', maxWidth: '100%'}}>
                <div style={{position: 'relative', fontWeight: 600}}>Images</div>
                <div style={{position: 'relative', fontSize: '25px', fontWeight: 500, whiteSpace: 'pre-wrap'}}>
                  Upto 1 MB, PNG, JPG and cropped properly with clear text
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{width: '2077px', height: '157px', position: 'absolute', margin: '0 !important', top: '-79px', right: '-180px', borderRadius: '50%', backgroundColor: '#9176b4', filter: 'blur(350px)'}} />
      <div style={{width: '358px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0px 20px', boxSizing: 'border-box', gap: '43px', maxWidth: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 4px 0px 0px'}}>
          <div style={{height: '38px', position: 'relative', fontWeight: 600, display: 'inline-block', zIndex: 3}}>
            OR
          </div>
        </div>
        <button onClick={handleUploadClick} style={{cursor: 'pointer', border: 'none', padding: 0, backgroundColor: '#fff', alignSelf: 'stretch', borderRadius: '15px', boxShadow: '0px 6px 4px rgba(102, 91, 134, 0.5)', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 3}}>
          <div style={{flex: 1, borderRadius: '15px', backgroundColor: '#665b86', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '12px 11px 11px', whiteSpace: 'nowrap'}}>
            <div style={{height: '61px', width: '318px', position: 'relative', borderRadius: '15px', backgroundColor: '#665b86', display: 'none'}} />
            <div style={{position: 'relative', fontSize: '32px', fontWeight: 600, fontFamily: 'Urbanist', color: '#fff', textAlign: 'left', zIndex: 1}}>
              Upload
            </div>
          </div>
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />

      </div>
      <div style={{alignSelf: 'stretch', height: '27px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '100%'}}>
        <footer style={{height: '223px', width: '1864px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '0px 0px 0px 0px', boxSizing: 'border-box', maxWidth: '108%', flexShrink: 0}}>
          <div style={{alignSelf: 'stretch', width: '2214px', position: 'relative', borderRadius: '50%', backgroundColor: '#9176b4', filter: 'blur(350px)', maxWidth: '119%', flexShrink: 0}} />
        </footer>
      </div>
      </>
      )}
    
    </div>
    
  </div>   
  );
      }
}

export default Home