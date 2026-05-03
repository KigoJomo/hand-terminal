'use client'

import * as React from 'react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
} from 'recharts'
import { toast } from 'sonner'
import {
	IconAlertTriangle,
	IconArrowRight,
	IconBell,
	IconCalendar,
	IconChartBar,
	IconCheck,
	IconChevronDown,
	IconCirclePlus,
	IconClock,
	IconCommand,
	IconCreditCard,
	IconDatabase,
	IconDots,
	IconDownload,
	IconFileInvoice,
	IconFilter,
	IconHome,
	IconInbox,
	IconLayoutDashboard,
	IconMail,
	IconMenu2,
	IconMessage,
	IconMoon,
	IconPlayerPlay,
	IconSearch,
	IconSettings,
	IconShieldCheck,
	IconSparkles,
	IconTerminal,
	IconTrash,
	IconUser,
	IconUsers,
} from '@tabler/icons-react'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from '@/components/ui/alert'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
	ButtonGroup,
	ButtonGroupSeparator,
	ButtonGroupText,
} from '@/components/ui/button-group'
import { Calendar } from '@/components/ui/calendar'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from '@/components/ui/chart'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from '@/components/ui/command'
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList,
} from '@/components/ui/combobox'
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { DirectionProvider } from '@/components/ui/direction'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Empty,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@/components/ui/empty'
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
} from '@/components/ui/field'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Input } from '@/components/ui/input'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from '@/components/ui/input-group'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemFooter,
	ItemGroup,
	ItemHeader,
	ItemMedia,
	ItemSeparator,
	ItemTitle,
} from '@/components/ui/item'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Label } from '@/components/ui/label'
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from '@/components/ui/menubar'
import {
	NativeSelect,
	NativeSelectOptGroup,
	NativeSelectOption,
} from '@/components/ui/native-select'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination'
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { Switch } from '@/components/ui/switch'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Toaster } from '@/components/ui/sonner'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'

const chartData = [
	{ day: 'Mon', leads: 18, demos: 7 },
	{ day: 'Tue', leads: 24, demos: 10 },
	{ day: 'Wed', leads: 21, demos: 8 },
	{ day: 'Thu', leads: 29, demos: 14 },
	{ day: 'Fri', leads: 34, demos: 16 },
	{ day: 'Sat', leads: 19, demos: 6 },
]

const chartConfig = {
	leads: { label: 'Leads', color: 'var(--chart-2)' },
	demos: { label: 'Demos', color: 'var(--chart-4)' },
} satisfies ChartConfig

const accounts = ['Safaricom', 'KCB Group', 'Naivas', 'Twiga Foods']
const sidebarItems = [
	{ label: 'Overview', icon: IconLayoutDashboard, count: '12' },
	{ label: 'Pipeline', icon: IconChartBar, count: '8' },
	{ label: 'Inbox', icon: IconInbox, count: '3' },
]
const metricCards = [
	{ label: 'Qualified leads', value: '126', delta: '+18%', icon: IconUsers },
	{ label: 'Demo bookings', value: '42', delta: '+9%', icon: IconCalendar },
	{ label: 'Open tasks', value: '17', delta: '-4%', icon: IconClock },
]
const invoices = [
	{ id: 'INV-1042', client: 'Safaricom', status: 'Paid', amount: '$8,420' },
	{ id: 'INV-1043', client: 'KCB Group', status: 'Pending', amount: '$3,980' },
	{ id: 'INV-1044', client: 'Twiga Foods', status: 'Draft', amount: '$1,260' },
]

