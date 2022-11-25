import css from './layout.less'
import template from './layout.html'
import {addClass} from '../util/util'

/**
 * 布局分为上左右   左右    左上右
 */

class XiaoMLayout extends HTMLElement{

    static get observedAttributes() {
        return ['w', 'h', 'c']
    }

    constructor (){
        super()
        this.attachShadow({mode : 'open'})
        this.shadowRoot.innerHTML  = `<style>${css}</style>${template}`
        
        this.layoutEl

        this.leftEl
        this.topEl
        this.rightEl

        this.style()
        
    }

    style(){

    }

    render(layoutAttr){
        switch(layoutAttr){
            case "tlr":
                this.__renderTLR()
                break;
            case "ltr":
                this.__renderLTR()
                break;
            case "lr":
                break;
        }
    }

    __renderTLR(){
        this.topEl = document.createElement('div')
        addClass(this.topEl ,'top')
        let lrDiv = document.createElement('div')
        addClass(lrDiv ,'lr')
        this.leftEl = document.createElement('div')
        addClass(this.leftEl ,'left')
        this.rightEl = document.createElement('div')
        addClass(this.rightEl ,'right')
        lrDiv.appendChild(this.leftEl)
        lrDiv.appendChild(this.rightEl)
        this.layoutEl.appendChild(this.topEl)
        this.layoutEl.appendChild(lrDiv)
    }

    __renderLTR(){

    }

    connectedCallback(){
        let layoutAttr = this.getAttribute('layout')
        this.layoutEl = this.shadowRoot.querySelector('.layout')
        addClass(this.layoutEl ,layoutAttr)
        this.render(layoutAttr)
    }

    disconnectedCallback(){

    }
}

export default XiaoMLayout