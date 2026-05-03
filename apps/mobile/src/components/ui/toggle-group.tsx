import {
	Children,
	cloneElement,
	createContext,
	isValidElement,
	type ReactElement,
	type ReactNode,
	useContext,
	useState,
} from 'react'
import { View, type ViewProps } from 'react-native'

import {
	Toggle,
	type ToggleProps,
	type ToggleSize,
	type ToggleVariant,
} from './toggle'

type ToggleGroupType = 'single' | 'multiple'
type ToggleGroupOrientation = 'horizontal' | 'vertical'
type ToggleGroupValue = string | string[] | undefined

type ToggleGroupContextValue = {
	allowEmptySelection: boolean
	disabled: boolean
	orientation: ToggleGroupOrientation
	size: ToggleSize
	spacing: number
	type: ToggleGroupType
	value: ToggleGroupValue
	variant: ToggleVariant
	onItemPress: (value: string) => void
}

type ToggleGroupBaseProps = Omit<ViewProps, 'children'> & {
	children?: ReactNode
	disabled?: boolean
	variant?: ToggleVariant
	size?: ToggleSize
	spacing?: number
	orientation?: ToggleGroupOrientation
}

type ToggleGroupSingleProps = ToggleGroupBaseProps & {
	type?: 'single'
	value?: string
	defaultValue?: string
	onValueChange?: (value: string | undefined) => void
	allowEmptySelection?: boolean
}

type ToggleGroupMultipleProps = ToggleGroupBaseProps & {
	type: 'multiple'
	value?: string[]
	defaultValue?: string[]
	onValueChange?: (value: string[]) => void
}

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

type ToggleGroupItemProps = Omit<
	ToggleProps,
	'pressed' | 'defaultPressed' | 'onPressedChange' | 'size' | 'variant'
> & {
	children?: ReactNode
	value: string
	__position?: 'first' | 'middle' | 'last' | 'only'
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null)

function isSingleValue(value: ToggleGroupValue): value is string {
	return typeof value === 'string'
}

function getInitialGroupValue(
	type: ToggleGroupType,
	value: ToggleGroupValue,
): ToggleGroupValue {
	if (type === 'multiple') {
		return Array.isArray(value) ? value : []
	}

	return isSingleValue(value) ? value : undefined
}

function isItemSelected(groupValue: ToggleGroupValue, itemValue: string) {
	return Array.isArray(groupValue)
		? groupValue.includes(itemValue)
		: groupValue === itemValue
}

function getNextValue(
	context: Pick<ToggleGroupContextValue, 'allowEmptySelection' | 'type' | 'value'>,
	itemValue: string,
) {
	const { allowEmptySelection, type, value } = context

	if (type === 'multiple') {
		const values = Array.isArray(value) ? value : []

		return values.includes(itemValue)
			? values.filter((entry) => entry !== itemValue)
			: [...values, itemValue]
	}

	if (value === itemValue && !allowEmptySelection) {
		return value
	}

	return value === itemValue ? undefined : itemValue
}

function getItemPosition(index: number, count: number) {
	if (count === 1) {
		return 'only'
	}

	if (index === 0) {
		return 'first'
	}

	if (index === count - 1) {
		return 'last'
	}

	return 'middle'
}

function getJoinedItemClassName(
	_position: ToggleGroupItemProps['__position'],
	_orientation: ToggleGroupOrientation,
) {
	return 'rounded-3xl'
}

function getJoinedItemBorderClassName(
	position: ToggleGroupItemProps['__position'],
	orientation: ToggleGroupOrientation,
	variant: ToggleVariant,
) {
	if (variant !== 'outline' || position === 'first' || position === 'only') {
		return ''
	}

	return orientation === 'vertical' ? 'border-t-0' : 'border-l-0'
}

function getContainerClassName(
	orientation: ToggleGroupOrientation,
	spacing: number,
) {
	const directionClassName =
		orientation === 'vertical'
			? 'flex-col items-stretch'
			: 'flex-row items-center'
	const joinClassName =
		spacing === 0 ? 'overflow-hidden rounded-4xl' : 'rounded-4xl'

	return `${directionClassName} ${joinClassName} border border-foreground/10 bg-muted p-1`
}

