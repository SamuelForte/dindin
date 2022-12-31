import Navbar from "../Navbar";
import Banner from "./Banner"
import InvestmentImg from "../../assets/images/image3.png"
import SavingsImg from "../../assets/images/image2.png"
import IndependenceImg from "../../assets/images/image4.png"
import "./styles.css";

export default function Home () {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <section className="cursos">
      <div className="card">
        <img className="investimentImg" src={InvestmentImg} alt="images of Investment"/>
        <h2 className="card__title">Investimento para iniciantes</h2>
        <p className="card__description">Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.</p>
        <button className="card__button">
          <span> começar agora</span>
        </button>

      </div>
      <div className="card">
        <img className="investimentImg" src={SavingsImg} alt="images of Investment"/>
        <h2 className="card__title">Poupando e Rendendo</h2>
        <p className="card__description">Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.</p>
        <button className="card__button">
          <span> começar agora</span>
        </button>

      </div>

      <div className="card">
        <img className="investimentImg" src={IndependenceImg} alt="images of Investment"/>
        <h2 className="card__title">Independência Financeira</h2>
        <p className="card__description">Duis aute irure dolor in reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur.</p>
        <button className="card__button">
          <span> começar agora</span>
        </button>

      </div>

     </section>
    </div>
  )
}