import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

interface SearchFormData {
  city: string
  checkin: Date
  checkout: Date
  price: number
}

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', '/img/avatar.png')
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
  function search(): void {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      searchItem({
        city: form.city.value,
        checkin: form.checkin.value,
        checkout: form.checkout.value,
        price: +form.price.value
      })
    })
  }
  function searchItem(param: SearchFormData): void {
    console.log(param)
  }
  search()
})
