export interface Post {
    title: string
    description: string
    image: string
    content: string
    tags: string[]
    categories: string[]
    launchDate: Date
    comments: boolean
    slug: string
}