import Link from 'next/link'
const Contact = () => {
    return ( 
        <div>
            

       <div className="container">
       <div>
       <h2>Contact</h2>
            <hr></hr>
            </div>
            <div className="grid">
                <div>
                    <p>Contact me using this form or alternatively you can email me on:</p> 
                    <h3>paulgreenwood67@gmail.com</h3>
                    <p>or call me on (044) 7590 255 316</p>
                </div>
       <form>
    <label for="fname">First Name</label><br></br>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input><br></br>

    <label for="lname">Last Name</label><br></br>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input><br></br>

    <label for="email">email address</label><br></br>
    <input type="text" id="lname" name="lastname" placeholder="Enter your email address"></input><br></br>
  

    <label for="subject">Message</label><br></br>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea><br></br>

    
                <button className='WebBtn'>Submit</button>
               
  </form> 
  </div>  



            

            </div>
            <style jsx>{`
                .container{
                    height:500px;
                    background:white;
                    margin:30px 180px 40px; 20px;
                    border-radius:10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px);
                    padding: 20px;
                    bottom: 30px
                }
                
                p{
                    color:var(--dark);
                    margin:40px 20px;
                    font-family: Arial, Helvetica, sans-serif;
                    

                    
                   
                }
                h2{
                    color:var(--heading);
                    margin: 10px;
                }
                h3{
                    color:var(--heading);
                    margin: 20px;
                    line-height:1pt;

                }
            
                .grid{
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    grid-gap:20px  5px;
                }
                form{
                    margin: 20px 0px 0px 20px
                }

                label{
                    color:var(--heading);
                }

                input{
                    margin-bottom: 20px;
                    width:85%;
                    height:30px;
                    font-family: Arial, Helvetica, sans-serif;
                }
                textarea{
                    margin-bottom: 20px;
                    width:85%;
                    height:25%
                }
                button{
                    margin-bottom: 50px;
                    background:var(--heading);
                    color:white;
                    border:none;
                    padding: 6px;
                    border-radius:8px;
                    display:flex;
                    just
8                }
             
            `}</style>

        </div>
     );
}
 
export default Contact;