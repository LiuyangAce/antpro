import React from 'react';
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: 'black',
  height: 64,
  fontWeight: 800,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: 'black',
  // backgroundColor: '#108ee9',
};

const AutoBuild: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>山君自动化打包部署</Header>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Space>
  );
};
export default AutoBuild;