function isControlledValue(props: ToggleGroupProps) {
	return Object.prototype.hasOwnProperty.call(props, 'value')
}

function isToggleGroupMultiple(
	props: ToggleGroupProps,
): props is ToggleGroupMultipleProps {
	return props.type === 'multiple'
}

function isToggleGroupSingle(
	props: ToggleGroupProps,
): props is ToggleGroupSingleProps {
	return props.type !== 'multiple'
}

function getAllowEmptySelection(props: ToggleGroupProps) {
	if (isToggleGroupSingle(props)) {
		return props.allowEmptySelection ?? false
	}

	return true
}

export function ToggleGroup(props: ToggleGroupProps) {
	const {
		children,
		disabled = false,
		variant = 'default',
		size = 'default',
		spacing = 0,
		orientation = 'horizontal',
		className,
		style,
		...viewProps
	} = props
	const type: ToggleGroupType = props.type ?? 'single'
	const allowEmptySelection = getAllowEmptySelection(props)
	const controlled = isControlledValue(props)
	const [uncontrolledValue, setUncontrolledValue] = useState<ToggleGroupValue>(
		getInitialGroupValue(type, props.defaultValue),
	)
	const groupValue = controlled
		? getInitialGroupValue(type, props.value)
		: uncontrolledValue
	const validChildren = Children.toArray(children).filter(isValidElement)

	const handleItemPress = (itemValue: string) => {
		const nextValue = getNextValue(
			{
				allowEmptySelection,
				type,
				value: groupValue,
			},
			itemValue,
		)

		if (!controlled) {
			setUncontrolledValue(nextValue)
		}

		if (isToggleGroupMultiple(props)) {
			props.onValueChange?.(nextValue as string[])
			return
		}

		props.onValueChange?.(nextValue as string | undefined)
	}

	return (
		<ToggleGroupContext.Provider
			value={{
				allowEmptySelection,
				disabled,
				orientation,
				size,
				spacing,
				type,
				value: groupValue,
				variant,
				onItemPress: handleItemPress,
			}}>
			<View
				className={`${getContainerClassName(orientation, spacing)} ${
					disabled ? 'opacity-60' : ''
				} ${className ?? ''}`}
				style={[{ gap: spacing }, style]}
				{...viewProps}>
				{validChildren.map((child, index) =>
					cloneElement(child as ReactElement<ToggleGroupItemProps>, {
						__position: getItemPosition(index, validChildren.length),
					}),
				)}
			</View>
		</ToggleGroupContext.Provider>
	)
}

export function ToggleGroupItem({
	children,
	value,
	disabled,
	className,
	__position = 'only',
	...props
}: ToggleGroupItemProps) {
	const context = useContext(ToggleGroupContext)

	if (!context) {
		throw new Error('ToggleGroupItem must be used within ToggleGroup.')
	}

	const selected = isItemSelected(context.value, value)
	const isDisabled = context.disabled || !!disabled
	const joinedClassName =
		context.spacing === 0
			? getJoinedItemClassName(__position, context.orientation)
			: ''
	const joinedBorderClassName =
		context.spacing === 0
			? getJoinedItemBorderClassName(
					__position,
					context.orientation,
					context.variant,
				)
			: ''
	const stateClassName = selected ? 'border-foreground/50 bg-foreground/20 shadow-sm' : ''

	return (
		<Toggle
			pressed={selected}
			accessibilityRole={context.type === 'single' ? 'radio' : 'checkbox'}
			accessibilityState={{ checked: selected }}
			disabled={isDisabled}
			variant={context.variant}
			size={context.size}
			onPressedChange={() => context.onItemPress(value)}
			className={`${joinedClassName} ${joinedBorderClassName} ${
				context.spacing === 0 ? 'px-3' : ''
			} ${className ?? ''} ${stateClassName}`}
			{...props}>
			{children}
		</Toggle>
	)
}
