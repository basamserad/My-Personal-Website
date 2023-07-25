export interface Education {
    id: number;
    title: string;
    school: string;
    degree?: string;
    year: string;
}

export interface ContactInfo{
    id: number;
    name: string;
    link: string;
    icon?: string;
}

export interface TechStack{
    id : number;
    title: string;
    logo?: string;
}