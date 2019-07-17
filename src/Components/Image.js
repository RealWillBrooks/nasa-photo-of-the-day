import React from 'react';

export default function Image(props) {
   return (
       <div>
   <img src={props.nasaData.hdurl} width="800px" alt="NASAImage"/>
       </div>
   );
}


