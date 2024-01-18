
import React from 'react'
import './index.scss'
import { Button } from 'antd'
import { ICustomButtonProps } from '../Interfaces'

const CustomButton = ({ type, text, onClick = () => {} , htmlType = 'button', block = ''}: ICustomButtonProps) => {
    return (
        <Button className={'btn-custom-' + type + (block ? ('-' + block) : '')} onClick={() => onClick()} htmlType={htmlType}>{text}</Button>
    )
}

export default CustomButton
