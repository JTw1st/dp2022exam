import { Danimals } from "./danimals";
export interface Rest1 {
    _embedded: {
        entity5s: Danimals[]
        },
        _links: {
        self: {
        href: string;
        },
        profile: {
        href: string;
        }
        },
        page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
        }

}