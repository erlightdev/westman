export function mountFooter(selector = '#footer-mount') {
  const el = document.querySelector(selector)
  if (!el) return

  el.innerHTML = `
    <footer class="border-t border-gray-200 px-6 py-6 text-center text-sm text-gray-500">
      <div class="mx-auto max-w-5xl">
        <p>© ${new Date().getFullYear()} Westman. All rights reserved.</p>
      </div>
    </footer>
  `
}
