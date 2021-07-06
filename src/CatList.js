import { useState } from "react";
import './CatList.css';
const CatList = ({catsData}) => {

    const goBack =()=>{
        setListDisplayed(true);
        setSelected(false);
    }
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
            {isSelected && cat.map((catObj)=>{
                console.log(catObj);
                return (
                <div key={catObj.breeds.[0].id}>
                    <button onClick={()=> goBack()}>Back button</button>
                    
                    <div  className="catInfoWrapper">
                    <div >
                        <img  src={catObj.url} width="300" heigth="200"/>
                        <h2>{catObj.breeds.[0].name}</h2>
                        <p><strong>Life Span:</strong>{catObj.breeds.[0].life_span} years</p>
                        <p><strong>Origin: </strong>{catObj.breeds.[0].origin} </p>
                        <p><strong>Weight: </strong>{catObj.breeds.[0].weight.metric} Kg</p>
                        <p><strong>Learn more: </strong><a href={catObj.breeds.[0].wikipedia_url}>Wikipedia</a> </p>
                    </div>
                    </div> 
                </div>

                ); 
            })
            }
         </div> 
        );
}
 
export default CatList;