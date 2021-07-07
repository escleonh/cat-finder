import './Home.css';
const Home = () => {
    return ( 
        <div  className="homeContent">

           <div className="tagline">
            <h1>Looking for a new Family Member?</h1>
            <h2>We can help you!  </h2>
            <a href="/cats" className="viewCatsBtn">View Cats</a>
           </div>

           <div className="pawsImg"> 
           </div>
        </div>
     );
}
 
export default Home;