const OpenHours = () => {
  return (
    <div className="openhours">
      <section>
        <div className="openhours-text">
          <h2>Våra tider</h2>
          <p>
            Dyk in när andan faller på – ta en öl efter jobbet, häng med
            kompisar, gå på en spontan dejt eller stilla den där plötsliga
            hungern. Vi håller dörrarna öppna (nästan) varje dag!
          </p>
        </div>
        <div className="openhours-list">
          <ul>
            <li>Måndag: Stängt (vi laddar upp för resten av veckan)</li>
            <li>Tisdag: 16:00 – 23:00 (lugnet före stormen)</li>
            <li>Onsdag: 16:00 – 23:00 (mitt i veckan-mys)</li>
            <li>Torsdag: 16:00 – 23:00 (förvärmning inför helgen)</li>
            <li>Fredag: 17:00 – 01:00 (helgen börjar här)</li>
            <li>Lördag: 17:00 – 01:00 (festläge deluxe)</li>
            <li>Söndag: 17:00 – 01:00 (chill, käk och kanske en cocktail?)</li>
          </ul>
          <p>Kom förbi när du vill – vi har alltid en plats för dig!</p>
        </div>
      </section>
    </div>
  );
};

export default OpenHours;
