
import Logo from "../../assets/images/logo.png";
import Link from "./Link";
import "./styles.css";

export default function Navbar () {
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
  )
}