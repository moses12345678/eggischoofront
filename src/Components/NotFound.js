import React from "react";
import NotFoundImg from './Images/no-found.png';

export default function NotFound() {
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
      {/*<img src={NotFoundImg} alt="404 Not Found" style={{maxWidth:'50%', height: 'auto'}} />*/}
      <h1 style={{fontSize: '3rem'}}>Oops! Page Not Found</h1>
      <p style={{fontSize: '1.5rem'}}>The page you're looking for does not exist.</p>
      <p style={{fontSize: '1.5rem'}}>Maybe try one of these:</p>
      <ul style={{listStyleType:'none', margin: '30px 0'}}>
        <li style={{display: 'inline-block', marginRight: '20px'}}>
          <button onClick={() => window.location.href = '/'} style={{padding: '10px 20px', borderRadius: '10px', background: '#3498db', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>Go to Home</button>
        </li>
        <li style={{display: 'inline-block'}}>
          <button onClick={() => window.location.href = '/'} style={{padding: '10px 20px', borderRadius: '10px', background: '#f39c12', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>Contact Us</button>
        </li>
      </ul>
    </div>
  );
}
