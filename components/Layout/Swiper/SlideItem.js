import Image from 'next/image';

const SlideItem = props => {
  const { src, alt, height, width } = props.image;

  return (
    <div className="h-[228px]">
      <Image
        src={src.medium}
        alt={alt}
        className="max-w-full h-[228px] aspect-square object-cover object-center"
        width={width || 500}
        height={height || 500}
      />
    </div>
  );
};

export default SlideItem;
