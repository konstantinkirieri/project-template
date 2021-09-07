import { renderBlock } from './lib.js'

function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

function getTomorroDate(year, month, day): string {
  const date = new Date(year, month + 1, day + 1);
  const tomY = String(date.getFullYear())
  let tomM = String(date.getMonth())
  if(tomM.length === 1) tomM = '0' + tomM
  let tomD = String(date.getDate())
  if(tomD.length === 1) tomD = '0' + tomD
  return `${tomY + '-' + tomM + '-' + tomD}`
}

export function renderSearchFormBlock (): void {
  const date = new Date()
  let d = String(date.getDate())
  if(d.length === 1) d = '0' + d
  let m = String(date.getMonth() + 1)
  let maxM = String(date.getMonth() + 2)
  if(m.length === 1) m = '0' + m
  if(maxM.length === 1) maxM = '0' + maxM
  const y = String(date.getFullYear())
  const min = `${y + '-' + m + '-' + d}`
  const max = `${y + '-' + maxM + '-' + getLastDayOfMonth(y, m)}`
  const tomorro = getTomorroDate(y, m, d)
  
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
            <input id="check-in-date" type="date" value="${tomorro}" min="${min}" max="${max}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="" min="${min}" max="${max}" name="checkout" />
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
