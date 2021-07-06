import { useEffect, useState } from "react";
import CatList from "./CatList";

const Cats = () => {

    let [isLoading,setsLoading] = useState(true);
    let [isLoaded,setisLoaded] = useState(false);

    const [catsData, setCats] = useState([]);

    useEffect(()=>{
        fetch('https://api.thecatapi.com/v1/breeds',{
            headers: {'x-api-key': ''}
        })
        .then(res => {
            if(res.status!==200){
              console.log("ERROR");
              return;
            }
            res.json().then((data)=>{
              
              setCats(data);
              setsLoading(false);
              setisLoaded(true);
            });  
        })
        .catch((e)=>{
          console.log(e);
        });  
    },[]);
    return ( 
    <div>
        {/* {isLoaded && catsData.map((catObj)=>{ return <div> {catObj.name}</div> })}
        {isLoading && <div className="loading-msg">Loading data...</div> } */}
        <CatList catsData={catsData}></CatList>
    </div>
     );
}
 
export default Cats;