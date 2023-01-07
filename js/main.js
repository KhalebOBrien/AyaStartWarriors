axios.defaults.baseURL = 'https://swapi.dev/api'

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const people = async (page = 1) => {
      try {
        const response = await axios.get(`/people/?page=${page}`)
        if (!response.data) return { code: 500 }

        let content = ""
        response.data.results.map(item => {
          content += `<div class="content"><div><img src="https://via.placeholder.com/100x100.png/E7EAF4/262626?text=${item.name.split(' ').at(0)}" class="image"></div><div class="name">${item.name}</div><div class="data-box" style="display:none;"><b>Name:</b> ${item.name}<br><b>Gender:</b> ${item.gender}<br><b>Height:</b> ${item.height}</div></div>`
        })
        
        document.getElementById('loading').style = 'display:none'
        document.getElementById('main').innerHTML += content

        const names = document.querySelectorAll('.name')
        names.forEach(box => {
          box.addEventListener('click', (event) => {
            box.closest('div.content').querySelector('.data-box').removeAttribute('style')
            box.setAttribute('style', 'display:none;')
          });
        });
        return { code: 200 }
      } catch (error) {
        console.error(error)
      }
    }

    people(1)

  }
}
