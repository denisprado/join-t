export default function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
	return array.reduce((grouped, item) => {
		const keyValue = item[key] as string;
		const itemWithoutKey = { ...item };
		

		if (!grouped[keyValue]) {
			grouped[keyValue] = [];
		}

		grouped[keyValue].push(itemWithoutKey);

		return grouped;
	}, {} as Record<string, T[]>);
}