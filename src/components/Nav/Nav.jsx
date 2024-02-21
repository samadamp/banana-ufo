import "./Nav.css"
import kiwiLogo from "../../img/kiwi.svg"
const Nav = () =>{
    
return  (<> 
<nav> 
<img src={kiwiLogo} alt="logo" />
<ul className="nav-ul">
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Portfolio</a></li>
    <li><a href="">Bajs</a></li>
    
</ul>

</nav></> )  



}




export default Nav;