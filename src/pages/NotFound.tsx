import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-content">
      <section>
        <h2>Sidan kunde inte hittas</h2>
        <p>
          Ojdå! Sidan du letar efter finns inte eller har flyttats.
          <br />
          <Link to="/">Gå tillbaka till startsidan</Link>
        </p>
      </section>
    </div>
  );
};

export default NotFound;
