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
          content += `<div class="content"><div><img src="https://via.placeholder.com/100x100.png/E7EAF4/262626?text=${item.name}" class="image"></div><div class="name">${item.name}</div></div>`
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
