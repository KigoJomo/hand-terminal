import '../global.css'

import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { vars } from 'nativewind'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
	AppThemeProvider,
	useAppColorScheme,
	useAppThemeVariables,
} from '../src/theme/use-app-theme'

function RootNavigator() {
	const colorScheme = useAppColorScheme()
	const themeVariables = useAppThemeVariables()

	return (
		<View className="flex-1 bg-background" style={vars(themeVariables)}>
			<SafeAreaProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(drawer)" />
				</Stack>
				<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
			</SafeAreaProvider>
		</View>
	)
}

export default function RootLayout() {
	return (
		<AppThemeProvider>
			<RootNavigator />
		</AppThemeProvider>
	)
}
