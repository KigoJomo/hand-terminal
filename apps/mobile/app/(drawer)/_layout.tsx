import { Drawer } from 'expo-router/drawer'
import { useAppTheme } from '../../src/theme/use-app-theme'
import { useWindowDimensions } from 'react-native'
import { CustomDrawerContent } from '../../src/components/drawer/custom-drawer-content'

export default function DrawerLayout() {
	const theme = useAppTheme()
	const { width } = useWindowDimensions()

	return (
		<Drawer
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				headerShown: false,
				drawerType: 'slide',
				swipeEdgeWidth: width,
				drawerStyle: {
					backgroundColor: theme.popover,
					width,
				},
				drawerActiveBackgroundColor: theme.muted,
				drawerActiveTintColor: theme.foreground,
				drawerInactiveTintColor: theme.mutedForeground,
			}}>
		</Drawer>
	)
}
