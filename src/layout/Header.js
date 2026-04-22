export function mountHeader(selector = '#header-mount') {
  const el = document.querySelector(selector)
  if (!el) return

  el.innerHTML = `
    <header class="border-b border-gray-200 px-6 py-4">
      <div class="mx-auto flex max-w-5xl items-center justify-between">
        <a href="/" class="text-lg font-semibold text-gray-900">Westman</a>
        <nav class="flex gap-6 text-sm text-gray-600">
          <a href="/" class="hover:text-gray-900 transition-colors">Home</a>
          <a href="/src/pages/about/" class="hover:text-gray-900 transition-colors">About</a>
          <a href="/src/pages/contact/" class="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  `
}
