const Prices = ({ prices }: { prices: { title: string, value: string }[] }) => (
    <div className="text-primary">
        <ul className="menu p-4 rounded-lg bg-secondary text-primary">
            <h3 className=" font-serif text-2xl mb-2">Preços</h3>
            {prices.map((price, i) => (
                <div className="flex p-2  text-neutral-500 gap-4 border-b border-b-yellow first:border-t first:border-t-yellow" key={i}>
                    <div className="text-md text-primary">{price.title}</div>
                    <div className="text-md text-primary">{price.value}</div>
                </div>
            ))}
            <button className="btn btn-accent text-white mt-4 btn-md">Agendar Avaliação</button>
        </ul>
    </div>
)

export default Prices