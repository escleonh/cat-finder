import { useState } from "react";
import CatInfo from "./CatInfo";
import './CatList.css';
const CatList = ({catsData}) => {

    
    const [isSelected, setSelected] =useState(false);
    const [listDisplayed, setListDisplayed] =useState(true);
    const [cat, setCat] =useState([]);

    const learnMoreHandler = (catObj)=>{
        fetch('https://api.thecatapi.com/v1/images/search?breed_id='+ catObj.catObj.id,{
            headers: {'x-api-key': ''}
        })
        .then(res => {
            if(res.status!==200){
              console.log("ERROR");
              return;
            }
            res.json().then((data)=>{
                // console.log(data);
            setSelected(true);
            setCat(data);
            setListDisplayed(false);

            });  
        })
        .catch((e)=>{
          console.log(e);
        }); 
    };
    return ( 
        <div>
        <div className="listContainer">
            {listDisplayed && catsData.map((catObj)=>{ 
                let temperamentList = catObj.temperament.split(',');
                console.log(temperamentList);
                return <div  className="catBox" key={catObj.id}>
                <p> <strong>{catObj.name}</strong></p>
                <p>{catObj.temperament}</p>
                {/* <ul className="temperamentList">
                {temperamentList.map((temperament)=>{
                   return <li>{temperament}</li>;
                })}
                </ul> */}
                {/* <img src={catObj.image.url} /> */}
                <button className="learnMoreBtn" onClick={ () => learnMoreHandler({catObj}) }>Learn more!</button>
                </div> 
            })
            }
        </div>
            {isSelected && <CatInfo cat={cat} updateCat={(newCat)=>setCat(newCat)} displayAll ={booleanStatus=>{setListDisplayed(booleanStatus); setSelected(!booleanStatus)}}></CatInfo>
            }
         </div> 
        );
}
 
export default CatList;