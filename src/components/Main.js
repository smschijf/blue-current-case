import MainInfo from './MainInfo';
import MainProduct from './MainProduct';
import arrowLeft from '../assets/img/long-arrow-left.svg';

const Main = () => {
  return (
    <main>
      <div className="progressBar">
        <span></span>
        <span>1/7</span>
      </div>
      <div className="mainContent">
        <MainInfo />
        <MainProduct />
      </div>
      <div className="mainForm"></div>
      <button className="backButton">
        <img src={arrowLeft} alt="Vorige"></img>
        <span>Vorige</span>
      </button>
    </main>
  );
};

export default Main;
