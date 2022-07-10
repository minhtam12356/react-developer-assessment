import postsJson from "../mock/data.json";

function useCategory(): { categories: string[] } {
    const categories = postsJson.posts.map(post => post.categories.map(category => category.name));
    return {
        categories: [...new Set(categories.flat())]   // Merge duplicate categories
    }
}

export default useCategory