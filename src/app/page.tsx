import Image from "next/image";
import { navMenuItem } from "@/config/sideNav";
import NavGroup from "@/components/navItem/navGroup";
import SideNav from "@/components/navItem/sideNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@/components/ui/input";
import { navFooterItem } from "@/config/sideNav";
import NavItems from "@/components/navItem/navItems";
import MenuContent from "@/views/menu-content";
import AvatarProfile from "@/components/ui/avatarProfile";
export default function Home() {
	const RenderChildren = () => {
		return (
			<div className="flex flex-col h-[100vh] w-full overflow-y-auto">
				<Input
					type="text"
					placeholder="Search"
					className="pl-[30px]"
					favicon={
						<Icon
							className="w-[20px] h-[20px]"
							icon="ic:round-search"
						/>
					}
				></Input>
				{navMenuItem.map((o, key) => {
					return (
						<div key={key}>
							<NavGroup
								title={
									<div className="text-lg font-semibold text-[15px] gap-[10px] cursor-pointer min-w-[200px] flex items-center">
										<Icon
											className="w-[20px] h-[20px] mb-[3px]"
											icon={
												o.icon
											}
										/>
										<span>
											{
												o.title
											}
										</span>
									</div>
								}
								navChildren={o.children.map(
									(u, key) => {
										return navChildren(
											u.title,
											key
										);
									}
								)}
							></NavGroup>
						</div>
					);
				})}

				<div className="mt-auto">
					{navFooterItem.map(
						(o, key) => {
							return (
								<NavItems
									key={key}
								>
									<Icon
										className="w-[20px] h-[20px] mb-[3px]"
										icon={
											o.icon
										}
									/>
									<span>
										{o.title}
									</span>
								</NavItems>
							);
						}
					)}

					<hr />
					<div className="p-[10px] flex  justify-between gap-[20px]">
						<AvatarProfile src="https://pbs.twimg.com/profile_images/1228384951340535809/YfjXMM4-_400x400.jpg">
							<div>
								<label className="text-secondary">
									Olivia Rhye
								</label>
								<div className="text-[14px]">
									olivia@company.com
								</div>
							</div>
						</AvatarProfile>
						<div className="ml-[20px]">
							<Icon
								className="w-[20px] h-[20px]"
								icon="bi:box-arrow-right"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const navChildren = (
		item: any,
		key: number
	) => {
		return <li key={key}>{item}</li>;
	};
	return (
		<div>
			<SideNav
				menuChildren={<RenderChildren />}
			>
				<MenuContent />
			</SideNav>
		</div>
	);
}
