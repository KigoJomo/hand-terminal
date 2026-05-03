import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer'
import { View } from 'react-native'
import { vars } from 'nativewind'

import { Button } from '../ui/button'
import { Text } from '../ui/text'
import { useAppTheme, useAppThemeVariables } from '../../theme/use-app-theme'
import {
	IconFolderPlus,
	IconPencilPlus,
	IconSettings2,
	IconTerminal,
} from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'

export function CustomDrawerContent(props: DrawerContentComponentProps) {
	const theme = useAppTheme()
	const themeVariables = useAppThemeVariables()
	const router = useRouter()

	return (
		<View className="flex-1 bg-popover" style={vars(themeVariables)}>
			<DrawerContentScrollView {...props}>
				<View className="flex-row items-center justify-between gap-4">
					<View className="flex-row items-center gap-4 px-4 py-4">
						<IconTerminal color={theme.mutedForeground} size={32} />
						<Text variant="subtitle">HandTerminal</Text>
					</View>

					<Button
						variant="secondary"
						size="icon-lg"
						className="!flex-shrink-0"
						onPress={() => router.navigate('/(drawer)/settings')}>
						<IconSettings2 color={theme.foreground} size={20} />
					</Button>
				</View>

				<Button
					variant="ghost"
					size="lg"
					className="flex-row !justify-start gap-4">
					<IconFolderPlus color={theme.foreground} />
					<Text>New Project</Text>
				</Button>

				{/* <DrawerItemList {...props} /> */}
			</DrawerContentScrollView>

			<View className="pb-8 px-4 w-full items-end">
				<Button
					variant="default"
					size="icon-lg"
					accessibilityLabel="Start new chat"
					accessibilityRole="button"
				onPress={() => router.navigate("/(drawer)")}>
					<IconPencilPlus color={theme.primaryForeground} size={20} />
				</Button>
			</View>
		</View>
	)
}
