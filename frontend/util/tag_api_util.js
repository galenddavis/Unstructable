
export const createTag = (tag) => (
    $.ajax({
        method: 'POST',
        url: '/api/tags',
        data: {tag}
    })
)