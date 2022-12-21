
import Link from "./Link";

import Logo from "../../assets/images/logo.png";

import "./styles.css";
function Header(){
    return (
        <header>
           
           <div className="navbar">

           <div className="container">
        
            <div className="logo">

            <img src={Logo}  alt="Logo do dindin"/>

            <h2>dindin</h2>

            </div>
           

            <div className="navegacao">

            <nav>
                <Link texto = "Cursos" redirect = "cursos"/>
                <Link texto = "Blog" redirect = "blog"/>
                <Link texto = "Contatos" redirect = "contatos"/>

            </nav>

            </div>

            </div>
           
           </div>
            

            
        </header>
    );
}
export default Header;