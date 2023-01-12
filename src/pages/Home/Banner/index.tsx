
import './styles.css';
import BannerImg from "../../../assets/images/ilustra-banner.svg";

export default function Banner () {
  return (
    <div className="banner">
      <div className="left">
        <h1 className='left__title'>Educação Financeira é tudo de bom</h1>
        <p className='left__paragraph'>Vem comigo que te mostro por onde começar</p>
        <button className='left__button'>
          <span> quero saber mais </span> 
        </button>
      </div>
      <div className="right">
        <img src={BannerImg}  alt="Banner do dindin"/>
      </div>
    </div>
  )
}