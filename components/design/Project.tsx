import useWindowSize from 'hooks/useWindowSize';
import {
  Project,
  LogoWrap,
  Content,
  ImageCarousel,
  ImageSwitch,
  Images,
  ImageWrap,
  Image,
  FullScreenModal,
  Modal,
  ImageSwitcher,
  ImageList,
  ImageListItem
} from 'styles/Project';
import { DividerTop } from 'styles/Shared';
import { useState, useRef, useEffect } from 'react';
import Arrow from 'svgs/Arrow';

type ContainerDimensions = {
  height: number;
  width: number;
  xyRatio: number;
};

type ImageDimensions = {
  width: number;
  height: number;
  xyRatio: number;
};

interface Props {
  Logo: JSX.Element;
  images: Array<String>;
  defaultImage?: number;
  order: number;
  imageDimensions?:ImageDimensions[];
}

export default function ProjectComponent({ Logo, images, order, imageDimensions, defaultImage = 0 }: Props) {
  const [activeImage, setActiveImage] = useState(defaultImage);
  const [fadeIn, setFadeIn] = useState(false);
  const [fullScreen, setFullScreen] = useState(null);
  const [containerDimensions, setcontainerDimensions] = useState<ContainerDimensions>();
  // const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([]);
  // const imagesRef = useRef([]);
  const windowSize = useWindowSize();
  useEffect(() => {
    // const updatedDimensions = [...imageDimensions];
    let maxHeight = 0;
    imageDimensions.forEach((dimensions, i) => {
    //   if (!imageDimensions[i]) {
    //     updatedDimensions[i] = {
    //       width: img.naturalWidth,
    //       height: img.naturalHeight,
    //       xyRatio: img.naturalWidth / img.naturalHeight,
    //     };
    //   }
      const targetHeight = (windowSize.width * dimensions.height) / dimensions.width || 0;
      maxHeight = maxHeight > targetHeight ? maxHeight : targetHeight;
    });
    // });
    // if (maxHeight) {
      
    //   setImageDimensions(updatedDimensions);
      setcontainerDimensions({
        height: maxHeight < 38 * windowSize.rem ? maxHeight : 38 * windowSize.rem,
        width: windowSize.width - 2.5 * windowSize.rem,
        xyRatio:
          (windowSize.width - 2.5 * windowSize.rem) /
          (maxHeight < 38 * windowSize.rem ? maxHeight : 38 * windowSize.rem),
      });
    // }
  }, [windowSize.width, fadeIn]);
  setTimeout(() => setFadeIn(true), (750 + (500 * order)));

  return (
    <Project>
      {images.map((src, i) => (
        <Image
          style={{ display:'none' }}
          // ref={(img) => (imagesRef.current[i] = img)}
          src={`/images/${src}`}
        />
      ))}
      {fullScreen !== null ? (
        <FullScreenModal
          data-overlay="true"
          onClick={({ target }) => {
            (target as HTMLDivElement).dataset?.overlay && setFullScreen(null);
          }}
        >
          <Modal>
            <img src={`/images/${images[fullScreen]}`} />
          </Modal>
        </FullScreenModal>
      ) : null}
      <DividerTop style={{ opacity: fadeIn ? 1 : 0, transition:'opacity 300ms ease-out', marginTop: '2rem' }} />
      <LogoWrap style={{ opacity: fadeIn ? 1 : 0 }}>{Logo}</LogoWrap>
      <Content style={{ opacity: fadeIn ? 1 : 0 }}>
        {/* <ProjectCopy>
          A series eCommerce storefronts for customizable products
        </ProjectCopy> */}


        <ImageCarousel style={{ height: `${containerDimensions ? containerDimensions.height : 100}px` }}>
          <Images>
            {images.map((src, i) => {
              const imagePosition = i - activeImage;
              let imageLeft = `-100%`;
              if (imageDimensions[i] && containerDimensions && fadeIn) {
                let imageWidth =
                  containerDimensions.xyRatio > imageDimensions[i].xyRatio
                    ? (imageDimensions[i].width * containerDimensions.height) / imageDimensions[i].height
                    : containerDimensions.width;

                imageWidth = Math.min(imageWidth, containerDimensions.width);
                if (imagePosition === 0) {
                  imageLeft = `calc(50% - ${imageWidth / 2}px)`;
                } else if (imagePosition < 0) {
                  let totalLeft =
                    containerDimensions.xyRatio > imageDimensions[activeImage].xyRatio
                      ? (imageDimensions[activeImage].width * containerDimensions.height) /
                        imageDimensions[activeImage].height /
                        2
                      : containerDimensions.width / 2;
                  for (let k = 1; k < Math.abs(imagePosition); k++) {
                    totalLeft +=
                      containerDimensions.xyRatio > imageDimensions[activeImage - k].xyRatio
                        ? ((imageDimensions[activeImage - k].width * containerDimensions.height) /
                            imageDimensions[activeImage - k].height) *
                          ((10 - k) / 10)
                        : containerDimensions.width * ((10 - k) / 10);
                  }
                  totalLeft += ( containerDimensions.xyRatio * ((10 + imagePosition) / 10)) > imageDimensions[i].xyRatio ? imageWidth * ((10 + imagePosition) / 10) : imageWidth;
                  imageLeft = `calc(50% - ${totalLeft}px)`;
                } else if (imagePosition > 0) {
                  let totalLeft =
                    containerDimensions.xyRatio > imageDimensions[activeImage].xyRatio
                      ? (imageDimensions[activeImage].width * containerDimensions.height) /
                        imageDimensions[activeImage].height /
                        2
                      : containerDimensions.width / 2;
                  for (let k = 1; k < Math.abs(imagePosition) + 1; k++) {
                    totalLeft +=
                      containerDimensions.xyRatio > imageDimensions[activeImage + k].xyRatio
                        ? ((imageDimensions[activeImage + k].width * containerDimensions.height) /
                            imageDimensions[activeImage + k].height) *
                          ((10 - k) / 10)
                        : containerDimensions.width * ((10 - k) / 10);
                  }

                  totalLeft -= imageWidth * ((10 - imagePosition) / 10);
                  imageLeft = `calc(50% + ${totalLeft}px)`;
                }
              }
              return (
                <ImageWrap key={`${src}-${i}`}>
                  <Image
                    style={{ left: imageLeft }}
                    data-position={imagePosition}
                    onClick={() => (imagePosition === 0 ? setFullScreen(i) : setActiveImage(i))}
                    src={`/images/${src}`}
                  />
                </ImageWrap>
              );
            })}
          </Images>
        </ImageCarousel>
        <ImageSwitcher>
          <ImageSwitch onClick={() => activeImage - 1 >= 0 && setActiveImage(activeImage - 1)}>
            <Arrow />
          </ImageSwitch>
          <ImageList>
            { images.map((img, i) => (
                <ImageListItem
                  key={`${img}-list-item`}
                  data-active={ activeImage === i }
                  onClick={() => setActiveImage(i)}
                />
              ))
            }
            
          </ImageList>
          
          <ImageSwitch
            data-direction="right"
            onClick={() => activeImage + 1 !== images.length && setActiveImage(activeImage + 1)}
          >
            <Arrow />
          </ImageSwitch>
        </ImageSwitcher>
      </Content>
    </Project>
  );
}
