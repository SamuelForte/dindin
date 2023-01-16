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
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section className="cursos">
        <Card
          title="Investimento para iniciantes"
          description="Duis aute irure dolor in reprehenderit in voluptate velit cillum
                dolore eu fugiat nulla pariatur."
          image={InvestmentImg}
        >
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </Card>

        <Card
          title="Poupando e Rendendo"
          description="Duis aute irure dolor in reprehenderit in voluptate velit cillum
            dolore eu fugiat nulla pariatur."
          image={SavingsImg}
        >
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </Card>

        <Card
          title="Independência Financeira"
          description="Duis aute irure dolor in reprehenderit in voluptate velit cillum
            dolore eu fugiat nulla pariatur."
          image={IndependenceImg}
        >
          <button className="card__button">
            <span> começar agora</span>
          </button>
        </Card>
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
