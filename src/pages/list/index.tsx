import { useEffect, useState } from 'react'
import { List as Lists, Avatar, Skeleton, Divider, Modal, Form, Row, Col, Input, Button } from 'antd';
import './index.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
import { getElementsUser } from '../../services/api';
interface DataType {
    id: string;
    name: string;
    createdAt: string;
    avatar: string;
    username?: string;
    password?: string;
}

const List = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const navigate = useNavigate()

    const getListUser = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const data = await getElementsUser();
        setData([...data]);
        setLoading(false);
    };

    useEffect(() => {
        getListUser();
    }, []);
    return (
        <div className='listContainer'>

            <Row gutter={5}>

                <Col span={24}>
                    <Button className='btnHome' onClick={() => {
                        navigate('/home')
                    }
                    }>Home</Button>
                </Col>

            </Row>

            <Divider plain>List</Divider>
            <div
                id="scrollableDiv"
                style={{
                    width: '40%',
                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={getListUser}
                    hasMore={data.length < 50}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <Lists
                        dataSource={data}
                        renderItem={(item) => (
                            <Lists.Item key={item.id}>
                                <Lists.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<h3 >{item.name}</h3>}
                                    description={item.username}
                                />
                                <div>Create: {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                            </Lists.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default List