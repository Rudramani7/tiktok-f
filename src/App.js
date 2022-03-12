
import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setvideos] = useState([]);
  useEffect(()=>{
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setvideos(response.data);

      return response;
    }

    fetchPosts();
  },[]);

console.log(videos);


  return (
    <div className="app">
      <h1>tikTAk</h1>
<div className='app_videos'>
  {videos.map(({url, channel, description, song, likes, messages, shares})=>(
    <Video 
    url={url}
    channel={channel}
    song={song}
    likes={likes}
    messages={messages}
    description={description}
    shares={shares}
    />
  ))}
  {/* <Video 
  url='https://lived2.lyricslive24.com/mp4regular/play/Q1lPdFoyL3BqRW8vWTVRMzFRSWx4QT09/-DRAKE---ONE-DANCE---status-video-.mp4'
  channel='RudraTarak'
  description='Learner!'
  song='One dance'
  likes={123}
  messages={456}
  shares={789}
  />

<Video 
  url='https://sabstatus.com/files/download/id/3233'
  channel='RudraTarak'
  description='Single!'
  song='Music'
  likes={999}
  messages={256}
  shares={780}
  />
  <Video
url='https://beststatusvideo.com/files/download/id/21560'
channel='justin'
song='stay'
description="STAY"
likes={65443}
messages={8678}
shares={667} 
/> */}
  
</div>
</div>
  );
}

export default App;
