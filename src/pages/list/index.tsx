import { useEffect, useState } from 'react'
import { Divider, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'
import { getElementsUser } from '../../services/api';
import CustomButton from '../../components/Button';
import Content from '../../components/Layout';
import CustomListScroll from '../../components/List';
import { IDataType } from '../../redux/interfaces'
const List = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IDataType[]>([]);
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
        <Content>

            <Row gutter={5}>

                <Col span={24}>
                    <CustomButton type='warning' text='Home' onClick={() => navigate('/home')} />
                </Col>

            </Row>

            <Divider plain>List</Divider>

            <CustomListScroll
                data={data}
                loading={loading}
                getListData={getListUser}
                hasMore={data.length < 50}
            />

        </Content>
    )
}

export default List