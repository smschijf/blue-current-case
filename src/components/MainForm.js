import arrowRight from "../assets/img/long-arrow-right.svg";

const MainForm = () => {
  return (
    <section className="mainForm">
      <form>
        <div className="formSection">
          <h2>Naam</h2>
          <div className="inputGroup">
            <input
              type="text"
              name="voornaam"
              id="voornaam"
              className="input"
              autoComplete="off"
              required
            />
            <label for="voornaam" className="inputLabel">
              Voornaam
            </label>
          </div>
          <div className="inputGroup">
            <input
              type="text"
              name="achternaam"
              id="achternaam"
              className="input"
              autoComplete="off"
              required
            />
            <label for="achternaam" className="inputLabel">
              Achternaam
            </label>
          </div>
        </div>
        <div className="formSection">
          <h2>Contact</h2>
          <div className="inputGroup">
            <input
              type="tel"
              name="telefoonnummer"
              id="telefoonnummer"
              className="input"
              required
            />
            <label for="telefoonnummer" className="inputLabel">
              Telefoonnummer
            </label>
          </div>
          <div className="inputGroup">
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              required
            />
            <label for="email" className="inputLabel">
              Email
            </label>
          </div>
        </div>
        <div className="formSection">
          <h2>Adres</h2>
          <div className="inputGroup">
            <input
              type="text"
              name="adres"
              id="adres"
              className="input"
              autoComplete="off"
              required
            />
            <label for="adres" className="inputLabel">
              Straatnaam + huisnr.
            </label>
          </div>
          <div className="inputGroupSmall">
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="input"
              autoComplete="off"
              required
            />
            <label for="postcode" className="inputLabel">
              Postcode
            </label>
          </div>
          <div className="inputGroupMedium">
            <input
              type="text"
              name="plaats"
              id="plaats"
              className="input"
              autoComplete="off"
              required
            />
            <label for="plaats" className="inputLabel">
              Plaats
            </label>
          </div>
        </div>
        <div className="formSectionSubmit">
          <label for="submit" className="visuallyHidden">
            Direct betalen
          </label>
          <button type="submit" name="submit" id="submit">
            Direct betalen
            <img src={arrowRight} alt="submit" />
          </button>
          <a href="#">Stuur een offerte</a>
          <p>Betalen via iDEAL, Creditcard… etc.</p>
        </div>
      </form>
    </section>
  );
};

export default MainForm;
