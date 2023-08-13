import React from 'react';
import { Button, Layout, Space } from 'antd';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import './index.less';

const { Header, Content } = Layout;

const layoutStyle: React.CSSProperties = {
  backgroundColor: 'rgb(222,227,233)',
};

const headerStyle: React.CSSProperties = {
  // fontSize: '20px',
  textAlign: 'center',
  height: 120,
  fontWeight: 800,
  // paddingInline: 50,
  // lineHeight: '64px',
  backgroundColor: 'rgb(222,227,233)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  // alignItems: 'flex-end',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: 'black',
  // backgroundColor: '#108ee9',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: 'rgb(248,169,27)',
  color: 'black',
};

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 15; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'ID',
    width: 50,
    dataIndex: 'key',
    render: (_) => {
      return (_ as number) + 1;
    },
  },
  {
    title: '应用名称',
    width: 80,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建者',
    width: 80,
    dataIndex: 'creator',
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: '下载',
    width: 180,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a href="" key="actionGroup">
        点击下载
      </a>,
    ],
  },
  // {
  //   title: '操作',
  //   width: 180,
  //   key: 'option',
  //   valueType: 'option',
  //   render: () => [
  //     <a key="link">链路</a>,
  //     <a key="link2">报警</a>,
  //     <a key="link3">监控</a>,
  //     <TableDropdown
  //       key="actionGroup"
  //       menus={[
  //         { key: 'copy', name: '复制' },
  //         { key: 'delete', name: '删除' },
  //       ]}
  //     />,
  //   ],
  // },
];

const AutoBuild: React.FC = () => {
  return (
    // <PageContainer>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <div>软件自动打包系统</div>
          <Button type="primary" style={buttonStyle}>
            新建版本
          </Button>
          <Button type="primary" style={buttonStyle}>
            新建应用
          </Button>
          <Button type="primary" style={buttonStyle}>
            打包软件
          </Button>
        </Header>
        <Content style={contentStyle}>
          <ProTable<TableListItem>
            // rowClassName={(record, index) => index % 2 === 1 ? 'odd' : 'even'}
            dataSource={tableListDataSource}
            rowKey="key"
            pagination={{
              showQuickJumper: true,
            }}
            columns={columns}
            search={false}
            dateFormatter="string"
            // headerTitle="表格标题"
            // toolBarRender={() => [
            //   <Button key="show">查看日志</Button>,
            //   <Button key="out">
            //     导出数据
            //     <DownOutlined />
            //   </Button>,
            //   <Button type="primary" key="primary">
            //     创建应用
            //   </Button>,
            // ]}
          />
        </Content>
      </Layout>
    </Space>
    // </PageContainer>
  );
};
export default AutoBuild;
