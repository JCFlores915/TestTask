import React from 'react'
import './index.scss'
import { Row, Col, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div className='homeContainer'>
            <Row>
                <Col span={24}>
                    <div className='homeTitle'>
                        <Button className='btnTasks' onClick={() => navigate('/tasks')}>Tasks</Button>
                        <br />
                        <Button className='btnList' onClick={() => navigate('/list')}>List</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}



export default Home