axios.defaults.baseURL = 'https://swapi.dev/api'

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const people = async (page = 1) => {
      try {
        const response = await axios.get(`/people/?page=${page}`)
        if (!response.data) return { code: 500 }

        console.log(response.data.results);
        let content = "";
        response.data.results.map(item => {
          content += `<div class="content"><img src="./imgs/placeholder.png" class="image"><span class="name">${item.name}</span></div>`
        })
        
        document.getElementById('loading').style = 'display:none'
        document.getElementById('main').innerHTML += content
        return { code: 200 }
      } catch (error) {
        console.error(error)
      }
    }

    people(1)
  }
}
