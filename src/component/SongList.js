import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                selectSong(song);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div className="ui divided list">{renderList()}</div>;
};

const mapToState = (state) => {
  return { songs: state.songs };
};

export default connect(mapToState, { selectSong })(SongList);
