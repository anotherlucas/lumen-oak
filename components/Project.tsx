import useWindowSize from 'hooks/useWindowSize';
import {
  Project,
  LogoWrap,
  ImageCarousel,
  ImageSwitcher,
  ImageSwitch,
  Images,
  ImageWrap,
  Image,
  FullScreenModal,
  Modal,
  FullScreenBtn,
  ImageList,
  ImageListItem,
} from 'styles/Project';
import { DividerTop } from 'styles/Shared';
import { useState, useRef, useEffect } from 'react';
import Arrow from 'svgs/Arrow';
import Expand from 'svgs/Expand';
import defer from 'lodash/defer';

interface Props {
  Logo: JSX.Element;
  images: Array<String>;
}

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

export default function ProjectComponent({ Logo, images }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [loadCount, setLoadCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [fullScreen, setFullScreen] = useState(null);
  const [containerDimensions, setcontainerDimensions] = useState<ContainerDimensions>();
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions[]>([]);
  const imagesRef = useRef([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    const updatedDimensions = [...imageDimensions];
    let maxHeight = 0;
    imagesRef.current.forEach((img: HTMLImageElement, i) => {
      if (!imageDimensions[i]) {
        updatedDimensions[i] = {
          width: img.naturalWidth,
          height: img.naturalHeight,
          xyRatio: img.naturalWidth / img.naturalHeight,
        };
      }
      const targetHeight = (windowSize.width * img.naturalHeight) / img.naturalWidth || 0;
      maxHeight = maxHeight > targetHeight ? maxHeight : targetHeight;
    });
    if (maxHeight) {
      setImageDimensions(updatedDimensions);
      setcontainerDimensions({
        height: maxHeight < 38 * windowSize.rem ? maxHeight : 38 * windowSize.rem,
        width: windowSize.width - 2.5 * windowSize.rem,
        xyRatio:
          (windowSize.width - 2.5 * windowSize.rem) /
          (maxHeight < 38 * windowSize.rem ? maxHeight : 38 * windowSize.rem),
      });
    }
  }, [windowSize.width, fadeIn]);
  setTimeout(() => setFadeIn(true), 1000);

  return (
    <Project>
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
      <DividerTop style={{ marginTop: '2rem' }} />
      <LogoWrap>{Logo}</LogoWrap>
      <ImageCarousel>
        <ImageSwitcher style={{ height: `${containerDimensions ? containerDimensions.height : 100}px` }}>
          <Images>
            {images.map((src, i) => {
              const imagePosition = i - activeImage;
              let imageLeft = `-100%`;
              if (imageDimensions[i] && containerDimensions) {
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
                  totalLeft += imageWidth * ((10 + imagePosition) / 10);
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
                    ref={(img) => (imagesRef.current[i] = img)}
                    onClick={() => (imagePosition === 0 ? setFullScreen(i) : setActiveImage(i))}
                    src={`/images/${src}`}
                  />
                </ImageWrap>
              );
            })}
          </Images>
        </ImageSwitcher>
        {/* <ImageList>
          <ImageSwitch onClick={() => activeImage - 1 >= 0 && setActiveImage(activeImage - 1)}>
            <Arrow />
          </ImageSwitch>
          <ImageListItem />
          <ImageSwitch
            data-direction="right"
            onClick={() => activeImage + 1 !== images.length && setActiveImage(activeImage + 1)}
          >
            <Arrow />
          </ImageSwitch>
        </ImageList> */}
      </ImageCarousel>
    </Project>
  );
}
