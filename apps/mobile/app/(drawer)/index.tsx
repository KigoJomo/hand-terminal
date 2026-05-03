import { View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import { Screen } from '../../src/components/ui/screen'
import { Text } from '../../src/components/ui/text'
import { Button } from '../../src/components/ui/button'
import { IconFolder, IconMenu3, IconTerminal } from '@tabler/icons-react-native'
import { useAppTheme } from '../../src/theme/use-app-theme'

export default function HomeRoute() {
	const navigation = useNavigation()
	const theme = useAppTheme()

	return (
		<Screen>
			<View className="flex-1 items-center justify-center gap-6">
				<View className="absolute top-0 left-0 w-full flex-row items-center justify-between">
					<Button
						variant="secondary"
						size="lg"
						className="flex-row !items-center gap-2">
						<IconFolder color={theme.mutedForeground} size={26} />
						<View className="">
							<Text variant="xs">Project</Text>
							<Text className="!leading-3">Chat Title</Text>
						</View>
					</Button>

					<Button
						size="icon-lg"
						variant="secondary"
						accessibilityLabel="Open the navigation menu."
						accessibilityRole="button"
						onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
						<IconMenu3 color={theme.mutedForeground} />
					</Button>
				</View>

				<IconTerminal color={theme.mutedForeground} size={64} />

				<Text variant="title">HandTerminal</Text>
			</View>
		</Screen>
	)
}
