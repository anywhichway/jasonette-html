(function() {
	
	/*! dom-to-image 10-06-2017 */
	!function(a){"use strict";function b(a,b){function c(a){return b.bgcolor&&(a.style.backgroundColor=b.bgcolor),b.width&&(a.style.width=b.width+"px"),b.height&&(a.style.height=b.height+"px"),b.style&&Object.keys(b.style).forEach(function(c){a.style[c]=b.style[c]}),a}return b=b||{},g(b),Promise.resolve(a).then(function(a){return i(a,b.filter,!0)}).then(j).then(k).then(c).then(function(c){return l(c,b.width||q.width(a),b.height||q.height(a))})}function c(a,b){return h(a,b||{}).then(function(b){return b.getContext("2d").getImageData(0,0,q.width(a),q.height(a)).data})}function d(a,b){return h(a,b||{}).then(function(a){return a.toDataURL()})}function e(a,b){return b=b||{},h(a,b).then(function(a){return a.toDataURL("image/jpeg",b.quality||1)})}function f(a,b){return h(a,b||{}).then(q.canvasToBlob)}function g(a){"undefined"==typeof a.imagePlaceholder?v.impl.options.imagePlaceholder=u.imagePlaceholder:v.impl.options.imagePlaceholder=a.imagePlaceholder,"undefined"==typeof a.cacheBust?v.impl.options.cacheBust=u.cacheBust:v.impl.options.cacheBust=a.cacheBust}function h(a,c){function d(a){var b=document.createElement("canvas");if(b.width=c.width||q.width(a),b.height=c.height||q.height(a),c.bgcolor){var d=b.getContext("2d");d.fillStyle=c.bgcolor,d.fillRect(0,0,b.width,b.height)}return b}return b(a,c).then(q.makeImage).then(q.delay(100)).then(function(b){var c=d(a);return c.getContext("2d").drawImage(b,0,0),c})}function i(a,b,c){function d(a){return a instanceof HTMLCanvasElement?q.makeImage(a.toDataURL()):a.cloneNode(!1)}function e(a,b,c){function d(a,b,c){var d=Promise.resolve();return b.forEach(function(b){d=d.then(function(){return i(b,c)}).then(function(b){b&&a.appendChild(b)})}),d}var e=a.childNodes;return 0===e.length?Promise.resolve(b):d(b,q.asArray(e),c).then(function(){return b})}function f(a,b){function c(){function c(a,b){function c(a,b){q.asArray(a).forEach(function(c){b.setProperty(c,a.getPropertyValue(c),a.getPropertyPriority(c))})}a.cssText?b.cssText=a.cssText:c(a,b)}c(window.getComputedStyle(a),b.style)}function d(){function c(c){function d(a,b,c){function d(a){var b=a.getPropertyValue("content");return a.cssText+" content: "+b+";"}function e(a){function b(b){return b+": "+a.getPropertyValue(b)+(a.getPropertyPriority(b)?" !important":"")}return q.asArray(a).map(b).join("; ")+";"}var f="."+a+":"+b,g=c.cssText?d(c):e(c);return document.createTextNode(f+"{"+g+"}")}var e=window.getComputedStyle(a,c),f=e.getPropertyValue("content");if(""!==f&&"none"!==f){var g=q.uid();b.className=b.className+" "+g;var h=document.createElement("style");h.appendChild(d(g,c,e)),b.appendChild(h)}}[":before",":after"].forEach(function(a){c(a)})}function e(){a instanceof HTMLTextAreaElement&&(b.innerHTML=a.value),a instanceof HTMLInputElement&&b.setAttribute("value",a.value)}function f(){b instanceof SVGElement&&(b.setAttribute("xmlns","http://www.w3.org/2000/svg"),b instanceof SVGRectElement&&["width","height"].forEach(function(a){var c=b.getAttribute(a);c&&b.style.setProperty(a,c)}))}return b instanceof Element?Promise.resolve().then(c).then(d).then(e).then(f).then(function(){return b}):b}return c||!b||b(a)?Promise.resolve(a).then(d).then(function(c){return e(a,c,b)}).then(function(b){return f(a,b)}):Promise.resolve()}function j(a){return s.resolveAll().then(function(b){var c=document.createElement("style");return a.appendChild(c),c.appendChild(document.createTextNode(b)),a})}function k(a){return t.inlineAll(a).then(function(){return a})}function l(a,b,c){return Promise.resolve(a).then(function(a){return a.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(a)}).then(q.escapeXhtml).then(function(a){return'<foreignObject x="0" y="0" width="100%" height="100%">'+a+"</foreignObject>"}).then(function(a){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+b+'" height="'+c+'">'+a+"</svg>"}).then(function(a){return"data:image/svg+xml;charset=utf-8,"+a})}function m(){function a(){var a="application/font-woff",b="image/jpeg";return{woff:a,woff2:a,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:b,jpeg:b,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function b(a){var b=/\.([^\.\/]*?)$/g.exec(a);return b?b[1]:""}function c(c){var d=b(c).toLowerCase();return a()[d]||""}function d(a){return a.search(/^(data:)/)!==-1}function e(a){return new Promise(function(b){for(var c=window.atob(a.toDataURL().split(",")[1]),d=c.length,e=new Uint8Array(d),f=0;f<d;f++)e[f]=c.charCodeAt(f);b(new Blob([e],{type:"image/png"}))})}function f(a){return a.toBlob?new Promise(function(b){a.toBlob(b)}):e(a)}function g(a,b){var c=document.implementation.createHTMLDocument(),d=c.createElement("base");c.head.appendChild(d);var e=c.createElement("a");return c.body.appendChild(e),d.href=b,e.href=a,e.href}function h(){var a=0;return function(){function b(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}return"u"+b()+a++}}function i(a){return new Promise(function(b,c){var d=new Image;d.onload=function(){b(d)},d.onerror=c,d.src=a})}function j(a){var b=3e4;return v.impl.options.cacheBust&&(a+=(/\?/.test(a)?"&":"?")+(new Date).getTime()),new Promise(function(c){function d(){if(4===g.readyState){if(200!==g.status)return void(h?c(h):f("cannot fetch resource: "+a+", status: "+g.status));var b=new FileReader;b.onloadend=function(){var a=b.result.split(/,/)[1];c(a)},b.readAsDataURL(g.response)}}function e(){h?c(h):f("timeout of "+b+"ms occured while fetching resource: "+a)}function f(a){console.error(a),c("")}var g=new XMLHttpRequest;g.onreadystatechange=d,g.ontimeout=e,g.responseType="blob",g.timeout=b,g.open("GET",a,!0),g.send();var h;if(v.impl.options.imagePlaceholder){var i=v.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(h=i[1])}})}function k(a,b){return"data:"+b+";base64,"+a}function l(a){return a.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function m(a){return function(b){return new Promise(function(c){setTimeout(function(){c(b)},a)})}}function n(a){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}function o(a){return a.replace(/#/g,"%23").replace(/\n/g,"%0A")}function p(a){var b=r(a,"border-left-width"),c=r(a,"border-right-width");return a.scrollWidth+b+c}function q(a){var b=r(a,"border-top-width"),c=r(a,"border-bottom-width");return a.scrollHeight+b+c}function r(a,b){var c=window.getComputedStyle(a).getPropertyValue(b);return parseFloat(c.replace("px",""))}return{escape:l,parseExtension:b,mimeType:c,dataAsUrl:k,isDataUrl:d,canvasToBlob:f,resolveUrl:g,getAndEncode:j,uid:h(),delay:m,asArray:n,escapeXhtml:o,makeImage:i,width:p,height:q}}function n(){function a(a){return a.search(e)!==-1}function b(a){for(var b,c=[];null!==(b=e.exec(a));)c.push(b[1]);return c.filter(function(a){return!q.isDataUrl(a)})}function c(a,b,c,d){function e(a){return new RegExp("(url\\(['\"]?)("+q.escape(a)+")(['\"]?\\))","g")}return Promise.resolve(b).then(function(a){return c?q.resolveUrl(a,c):a}).then(d||q.getAndEncode).then(function(a){return q.dataAsUrl(a,q.mimeType(b))}).then(function(c){return a.replace(e(b),"$1"+c+"$3")})}function d(d,e,f){function g(){return!a(d)}return g()?Promise.resolve(d):Promise.resolve(d).then(b).then(function(a){var b=Promise.resolve(d);return a.forEach(function(a){b=b.then(function(b){return c(b,a,e,f)})}),b})}var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:d,shouldProcess:a,impl:{readUrls:b,inline:c}}}function o(){function a(){return b(document).then(function(a){return Promise.all(a.map(function(a){return a.resolve()}))}).then(function(a){return a.join("\n")})}function b(){function a(a){return a.filter(function(a){return a.type===CSSRule.FONT_FACE_RULE}).filter(function(a){return r.shouldProcess(a.style.getPropertyValue("src"))})}function b(a){var b=[];return a.forEach(function(a){try{q.asArray(a.cssRules||[]).forEach(b.push.bind(b))}catch(c){console.log("Error while reading CSS rules from "+a.href,c.toString())}}),b}function c(a){return{resolve:function(){var b=(a.parentStyleSheet||{}).href;return r.inlineAll(a.cssText,b)},src:function(){return a.style.getPropertyValue("src")}}}return Promise.resolve(q.asArray(document.styleSheets)).then(b).then(a).then(function(a){return a.map(c)})}return{resolveAll:a,impl:{readAll:b}}}function p(){function a(a){function b(b){return q.isDataUrl(a.src)?Promise.resolve():Promise.resolve(a.src).then(b||q.getAndEncode).then(function(b){return q.dataAsUrl(b,q.mimeType(a.src))}).then(function(b){return new Promise(function(c,d){a.onload=c,a.onerror=d,a.src=b})})}return{inline:b}}function b(c){function d(a){var b=a.style.getPropertyValue("background");return b?r.inlineAll(b).then(function(b){a.style.setProperty("background",b,a.style.getPropertyPriority("background"))}).then(function(){return a}):Promise.resolve(a)}return c instanceof Element?d(c).then(function(){return c instanceof HTMLImageElement?a(c).inline():Promise.all(q.asArray(c.childNodes).map(function(a){return b(a)}))}):Promise.resolve(c)}return{inlineAll:b,impl:{newImage:a}}}var q=m(),r=n(),s=o(),t=p(),u={imagePlaceholder:void 0,cacheBust:!1},v={toSvg:b,toPng:d,toJpeg:e,toBlob:f,toPixelData:c,impl:{fontFaces:s,images:t,util:q,inliner:r,options:{}}};"undefined"!=typeof module?module.exports=v:a.domtoimage=v}(this);
	
	/*
	 * @callback ResolverFn
	 * @param {string} varName - variable name before being parsed.
	 *        For example: {a.b.c} ->  'a.b.c', {  x  } -> 'x'
	 * @param {Object} view - the view object that was passed to .render() function
	 * @returns {string|number|boolean|Object|undefined} the value to be
	 *        interpolated. If the function returns undefined, the value resolution
	 *        algorithm will go ahead with the default behaviour (resolving the
	 *        variable name from the provided object).
	 */

	const VAR_MATCH_REGEX = /\{\{\s*(.*?)\s*\}\}/g;

	function _valueToString (value) {
	  switch (typeof value) {
	  case 'string':
	  case 'number':
	  case 'boolean':
	    return value;
	  case 'object':
	    try {
	      // null is an object but is falsy. Swallow it.
	      return value === null ? '' : JSON.stringify(value);
	    } catch (jsonError) {
	      return '{...}';
	    }
	  default:
	     // Anything else will be replaced with an empty string
	     // For example: undefined, Symbol, etc.
	    return '';
	  }
	}

	/**
	 * Recursively goes through an object trying to resolve a path.
	 *
	 * @param {Object} scope - The object to traverse (in each recursive call we dig into this object)
	 * @param {string[]} path - An array of property names to traverse one-by-one
	 * @param {number} [pathIndex=0] - The current index in the path array
	 */
	function _recursivePathResolver(scope, path, pathIndex = 0) {
	  if (typeof scope !== 'object' || scope === null || scope === undefined) {
	    return '';
	  }

	  const varName = path[pathIndex];
	  const value = scope[varName];

	  if (pathIndex === path.length - 1) {
	    // It's a leaf, return whatever it is
	    return value;
	  }

	  return _recursivePathResolver(value, path, ++pathIndex);
	}

	function defaultResolver(varName, view) {
	  return _recursivePathResolver(view, varName.split('.'));
	}

	/**
	 * Replaces every {{variable}} inside the template with values provided by view.
	 *
	 * @param {string} template - The template containing one or more {{variableNames}} every variable
	 *        names that is used in the template. If it's omitted, it'll be assumed an empty object.
	 * @param {Object} [view={}] - An object containing values for every variable names that is used in
	 *        the template. If it's omitted, it'll be set to an empty object essentially removing all
	 *        {{varName}}s in the template.
	 * @param {ResolverFn} [resolver] - An optional function that will be
	 *        called for every {{varName}} to generate a value. If the resolver throws an error
	 *        we'll proceed with the default value resolution algorithm (find the value from the view
	 *        object).
	 * @returns {string} - Template where its variable names replaced with
	 *        corresponding values. If a value is not found or is invalid, it will
	 *        be assumed empty string ''. If the value is an object itself, it'll
	 *        be stringified by JSON.
	 *        In case of a JSON stringify error the result will look like "{...}".
	 */
	function render (template, view = {}, resolver = defaultResolver) {
	  // don't touch the template if it is not a string
	  if (typeof template !== 'string') {
	    return template;
	  }

	  return template.replace(VAR_MATCH_REGEX, function (match, varName) {
	    try {
	      // defaultResolver never throws
	      return _valueToString(resolver(varName, view));
	    } catch (e) {
	      // if your resolver throws, we proceed with the default resolver
	      return _valueToString(defaultResolver(varName, view));
	    }
	  });
	}

	
	let $jason;
	class Jasonette {
		constructor(app) {
			this.modals = [];
			this.options = {};
			$jason = app.$jason;
			if($jason.head.actions && $jason.head.actions.$load) {
				this.call($jason.head.actions.$load);
			}
			window.addEventListener("popstate",event => {
				if(event.state && event.state.$jason) {
					$jason = event.state.$jason;
					this.$render(event.state.options,this.target);
				}
			});
		}
		static jasonify(app,target=document.body) {
			const jasonette = new Jasonette(app);
			jasonette.$render({},target);
		}
		async call(config) {
			if(config.trigger) {
				const fname = config.trigger;
				if(this.head.actions[fname]) {
					return this.call({name:fname,options:config.options});
				}
			} else {
				const parts = config.type.split(".");
				let f = this[parts[0]];
				for(let i=1;i<parts.length && f;i++) {
					f = f[parts[i]];
				}
				if(f) {
					const data = this.options.data || ($jason.head && $jason.head.data ? $jason.head.data : $jason),
						result = await f.call(this,config.options);
					!config.success || this.call(this.resolve(config.success,data,result));
				}
			}
		}
		$lambda(config) {
			const fname = config.name;
			if(this.head.actions[fname]) {
				return this.call(config.options);
			}
		}
		get $session() {
			return new Proxy({
				set: (options) => {
					for(let key in options) {
						sessionStorage.set(key,options[key]);
					}
				}
			},{
				get: (target,property) => sessionStorage[property]
			})
		}
		$set(options) {
			Object.assign($jason.head.data,options);
			//$jason.body = this.resolve($jason.head.templates.body,$jason.head.data);
			//this.$render({},this.target);
		}
		$get() {
			return new Proxy({},{
				get: (target,property) => $jason.head[property]
			})
		}
		get $cache() {
			return new Proxy({
				reset: function() {
					localStorage.clear();
				},
				set: function(options) {
					for(let {key:value} of options.items) {
						localStorage.setItem(key,value);
					}
					const items = Object.keys(localStorage).map(key => { return {[key]: localStorage[key]}});
					return {items};
				}
			},{
				get: (target,property) => localStorage[property]
			})
		}
		get $util() {
			return {
				banner: function(options) {
					const colors = {
						error: "red",
						warning: "yellow",
						info: "black"
					};
					this.banner.style.visibility = "visible";
					this.banner.style.backgroundColor = colors[options.type] || "black";
					this.banner.style.color = "white"
					this.banner.innerHTML = `<h1>${options.title}</h1>${options.description}`;
					const click = () => {
						this.banner.style.visibility = "hidden";
						window.removeEventListener("click",click);
					};
					setTimeout(() => window.addEventListener("click",click));
				},
				toast: function(options) {
					const colors = {
						error: "red",
						warning: "yellow",
						info: "black"
					};
					this.toast.style.backgroundColor = colors[options.type] || "black";
					this.toast.style.color = "white"
					this.toast.innerHTML = `${options.text}`;
					this.toast.style.visibility = "visible";
					setTimeout(() => {
						this.toast.innerHTML="";
						this.toast.style.visibility = "hidden";
					},3000);
				},
				alert: async function(options) {
					let resolver,
						rejector;
					const promise = new Promise((resolve,reject) => { resolver = resolve; rejector = reject; }),
						dialog = document.createElement("dialog");
					let html = `<h3>${options.title}</h3>${options.description}`;
					if(options.form) {
						html += `<form id="form"><table>`;
						for(let field of options.form) {
							const value = (typeof(field.value)!=="undefined" ? field.value : ''),
								type = (field.type && field.type==="secure" ? "password" : field.type);
							html += `<tr><td><input name="${field.name}" type="${type}" value="${value}" placeholder="${field.placeholder||''}"></td></tr>`;
						}
						html += `</table></form>`;
					}
					html += `<p><button type="submit" id="ok">OK</button> <button id="cancel">Cancel</button></p>`;
					dialog.innerHTML = html;
					dialog.querySelector("#ok").addEventListener("click",() => {
						const form = dialog.getElementsByTagName("form")[0];
						if(form) {
							const $jason = {};
							for(let i=0;i<form.length;i++) {
								const field = form[i];
								$jason[field.name] = field.value;
							}
							dialog.close();
							this.modals.pop();
							dialog.parentElement.removeChild(dialog);
							resolver({$jason});
						} else {
							dialog.close();
							this.modals.pop();
							dialog.parentElement.removeChild(dialog);
							resolver();
						}
					})
					dialog.querySelector("#cancel").addEventListener("click",() => {
						dialog.close();
						this.modals.pop();
						dialog.parentElement.removeChild(dialog);
						resolver();
					});
					this.target.appendChild(dialog);
					this.modals.push(dialog);
					dialog.showModal();
					return promise;
				},
				picker: function(options) {
					const dialog = document.createElement("dialog");
					options = Object.assign({},options);
					dialog.innerHTML = `<h3 style="text-align:center;width:100%">${options.title}</h3>`;
					const table = document.createElement("table");
					for(let item of options.items) {
						const tr = document.createElement("tr"),
							td = document.createElement("td");
						item = Object.assign({},item);
						item.type ="label";
						this.renderItem(item,td);
						td.addEventListener("click",() => {
							dialog.close();
							this.modals.pop();
							try {
								dialog.parentElement.removeChild(dialog);
							} catch(e) { true; } // may have been removed already
						});
						tr.appendChild(td);
						table.appendChild(tr);
					}
					dialog.appendChild(table);
					const p = document.createElement("p");
					p.style.textAlign = "center";
					p.innerHTML = `<button id="cancel">Cancel</button>`;
					dialog.appendChild(p);
					p.children[0].addEventListener("click",() => {
						dialog.close();
						this.modals.pop();
						dialog.parentElement.removeChild(dialog);
					});
					this.screen.appendChild(dialog);
					this.modals.push(dialog);
					dialog.showModal();
				},
				datepicker: function(options) {
					const date = new Date(),
						utc = date.getTime() - (date.getTimezoneOffset() * 60000);
					let value = new Date(utc).toISOString();
					value = value.substring(0,value.length-1);
					options = Object.assign({},options);
					options.form = [
						{name:"datetime",type:"datetime-local",value}
					];
					return this.$util.alert.call(this,options).then(fields => new Date(fields.$jason.datetime).getTime());
				},
				console: function(data) {
					console.log(data);
				}
			}
		}
		async $reload() {
			if(this.href===window.location.href) {
				this.$render(this.options,this.target);
			} else {
				const response = await fetch(this.href),
					text = await response.text(), // Loading JSON directly may bark beacuse of $jason or lack of quotes
					json = new Function("return " + text)();
				$jason = json.$jason;
				this.$render({},this.target);
			}
		}
		async $render(options={},target) {
			const data = options.data || ($jason.head && $jason.head.data ? $jason.head.data : $jason),
				template = (options.template ? options.template : ($jason.head.templates && $jason.head.templates.body ? $jason.head.templates.body : $jason.body));
			this.footer || (this.footer = $jason.body.footer);
			template.footer = this.footer;
			this.options = options;
			/*if($jason.head.actions && $jason.head.actions.$foreground) {
				const focus = () => {
					if($jason.head.actions && $jason.head.actions.$foreground) {
						this.call($jason.head.actions.$foreground);
					} else {
						window.removeEventListener("focus",focus);
					}
					
				}
				window.addEventListener("focus",focus);
			}*/
			$jason.body = this.resolve(template,data);
			this.target = target || this.target || document.body;
			this.href = window.location.href;
			if(target===document.body) {
				document.title = $jason.head.title || window.location.href;
			}
			const el = document.createElement("div");
			el.style.display ="flex";            /* establish flex container */
			el.style.flexDirection="row";   /* align children vertically (column format) */
			el.style.justifyContent="center";  /* center children vertically */
			el.style.alignItems="center";
			const screen = this.screen = document.createElement("div");
			this.renderHeader($jason.body.header,screen);
			this.sections = this.renderSections($jason.body.sections,screen);
			this.renderFooter($jason.body.footer,screen);
			this.banner = document.createElement("div");
			this.banner.style.visibility = "hidden";
			screen.appendChild(this.banner);
			this.toast = document.createElement("div");
			this.toast.style.visibility = "hidden";
			screen.appendChild(this.toast);
			el.appendChild(screen);
			while(this.target.lastChild) this.target.removeChild(this.target.lastChild);
			this.target.appendChild(el);
			this.canvas = document.createElement("canvas");
			this.canvas.style.width = "500px";
			this.canvas.style.height = "500px";
			this.target.appendChild(this.canvas);
			if($jason.head.actions && $jason.head.actions.$show) {
				this.call($jason.head.actions.$show);
			}
		}
		async $snapshot() {
			function sterile(node) {
				if(node.tagName==="IFRAME") {
					return false;
				}
				for(let child of node.children) {
					if(!sterile(child)) return false;
				}
				return true;
			}
			if(sterile(this.screen)) {
				domtoimage.toJpeg(this.screen, { quality: 0.95 })
			    .then(function (dataUrl) {
			        const link = document.createElement('a');
			        link.download = 'my-image-name.jpeg';
			        link.href = dataUrl;
			        link.click();
			    }).catch(e => {
			    	this.$util.alert.call(this,{title:"Can't Create Image",description:"The current screen contains unsecure content."})
			    });
			} else {
				this.$util.alert.call(this,{title:"Can't Create Image",description:"The current screen contains unsecure content."})
			}
		}
		async $href(options) {
			window.history.pushState({$jason,options:this.options},document.title,this.href);
			this.href = options.url;
			if(options.view==="web") {
				this.screen.innerHTML = `<iframe src="${options.url}" style="width:100%;height:100%"></iframe>`;
			} else {
				const response = await fetch(options.url),
					text = await response.text(), // Loading JSON directly may bark beacuse of $jason or lack of quotes
					json = new Function("return " + text)();
				$jason = json.$jason;
				this.$render({},this.target);
			}
		}
		$close() {
			const dialog = this.modals.pop();
			if(dialog) {
				dialog.close();
				dialog.parentElement.removeChild(dialog);
			}
		}
		$back() {
			const dialog = this.modals.pop();
			if(dialog) {
				dialog.close();
				dialog.parentElement.removeChild(dialog);
			} else {
				window.history.back();
			}
		}
		get $network() {
			return {
				request: function(options) {
					const headers = new Headers();
					!options.content_type || headers.append("Content-Type",options.content_type);
					const config = {
						method: options.method,
						headers: headers
					};
					!options.data || (config.body = options.data);
					const request = new Request(options.url,config);
					
				},
				upload: function(options) {
					
				}
			}
		}
		get $media() {
			return {
				camera: async function(options) {
					let resolver, rejector;
					const promise = new Promise((resolve,reject) => { resolver = resolve; rejector = reject; }),
						screen = this.screen,
						camera = document.createElement("div"),
						video = document.createElement("video"),
						controls = document.createElement("div"),
						snap = document.createElement("button"),
						retake = document.createElement("button"),
						edit = document.createElement("button"),
						ok = document.createElement("button"),
						cancel = document.createElement("button"),
						img = document.createElement("img");
					snap.innerHTML = "Snap";
					retake.innerHTML = "Retake";
					retake.style.display = "none";
					edit.innerHTML = "Edit";
					edit.style.display = "none";
					ok.innerHTML = "Ok";
					ok.style.display = "none";
					cancel.innerHTML = "Cancel"
					camera.width = screen.offsetWidth;
					camera.height = screen.offsetHeight;
					video.width = screen.offsetWidth;
					for(let button of [snap,retake,edit,ok,cancel]) {
						controls.appendChild(button);
					}
					camera.appendChild(video);
					camera.appendChild(controls);
					screen.parentElement.replaceChild(camera,screen);
					snap.onclick = () => {
						const canvas = document.createElement('canvas');
						canvas.width = video.offsetWidth;
						canvas.height = video.offsetHeight;
						canvas.getContext('2d').drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight);
						img.src = canvas.toDataURL("image/jpg"), //jpg;
						camera.replaceChild(img,video);
						snap.style.display = "none";
						for(let button of [retake,edit,ok]) {
							button.style.display = "inline";
						}
					};
					retake.onclick = () => {
						snap.style.display = "inline";
						for(let button of [retake,edit,ok]) {
							button.style.display = "none";
						}
						camera.replaceChild(video,img);
						video.play();
					};
					edit.onclick = () => {
						this.$util.alert.call(this,{title:"Edit Image",description:"Not yet implemented"});
					}
					ok.onclick = () => {
						camera.parentElement.replaceChild(screen,camera);
						resolver({
							file_url: img.src,
							content_type: "image/jpeg"
						});
					};
					cancel.onclick = () => {
						camera.parentElement.replaceChild(screen,camera);
						resolver();
					};
					if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
					    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
					        video.src = window.URL.createObjectURL(stream);
					        video.play();
					    });
					}
					return promise;
				},
				play: function(options) {
					
				}
			}
		}
		get $audio() {
			return {
				play: function(options) {
					this.audios || (this.audios = {});
					const audio = this.audios[options.url] = new Audio(options.url);
					audio.play();
				},
				pause: function(options) {
					if(this.audios) {
						if(options && options.url) {
							if(this.audios[options.url]) {
								this.audios[options.url].pause();
							} else {
								for(let url in this.audios) {
									this.audios[url].pause();
								}
							}
						}
					}
				},
				stop: function(options) {
					if(this.audios) {
						if(options && options.url) {
							if(this.audios[options.url]) {
								this.audios[options.url].stop();
							} else {
								for(let url in this.audios) {
									this.audios[url].stop();
								}
							}
						}
					}
				},
				seek: function(options) {
					if(this.audios) {
						if(options && options.url && this.audios[options.url]) {
							const duration = this.audios[options.url].duration,
								position = parseFloat(options.position);
							this.audios[options.url].fastSeek(duration * position);
						}
					}
				},
				position: function(options) {
					if(this.audios) {
						if(options && options.url && this.audios[options.url]) {
							return this.audios[options.url].currentTime;
						}
					}
				},
				record: async function(options) {
					let resolver, rejector;
					const promise = new Promise((resolve,reject) => { resolver = resolve; rejector = reject; }),
						screen = this.screen;
					if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
						navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
							const recorder = document.createElement("div"),
							start = document.createElement("button"),
							stop = document.createElement("button"),
							replay = document.createElement("button"),
							clear = document.createElement("button"),
							ok = document.createElement("button"),
							cancel = document.createElement("button"),
							mediaRecorder = new MediaRecorder(stream);
							recorder.width = screen.offsetWidth;
							recorder.height = screen.offsetHeight;
							start.innerHTML = "Start";
							stop.innerHTML = "Stop";
							stop.setAttribute("disabled",true);
							replay.innerHTML = "Replay";
							replay.setAttribute("disabled",true);
							clear.innerHTML = "Clear";
							clear.setAttribute("disabled",true);
							ok.innerHTML = "Ok";
							clear.setAttribute("disabled",true);
							cancel.innerHTML = "Cancel";
							for(let child of [start,stop,replay,clear,ok,cancel]) {
								recorder.appendChild(child);
							}
							screen.parentElement.replaceChild(recorder,screen);	

							let chunks = []
							mediaRecorder.ondataavailable = (event) => {
								chunks.push(event.data);
							}
							function playback(){
								if(chunks.length>0) {
									const blob = new Blob( chunks, { 'type' : 'audio/m4a' }),
										blobURL = window.URL.createObjectURL(blob),
										audio = new Audio();
									audio.src = blobURL;
									audio.play()
								}
							}

							start.onclick = () => {
								mediaRecorder.start();
								start.style.background = "red";
								start.style.color = "black";
								for(let button of [start,replay,clear,ok]) {
									button.setAttribute("disabled",true);
								}
								stop.removeAttribute("disabled");
							}

							stop.onclick = () => {
								mediaRecorder.state==="inactive" || mediaRecorder.stop();
								start.style.background = "";
								start.style.color = "";
								for(let button of [start,replay,clear,ok]) {
									button.removeAttribute("disabled");
								}
								stop.setAttribute("disabled",true);
							}
							replay.onclick = () => {
								playback();
							}
							clear.onclick = () => {
								chunks = [];
								for(let button of [stop,replay,clear,ok]) {
									button.setAttribute("disabled",true);
								}
								start.removeAttribute("disabled");
							}
							ok.onclick = () => {
								recorder.parentElement.replaceChild(screen,recorder);
								const blob = new Blob( chunks, { 'type' : 'audio/m4a' }),
									blobURL = window.URL.createObjectURL(blob);
								resolver({
									file_url: blobURL,
									data_uri: blob,
									content_type: "audio/m4a"
								});
							}

							cancel.onclick = function() {
								recorder.parentElement.replaceChild(screen,recorder);
								resolver();
							}

						});
					}
					return promise;
				}
			}
		}
		get $geo() {
			return {
				get: async function(options) {
					let resolver, rejector;
					const promise = new Promise((resolve,reject) => { resolver = resolve; rejector = reject; });
					if(navigator.geolocation) {
						navigator.geolocation.getCurrentPosition((position) => {
							resolver({coord:`${position.coords.latitude},${position.coords.longitude}`});
						});
					}
					return promise;
				}
			}
		}
		get $timer() {
			return {
				start: function(options) {
					this.timers || (this.timers = {});
					const f = (options.repeats ? setInterval : setTimeout);
					this.timers[options.name] = f(() => this.call(options.action),options.interval);
				},
				stop: function(options) {
					if(this.timers && this.timers[options.name]) {
						clearTimeout(this.timers[options.name]);
					}
				}
			}
		}
		resolve(template,data,jason) {
			if(Array.isArray(template)) {
				if(template[0] && typeof(template[0])==="object" && typeof(Object.keys(template[0])[0])==="string" && Object.keys(template[0])[0].indexOf("{{#if")===0) {
					return this.resolveConditional(template,data,jason);
				}
				const result = [];
				for(let item of template) {
					result.push(this.resolve(item,data,jason));
				}
				return result;
			}
			const type = typeof(template);
			let result = template;
			if(template && type==="object") {
				result = {};
				for(let key in template) {
					let value = template[key];
					if(Array.isArray(value)) {
						value = this.resolve(value,data);
						typeof(value)==="undefined" || (result[key] = value);
					} else if (key==="success") {
						result[key] = value;
					} else if(value && typeof(value)==="object") {
						for(let childkey in value) {
							if(childkey.indexOf("{{#each")===0) {
								result[key] = this.resolveForEach(childkey,value[childkey],data,jason);
							} else {
								result[key] || (result[key] = {});
								const childvalue = (childkey==="success" ? value[childkey] : this.resolve(value[childkey],data,jason));
								typeof(childvalue)==="undefined" || (result[key][childkey] = childvalue);
							}
						}
					} else {
						result[key] = this.resolve(value,data,jason);
					}
				}
			} else {
				const scope = Object.assign({},data);
				scope.$jason = jason;
				result = render(template,scope,(template,data) => new Function("data","with(data) { return " + template + "}")(data));
			}
			return result;
		}
		resolveForEach(foreach,template,data,jason) {
			let scopekey = foreach.split(" ")[1];
			scopekey = scopekey.substring(0,scopekey.lastIndexOf("}")-1);
			const items = data[scopekey],
				results = [];
			if(items) {
				for(let item of items) {
					item = Object.assign({},item);
					item[scopekey] = item; // in case there are nested #each
					results.push(this.resolve(template,item,jason));
				}
			}
			return results;
		}
		resolveConditional(conditional,data,jason) {
			for(let item of conditional) {
				let key = Object.keys(item)[0],
					condition = key.split(" ")[1];
				condition = condition.substring(0,condition.lastIndexOf("}")-1);
				if(new Function("data","with (data) { return " + condition + "}")(data)) {
					return this.resolve(item[key],data,jason);
				}
			}
		}
		renderHeader(header,target) {
			if(header) {
				const title = header.title,
				type = typeof(title),
				el = document.createElement("div");
				el.title = $jason.head.title || window.location.href;
				if(title) {
					if(type==="object") {
						if(title.type==="label") {
							el.innerHTML = title.text || "";
						} else if(title.type==="image") {
							const img = document.createElement("img");
							img.setAttribute("src",title.url);
							el.appendChild(img);
						}
						if(title.style) {
							const keymap = {
								align: "textAlign",
								size: "fontSize"
							}
							title.style.align || (title.style.align = "center");
							for(let key in title.style) {
								const value = title.style[key];
								key = (keymap[key] ? keymap[key] : key);
								el.style[key] = value;
							}
						}
					} else {
						el.innerHTML = title;
					}
				}
				this.renderMenu(header.menu,el);
				this.renderStyle(header.style,el);
			target.appendChild(el);
			}
		}
		renderMenu(menu,target) {
			if(menu) {
				const el = document.createElement("span");
				el.style.float = "right";
				this.renderStyle(menu.style,el);
				const item = Object.assign({},menu);
				if(menu.text) {
					item.type = "button";
				} else {
					item.type = "image";
					item.utl = item.image;
				}
				this.renderItem(item,el);
				target.appendChild(el);
			}
		}
		renderSections(sections,target) {
			const el = document.createElement("div");
			if(sections) {
				for(let section of sections) {
					const inner = document.createElement("div");
					if($jason.body.style && $jason.body.style.border) {
						el.style.border = $jason.body.style.border;
					}
					this.renderSection(section,inner);
					el.appendChild(inner);
				}
			}
			target.appendChild(el);
			return el;
		}
		renderFooter(footer,target) {
			const el = document.createElement("div");
			if(footer) {
				el.style.border = "1px solid #000000";
				this.renderInput(footer.input,el);
				this.renderTabs(footer.tabs,el);
			}
			target.appendChild(el);
			return el;
		}
		renderInput(input,target) {
			if(input) {
				const el = document.createElement("div"),
					textfield = Object.assign({},input.textfield);
				textfield.type = "textfield";
				this.renderItem(textfield,el);
				target.appendChild(el);
			}
		}
		renderTabs(tabs,target) {
			if(tabs) {
				const el = document.createElement("div");
				for(let item of tabs.items) {
					const tab = Object.assign({},item);
					if(tab.text) {
						tab.type = "label";
					} else {
						tab.type = "image";
						tab.url = tab.image;
					}
					const span = document.createElement("span");
					span.style.padding = "3px";
					this.renderItem(tab,span);
					el.appendChild(span);
				}
				this.renderStyle(tabs.style,el);
				target.appendChild(el);
			}
		}
		renderStyle(style,el) {
			if(style) {
				for(let key in style) {
					el.style[key] = style[key];
				}
			}
		}
		renderSection(section,target) {
			if(section) {
				this.renderSectionHeader(section.header,target);
				const el = document.createElement("div"),
					table = document.createElement("table");
				el.style.overflow = "auto";
				el.style.maxHeight = "100%";
				el.style.maxWidth = "100%";
				this.renderItems(section.items,table,section.type);
				el.appendChild(table);
				target.appendChild(el);
			}
		}
		renderSectionHeader(header,target) {
			if(header) {
				const el = document.createElement("div");
				this.renderItem(header,el);
				target.appendChild(el);
			}
		}
		renderItems(items,target,orientation="vertical") {
			if(items) {
				if(orientation==="horizontal") {
					const tr = document.createElement("tr");
					for(let item of items) {
						const td = document.createElement("td");
						this.renderItem(item,td,orientation);
						tr.appendChild(td);
					}
					target.appendChild(tr);
				} else {
					for(let item of items) {
						const tr = document.createElement("tr"),
							td = document.createElement("td");
						this.renderItem(item,td,orientation);
						tr.appendChild(td);
						target.appendChild(tr);
					}
				}
			}
		}
		renderItem(item,target) {
			if(item) {
				let el;
				// add map, slider, textarea,space
				if(item.type==="label") {
					el = document.createElement("label");
					el.innerHTML = item.text;
				} else if(item.type==="button") {
					el = document.createElement("button");
					el.innerHTML = item.text; // add if for image
					target.appendChild(el)
				}  else if(item.type==="image") {
					el = document.createElement("img");
					el.setAttribute("src",item.url);
					target.appendChild(el)
				} else if(item.type==="textfield") {
					el = document.createElement("input");
					!item.value || el.setAttribute("value",item.value);
					el.setAttribute("type",item.keyboard||"text");
					target.appendChild(el)
				} else if(item.type==="switch") {
					el = document.createElement("input");
					el.type = "checkbox";
					let value = item.value;
					try {
						value = JSON.parse(value);
					} catch(e) { true; }
					!value || el.setAttribute("checked",true);
					el.onchange = (event) => {
						this.$set({[item.name]:event.target.checked});
					}
					target.appendChild(el)
				} else if(item.type==="html") {
					el = document.createElement("iframe");
					el.style.border = "none";
					el.src = "data:text/html;charset=utf-8," + escape(item.text);
				} else if(item.type==="textarea") {
					el = document.createElement("textarea");
					!item.value || el.setAttribute("value",item.value);
					el.setAttribute("type",item.keyboard||"text");
				} else {
					this.renderComponents(item.components,target,item.type);
				}
				if(item.href) {
					el.onclick = () => {
						this.$href(item.href);
					}
				} else if(item.action) {
					el.onclick = () => {
						this.call(item.action);
					}
				}
				this.renderStyle(item.style,el);
				if(el) {
					target.appendChild(el);
				}
			}
		}
		renderComponents(components,target,orientation) {
			if(components) {
				for(let component of components) {
					const el = document.createElement(type);
					this.renderItem(component,el,orientation);
					target.appendChild(el);
				}
			}
		}
	}
	window.Jasonette = Jasonette;
})();