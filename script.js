const items = [
  { title: "Batman #1", price: 30, owned: true },
  { title: "Spawn #1", price: 12, owned: false },
  { title: "X-Men #1", price: 45, owned: false },
  { title: "Saga #1", price: 8, owned: true },
];

function render() {
    const list = document.querySelector("#list");
    list.textContent = ''

    for (const item of items) {
        const li = document.createElement("li")
       

        li.textContent = `${item.title} - ${item.price}€ ${item.owned ? "✓" : ""}`
        list.append(li)

        li.addEventListener("click", () => {
            item.owned = !item.owned;
            render()
        })
        

        
    }

    
}

render();

