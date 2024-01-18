

import React from 'react';
import './index.scss';
import { List, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';
import { IDataType, IProps} from '../../redux/interfaces';



const CustomListScroll = (
    { data, loading, getListData, hasMore = false }: IProps
) => { 

    return (
        <div
        id="scrollableDiv"
        className='scrollableDiv'
    >
        <InfiniteScroll
            dataLength={data.length}
            next={getListData}
            hasMore={hasMore}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
        >
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<h3 >{item.name}</h3>}
                            description={item.username}
                        />
                        <div>Create: {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                    </List.Item>
                )}
            />
        </InfiniteScroll>
    </div>
    )

}


export default CustomListScroll;