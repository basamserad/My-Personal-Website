import { Layout, Menu, theme } from 'antd';
import './styles/layout.css';
import Homepage from './pages/Homepage';
import Navbar from './component/Navigation/Navbar';
const { Header, Content, Footer } = Layout;
export default function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <Navbar/>
      </Header>
      <Content style={{ margin: '30px' }}>
        <Homepage />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
