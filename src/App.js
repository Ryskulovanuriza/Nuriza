import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";


export default class App extends Component {
  render() {
    const images = [
      { url: "https://bipbap.ru/wp-content/uploads/2017/04/maxresdefault-10.jpg" },
      { url: "http://imgtube.ru/images/stories/2013/11/944/05.jpg" },
      { url: "https://bipbap.ru/wp-content/uploads/2017/04/kuukktsk.jpg" },
    ]
    return (
      <div>
         <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        useGPURender={true}
        navMargin={30}
        navSize={50}
        navStyle={1}
        slideDuration={0.5}
        showNavs={true}
      /> 
      </div>
    )
  }
}
