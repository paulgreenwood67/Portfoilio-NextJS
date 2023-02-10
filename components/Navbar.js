import Link from 'next/link'

const Navbar = () => {
    return ( 

        <nav className = "navbar">
            <div className= "brand">
            <span className =" asciiSize">‹</span>p<span className='asciiSize'>›</span><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize'>›</span><span className='asciiSize'>‹</span><span className='one' >/ul</span ><span className = "asciiSize">›</span>
            </div >
       <div className='links'>
            <Link  href="/" >Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
         </div>
         <style jsx>{`
         
                  nav {
              
                    border-bottom: solid var(--heading);
                    display: flex; 
                    align-items: center;
                  }
                  
                  .links{
                    
                    display: flex;
                    margin-top:10px;
                    justify-content: space-between;
                  
                  }
                  
                  nav .logo {
                    margin-right: auto;
                  }
                  nav h1{
                    color: var(--heading);
                    margin: 20px 10px 10px 30px;
                    font-size: 35pt;
                    font-family: 'Manjari';
                    font-style: bold;
                  }
                  .one{
                    color: var(--heading);
                  }

                  .brand{
                    font-size:30pt;
                    margin-left: 20px;
                    padding:10px

                  }
                  .a{
                    font-family:Manjari;
                  }

                
                    
                }
            `}</style>
      

        </nav>
     );
}
 
export default Navbar;