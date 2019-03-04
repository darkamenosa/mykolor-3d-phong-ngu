(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0px; }\ncanvas {\n  width: 100% !important;\n  display: block; }\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\na,\na:hover,\na:focus {\n  text-decoration: none;\n  outline: none; }\nimg,\niframe {\n  max-width: 100%; }\ntable {\n  width: 100%; }\nimg {\n  border: none;\n  max-width: 100%;\n  height: auto; }\nol,\nul {\n  list-style: none; }\nfieldset {\n  border: 2px groove threedface;\n  display: block;\n  -webkit-padding-after: 0.75em;\n          padding-block-end: 0.75em;\n  -webkit-padding-before: 0.35em;\n          padding-block-start: 0.35em;\n  text-align: center; }\nfieldset legend {\n  display: inline-block;\n  color: inherit;\n  background: none;\n  vertical-align: top; }\n::-webkit-selection {\n  background: #000000;\n  color: #ffffff; }\n::-moz-selection {\n  background: #000000;\n  color: #ffffff; }\n::selection {\n  background: #000000;\n  color: #ffffff; }\n::-webkit-input-placeholder {\n  transition: text-indent 0.5s ease, color 0.5s ease;\n  color: #969696; }\ninput::-moz-placeholder {\n  color: #969696; }\n::ms-input-placeholder {\n  color: #969696; }\n[placeholder]:focus::-webkit-input-placeholder {\n  text-indent: 10em;\n  color: transparent; }\n[placeholder]:focus::-moz-input-placeholder {\n  text-indent: 10em;\n  color: transparent; }\nbody,\nhtml {\n  font-family: 'Roboto', sans-serif;\n  color: #232323;\n  background: #ffffff;\n  font-size: 14px;\n  overflow-x: hidden; }\n.title {\n  font-family: 'Lora', cursive; }\nmain,\nbody {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9zdGVlbmlmeS9hbmd1bGFyLXRocmVlanMtdGVtcGxhdGUvc3JjL3N0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBTUE7RUFDRSxXQUFXLEVBQUE7QUFFYjtFQUNFLHNCQUFzQjtFQUV0QixjQUFjLEVBQUE7QUFFaEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBO0FBR3hCOzs7RUFHRSxxQkFBcUI7RUFDckIsYUFBYSxFQUFBO0FBR2Y7O0VBRUUsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVksRUFBQTtBQUdkOztFQUVFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCw2QkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLDhCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUdoQjtFQUVFLGtEQUFrRDtFQUNsRCxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUNqQmhCO0VEcUJFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQ2xCcEI7RURzQkUsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCOztFQUVFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLDRCQUE0QixFQUFBO0FBRzlCOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8vIG1haW57XG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgICB3aWR0aDogMTAwdnc7XG5cbi8vIH1cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbn1cbmNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC8vICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEsXG5hOmhvdmVyLFxuYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW1nLFxuaWZyYW1lIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDJweCBncm9vdmUgdGhyZWVkZmFjZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYmxvY2stZW5kOiAwLjc1ZW07XG4gIHBhZGRpbmctYmxvY2stc3RhcnQ6IDAuMzVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG46Oi13ZWJraXQtc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjVzIGVhc2UsIGNvbG9yIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogdGV4dC1pbmRlbnQgMC41cyBlYXNlLCBjb2xvciAwLjVzIGVhc2U7XG4gIGNvbG9yOiAjOTY5Njk2O1xufVxuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTY5Njk2O1xufVxuXG46Om1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWluZGVudDogMTBlbTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotbW96LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgdGV4dC1pbmRlbnQ6IDEwZW07XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYm9keSxcbmh0bWwge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgY3Vyc2l2ZTtcbn1cblxubWFpbixcbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW46IDBweDsgfVxuXG5jYW52YXMge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmEsXG5hOmhvdmVyLFxuYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5pbWcsXG5pZnJhbWUge1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTsgfVxuXG5pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlIHRocmVlZGZhY2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJsb2NrLWVuZDogMC43NWVtO1xuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwLjM1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbjo6LXdlYmtpdC1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtaW5kZW50IDAuNXMgZWFzZSwgY29sb3IgMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiB0ZXh0LWluZGVudCAwLjVzIGVhc2UsIGNvbG9yIDAuNXMgZWFzZTtcbiAgY29sb3I6ICM5Njk2OTY7IH1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk2OTY5NjsgfVxuXG46Om1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5Njk2OTY7IH1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtaW5kZW50OiAxMGVtO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LW1vei1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtaW5kZW50OiAxMGVtO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuYm9keSxcbmh0bWwge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJ0xvcmEnLCBjdXJzaXZlOyB9XG5cbm1haW4sXG5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Documents/steenify/angular-threejs-template/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map