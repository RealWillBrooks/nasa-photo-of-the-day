import React from 'react';
import ReactPlayer from 'react-player';

export default function Media(props) {
   return (
       <div>
           {props.NasaData.media_type === 'video' ? <ReactPlayer url={props.NasaData.url} /> : <img src={props.NasaData.hdurl} alt={props.NasaData.title} width={'480px'} /> }
       </div>
   );
}


