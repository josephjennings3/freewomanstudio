import React from 'react';
import '../css/drawings.css';
import devil from '../images/devilonmyback.jpg';
import growth from '../images/growth.jpg';
import strongroots from '../images/strongroots.jpg';
import tiger from '../images/tiger.jpg';
import treeoflife from '../images/treeoflife.jpg';
import whitetiger from '../images/whitetiger.jpg';


function Drawings() {
  return (
    <div className="drawings">
      <main>
        <h1>Drawings</h1>
        <div className="gallery">
          <div className="picturebox">
            <h5>Title</h5>
            <img src={devil} alt="woman with devil on her back" />
            
          </div>
          <div className="picturebox">
            <h5>Title</h5>
            <img src={growth} alt="woman with plant" />
          </div>
          <div className="picturebox">
            <h5>Title</h5>
            <img src={strongroots} alt="little girl with fist in background " />
            
          </div>
          <div className="picturebox">
            <h5>Title</h5>
            <img src={tiger} alt="woman with tiger around a bonfire"/>
            
          </div>
          <div className="picturebox">
            <h5>Title</h5>
            <img src={treeoflife} alt="woman with tree" />
            
          </div>
          <div className="picturebox">
            <h5>Title</h5>
            <img src={whitetiger} alt="woman with tiger" />
            
          </div> 
        </div>
      </main>
    </div>
  );
}

export default Drawings;