import { ReactNode, useState } from 'react'
import { Pressable, type PressableProps } from 'react-native'

import { Text } from './text'

type ToggleVariant = 'default' | 'outline'
type ToggleSize = 'default' | 'sm' | 'lg'

type ToggleProps = PressableProps & {
	children?: ReactNode
	pressed?: boolean
	defaultPressed?: boolean
	onPressedChange?: (pressed: boolean) => void
	variant?: ToggleVariant
	size?: ToggleSize
}

const toggleVariants = {
	default: 'border border-transparent bg-transparent',
	outline: 'border border-border bg-transparent',
}

const toggleSizes = {
	default: 'h-9 min-w-9 px-3',
	sm: 'h-8 min-w-8 px-3',
	lg: 'h-10 min-w-10 px-4',
}

const labelSizes = {
	default: 'text-sm',
	sm: 'text-sm',
	lg: 'text-sm',
}

function renderToggleChildren(children: ReactNode, size: ToggleSize, pressed: boolean) {
	if (typeof children === 'string' || typeof children === 'number') {
		return (
			<Text
				className={`font-medium ${labelSizes[size]} ${
					pressed ? 'text-foreground' : 'text-muted-foreground'
				}`}>
				{children}
			</Text>
		)
	}

	return children
}

export function Toggle({
	children,
	pressed,
	defaultPressed = false,
	onPressedChange,
	variant = 'default',
	size = 'default',
	className,
	disabled,
	accessibilityRole,
	accessibilityState,
	onPress,
	...props
}: ToggleProps) {
	const [uncontrolledPressed, setUncontrolledPressed] = useState(defaultPressed)
	const isPressed = pressed ?? uncontrolledPressed
	const isDisabled = !!disabled
	const selectionState =
		accessibilityRole === 'radio' || accessibilityRole === 'checkbox'
			? { checked: isPressed }
			: { selected: isPressed }

	return (
		<Pressable
			accessibilityRole={accessibilityRole ?? 'button'}
			accessibilityState={{
				...accessibilityState,
				...selectionState,
				disabled: isDisabled,
			}}
			disabled={disabled}
			onPress={(event) => {
				const nextPressed = !isPressed

				if (pressed === undefined) {
					setUncontrolledPressed(nextPressed)
				}

				onPressedChange?.(nextPressed)
				onPress?.(event)
			}}
			className={`shrink-0 flex-row items-center justify-center gap-1 rounded-4xl active:translate-y-px active:bg-muted disabled:opacity-50 ${
				isPressed ? 'bg-muted' : ''
			} ${toggleVariants[variant]} ${toggleSizes[size]} ${className ?? ''}`}
			{...props}>
			{renderToggleChildren(children, size, isPressed)}
		</Pressable>
	)
}

export { toggleVariants }
export type { ToggleProps, ToggleSize, ToggleVariant }
