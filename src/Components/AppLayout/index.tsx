import * as React from 'react';
import { Layout, Menu, Icon, PageHeader } from 'antd';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const { Content, Header, Sider } = Layout;

const Container = styled(Layout)`
  height: 100%;
`;

const AppLayout: React.FC = props => {
  const { children } = props;
  return (
    <Container>
      <Sider collapsible={true} breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['pawndetail']}>
          <Menu.Item key="1">
            <Link to={'/'}>
              <Icon type="user" /> <span className={'nav-text'}>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="pawncreation">
            <Link to={'/pawncreation'}>
              <Icon type="video-camera" />
              <span className={'nav-text'}>Pawn Creation </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="pawndetail">
            <Link to={'/pawndetail'}>
              <Icon type="video-camera" />
              <span className={'nav-text'}>Pawn Detail View </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Search Pawn</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text">User Detail</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Container>
        <Header style={{ background: '#fff', padding: 0 }}>
          <PageHeader title="AVL 👑" />
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Container>
    </Container>
  );
};

export default withRouter(AppLayout);
