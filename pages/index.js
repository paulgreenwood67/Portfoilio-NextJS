
export default function Home(){
  return (<div>

    <div className="container">
      <div className='img'>


 <span className =" asciiSize one">‹</span>p<span className='asciiSize one'>›</span><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize one'>›</span><span className='asciiSize two'>‹</span><span className='slash' >/</span ><span >ul</span ><span className = "asciiSize one">›</span>


       


    {/*<Image className='img' src ={logobg} />*/}
    </div>
       
         <p>{"{Full Stack Web Developer}"}</p>
      
        
        


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
                  .slash{
                    color:var(--heading);
                    font-size:30pt
                    }

                    .asciiSize{
                      font-size:30pt;
                      font-weight:100

                }
                
            `}</style>

         </div>



     </div>
  )
}
