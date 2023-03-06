// <div>
//    <p>POST.TITLE</p>
//    <textarea>POST.BODY</textarea>
// </div>

// <div> Loading... </div>


async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
        console.log(error)
        return
    }
    const data = await response.json()
    
    generatePosts(data.slice(0, 10))

    removeLoader()
}

async function getComments(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    if (!response.ok) {
        console.log(error)
        return
    }
    const data = await response.json()
}

function generatePosts(posts) {
    posts.forEach(post => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const textarea = document.createElement('textarea')
        const button = document.createElement('button')
        button.onclick = getComments

        p.innerText = post.title
        textarea.innerText = post.body
        textarea.style= 'min-width: 400px; min-height: 100px'
        button.innerText = 'Show comments'

        div.appendChild(p)
        div.appendChild(textarea)
        div.appendChild(button)

        document.body.appendChild(div)
    })
}

getPosts()

function removeLoader() {
    document.body.removeChild(document.getElementById('loading'))
}

