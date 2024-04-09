import React from 'react';
import { useState } from 'react' //state the function components//
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import './App.css';

function App() 
{
  const [video, setVideo] = useState("Kong vs Godzilla");
  const [videoURL, setVideoURL] = useState("https://youtu.be/qqrpMRDuPfc?si=bDrrqPi7DVlheIia");

  function handle() 
  {
    movieTrailer(video).then((res) => {
        setVideoURL(res);
    })
  }

  return (
   <div className='container'>
    <div className='inside'>
    <input type='text' placeholder='Enter The Trailer' onChange={(e) => setVideo(e.target.value) } />
    <button onClick= {() => { handle() }}>Search</button>
    </div>
   <ReactPlayer className="video-display" url={ videoURL } controls={true} />
   </div>
  )

}

export default App;
