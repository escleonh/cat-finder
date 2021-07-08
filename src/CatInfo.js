import './CatInfo.css';
const CatInfo = ({cat, displayAll,updateCat}) => {


    // const goBack =()=>{
    //     displayAll(true);
    // }
    const {CAT_API_KEY} = process.env;

    const nextPic = (cat)=>{
        // console.log(cat.breeds);
        fetch('https://api.thecatapi.com/v1/images/search?breed_id='+ cat.breeds.[0].id,{
            headers: {'x-api-key': CAT_API_KEY}
        })
        .then(res => {
            if(res.status!==200){
              console.log("ERROR");
              return;
            }
            res.json().then((data)=>{
                
            // setSelected(true);
            updateCat(data);
            document.querySelector('.catImage').style.background = "url("+data[0].url +")";
                
            // setListDisplayed(false);

            });  
        })
        .catch((e)=>{
          console.log(e);
        });
    };

    return ( cat.map((catObj)=>{
        // console.log(catObj);
        return (
        <div key={catObj.breeds.[0].id}>
            {/* <a href="/cats">Go Back</a> */}
            <div  className="catInfoContainer">
            <div className="catInfoBox">
            <div className="catImgWrapper">
            <div className="catImage"></div>
            {/* <img  src={catObj.url} width="300" height="280" className="catImg" /> */}
            <button onClick={()=>nextPic(catObj)} className="nextBtn" >Next Picture</button>
          

            </div>
            <div className="catInfoHeading">
                <h2>{catObj.breeds.[0].name}</h2>
                {/* <h4>{catObj.breeds.[0].temperament}</h4> */}
            </div>
            
            <div className="infoColumns">
                <div>
            
                    <p><strong>Life Span:</strong>{catObj.breeds.[0].life_span} years</p>
                    <p><strong>Origin: </strong>{catObj.breeds.[0].origin} </p>
                    <p><strong>Weight: </strong>{catObj.breeds.[0].weight.metric} Kg</p>
                    <p><strong>Learn more: </strong><a href={catObj.breeds.[0].wikipedia_url}>Wikipedia</a> </p>
                </div>
                <div>
                <p><strong>Child Friendly (1-5): </strong>{catObj.breeds.[0].child_friendly} </p>
                    <p><strong>Dog Friendly (1-5): </strong>{catObj.breeds.[0].dog_friendly} </p>
                    <p><strong>Health Issues (1-5): </strong>{catObj.breeds.[0].health_issues} </p>
                    <p><strong>Affection Levels (1-5): </strong>{catObj.breeds.[0].affection_level} </p>
                </div>
            </div>
                
            </div>
            </div> 
        </div>

        ); 
    }) );
}
 
export default CatInfo;