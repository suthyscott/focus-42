console.log("Connected to addTask")
const form = document.getElementById("task-form")
const taskName = document.getElementById('task-name')
const taskDate = document.getElementById('task-date')
const taskDesc = document.getElementById('task-desc')

const addTask = (e) => {
    e.preventDefault()
    let newTask = {
        name: taskName.value,
        date: taskDate.value,
        description: taskDesc.value
    }
    console.log(newTask)
    axios.post('http://localhost:4000/api/addTask', newTask)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

form.addEventListener('submit', addTask)