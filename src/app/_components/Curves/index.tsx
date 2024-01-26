const Curves = ({ color = "primary" }: { color?: 'primary' | 'primary-revert' | 'secondary' | 'secondary-revert' | 'terciary' }) => {

	switch (color) {
		case "primary":
			return <div className={`w-full bg-[url('/curve.svg')] h-10`}></div>
		case "primary-revert":
			return <div className={`w-full bg-[url('/curve-revert.svg')] h-10`}></div>
		case "secondary":
			return <div className={`w-full bg-[url('/curve-secondary.svg')] h-10`}></div>
		case "secondary-revert":
			return <div className={`w-full bg-[url('/curve-secondary.svg')] h-10 translate-x-full`}></div>
		case "terciary":
			return <div className={`bg-[url('/curve-secondary.svg')] h-10 translate-y-full`}></div>
	}
}

export default Curves