
import React from 'react';

import ResponsiveMedia from '../ResponsiveMedia';
import { useEffectiveConnectionType } from '../../utils/hooks';
import './connection-aware-media.css';

// cache name 'ect-dynamic-v{1}' based on StableWithRevalidate strategy
const ConnectionAwareMedia = () => {
  const { effectiveConnectionType } = useEffectiveConnectionType();

  console.log('[ConnectionAwareMedia] effectiveConnectionType => ', effectiveConnectionType);
  let media;
  switch (effectiveConnectionType) {
    case 'slow-2g':
      media = <ResponsiveMedia image src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912' alt='low resolution' />;
      break;
    case '2g':
      media = <ResponsiveMedia image src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169' alt='medium resolution' />;
      break;
    case '3g':
      media = <ResponsiveMedia image src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982' alt='high resolution' />;
      break;
    case '4g':
      media = <ResponsiveMedia video src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068' controls />;
      break;
    default:
      media = <ResponsiveMedia video src='https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068' controls />;
      break;
  }

  return (
    <div className='root-frame'>
      {media}
    </div>
  );
};

export default ConnectionAwareMedia;
