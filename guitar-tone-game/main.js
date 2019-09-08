/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var start = document.getElementById(\"start\");\r\nvar canvas = document.getElementById(\"mycanvas\");\r\nvar cxt = canvas.getContext(\"2d\");\r\ncanvas.width = document.documentElement.clientWidth;\r\ncanvas.height = document.documentElement.clientHeight - start.offsetHeight - 10 * 2;\r\nvar tuner = new Tuner()\r\nvar tones = {\r\n    \"C调\": [\r\n        { name: \"E\", octave: 2, display: [\"E\", \"3\"], level: 'low'},\r\n        { name: \"F\", octave: 2, display: [\"F\", \"4\"], level: 'low' },\r\n        { name: \"G\", octave: 2, display: [\"G\", \"5\"], level: 'low' },\r\n        { name: \"A\", octave: 2, display: [\"A\", \"6\"], level: 'low' },\r\n        { name: \"B\", octave: 2, display: [\"B\", \"7\"], level: 'low' },\r\n        { name: \"C\", octave: 3, display: [\"C\", \"1\"], level: 'middle' },\r\n        { name: \"D\", octave: 3, display: [\"D\", \"2\"], level: 'middle' },\r\n        { name: \"E\", octave: 3, display: [\"E\", \"3\"], level: 'middle' },\r\n        { name: \"F\", octave: 3, display: [\"F\", \"4\"], level: 'middle' },\r\n        { name: \"G\", octave: 3, display: [\"G\", \"5\"], level: 'middle' },\r\n        { name: \"A\", octave: 3, display: [\"A\", \"6\"], level: 'middle' },\r\n        { name: \"B\", octave: 3, display: [\"B\", \"7\"], level: 'middle' },\r\n        { name: \"C\", octave: 4, display: [\"C\", \"1\"], level: 'height' },\r\n        { name: \"D\", octave: 4, display: [\"D\", \"2\"], level: 'height' },\r\n        { name: \"E\", octave: 4, display: [\"E\", \"3\"], level: 'height' },\r\n        { name: \"F\", octave: 4, display: [\"F\", \"4\"], level: 'height' },\r\n        { name: \"G\", octave: 4, display: [\"G\", \"5\"], level: 'height' }\r\n    ]\r\n}\r\n\r\nvar colors = [\"Red\", \"Orange\", \"Yellow\", \"LightGreen\", \"Green\", \"DeepSkyBlue\", \"Fuchsia\"]\r\n\r\nvar globalSpeed = getSettingStore('globalSpeed') ? getSettingStore('globalSpeed') : 3\r\nvar toneNum = getSettingStore('toneNum') ? getSettingStore('toneNum') : 3\r\nvar fontSize = getSettingStore('fontSize') ? getSettingStore('fontSize') : 70\r\nvar displayMode = getSettingStore('displayMode') ? getSettingStore('displayMode') : 'name'\r\n\r\nvar totalToneNum = 0\r\nvar hitToneNum = 0\r\nvar gameTotalTime = 300\r\nvar gameTimeLeft = gameTotalTime\r\n\r\n//随机数\r\nfunction rand(min, max) {\r\n    return parseInt(Math.random() * (max - min + 1) + min);\r\n}\r\n\r\n//创建字母对象\r\nfunction Tone() {\r\n    this.x = rand(0, canvas.width - 160);\r\n    this.y = 0;\r\n    this.note = tones[\"C调\"][rand(0, tones[\"C调\"].length - 1)]\r\n\tif(displayMode === 'name'){\r\n\t\tthis.displayIndex = 0\r\n\t} else if (displayMode === 'number'){\r\n\t\tthis.displayIndex = 1\r\n\t} else {\r\n\t\tthis.displayIndex = rand(0, 1)\r\n\t}\r\n    this.color = colors[rand(0, colors.length)]\r\n}\r\n\r\n//画的方法\r\nTone.prototype.draw = function() {\r\n    cxt.font = \"Bold \" + fontSize + \"px verdana\";\r\n    cxt.fillStyle = this.color\r\n    cxt.shadowColor = \"darkblue\";\r\n    cxt.shadowBlur = 15;\r\n    if (this.note.level === 'low') {\r\n        cxt.fillText(\".\", this.x + fontSize*0.205, this.y + fontSize*0.4)\r\n    } else if (this.note.level === 'height'){\r\n        cxt.fillText(\".\", this.x + fontSize*0.205, this.y - fontSize*0.9)\r\n    }\r\n    cxt.fillText(this.note.display[this.displayIndex], this.x, this.y);\r\n}\r\n//移动的方法\r\nTone.prototype.move = function() {\r\n    this.y += globalSpeed / 2\r\n}\r\n//删除超除屏幕的对象\r\nTone.prototype.clear = function() {\r\n    if (this.y >= canvas.height) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}\r\n\r\nfunction getSettingStore(key) {\r\n    if (localStorage['guitar-tone-game']) {\r\n        return JSON.parse(localStorage['guitar-tone-game'])[key]\r\n    } else {\r\n        return null\r\n    }\r\n}\r\n\r\nfunction setSettingStore(key, value) {\r\n    var o = localStorage['guitar-tone-game']\r\n    if (!o) {\r\n        o = {}\r\n    } else {\r\n        o = JSON.parse(o)\r\n    }\r\n\r\n    o[key] = value\r\n    localStorage['guitar-tone-game'] = JSON.stringify(o)\r\n}\r\n\r\nvar noteList = [];\r\n//控制对象产生速度的数字\r\nvar index = 0\r\nvar gameTimer = null\r\nvar animationFrame = null\r\n\r\nstart.onclick = function() {\r\n    var animate = function() {\r\n        animationFrame = requestAnimationFrame(animate);\r\n\r\n        cxt.clearRect(0, 0, canvas.width, canvas.height);\r\n        //先创建对象\r\n        if (index % 10 == 0 && noteList.length < toneNum && gameTimeLeft != 0) {\r\n            var tone = new Tone();\r\n            noteList.push(tone);\r\n            totalToneNum++\r\n        }\r\n\r\n        for (var i = 0; i < noteList.length; i++) {\r\n            noteList[i].move();\r\n            if (noteList[i].clear()) {\r\n                noteList.splice(i, 1);\r\n                i--;\r\n            } else {\r\n                noteList[i].draw();\r\n            }\r\n        }\r\n        index++;        \r\n    }\r\n\r\n    if (start.classList.contains(\"button-primary\")) {\r\n        tuner.init()\r\n\r\n        // 开始\r\n        $(\"#hitPercent\").text(\"0.0%\")\r\n        $(\"#gameTimeLeft\").text(gameTimeLeft + \" 秒\")\r\n        start.classList.remove(\"button-primary\")\r\n        start.classList.add(\"button-caution\")\r\n        start.innerText = \"停 止\"\r\n        gameTimer = setInterval(function() {\r\n            if (gameTimeLeft === 0 && noteList.length === 0) {\r\n                $(\"#start\").click()\r\n                $(\"#hitPercent2\").text((100.0 * hitToneNum / totalToneNum).toFixed(1) + \"%\")\r\n                $('#myModal').modal('show')\r\n            }\r\n\r\n            if (gameTimeLeft != 0) {\r\n                gameTimeLeft--\r\n            }\r\n            $(\"#gameTimeLeft\").text(gameTimeLeft + \" 秒\")\r\n        }, 1000)\r\n        animate()\r\n    } else {\r\n        // 停止\r\n        cancelAnimationFrame(animationFrame)\r\n        cxt.clearRect(0, 0, canvas.width, canvas.height)\r\n        noteList = []\r\n        start.innerText = \"开 始\"\r\n        start.classList.add(\"button-primary\")\r\n        start.classList.remove(\"button-caution\")\r\n        clearInterval(gameTimer)\r\n        $(\"#hitPercent\").text(\"---\")\r\n        $(\"#gameTimeLeft\").text(\"---\")\r\n        gameTimeLeft = gameTotalTime\r\n    }\r\n\r\n    tuner.onNoteDetected = function(note) {\r\n        console.log(note)\r\n        for (var i = 0; i < noteList.length; i++) {\r\n            if (noteList[i].note.name === note.name && noteList[i].note.octave === note.octave) {\r\n                hitToneNum++\r\n                noteList.splice(i, 1);\r\n                i--;\r\n                $(\"#hitPercent\").text((100.0 * hitToneNum / totalToneNum).toFixed(1) + \"%\")\r\n                break;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n$('#speedSlider').slider({\r\n    value: globalSpeed,\r\n    min: 0,\r\n    max: 20,\r\n    step: 1\r\n})\r\n$(\"#speedSliderVal\").text(globalSpeed)\r\n$(\"#speedSlider\").on(\"change\", function(ev) {\r\n    globalSpeed = ev.value.newValue\r\n    $(\"#speedSliderVal\").text(globalSpeed)\r\n    setSettingStore('globalSpeed', globalSpeed)\r\n})\r\n\r\n$('#numSlider').slider({\r\n    value: toneNum,\r\n    min: 1,\r\n    max: 10,\r\n    step: 1\r\n})\r\n$(\"#numSliderVal\").text(toneNum)\r\n$(\"#numSlider\").on(\"change\", function(ev) {\r\n    toneNum = ev.value.newValue\r\n    $(\"#numSliderVal\").text(toneNum)\r\n    setSettingStore('toneNum', toneNum)\r\n})\r\n\r\n$('#fontSizeSlider').slider({\r\n    value: fontSize,\r\n    min: 30,\r\n    max: 400,\r\n    step: 5\r\n})\r\n$(\"#fontSizeSliderVal\").text(fontSize)\r\n$(\"#fontSizeSlider\").on(\"change\", function(ev) {\r\n    fontSize = ev.value.newValue\r\n    $(\"#fontSizeSliderVal\").text(fontSize)\r\n    setSettingStore('fontSize', fontSize)\r\n})\r\n\r\n$(\"#displayMode\").val(displayMode)\r\n$(\"#displayMode\").on(\"change\", function(ev) {\r\n\tdisplayMode = $(\"#displayMode\").val()\r\n\tsetSettingStore('displayMode', displayMode)\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });