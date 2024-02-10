import React from 'react';

function Contributors() {
  return (
    <div style={{width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#1e1e1e', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', letterSpacing: 'normal'}}>
      <header style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '157px'}}>
        <h1 style={{color: 'white', fontSize: '2em'}}>Team Behind This</h1>
        <br/>
        <p style={{color:'white'}}>Aspiring tech alchemists, navigating the realms of Information Technology Engineering in our second year at Goa Engineering College. We conjure ingenious solutions for every challenge, turning the ordinary into the extraordinary!</p>
      </header>
      <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%', padding: '0   20px'}}>
        {/* Repeat the provided code for each div */}
        <div style={{width: '30%', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px'}}>
         

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
      <img/>
      <h1>Parth Kamat</h1>

    </div>
</div>

        </div>
        <div style={{width: '30%', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px'}}>
         

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
</div>

        </div>
        <div style={{width: '30%', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px'}}>
         

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        
    </div>
</div>

        </div>
      </section>
    </div>
  );
}

export default Contributors;
