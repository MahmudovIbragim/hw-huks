import scss from "./PlayList.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import React from "react";
import { deleteItemMusic } from "../../redux/features/MusicalSlice";
import delete_btn from "../../assets/delete-button-svgrepo-com.svg";

const MusicPlayList = React.memo(() => {
  const dataMusic = useAppSelector((state) => state.musicReducer.data);
  const dispatch = useAppDispatch();
  console.log(dataMusic);

  const handleDeleteMusic = (id: number) => {
    dispatch(deleteItemMusic(id));
  };

  return (
    <div className={scss.Playlist}>
      <div className="container">
        <div className={scss.Content}>
          {dataMusic.map((item) => (
            <div className={scss.card} key={item._id}>
              <h1>{item.title}</h1>
              <iframe
                allowFullScreen
                sandbox="allow-scripts allow-same-origin"
                src={item.audio}
              ></iframe>
              <div className={scss.card_btn}>
                <button onClick={() => handleDeleteMusic(item._id)}>
                  <div className={scss.sign}>
                    <img src={delete_btn} alt="" />
                    <p className={scss.text}>delete</p>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MusicPlayList;
