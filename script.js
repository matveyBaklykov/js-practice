let items = [
  { title: "Batman #1", price: 30, owned: true },
  { title: "Spawn #1", price: 12, owned: false },
  { title: "X-Men #1", price: 45, owned: false },
  { title: "Saga #1", price: 8, owned: true },
];

const list = document.querySelector("#list")
const form = document.querySelector("#form")
const posts = document.querySelector("#posts")

const savedItems = JSON.parse(localStorage.getItem("items"))

function saveItems () {
    localStorage.setItem("items", JSON.stringify(items))
}


if (!savedItems) {
    
    saveItems()
} else {
    items = savedItems
}






form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.target)
    const title  = data.get("title")
    const price = Number(data.get("price")) 

    items.push({
        title: title,
        price: price,
        owned: false
    })
    form.reset()
    saveItems()
    render()
})

function render() {
    list.textContent = ''
    

    for (const item of items) {
        const listItem = document.createElement("li")
        listItem.textContent = `${item.title} ${item.price}€ ${item.owned ? '✓' : ''}`
        list.append(listItem)

        listItem.addEventListener('click', () => {
            item.owned = !item.owned
            saveItems()
            render()
        })
    }
}

async function loadPosts() {
    try {
        posts.textContent = "Загрузка..."
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        posts.textContent = ''
        for (const item of data) {
            const post = document.createElement("li")
            post.textContent = `${item.title} ${item.body}`
            
            posts.append(post)
        }
        


    } catch (error) {
        console.log("Ошибка:", error.message)
        posts.textContent = "Не удалось загрузить данные"
    }
}
render()

loadPosts()


