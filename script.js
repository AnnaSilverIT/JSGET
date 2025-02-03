const paragraph = document.getElementById('paragraph')

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) =>{
    return response.json()
  })
  .then((data) => {
    console.log(data)
    data.forEach(element => {
      createElement(element.title, element.body)
    });
    return data
    })
    
  .catch((err)=> {
    paragraph.innerHTML = `Ошибка. ${err}`
  })

  function createElement(title, body) {
    let head = document.createElement('h2')
    let titleText = document.createElement('p')
    head.classList.add('html-h2')
    titleText.classList.add('html-p')
    head.textContent = JSON.stringify(title)
    titleText.textContent = JSON.stringify(body)
    let part = document.createElement('div')
    part.append(head, titleText)
    paragraph.append(part)
  }
  createElement()