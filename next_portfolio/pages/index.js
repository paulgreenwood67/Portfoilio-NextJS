
export default function Home(){
  return (<div>

    <div className="container">
      <div className='img'>


     <span className =" asciiSize">‹</span>p<span className='asciiSize'>›</span><span className="one asciiSize">‹</span><span className='a'>a</span><span className='asciiSize'>›</span><span className='asciiSize'>‹</span><span className='one' >/ul</span ><span className = "asciiSize">›</span>


       


    {/*<Image className='img' src ={logobg} />*/}
    </div>
       
         <p>{"{Full Stack Web Developer}"}</p>
      
        
        


<style jsx>{`

              .one{
                color:var(--heading)

              }

              .asciiSize{
                font-size:100pt;
 
              }

              .a{
                font-family:Manjari;
              }
             .container{
                
                 background:var(--dark);
                 margin:40px 180px 0px;
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