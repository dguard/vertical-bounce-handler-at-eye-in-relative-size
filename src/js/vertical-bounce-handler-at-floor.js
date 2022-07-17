let floorBelongings = document.createElement('div')
floorBelongings.classList.add('floor-belongings')

let floor = document.createElement('div')
floor.classList.add('floor')
document.querySelector('.statement-at-floor').appendChild(floor)

document.querySelector('.statement-at-floor').querySelector('.floor').appendChild(
    floorBelongings
)
for(let columnsAtFlatArea = Array.from(Array(4)), i = 0; i < columnsAtFlatArea.length; i++) {
    let column = document.createElement('div')
    column.classList.add('column')

    document.querySelector('.statement-at-floor').querySelector('.floor')
        .querySelector('.floor-belongings').appendChild(column)
}
let elev = document.createElement('div')
elev.classList.add('elev')

document.querySelector('.statement-at-floor').querySelector('.floor')
    .querySelector('.floor-belongings').appendChild(elev)

for(let columns = Array.from(Array(4)), i = 0; i < columns.length; i++) {
    let column = document.createElement('div')
    column.classList.add('column')

    document.querySelector('.statement-at-floor').querySelector('.floor')
        .querySelector('.floor-belongings').appendChild(column)
}