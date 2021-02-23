import {
  Project,
  LogoWrap,
  ImageCarousel,
  ImageSwitcher,
  ImageSwitch,
  Images,
  Image,
  FullScreenModal,
  Modal,
  FullScreenBtn,
  ImageList,
  ImageListItem,
} from 'styles/Project';
import { DividerTop } from 'styles/Shared';
import { useState } from 'react';
import Arrow from 'svgs/Projects/Arrow';
import Expand from 'svgs/Projects/Expand';

interface Props {
  Logo: JSX.Element;
  images: Array<String>;
}

export default function ProjectComponent({ Logo, images }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [fullScreen, setFullScreen] = useState(null);
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
      <DividerTop />
      <LogoWrap>{Logo}</LogoWrap>
      <ImageCarousel>
        <ImageSwitcher>
          <ImageSwitch>
            <Arrow />
          </ImageSwitch>
          <Images>
            {images.map((src, i) => (
              <Image style={{ left: `${(i - activeImage) * 100}%` }} data-active={activeImage === i}>
                <img src={`/images/${src}`} />
                {fullScreen === null && (
                  <FullScreenBtn onClick={() => setFullScreen(i)}>
                    <Expand />
                  </FullScreenBtn>
                )}
              </Image>
            ))}
          </Images>
          <ImageSwitch
            data-direction="right"
            onClick={() => setActiveImage(activeImage + 1 == images.length ? 0 : activeImage + 1)}
          >
            <Arrow />
          </ImageSwitch>
        </ImageSwitcher>
        <ImageList>
          <ImageListItem />
        </ImageList>
      </ImageCarousel>
    </Project>
  );
}
