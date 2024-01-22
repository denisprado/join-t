const ActivitiesMenu = ({ layout = 'vertical' }: { layout: 'vertical' | 'horizontal' }) => {
	const menuLayoutClass = 'menu' + layout
	return (
		<ul className={`menu bg-primary w-56 p-0 [&_li>*]:rounded-none [&_li>*]:border-b [&_li>*]:border-secondary [&_li>*]:font-sans ${menuLayoutClass}`}>
			<li><a>Treinos Individualizados</a></li>
			<li><a>Aulas Especiais</a></li>
			<li><a>Yoga</a></li>
			<li><a>Dança Contemporânea</a></li>
		</ul>
	)
}

export default ActivitiesMenu