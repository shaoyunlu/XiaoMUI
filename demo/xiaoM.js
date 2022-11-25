(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var css = ".layout {\n  display: flex;\n  height: 100%;\n}\n.layout.tlr {\n  flex-direction: column;\n}\n.layout.tlr .top {\n  width: 100%;\n  height: 100px;\n}\n.layout.tlr .lr {\n  flex: 1;\n  display: flex;\n}\n.layout.tlr .lr .left {\n  width: 300px;\n}\n.layout.tlr .lr .right {\n  flex: 1;\n}\n";

  var template = "<div class=\"layout\"></div>";

  function addClass(el ,className){
      el.classList.add(className);
  }

  /**
   * 布局分为上左右   左右    左上右
   */

  class XiaoMLayout extends HTMLElement{

      static get observedAttributes() {
          return ['w', 'h', 'c']
      }

      constructor (){
          super();
          this.attachShadow({mode : 'open'});
          this.shadowRoot.innerHTML  = `<style>${css}</style>${template}`;
          
          this.layoutEl;

          this.leftEl;
          this.topEl;
          this.rightEl;

          this.style();
          
      }

      style(){

      }

      render(layoutAttr){
          switch(layoutAttr){
              case "tlr":
                  this.__renderTLR();
                  break;
              case "ltr":
                  this.__renderLTR();
                  break;
          }
      }

      __renderTLR(){
          this.topEl = document.createElement('div');
          addClass(this.topEl ,'top');
          let lrDiv = document.createElement('div');
          addClass(lrDiv ,'lr');
          this.leftEl = document.createElement('div');
          addClass(this.leftEl ,'left');
          this.rightEl = document.createElement('div');
          addClass(this.rightEl ,'right');
          lrDiv.appendChild(this.leftEl);
          lrDiv.appendChild(this.rightEl);
          this.layoutEl.appendChild(this.topEl);
          this.layoutEl.appendChild(lrDiv);
      }

      __renderLTR(){

      }

      connectedCallback(){
          let layoutAttr = this.getAttribute('layout');
          this.layoutEl = this.shadowRoot.querySelector('.layout');
          addClass(this.layoutEl ,layoutAttr);
          this.render(layoutAttr);
      }

      disconnectedCallback(){

      }
  }

  class XiaoMMenu extends HTMLElement{
      constructor(){
          super();
          this.attachShadow({mode : 'open'});
          this.shadowRoot.innerHTML  = `123`;
      }
  }

  customElements.define('xiaom-layout' ,XiaoMLayout);
  customElements.define('xiaom-menu' ,XiaoMMenu);

}));
