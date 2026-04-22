const variants = {
  primary: 'bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
}

export function Button({ text, variant = 'primary', onClick } = {}) {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.textContent = text
  btn.className = `inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${variants[variant] ?? variants.primary}`
  if (onClick) btn.addEventListener('click', onClick)
  return btn
}
