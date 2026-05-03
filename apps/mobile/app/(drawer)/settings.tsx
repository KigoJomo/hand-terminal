import { View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import {
	IconMenu3,
	IconMoon,
	IconPlus,
	IconSparkles2,
	IconSun,
} from '@tabler/icons-react-native'

import { Button } from '../../src/components/ui/button'
import { Card, CardContent, CardRow } from '../../src/components/ui/card'
import { Screen } from '../../src/components/ui/screen'
import { Text } from '../../src/components/ui/text'
import {
	ToggleGroup,
	ToggleGroupItem,
} from '../../src/components/ui/toggle-group'
import {
	useAppTheme,
	useAppThemeController,
} from '../../src/theme/use-app-theme'
import { useRouter } from 'expo-router'

export default function SettingsRoute() {
	const theme = useAppTheme()
	const { isHydrated, preference, setPreference } = useAppThemeController()
	const navigation = useNavigation()
	const router = useRouter()

	return (
		<Screen>
			<View className="gap-4">
				<Button
					size="icon-lg"
					variant="secondary"
					accessibilityLabel="Open the navigation menu."
					accessibilityRole="button"
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
					className="absolute right-0 top-0 z-10">
					<IconMenu3 color={theme.mutedForeground} />
				</Button>

				<View className="h-14 justify-center">
					<Text variant="title">Settings</Text>
				</View>

				<Card>
					<CardContent>
						<CardRow className="">
							<View className="gap-0">
								<Text>Devices</Text>
								<Text variant="muted">No devices connected yet.</Text>
							</View>

							<Button
								variant="secondary"
								size="icon"
								onPress={() => router.navigate('/pair')}>
								<IconPlus color={theme.foreground} size={16} />
							</Button>
						</CardRow>
					</CardContent>
				</Card>

				<Text variant="xs" className="px-4">
					User Interface
				</Text>

				<Card>
					<CardContent>
						<CardRow className="border-b border-foreground/10">
							<Text>Theme</Text>

							<ToggleGroup
								type="single"
								value={preference}
								allowEmptySelection={false}
								disabled={!isHydrated}
								onValueChange={(value) => {
									if (
										value === 'system' ||
										value === 'light' ||
										value === 'dark'
									) {
										setPreference(value)
									}
								}}>
								<ToggleGroupItem
									value="system"
									accessibilityLabel="Use the system theme.">
									<IconSparkles2
										color={
											preference === 'system'
												? theme.foreground
												: theme.mutedForeground
										}
										size={18}
									/>
								</ToggleGroupItem>
								<ToggleGroupItem
									value="light"
									accessibilityLabel="Use the light theme.">
									<IconSun
										color={
											preference === 'light'
												? theme.foreground
												: theme.mutedForeground
										}
										size={18}
									/>
								</ToggleGroupItem>
								<ToggleGroupItem
									value="dark"
									accessibilityLabel="Use the dark theme.">
									<IconMoon
										color={
											preference === 'dark'
												? theme.foreground
												: theme.mutedForeground
										}
										size={18}
									/>
								</ToggleGroupItem>
							</ToggleGroup>
						</CardRow>
						<CardRow>
							<Text>Language</Text>
						</CardRow>
					</CardContent>
				</Card>
			</View>
		</Screen>
	)
}
