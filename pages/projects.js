import Link from 'next/link'
import Image from 'next/image';
import cuba from '../static/cuba.jpeg';
import cars from '../static/cars.jpeg';
import Itunes from '../static/Itunes.jpeg';
import retro from '../static/retro.jpeg';
import urbagraph from '../static/urbagraph.jpeg';
import starwars from '../static/starwars.png';
import hangman from '../static/hangman.jpg';
import cover from '../static/cover.jpg';
import todo from '../static/todo.jpg';
import portfolio from '../static/portfolio.jpg';





const Projects = () => {
    return ( 
        <div className = "container" >
        <div className="grid">
            <div className="gallery">
                <Image className='img' src ={cuba} width="220" height="auto" />
                <div className='desc'><b>Project: </b> Photography</div>
                <p>Most of my photography has been Wedding, Lifestyle and Street Photography.</p>
                <Link target="_blank" href = "https://www.paulgreenwoodphotography.uk">
                <button className='WebBtn'>Wedding / Lifestyle</button>
                </Link>
                <Link target="_blank" href = "https://www.instagram.com/pg_streetphotography">
                <button className='WebBtn'>Street</button>
                </Link>
            </div>

            <div className="gallery">
                <Image className='img' src ={urbagraph} width="220" height="auto" />
                <div className='desc'><b>Project: </b> Design</div>
                <p>I create digital art called Urbagraphs. This is a link to my Urbagraph facebook page.</p>
                <Link target="_blank" href = "https://facebook.com/Urbagraph">
                <button className='WebBtn'>Urbagraph</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={Itunes} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>This is a full stack application retreaving information from a iTunes API.</p>
                <Link target="_blank" href = "https://i-tunes.vercel.app/">
                <button className='WebBtn'>iTunes</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={retro} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>This is a React/Express appliction reteaving local data from a JSON.</p>
                <Link target="_blank" href = "https://github.com/paulgreenwood67/Retro40-car-pp">
                <button className='WebBtn'>Retro40</button>
                </Link>
                
            </div>
            <div className="gallery">
                <Image className='img' src ={cars} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>This is a full stack application retreaving information from MongoDB.</p>
                <Link target="_blank" href = "https://car-inventory-beta.vercel.app/">
                <button className='WebBtn'>Car Inventory</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={starwars} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>This a NextJS app displaying Star Wars data from an API called SWAPI.</p>
                <Link target="_blank" href = "https://next-js-star-wars.vercel.app/">
                <button className='WebBtn'>Star Wars</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={todo} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>A Full Stack to-do application built using register and sign-in authentication.</p>
                <Link target="_blank" href = "https://full-stack-to-do.vercel.app/">
                <button className='WebBtn'>2DO</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={hangman} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>An app built using React using the popular childrens game of Hangman.</p>
                <Link target="_blank" href = "hangman-fawn.vercel.app">
                <button className='WebBtn'>Hangman</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={cover} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>A React app built using React Router of a fictitious clothing company.</p>
                <Link target="_blank" href = "https://clothing-company.vercel.app/">
                <button className='WebBtn'>Clothing Company</button>
                </Link>
                
            </div>

            <div className="gallery">
                <Image className='img' src ={portfolio} width="220" height="auto" />
                <div className='desc'><b>Project: </b>Coding</div>
                <p>A responsive portfolio app using HTML, CSS and some JavaScript.</p>
                
                <Link target="_blank" href = "https://html-portfolio-zeta.vercel.app/index.html">
                <button className='WebBtn'>Portfolio</button>
                </Link>
                
            </div>
            
            
           

        <style jsx>{`

        .grid{
            margin-top:50px; 
            display:grid;
            grid-template-columns:1fr 1fr 1fr 1fr;
            grid-gap:20px  5px;
            justify-items: center;
        }
        div.gallery {
            color: white;
            background: var(--dark);
            width: 220px;
            height:300px;
            border-radius:20px;
            margin-bottom: 50px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          
       
          
          div.desc {
            padding: 15px 15px 15px 15px;
            text-align: left;
          }

          p{
            font: 300;
            padding-left: 15px;
            text-align: left;
            font-size:10pt;
            margin-top:0%;
            padding-right:5px
          }
          .WebBtn{
            background: var(--heading);
            color:white;
            border-radius:5px;
            border:none;
            padding: 4px;
            cursor: pointer;
           
          
          }


        
        `}</style>
 
    
 
         </div>

        
       
         </div>
     );
}
 
export default Projects;


/*
.cards{
    background:white;
    width: 220px;
    height:300px;
    border-radius:20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

}
*/
