import { useState, useEffect } from 'react';
import Slider from './Slider';

const StorySlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://api.pexels.com/v1/search?query=3d&page=1&per_page=15',
        {
          headers: {
            Authorization:
              '563492ad6f91700001000001fa796036b1c74db780dee4e8870bf4e2',
          },
        }
      );
      const data = await res.json();
      setImages(data.photos);
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded-md">
      <Slider images={images} />
    </div>
  );
};

export default StorySlider;
