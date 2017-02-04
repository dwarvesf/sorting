!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){"use strict";function p(b,c){this.$element=a(b),this.options=a.extend({},p.DEFAULTS,a.isPlainObject(c)&&c),this.init()}var b="qor.collection.sortable",c="enable."+b,d="disable."+b,e="click."+b,f=".qor-sortable__item",g=".qor-sortable__button-change",h=".qor-sortable__button-done",i=".qor-sortable__button-add",j=".qor-sortable__button-delete",k=".qor-sortable__button-move",l=".qor-sortable__action",m=".qor-sortable__action-position",n=".is-delete",o="sortable-collection-loaded";return p.prototype={constructor:p,init:function(){this.bind(),this.initItemOrder()},bind:function(){this.$element.on(e,a.proxy(this.click,this))},unbind:function(){this.$element.off(e,this.click)},initItemOrder:function(b){var c=this.$element.find(f).filter(":visible").not(n);if(c.size()){var i,j,d=c.find(l).find(m),e={},g=c.size(),h=c.first().html();d.size()&&d.remove(),j||(i=h.match(/(\w+)\="(\S*\[\d+\]\S*)"/),i.length&&(i=i[2],j=i.match(/^(\S*)\[(\d+)\]([^\[\]]*)$/),j.length&&(j=j[1]))),c.each(function(c){var d=a(this),f=d.find(l);e.isSelected=!1,e.itemTotal=g,e.itemIndex=c+1,f.prepend('<select class="qor-sortable__action-position"></select>');for(var h=1;h<=g;h++)e.index=h,e.itemIndex==h?e.isSelected=!0:e.isSelected=!1,f.find("select").append(window.Mustache.render(p.OPTION_HTML,e));if(b){var i,k,m=a(this).find('[name^="'+j+'"]');m.size()&&m.each(function(){i=a(this).prop("name"),k="["+e.itemIndex+"]",i=i.replace(/\[\d+\]/,k),a(this).prop("name",i)})}d.data(e)})}},moveItem:function(b){var g,h,c=b.closest(f),d=c.data().itemIndex,e=c.find(m).val();e!=d&&(g=1==e?1:e<d?e-1:e,h=a(f+"__"+b.attr("attr-data")).filter(function(){return a(this).data().itemIndex==g}),1==e?h.before(c.fadeOut("slow").fadeIn("slow")):h.after(c.fadeOut("slow").fadeIn("slow")),this.initItemOrder(!0,b))},click:function(b){var c=a(b.target),d=this.$element,e=d.find(f).filter(":visible").not(n);c.is(k)&&this.moveItem(c),c.is(h)&&(c.hide(),d.find(l).hide(),d.find(g).show(),d.find(i).show(),d.find(j).show()),c.is(g)&&e.size()&&(c.hide(),d.find(h).show(),d.find(l).show(),d.find(i).hide(),d.find(j).hide(),this.initItemOrder())},destroy:function(){this.unbind(),this.$element.removeData(b)}},p.DEFAULTS={},p.OPTION_HTML='<option value="[[index]]" [[#isSelected]]selected[[/isSelected]]>[[index]] of [[itemTotal]]</option>',p.plugin=function(c){return this.each(function(){var f,d=a(this),e=d.data(b);if(!e){if(/destroy/.test(c))return;d.data(b,e=new p(this,c))}"string"==typeof c&&a.isFunction(f=e[c])&&f.apply(e)})},a(function(){var b='[data-toggle="qor.collection.sortable"]';a("body").data(o)||(a("body").data(o,!0),a(document).on(d,function(c){p.plugin.call(a(b,c.target),"destroy")}).on(c,function(c){p.plugin.call(a(b,c.target))}).triggerHandler(c))}),p});