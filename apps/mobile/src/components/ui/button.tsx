import { Pressable, type PressableProps } from 'react-native'

import { Text } from './text'
import { ReactNode } from 'react'

type ButtonProps = PressableProps & {
	label?: string
	children?: ReactNode
	variant?:
		| 'default'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'destructive'
		| 'link'
	size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-lg'
}

const buttonVariants = {
	default: 'border border-transparent bg-primary active:opacity-80',
	outline: 'border border-border bg-input/30 active:bg-input/50',
	secondary: 'border border-foreground/20 bg-secondary active:opacity-80',
	ghost: 'border border-transparent bg-transparent active:bg-muted',
	destructive:
		'border border-transparent bg-destructive/10 active:bg-destructive/20',
	link: 'border border-transparent bg-transparent',
}

const labelVariants = {
	default: 'text-primary-foreground',
	outline: 'text-foreground',
	secondary: 'text-secondary-foreground',
	ghost: 'text-foreground',
	destructive: 'text-destructive',
	link: 'text-primary underline',
}

const buttonSizes = {
	default: 'h-9 px-3',
	xs: 'h-6 px-2.5',
	sm: 'h-8 px-3',
	lg: 'h-14 px-6',
	icon: 'h-9 w-9 px-0',
	'icon-lg': 'h-14 w-14 px-0',
}

const labelSizes = {
	default: 'text-sm',
	xs: 'text-xs',
	sm: 'text-sm',
	lg: 'text-lg',
	icon: 'text-sm',
	'icon-lg': 'text-sm',
}

export function Button({
	label,
	children,
	variant = 'default',
	size = 'default',
	className,
	...props
}: ButtonProps) {
	return (
		<Pressable
			className={`shrink-0 items-center justify-center rounded-4xl active:translate-y-px disabled:opacity-50 ${buttonSizes[size]} ${buttonVariants[variant]} ${className ?? ''}`}
			{...props}>
			{children ?? (
				<Text
					className={`font-medium ${labelSizes[size]} ${labelVariants[variant]}`}>
					{label}
				</Text>
			)}
		</Pressable>
	)
}
