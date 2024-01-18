import { useEffect, useState } from 'react'
import { Divider, Modal, Form, Row, Col, Input, Alert } from 'antd';
import { useNavigate } from 'react-router-dom'
import { IInitialState, IDataType } from '../../redux/interfaces';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskThunk } from '../../redux';
import CustomButton from '../../components/Button';
import Container from '../../components/Layout';
import CustomListScroll from '../../components/List';
const Tasks = () => {
    const [data, setData] = useState<IDataType[]>([]);
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
    const onFinish = (values: IDataType) => {
        values.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
        dispatch(addTaskThunk(values) as any)
        setVisible(false)
        form.resetFields(
            ['name']
        )
        setShowAlert(true)
    }

    return (
        <Container>
            <Row gutter={5}>
                <Col span={12}>
                    <CustomButton type='primary' text='New Task' onClick={() => setVisible(true)} />
                </Col>
                <Col span={12}>
                    <CustomButton type='warning' text='Home' onClick={() => navigate('/home')} />
                </Col>

            </Row>

            <Divider plain>Tasks</Divider>
           
            <CustomListScroll
                data={data}
                loading={false}
                getListData={() => { }}
                hasMore={false}
            />

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
                                <CustomButton type='info' text='Add' htmlType='submit' block='block' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Container>

    )
}

export default Tasks