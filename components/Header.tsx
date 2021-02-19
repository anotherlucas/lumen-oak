import { Header, Title, Subtitle, Navigation, NavItem } from 'styles/Header';
import { DividerTop, DividerBottom } from 'styles/Shared';

export default function HeaderComponent() {
  return (
    <Header>
      <Title>
        <DividerTop />
        Lucas Lemos
        <DividerBottom />
      </Title>
      <Subtitle>SOFTWARE CONSULTING</Subtitle>
      <Navigation>
        <NavItem data-active="true">CONSULTING</NavItem>
        <NavItem>BLOG</NavItem>
      </Navigation>
    </Header>
  );
}
