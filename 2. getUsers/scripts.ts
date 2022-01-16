const getUsers = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    // const updatedData = data.map(item => item.name.toLowerCase()).filter(name => name.includes("k"))
    const test = data.map((element) => {
        return {
            name: element.name.toLowerCase(),
            email: element.email
            }
    }).filter(item => item.name.includes("k"))
    
    console.table(test)
}

console.log(getUsers())