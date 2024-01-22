export default function GroupPage({ params }: { params: { group: string } }) {
	return <div>My Post: {params.group}</div>
}