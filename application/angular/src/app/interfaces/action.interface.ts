export interface Action {
    id: number;
    slug: string;
    name: string;
    created_at: string;
    updated_at: string;
    statistics_count?: number;
}