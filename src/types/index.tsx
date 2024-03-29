export interface Activity {
	id: string;
	name: string;
	description: string;
	teatcher: string;
	schedules: string;
	images: string[];
	videos?: string[];
	activityGroup: string;
}
export interface ActivityGroups {
	id: string | number;
	title: string;
	image: string | string[];
}

export interface TermGroups {
	id: string;
	terms: {
		title: string
		value: string
	}[]
}

export interface PlanType {
	id: string
	title: string
	disclaimer?: string
}

export interface Plans {
	id: string,
	fixed?: boolean
	defaultSelectedPLan?: boolean
	title: string,
	activityGroup: string,
	termsGroup: string,
	planType: string,
	prices:
	{
		title: string
		value: string
	}[],
}

export interface Quote {
	id: string
	excerpt: string
	full?: string
	author: string
	avatar: string
}

export interface Profile {
	whatsapp: string
	instagram: string
	email: string
	address: string
	coordinates: string,
}