import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


const PlayPause = 

({ isPlaying, activeSong, song, 
  handlePause, handlePlay }) => 
  // if (playing) and active song is equal to the current song then 
  // show a Pause icon otherwise the song is not playing so add a play icon
  (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle 
    size={35}
    className="text-gray-300"
    onClick={handlePause}
  />
 ) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300"
    onClick={handlePlay}
  />
 ));

export default PlayPause;
