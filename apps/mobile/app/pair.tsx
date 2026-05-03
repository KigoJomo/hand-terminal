import { View } from 'react-native'
import { Text } from '../src/components/ui/text'
import { Screen } from '../src/components/ui/screen'
import { Button } from '../src/components/ui/button'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { useAppTheme } from '../src/theme/use-app-theme'
import { useNavigation } from 'expo-router'

export default function PairScreen() {
	const theme = useAppTheme()
	const navigation = useNavigation()

	return (
		<Screen>
			<View className='gap-6'>
				<View className="flex-row items-center justify-center gap-2">
					<Button
						variant="secondary"
            size="icon-lg"
            className='absolute left-0'
						onPress={() => navigation.goBack()}>
						<IconArrowLeft color={theme.foreground} size={24} />
					</Button>
					<Text variant="title">Pairing</Text>
				</View>

				<View className="">
          <Text>Pair your device.</Text>
        </View>
			</View>
		</Screen>
	)
}
