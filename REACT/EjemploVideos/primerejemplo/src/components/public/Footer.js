import React, { useState } from 'react'

const Footer = () => {
   const [clicks, setClicks] = useState(0);
   const year = new Date().getFullYear();
   const companyName = "TuVieja.SRL";
   const handleClick = () => {
    setClicks(clicks + 1);
    console.log("mimos a pimi");
   }
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© {year} {companyName} * Mimos a Pimienta: {clicks}</p>

                <span 
                    className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    onClick={handleClick}
                >
                    <img 
                        className="App-logo" 
                        height="52" 
                        src="pimienta.png" 
                        alt="unagatamuymimosa" 
                    />
                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
