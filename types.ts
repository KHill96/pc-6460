export interface Story {
    id: string
    title: string
    author: string
    text: string
    description: string
    cover_url: string
    epub_url: string
    pdf_url: string
}

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?:string;
}