import { useEffect, useState } from "react";
import scss from "./Music.module.scss";
import { useAppDispatch } from "../../redux/store";
import { getMusics, postMusics } from "../../redux/features/MusicalSlice";

const MusicRquests = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState("");

  const handleAddMusics = () => {
    if (title === "" || audio === "") {
      alert("Заполните");
    } else {
      const newData = {
        title: title,
        audio: audio,
      };
      dispatch(postMusics(newData));
      setTitle("");
      setAudio("");
    }
  };

  useEffect(() => {
    dispatch(getMusics());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.MusicRequests}>
            <input
              type="text"
              placeholder="Название Музыки"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ссылка Музыки"
              value={audio}
              onChange={(e) => setAudio(e.target.value)}
            />
            <div className={scss.btn}>
              <button onClick={handleAddMusics}>add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicRquests;
