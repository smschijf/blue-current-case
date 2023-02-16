import laadpunt from "../assets/img/motorhuis-laadpunt.png";
import check from "../assets/img/check.svg";

const MainProduct = () => {
  const productFeatures = [
    {
      icon: check,
      text: "Laden met vaste kabel"
    },
    {
      icon: check,
      text: "5 meter"
    },
    {
      icon: check,
      text: "Op een paal"
    },
    {
      icon: check,
      text: "Graafwerk"
    },
    {
      icon: check,
      text: "Tot 6 meter"
    },
    {
      icon: check,
      text: "Geen"
    },
  ]
  return (
    <section className="mainProduct">
      <div className="productImage">
        <img src={laadpunt} alt="laadpunt"></img>
      </div>
      <div className="productFeatures">
        <ul>
          {productFeatures.map((item, i) => (
            <li key={i} className="productFeature">
              <img src={item.icon} alt="check" />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="productPrice">
        <p>Jouw keuze</p>
        <p>€1.658</p>
      </div>
    </section>
  );
};

export default MainProduct;
