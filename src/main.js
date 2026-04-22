import './style.css'
import { Button } from './components/Button.js'

document.querySelector('#demo-btn')?.replaceWith(
  Button({ text: 'Click me', onClick: () => alert('Tailwind + Vite working!') }),
)
