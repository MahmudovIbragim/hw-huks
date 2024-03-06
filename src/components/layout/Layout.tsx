import { Route, Routes } from "react-router-dom";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import MusicRquests from "../musicPage/MusicRquests";
import MusicPlayList from "../musicPlayList/MusicPlayList";
const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className={scss.Content}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MusicRquests />} />
            <Route path="/playlist" element={<MusicPlayList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;
