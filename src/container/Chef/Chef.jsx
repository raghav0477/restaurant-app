import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef_content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotataion" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint molestiae animi dignissimos corporis, dolorum id, quod ut labore aperiam a alias dicta.</p>
      </div>

      <div className="app__chef_sign">
        <p>Kevin Luos</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>

  </div>
);

export default Chef;
