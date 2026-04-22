import './style.css'
import { mountFooter } from './layout/Footer.js'
import { mountHeader } from './layout/Header.js'
import { Button } from './components/Button.js'

mountHeader()
mountFooter()

document.querySelector('#demo-btn')?.replaceWith(
  Button({ text: 'Click me', onClick: () => alert('Tailwind + Vite working!') }),
)
