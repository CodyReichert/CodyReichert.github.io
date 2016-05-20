
const blogContext = require.context('./../posts', true, /\.md$/)

export const blogs = blogContext.keys().map(blogContext).sort((a, b) =>
    // Import blogs and sort them by date (reverse)
    new Date(b.meta.date) - new Date (a.meta.date)
)

export function getBlogById(postId) {
    return blogs.find(b => b.id === postId)
}
