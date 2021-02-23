import { Flexconomy } from 'styles/Projects/Flexconomy';
import {
  Project,
  ProjectTitle,
  LogoWrap,
  ImageCarousel,
  ImageSwitcher,
  ImageSwitch,
  Images,
  Image,
  ImageList,
  ImageListItem,
} from 'styles/Projects/Shared';
import { DividerTop } from 'styles/Shared';

import FlexconomyLogo from 'svgs/Projects/Flexconomy/Logo';

export default function FlexconomyComponent() {
  return (
    <Project>
      <DividerTop />
      <LogoWrap>
        <FlexconomyLogo />
      </LogoWrap>
      <ImageCarousel>
        <ImageSwitcher>
          <ImageSwitch />
          <Images></Images>
          <ImageSwitch />
        </ImageSwitcher>
        <ImageList>
          <ImageListItem />
        </ImageList>
      </ImageCarousel>
    </Project>
  );
}