export function ComponentShowcase() {
	const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 4, 1))
	const [priority, setPriority] = React.useState('medium')
	const [confidence, setConfidence] = React.useState([68])
	const [otp, setOtp] = React.useState('123456')
	const [notifications, setNotifications] = React.useState(true)
	const [compact, setCompact] = React.useState(false)

	return (
		<SidebarProvider>
			<Toaster richColors />
			<Sidebar variant="inset" collapsible="icon">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" isActive tooltip="HandTerminal">
								<IconTerminal />
								<span>HandTerminal</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
					<SidebarInput placeholder="Search workspace" />
				</SidebarHeader>
				<SidebarSeparator />
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Workspace</SidebarGroupLabel>
						<SidebarGroupAction aria-label="Add view">
							<IconCirclePlus />
						</SidebarGroupAction>
						<SidebarGroupContent>
							<SidebarMenu>
								{sidebarItems.map(({ label, icon: Icon, count }, index) => (
									<SidebarMenuItem key={label}>
										<SidebarMenuButton isActive={index === 0} tooltip={label}>
											<Icon />
											<span>{label}</span>
										</SidebarMenuButton>
										<SidebarMenuBadge>{count}</SidebarMenuBadge>
										<SidebarMenuAction showOnHover aria-label="More actions">
											<IconDots />
										</SidebarMenuAction>
									</SidebarMenuItem>
								))}
								<SidebarMenuItem>
									<SidebarMenuButton tooltip="Settings">
										<IconSettings />
										<span>Settings</span>
									</SidebarMenuButton>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#" isActive>
												<span>Team roles</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>Billing</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</SidebarMenuItem>
								<div className="flex h-8 items-center gap-2 rounded-md px-2">
									<Skeleton className="size-4 rounded-md" />
									<Skeleton className="h-4 w-2/3" />
								</div>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<Avatar className="size-8">
						<AvatarFallback>KG</AvatarFallback>
						<AvatarBadge />
					</Avatar>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>

			<SidebarInset>
				<header className="sticky top-0 z-20 flex min-h-14 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
					<SidebarTrigger />
					<Separator orientation="vertical" className="h-6" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Apps</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbEllipsis />
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Website UI</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className="ml-auto flex items-center gap-2">
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon-sm"
									aria-label="Notifications">
									<IconBell />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Notifications</TooltipContent>
						</Tooltip>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" size="sm">
									<IconUser data-icon="inline-start" />
									Kigo
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Account</DropdownMenuLabel>
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<IconUser /> Profile{' '}
										<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<IconCreditCard /> Billing
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuCheckboxItem
									checked={compact}
									onCheckedChange={setCompact}>
									Compact mode
								</DropdownMenuCheckboxItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
									<DropdownMenuSubContent>
										<DropdownMenuRadioGroup value="system">
											<DropdownMenuRadioItem value="light">
												Light
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="dark">
												Dark
											</DropdownMenuRadioItem>
											<DropdownMenuRadioItem value="system">
												System
											</DropdownMenuRadioItem>
										</DropdownMenuRadioGroup>
									</DropdownMenuSubContent>
								</DropdownMenuSub>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>

				<main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 p-4 md:p-6">
					<section className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
						<Card>
							<CardHeader>
								<CardTitle>Presales command center</CardTitle>
								<CardDescription>
									Functional examples for the website UI components.
								</CardDescription>
								<CardAction>
									<Badge variant="secondary">Live demo</Badge>
								</CardAction>
							</CardHeader>
							<CardContent className="grid gap-4 md:grid-cols-3">
								{metricCards.map(({ label, value, delta, icon: Icon }) => (
									<div key={label} className="rounded-lg border p-4">
										<div className="flex items-center justify-between text-sm text-muted-foreground">
											<span>{label}</span>
											<Icon className="size-4" />
										</div>
										<div className="mt-3 flex items-end justify-between">
											<strong className="text-3xl">{value}</strong>
											<Badge variant="outline">{delta}</Badge>
										</div>
									</div>
								))}
							</CardContent>
							<CardFooter className="flex-wrap gap-2">
								<Button onClick={() => toast.success('Demo scheduled')}>
									<IconPlayerPlay data-icon="inline-start" />
									Schedule demo
								</Button>
								<Button variant="outline">
									<IconDownload data-icon="inline-start" />
									Export
								</Button>
								<Button variant="ghost">View report</Button>
							</CardFooter>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Team</CardTitle>
								<CardDescription>
									Avatar, hover card, progress, switch, and slider.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5">
								<HoverCard>
									<HoverCardTrigger asChild>
										<Button variant="outline">Inspect account owner</Button>
									</HoverCardTrigger>
									<HoverCardContent>
										<div className="flex gap-3">
											<Avatar>
												<AvatarFallback>AK</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium">Amina Kariuki</p>
												<p className="text-sm text-muted-foreground">
													Enterprise AE, Nairobi
												</p>
											</div>
										</div>
									</HoverCardContent>
								</HoverCard>
								<AvatarGroup>
									<Avatar>
										<AvatarFallback>KG</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarFallback>AK</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarFallback>SM</AvatarFallback>
									</Avatar>
									<AvatarGroupCount>+6</AvatarGroupCount>
								</AvatarGroup>
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span>Forecast confidence</span>
										<span>{confidence[0]}%</span>
									</div>
									<Slider
										value={confidence}
										onValueChange={setConfidence}
										max={100}
										step={1}
									/>
									<Progress value={confidence[0]} />
								</div>
								<Field orientation="horizontal">
									<Switch
										checked={notifications}
										onCheckedChange={setNotifications}
										id="notifications"
									/>
									<FieldContent>
										<FieldLabel htmlFor="notifications">
											Notify on new replies
										</FieldLabel>
										<FieldDescription>
											Email and in-app alerts are enabled.
										</FieldDescription>
									</FieldContent>
								</Field>
							</CardContent>
						</Card>
					</section>

					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Modules</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[420px] gap-3 p-4 md:grid-cols-2">
										<NavigationMenuLink
											className="rounded-lg p-3 hover:bg-muted"
											href="#">
											Pipeline
										</NavigationMenuLink>
										<NavigationMenuLink
											className="rounded-lg p-3 hover:bg-muted"
											href="#">
											Approvals
										</NavigationMenuLink>
										<NavigationMenuLink
											className="rounded-lg p-3 hover:bg-muted"
											href="#">
											Invoices
										</NavigationMenuLink>
										<NavigationMenuLink
											className="rounded-lg p-3 hover:bg-muted"
											href="#">
											Reports
										</NavigationMenuLink>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									className="rounded-md px-4 py-2 text-sm"
									href="#">
									Docs
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuIndicator />
						</NavigationMenuList>
						<NavigationMenuViewport />
					</NavigationMenu>

					<section className="grid gap-4 xl:grid-cols-[1fr_420px]">
						<Card>
							<CardHeader>
								<CardTitle>Pipeline analytics</CardTitle>
								<CardDescription>
									Chart, tabs, resizable panels, and scroll area.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Tabs defaultValue="area">
									<TabsList>
										<TabsTrigger value="area">Area</TabsTrigger>
										<TabsTrigger value="line">Line</TabsTrigger>
										<TabsTrigger value="layout">Layout</TabsTrigger>
									</TabsList>
									<TabsContent value="area" className="mt-4">
										<ChartContainer
											config={chartConfig}
											className="h-72 w-full">
											<AreaChart data={chartData}>
												<CartesianGrid vertical={false} />
												<XAxis
													dataKey="day"
													tickLine={false}
													axisLine={false}
												/>
												<ChartTooltip content={<ChartTooltipContent />} />
												<ChartLegend content={<ChartLegendContent />} />
												<Area
													dataKey="leads"
													type="monotone"
													fill="var(--color-leads)"
													stroke="var(--color-leads)"
													fillOpacity={0.35}
												/>
												<Area
													dataKey="demos"
													type="monotone"
													fill="var(--color-demos)"
													stroke="var(--color-demos)"
													fillOpacity={0.2}
												/>
											</AreaChart>
										</ChartContainer>
									</TabsContent>
									<TabsContent value="line" className="mt-4">
										<ChartContainer
											config={chartConfig}
											className="h-72 w-full">
											<LineChart data={chartData}>
												<CartesianGrid vertical={false} />
												<XAxis
													dataKey="day"
													tickLine={false}
													axisLine={false}
												/>
												<ChartTooltip
													content={<ChartTooltipContent indicator="line" />}
												/>
												<Line
													dataKey="leads"
													stroke="var(--color-leads)"
													strokeWidth={2}
												/>
												<Line
													dataKey="demos"
													stroke="var(--color-demos)"
													strokeWidth={2}
												/>
											</LineChart>
										</ChartContainer>
									</TabsContent>
									<TabsContent value="layout" className="mt-4">
										<ResizablePanelGroup
											orientation="horizontal"
											className="min-h-56 rounded-lg border">
											<ResizablePanel defaultSize={55} className="p-4">
												<ScrollArea className="h-48">
													<div className="space-y-3 pr-4">
														{accounts.map((account) => (
															<Item key={account}>
																<ItemMedia variant="icon">
																	<IconDatabase />
																</ItemMedia>
																<ItemContent>
																	<ItemTitle>{account}</ItemTitle>
																	<ItemDescription>
																		Account research and next best action.
																	</ItemDescription>
																</ItemContent>
															</Item>
														))}
													</div>
													<ScrollBar />
												</ScrollArea>
											</ResizablePanel>
											<ResizableHandle withHandle />
											<ResizablePanel defaultSize={45} className="p-4">
												<Empty>
													<EmptyHeader>
														<EmptyMedia variant="icon">
															<IconInbox />
														</EmptyMedia>
														<EmptyTitle>No blockers</EmptyTitle>
														<EmptyDescription>
															Tasks are waiting for the next sync.
														</EmptyDescription>
													</EmptyHeader>
												</Empty>
											</ResizablePanel>
										</ResizablePanelGroup>
									</TabsContent>
								</Tabs>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Lead intake</CardTitle>
								<CardDescription>
									Field, input, select, combobox, calendar, OTP, and validation
									states.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<FieldSet>
									<FieldLegend>Opportunity details</FieldLegend>
									<FieldGroup>
										<Field>
											<FieldLabel htmlFor="company">Company</FieldLabel>
											<Input id="company" defaultValue="Sancom Limited" />
										</Field>
										<Field>
											<FieldLabel htmlFor="value">Deal value</FieldLabel>
											<InputGroup>
												<InputGroupAddon>
													<InputGroupText>USD</InputGroupText>
												</InputGroupAddon>
												<InputGroupInput id="value" defaultValue="12000" />
												<InputGroupAddon align="inline-end">
													<InputGroupButton>Apply</InputGroupButton>
												</InputGroupAddon>
											</InputGroup>
										</Field>
										<Field>
											<FieldLabel>Account</FieldLabel>
											<Combobox items={accounts}>
												<ComboboxInput
													placeholder="Search accounts"
													showClear
												/>
												<ComboboxContent>
													<ComboboxLabel>Accounts</ComboboxLabel>
													<ComboboxList>
														<ComboboxEmpty>No account found.</ComboboxEmpty>
														{accounts.map((account) => (
															<ComboboxItem key={account} value={account}>
																{account}
															</ComboboxItem>
														))}
													</ComboboxList>
												</ComboboxContent>
											</Combobox>
										</Field>
										<Field orientation="responsive">
											<FieldContent>
												<FieldLabel>Priority</FieldLabel>
												<FieldDescription>
													Used for SLA routing.
												</FieldDescription>
											</FieldContent>
											<Select value={priority} onValueChange={setPriority}>
												<SelectTrigger className="w-40">
													<SelectValue placeholder="Priority" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Priority</SelectLabel>
														<SelectItem value="low">Low</SelectItem>
														<SelectItem value="medium">Medium</SelectItem>
														<SelectSeparator />
														<SelectItem value="high">High</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</Field>
										<Field>
											<FieldLabel>Native region</FieldLabel>
											<NativeSelect defaultValue="ke">
												<NativeSelectOptGroup label="East Africa">
													<NativeSelectOption value="ke">
														Kenya
													</NativeSelectOption>
													<NativeSelectOption value="ug">
														Uganda
													</NativeSelectOption>
												</NativeSelectOptGroup>
											</NativeSelect>
										</Field>
										<Field>
											<FieldLabel>One-time approval code</FieldLabel>
											<InputOTP maxLength={6} value={otp} onChange={setOtp}>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
												</InputOTPGroup>
												<InputOTPSeparator />
												<InputOTPGroup>
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</Field>
										<Field data-invalid="true">
											<FieldLabel htmlFor="notes">Notes</FieldLabel>
											<InputGroup>
												<InputGroupAddon
													align="block-start"
													className="border-b">
													<InputGroupText>
														<IconMessage /> Discovery notes
													</InputGroupText>
												</InputGroupAddon>
												<InputGroupTextarea
													id="notes"
													aria-invalid
													defaultValue="Budget confirmed, timeline not captured."
												/>
											</InputGroup>
											<FieldError>
												Timeline is required before handoff.
											</FieldError>
										</Field>
									</FieldGroup>
									<FieldSeparator>meeting date</FieldSeparator>
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										className="rounded-lg border"
									/>
								</FieldSet>
							</CardContent>
						</Card>
					</section>

					<section className="grid gap-4 lg:grid-cols-3">
						<Card className="lg:col-span-2">
							<CardHeader>
								<CardTitle>Invoices</CardTitle>
								<CardDescription>
									Table, badge, checkbox, pagination, and context menu.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ContextMenu>
									<ContextMenuTrigger asChild>
										<div className="rounded-lg border">
											<Table>
												<TableCaption>
													Recent commercial documents.
												</TableCaption>
												<TableHeader>
													<TableRow>
														<TableHead className="w-10">
															<Checkbox aria-label="Select all" />
														</TableHead>
														<TableHead>Invoice</TableHead>
														<TableHead>Client</TableHead>
														<TableHead>Status</TableHead>
														<TableHead className="text-right">Amount</TableHead>
													</TableRow>
												</TableHeader>
												<TableBody>
													{invoices.map((invoice) => (
														<TableRow key={invoice.id}>
															<TableCell>
																<Checkbox aria-label={`Select ${invoice.id}`} />
															</TableCell>
															<TableCell className="font-medium">
																{invoice.id}
															</TableCell>
															<TableCell>{invoice.client}</TableCell>
															<TableCell>
																<Badge variant="outline">
																	{invoice.status}
																</Badge>
															</TableCell>
															<TableCell className="text-right">
																{invoice.amount}
															</TableCell>
														</TableRow>
													))}
												</TableBody>
												<TableFooter>
													<TableRow>
														<TableCell colSpan={4}>Total</TableCell>
														<TableCell className="text-right">
															$13,660
														</TableCell>
													</TableRow>
												</TableFooter>
											</Table>
										</div>
									</ContextMenuTrigger>
									<ContextMenuContent>
										<ContextMenuLabel>Invoice actions</ContextMenuLabel>
										<ContextMenuItem>
											<IconFileInvoice /> Open{' '}
											<ContextMenuShortcut>⌘O</ContextMenuShortcut>
										</ContextMenuItem>
										<ContextMenuSub>
											<ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
											<ContextMenuSubContent>
												<ContextMenuItem>Email link</ContextMenuItem>
												<ContextMenuItem>Copy URL</ContextMenuItem>
											</ContextMenuSubContent>
										</ContextMenuSub>
										<ContextMenuSeparator />
										<ContextMenuCheckboxItem checked>
											Show paid
										</ContextMenuCheckboxItem>
										<ContextMenuRadioGroup value="pdf">
											<ContextMenuRadioItem value="pdf">
												PDF
											</ContextMenuRadioItem>
											<ContextMenuRadioItem value="csv">
												CSV
											</ContextMenuRadioItem>
										</ContextMenuRadioGroup>
									</ContextMenuContent>
								</ContextMenu>
								<Pagination className="mt-4">
									<PaginationContent>
										<PaginationItem>
											<PaginationPrevious href="#" />
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#" isActive>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink href="#">2</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationEllipsis />
										</PaginationItem>
										<PaginationItem>
											<PaginationNext href="#" />
										</PaginationItem>
									</PaginationContent>
								</Pagination>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Workflow actions</CardTitle>
								<CardDescription>
									Dialog, alert dialog, drawer, sheet, popover, toggles, and
									menus.
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-wrap gap-2">
								<Dialog>
									<DialogTrigger asChild>
										<Button>Open dialog</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Create proposal</DialogTitle>
											<DialogDescription>
												Package discovery notes into a proposal draft.
											</DialogDescription>
										</DialogHeader>
										<Textarea defaultValue="Include scope, commercial terms, and deployment timeline." />
										<DialogFooter>
											<Button>Generate</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button variant="destructive">Delete lead</Button>
									</AlertDialogTrigger>
									<AlertDialogContent>
										<AlertDialogHeader>
											<AlertDialogMedia>
												<IconAlertTriangle />
											</AlertDialogMedia>
											<AlertDialogTitle>Delete this lead?</AlertDialogTitle>
											<AlertDialogDescription>
												This removes the record from the active pipeline.
											</AlertDialogDescription>
										</AlertDialogHeader>
										<AlertDialogFooter>
											<AlertDialogCancel>Cancel</AlertDialogCancel>
											<AlertDialogAction>Delete</AlertDialogAction>
										</AlertDialogFooter>
									</AlertDialogContent>
								</AlertDialog>
								<Drawer>
									<DrawerTrigger asChild>
										<Button variant="outline">Drawer</Button>
									</DrawerTrigger>
									<DrawerContent>
										<DrawerHeader>
											<DrawerTitle>Deal review</DrawerTitle>
											<DrawerDescription>
												Confirm the next decision checkpoint.
											</DrawerDescription>
										</DrawerHeader>
										<DrawerFooter>
											<Button>Approve</Button>
											<DrawerClose asChild>
												<Button variant="outline">Close</Button>
											</DrawerClose>
										</DrawerFooter>
									</DrawerContent>
								</Drawer>
								<Sheet>
									<SheetTrigger asChild>
										<Button variant="outline">
											<IconMenu2 /> Sheet
										</Button>
									</SheetTrigger>
									<SheetContent>
										<SheetHeader>
											<SheetTitle>Filters</SheetTitle>
											<SheetDescription>
												Refine accounts by owner and stage.
											</SheetDescription>
										</SheetHeader>
										<div className="grid gap-3 px-4">
											<Label htmlFor="filter">Keyword</Label>
											<Input id="filter" placeholder="Search filters" />
										</div>
										<SheetFooter>
											<Button>Apply filters</Button>
										</SheetFooter>
									</SheetContent>
								</Sheet>
								<Popover>
									<PopoverTrigger asChild>
										<Button variant="outline">Popover</Button>
									</PopoverTrigger>
									<PopoverContent>
										<PopoverHeader>
											<PopoverTitle>Quick note</PopoverTitle>
											<PopoverDescription>
												Capture a short update.
											</PopoverDescription>
										</PopoverHeader>
										<Input
											className="mt-3"
											defaultValue="Client asked for M-Pesa integration."
										/>
									</PopoverContent>
								</Popover>
								<ButtonGroup>
									<Button variant="outline" size="sm">
										<IconFilter />
									</Button>
									<ButtonGroupSeparator />
									<ButtonGroupText>Stage</ButtonGroupText>
									<Button variant="outline" size="sm">
										<IconChevronDown />
									</Button>
								</ButtonGroup>
								<Toggle aria-label="Toggle starred">
									<IconSparkles />
								</Toggle>
								<ToggleGroup type="single" defaultValue="week">
									<ToggleGroupItem value="day">Day</ToggleGroupItem>
									<ToggleGroupItem value="week">Week</ToggleGroupItem>
									<ToggleGroupItem value="month">Month</ToggleGroupItem>
								</ToggleGroup>
							</CardContent>
						</Card>
					</section>

					<section className="grid gap-4 lg:grid-cols-3">
						<Card>
							<CardHeader>
								<CardTitle>Command palette</CardTitle>
								<CardDescription>
									Command, keyboard hints, and loading indicators.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<Command className="rounded-lg border">
									<CommandInput placeholder="Type a command..." />
									<CommandList>
										<CommandEmpty>No results found.</CommandEmpty>
										<CommandGroup heading="Suggestions">
											<CommandItem>
												<IconSearch /> Search accounts{' '}
												<CommandShortcut>⌘K</CommandShortcut>
											</CommandItem>
											<CommandItem>
												<IconMail /> Send follow-up
											</CommandItem>
										</CommandGroup>
										<CommandSeparator />
										<CommandGroup heading="System">
											<CommandItem>
												<IconSettings /> Open settings
											</CommandItem>
										</CommandGroup>
									</CommandList>
								</Command>
								<KbdGroup>
									<Kbd>Ctrl</Kbd>
									<Kbd>B</Kbd>
								</KbdGroup>
								<div className="flex items-center gap-3 text-sm text-muted-foreground">
									<Spinner /> Syncing CRM records
								</div>
								<Skeleton className="h-12 w-full" />
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Content blocks</CardTitle>
								<CardDescription>
									Accordion, carousel, aspect ratio, item group, and alert.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<AspectRatio
									ratio={16 / 9}
									className="overflow-hidden rounded-lg border bg-muted">
									<div className="flex size-full items-center justify-center text-sm text-muted-foreground">
										Product walkthrough preview
									</div>
								</AspectRatio>
								<Carousel className="w-full">
									<CarouselContent>
										{['Discovery', 'Proposal', 'Implementation'].map(
											(stage) => (
												<CarouselItem key={stage}>
													<div className="rounded-lg border p-6 text-center font-medium">
														{stage}
													</div>
												</CarouselItem>
											)
										)}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
								<Accordion type="single" collapsible>
									<AccordionItem value="handoff">
										<AccordionTrigger>Handoff checklist</AccordionTrigger>
										<AccordionContent>
											Confirm scope, stakeholders, timeline, and commercials.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
								<Alert>
									<IconShieldCheck />
									<AlertTitle>Ready for review</AlertTitle>
									<AlertDescription>
										All required qualification fields are complete.
									</AlertDescription>
									<AlertAction>
										<Button size="sm" variant="outline">
											Review
										</Button>
									</AlertAction>
								</Alert>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Miscellaneous states</CardTitle>
								<CardDescription>
									Collapsible, radio group, direction provider, separator, and
									item composition.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<Collapsible defaultOpen>
									<CollapsibleTrigger asChild>
										<Button
											variant="outline"
											className="w-full justify-between">
											Qualification summary <IconChevronDown />
										</Button>
									</CollapsibleTrigger>
									<CollapsibleContent className="mt-3 rounded-lg border p-3 text-sm text-muted-foreground">
										Decision maker identified, budget approved, procurement path
										open.
									</CollapsibleContent>
								</Collapsible>
								<RadioGroup defaultValue="email">
									<Field orientation="horizontal">
										<RadioGroupItem value="email" id="email" />
										<FieldLabel htmlFor="email">Email follow-up</FieldLabel>
									</Field>
									<Field orientation="horizontal">
										<RadioGroupItem value="call" id="call" />
										<FieldLabel htmlFor="call">Call follow-up</FieldLabel>
									</Field>
								</RadioGroup>
								<DirectionProvider dir="rtl">
									<div className="rounded-lg border p-3 text-sm">
										مرحبا - RTL layout sample
									</div>
								</DirectionProvider>
								<ItemGroup>
									<Item>
										<ItemHeader>
											<ItemMedia variant="icon">
												<IconHome />
											</ItemMedia>
											<ItemContent>
												<ItemTitle>Westlands site visit</ItemTitle>
												<ItemDescription>Friday, 10:00 AM</ItemDescription>
											</ItemContent>
										</ItemHeader>
										<ItemActions>
											<Button size="sm" variant="outline">
												<IconArrowRight />
											</Button>
										</ItemActions>
										<ItemFooter>
											<Badge variant="secondary">Confirmed</Badge>
										</ItemFooter>
									</Item>
									<ItemSeparator />
									<Item variant="outline">
										<ItemMedia variant="icon">
											<IconMoon />
										</ItemMedia>
										<ItemContent>
											<ItemTitle>After-hours support</ItemTitle>
											<ItemDescription>Premium SLA requested.</ItemDescription>
										</ItemContent>
									</Item>
								</ItemGroup>
								<Separator />
								<div className="flex gap-2">
									<Button size="icon-sm" variant="outline" aria-label="Approve">
										<IconCheck />
									</Button>
									<Button
										size="icon-sm"
										variant="destructive"
										aria-label="Delete">
										<IconTrash />
									</Button>
									<Button size="icon-sm" variant="ghost" aria-label="Command">
										<IconCommand />
									</Button>
								</div>
							</CardContent>
						</Card>
					</section>

					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>File</MenubarTrigger>
							<MenubarContent>
								<MenubarLabel>Workspace</MenubarLabel>
								<MenubarItem>
									New lead <MenubarShortcut>⌘N</MenubarShortcut>
								</MenubarItem>
								<MenubarSub>
									<MenubarSubTrigger>Export</MenubarSubTrigger>
									<MenubarSubContent>
										<MenubarItem>CSV</MenubarItem>
										<MenubarItem>PDF</MenubarItem>
									</MenubarSubContent>
								</MenubarSub>
								<MenubarSeparator />
								<MenubarCheckboxItem checked>Auto save</MenubarCheckboxItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>View</MenubarTrigger>
							<MenubarContent>
								<MenubarRadioGroup value="pipeline">
									<MenubarRadioItem value="pipeline">Pipeline</MenubarRadioItem>
									<MenubarRadioItem value="calendar">Calendar</MenubarRadioItem>
								</MenubarRadioGroup>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}
