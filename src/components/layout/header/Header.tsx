import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import spotyfy from "../../../assets/iconmonstr-spotify-1.svg";
const Header = () => {
  return (
    <div className={scss.Header}>
      <p>
        <img className={scss.spotify_icon} src={spotyfy} alt="" />
        Spotify
      </p>
      <div className="container">
        <div className={scss.Content}>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Добавление</Link>
              </li>
              <li>
                <Link to={"/playlist"}>Музыки</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
