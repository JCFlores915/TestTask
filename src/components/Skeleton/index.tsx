

import React from 'react'
import { Skeleton } from 'antd';
const CustomSkeletomComponet = () => {
    return (
        <>
            <Skeleton avatar paragraph={{ rows: 1 }} active />
            <Skeleton avatar paragraph={{ rows: 1 }} active />
            <Skeleton avatar paragraph={{ rows: 1 }} active />
            <Skeleton avatar paragraph={{ rows: 1 }} active />
            <Skeleton avatar paragraph={{ rows: 1 }} active />
            <Skeleton avatar paragraph={{ rows: 1 }} active />
        </>
    )
}

export default CustomSkeletomComponet