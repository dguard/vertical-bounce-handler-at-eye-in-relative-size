for(let startingFlatsAreaRectangle = Array.from(Array(4 + 4 + 4 + 3)), i = 0; i < startingFlatsAreaRectangle.length; i++) {
    let element = document.createElement('div')
    element.classList.add('floor')

    let column = document.createElement('div')
    column.classList.add('column')

    for(let columnsConstructed = Array.from(Array(4)), j = 0; j < columnsConstructed.length; j++) {
        let column = document.createElement('div')
        column.classList.add('column')

        element.appendChild(column)
    }
    let elev = document.createElement('div')
    elev.classList.add('elev')

    elev.appendChild(document.createElement('div'))

    element.appendChild(elev)

    for(let restColumns = Array.from(Array(4)), j = 0; j < restColumns.length; j++) {
        let column = document.createElement('div')
        column.classList.add('column')

        element.appendChild(column)
    }

    let closing = document.createElement('div')
    closing.classList.add('closing')

    element.appendChild(closing)

    document.querySelector('.statement-at-land').prepend(element)
}
let topStatement = document.createElement('div')
topStatement.classList.add('top-statement')
document.querySelector('.statement-at-land').prepend(topStatement)