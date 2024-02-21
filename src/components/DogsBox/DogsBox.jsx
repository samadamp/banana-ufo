import Dogs from "../Dogs/Dogs"
import dogs from "./dogs.json"


const DogsBox = () =>{
    const data = dogs.data;
    return (<>
    <h2>DOG BOX</h2>
    {data.map((dogs) => {
       return <Dogs name={dogs.name}  age={dogs.age}    Neutered={dogs.Neutered}/>
       
    })}
    </>
    );
   }
    
    
    
    
    export default DogsBox;