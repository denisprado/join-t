const SkeletonCard = () => {
	return (

		<div className='flex flex-row gap-8 w-full h-96 container'>
			<div className='flex flex-col gap-8 w-full bg-secondary rounded-lg'>
				<div className='flex flex-col gap-4 w-full'>
					<div className="skeleton h-4 w-full"></div>
					<div className="skeleton h-4 w-2/3"></div>
				</div>
				<div className="flex flex-col gap-4 w-full">
					<div className="skeleton h-4 w-2/3"></div>
					<div className="skeleton h-4 w-2/3"></div>
				</div>
			</div>
			<div>
				<div className="skeleton h-96 w-full"></div>
			</div>
		</div>

	)
}

export default SkeletonCard