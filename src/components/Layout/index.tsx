import './index.scss'
import React from 'react'
import { Layout } from 'antd' 

const { Content: AntContent } = Layout

const Content = ({ children } : {children: React.ReactNode}) => {
  return (<AntContent className="layout">{children}</AntContent>)
}

export default Content