import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import button from '@/common/Button/Button'

import s from './RedButton.module.scss'

interface IRedButton {
	className?: string
	disabled?: boolean
	onClick?: () => void
	size?: 'medium' | 'small' | 'xs'
}
const RedButton: FC<PropsWithChildren<IRedButton>> = ({
	children,
	onClick = () => {},
	size = '',
	disabled
}) => {
	return (
		<button
			className={clsx(s.button, s[size])}
			onClick={() => {
				onClick()
			}}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default RedButton
