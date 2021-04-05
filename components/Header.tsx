import { Header, Title, Subtitle, Navigation, NavItem } from 'styles/Header';
import { DividerTop, DividerBottom, SectionButton } from 'styles/Shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ConsultingHeaderComponent() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('/');
  useEffect(() => setActiveRoute(router.pathname), [router.pathname]);
  return (
    <Header>
      <Title>
        <DividerTop />
        Lumen Oak
        <DividerBottom />
      </Title>
      <Subtitle>SOFTWARE ARCHITECTURE</Subtitle>
      <Link href="https://calendly.com/ll-consulting/30min">
        <SectionButton>SCHEDULE A CALL</SectionButton>
      </Link>
      {/* <Navigation>
        <Link href={'/'} passHref>
          <NavItem data-active={activeRoute === '/'}>ABOUT</NavItem>
        </Link>
        <Link href={'/'} passHref>
          <NavItem data-active={activeRoute === '/'}>CONSULTING</NavItem>
        </Link>
        <Link href={'/design'} passHref>
          <NavItem data-active={activeRoute === '/design'}>DESIGN</NavItem>
        </Link>
      </Navigation> */}
    </Header>
  );
}
