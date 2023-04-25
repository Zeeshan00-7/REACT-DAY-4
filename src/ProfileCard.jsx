export default function Profile(props){
   
    return(
        <>
        <div >
            <img src={props.image} alt=""/>
        <h2>{props.designation}</h2>
        <h6
         style={{color : 'white',
    backgroundColor : 'magenta' ,
    fontSize : '50px'}}>{props.name}
    </h6>
        <p>{props.description}</p>
        <button onClick={HandleOnClick}>See more</button>
        </div>
        
        </>
        
    )
    function HandleOnClick()
    {
        alert(props.name)
    }
}