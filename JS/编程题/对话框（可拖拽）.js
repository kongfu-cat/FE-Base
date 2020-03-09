class Dialog {
    constructor(text) {
        this.lastX = 0
        this.lastY = 0
        this.x = 0
        this.y = 0
        this.text = text || ''
        this.isMoving = false
        this.dialog = null
    }
    open () {
        const modal = document.createElement('div')
        modal.id = 'modal'
        modal.style = `
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;`
        modal.addEventListener('click', this.close.bind(this))
        document.body.appendChild(modal)
        this.dialog = document.createElement('div')
        this.dialog.style = `
    padding: 20px;
    background-color: #fff;
    `
        this.dialog.innerText = this.text
        this.dialog.addEventListener('click', e => { e.stopPropagation() })
        this.dialog.addEventListener('mousedown', this.handleMousedown.bind(this))
        document.addEventListener('mousemove', this.handleMousemove.bind(this))
        document.addEventListener('mouseup', this.handleMouseup.bind(this))
        modal.appendChild(this.dialog)
    }
    close () {
        this.dialog.removeEventListener('mousedown', this.handleMousedown)
        document.removeEventListener('mousemove', this.handleMousemove)
        document.removeEventListener('mouseup', this.handleMouseup)
        document.body.removeChild(document.querySelector('#modal'))
    }
    handleMousedown (e) {
        this.isMoving = true
        this.x = e.clientX
        this.y = e.clientY
    }
    handleMousemove (e) {
        if (this.isMoving) {
            this.dialog.style.transform = `translate(${e.clientX - this.x + this.lastX}px, ${e.clientY - this.y + this.lastY}px)`
        }
    }
    handleMouseup (e) {
        this.isMoving = false
        this.lastX = e.clientX - this.x + this.lastX
        this.lastY = e.clientY - this.y + this.lastY
    }
}

let dialog = new Dialog('Hello World')
dialog.open()