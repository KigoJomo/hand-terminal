import { View, type ViewProps } from 'react-native'

type CardProps = ViewProps & {
	size?: 'default' | 'sm'
}

export function Card({ className, size = 'default', ...props }: CardProps) {
	const sizeClassName = size === 'sm' ? 'gap-4' : 'gap-6'

	return (
		<View
			className={`overflow-hidden rounded-3xl border border-foreground/10 bg-card ${sizeClassName} ${className ?? ''}`}
			{...props}
		/>
	)
}

export function CardHeader({ className, ...props }: ViewProps) {
	return <View className={`gap-2 px-6 ${className ?? ''}`} {...props} />
}

export function CardContent({ className, ...props }: ViewProps) {
	return <View className={`px-0 ${className ?? ''}`} {...props} />
}

export function CardRow({ className, ...props }: ViewProps) {
	return (
		<View
			className={`flex-row items-center justify-between gap-4 px-8 py-6 ${className ?? ''}`}
			{...props}
		/>
	)
}

export function CardFooter({ className, ...props }: ViewProps) {
	return (
		<View
			className={`flex-row items-center px-6 ${className ?? ''}`}
			{...props}
		/>
	)
}
