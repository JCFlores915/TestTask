
import { Row, Col, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/Button'
import Content from '../../components/Layout'
const Home = () => {

    const navigate = useNavigate()

    return (
        <Content>
            <Row gutter={24}>
                <Col span={24}>
                    <Form.Item>
                        <CustomButton type='info' text='Tasks' onClick={() => navigate('/tasks')} />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <CustomButton type='info' text='List' onClick={() => navigate('/list')} />
                    </Form.Item>

                </Col>
            </Row>
        </Content>
    )
}

export default Home