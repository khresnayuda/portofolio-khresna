const yearElement = document.querySelector<HTMLElement>('#tahun')

if (!yearElement) {
  throw new Error('Elemen tahun tidak ditemukan di halaman.')
}

yearElement.textContent = String(new Date().getFullYear())
