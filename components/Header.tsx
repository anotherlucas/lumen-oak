import { Header, Title, Subtitle, Navigation, NavItem } from 'styles/Header';
import { DividerTop, DividerBottom } from 'styles/Shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HeaderComponent() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('/');
  useEffect(() => setActiveRoute(router.pathname), [router.pathname]);
  return (
    <Header>
      <Title>
        <DividerTop />
        Lucas Lemos
        <DividerBottom />
      </Title>
      <Subtitle>SOFTWARE ARCHITECT</Subtitle>
      <Navigation>
        <Link href={'/'} passHref>
          <NavItem data-active={activeRoute === '/'}>ABOUT</NavItem>
        </Link>
        <Link href={'/consulting'} passHref>
          <NavItem data-active={activeRoute === '/consulting'}>CONSULTING</NavItem>
        </Link>
        <Link href={'/portfolio'} passHref>
          <NavItem data-active={activeRoute === '/portfolio'}>DESIGN</NavItem>
        </Link>
      </Navigation>
    </Header>
  );
}
