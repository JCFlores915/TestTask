

import React from 'react';
import './index.scss';
import { List, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import { IProps } from '../../redux/interfaces';
import { SnippetsOutlined } from '@ant-design/icons';
import CustomSkeletomComponet from '../Skeleton';
const CustomListScroll = (
    { data, loading = false, getListData, hasMore = false }: IProps
) => {
    return (
        <div
            id="scrollableDiv"
            className='scrollableDiv'
        >
            <InfiniteScroll
                dataLength={data.length}
                next={getListData}
                hasMore={data.length === 0 ? false : hasMore}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                scrollableTarget="scrollableDiv"
            >
                {
                    loading ?
                        <CustomSkeletomComponet />
                        :
                        <List
                            dataSource={data}
                            renderItem={(item) => {
                                const date = moment(item?.createdAt).format('MMMM Do YYYY, h:mm:ss a');
                                return (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            avatar={item.avatar ? <Avatar src={item.avatar} /> : <Avatar icon={<SnippetsOutlined />} />}
                                            title={<h3 >{item.name}</h3>}
                                            description={item.username}
                                        />
                                        <div>Create: {date}</div>
                                    </List.Item>
                                )
                            }}
                        />
                }

            </InfiniteScroll>
        </div>
    )

}


export default CustomListScroll;