// import './App.css'
import { useEffect } from 'react';
import Card from './components/Card'

function App() {
    useEffect(()=>{
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', ()=> {
                navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                })
            })
        }
    }, [])
  return (
    <>
        <Card/>
    </>
  )
}

export default App
