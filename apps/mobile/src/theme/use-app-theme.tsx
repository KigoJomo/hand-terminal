import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'
import { useColorScheme } from 'nativewind'

import tokens from './tokens.json'

type AppColorScheme = 'light' | 'dark'
type AppThemePreference = 'system' | 'light' | 'dark'
type ThemeTokens = typeof tokens.light
type ThemeVariables = Record<`--${string}`, string>

type AppThemeContextValue = {
	colorScheme: AppColorScheme
	isHydrated: boolean
	preference: AppThemePreference
	setPreference: (preference: AppThemePreference) => void
}

const APP_THEME_STORAGE_KEY = 'hand-terminal:theme-preference'

const tokenVariableNames = {
	background: '--background',
	foreground: '--foreground',
	card: '--card',
	cardForeground: '--card-foreground',
	popover: '--popover',
	popoverForeground: '--popover-foreground',
	primary: '--primary',
	primaryForeground: '--primary-foreground',
	secondary: '--secondary',
	secondaryForeground: '--secondary-foreground',
	muted: '--muted',
	mutedForeground: '--muted-foreground',
	accent: '--accent',
	accentForeground: '--accent-foreground',
	destructive: '--destructive',
	border: '--border',
	input: '--input',
	ring: '--ring',
} as const satisfies Record<keyof ThemeTokens, `--${string}`>

const AppThemeContext = createContext<AppThemeContextValue | null>(null)

function resolveColorScheme(
	colorScheme: string | null | undefined,
): AppColorScheme {
	return colorScheme === 'dark' ? 'dark' : 'light'
}

function isAppThemePreference(
	value: string | null | undefined,
): value is AppThemePreference {
	return value === 'system' || value === 'light' || value === 'dark'
}

function hexToRgbChannels(hex: string) {
	const value = hex.replace('#', '')

	if (value.length !== 6) {
		throw new Error(`Expected a 6-digit hex color, received "${hex}".`)
	}

	const red = Number.parseInt(value.slice(0, 2), 16)
	const green = Number.parseInt(value.slice(2, 4), 16)
	const blue = Number.parseInt(value.slice(4, 6), 16)

	return `${red} ${green} ${blue}`
}

function createThemeVariables(theme: ThemeTokens): ThemeVariables {
	return Object.fromEntries(
		Object.entries(tokenVariableNames).map(([tokenName, variableName]) => [
			variableName,
			hexToRgbChannels(theme[tokenName as keyof ThemeTokens]),
		]),
	) as ThemeVariables
}

function useAppThemeContext() {
	const context = useContext(AppThemeContext)

	if (!context) {
		throw new Error('App theme hooks must be used within AppThemeProvider.')
	}

	return context
}

const themeVariables = {
	light: createThemeVariables(tokens.light),
	dark: createThemeVariables(tokens.dark),
} as const

export function AppThemeProvider({ children }: PropsWithChildren) {
	const { colorScheme, setColorScheme } = useColorScheme()
	const [preference, setPreferenceState] =
		useState<AppThemePreference>('system')
	const [isHydrated, setIsHydrated] = useState(false)

	useEffect(() => {
		let isCancelled = false

		void AsyncStorage.getItem(APP_THEME_STORAGE_KEY)
			.then((storedPreference) => {
				if (!isCancelled && isAppThemePreference(storedPreference)) {
					setPreferenceState(storedPreference)
				}
			})
			.finally(() => {
				if (!isCancelled) {
					setIsHydrated(true)
				}
			})

		return () => {
			isCancelled = true
		}
	}, [])

	useEffect(() => {
		setColorScheme(preference)
	}, [preference, setColorScheme])

	const handleSetPreference = (nextPreference: AppThemePreference) => {
		setPreferenceState(nextPreference)
		void AsyncStorage.setItem(APP_THEME_STORAGE_KEY, nextPreference)
	}

	return (
		<AppThemeContext.Provider
			value={{
				colorScheme: resolveColorScheme(colorScheme),
				isHydrated,
				preference,
				setPreference: handleSetPreference,
			}}>
			{children}
		</AppThemeContext.Provider>
	)
}

export function useAppColorScheme() {
	return useAppThemeContext().colorScheme
}

export function useAppThemePreference() {
	return useAppThemeContext().preference
}

export function useAppThemeController() {
	return useAppThemeContext()
}

export function useAppTheme() {
	const colorScheme = useAppColorScheme()

	return colorScheme === 'dark' ? tokens.dark : tokens.light
}

export function useAppThemeVariables() {
	const colorScheme = useAppColorScheme()

	return colorScheme === 'dark' ? themeVariables.dark : themeVariables.light
}

export type { AppColorScheme, AppThemePreference }
