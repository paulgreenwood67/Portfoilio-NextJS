
export default function Home(){
  return (<div>

    <div className="container">
      <div className='img'>


<span className =" asciiSize one">‹</span>p<span className='asciiSize one'>›</span><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize one'>›</span><span className='asciiSize two'>‹</span><span className='slash' >/</span ><span >ul</span ><span className = "asciiSize one">›</span>


       


    {/*<Image className='img' src ={logobg} />*/}
    </div>
       
         <p>{"{ Full Stack Web Developer }"}</p>
      
        
        


<style jsx>{`

              .slash{
              color:var(--heading);
              font-size:80pt
              }

              .one{
                color:var(--heading);
                letter-spacing:0.1pt

              }

              .two{
                color: #c8c8c8;
              }

              .asciiSize{
                font-size:90pt;
                font-weight:100;
               
            
 
              }

              .a{
                font-family:Manjari;
                letter-spacing:0.1pt
              
              }
             .container{
                
                 background:var(--dark);
                 margin:25px 180px 0px;
                 border-radius:10px;
                 box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                 backdrop-filter: blur(5px);
                 padding: 20px;
               
                 
             }
             p{
                color:var(--heading);
                text-align: center;
              
                font-size:15pt;
                
                margin-top:80px;
                margin-bottom:180px;
                
             }
             h1{

                color:var(--secondary);
                font-size: 80pt;
                text-align: center;
                margin-top:150px;
                margin-bottom:10px;
                font-family: 'Manjari'

             }

             .img{
              font-size:100pt;
             color:white;
               text-align:center;
               display:block;
               margin-top:60px;
               top: 50%;
               transform: translateY(50%);
               
              }
         `}</style>

         </div>



     </div>
  )
}
