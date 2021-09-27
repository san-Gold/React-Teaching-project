import React from 'react';

import './index.css';

const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading-wrap'>
        <div>
          <div className='loadEffect'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='content'>正在加载</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
