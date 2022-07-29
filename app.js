const originalText = document.querySelector('.text')
const readBtn = document.createElement('button')
const textBtn = {
  more: 'Leer más...',
  less: 'Leer menos...'
}

const allWords = originalText.innerText.split(' ')
const shortText = allWords.slice(0, 20).join(' ')

const replaceText = (element, replace) => {
  return (element.innerText = replace)
}

replaceText(originalText, shortText)
replaceText(readBtn, textBtn.more)

originalText.appendChild(readBtn)

readBtn.onclick = () => {
  readBtn.classList.toggle('more')

  if (!readBtn.classList.contains('more')) {
    replaceText(readBtn, textBtn.more)
    replaceText(originalText, shortText)
  } else {
    replaceText(originalText, allWords.join(' '))
    replaceText(readBtn, textBtn.less)
  }
  originalText.appendChild(readBtn)
}
