import InvestmentImg from "../../assets/images/image3.png";
import SavingsImg from "../../assets/images/image2.png";
import IndependenceImg from "../../assets/images/image4.png";
import User1 from "../../assets/images/user1.png";
import User2 from "../../assets/images/user2.png";
import User3 from "../../assets/images/user3.png";
import User4 from "../../assets/images/user4.png";

import "./styles.css";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import { Depo } from "../../components/Depo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className="cursos">
        <div className="card">
          <img
            className="investimentImg"
            src={InvestmentImg}
            alt="images of Investment"
          />
          <h2 className="card__title">Investimento para iniciantes</h2>
          <p className="card__description">
            Duis aute irure dolor in reprehenderit in voluptate velit cillum
            dolore eu fugiat nulla pariatur.
          </p>
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </div>
        <div className="card">
          <img
            className="investimentImg"
            src={SavingsImg}
            alt="images of Investment"
          />
          <h2 className="card__title">Poupando e Rendendo</h2>
          <p className="card__description">
            Duis aute irure dolor in reprehenderit in voluptate velit cillum
            dolore eu fugiat nulla pariatur.
          </p>
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </div>

        <div className="card">
          <img
            className="investimentImg"
            src={IndependenceImg}
            alt="images of Investment"
          />
          <h2 className="card__title">Independência Financeira</h2>
          <p className="card__description">
            Duis aute irure dolor in reprehenderit in voluptate velit cillum
            dolore eu fugiat nulla pariatur.
          </p>
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </div>
      </section>

      <section className="about">
        <h1>O QUE FALAM SOBRE NÓS</h1>
        <div className="about__container">
          <Depo
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
            user="Wally, 25"
            image={User1}
          />

          <Depo
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
            user="Jaden Smith, 23"
            image={User2}
            color="blue"
          />

          <Depo
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
            user="Whoopi Goldberg, 37"
            image={User3}
          />

          <Depo
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam."
            user="Janes Joplin, 29"
            image={User4}
            color="#2E948A"
          />
        </div>
      </section>
    </div>
  );
}
