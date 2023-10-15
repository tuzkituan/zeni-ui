import React from 'react'
import styles from './style.module.scss'

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, ...restProps } = props
    return <button className={`${className} ${styles.Button}`} {...restProps}>
        asdasda
    </button>
}

