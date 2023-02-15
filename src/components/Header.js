import BlueCurrentLogo from "../assets/img/blue-current-logo-blue-v-2.svg";
import MotorhuisLogo from "../assets/img/powered-by-motorhuis.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={MotorhuisLogo} alt="Motorhuis"></img>
      </div>
      <div>
        <img src={BlueCurrentLogo} alt="Blue Current"></img>
      </div>
    </header>
  );
};

export default Header;
