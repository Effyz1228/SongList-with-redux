import { combineReducers } from "redux";

const songList = () => {
  return [
    { title: "I am a cat", duration: "4:05" },
    { title: "I like cats", duration: "3:58" },
    { title: "No cats like you", duration: "2:59" },
    { title: "You are the best cat", duration: "5:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songList,
  selectedSong: selectedSongReducer,
});
