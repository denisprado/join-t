
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useMenuContext } from "@/app/_context/MenuContext";



interface ItemsProps {
	href: string
	label: string
}

interface MenuItemsProps {
	items: ItemsProps[]
}


export function MenuItems({ items }: MenuItemsProps) {
	const path = usePathname()
	const color = "rgb(var(--yellow))"

	const { active, before, setBefore } = useMenuContext()

	const [store, setStore] = useState({ before: before, selected: active, activeColor: color })

	useEffect(() => {
		path === '/' && setBefore && setBefore(0)
		return () => {
			setStore({ before: 0, selected: active, activeColor: color })
		}
	}, [])


	return (
		<ul className="menu sm:menu-horizontal menu-vertical menu-md items-center sm:justify-center lg:justify-end w-full">
			{items.map(({ label, href }, i) => {

				return i > 0 && (
					<li key={i}>
						<Link href={href}
							className="text-xs uppercase font-sans relative"
							onPointerEnter={() => {
								setStore({
									activeColor: color,
									selected: i,
									before: store.before
								})
							}}
							onPointerOut={() => {
								setStore({
									activeColor: color,
									selected: store.before,
									before: store.before
								})
							}}
							key={i}
						><motion.div
							className={"relative px-3 py-2 m-0 font-sans cursor-pointer rounded-full mr-3 "}
							style={{ zIndex: 999 }}
							initial={{
								color:
									i === store.selected ? "rgb(var(--neutral))" : "rgb(var(--yellow))",
							}}
							animate={{
								color:
									i === store.selected ? "rgb(var(--neutral))" : "rgb(var(--yellow))",
							}}
							onTap={() => {
								setStore({
									activeColor: color,
									selected: i,
									before: i,
								})
							}}
							onPointerEnter={() => {
								setStore({
									activeColor: color,
									selected: i,
									before: store.before
								})
							}}
							onPointerOut={() => {
								setStore({
									activeColor: color,
									selected: store.before,
									before: store.before
								})
							}}
						>
								<span
									onPointerEnter={() => {
										setStore({
											activeColor: color,
											selected: i,
											before: store.before
										})
									}}
									onPointerOut={() => {
										setStore({
											activeColor: color,
											selected: store.before,
											before: store.before
										})
									}}
									className="z-10 relative">

									{label}
								</span>

								{i === store.selected && (
									<motion.div
										className={"w-full h-full absolute rounded-full top-0 left-0"}
										layoutId="selected"
										initial={{
											backgroundColor: path !== '/' ? store.activeColor : color,
										}}
										animate={{ backgroundColor: color }}
										onPointerEnter={() => {
											setStore({
												activeColor: color,
												selected: i,
												before: store.before
											})
										}}
										onPointerOut={() => {
											setStore({
												activeColor: color,
												selected: store.before,
												before: store.before
											})
										}}
									/>
								)}
							</motion.div>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}