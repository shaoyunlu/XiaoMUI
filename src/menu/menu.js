class XiaoMMenu extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.innerHTML  = `123`
    }
}

export default XiaoMMenu