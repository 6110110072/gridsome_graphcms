(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{POBq:function(t,e,r){"use strict";r.r(e);var a={metaInfo:{title:"Cat Shop Page"},data:function(){return{cartItems:[],products:[{name:"",description:"",categories:{name:""},price:"",images:[{url:""}],slug:""}]}},created:function(){this.products=this.$page.gcms.productCats},methods:{addToCart:function(t){this.cartItems=JSON.parse(localStorage.getItem("product")),null==this.cartItems&&(this.cartItems=[]),this.cartItems.push(t),localStorage.setItem("product",JSON.stringify(this.cartItems))}}},s=r("KHd+"),n={components:{CatShop:Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shoppy"},[r("br"),r("br"),r("h1",[t._v("cats")]),r("div",[t.$page.gcms.products?r("div",{staticClass:"product-grid text-center"},[r("div",{staticClass:"text-center"},[r("div",{staticClass:"post-feed"},t._l(t.products,(function(e){return r("div",{key:e.id,staticClass:"flex-col"},[r("b-card-group",{attrs:{deck:""}},t._l(e.images,(function(a){return r("b-card",{staticClass:"text-center",staticStyle:{"max-width":"20rem",padding:"20px","max-height":"38rem","min-height":"38rem"},attrs:{title:e.name,"img-src":a.url,"img-alt":"Image","img-top":"",tag:"article"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b-button",{attrs:{href:"#",variant:"primary"},on:{click:function(r){return t.addToCart(e)}}},[t._v("\n                    Add to Cart\n                  ")])]},proxy:!0}],null,!0)},[r("b-card-text",[r("h5",[t._v(t._s(e.price)+" ฿.")]),t._v("\n                  "+t._s(e.description)+"\n                  "),r("br"),r("br"),r("div",{staticStyle:{float:"left"}},[t._v("\n                    Category :\n                    "),r("a",{attrs:{href:"#"}},[t._v("#"+t._s(e.categories[0].name))])])])],1)})),1)],1)})),0)])]):t._e()])])}),[],!1,null,null,null).exports}},c=null,i=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("div",[e("CatShop")],1)])}),[],!1,null,null,null);"function"==typeof c&&c(i);e.default=i.exports}}]);