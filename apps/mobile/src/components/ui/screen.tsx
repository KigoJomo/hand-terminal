import { type PropsWithChildren } from "react";
import { vars } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAppThemeVariables } from "../../theme/use-app-theme";

type ScreenProps = PropsWithChildren<{
  className?: string;
}>;

export function Screen({ children, className }: ScreenProps) {
  const themeVariables = useAppThemeVariables();

  return <SafeAreaView className={`flex-1 bg-background px-6 pt-6 ${className ?? ""}`} style={vars(themeVariables)}>{children}</SafeAreaView>;
}
