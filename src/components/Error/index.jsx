import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>Oups 🙈 Cette page n'existe pas</h1>
      <nav>
        <Link to="/">Accueil</Link>
      </nav>
    </div>
  );
}

export default Error;
