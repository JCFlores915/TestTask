import { useEffect, useState } from 'react'
import './index.scss'
import { List, Avatar, Divider, Modal, Form, Row, Col, Input, Button, Alert } from 'antd';
import { useNavigate } from 'react-router-dom'
import { BookOutlined } from '@ant-design/icons';
import { IInitialState, ITask } from '../../redux/interfaces';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskThunk } from '../../redux';


const Tasks = () => {
    const [data, setData] = useState<ITask[]>([]);
    const [visible, setVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { allTasks } = useSelector((state: { task: IInitialState }) => state?.task)

    const [form] = Form.useForm();

    // UseEffect to update the data when the allTasks change
    useEffect(() => {
        setData(allTasks)
    }, [allTasks]);

    // UseEffect show alert when the showAlert change
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }
    }, [showAlert])

    //
    const onFinish = (values: ITask) => {
        values.createAt = moment().format('YYYY-MM-DD HH:mm:ss')
        dispatch(addTaskThunk(values) as any)
        setVisible(false)
        form.resetFields(
            ['name']
        )
        setShowAlert(true)
    }

    return (

        <div className='tasksContainer'>
            <Row gutter={5}>
                <Col span={12}>
                    <Button className='btnAddTasks' onClick={() => {
                        setVisible(true)
                    }}>New Task</Button>
                </Col>
                <Col span={12}>
                    <Button className='btnHome' onClick={() => {
                        navigate('/home')
                    }
                    }>Home</Button>
                </Col>

            </Row>

            <Divider plain>Tasks</Divider>
            <div
                id="scrollableDiv"

                className='scrollableDiv'
            >

                <List
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                avatar={<Avatar icon={<BookOutlined />} />}
                                title={<strong>{item.name}</strong>}
                                description={item.createAt}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <br />
            {showAlert && <Alert message="Task added successfully" type="success" />}
            <Modal
                open={visible}
                centered
                footer={null}
                onCancel={() => {
                    setVisible(false)
                }}
            >
                <Form
                    name='addTask'
                    onFinish={onFinish}
                    layout='vertical'
                    form={form}

                >
                    <Row gutter={16}>
                        <Col span={24}>
                            <Divider />
                            <Form.Item
                                name='name'
                                rules={[{ required: true, message: 'Please enter task name' }]}
                            >
                                <Input placeholder='New Task Name' />
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit' size='large' block>Add</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>

    )
}

export default Tasks