export interface Activity {
    id: string;
    name: string;
    description: string;
    teatcher: string;
    schedules: string;
    images: string[];
    videos?: string | string[];
    activityGroup: string;
}
export interface ActivityGroups {
    id: string;
    title: string;
    image: string;
}

export interface TermGroups {
    id: string;
    terms: {
        title: string,
        value: string
    }[]
}

export interface PlanType {
    id: string,
    title: string
}

export interface Plans {
    id: string,
    title: string,
    activityGroup: string,
    conditions: string,
    planType: string,
    prices:
    {
        title: string
        value: string
    }[],
}