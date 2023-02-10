
import Link from 'next/link'
const About = () => {
    return ( 
        <div>

       <div className="container">
            <h2>About</h2>
            <hr></hr>
            <h3>Me</h3>
            <p className='lineHeight'>Hi, my name is Paul Greenwood and I live in Manchester in the UK. I am currently doing a full time Web Development Bootcamp with HyperionDev and due to complete it in a few weeks. I have enjoyed the course very much and looking forward to the next steps. Please do have a look around my portfolio which has been built with Next JS  and use the contact page to contact me should you wish...</p>
            <h3>Education</h3>
            <p><strong>Bsc Environmental Management:</strong> University of Cental Lancashire (1994 -1997) </p>
            <p><strong>BTec ND Graphic Design:</strong> Preston College (1999 - 2001)</p>
            <p><strong>Full-Stack Web Development:</strong> HyperionDev (2022 - 2023)</p><br></br>
            <h3>Work</h3>
            <p><strong>Freelance Graphic Designer:</strong> (2001 - Present) </p>
            <p><strong>Freelance Photographer:</strong> (2010 - Present) </p>
            <p><strong>Communications and Behavioural Change Officer:</strong> Recycle for Greater Manchester (2019 - 2022)</p>
            <p><strong>Community Enagagement Officer:</strong> Preston City Council (2008 - 2016)</p>
            <p><strong>Youth Arts Worker:</strong> Lancashire County Council, Preston (2004 - 2006)</p>
            <p><strong>Volunteer Co-ordinator:</strong> Harris Museum and Art Gallery, Preston (2001 - 2004)</p>
            <br></br>
            <h3>Interests</h3>
            <p>Coding, photography, design, travel, music, ecology. </p>
            
          
           
            


<style jsx>{`
                .container{
                    background:white;
                    margin:30px 180px 40px; 20px;
                    border-radius:10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 20px;
                    
                }
             
                p{
                    color:var(--dark);
                    margin:10px 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height:16pt
                   
                }

                .lineHeight{
                    margin-top:20px;
                }
                h2{
                    color:var(--heading);
                    margin: 10px;
                   
                }

                h3{
                    color:var(--heading);
                    margin: 20px;
                    margin-bottom:10px
                    
                   
                }

               

               
            `}</style>

            </div>

   

        </div>
     );
}
 
export default About;