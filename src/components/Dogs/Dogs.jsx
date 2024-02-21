import "./Dogs.css"


const Dogs = ({name, age, Neutered, image}) =>{
    
return (<>
    <div>DOG:</div>
    <p>NAME: {name}<br /> AGE: {age}  <br />NEUTERED STATUS:{Neutered}</p>
    <img src={image} alt={name} />



</>)



}




export default Dogs;