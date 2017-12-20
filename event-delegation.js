document.addEventListener('DOMContentLoaded', () => {
  let app = document.getElementById('todo-app')

  app.addEventListener('click', (e) => {
    if(e.target && e.target.className == 'LI') {
      let item = e.target
      alert('You clicked on an item ', + item.innerHTML)
    }
  })
})