const fetchUsers = search => 
    fetch(`https://api.github.com/search/users?q=${search}`)
        .then(res => res.json())
        .then(res => res.items || []);

export default fetchUsers;