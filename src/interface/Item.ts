export interface Language {
    name: string;
    url: string;
}

export interface Description {
    description: string;
    language: Language;
}

export interface Item {
    name: string;
    url: string;
}

export interface Language2 {
    name: string;
    url: string;
}

export interface Name {
    language: Language2;
    name: string;
}

export interface Item {
    descriptions: Description[];
    id: number;
    items: Item[];
    name: string;
    names: Name[];
}

