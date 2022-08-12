import { ReactComponent as MainImage } from "assets/images/login.svg";
import ButtonIcon from "components/ButtonIcon";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Aprenda um pouco mais sobre rede de transporte</h1>
            <p>
              Tenha acesso a informações relevantes de placas de equipamentos de rede
              de transporte.
            </p>
          </div>
          <div>
            <Link to="/boards">
              <ButtonIcon text="Iniciar a consulta de placas" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
