const Curves = ({ color = "primary" }: { color?: 'primary' | 'secondary' }) => {

	switch (color) {
		case "primary":
			return <div className={`w-full bg-[url('/curve.svg')] h-10`}></div>
		case "secondary":
			return <div className={`w-full bg-[url('/curve-secondary.svg')] h-10`}></div>

	}
}

export default Curves