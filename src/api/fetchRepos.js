const fetchRepos = username => 
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json());

export default fetchRepos;