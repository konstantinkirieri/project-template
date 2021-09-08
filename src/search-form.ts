import { renderBlock } from './lib.js'

export function renderSearchFormBlock (dateStart = '', dateEnd = ''): void {
  const date = new Date()
  const y = String(date.getFullYear())
  const m = String(date.getMonth())
  const d = String(date.getDate())
  const maxM = String(date.getMonth() + 1)

  const min = getDate(y, m, d)
  const max = getDate(y, maxM, getLastDayOfMonth(y, maxM))
  const defaultStart = getDate(y, m, d, 1)
  const defaultEnd = getDate(y, m, d, 3)

  function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0);
    return String(date.getDate());
  }
  
  function getDate(year: string, month: string, day: string, addDay = 0): string {
    const date = new Date(+year, +month, +day + addDay);
    const y = String(date.getFullYear())
    let m = String(date.getMonth() + 1)
    if(m.length === 1) m = '0' + m
    let d = String(date.getDate())
    if(d.length === 1) d = '0' + d
    return `${y + '-' + m + '-' + d}`
  }
  
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateStart ? dateStart : defaultStart}" min="${min}" max="${max}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateEnd ? dateEnd : defaultEnd}" min="${min}" max="${max}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
