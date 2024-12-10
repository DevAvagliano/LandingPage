openMenu.addEventListener('click', () => {
  nav_menu.style.display = 'flex'
  nav_menu.style.right = nav_menu.offsetWidth * -1 + 'px'
  openMenu.style.display = 'none'

  setTimeout(() => {
    nav_menu.style.opacity = '1'
    nav_menu.style.right = '0'
  }, 10)
})

closeMenu.addEventListener('click', () => {
  nav_menu.style.opacity = '0'
  nav_menu.style.right = nav_menu.offsetWidth * -1 + 'px'

  setTimeout(() => {
    nav_menu.removeAttribute('style')
    openMenu.removeAttribute('style')
  }, 200)
})

ScrollReveal().reveal('#menu', {
  origin: 'left',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('#cta', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('.services-content', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('.row-card-item', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('.dados-container', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('#testimonial_chef', {
  origin: 'left',
  duration: 2000,
  distance: '20%'
})

ScrollReveal().reveal('#testimonials_content', {
  origin: 'right',
  duration: 2000,
  distance: '20%'
})
