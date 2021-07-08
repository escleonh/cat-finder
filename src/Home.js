import './Home.css';
import pawsImg from './images/paws.png';
const Home = () => {
    return ( 
        <div  className="homeContent">

           <div className="tagline">
            <h1>Looking for a new Family Member?</h1>
            <h2>We can help you find the perfect match!  </h2>
            <a href="/cats" className="viewCatsBtn">View Cats</a>
           </div>

           <div className="pawsImg"> 
           <img src={pawsImg} alt=""/>
           </div>
        </div>
     );
}
 
export default Home;