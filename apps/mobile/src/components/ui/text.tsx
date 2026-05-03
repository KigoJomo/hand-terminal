import { Text as NativeText, type TextProps as NativeTextProps } from "react-native";

type TextProps = NativeTextProps & {
  variant?: "title" | "subtitle" | "body" | "muted" | "cardTitle" | "cardDescription" | "xs";
};

const textVariants = {
  title: "text-4xl font-medium text-foreground",
  subtitle: "text-2xl font-medium text-card-foreground",
  body: "text-base text-foreground",
  muted: "text-sm text-muted-foreground",
  xs: "text-xs text-muted-foreground uppercase",
  cardTitle: "text-base font-medium text-card-foreground",
  cardDescription: "text-sm text-muted-foreground"
};

export function Text({ variant = "body", className, ...props }: TextProps) {
  return <NativeText className={`${textVariants[variant]} ${className ?? ""}`} {...props} />;
}
