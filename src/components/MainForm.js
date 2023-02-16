const MainForm = () => {
  return (
    <section className="mainForm">
      <form>
        <div className="formSection">
          <h2>Naam</h2>
          <label for="voornaam" className="visuallyHidden">
            Voornaam:
          </label>
          <input
            type="text"
            name="voornaam"
            id="voornaam"
            placeholder="Voornaam"
            className="formInput"
          />
          <label for="achternaam" className="visuallyHidden">
            Achternaam:
          </label>
          <input
            type="text"
            name="achternaam"
            id="achternaam"
            placeholder="Achternaam"
            className="formInput"
          />
        </div>
        <div className="formSection">
          <h2>Contact</h2>
          <label for="telefoonnummer" className="visuallyHidden">
            Telefoonnummer:
          </label>
          <input
            type="tel"
            name="telefoonnummer"
            id="telefoonnummer"
            placeholder="Telefoonnummer"
            className="formInput"
          />
          <label for="email" className="visuallyHidden">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="formInput"
          />
        </div>
        <div className="formSection">
          <h2>Adres</h2>
          <label for="adres" className="visuallyHidden">
            Straatnaam + huisnummer:
          </label>
          <input
            type="text"
            name="adres"
            id="adres"
            placeholder="Straatnaam + huisnr."
            className="formInput"
          />
          <label for="postcode" className="visuallyHidden">
            Postcode:
          </label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Postcode"
            className="formInputSmall"
          />
          <label for="plaats" className="visuallyHidden">
            Plaats:
          </label>
          <input
            type="text"
            name="plaats"
            id="plaats"
            placeholder="Plaats"
            className="formInputMedium"
          />
        </div>
        <div className="formSectionSubmit">
        <label for="submit" className="visuallyHidden">
            Direct betalen
          </label>
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Direct betalen"
          />
          <a href="#">Stuur een offerte</a>
          <p>Betalen via iDEAL, Creditcard… etc.</p>
        </div>
      </form>
    </section>
  );
};

export default MainForm;
