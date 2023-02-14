import BlueCurrentLogo from "../assets/img/blue-current-logo-blue-v-2.svg";

const Header = () => {
  return (
    <header>
      <div>
        <p>powered by</p>
        <p>motorhuis</p>
      </div>
      <div>
        <img src={BlueCurrentLogo} alt="Blue Current"></img>
      </div>
    </header>
  );
};

export default Header;
