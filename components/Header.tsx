import { Header, Title, Subtitle, Navigation, NavItem } from 'styles/Header';
import { DividerTop, DividerBottom } from 'styles/Shared';
import Link from 'next/link';
import router from 'next/router';
import { useEffect, useState } from 'react';

export default function HeaderComponent() {
  const [activeRoute, setActiveRoute] = useState('/');
  useEffect(() => setActiveRoute(router.pathname), []);
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
          <NavItem data-active={activeRoute === '/'}>CONSULTING</NavItem>
        </Link>
        <Link href={'/portfolio'} passHref>
          <NavItem data-active={activeRoute === '/portfolio'}>PORTFOLIO</NavItem>
        </Link>
        <Link href={'/resume'} passHref>
          <NavItem data-active={activeRoute === '/resume'}>RESUME</NavItem>
        </Link>
      </Navigation>
    </Header>
  );
}
