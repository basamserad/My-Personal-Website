import { Col, Row, Typography,Image } from 'antd';
import mypic from './../assets/My Pic-69a4eea4.jpg'

const { Title, Paragraph } = Typography;

export default function Homepage() {
  return (
    <div className="homepage_container">
      <Row gutter={30}>
        <Col span={12}>
          <Title style={{ margin: 0 }}>Hi, I'm</Title>
          <Title style={{ margin: 0 }}>Basam C. Serad</Title>
          <Title style={{ margin: 0 }}>a Web Developer</Title>
          <Paragraph>
            I'm a Web Developer. My passion is creating innovative web systems
            and I have a strong foundation in technologies such as Quasar
            Framework, Vuejs, Reactjs, Nodejs, Javascript, Typescript, HTML,
            CSS, and MySQL. On this website, you'll find examples of my work and
            my contact information. Thank you for visiting!
          </Paragraph>
        </Col>
        <Col span={12}>
          <Image src={mypic} width={800}/>
        </Col>
      </Row>
    </div>
  );
}
