export interface Video {
    id?: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    duration: number;
    author: number;
    level: string;
    githubUrl: string;
    posterUrl: string;
    videoUrl: string;
    datePublished: Date;
    tags: string[];
}
