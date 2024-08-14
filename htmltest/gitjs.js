(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver(i => {
		for (const o of i)
			if (o.type === "childList")
				for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(i) {
		const o = {};
		return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
	}

	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o)
	}
})();

function am(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Cf = {
		exports: {}
	},
	xo = {},
	Ef = {
		exports: {}
	},
	_ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = Symbol.for("react.element"),
	um = Symbol.for("react.portal"),
	cm = Symbol.for("react.fragment"),
	fm = Symbol.for("react.strict_mode"),
	dm = Symbol.for("react.profiler"),
	hm = Symbol.for("react.provider"),
	pm = Symbol.for("react.context"),
	mm = Symbol.for("react.forward_ref"),
	gm = Symbol.for("react.suspense"),
	ym = Symbol.for("react.memo"),
	vm = Symbol.for("react.lazy"),
	ru = Symbol.iterator;

function xm(e) {
	return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Mf = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	Vf = Object.assign,
	Lf = {};

function Yn(e, t, n) {
	this.props = e, this.context = t, this.refs = Lf, this.updater = n || Mf
}
Yn.prototype.isReactComponent = {};
Yn.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
Yn.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Af() {}
Af.prototype = Yn.prototype;

function jl(e, t, n) {
	this.props = e, this.context = t, this.refs = Lf, this.updater = n || Mf
}
var Ol = jl.prototype = new Af;
Ol.constructor = jl;
Vf(Ol, Yn.prototype);
Ol.isPureReactComponent = !0;
var iu = Array.isArray,
	Rf = Object.prototype.hasOwnProperty,
	Fl = {
		current: null
	},
	Df = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function Nf(e, t, n) {
	var r, i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Rf.call(t, r) && !Df.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		i.children = a
	}
	if (e && e.defaultProps)
		for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Qr,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Fl.current
	}
}

function wm(e, t) {
	return {
		$$typeof: Qr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function zl(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Qr
}

function Sm(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var ou = /\/+/g;

function $o(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? Sm("" + e.key) : t.toString(36)
}

function Ti(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else switch (o) {
		case "string":
		case "number":
			s = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case Qr:
				case um:
					s = !0
			}
	}
	if (s) return s = e, i = i(s), e = r === "" ? "." + $o(s, 0) : r, iu(i) ? (n = "", e != null && (n = e.replace(ou, "$&/") + "/"), Ti(i, t, n, "", function(u) {
		return u
	})) : i != null && (zl(i) && (i = wm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ou, "$&/") + "/") + e)), t.push(i)), 1;
	if (s = 0, r = r === "" ? "." : r + ":", iu(e))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = r + $o(o, l);
			s += Ti(o, t, n, a, i)
		} else if (a = xm(e), typeof a == "function")
			for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + $o(o, l++), s += Ti(o, t, n, a, i);
		else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return s
}

function ii(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return Ti(e, r, "", "", function(o) {
		return t.call(n, o, i++)
	}), r
}

function km(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var ve = {
		current: null
	},
	Ci = {
		transition: null
	},
	Pm = {
		ReactCurrentDispatcher: ve,
		ReactCurrentBatchConfig: Ci,
		ReactCurrentOwner: Fl
	};

function _f() {
	throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
	map: ii,
	forEach: function(e, t, n) {
		ii(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return ii(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return ii(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!zl(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
_.Component = Yn;
_.Fragment = cm;
_.Profiler = dm;
_.PureComponent = jl;
_.StrictMode = fm;
_.Suspense = gm;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pm;
_.act = _f;
_.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = Vf({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (o = t.ref, s = Fl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
		for (a in t) Rf.call(t, a) && !Df.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l
	}
	return {
		$$typeof: Qr,
		type: e.type,
		key: i,
		ref: o,
		props: r,
		_owner: s
	}
};
_.createContext = function(e) {
	return e = {
		$$typeof: pm,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: hm,
		_context: e
	}, e.Consumer = e
};
_.createElement = Nf;
_.createFactory = function(e) {
	var t = Nf.bind(null, e);
	return t.type = e, t
};
_.createRef = function() {
	return {
		current: null
	}
};
_.forwardRef = function(e) {
	return {
		$$typeof: mm,
		render: e
	}
};
_.isValidElement = zl;
_.lazy = function(e) {
	return {
		$$typeof: vm,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: km
	}
};
_.memo = function(e, t) {
	return {
		$$typeof: ym,
		type: e,
		compare: t === void 0 ? null : t
	}
};
_.startTransition = function(e) {
	var t = Ci.transition;
	Ci.transition = {};
	try {
		e()
	} finally {
		Ci.transition = t
	}
};
_.unstable_act = _f;
_.useCallback = function(e, t) {
	return ve.current.useCallback(e, t)
};
_.useContext = function(e) {
	return ve.current.useContext(e)
};
_.useDebugValue = function() {};
_.useDeferredValue = function(e) {
	return ve.current.useDeferredValue(e)
};
_.useEffect = function(e, t) {
	return ve.current.useEffect(e, t)
};
_.useId = function() {
	return ve.current.useId()
};
_.useImperativeHandle = function(e, t, n) {
	return ve.current.useImperativeHandle(e, t, n)
};
_.useInsertionEffect = function(e, t) {
	return ve.current.useInsertionEffect(e, t)
};
_.useLayoutEffect = function(e, t) {
	return ve.current.useLayoutEffect(e, t)
};
_.useMemo = function(e, t) {
	return ve.current.useMemo(e, t)
};
_.useReducer = function(e, t, n) {
	return ve.current.useReducer(e, t, n)
};
_.useRef = function(e) {
	return ve.current.useRef(e)
};
_.useState = function(e) {
	return ve.current.useState(e)
};
_.useSyncExternalStore = function(e, t, n) {
	return ve.current.useSyncExternalStore(e, t, n)
};
_.useTransition = function() {
	return ve.current.useTransition()
};
_.version = "18.3.1";
Ef.exports = _;
var R = Ef.exports;
const Ct = am(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm = R,
	Cm = Symbol.for("react.element"),
	Em = Symbol.for("react.fragment"),
	Mm = Object.prototype.hasOwnProperty,
	Vm = Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Lm = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function jf(e, t, n) {
	var r, i = {},
		o = null,
		s = null;
	n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
	for (r in t) Mm.call(t, r) && !Lm.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Cm,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Vm.current
	}
}
xo.Fragment = Em;
xo.jsx = jf;
xo.jsxs = jf;
Cf.exports = xo;
var C = Cf.exports,
	Ms = {},
	Of = {
		exports: {}
	},
	Re = {},
	Ff = {
		exports: {}
	},
	zf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(E, D) {
		var N = E.length;
		E.push(D);
		e: for (; 0 < N;) {
			var Y = N - 1 >>> 1,
				te = E[Y];
			if (0 < i(te, D)) E[Y] = D, E[N] = te, N = Y;
			else break e
		}
	}

	function n(E) {
		return E.length === 0 ? null : E[0]
	}

	function r(E) {
		if (E.length === 0) return null;
		var D = E[0],
			N = E.pop();
		if (N !== D) {
			E[0] = N;
			e: for (var Y = 0, te = E.length, ni = te >>> 1; Y < ni;) {
				var Gt = 2 * (Y + 1) - 1,
					Uo = E[Gt],
					Qt = Gt + 1,
					ri = E[Qt];
				if (0 > i(Uo, N)) Qt < te && 0 > i(ri, Uo) ? (E[Y] = ri, E[Qt] = N, Y = Qt) : (E[Y] = Uo, E[Gt] = N, Y = Gt);
				else if (Qt < te && 0 > i(ri, N)) E[Y] = ri, E[Qt] = N, Y = Qt;
				else break e
			}
		}
		return D
	}

	function i(E, D) {
		var N = E.sortIndex - D.sortIndex;
		return N !== 0 ? N : E.id - D.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function() {
			return o.now()
		}
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function() {
			return s.now() - l
		}
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		g = !1,
		y = !1,
		v = !1,
		P = typeof setTimeout == "function" ? setTimeout : null,
		m = typeof clearTimeout == "function" ? clearTimeout : null,
		h = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function p(E) {
		for (var D = n(u); D !== null;) {
			if (D.callback === null) r(u);
			else if (D.startTime <= E) r(u), D.sortIndex = D.expirationTime, t(a, D);
			else break;
			D = n(u)
		}
	}

	function x(E) {
		if (v = !1, p(E), !y)
			if (n(a) !== null) y = !0, Ce(w);
			else {
				var D = n(u);
				D !== null && Kt(x, D.startTime - E)
			}
	}

	function w(E, D) {
		y = !1, v && (v = !1, m(k), k = -1), g = !0;
		var N = d;
		try {
			for (p(D), f = n(a); f !== null && (!(f.expirationTime > D) || E && !ee());) {
				var Y = f.callback;
				if (typeof Y == "function") {
					f.callback = null, d = f.priorityLevel;
					var te = Y(f.expirationTime <= D);
					D = e.unstable_now(), typeof te == "function" ? f.callback = te : f === n(a) && r(a), p(D)
				} else r(a);
				f = n(a)
			}
			if (f !== null) var ni = !0;
			else {
				var Gt = n(u);
				Gt !== null && Kt(x, Gt.startTime - D), ni = !1
			}
			return ni
		} finally {
			f = null, d = N, g = !1
		}
	}
	var T = !1,
		M = null,
		k = -1,
		j = 5,
		A = -1;

	function ee() {
		return !(e.unstable_now() - A < j)
	}

	function mt() {
		if (M !== null) {
			var E = e.unstable_now();
			A = E;
			var D = !0;
			try {
				D = M(!0, E)
			} finally {
				D ? Wt() : (T = !1, M = null)
			}
		} else T = !1
	}
	var Wt;
	if (typeof h == "function") Wt = function() {
		h(mt)
	};
	else if (typeof MessageChannel < "u") {
		var qn = new MessageChannel,
			ie = qn.port2;
		qn.port1.onmessage = mt, Wt = function() {
			ie.postMessage(null)
		}
	} else Wt = function() {
		P(mt, 0)
	};

	function Ce(E) {
		M = E, T || (T = !0, Wt())
	}

	function Kt(E, D) {
		k = P(function() {
			E(e.unstable_now())
		}, D)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
		E.callback = null
	}, e.unstable_continueExecution = function() {
		y || g || (y = !0, Ce(w))
	}, e.unstable_forceFrameRate = function(E) {
		0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < E ? Math.floor(1e3 / E) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return d
	}, e.unstable_getFirstCallbackNode = function() {
		return n(a)
	}, e.unstable_next = function(E) {
		switch (d) {
			case 1:
			case 2:
			case 3:
				var D = 3;
				break;
			default:
				D = d
		}
		var N = d;
		d = D;
		try {
			return E()
		} finally {
			d = N
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, D) {
		switch (E) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				E = 3
		}
		var N = d;
		d = E;
		try {
			return D()
		} finally {
			d = N
		}
	}, e.unstable_scheduleCallback = function(E, D, N) {
		var Y = e.unstable_now();
		switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? Y + N : Y) : N = Y, E) {
			case 1:
				var te = -1;
				break;
			case 2:
				te = 250;
				break;
			case 5:
				te = 1073741823;
				break;
			case 4:
				te = 1e4;
				break;
			default:
				te = 5e3
		}
		return te = N + te, E = {
			id: c++,
			callback: D,
			priorityLevel: E,
			startTime: N,
			expirationTime: te,
			sortIndex: -1
		}, N > Y ? (E.sortIndex = N, t(u, E), n(a) === null && E === n(u) && (v ? (m(k), k = -1) : v = !0, Kt(x, N - Y))) : (E.sortIndex = te, t(a, E), y || g || (y = !0, Ce(w))), E
	}, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(E) {
		var D = d;
		return function() {
			var N = d;
			d = D;
			try {
				return E.apply(this, arguments)
			} finally {
				d = N
			}
		}
	}
})(zf);
Ff.exports = zf;
var Am = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm = R,
	Le = Am;

function S(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var If = new Set,
	Er = {};

function dn(e, t) {
	In(e, t), In(e + "Capture", t)
}

function In(e, t) {
	for (Er[e] = t, e = 0; e < t.length; e++) If.add(t[e])
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	Vs = Object.prototype.hasOwnProperty,
	Dm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	su = {},
	lu = {};

function Nm(e) {
	return Vs.call(lu, e) ? !0 : Vs.call(su, e) ? !1 : Dm.test(e) ? lu[e] = !0 : (su[e] = !0, !1)
}

function _m(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function jm(e, t, n, r) {
	if (t === null || typeof t > "u" || _m(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function xe(e, t, n, r, i, o, s) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	ae[e] = new xe(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	ae[t] = new xe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	ae[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	ae[e] = new xe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	ae[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	ae[e] = new xe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	ae[e] = new xe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	ae[e] = new xe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	ae[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Il = /[\-:]([a-z])/g;

function Bl(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(Il, Bl);
	ae[t] = new xe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(Il, Bl);
	ae[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(Il, Bl);
	ae[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	ae[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ae.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	ae[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ul(e, t, n, r) {
	var i = ae.hasOwnProperty(t) ? ae[t] : null;
	(i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jm(t, n, i, r) && (n = null), r || i === null ? Nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	oi = Symbol.for("react.element"),
	yn = Symbol.for("react.portal"),
	vn = Symbol.for("react.fragment"),
	$l = Symbol.for("react.strict_mode"),
	Ls = Symbol.for("react.profiler"),
	Bf = Symbol.for("react.provider"),
	Uf = Symbol.for("react.context"),
	Hl = Symbol.for("react.forward_ref"),
	As = Symbol.for("react.suspense"),
	Rs = Symbol.for("react.suspense_list"),
	Wl = Symbol.for("react.memo"),
	vt = Symbol.for("react.lazy"),
	$f = Symbol.for("react.offscreen"),
	au = Symbol.iterator;

function bn(e) {
	return e === null || typeof e != "object" ? null : (e = au && e[au] || e["@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
	Ho;

function ar(e) {
	if (Ho === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Ho = t && t[1] || ""
	}
	return `
` + Ho + e
}
var Wo = !1;

function Ko(e, t) {
	if (!e || Wo) return "";
	Wo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if (s--, l--, 0 > l || i[s] !== o[l]) {
								var a = `
` + i[s].replace(" at new ", " at ");
								return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
							} while (1 <= s && 0 <= l);
					break
				}
		}
	} finally {
		Wo = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? ar(e) : ""
}

function Om(e) {
	switch (e.tag) {
		case 5:
			return ar(e.type);
		case 16:
			return ar("Lazy");
		case 13:
			return ar("Suspense");
		case 19:
			return ar("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Ko(e.type, !1), e;
		case 11:
			return e = Ko(e.type.render, !1), e;
		case 1:
			return e = Ko(e.type, !0), e;
		default:
			return ""
	}
}

function Ds(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case vn:
			return "Fragment";
		case yn:
			return "Portal";
		case Ls:
			return "Profiler";
		case $l:
			return "StrictMode";
		case As:
			return "Suspense";
		case Rs:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case Uf:
			return (e.displayName || "Context") + ".Consumer";
		case Bf:
			return (e._context.displayName || "Context") + ".Provider";
		case Hl:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case Wl:
			return t = e.displayName || null, t !== null ? t : Ds(e.type) || "Memo";
		case vt:
			t = e._payload, e = e._init;
			try {
				return Ds(e(t))
			} catch {}
	}
	return null
}

function Fm(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Ds(t);
		case 8:
			return t === $l ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function Ot(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function Hf(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function zm(e) {
	var t = Hf(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var i = n.get,
			o = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return i.call(this)
			},
			set: function(s) {
				r = "" + s, o.call(this, s)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(s) {
				r = "" + s
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function si(e) {
	e._valueTracker || (e._valueTracker = zm(e))
}

function Wf(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = Hf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ii(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function Ns(e, t) {
	var n = t.checked;
	return G({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ? ? e._wrapperState.initialChecked
	})
}

function uu(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = Ot(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function Kf(e, t) {
	t = t.checked, t != null && Ul(e, "checked", t, !1)
}

function _s(e, t) {
	Kf(e, t);
	var n = Ot(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? js(e, t.type, n) : t.hasOwnProperty("defaultValue") && js(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function cu(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function js(e, t, n) {
	(t !== "number" || Ii(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ur = Array.isArray;

function Nn(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + Ot(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				e[i].selected = !0, r && (e[i].defaultSelected = !0);
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}

function Os(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
	return G({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function fu(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(S(92));
			if (ur(n)) {
				if (1 < n.length) throw Error(S(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: Ot(n)
	}
}

function Gf(e, t) {
	var n = Ot(t.value),
		r = Ot(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function du(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Qf(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function Fs(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? Qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var li, Yf = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, i)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (li = li || document.createElement("div"), li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = li.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Mr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var hr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	Im = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
	Im.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e]
	})
});

function Xf(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px"
}

function Zf(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Xf(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
		}
}
var Bm = G({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function zs(e, t) {
	if (t) {
		if (Bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(S(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(S(62))
	}
}

function Is(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var Bs = null;

function Kl(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Us = null,
	_n = null,
	jn = null;

function hu(e) {
	if (e = Zr(e)) {
		if (typeof Us != "function") throw Error(S(280));
		var t = e.stateNode;
		t && (t = To(t), Us(e.stateNode, e.type, t))
	}
}

function Jf(e) {
	_n ? jn ? jn.push(e) : jn = [e] : _n = e
}

function qf() {
	if (_n) {
		var e = _n,
			t = jn;
		if (jn = _n = null, hu(e), t)
			for (e = 0; e < t.length; e++) hu(t[e])
	}
}

function bf(e, t) {
	return e(t)
}

function ed() {}
var Go = !1;

function td(e, t, n) {
	if (Go) return e(t, n);
	Go = !0;
	try {
		return bf(e, t, n)
	} finally {
		Go = !1, (_n !== null || jn !== null) && (ed(), qf())
	}
}

function Vr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = To(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(S(231, t, typeof n));
	return n
}
var $s = !1;
if (ut) try {
	var er = {};
	Object.defineProperty(er, "passive", {
		get: function() {
			$s = !0
		}
	}), window.addEventListener("test", er, er), window.removeEventListener("test", er, er)
} catch {
	$s = !1
}

function Um(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var pr = !1,
	Bi = null,
	Ui = !1,
	Hs = null,
	$m = {
		onError: function(e) {
			pr = !0, Bi = e
		}
	};

function Hm(e, t, n, r, i, o, s, l, a) {
	pr = !1, Bi = null, Um.apply($m, arguments)
}

function Wm(e, t, n, r, i, o, s, l, a) {
	if (Hm.apply(this, arguments), pr) {
		if (pr) {
			var u = Bi;
			pr = !1, Bi = null
		} else throw Error(S(198));
		Ui || (Ui = !0, Hs = u)
	}
}

function hn(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function nd(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function pu(e) {
	if (hn(e) !== e) throw Error(S(188))
}

function Km(e) {
	var t = e.alternate;
	if (!t) {
		if (t = hn(e), t === null) throw Error(S(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (r = i.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (i.child === o.child) {
			for (o = i.child; o;) {
				if (o === n) return pu(i), e;
				if (o === r) return pu(i), t;
				o = o.sibling
			}
			throw Error(S(188))
		}
		if (n.return !== r.return) n = i, r = o;
		else {
			for (var s = !1, l = i.child; l;) {
				if (l === n) {
					s = !0, n = i, r = o;
					break
				}
				if (l === r) {
					s = !0, r = i, n = o;
					break
				}
				l = l.sibling
			}
			if (!s) {
				for (l = o.child; l;) {
					if (l === n) {
						s = !0, n = o, r = i;
						break
					}
					if (l === r) {
						s = !0, r = o, n = i;
						break
					}
					l = l.sibling
				}
				if (!s) throw Error(S(189))
			}
		}
		if (n.alternate !== r) throw Error(S(190))
	}
	if (n.tag !== 3) throw Error(S(188));
	return n.stateNode.current === n ? e : t
}

function rd(e) {
	return e = Km(e), e !== null ? id(e) : null
}

function id(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = id(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var od = Le.unstable_scheduleCallback,
	mu = Le.unstable_cancelCallback,
	Gm = Le.unstable_shouldYield,
	Qm = Le.unstable_requestPaint,
	Z = Le.unstable_now,
	Ym = Le.unstable_getCurrentPriorityLevel,
	Gl = Le.unstable_ImmediatePriority,
	sd = Le.unstable_UserBlockingPriority,
	$i = Le.unstable_NormalPriority,
	Xm = Le.unstable_LowPriority,
	ld = Le.unstable_IdlePriority,
	wo = null,
	Je = null;

function Zm(e) {
	if (Je && typeof Je.onCommitFiberRoot == "function") try {
		Je.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var Ke = Math.clz32 ? Math.clz32 : bm,
	Jm = Math.log,
	qm = Math.LN2;

function bm(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - (Jm(e) / qm | 0) | 0
}
var ai = 64,
	ui = 4194304;

function cr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function Hi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0 ? r = cr(l) : (o &= s, o !== 0 && (r = cr(o)))
	} else s = n & ~i, s !== 0 ? r = cr(s) : o !== 0 && (r = cr(o));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ke(t), i = 1 << n, r |= e[n], t &= ~i;
	return r
}

function e0(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function t0(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
		var s = 31 - Ke(o),
			l = 1 << s,
			a = i[s];
		a === -1 ? (!(l & n) || l & r) && (i[s] = e0(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
	}
}

function Ws(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ad() {
	var e = ai;
	return ai <<= 1, !(ai & 4194240) && (ai = 64), e
}

function Qo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function Yr(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ke(t), e[t] = n
}

function n0(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var i = 31 - Ke(n),
			o = 1 << i;
		t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
	}
}

function Ql(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - Ke(n),
			i = 1 << r;
		i & t | e[r] & t && (e[r] |= t), n &= ~i
	}
}
var z = 0;

function ud(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var cd, Yl, fd, dd, hd, Ks = !1,
	ci = [],
	Et = null,
	Mt = null,
	Vt = null,
	Lr = new Map,
	Ar = new Map,
	St = [],
	r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function gu(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Et = null;
			break;
		case "dragenter":
		case "dragleave":
			Mt = null;
			break;
		case "mouseover":
		case "mouseout":
			Vt = null;
			break;
		case "pointerover":
		case "pointerout":
			Lr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Ar.delete(t.pointerId)
	}
}

function tr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: o,
		targetContainers: [i]
	}, t !== null && (t = Zr(t), t !== null && Yl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function i0(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return Et = tr(Et, e, t, n, r, i), !0;
		case "dragenter":
			return Mt = tr(Mt, e, t, n, r, i), !0;
		case "mouseover":
			return Vt = tr(Vt, e, t, n, r, i), !0;
		case "pointerover":
			var o = i.pointerId;
			return Lr.set(o, tr(Lr.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return o = i.pointerId, Ar.set(o, tr(Ar.get(o) || null, e, t, n, r, i)), !0
	}
	return !1
}

function pd(e) {
	var t = bt(e.target);
	if (t !== null) {
		var n = hn(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = nd(n), t !== null) {
					e.blockedOn = t, hd(e.priority, function() {
						fd(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function Ei(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = Gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			Bs = r, n.target.dispatchEvent(r), Bs = null
		} else return t = Zr(n), t !== null && Yl(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function yu(e, t, n) {
	Ei(e) && n.delete(t)
}

function o0() {
	Ks = !1, Et !== null && Ei(Et) && (Et = null), Mt !== null && Ei(Mt) && (Mt = null), Vt !== null && Ei(Vt) && (Vt = null), Lr.forEach(yu), Ar.forEach(yu)
}

function nr(e, t) {
	e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, o0)))
}

function Rr(e) {
	function t(i) {
		return nr(i, e)
	}
	if (0 < ci.length) {
		nr(ci[0], e);
		for (var n = 1; n < ci.length; n++) {
			var r = ci[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (Et !== null && nr(Et, e), Mt !== null && nr(Mt, e), Vt !== null && nr(Vt, e), Lr.forEach(t), Ar.forEach(t), n = 0; n < St.length; n++) r = St[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < St.length && (n = St[0], n.blockedOn === null);) pd(n), n.blockedOn === null && St.shift()
}
var On = pt.ReactCurrentBatchConfig,
	Wi = !0;

function s0(e, t, n, r) {
	var i = z,
		o = On.transition;
	On.transition = null;
	try {
		z = 1, Xl(e, t, n, r)
	} finally {
		z = i, On.transition = o
	}
}

function l0(e, t, n, r) {
	var i = z,
		o = On.transition;
	On.transition = null;
	try {
		z = 4, Xl(e, t, n, r)
	} finally {
		z = i, On.transition = o
	}
}

function Xl(e, t, n, r) {
	if (Wi) {
		var i = Gs(e, t, n, r);
		if (i === null) rs(e, t, r, Ki, n), gu(e, r);
		else if (i0(i, e, t, n, r)) r.stopPropagation();
		else if (gu(e, r), t & 4 && -1 < r0.indexOf(e)) {
			for (; i !== null;) {
				var o = Zr(i);
				if (o !== null && cd(o), o = Gs(e, t, n, r), o === null && rs(e, t, r, Ki, n), o === i) break;
				i = o
			}
			i !== null && r.stopPropagation()
		} else rs(e, t, r, null, n)
	}
}
var Ki = null;

function Gs(e, t, n, r) {
	if (Ki = null, e = Kl(r), e = bt(e), e !== null)
		if (t = hn(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = nd(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return Ki = e, null
}

function md(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Ym()) {
				case Gl:
					return 1;
				case sd:
					return 4;
				case $i:
				case Xm:
					return 16;
				case ld:
					return 536870912;
				default:
					return 16
			}
			default:
				return 16
	}
}
var Pt = null,
	Zl = null,
	Mi = null;

function gd() {
	if (Mi) return Mi;
	var e, t = Zl,
		n = t.length,
		r, i = "value" in Pt ? Pt.value : Pt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return Mi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Vi(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function fi() {
	return !0
}

function vu() {
	return !1
}

function De(e) {
	function t(n, r, i, o, s) {
		this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
		for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
		return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? fi : vu, this.isPropagationStopped = vu, this
	}
	return G(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = fi)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = fi)
		},
		persist: function() {},
		isPersistent: fi
	}), t
}
var Xn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Jl = De(Xn),
	Xr = G({}, Xn, {
		view: 0,
		detail: 0
	}),
	a0 = De(Xr),
	Yo, Xo, rr, So = G({}, Xr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ql,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (Yo = e.screenX - rr.screenX, Xo = e.screenY - rr.screenY) : Xo = Yo = 0, rr = e), Yo)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Xo
		}
	}),
	xu = De(So),
	u0 = G({}, So, {
		dataTransfer: 0
	}),
	c0 = De(u0),
	f0 = G({}, Xr, {
		relatedTarget: 0
	}),
	Zo = De(f0),
	d0 = G({}, Xn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	h0 = De(d0),
	p0 = G({}, Xn, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	m0 = De(p0),
	g0 = G({}, Xn, {
		data: 0
	}),
	wu = De(g0),
	y0 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	v0 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	x0 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function w0(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = x0[e]) ? !!t[e] : !1
}

function ql() {
	return w0
}
var S0 = G({}, Xr, {
		key: function(e) {
			if (e.key) {
				var t = y0[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = Vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? v0[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ql,
		charCode: function(e) {
			return e.type === "keypress" ? Vi(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	k0 = De(S0),
	P0 = G({}, So, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	Su = De(P0),
	T0 = G({}, Xr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ql
	}),
	C0 = De(T0),
	E0 = G({}, Xn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	M0 = De(E0),
	V0 = G({}, So, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	L0 = De(V0),
	A0 = [9, 13, 27, 32],
	bl = ut && "CompositionEvent" in window,
	mr = null;
ut && "documentMode" in document && (mr = document.documentMode);
var R0 = ut && "TextEvent" in window && !mr,
	yd = ut && (!bl || mr && 8 < mr && 11 >= mr),
	ku = " ",
	Pu = !1;

function vd(e, t) {
	switch (e) {
		case "keyup":
			return A0.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function xd(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var xn = !1;

function D0(e, t) {
	switch (e) {
		case "compositionend":
			return xd(t);
		case "keypress":
			return t.which !== 32 ? null : (Pu = !0, ku);
		case "textInput":
			return e = t.data, e === ku && Pu ? null : e;
		default:
			return null
	}
}

function N0(e, t) {
	if (xn) return e === "compositionend" || !bl && vd(e, t) ? (e = gd(), Mi = Zl = Pt = null, xn = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return yd && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var _0 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function Tu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!_0[e.type] : t === "textarea"
}

function wd(e, t, n, r) {
	Jf(r), t = Gi(t, "onChange"), 0 < t.length && (n = new Jl("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var gr = null,
	Dr = null;

function j0(e) {
	Rd(e, 0)
}

function ko(e) {
	var t = kn(e);
	if (Wf(t)) return e
}

function O0(e, t) {
	if (e === "change") return t
}
var Sd = !1;
if (ut) {
	var Jo;
	if (ut) {
		var qo = "oninput" in document;
		if (!qo) {
			var Cu = document.createElement("div");
			Cu.setAttribute("oninput", "return;"), qo = typeof Cu.oninput == "function"
		}
		Jo = qo
	} else Jo = !1;
	Sd = Jo && (!document.documentMode || 9 < document.documentMode)
}

function Eu() {
	gr && (gr.detachEvent("onpropertychange", kd), Dr = gr = null)
}

function kd(e) {
	if (e.propertyName === "value" && ko(Dr)) {
		var t = [];
		wd(t, Dr, e, Kl(e)), td(j0, t)
	}
}

function F0(e, t, n) {
	e === "focusin" ? (Eu(), gr = t, Dr = n, gr.attachEvent("onpropertychange", kd)) : e === "focusout" && Eu()
}

function z0(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return ko(Dr)
}

function I0(e, t) {
	if (e === "click") return ko(t)
}

function B0(e, t) {
	if (e === "input" || e === "change") return ko(t)
}

function U0(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qe = typeof Object.is == "function" ? Object.is : U0;

function Nr(e, t) {
	if (Qe(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Vs.call(t, i) || !Qe(e[i], t[i])) return !1
	}
	return !0
}

function Mu(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function Vu(e, t) {
	var n = Mu(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Mu(n)
	}
}

function Pd(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Td() {
	for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ii(e.document)
	}
	return t
}

function ea(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function $0(e) {
	var t = Td(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Pd(n.ownerDocument.documentElement, n)) {
		if (r !== null && ea(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Vu(n, o);
				var s = Vu(n, r);
				i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var H0 = ut && "documentMode" in document && 11 >= document.documentMode,
	wn = null,
	Qs = null,
	yr = null,
	Ys = !1;

function Lu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Ys || wn == null || wn !== Ii(r) || (r = wn, "selectionStart" in r && ea(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), yr && Nr(yr, r) || (yr = r, r = Gi(Qs, "onSelect"), 0 < r.length && (t = new Jl("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = wn)))
}

function di(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Sn = {
		animationend: di("Animation", "AnimationEnd"),
		animationiteration: di("Animation", "AnimationIteration"),
		animationstart: di("Animation", "AnimationStart"),
		transitionend: di("Transition", "TransitionEnd")
	},
	bo = {},
	Cd = {};
ut && (Cd = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);

function Po(e) {
	if (bo[e]) return bo[e];
	if (!Sn[e]) return e;
	var t = Sn[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in Cd) return bo[e] = t[n];
	return e
}
var Ed = Po("animationend"),
	Md = Po("animationiteration"),
	Vd = Po("animationstart"),
	Ld = Po("transitionend"),
	Ad = new Map,
	Au = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Bt(e, t) {
	Ad.set(e, t), dn(t, [e])
}
for (var es = 0; es < Au.length; es++) {
	var ts = Au[es],
		W0 = ts.toLowerCase(),
		K0 = ts[0].toUpperCase() + ts.slice(1);
	Bt(W0, "on" + K0)
}
Bt(Ed, "onAnimationEnd");
Bt(Md, "onAnimationIteration");
Bt(Vd, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Ld, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	G0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));

function Ru(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, Wm(r, t, void 0, e), e.currentTarget = null
}

function Rd(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
					Ru(i, l, u), o = a
				} else
					for (s = 0; s < r.length; s++) {
						if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
						Ru(i, l, u), o = a
					}
		}
	}
	if (Ui) throw e = Hs, Ui = !1, Hs = null, e
}

function B(e, t) {
	var n = t[bs];
	n === void 0 && (n = t[bs] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Dd(t, e, 2, !1), n.add(r))
}

function ns(e, t, n) {
	var r = 0;
	t && (r |= 4), Dd(n, e, r, t)
}
var hi = "_reactListening" + Math.random().toString(36).slice(2);

function _r(e) {
	if (!e[hi]) {
		e[hi] = !0, If.forEach(function(n) {
			n !== "selectionchange" && (G0.has(n) || ns(n, !1, e), ns(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[hi] || (t[hi] = !0, ns("selectionchange", !1, t))
	}
}

function Dd(e, t, n, r) {
	switch (md(t)) {
		case 1:
			var i = s0;
			break;
		case 4:
			i = l0;
			break;
		default:
			i = Xl
	}
	n = i.bind(null, t, n, e), i = void 0, !$s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: i
	}) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
		passive: i
	}) : e.addEventListener(t, n, !1)
}

function rs(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var s = r.tag;
		if (s === 3 || s === 4) {
			var l = r.stateNode.containerInfo;
			if (l === i || l.nodeType === 8 && l.parentNode === i) break;
			if (s === 4)
				for (s = r.return; s !== null;) {
					var a = s.tag;
					if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
					s = s.return
				}
			for (; l !== null;) {
				if (s = bt(l), s === null) return;
				if (a = s.tag, a === 5 || a === 6) {
					r = o = s;
					continue e
				}
				l = l.parentNode
			}
		}
		r = r.return
	}
	td(function() {
		var u = o,
			c = Kl(n),
			f = [];
		e: {
			var d = Ad.get(e);
			if (d !== void 0) {
				var g = Jl,
					y = e;
				switch (e) {
					case "keypress":
						if (Vi(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = k0;
						break;
					case "focusin":
						y = "focus", g = Zo;
						break;
					case "focusout":
						y = "blur", g = Zo;
						break;
					case "beforeblur":
					case "afterblur":
						g = Zo;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						g = xu;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = c0;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = C0;
						break;
					case Ed:
					case Md:
					case Vd:
						g = h0;
						break;
					case Ld:
						g = M0;
						break;
					case "scroll":
						g = a0;
						break;
					case "wheel":
						g = L0;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = m0;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = Su
				}
				var v = (t & 4) !== 0,
					P = !v && e === "scroll",
					m = v ? d !== null ? d + "Capture" : null : d;
				v = [];
				for (var h = u, p; h !== null;) {
					p = h;
					var x = p.stateNode;
					if (p.tag === 5 && x !== null && (p = x, m !== null && (x = Vr(h, m), x != null && v.push(jr(h, x, p)))), P) break;
					h = h.return
				}
				0 < v.length && (d = new g(d, y, null, n, c), f.push({
					event: d,
					listeners: v
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Bs && (y = n.relatedTarget || n.fromElement) && (bt(y) || y[ct])) break e;
				if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? bt(y) : null, y !== null && (P = hn(y), y !== P || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
					if (v = xu, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Su, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), P = g == null ? d : kn(g), p = y == null ? d : kn(y), d = new v(x, h + "leave", g, n, c), d.target = P, d.relatedTarget = p, x = null, bt(c) === u && (v = new v(m, h + "enter", y, n, c), v.target = p, v.relatedTarget = P, x = v), P = x, g && y) t: {
						for (v = g, m = y, h = 0, p = v; p; p = gn(p)) h++;
						for (p = 0, x = m; x; x = gn(x)) p++;
						for (; 0 < h - p;) v = gn(v),
						h--;
						for (; 0 < p - h;) m = gn(m),
						p--;
						for (; h--;) {
							if (v === m || m !== null && v === m.alternate) break t;
							v = gn(v), m = gn(m)
						}
						v = null
					}
					else v = null;
					g !== null && Du(f, d, g, v, !1), y !== null && P !== null && Du(f, P, y, v, !0)
				}
			}
			e: {
				if (d = u ? kn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var w = O0;
				else if (Tu(d))
					if (Sd) w = B0;
					else {
						w = z0;
						var T = F0
					}
				else(g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = I0);
				if (w && (w = w(e, u))) {
					wd(f, w, n, c);
					break e
				}
				T && T(e, d, u),
				e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && js(d, "number", d.value)
			}
			switch (T = u ? kn(u) : window, e) {
				case "focusin":
					(Tu(T) || T.contentEditable === "true") && (wn = T, Qs = u, yr = null);
					break;
				case "focusout":
					yr = Qs = wn = null;
					break;
				case "mousedown":
					Ys = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					Ys = !1, Lu(f, n, c);
					break;
				case "selectionchange":
					if (H0) break;
				case "keydown":
				case "keyup":
					Lu(f, n, c)
			}
			var M;
			if (bl) e: {
				switch (e) {
					case "compositionstart":
						var k = "onCompositionStart";
						break e;
					case "compositionend":
						k = "onCompositionEnd";
						break e;
					case "compositionupdate":
						k = "onCompositionUpdate";
						break e
				}
				k = void 0
			}
			else xn ? vd(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");k && (yd && n.locale !== "ko" && (xn || k !== "onCompositionStart" ? k === "onCompositionEnd" && xn && (M = gd()) : (Pt = c, Zl = "value" in Pt ? Pt.value : Pt.textContent, xn = !0)), T = Gi(u, k), 0 < T.length && (k = new wu(k, e, null, n, c), f.push({
				event: k,
				listeners: T
			}), M ? k.data = M : (M = xd(n), M !== null && (k.data = M)))),
			(M = R0 ? D0(e, n) : N0(e, n)) && (u = Gi(u, "onBeforeInput"), 0 < u.length && (c = new wu("onBeforeInput", "beforeinput", null, n, c), f.push({
				event: c,
				listeners: u
			}), c.data = M))
		}
		Rd(f, t)
	})
}

function jr(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function Gi(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 && o !== null && (i = o, o = Vr(e, n), o != null && r.unshift(jr(e, o, i)), o = Vr(e, t), o != null && r.push(jr(e, o, i))), e = e.return
	}
	return r
}

function gn(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function Du(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r;) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 && u !== null && (l = u, i ? (a = Vr(n, o), a != null && s.unshift(jr(n, a, l))) : i || (a = Vr(n, o), a != null && s.push(jr(n, a, l)))), n = n.return
	}
	s.length !== 0 && e.push({
		event: t,
		listeners: s
	})
}
var Q0 = /\r\n?/g,
	Y0 = /\u0000|\uFFFD/g;

function Nu(e) {
	return (typeof e == "string" ? e : "" + e).replace(Q0, `
`).replace(Y0, "")
}

function pi(e, t, n) {
	if (t = Nu(t), Nu(e) !== t && n) throw Error(S(425))
}

function Qi() {}
var Xs = null,
	Zs = null;

function Js(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var qs = typeof setTimeout == "function" ? setTimeout : void 0,
	X0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	_u = typeof Promise == "function" ? Promise : void 0,
	Z0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof _u < "u" ? function(e) {
		return _u.resolve(null).then(e).catch(J0)
	} : qs;

function J0(e) {
	setTimeout(function() {
		throw e
	})
}

function is(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if (e.removeChild(n), i && i.nodeType === 8)
			if (n = i.data, n === "/$") {
				if (r === 0) {
					e.removeChild(i), Rr(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = i
	} while (n);
	Rr(t)
}

function Lt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function ju(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Zn = Math.random().toString(36).slice(2),
	Ze = "__reactFiber$" + Zn,
	Or = "__reactProps$" + Zn,
	ct = "__reactContainer$" + Zn,
	bs = "__reactEvents$" + Zn,
	q0 = "__reactListeners$" + Zn,
	b0 = "__reactHandles$" + Zn;

function bt(e) {
	var t = e[Ze];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[ct] || n[Ze]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = ju(e); e !== null;) {
					if (n = e[Ze]) return n;
					e = ju(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function Zr(e) {
	return e = e[Ze] || e[ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function kn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(S(33))
}

function To(e) {
	return e[Or] || null
}
var el = [],
	Pn = -1;

function Ut(e) {
	return {
		current: e
	}
}

function U(e) {
	0 > Pn || (e.current = el[Pn], el[Pn] = null, Pn--)
}

function I(e, t) {
	Pn++, el[Pn] = e.current, e.current = t
}
var Ft = {},
	me = Ut(Ft),
	ke = Ut(!1),
	ln = Ft;

function Bn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ft;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Pe(e) {
	return e = e.childContextTypes, e != null
}

function Yi() {
	U(ke), U(me)
}

function Ou(e, t, n) {
	if (me.current !== Ft) throw Error(S(168));
	I(me, t), I(ke, n)
}

function Nd(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var i in r)
		if (!(i in t)) throw Error(S(108, Fm(e) || "Unknown", i));
	return G({}, n, r)
}

function Xi(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, ln = me.current, I(me, e), I(ke, ke.current), !0
}

function Fu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(S(169));
	n ? (e = Nd(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, U(ke), U(me), I(me, e)) : U(ke), I(ke, n)
}
var tt = null,
	Co = !1,
	os = !1;

function _d(e) {
	tt === null ? tt = [e] : tt.push(e)
}

function eg(e) {
	Co = !0, _d(e)
}

function $t() {
	if (!os && tt !== null) {
		os = !0;
		var e = 0,
			t = z;
		try {
			var n = tt;
			for (z = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			tt = null, Co = !1
		} catch (i) {
			throw tt !== null && (tt = tt.slice(e + 1)), od(Gl, $t), i
		} finally {
			z = t, os = !1
		}
	}
	return null
}
var Tn = [],
	Cn = 0,
	Zi = null,
	Ji = 0,
	je = [],
	Oe = 0,
	an = null,
	nt = 1,
	rt = "";

function Xt(e, t) {
	Tn[Cn++] = Ji, Tn[Cn++] = Zi, Zi = e, Ji = t
}

function jd(e, t, n) {
	je[Oe++] = nt, je[Oe++] = rt, je[Oe++] = an, an = e;
	var r = nt;
	e = rt;
	var i = 32 - Ke(r) - 1;
	r &= ~(1 << i), n += 1;
	var o = 32 - Ke(t) + i;
	if (30 < o) {
		var s = i - i % 5;
		o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, nt = 1 << 32 - Ke(t) + i | n << i | r, rt = o + e
	} else nt = 1 << o | n << i | r, rt = e
}

function ta(e) {
	e.return !== null && (Xt(e, 1), jd(e, 1, 0))
}

function na(e) {
	for (; e === Zi;) Zi = Tn[--Cn], Tn[Cn] = null, Ji = Tn[--Cn], Tn[Cn] = null;
	for (; e === an;) an = je[--Oe], je[Oe] = null, rt = je[--Oe], je[Oe] = null, nt = je[--Oe], je[Oe] = null
}
var Ve = null,
	Me = null,
	$ = !1,
	We = null;

function Od(e, t) {
	var n = Fe(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function zu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Me = Lt(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Me = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? {
				id: nt,
				overflow: rt
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, Me = null, !0) : !1;
		default:
			return !1
	}
}

function tl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function nl(e) {
	if ($) {
		var t = Me;
		if (t) {
			var n = t;
			if (!zu(e, t)) {
				if (tl(e)) throw Error(S(418));
				t = Lt(n.nextSibling);
				var r = Ve;
				t && zu(e, t) ? Od(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Ve = e)
			}
		} else {
			if (tl(e)) throw Error(S(418));
			e.flags = e.flags & -4097 | 2, $ = !1, Ve = e
		}
	}
}

function Iu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Ve = e
}

function mi(e) {
	if (e !== Ve) return !1;
	if (!$) return Iu(e), $ = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Js(e.type, e.memoizedProps)), t && (t = Me)) {
		if (tl(e)) throw Fd(), Error(S(418));
		for (; t;) Od(e, t), t = Lt(t.nextSibling)
	}
	if (Iu(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Me = Lt(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Me = null
		}
	} else Me = Ve ? Lt(e.stateNode.nextSibling) : null;
	return !0
}

function Fd() {
	for (var e = Me; e;) e = Lt(e.nextSibling)
}

function Un() {
	Me = Ve = null, $ = !1
}

function ra(e) {
	We === null ? We = [e] : We.push(e)
}
var tg = pt.ReactCurrentBatchConfig;

function ir(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(S(309));
				var r = n.stateNode
			}
			if (!r) throw Error(S(147, e));
			var i = r,
				o = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
				var l = i.refs;
				s === null ? delete l[o] : l[o] = s
			}, t._stringRef = o, t)
		}
		if (typeof e != "string") throw Error(S(284));
		if (!n._owner) throw Error(S(290, e))
	}
	return e
}

function gi(e, t) {
	throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Bu(e) {
	var t = e._init;
	return t(e._payload)
}

function zd(e) {
	function t(m, h) {
		if (e) {
			var p = m.deletions;
			p === null ? (m.deletions = [h], m.flags |= 16) : p.push(h)
		}
	}

	function n(m, h) {
		if (!e) return null;
		for (; h !== null;) t(m, h), h = h.sibling;
		return null
	}

	function r(m, h) {
		for (m = new Map; h !== null;) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
		return m
	}

	function i(m, h) {
		return m = Nt(m, h), m.index = 0, m.sibling = null, m
	}

	function o(m, h, p) {
		return m.index = p, e ? (p = m.alternate, p !== null ? (p = p.index, p < h ? (m.flags |= 2, h) : p) : (m.flags |= 2, h)) : (m.flags |= 1048576, h)
	}

	function s(m) {
		return e && m.alternate === null && (m.flags |= 2), m
	}

	function l(m, h, p, x) {
		return h === null || h.tag !== 6 ? (h = ds(p, m.mode, x), h.return = m, h) : (h = i(h, p), h.return = m, h)
	}

	function a(m, h, p, x) {
		var w = p.type;
		return w === vn ? c(m, h, p.props.children, x, p.key) : h !== null && (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === vt && Bu(w) === h.type) ? (x = i(h, p.props), x.ref = ir(m, h, p), x.return = m, x) : (x = ji(p.type, p.key, p.props, null, m.mode, x), x.ref = ir(m, h, p), x.return = m, x)
	}

	function u(m, h, p, x) {
		return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = hs(p, m.mode, x), h.return = m, h) : (h = i(h, p.children || []), h.return = m, h)
	}

	function c(m, h, p, x, w) {
		return h === null || h.tag !== 7 ? (h = on(p, m.mode, x, w), h.return = m, h) : (h = i(h, p), h.return = m, h)
	}

	function f(m, h, p) {
		if (typeof h == "string" && h !== "" || typeof h == "number") return h = ds("" + h, m.mode, p), h.return = m, h;
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case oi:
					return p = ji(h.type, h.key, h.props, null, m.mode, p), p.ref = ir(m, null, h), p.return = m, p;
				case yn:
					return h = hs(h, m.mode, p), h.return = m, h;
				case vt:
					var x = h._init;
					return f(m, x(h._payload), p)
			}
			if (ur(h) || bn(h)) return h = on(h, m.mode, p, null), h.return = m, h;
			gi(m, h)
		}
		return null
	}

	function d(m, h, p, x) {
		var w = h !== null ? h.key : null;
		if (typeof p == "string" && p !== "" || typeof p == "number") return w !== null ? null : l(m, h, "" + p, x);
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case oi:
					return p.key === w ? a(m, h, p, x) : null;
				case yn:
					return p.key === w ? u(m, h, p, x) : null;
				case vt:
					return w = p._init, d(m, h, w(p._payload), x)
			}
			if (ur(p) || bn(p)) return w !== null ? null : c(m, h, p, x, null);
			gi(m, p)
		}
		return null
	}

	function g(m, h, p, x, w) {
		if (typeof x == "string" && x !== "" || typeof x == "number") return m = m.get(p) || null, l(h, m, "" + x, w);
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case oi:
					return m = m.get(x.key === null ? p : x.key) || null, a(h, m, x, w);
				case yn:
					return m = m.get(x.key === null ? p : x.key) || null, u(h, m, x, w);
				case vt:
					var T = x._init;
					return g(m, h, p, T(x._payload), w)
			}
			if (ur(x) || bn(x)) return m = m.get(p) || null, c(h, m, x, w, null);
			gi(h, x)
		}
		return null
	}

	function y(m, h, p, x) {
		for (var w = null, T = null, M = h, k = h = 0, j = null; M !== null && k < p.length; k++) {
			M.index > k ? (j = M, M = null) : j = M.sibling;
			var A = d(m, M, p[k], x);
			if (A === null) {
				M === null && (M = j);
				break
			}
			e && M && A.alternate === null && t(m, M), h = o(A, h, k), T === null ? w = A : T.sibling = A, T = A, M = j
		}
		if (k === p.length) return n(m, M), $ && Xt(m, k), w;
		if (M === null) {
			for (; k < p.length; k++) M = f(m, p[k], x), M !== null && (h = o(M, h, k), T === null ? w = M : T.sibling = M, T = M);
			return $ && Xt(m, k), w
		}
		for (M = r(m, M); k < p.length; k++) j = g(M, m, k, p[k], x), j !== null && (e && j.alternate !== null && M.delete(j.key === null ? k : j.key), h = o(j, h, k), T === null ? w = j : T.sibling = j, T = j);
		return e && M.forEach(function(ee) {
			return t(m, ee)
		}), $ && Xt(m, k), w
	}

	function v(m, h, p, x) {
		var w = bn(p);
		if (typeof w != "function") throw Error(S(150));
		if (p = w.call(p), p == null) throw Error(S(151));
		for (var T = w = null, M = h, k = h = 0, j = null, A = p.next(); M !== null && !A.done; k++, A = p.next()) {
			M.index > k ? (j = M, M = null) : j = M.sibling;
			var ee = d(m, M, A.value, x);
			if (ee === null) {
				M === null && (M = j);
				break
			}
			e && M && ee.alternate === null && t(m, M), h = o(ee, h, k), T === null ? w = ee : T.sibling = ee, T = ee, M = j
		}
		if (A.done) return n(m, M), $ && Xt(m, k), w;
		if (M === null) {
			for (; !A.done; k++, A = p.next()) A = f(m, A.value, x), A !== null && (h = o(A, h, k), T === null ? w = A : T.sibling = A, T = A);
			return $ && Xt(m, k), w
		}
		for (M = r(m, M); !A.done; k++, A = p.next()) A = g(M, m, k, A.value, x), A !== null && (e && A.alternate !== null && M.delete(A.key === null ? k : A.key), h = o(A, h, k), T === null ? w = A : T.sibling = A, T = A);
		return e && M.forEach(function(mt) {
			return t(m, mt)
		}), $ && Xt(m, k), w
	}

	function P(m, h, p, x) {
		if (typeof p == "object" && p !== null && p.type === vn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case oi:
					e: {
						for (var w = p.key, T = h; T !== null;) {
							if (T.key === w) {
								if (w = p.type, w === vn) {
									if (T.tag === 7) {
										n(m, T.sibling), h = i(T, p.props.children), h.return = m, m = h;
										break e
									}
								} else if (T.elementType === w || typeof w == "object" && w !== null && w.$$typeof === vt && Bu(w) === T.type) {
									n(m, T.sibling), h = i(T, p.props), h.ref = ir(m, T, p), h.return = m, m = h;
									break e
								}
								n(m, T);
								break
							} else t(m, T);
							T = T.sibling
						}
						p.type === vn ? (h = on(p.props.children, m.mode, x, p.key), h.return = m, m = h) : (x = ji(p.type, p.key, p.props, null, m.mode, x), x.ref = ir(m, h, p), x.return = m, m = x)
					}
					return s(m);
				case yn:
					e: {
						for (T = p.key; h !== null;) {
							if (h.key === T)
								if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
									n(m, h.sibling), h = i(h, p.children || []), h.return = m, m = h;
									break e
								} else {
									n(m, h);
									break
								}
							else t(m, h);
							h = h.sibling
						}
						h = hs(p, m.mode, x),
						h.return = m,
						m = h
					}
					return s(m);
				case vt:
					return T = p._init, P(m, h, T(p._payload), x)
			}
			if (ur(p)) return y(m, h, p, x);
			if (bn(p)) return v(m, h, p, x);
			gi(m, p)
		}
		return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, h !== null && h.tag === 6 ? (n(m, h.sibling), h = i(h, p), h.return = m, m = h) : (n(m, h), h = ds(p, m.mode, x), h.return = m, m = h), s(m)) : n(m, h)
	}
	return P
}
var $n = zd(!0),
	Id = zd(!1),
	qi = Ut(null),
	bi = null,
	En = null,
	ia = null;

function oa() {
	ia = En = bi = null
}

function sa(e) {
	var t = qi.current;
	U(qi), e._currentValue = t
}

function rl(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function Fn(e, t) {
	bi = e, ia = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null)
}

function Ie(e) {
	var t = e._currentValue;
	if (ia !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, En === null) {
			if (bi === null) throw Error(S(308));
			En = e, bi.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else En = En.next = e;
	return t
}
var en = null;

function la(e) {
	en === null ? en = [e] : en.push(e)
}

function Bd(e, t, n, r) {
	var i = t.interleaved;
	return i === null ? (n.next = n, la(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ft(e, r)
}

function ft(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var xt = !1;

function aa(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function Ud(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function ot(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function At(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, O & 2) {
		var i = r.pending;
		return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ft(e, n)
	}
	return i = r.interleaved, i === null ? (t.next = t, la(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ft(e, n)
}

function Li(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Ql(e, n)
	}
}

function Uu(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var i = null,
			o = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				o === null ? i = o = s : o = o.next = s, n = n.next
			} while (n !== null);
			o === null ? i = o = t : o = o.next = t
		} else i = o = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function eo(e, t, n, r) {
	var i = e.updateQueue;
	xt = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var a = l,
			u = a.next;
		a.next = null, s === null ? o = u : s.next = u, s = a;
		var c = e.alternate;
		c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
	}
	if (o !== null) {
		var f = i.baseState;
		s = 0, c = u = a = null, l = o;
		do {
			var d = l.lane,
				g = l.eventTime;
			if ((r & d) === d) {
				c !== null && (c = c.next = {
					eventTime: g,
					lane: 0,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null
				});
				e: {
					var y = e,
						v = l;
					switch (d = t, g = n, v.tag) {
						case 1:
							if (y = v.payload, typeof y == "function") {
								f = y.call(g, f, d);
								break e
							}
							f = y;
							break e;
						case 3:
							y.flags = y.flags & -65537 | 128;
						case 0:
							if (y = v.payload, d = typeof y == "function" ? y.call(g, f, d) : y, d == null) break e;
							f = G({}, f, d);
							break e;
						case 2:
							xt = !0
					}
				}
				l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l))
			} else g = {
				eventTime: g,
				lane: d,
				tag: l.tag,
				payload: l.payload,
				callback: l.callback,
				next: null
			}, c === null ? (u = c = g, a = f) : c = c.next = g, s |= d;
			if (l = l.next, l === null) {
				if (l = i.shared.pending, l === null) break;
				d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
			}
		} while (!0);
		if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
			i = t;
			do s |= i.lane, i = i.next; while (i !== t)
		} else o === null && (i.shared.lanes = 0);
		cn |= s, e.lanes = s, e.memoizedState = f
	}
}

function $u(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (r.callback = null, r = n, typeof i != "function") throw Error(S(191, i));
				i.call(r)
			}
		}
}
var Jr = {},
	qe = Ut(Jr),
	Fr = Ut(Jr),
	zr = Ut(Jr);

function tn(e) {
	if (e === Jr) throw Error(S(174));
	return e
}

function ua(e, t) {
	switch (I(zr, t), I(Fr, e), I(qe, Jr), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Fs(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Fs(t, e)
	}
	U(qe), I(qe, t)
}

function Hn() {
	U(qe), U(Fr), U(zr)
}

function $d(e) {
	tn(zr.current);
	var t = tn(qe.current),
		n = Fs(t, e.type);
	t !== n && (I(Fr, e), I(qe, n))
}

function ca(e) {
	Fr.current === e && (U(qe), U(Fr))
}
var H = Ut(0);

function to(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var ss = [];

function fa() {
	for (var e = 0; e < ss.length; e++) ss[e]._workInProgressVersionPrimary = null;
	ss.length = 0
}
var Ai = pt.ReactCurrentDispatcher,
	ls = pt.ReactCurrentBatchConfig,
	un = 0,
	K = null,
	q = null,
	ne = null,
	no = !1,
	vr = !1,
	Ir = 0,
	ng = 0;

function ue() {
	throw Error(S(321))
}

function da(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Qe(e[n], t[n])) return !1;
	return !0
}

function ha(e, t, n, r, i, o) {
	if (un = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ai.current = e === null || e.memoizedState === null ? sg : lg, e = n(r, i), vr) {
		o = 0;
		do {
			if (vr = !1, Ir = 0, 25 <= o) throw Error(S(301));
			o += 1, ne = q = null, t.updateQueue = null, Ai.current = ag, e = n(r, i)
		} while (vr)
	}
	if (Ai.current = ro, t = q !== null && q.next !== null, un = 0, ne = q = K = null, no = !1, t) throw Error(S(300));
	return e
}

function pa() {
	var e = Ir !== 0;
	return Ir = 0, e
}

function Xe() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return ne === null ? K.memoizedState = ne = e : ne = ne.next = e, ne
}

function Be() {
	if (q === null) {
		var e = K.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = q.next;
	var t = ne === null ? K.memoizedState : ne.next;
	if (t !== null) ne = t, q = e;
	else {
		if (e === null) throw Error(S(310));
		q = e, e = {
			memoizedState: q.memoizedState,
			baseState: q.baseState,
			baseQueue: q.baseQueue,
			queue: q.queue,
			next: null
		}, ne === null ? K.memoizedState = ne = e : ne = ne.next = e
	}
	return ne
}

function Br(e, t) {
	return typeof t == "function" ? t(e) : t
}

function as(e) {
	var t = Be(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = q,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			i.next = o.next, o.next = s
		}
		r.baseQueue = i = o, n.pending = null
	}
	if (i !== null) {
		o = i.next, r = r.baseState;
		var l = s = null,
			a = null,
			u = o;
		do {
			var c = u.lane;
			if ((un & c) === c) a !== null && (a = a.next = {
				lane: 0,
				action: u.action,
				hasEagerState: u.hasEagerState,
				eagerState: u.eagerState,
				next: null
			}), r = u.hasEagerState ? u.eagerState : e(r, u.action);
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				a === null ? (l = a = f, s = r) : a = a.next = f, K.lanes |= c, cn |= c
			}
			u = u.next
		} while (u !== null && u !== o);
		a === null ? s = r : a.next = l, Qe(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		i = e;
		do o = i.lane, K.lanes |= o, cn |= o, i = i.next; while (i !== e)
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function us(e) {
	var t = Be(),
		n = t.queue;
	if (n === null) throw Error(S(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = i = i.next;
		do o = e(o, s.action), s = s.next; while (s !== i);
		Qe(o, t.memoizedState) || (Se = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
	}
	return [o, r]
}

function Hd() {}

function Wd(e, t) {
	var n = K,
		r = Be(),
		i = t(),
		o = !Qe(r.memoizedState, i);
	if (o && (r.memoizedState = i, Se = !0), r = r.queue, ma(Qd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ne !== null && ne.memoizedState.tag & 1) {
		if (n.flags |= 2048, Ur(9, Gd.bind(null, n, r, i, t), void 0, null), re === null) throw Error(S(349));
		un & 30 || Kd(n, t, i)
	}
	return i
}

function Kd(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = K.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Gd(e, t, n, r) {
	t.value = n, t.getSnapshot = r, Yd(t) && Xd(e)
}

function Qd(e, t, n) {
	return n(function() {
		Yd(t) && Xd(e)
	})
}

function Yd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Qe(e, n)
	} catch {
		return !0
	}
}

function Xd(e) {
	var t = ft(e, 1);
	t !== null && Ge(t, e, 1, -1)
}

function Hu(e) {
	var t = Xe();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: Br,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = og.bind(null, K, e), [t.memoizedState, e]
}

function Ur(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = K.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Zd() {
	return Be().memoizedState
}

function Ri(e, t, n, r) {
	var i = Xe();
	K.flags |= e, i.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r)
}

function Eo(e, t, n, r) {
	var i = Be();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (q !== null) {
		var s = q.memoizedState;
		if (o = s.destroy, r !== null && da(r, s.deps)) {
			i.memoizedState = Ur(t, n, o, r);
			return
		}
	}
	K.flags |= e, i.memoizedState = Ur(1 | t, n, o, r)
}

function Wu(e, t) {
	return Ri(8390656, 8, e, t)
}

function ma(e, t) {
	return Eo(2048, 8, e, t)
}

function Jd(e, t) {
	return Eo(4, 2, e, t)
}

function qd(e, t) {
	return Eo(4, 4, e, t)
}

function bd(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function eh(e, t, n) {
	return n = n != null ? n.concat([e]) : null, Eo(4, 4, bd.bind(null, t, e), n)
}

function ga() {}

function th(e, t) {
	var n = Be();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && da(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function nh(e, t) {
	var n = Be();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && da(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function rh(e, t, n) {
	return un & 21 ? (Qe(n, t) || (n = ad(), K.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n)
}

function rg(e, t) {
	var n = z;
	z = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = ls.transition;
	ls.transition = {};
	try {
		e(!1), t()
	} finally {
		z = n, ls.transition = r
	}
}

function ih() {
	return Be().memoizedState
}

function ig(e, t, n) {
	var r = Dt(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oh(e)) sh(t, n);
	else if (n = Bd(e, t, n, r), n !== null) {
		var i = ye();
		Ge(n, e, r, i), lh(n, t, r)
	}
}

function og(e, t, n) {
	var r = Dt(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (oh(e)) sh(t, i);
	else {
		var o = e.alternate;
		if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
			var s = t.lastRenderedState,
				l = o(s, n);
			if (i.hasEagerState = !0, i.eagerState = l, Qe(l, s)) {
				var a = t.interleaved;
				a === null ? (i.next = i, la(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
				return
			}
		} catch {} finally {}
		n = Bd(e, t, i, r), n !== null && (i = ye(), Ge(n, e, r, i), lh(n, t, r))
	}
}

function oh(e) {
	var t = e.alternate;
	return e === K || t !== null && t === K
}

function sh(e, t) {
	vr = no = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function lh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, Ql(e, n)
	}
}
var ro = {
		readContext: Ie,
		useCallback: ue,
		useContext: ue,
		useEffect: ue,
		useImperativeHandle: ue,
		useInsertionEffect: ue,
		useLayoutEffect: ue,
		useMemo: ue,
		useReducer: ue,
		useRef: ue,
		useState: ue,
		useDebugValue: ue,
		useDeferredValue: ue,
		useTransition: ue,
		useMutableSource: ue,
		useSyncExternalStore: ue,
		useId: ue,
		unstable_isNewReconciler: !1
	},
	sg = {
		readContext: Ie,
		useCallback: function(e, t) {
			return Xe().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: Ie,
		useEffect: Wu,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, Ri(4194308, 4, bd.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return Ri(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return Ri(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = Xe();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = Xe();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = ig.bind(null, K, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = Xe();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: Hu,
		useDebugValue: ga,
		useDeferredValue: function(e) {
			return Xe().memoizedState = e
		},
		useTransition: function() {
			var e = Hu(!1),
				t = e[0];
			return e = rg.bind(null, e[1]), Xe().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = K,
				i = Xe();
			if ($) {
				if (n === void 0) throw Error(S(407));
				n = n()
			} else {
				if (n = t(), re === null) throw Error(S(349));
				un & 30 || Kd(r, t, n)
			}
			i.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return i.queue = o, Wu(Qd.bind(null, r, o, e), [e]), r.flags |= 2048, Ur(9, Gd.bind(null, r, o, n, t), void 0, null), n
		},
		useId: function() {
			var e = Xe(),
				t = re.identifierPrefix;
			if ($) {
				var n = rt,
					r = nt;
				n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = ng++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	lg = {
		readContext: Ie,
		useCallback: th,
		useContext: Ie,
		useEffect: ma,
		useImperativeHandle: eh,
		useInsertionEffect: Jd,
		useLayoutEffect: qd,
		useMemo: nh,
		useReducer: as,
		useRef: Zd,
		useState: function() {
			return as(Br)
		},
		useDebugValue: ga,
		useDeferredValue: function(e) {
			var t = Be();
			return rh(t, q.memoizedState, e)
		},
		useTransition: function() {
			var e = as(Br)[0],
				t = Be().memoizedState;
			return [e, t]
		},
		useMutableSource: Hd,
		useSyncExternalStore: Wd,
		useId: ih,
		unstable_isNewReconciler: !1
	},
	ag = {
		readContext: Ie,
		useCallback: th,
		useContext: Ie,
		useEffect: ma,
		useImperativeHandle: eh,
		useInsertionEffect: Jd,
		useLayoutEffect: qd,
		useMemo: nh,
		useReducer: us,
		useRef: Zd,
		useState: function() {
			return us(Br)
		},
		useDebugValue: ga,
		useDeferredValue: function(e) {
			var t = Be();
			return q === null ? t.memoizedState = e : rh(t, q.memoizedState, e)
		},
		useTransition: function() {
			var e = us(Br)[0],
				t = Be().memoizedState;
			return [e, t]
		},
		useMutableSource: Hd,
		useSyncExternalStore: Wd,
		useId: ih,
		unstable_isNewReconciler: !1
	};

function $e(e, t) {
	if (e && e.defaultProps) {
		t = G({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function il(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Mo = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? hn(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = ye(),
			i = Dt(e),
			o = ot(r, i);
		o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (Ge(t, e, i, r), Li(t, e, i))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = ye(),
			i = Dt(e),
			o = ot(r, i);
		o.tag = 1, o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (Ge(t, e, i, r), Li(t, e, i))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = ye(),
			r = Dt(e),
			i = ot(n, r);
		i.tag = 2, t != null && (i.callback = t), t = At(e, i, r), t !== null && (Ge(t, e, r, n), Li(t, e, r))
	}
};

function Ku(e, t, n, r, i, o, s) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(i, o) : !0
}

function ah(e, t, n) {
	var r = !1,
		i = Ft,
		o = t.contextType;
	return typeof o == "object" && o !== null ? o = Ie(o) : (i = Pe(t) ? ln : me.current, r = t.contextTypes, o = (r = r != null) ? Bn(e, i) : Ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Gu(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Mo.enqueueReplaceState(t, t.state, null)
}

function ol(e, t, n, r) {
	var i = e.stateNode;
	i.props = n, i.state = e.memoizedState, i.refs = {}, aa(e);
	var o = t.contextType;
	typeof o == "object" && o !== null ? i.context = Ie(o) : (o = Pe(t) ? ln : me.current, i.context = Bn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (il(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Mo.enqueueReplaceState(i, i.state, null), eo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Wn(e, t) {
	try {
		var n = "",
			r = t;
		do n += Om(r), r = r.return; while (r);
		var i = n
	} catch (o) {
		i = `
Error generating stack: ` + o.message + `
` + o.stack
	}
	return {
		value: e,
		source: t,
		stack: i,
		digest: null
	}
}

function cs(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ? ? null,
		digest: t ? ? null
	}
}

function sl(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var ug = typeof WeakMap == "function" ? WeakMap : Map;

function uh(e, t, n) {
	n = ot(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		oo || (oo = !0, gl = r), sl(e, t)
	}, n
}

function ch(e, t, n) {
	n = ot(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		n.payload = function() {
			return r(i)
		}, n.callback = function() {
			sl(e, t)
		}
	}
	var o = e.stateNode;
	return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
		sl(e, t), typeof r != "function" && (Rt === null ? Rt = new Set([this]) : Rt.add(this));
		var s = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: s !== null ? s : ""
		})
	}), n
}

function Qu(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new ug;
		var i = new Set;
		r.set(t, i)
	} else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
	i.has(n) || (i.add(n), e = Pg.bind(null, e, t, n), t.then(e, e))
}

function Yu(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function Xu(e, t, n, r, i) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ot(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e)
}
var cg = pt.ReactCurrentOwner,
	Se = !1;

function ge(e, t, n, r) {
	t.child = e === null ? Id(t, null, n, r) : $n(t, e.child, n, r)
}

function Zu(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return Fn(t, i), r = ha(e, t, n, r, o, i), n = pa(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : ($ && n && ta(t), t.flags |= 1, ge(e, t, r, i), t.child)
}

function Ju(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" && !Ta(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, fh(e, t, o, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (o = e.child, !(e.lanes & i)) {
		var s = o.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Nr, n(s, r) && e.ref === t.ref) return dt(e, t, i)
	}
	return t.flags |= 1, e = Nt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function fh(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Nr(o, r) && e.ref === t.ref)
			if (Se = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
			else return t.lanes = e.lanes, dt(e, t, i)
	}
	return ll(e, t, n, r, i)
}

function dh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, I(Vn, Ee), Ee |= n;
		else {
			if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, I(Vn, Ee), Ee |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = o !== null ? o.baseLanes : n, I(Vn, Ee), Ee |= r
		}
	else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(Vn, Ee), Ee |= r;
	return ge(e, t, i, n), t.child
}

function hh(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ll(e, t, n, r, i) {
	var o = Pe(n) ? ln : me.current;
	return o = Bn(t, o), Fn(t, i), n = ha(e, t, n, r, o, i), r = pa(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, dt(e, t, i)) : ($ && r && ta(t), t.flags |= 1, ge(e, t, n, i), t.child)
}

function qu(e, t, n, r, i) {
	if (Pe(n)) {
		var o = !0;
		Xi(t)
	} else o = !1;
	if (Fn(t, i), t.stateNode === null) Di(e, t), ah(t, n, r), ol(t, n, r, i), r = !0;
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null ? u = Ie(u) : (u = Pe(n) ? ln : me.current, u = Bn(t, u));
		var c = n.getDerivedStateFromProps,
			f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
		f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Gu(t, s, r, u), xt = !1;
		var d = t.memoizedState;
		s.state = d, eo(t, r, s, i), a = t.memoizedState, l !== r || d !== a || ke.current || xt ? (typeof c == "function" && (il(t, n, c, r), a = t.memoizedState), (l = xt || Ku(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		s = t.stateNode, Ud(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : $e(t.type, l), s.props = u, f = t.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ie(a) : (a = Pe(n) ? ln : me.current, a = Bn(t, a));
		var g = n.getDerivedStateFromProps;
		(c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && Gu(t, s, r, a), xt = !1, d = t.memoizedState, s.state = d, eo(t, r, s, i);
		var y = t.memoizedState;
		l !== f || d !== y || ke.current || xt ? (typeof g == "function" && (il(t, n, g, r), y = t.memoizedState), (u = xt || Ku(t, n, u, r, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return al(e, t, n, r, o, i)
}

function al(e, t, n, r, i, o) {
	hh(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Fu(t, n, !1), dt(e, t, o);
	r = t.stateNode, cg.current = t;
	var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && s ? (t.child = $n(t, e.child, null, o), t.child = $n(t, null, l, o)) : ge(e, t, l, o), t.memoizedState = r.state, i && Fu(t, n, !0), t.child
}

function ph(e) {
	var t = e.stateNode;
	t.pendingContext ? Ou(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ou(e, t.context, !1), ua(e, t.containerInfo)
}

function bu(e, t, n, r, i) {
	return Un(), ra(i), t.flags |= 256, ge(e, t, n, r), t.child
}
var ul = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function cl(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function mh(e, t, n) {
	var r = t.pendingProps,
		i = H.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), I(H, i & 1), e === null) return nl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
		mode: "hidden",
		children: s
	}, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ao(s, r, 0, null), e = on(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = cl(n), t.memoizedState = ul, e) : ya(t, s));
	if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return fg(e, t, s, r, l, i, n);
	if (o) {
		o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
		var a = {
			mode: "hidden",
			children: r.children
		};
		return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Nt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = Nt(l, o) : (o = on(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? cl(n) : {
			baseLanes: s.baseLanes | n,
			cachePool: null,
			transitions: s.transitions
		}, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ul, r
	}
	return o = e.child, e = o.sibling, r = Nt(o, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ya(e, t) {
	return t = Ao({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function yi(e, t, n, r) {
	return r !== null && ra(r), $n(t, e.child, null, n), e = ya(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function fg(e, t, n, r, i, o, s) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = cs(Error(S(422))), yi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Ao({
		mode: "visible",
		children: r.children
	}, i, 0, null), o = on(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $n(t, e.child, null, s), t.child.memoizedState = cl(s), t.memoizedState = ul, o);
	if (!(t.mode & 1)) return yi(e, t, s, null);
	if (i.data === "$!") {
		if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
		return r = l, o = Error(S(419)), r = cs(o, r, void 0), yi(e, t, s, r)
	}
	if (l = (s & e.childLanes) !== 0, Se || l) {
		if (r = re, r !== null) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0
			}
			i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, ft(e, i), Ge(r, e, i, -1))
		}
		return Pa(), r = cs(Error(S(421))), yi(e, t, s, r)
	}
	return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Me = Lt(i.nextSibling), Ve = t, $ = !0, We = null, e !== null && (je[Oe++] = nt, je[Oe++] = rt, je[Oe++] = an, nt = e.id, rt = e.overflow, an = t), t = ya(t, r.children), t.flags |= 4096, t)
}

function ec(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), rl(e.return, t, n)
}

function fs(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: i
	} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function gh(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if (ge(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && ec(e, n, t);
			else if (e.tag === 19) ec(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (I(H, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (i) {
		case "forwards":
			for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && to(e) === null && (i = n), n = n.sibling;
			n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), fs(t, !1, i, n, o);
			break;
		case "backwards":
			for (n = null, i = t.child, t.child = null; i !== null;) {
				if (e = i.alternate, e !== null && to(e) === null) {
					t.child = i;
					break
				}
				e = i.sibling, i.sibling = n, n = i, i = e
			}
			fs(t, !0, n, null, o);
			break;
		case "together":
			fs(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function Di(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function dt(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(S(153));
	if (t.child !== null) {
		for (e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nt(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function dg(e, t, n) {
	switch (t.tag) {
		case 3:
			ph(t), Un();
			break;
		case 5:
			$d(t);
			break;
		case 1:
			Pe(t.type) && Xi(t);
			break;
		case 4:
			ua(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			I(qi, r._currentValue), r._currentValue = i;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (I(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mh(e, t, n) : (I(H, H.current & 1), e = dt(e, t, n), e !== null ? e.sibling : null);
			I(H, H.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return gh(e, t, n);
				t.flags |= 128
			}
			if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), I(H, H.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, dh(e, t, n)
	}
	return dt(e, t, n)
}
var yh, fl, vh, xh;
yh = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
fl = function() {};
vh = function(e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		e = t.stateNode, tn(qe.current);
		var o = null;
		switch (n) {
			case "input":
				i = Ns(e, i), r = Ns(e, r), o = [];
				break;
			case "select":
				i = G({}, i, {
					value: void 0
				}), r = G({}, r, {
					value: void 0
				}), o = [];
				break;
			case "textarea":
				i = Os(e, i), r = Os(e, r), o = [];
				break;
			default:
				typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qi)
		}
		zs(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var l = i[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
				} else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Er.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
				if (u === "style")
					if (l) {
						for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
						for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
					} else n || (o || (o = []), o.push(u, n)), n = a;
			else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Er.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a))
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4)
	}
};
xh = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function or(e, t) {
	if (!$) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function ce(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
	else
		for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function hg(e, t, n) {
	var r = t.pendingProps;
	switch (na(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ce(t), null;
		case 1:
			return Pe(t.type) && Yi(), ce(t), null;
		case 3:
			return r = t.stateNode, Hn(), U(ke), U(me), fa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, We !== null && (xl(We), We = null))), fl(e, t), ce(t), null;
		case 5:
			ca(t);
			var i = tn(zr.current);
			if (n = t.type, e !== null && t.stateNode != null) vh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(S(166));
					return ce(t), null
				}
				if (e = tn(qe.current), mi(t)) {
					r = t.stateNode, n = t.type;
					var o = t.memoizedProps;
					switch (r[Ze] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							B("cancel", r), B("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							B("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < fr.length; i++) B(fr[i], r);
							break;
						case "source":
							B("error", r);
							break;
						case "img":
						case "image":
						case "link":
							B("error", r), B("load", r);
							break;
						case "details":
							B("toggle", r);
							break;
						case "input":
							uu(r, o), B("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!o.multiple
							}, B("invalid", r);
							break;
						case "textarea":
							fu(r, o), B("invalid", r)
					}
					zs(n, o), i = null;
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && pi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && pi(r.textContent, l, e), i = ["children", "" + l]) : Er.hasOwnProperty(s) && l != null && s === "onScroll" && B("scroll", r)
						} switch (n) {
						case "input":
							si(r), cu(r, o, !0);
							break;
						case "textarea":
							si(r), du(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = Qi)
					}
					r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
						is: r.is
					}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[Or] = r, yh(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (s = Is(n, r), n) {
							case "dialog":
								B("cancel", e), B("close", e), i = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								B("load", e), i = r;
								break;
							case "video":
							case "audio":
								for (i = 0; i < fr.length; i++) B(fr[i], e);
								i = r;
								break;
							case "source":
								B("error", e), i = r;
								break;
							case "img":
							case "image":
							case "link":
								B("error", e), B("load", e), i = r;
								break;
							case "details":
								B("toggle", e), i = r;
								break;
							case "input":
								uu(e, r), i = Ns(e, r), B("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, i = G({}, r, {
									value: void 0
								}), B("invalid", e);
								break;
							case "textarea":
								fu(e, r), i = Os(e, r), B("invalid", e);
								break;
							default:
								i = r
						}
						zs(n, i),
						l = i;
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === "style" ? Zf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Yf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Er.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Ul(e, o, a, s))
							} switch (n) {
							case "input":
								si(e), cu(e, r, !1);
								break;
							case "textarea":
								si(e), du(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Ot(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, o = r.value, o != null ? Nn(e, !!r.multiple, o, !1) : r.defaultValue != null && Nn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = Qi)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return ce(t), null;
		case 6:
			if (e && t.stateNode != null) xh(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
				if (n = tn(zr.current), tn(qe.current), mi(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (o = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
						case 3:
							pi(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && pi(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					o && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r
			}
			return ce(t), null;
		case 13:
			if (U(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if ($ && Me !== null && t.mode & 1 && !(t.flags & 128)) Fd(), Un(), t.flags |= 98560, o = !1;
				else if (o = mi(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!o) throw Error(S(318));
						if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
						o[Ze] = t
					} else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					ce(t), o = !1
				} else We !== null && (xl(We), We = null), o = !0;
				if (!o) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? b === 0 && (b = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), ce(t), null);
		case 4:
			return Hn(), fl(e, t), e === null && _r(t.stateNode.containerInfo), ce(t), null;
		case 10:
			return sa(t.type._context), ce(t), null;
		case 17:
			return Pe(t.type) && Yi(), ce(t), null;
		case 19:
			if (U(H), o = t.memoizedState, o === null) return ce(t), null;
			if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
				if (r) or(o, !1);
				else {
					if (b !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (s = to(e), s !== null) {
								for (t.flags |= 128, or(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return I(H, H.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					o.tail !== null && Z() > Kn && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = to(s), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), or(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !$) return ce(t), null
					} else 2 * Z() - o.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, or(o, !1), t.lanes = 4194304);
				o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
			}
			return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = H.current, I(H, r ? n & 1 | 2 : n & 1), t) : (ce(t), null);
		case 22:
		case 23:
			return ka(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ce(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(S(156, t.tag))
}

function pg(e, t) {
	switch (na(t), t.tag) {
		case 1:
			return Pe(t.type) && Yi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return Hn(), U(ke), U(me), fa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return ca(t), null;
		case 13:
			if (U(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(S(340));
				Un()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return U(H), null;
		case 4:
			return Hn(), null;
		case 10:
			return sa(t.type._context), null;
		case 22:
		case 23:
			return ka(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var vi = !1,
	de = !1,
	mg = typeof WeakSet == "function" ? WeakSet : Set,
	V = null;

function Mn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			Q(e, t, r)
		} else n.current = null
}

function dl(e, t, n) {
	try {
		n()
	} catch (r) {
		Q(e, t, r)
	}
}
var tc = !1;

function gg(e, t) {
	if (Xs = Wi, e = Td(), ea(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var i = r.anchorOffset,
					o = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, o.nodeType
				} catch {
					n = null;
					break e
				}
				var s = 0,
					l = -1,
					a = -1,
					u = 0,
					c = 0,
					f = e,
					d = null;
				t: for (;;) {
					for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (g = f.firstChild) !== null;) d = f, f = g;
					for (;;) {
						if (f === e) break t;
						if (d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (g = f.nextSibling) !== null) break;
						f = d, d = f.parentNode
					}
					f = g
				}
				n = l === -1 || a === -1 ? null : {
					start: l,
					end: a
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (Zs = {
			focusedElem: e,
			selectionRange: n
		}, Wi = !1, V = t; V !== null;)
		if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
		else
			for (; V !== null;) {
				t = V;
				try {
					var y = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (y !== null) {
								var v = y.memoizedProps,
									P = y.memoizedState,
									m = t.stateNode,
									h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : $e(t.type, v), P);
								m.__reactInternalSnapshotBeforeUpdate = h
							}
							break;
						case 3:
							var p = t.stateNode.containerInfo;
							p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(S(163))
					}
				} catch (x) {
					Q(t, t.return, x)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, V = e;
					break
				}
				V = t.return
			}
	return y = tc, tc = !1, y
}

function xr(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var i = r = r.next;
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				i.destroy = void 0, o !== void 0 && dl(t, n, o)
			}
			i = i.next
		} while (i !== r)
	}
}

function Vo(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function hl(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function wh(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, wh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[Or], delete t[bs], delete t[q0], delete t[b0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Sh(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function nc(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || Sh(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function pl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qi));
	else if (r !== 4 && (e = e.child, e !== null))
		for (pl(e, t, n), e = e.sibling; e !== null;) pl(e, t, n), e = e.sibling
}

function ml(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (ml(e, t, n), e = e.sibling; e !== null;) ml(e, t, n), e = e.sibling
}
var oe = null,
	He = !1;

function gt(e, t, n) {
	for (n = n.child; n !== null;) kh(e, t, n), n = n.sibling
}

function kh(e, t, n) {
	if (Je && typeof Je.onCommitFiberUnmount == "function") try {
		Je.onCommitFiberUnmount(wo, n)
	} catch {}
	switch (n.tag) {
		case 5:
			de || Mn(n, t);
		case 6:
			var r = oe,
				i = He;
			oe = null, gt(e, t, n), oe = r, He = i, oe !== null && (He ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
			break;
		case 18:
			oe !== null && (He ? (e = oe, n = n.stateNode, e.nodeType === 8 ? is(e.parentNode, n) : e.nodeType === 1 && is(e, n), Rr(e)) : is(oe, n.stateNode));
			break;
		case 4:
			r = oe, i = He, oe = n.stateNode.containerInfo, He = !0, gt(e, t, n), oe = r, He = i;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					o = o.tag, s !== void 0 && (o & 2 || o & 4) && dl(n, t, s), i = i.next
				} while (i !== r)
			}
			gt(e, t, n);
			break;
		case 1:
			if (!de && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (l) {
				Q(n, t, l)
			}
			gt(e, t, n);
			break;
		case 21:
			gt(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, gt(e, t, n), de = r) : gt(e, t, n);
			break;
		default:
			gt(e, t, n)
	}
}

function rc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new mg), t.forEach(function(r) {
			var i = Cg.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(i, i))
		})
	}
}

function Ue(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null;) {
					switch (l.tag) {
						case 5:
							oe = l.stateNode, He = !1;
							break e;
						case 3:
							oe = l.stateNode.containerInfo, He = !0;
							break e;
						case 4:
							oe = l.stateNode.containerInfo, He = !0;
							break e
					}
					l = l.return
				}
				if (oe === null) throw Error(S(160));
				kh(o, s, i), oe = null, He = !1;
				var a = i.alternate;
				a !== null && (a.return = null), i.return = null
			} catch (u) {
				Q(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) Ph(t, e), t = t.sibling
}

function Ph(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (Ue(t, e), Ye(e), r & 4) {
				try {
					xr(3, e, e.return), Vo(3, e)
				} catch (v) {
					Q(e, e.return, v)
				}
				try {
					xr(5, e, e.return)
				} catch (v) {
					Q(e, e.return, v)
				}
			}
			break;
		case 1:
			Ue(t, e), Ye(e), r & 512 && n !== null && Mn(n, n.return);
			break;
		case 5:
			if (Ue(t, e), Ye(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
				var i = e.stateNode;
				try {
					Mr(i, "")
				} catch (v) {
					Q(e, e.return, v)
				}
			}
			if (r & 4 && (i = e.stateNode, i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (e.updateQueue = null, a !== null) try {
					l === "input" && o.type === "radio" && o.name != null && Kf(i, o), Is(l, s);
					var u = Is(l, o);
					for (s = 0; s < a.length; s += 2) {
						var c = a[s],
							f = a[s + 1];
						c === "style" ? Zf(i, f) : c === "dangerouslySetInnerHTML" ? Yf(i, f) : c === "children" ? Mr(i, f) : Ul(i, c, f, u)
					}
					switch (l) {
						case "input":
							_s(i, o);
							break;
						case "textarea":
							Gf(i, o);
							break;
						case "select":
							var d = i._wrapperState.wasMultiple;
							i._wrapperState.wasMultiple = !!o.multiple;
							var g = o.value;
							g != null ? Nn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? Nn(i, !!o.multiple, o.defaultValue, !0) : Nn(i, !!o.multiple, o.multiple ? [] : "", !1))
					}
					i[Or] = o
				} catch (v) {
					Q(e, e.return, v)
				}
			}
			break;
		case 6:
			if (Ue(t, e), Ye(e), r & 4) {
				if (e.stateNode === null) throw Error(S(162));
				i = e.stateNode, o = e.memoizedProps;
				try {
					i.nodeValue = o
				} catch (v) {
					Q(e, e.return, v)
				}
			}
			break;
		case 3:
			if (Ue(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				Rr(t.containerInfo)
			} catch (v) {
				Q(e, e.return, v)
			}
			break;
		case 4:
			Ue(t, e), Ye(e);
			break;
		case 13:
			Ue(t, e), Ye(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (wa = Z())), r & 4 && rc(e);
			break;
		case 22:
			if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (u = de) || c, Ue(t, e), de = u) : Ue(t, e), Ye(e), r & 8192) {
				if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
					for (V = e, c = e.child; c !== null;) {
						for (f = V = c; V !== null;) {
							switch (d = V, g = d.child, d.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									xr(4, d, d.return);
									break;
								case 1:
									Mn(d, d.return);
									var y = d.stateNode;
									if (typeof y.componentWillUnmount == "function") {
										r = d, n = d.return;
										try {
											t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
										} catch (v) {
											Q(r, n, v)
										}
									}
									break;
								case 5:
									Mn(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										oc(f);
										continue
									}
							}
							g !== null ? (g.return = d, V = g) : oc(f)
						}
						c = c.sibling
					}
				e: for (c = null, f = e;;) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Xf("display", s))
							} catch (v) {
								Q(e, e.return, v)
							}
						}
					} else if (f.tag === 6) {
						if (c === null) try {
							f.stateNode.nodeValue = u ? "" : f.memoizedProps
						} catch (v) {
							Q(e, e.return, v)
						}
					} else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
						f.child.return = f, f = f.child;
						continue
					}
					if (f === e) break e;
					for (; f.sibling === null;) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), f = f.return
					}
					c === f && (c = null), f.sibling.return = f.return, f = f.sibling
				}
			}
			break;
		case 19:
			Ue(t, e), Ye(e), r & 4 && rc(e);
			break;
		case 21:
			break;
		default:
			Ue(t, e), Ye(e)
	}
}

function Ye(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (Sh(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(S(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Mr(i, ""), r.flags &= -33);
					var o = nc(e);
					ml(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = nc(e);
					pl(e, l, s);
					break;
				default:
					throw Error(S(161))
			}
		}
		catch (a) {
			Q(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function yg(e, t, n) {
	V = e, Th(e)
}

function Th(e, t, n) {
	for (var r = (e.mode & 1) !== 0; V !== null;) {
		var i = V,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || vi;
			if (!s) {
				var l = i.alternate,
					a = l !== null && l.memoizedState !== null || de;
				l = vi;
				var u = de;
				if (vi = s, (de = a) && !u)
					for (V = i; V !== null;) s = V, a = s.child, s.tag === 22 && s.memoizedState !== null ? sc(i) : a !== null ? (a.return = s, V = a) : sc(i);
				for (; o !== null;) V = o, Th(o), o = o.sibling;
				V = i, vi = l, de = u
			}
			ic(e)
		} else i.subtreeFlags & 8772 && o !== null ? (o.return = i, V = o) : ic(e)
	}
}

function ic(e) {
	for (; V !== null;) {
		var t = V;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						de || Vo(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !de)
							if (n === null) r.componentDidMount();
							else {
								var i = t.elementType === t.type ? n.memoizedProps : $e(t.type, n.memoizedProps);
								r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var o = t.updateQueue;
						o !== null && $u(t, o, r);
						break;
					case 3:
						var s = t.updateQueue;
						if (s !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							$u(t, s, n)
						}
						break;
					case 5:
						var l = t.stateNode;
						if (n === null && t.flags & 4) {
							n = l;
							var a = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									a.autoFocus && n.focus();
									break;
								case "img":
									a.src && (n.src = a.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var u = t.alternate;
							if (u !== null) {
								var c = u.memoizedState;
								if (c !== null) {
									var f = c.dehydrated;
									f !== null && Rr(f)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(S(163))
				}
				de || t.flags & 512 && hl(t)
			} catch (d) {
				Q(t, t.return, d)
			}
		}
		if (t === e) {
			V = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, V = n;
			break
		}
		V = t.return
	}
}

function oc(e) {
	for (; V !== null;) {
		var t = V;
		if (t === e) {
			V = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, V = n;
			break
		}
		V = t.return
	}
}

function sc(e) {
	for (; V !== null;) {
		var t = V;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Vo(4, t)
					} catch (a) {
						Q(t, n, a)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount()
						} catch (a) {
							Q(t, i, a)
						}
					}
					var o = t.return;
					try {
						hl(t)
					} catch (a) {
						Q(t, o, a)
					}
					break;
				case 5:
					var s = t.return;
					try {
						hl(t)
					} catch (a) {
						Q(t, s, a)
					}
			}
		} catch (a) {
			Q(t, t.return, a)
		}
		if (t === e) {
			V = null;
			break
		}
		var l = t.sibling;
		if (l !== null) {
			l.return = t.return, V = l;
			break
		}
		V = t.return
	}
}
var vg = Math.ceil,
	io = pt.ReactCurrentDispatcher,
	va = pt.ReactCurrentOwner,
	ze = pt.ReactCurrentBatchConfig,
	O = 0,
	re = null,
	J = null,
	le = 0,
	Ee = 0,
	Vn = Ut(0),
	b = 0,
	$r = null,
	cn = 0,
	Lo = 0,
	xa = 0,
	wr = null,
	we = null,
	wa = 0,
	Kn = 1 / 0,
	et = null,
	oo = !1,
	gl = null,
	Rt = null,
	xi = !1,
	Tt = null,
	so = 0,
	Sr = 0,
	yl = null,
	Ni = -1,
	_i = 0;

function ye() {
	return O & 6 ? Z() : Ni !== -1 ? Ni : Ni = Z()
}

function Dt(e) {
	return e.mode & 1 ? O & 2 && le !== 0 ? le & -le : tg.transition !== null ? (_i === 0 && (_i = ad()), _i) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : md(e.type)), e) : 1
}

function Ge(e, t, n, r) {
	if (50 < Sr) throw Sr = 0, yl = null, Error(S(185));
	Yr(e, n, r), (!(O & 2) || e !== re) && (e === re && (!(O & 2) && (Lo |= n), b === 4 && kt(e, le)), Te(e, r), n === 1 && O === 0 && !(t.mode & 1) && (Kn = Z() + 500, Co && $t()))
}

function Te(e, t) {
	var n = e.callbackNode;
	t0(e, t);
	var r = Hi(e, e === re ? le : 0);
	if (r === 0) n !== null && mu(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && mu(n), t === 1) e.tag === 0 ? eg(lc.bind(null, e)) : _d(lc.bind(null, e)), Z0(function() {
			!(O & 6) && $t()
		}), n = null;
		else {
			switch (ud(r)) {
				case 1:
					n = Gl;
					break;
				case 4:
					n = sd;
					break;
				case 16:
					n = $i;
					break;
				case 536870912:
					n = ld;
					break;
				default:
					n = $i
			}
			n = Dh(n, Ch.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function Ch(e, t) {
	if (Ni = -1, _i = 0, O & 6) throw Error(S(327));
	var n = e.callbackNode;
	if (zn() && e.callbackNode !== n) return null;
	var r = Hi(e, e === re ? le : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = lo(e, r);
	else {
		t = r;
		var i = O;
		O |= 2;
		var o = Mh();
		(re !== e || le !== t) && (et = null, Kn = Z() + 500, rn(e, t));
		do try {
			Sg();
			break
		} catch (l) {
			Eh(e, l)
		}
		while (!0);
		oa(), io.current = o, O = i, J !== null ? t = 0 : (re = null, le = 0, t = b)
	}
	if (t !== 0) {
		if (t === 2 && (i = Ws(e), i !== 0 && (r = i, t = vl(e, i))), t === 1) throw n = $r, rn(e, 0), kt(e, r), Te(e, Z()), n;
		if (t === 6) kt(e, r);
		else {
			if (i = e.current.alternate, !(r & 30) && !xg(i) && (t = lo(e, r), t === 2 && (o = Ws(e), o !== 0 && (r = o, t = vl(e, o))), t === 1)) throw n = $r, rn(e, 0), kt(e, r), Te(e, Z()), n;
			switch (e.finishedWork = i, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(S(345));
				case 2:
					Zt(e, we, et);
					break;
				case 3:
					if (kt(e, r), (r & 130023424) === r && (t = wa + 500 - Z(), 10 < t)) {
						if (Hi(e, 0) !== 0) break;
						if (i = e.suspendedLanes, (i & r) !== r) {
							ye(), e.pingedLanes |= e.suspendedLanes & i;
							break
						}
						e.timeoutHandle = qs(Zt.bind(null, e, we, et), t);
						break
					}
					Zt(e, we, et);
					break;
				case 4:
					if (kt(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, i = -1; 0 < r;) {
						var s = 31 - Ke(r);
						o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
					}
					if (r = i, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vg(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = qs(Zt.bind(null, e, we, et), r);
						break
					}
					Zt(e, we, et);
					break;
				case 5:
					Zt(e, we, et);
					break;
				default:
					throw Error(S(329))
			}
		}
	}
	return Te(e, Z()), e.callbackNode === n ? Ch.bind(null, e) : null
}

function vl(e, t) {
	var n = wr;
	return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = lo(e, t), e !== 2 && (t = we, we = n, t !== null && xl(t)), e
}

function xl(e) {
	we === null ? we = e : we.push.apply(we, e)
}

function xg(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Qe(o(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function kt(e, t) {
	for (t &= ~xa, t &= ~Lo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - Ke(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function lc(e) {
	if (O & 6) throw Error(S(327));
	zn();
	var t = Hi(e, 0);
	if (!(t & 1)) return Te(e, Z()), null;
	var n = lo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Ws(e);
		r !== 0 && (t = r, n = vl(e, r))
	}
	if (n === 1) throw n = $r, rn(e, 0), kt(e, t), Te(e, Z()), n;
	if (n === 6) throw Error(S(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, we, et), Te(e, Z()), null
}

function Sa(e, t) {
	var n = O;
	O |= 1;
	try {
		return e(t)
	} finally {
		O = n, O === 0 && (Kn = Z() + 500, Co && $t())
	}
}

function fn(e) {
	Tt !== null && Tt.tag === 0 && !(O & 6) && zn();
	var t = O;
	O |= 1;
	var n = ze.transition,
		r = z;
	try {
		if (ze.transition = null, z = 1, e) return e()
	} finally {
		z = r, ze.transition = n, O = t, !(O & 6) && $t()
	}
}

function ka() {
	Ee = Vn.current, U(Vn)
}

function rn(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, X0(n)), J !== null)
		for (n = J.return; n !== null;) {
			var r = n;
			switch (na(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && Yi();
					break;
				case 3:
					Hn(), U(ke), U(me), fa();
					break;
				case 5:
					ca(r);
					break;
				case 4:
					Hn();
					break;
				case 13:
					U(H);
					break;
				case 19:
					U(H);
					break;
				case 10:
					sa(r.type._context);
					break;
				case 22:
				case 23:
					ka()
			}
			n = n.return
		}
	if (re = e, J = e = Nt(e.current, null), le = Ee = t, b = 0, $r = null, xa = Lo = cn = 0, we = wr = null, en !== null) {
		for (t = 0; t < en.length; t++)
			if (n = en[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					o.next = i, r.next = s
				}
				n.pending = r
			} en = null
	}
	return e
}

function Eh(e, t) {
	do {
		var n = J;
		try {
			if (oa(), Ai.current = ro, no) {
				for (var r = K.memoizedState; r !== null;) {
					var i = r.queue;
					i !== null && (i.pending = null), r = r.next
				}
				no = !1
			}
			if (un = 0, ne = q = K = null, vr = !1, Ir = 0, va.current = null, n === null || n.return === null) {
				b = 1, $r = t, J = null;
				break
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t;
				if (t = le, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
					var u = a,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
					}
					var g = Yu(s);
					if (g !== null) {
						g.flags &= -257, Xu(g, s, l, o, t), g.mode & 1 && Qu(o, u, t), t = g, a = u;
						var y = t.updateQueue;
						if (y === null) {
							var v = new Set;
							v.add(a), t.updateQueue = v
						} else y.add(a);
						break e
					} else {
						if (!(t & 1)) {
							Qu(o, u, t), Pa();
							break e
						}
						a = Error(S(426))
					}
				} else if ($ && l.mode & 1) {
					var P = Yu(s);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256), Xu(P, s, l, o, t), ra(Wn(a, l));
						break e
					}
				}
				o = a = Wn(a, l),
				b !== 4 && (b = 2),
				wr === null ? wr = [o] : wr.push(o),
				o = s;do {
					switch (o.tag) {
						case 3:
							o.flags |= 65536, t &= -t, o.lanes |= t;
							var m = uh(o, a, t);
							Uu(o, m);
							break e;
						case 1:
							l = a;
							var h = o.type,
								p = o.stateNode;
							if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Rt === null || !Rt.has(p)))) {
								o.flags |= 65536, t &= -t, o.lanes |= t;
								var x = ch(o, l, t);
								Uu(o, x);
								break e
							}
					}
					o = o.return
				} while (o !== null)
			}
			Lh(n)
		} catch (w) {
			t = w, J === n && n !== null && (J = n = n.return);
			continue
		}
		break
	} while (!0)
}

function Mh() {
	var e = io.current;
	return io.current = ro, e === null ? ro : e
}

function Pa() {
	(b === 0 || b === 3 || b === 2) && (b = 4), re === null || !(cn & 268435455) && !(Lo & 268435455) || kt(re, le)
}

function lo(e, t) {
	var n = O;
	O |= 2;
	var r = Mh();
	(re !== e || le !== t) && (et = null, rn(e, t));
	do try {
		wg();
		break
	} catch (i) {
		Eh(e, i)
	}
	while (!0);
	if (oa(), O = n, io.current = r, J !== null) throw Error(S(261));
	return re = null, le = 0, b
}

function wg() {
	for (; J !== null;) Vh(J)
}

function Sg() {
	for (; J !== null && !Gm();) Vh(J)
}

function Vh(e) {
	var t = Rh(e.alternate, e, Ee);
	e.memoizedProps = e.pendingProps, t === null ? Lh(e) : J = t, va.current = null
}

function Lh(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = pg(n, t), n !== null) {
				n.flags &= 32767, J = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				b = 6, J = null;
				return
			}
		} else if (n = hg(n, t, Ee), n !== null) {
			J = n;
			return
		}
		if (t = t.sibling, t !== null) {
			J = t;
			return
		}
		J = t = e
	} while (t !== null);
	b === 0 && (b = 5)
}

function Zt(e, t, n) {
	var r = z,
		i = ze.transition;
	try {
		ze.transition = null, z = 1, kg(e, t, n, r)
	} finally {
		ze.transition = i, z = r
	}
	return null
}

function kg(e, t, n, r) {
	do zn(); while (Tt !== null);
	if (O & 6) throw Error(S(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var o = n.lanes | n.childLanes;
	if (n0(e, o), e === re && (J = re = null, le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xi || (xi = !0, Dh($i, function() {
			return zn(), null
		})), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
		o = ze.transition, ze.transition = null;
		var s = z;
		z = 1;
		var l = O;
		O |= 4, va.current = null, gg(e, n), Ph(n, e), $0(Zs), Wi = !!Xs, Zs = Xs = null, e.current = n, yg(n), Qm(), O = l, z = s, ze.transition = o
	} else e.current = n;
	if (xi && (xi = !1, Tt = e, so = i), o = e.pendingLanes, o === 0 && (Rt = null), Zm(n.stateNode), Te(e, Z()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
			componentStack: i.stack,
			digest: i.digest
		});
	if (oo) throw oo = !1, e = gl, gl = null, e;
	return so & 1 && e.tag !== 0 && zn(), o = e.pendingLanes, o & 1 ? e === yl ? Sr++ : (Sr = 0, yl = e) : Sr = 0, $t(), null
}

function zn() {
	if (Tt !== null) {
		var e = ud(so),
			t = ze.transition,
			n = z;
		try {
			if (ze.transition = null, z = 16 > e ? 16 : e, Tt === null) var r = !1;
			else {
				if (e = Tt, Tt = null, so = 0, O & 6) throw Error(S(331));
				var i = O;
				for (O |= 4, V = e.current; V !== null;) {
					var o = V,
						s = o.child;
					if (V.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (V = u; V !== null;) {
									var c = V;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											xr(8, c, o)
									}
									var f = c.child;
									if (f !== null) f.return = c, V = f;
									else
										for (; V !== null;) {
											c = V;
											var d = c.sibling,
												g = c.return;
											if (wh(c), c === u) {
												V = null;
												break
											}
											if (d !== null) {
												d.return = g, V = d;
												break
											}
											V = g
										}
								}
							}
							var y = o.alternate;
							if (y !== null) {
								var v = y.child;
								if (v !== null) {
									y.child = null;
									do {
										var P = v.sibling;
										v.sibling = null, v = P
									} while (v !== null)
								}
							}
							V = o
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) s.return = o, V = s;
					else e: for (; V !== null;) {
						if (o = V, o.flags & 2048) switch (o.tag) {
							case 0:
							case 11:
							case 15:
								xr(9, o, o.return)
						}
						var m = o.sibling;
						if (m !== null) {
							m.return = o.return, V = m;
							break e
						}
						V = o.return
					}
				}
				var h = e.current;
				for (V = h; V !== null;) {
					s = V;
					var p = s.child;
					if (s.subtreeFlags & 2064 && p !== null) p.return = s, V = p;
					else e: for (s = h; V !== null;) {
						if (l = V, l.flags & 2048) try {
							switch (l.tag) {
								case 0:
								case 11:
								case 15:
									Vo(9, l)
							}
						} catch (w) {
							Q(l, l.return, w)
						}
						if (l === s) {
							V = null;
							break e
						}
						var x = l.sibling;
						if (x !== null) {
							x.return = l.return, V = x;
							break e
						}
						V = l.return
					}
				}
				if (O = i, $t(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
					Je.onPostCommitFiberRoot(wo, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			z = n, ze.transition = t
		}
	}
	return !1
}

function ac(e, t, n) {
	t = Wn(n, t), t = uh(e, t, 1), e = At(e, t, 1), t = ye(), e !== null && (Yr(e, 1, t), Te(e, t))
}

function Q(e, t, n) {
	if (e.tag === 3) ac(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				ac(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
					e = Wn(n, e), e = ch(t, e, 1), t = At(t, e, 1), e = ye(), t !== null && (Yr(t, 1, e), Te(t, e));
					break
				}
			}
			t = t.return
		}
}

function Pg(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, re === e && (le & n) === n && (b === 4 || b === 3 && (le & 130023424) === le && 500 > Z() - wa ? rn(e, 0) : xa |= n), Te(e, t)
}

function Ah(e, t) {
	t === 0 && (e.mode & 1 ? (t = ui, ui <<= 1, !(ui & 130023424) && (ui = 4194304)) : t = 1);
	var n = ye();
	e = ft(e, t), e !== null && (Yr(e, t, n), Te(e, n))
}

function Tg(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Ah(e, n)
}

function Cg(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(S(314))
	}
	r !== null && r.delete(t), Ah(e, n)
}
var Rh;
Rh = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, dg(e, t, n);
			Se = !!(e.flags & 131072)
		}
	else Se = !1, $ && t.flags & 1048576 && jd(t, Ji, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			Di(e, t), e = t.pendingProps;
			var i = Bn(t, me.current);
			Fn(t, n), i = ha(null, t, r, e, i, n);
			var o = pa();
			return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Xi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, aa(t), i.updater = Mo, t.stateNode = i, i._reactInternals = t, ol(t, r, e, n), t = al(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && ta(t), ge(null, t, i, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (Di(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Mg(r), e = $e(r, e), i) {
					case 0:
						t = ll(null, t, r, e, n);
						break e;
					case 1:
						t = qu(null, t, r, e, n);
						break e;
					case 11:
						t = Zu(null, t, r, e, n);
						break e;
					case 14:
						t = Ju(null, t, r, $e(r.type, e), n);
						break e
				}
				throw Error(S(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : $e(r, i), ll(e, t, r, i, n);
		case 1:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : $e(r, i), qu(e, t, r, i, n);
		case 3:
			e: {
				if (ph(t), e === null) throw Error(S(387));r = t.pendingProps,
				o = t.memoizedState,
				i = o.element,
				Ud(e, t),
				eo(t, r, null, n);
				var s = t.memoizedState;
				if (r = s.element, o.isDehydrated)
					if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						i = Wn(Error(S(423)), t), t = bu(e, t, r, n, i);
						break e
					} else if (r !== i) {
					i = Wn(Error(S(424)), t), t = bu(e, t, r, n, i);
					break e
				} else
					for (Me = Lt(t.stateNode.containerInfo.firstChild), Ve = t, $ = !0, We = null, n = Id(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (Un(), r === i) {
						t = dt(e, t, n);
						break e
					}
					ge(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return $d(t), e === null && nl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Js(r, i) ? s = null : o !== null && Js(r, o) && (t.flags |= 32), hh(e, t), ge(e, t, s, n), t.child;
		case 6:
			return e === null && nl(t), null;
		case 13:
			return mh(e, t, n);
		case 4:
			return ua(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : ge(e, t, r, n), t.child;
		case 11:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : $e(r, i), Zu(e, t, r, i, n);
		case 7:
			return ge(e, t, t.pendingProps, n), t.child;
		case 8:
			return ge(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ge(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, I(qi, r._currentValue), r._currentValue = s, o !== null)
					if (Qe(o.value, s)) {
						if (o.children === i.children && !ke.current) {
							t = dt(e, t, n);
							break e
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null;) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var a = l.firstContext; a !== null;) {
									if (a.context === r) {
										if (o.tag === 1) {
											a = ot(-1, n & -n), a.tag = 2;
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
											}
										}
										o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), rl(o.return, n, t), l.lanes |= n;
										break
									}
									a = a.next
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (s = o.return, s === null) throw Error(S(341));
								s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), rl(s, n, t), s = o.sibling
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null;) {
									if (s === t) {
										s = null;
										break
									}
									if (o = s.sibling, o !== null) {
										o.return = s.return, s = o;
										break
									}
									s = s.return
								}
							o = s
						}
				ge(e, t, i.children, n),
				t = t.child
			}
			return t;
		case 9:
			return i = t.type, r = t.pendingProps.children, Fn(t, n), i = Ie(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
		case 14:
			return r = t.type, i = $e(r, t.pendingProps), i = $e(r.type, i), Ju(e, t, r, i, n);
		case 15:
			return fh(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : $e(r, i), Di(e, t), t.tag = 1, Pe(r) ? (e = !0, Xi(t)) : e = !1, Fn(t, n), ah(t, r, i), ol(t, r, i, n), al(null, t, r, !0, e, n);
		case 19:
			return gh(e, t, n);
		case 22:
			return dh(e, t, n)
	}
	throw Error(S(156, t.tag))
};

function Dh(e, t) {
	return od(e, t)
}

function Eg(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Fe(e, t, n, r) {
	return new Eg(e, t, n, r)
}

function Ta(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function Mg(e) {
	if (typeof e == "function") return Ta(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === Hl) return 11;
		if (e === Wl) return 14
	}
	return 2
}

function Nt(e, t) {
	var n = e.alternate;
	return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ji(e, t, n, r, i, o) {
	var s = 2;
	if (r = e, typeof e == "function") Ta(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else e: switch (e) {
		case vn:
			return on(n.children, i, o, t);
		case $l:
			s = 8, i |= 8;
			break;
		case Ls:
			return e = Fe(12, n, t, i | 2), e.elementType = Ls, e.lanes = o, e;
		case As:
			return e = Fe(13, n, t, i), e.elementType = As, e.lanes = o, e;
		case Rs:
			return e = Fe(19, n, t, i), e.elementType = Rs, e.lanes = o, e;
		case $f:
			return Ao(n, i, o, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case Bf:
					s = 10;
					break e;
				case Uf:
					s = 9;
					break e;
				case Hl:
					s = 11;
					break e;
				case Wl:
					s = 14;
					break e;
				case vt:
					s = 16, r = null;
					break e
			}
			throw Error(S(130, e == null ? e : typeof e, ""))
	}
	return t = Fe(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function on(e, t, n, r) {
	return e = Fe(7, e, r, t), e.lanes = n, e
}

function Ao(e, t, n, r) {
	return e = Fe(22, e, r, t), e.elementType = $f, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function ds(e, t, n) {
	return e = Fe(6, e, null, t), e.lanes = n, e
}

function hs(e, t, n) {
	return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function Vg(e, t, n, r, i) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qo(0), this.expirationTimes = Qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Ca(e, t, n, r, i, o, s, l, a) {
	return e = new Vg(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Fe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, aa(o), e
}

function Lg(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: yn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function Nh(e) {
	if (!e) return Ft;
	e = e._reactInternals;
	e: {
		if (hn(e) !== e || e.tag !== 1) throw Error(S(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Pe(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(S(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Pe(n)) return Nd(e, n, t)
	}
	return t
}

function _h(e, t, n, r, i, o, s, l, a) {
	return e = Ca(n, r, !0, e, i, o, s, l, a), e.context = Nh(null), n = e.current, r = ye(), i = Dt(n), o = ot(r, i), o.callback = t ? ? null, At(n, o, i), e.current.lanes = i, Yr(e, i, r), Te(e, r), e
}

function Ro(e, t, n, r) {
	var i = t.current,
		o = ye(),
		s = Dt(i);
	return n = Nh(n), t.context === null ? t.context = n : t.pendingContext = n, t = ot(o, s), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(i, t, s), e !== null && (Ge(e, i, s, o), Li(e, i, s)), s
}

function ao(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function uc(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function Ea(e, t) {
	uc(e, t), (e = e.alternate) && uc(e, t)
}

function Ag() {
	return null
}
var jh = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function Ma(e) {
	this._internalRoot = e
}
Do.prototype.render = Ma.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(S(409));
	Ro(e, t, null, null)
};
Do.prototype.unmount = Ma.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		fn(function() {
			Ro(null, e, null, null)
		}), t[ct] = null
	}
};

function Do(e) {
	this._internalRoot = e
}
Do.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = dd();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
		St.splice(n, 0, e), n === 0 && pd(e)
	}
};

function Va(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function No(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function cc() {}

function Rg(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function() {
				var u = ao(s);
				o.call(u)
			}
		}
		var s = _h(t, r, e, 0, null, !1, !1, "", cc);
		return e._reactRootContainer = s, e[ct] = s.current, _r(e.nodeType === 8 ? e.parentNode : e), fn(), s
	}
	for (; i = e.lastChild;) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function() {
			var u = ao(a);
			l.call(u)
		}
	}
	var a = Ca(e, 0, !1, null, null, !1, !1, "", cc);
	return e._reactRootContainer = a, e[ct] = a.current, _r(e.nodeType === 8 ? e.parentNode : e), fn(function() {
		Ro(t, a, n, r)
	}), a
}

function _o(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == "function") {
			var l = i;
			i = function() {
				var a = ao(s);
				l.call(a)
			}
		}
		Ro(t, s, e, i)
	} else s = Rg(n, t, e, i, r);
	return ao(s)
}
cd = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = cr(t.pendingLanes);
				n !== 0 && (Ql(t, n | 1), Te(t, Z()), !(O & 6) && (Kn = Z() + 500, $t()))
			}
			break;
		case 13:
			fn(function() {
				var r = ft(e, 1);
				if (r !== null) {
					var i = ye();
					Ge(r, e, 1, i)
				}
			}), Ea(e, 1)
	}
};
Yl = function(e) {
	if (e.tag === 13) {
		var t = ft(e, 134217728);
		if (t !== null) {
			var n = ye();
			Ge(t, e, 134217728, n)
		}
		Ea(e, 134217728)
	}
};
fd = function(e) {
	if (e.tag === 13) {
		var t = Dt(e),
			n = ft(e, t);
		if (n !== null) {
			var r = ye();
			Ge(n, e, t, r)
		}
		Ea(e, t)
	}
};
dd = function() {
	return z
};
hd = function(e, t) {
	var n = z;
	try {
		return z = e, t()
	} finally {
		z = n
	}
};
Us = function(e, t, n) {
	switch (t) {
		case "input":
			if (_s(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = To(r);
						if (!i) throw Error(S(90));
						Wf(r), _s(r, i)
					}
				}
			}
			break;
		case "textarea":
			Gf(e, n);
			break;
		case "select":
			t = n.value, t != null && Nn(e, !!n.multiple, t, !1)
	}
};
bf = Sa;
ed = fn;
var Dg = {
		usingClientEntryPoint: !1,
		Events: [Zr, kn, To, Jf, qf, Sa]
	},
	sr = {
		findFiberByHostInstance: bt,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	Ng = {
		bundleType: sr.bundleType,
		version: sr.version,
		rendererPackageName: sr.rendererPackageName,
		rendererConfig: sr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: pt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = rd(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: sr.findFiberByHostInstance || Ag,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!wi.isDisabled && wi.supportsFiber) try {
		wo = wi.inject(Ng), Je = wi
	} catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
Re.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Va(t)) throw Error(S(200));
	return Lg(e, t, null, n)
};
Re.createRoot = function(e, t) {
	if (!Va(e)) throw Error(S(299));
	var n = !1,
		r = "",
		i = jh;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ca(e, 1, !1, null, null, n, !1, r, i), e[ct] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new Ma(t)
};
Re.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
	return e = rd(t), e = e === null ? null : e.stateNode, e
};
Re.flushSync = function(e) {
	return fn(e)
};
Re.hydrate = function(e, t, n) {
	if (!No(t)) throw Error(S(200));
	return _o(null, e, t, !0, n)
};
Re.hydrateRoot = function(e, t, n) {
	if (!Va(e)) throw Error(S(405));
	var r = n != null && n.hydratedSources || null,
		i = !1,
		o = "",
		s = jh;
	if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = _h(t, null, e, 1, n ? ? null, i, !1, o, s), e[ct] = t.current, _r(e), r)
		for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
	return new Do(t)
};
Re.render = function(e, t, n) {
	if (!No(t)) throw Error(S(200));
	return _o(null, e, t, !1, n)
};
Re.unmountComponentAtNode = function(e) {
	if (!No(e)) throw Error(S(40));
	return e._reactRootContainer ? (fn(function() {
		_o(null, null, e, !1, function() {
			e._reactRootContainer = null, e[ct] = null
		})
	}), !0) : !1
};
Re.unstable_batchedUpdates = Sa;
Re.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!No(n)) throw Error(S(200));
	if (e == null || e._reactInternals === void 0) throw Error(S(38));
	return _o(e, t, n, !1, r)
};
Re.version = "18.3.1-next-f1338f8080-20240426";

function Oh() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oh)
	} catch (e) {
		console.error(e)
	}
}
Oh(), Of.exports = Re;
var _g = Of.exports,
	fc = _g;
Ms.createRoot = fc.createRoot, Ms.hydrateRoot = fc.hydrateRoot;
const Fh = R.createContext({
		transformPagePoint: e => e,
		isStatic: !1,
		reducedMotion: "never"
	}),
	jo = R.createContext({}),
	La = R.createContext(null),
	Aa = typeof document < "u",
	jg = Aa ? R.useLayoutEffect : R.useEffect,
	zh = R.createContext({
		strict: !1
	}),
	Ra = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
	Og = "framerAppearId",
	Ih = "data-" + Ra(Og),
	Fg = {
		skipAnimations: !1,
		useManualTiming: !1
	};
class dc {
	constructor() {
		this.order = [], this.scheduled = new Set
	}
	add(t) {
		if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
	}
	remove(t) {
		const n = this.order.indexOf(t);
		n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
	}
	clear() {
		this.order.length = 0, this.scheduled.clear()
	}
}

function zg(e) {
	let t = new dc,
		n = new dc,
		r = 0,
		i = !1,
		o = !1;
	const s = new WeakSet,
		l = {
			schedule: (a, u = !1, c = !1) => {
				const f = c && i,
					d = f ? t : n;
				return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a
			},
			cancel: a => {
				n.remove(a), s.delete(a)
			},
			process: a => {
				if (i) {
					o = !0;
					return
				}
				if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
					for (let u = 0; u < r; u++) {
						const c = t.order[u];
						s.has(c) && (l.schedule(c), e()), c(a)
					}
				i = !1, o && (o = !1, l.process(a))
			}
		};
	return l
}
const Si = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
	Ig = 40;

function Bh(e, t) {
	let n = !1,
		r = !0;
	const i = {
			delta: 0,
			timestamp: 0,
			isProcessing: !1
		},
		o = Si.reduce((f, d) => (f[d] = zg(() => n = !0), f), {}),
		s = f => {
			o[f].process(i)
		},
		l = () => {
			const f = performance.now();
			n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Ig), 1), i.timestamp = f, i.isProcessing = !0, Si.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(l))
		},
		a = () => {
			n = !0, r = !0, i.isProcessing || e(l)
		};
	return {
		schedule: Si.reduce((f, d) => {
			const g = o[d];
			return f[d] = (y, v = !1, P = !1) => (n || a(), g.schedule(y, v, P)), f
		}, {}),
		cancel: f => Si.forEach(d => o[d].cancel(f)),
		state: i,
		steps: o
	}
}
const {
	schedule: Da,
	cancel: y2
} = Bh(queueMicrotask, !1);

function Ln(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const Uh = R.createContext({});
let hc = !1;

function Bg(e, t, n, r, i) {
	const {
		visualElement: o
	} = R.useContext(jo), s = R.useContext(zh), l = R.useContext(La), a = R.useContext(Fh).reducedMotion, u = R.useRef();
	r = r || s.renderer, !u.current && r && (u.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: l,
		blockInitialAnimation: l ? l.initial === !1 : !1,
		reducedMotionConfig: a
	}));
	const c = u.current,
		f = R.useContext(Uh);
	c && !c.projection && i && (c.type === "html" || c.type === "svg") && $g(u.current, n, i, f), R.useInsertionEffect(() => {
		c && c.update(n, l)
	});
	const d = R.useRef(!!(n[Ih] && !window.HandoffComplete));
	return jg(() => {
		c && (c.updateFeatures(), Da.render(c.render), d.current && c.animationState && c.animationState.animateChanges())
	}), R.useEffect(() => {
		c && (!d.current && c.animationState && c.animationState.animateChanges(), d.current && (d.current = !1, hc || (hc = !0, queueMicrotask(Ug))))
	}), c
}

function Ug() {
	window.HandoffComplete = !0
}

function $g(e, t, n, r) {
	const {
		layoutId: i,
		layout: o,
		drag: s,
		dragConstraints: l,
		layoutScroll: a,
		layoutRoot: u
	} = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : $h(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: o,
		alwaysMeasureLayout: !!s || l && Ln(l),
		visualElement: e,
		scheduleRender: () => e.scheduleRender(),
		animationType: typeof o == "string" ? o : "both",
		initialPromotionConfig: r,
		layoutScroll: a,
		layoutRoot: u
	})
}

function $h(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : $h(e.parent)
}

function Hg(e, t, n) {
	return R.useCallback(r => {
		r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ln(n) && (n.current = r))
	}, [t])
}

function Hr(e) {
	return typeof e == "string" || Array.isArray(e)
}

function Oo(e) {
	return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Na = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
	_a = ["initial", ...Na];

function Fo(e) {
	return Oo(e.animate) || _a.some(t => Hr(e[t]))
}

function Hh(e) {
	return !!(Fo(e) || e.variants)
}

function Wg(e, t) {
	if (Fo(e)) {
		const {
			initial: n,
			animate: r
		} = e;
		return {
			initial: n === !1 || Hr(n) ? n : void 0,
			animate: Hr(r) ? r : void 0
		}
	}
	return e.inherit !== !1 ? t : {}
}

function Kg(e) {
	const {
		initial: t,
		animate: n
	} = Wg(e, R.useContext(jo));
	return R.useMemo(() => ({
		initial: t,
		animate: n
	}), [pc(t), pc(n)])
}

function pc(e) {
	return Array.isArray(e) ? e.join(" ") : e
}
const mc = {
		animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
		exit: ["exit"],
		drag: ["drag", "dragControls"],
		focus: ["whileFocus"],
		hover: ["whileHover", "onHoverStart", "onHoverEnd"],
		tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
		pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
		inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
		layout: ["layout", "layoutId"]
	},
	Gn = {};
for (const e in mc) Gn[e] = {
	isEnabled: t => mc[e].some(n => !!t[n])
};

function Gg(e) {
	for (const t in e) Gn[t] = {
		...Gn[t],
		...e[t]
	}
}
const Wh = R.createContext({}),
	Qg = Symbol.for("motionComponentSymbol"),
	pe = e => e;
let wl = pe;

function Yg({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i
}) {
	e && Gg(e);

	function o(l, a) {
		let u;
		const c = {
				...R.useContext(Fh),
				...l,
				layoutId: Xg(l)
			},
			{
				isStatic: f
			} = c,
			d = Kg(l),
			g = r(l, f);
		if (!f && Aa) {
			Zg();
			const y = Jg(c);
			u = y.MeasureLayout, d.visualElement = Bg(i, g, c, t, y.ProjectionNode)
		}
		return C.jsxs(jo.Provider, {
			value: d,
			children: [u && d.visualElement ? C.jsx(u, {
				visualElement: d.visualElement,
				...c
			}) : null, n(i, l, Hg(g, d.visualElement, a), g, f, d.visualElement)]
		})
	}
	const s = R.forwardRef(o);
	return s[Qg] = i, s
}

function Xg({
	layoutId: e
}) {
	const t = R.useContext(Wh).id;
	return t && e !== void 0 ? t + "-" + e : e
}

function Zg(e, t) {
	R.useContext(zh).strict
}

function Jg(e) {
	const {
		drag: t,
		layout: n
	} = Gn;
	if (!t && !n) return {};
	const r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	}
}

function qg(e) {
	function t(r, i = {}) {
		return Yg(e(r, i))
	}
	if (typeof Proxy > "u") return t;
	const n = new Map;
	return new Proxy(t, {
		get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
	})
}
const bg = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function ja(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(bg.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const uo = {};

function ey(e) {
	Object.assign(uo, e)
}
const qr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
	pn = new Set(qr);

function Kh(e, {
	layout: t,
	layoutId: n
}) {
	return pn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!uo[e] || e === "opacity")
}
const he = e => !!(e && e.getVelocity),
	ty = {
		x: "translateX",
		y: "translateY",
		z: "translateZ",
		transformPerspective: "perspective"
	},
	ny = qr.length;

function ry(e, {
	enableHardwareAcceleration: t = !0,
	allowTransformNone: n = !0
}, r, i) {
	let o = "";
	for (let s = 0; s < ny; s++) {
		const l = qr[s];
		if (e[l] !== void 0) {
			const a = ty[l] || l;
			o += `${a}(${e[l]}) `
		}
	}
	return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o
}
const Gh = e => t => typeof t == "string" && t.startsWith(e),
	Qh = Gh("--"),
	iy = Gh("var(--"),
	Oa = e => iy(e) ? oy.test(e.split("/*")[0].trim()) : !1,
	oy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	sy = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
	zt = (e, t, n) => n > t ? t : n < e ? e : n,
	Jn = {
		test: e => typeof e == "number",
		parse: parseFloat,
		transform: e => e
	},
	kr = {
		...Jn,
		transform: e => zt(0, 1, e)
	},
	ki = {
		...Jn,
		default: 1
	},
	Pr = e => Math.round(e * 1e5) / 1e5,
	Fa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
	ly = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
	ay = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function br(e) {
	return typeof e == "string"
}
const ei = e => ({
		test: t => br(t) && t.endsWith(e) && t.split(" ").length === 1,
		parse: parseFloat,
		transform: t => `${t}${e}`
	}),
	yt = ei("deg"),
	be = ei("%"),
	L = ei("px"),
	uy = ei("vh"),
	cy = ei("vw"),
	gc = {
		...be,
		parse: e => be.parse(e) / 100,
		transform: e => be.transform(e * 100)
	},
	yc = {
		...Jn,
		transform: Math.round
	},
	Yh = {
		borderWidth: L,
		borderTopWidth: L,
		borderRightWidth: L,
		borderBottomWidth: L,
		borderLeftWidth: L,
		borderRadius: L,
		radius: L,
		borderTopLeftRadius: L,
		borderTopRightRadius: L,
		borderBottomRightRadius: L,
		borderBottomLeftRadius: L,
		width: L,
		maxWidth: L,
		height: L,
		maxHeight: L,
		size: L,
		top: L,
		right: L,
		bottom: L,
		left: L,
		padding: L,
		paddingTop: L,
		paddingRight: L,
		paddingBottom: L,
		paddingLeft: L,
		margin: L,
		marginTop: L,
		marginRight: L,
		marginBottom: L,
		marginLeft: L,
		rotate: yt,
		rotateX: yt,
		rotateY: yt,
		rotateZ: yt,
		scale: ki,
		scaleX: ki,
		scaleY: ki,
		scaleZ: ki,
		skew: yt,
		skewX: yt,
		skewY: yt,
		distance: L,
		translateX: L,
		translateY: L,
		translateZ: L,
		x: L,
		y: L,
		z: L,
		perspective: L,
		transformPerspective: L,
		opacity: kr,
		originX: gc,
		originY: gc,
		originZ: L,
		zIndex: yc,
		backgroundPositionX: L,
		backgroundPositionY: L,
		fillOpacity: kr,
		strokeOpacity: kr,
		numOctaves: yc
	};

function za(e, t, n, r) {
	const {
		style: i,
		vars: o,
		transform: s,
		transformOrigin: l
	} = e;
	let a = !1,
		u = !1,
		c = !0;
	for (const f in t) {
		const d = t[f];
		if (Qh(f)) {
			o[f] = d;
			continue
		}
		const g = Yh[f],
			y = sy(d, g);
		if (pn.has(f)) {
			if (a = !0, s[f] = y, !c) continue;
			d !== (g.default || 0) && (c = !1)
		} else f.startsWith("origin") ? (u = !0, l[f] = y) : i[f] = y
	}
	if (t.transform || (a || r ? i.transform = ry(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
		const {
			originX: f = "50%",
			originY: d = "50%",
			originZ: g = 0
		} = l;
		i.transformOrigin = `${f} ${d} ${g}`
	}
}
const Ia = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});

function Xh(e, t, n) {
	for (const r in t) !he(t[r]) && !Kh(r, n) && (e[r] = t[r])
}

function fy({
	transformTemplate: e
}, t, n) {
	return R.useMemo(() => {
		const r = Ia();
		return za(r, t, {
			enableHardwareAcceleration: !n
		}, e), Object.assign({}, r.vars, r.style)
	}, [t])
}

function dy(e, t, n) {
	const r = e.style || {},
		i = {};
	return Xh(i, r, e), Object.assign(i, fy(e, t, n)), i
}

function hy(e, t, n) {
	const r = {},
		i = dy(e, t, n);
	return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const py = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function co(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || py.has(e)
}
let Zh = e => !co(e);

function my(e) {
	e && (Zh = t => t.startsWith("on") ? !co(t) : e(t))
}
try {
	my(require("@emotion/is-prop-valid").default)
} catch {}

function gy(e, t, n) {
	const r = {};
	for (const i in e) i === "values" && typeof e.values == "object" || (Zh(i) || n === !0 && co(i) || !t && !co(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r
}

function vc(e, t, n) {
	return typeof e == "string" ? e : L.transform(t + n * e)
}

function yy(e, t, n) {
	const r = vc(t, e.x, e.width),
		i = vc(n, e.y, e.height);
	return `${r} ${i}`
}
const vy = {
		offset: "stroke-dashoffset",
		array: "stroke-dasharray"
	},
	xy = {
		offset: "strokeDashoffset",
		array: "strokeDasharray"
	};

function wy(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const o = i ? vy : xy;
	e[o.offset] = L.transform(-r);
	const s = L.transform(t),
		l = L.transform(n);
	e[o.array] = `${s} ${l}`
}

function Ba(e, {
	attrX: t,
	attrY: n,
	attrScale: r,
	originX: i,
	originY: o,
	pathLength: s,
	pathSpacing: l = 1,
	pathOffset: a = 0,
	...u
}, c, f, d) {
	if (za(e, u, c, d), f) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return
	}
	e.attrs = e.style, e.style = {};
	const {
		attrs: g,
		style: y,
		dimensions: v
	} = e;
	g.transform && (v && (y.transform = g.transform), delete g.transform), v && (i !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = yy(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (g.x = t), n !== void 0 && (g.y = n), r !== void 0 && (g.scale = r), s !== void 0 && wy(g, s, l, a, !1)
}
const Jh = () => ({
		...Ia(),
		attrs: {}
	}),
	Ua = e => typeof e == "string" && e.toLowerCase() === "svg";

function Sy(e, t, n, r) {
	const i = R.useMemo(() => {
		const o = Jh();
		return Ba(o, t, {
			enableHardwareAcceleration: !1
		}, Ua(r), e.transformTemplate), {
			...o.attrs,
			style: {
				...o.style
			}
		}
	}, [t]);
	if (e.style) {
		const o = {};
		Xh(o, e.style, e), i.style = {
			...o,
			...i.style
		}
	}
	return i
}

function ky(e = !1) {
	return (n, r, i, {
		latestValues: o
	}, s) => {
		const a = (ja(n) ? Sy : hy)(r, o, s, n),
			u = gy(r, typeof n == "string", e),
			c = n !== R.Fragment ? {
				...u,
				...a,
				ref: i
			} : {},
			{
				children: f
			} = r,
			d = R.useMemo(() => he(f) ? f.get() : f, [f]);
		return R.createElement(n, {
			...c,
			children: d
		})
	}
}

function qh(e, {
	style: t,
	vars: n
}, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (const o in n) e.style.setProperty(o, n[o])
}
const bh = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function ep(e, t, n, r) {
	qh(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(bh.has(i) ? i : Ra(i), t.attrs[i])
}

function $a(e, t, n) {
	var r;
	const {
		style: i
	} = e, o = {};
	for (const s in i)(he(i[s]) || t.style && he(t.style[s]) || Kh(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
	return o
}

function tp(e, t, n) {
	const r = $a(e, t, n);
	for (const i in e)
		if (he(e[i]) || he(t[i])) {
			const o = qr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
			r[o] = e[i]
		} return r
}

function xc(e) {
	const t = [{}, {}];
	return e == null || e.values.forEach((n, r) => {
		t[0][r] = n.get(), t[1][r] = n.getVelocity()
	}), t
}

function Ha(e, t, n, r) {
	if (typeof t == "function") {
		const [i, o] = xc(r);
		t = t(n !== void 0 ? n : e.custom, i, o)
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		const [i, o] = xc(r);
		t = t(n !== void 0 ? n : e.custom, i, o)
	}
	return t
}

function Py(e) {
	const t = R.useRef(null);
	return t.current === null && (t.current = e()), t.current
}
const Sl = e => Array.isArray(e),
	Ty = e => !!(e && typeof e == "object" && e.mix && e.toValue),
	Cy = e => Sl(e) ? e[e.length - 1] || 0 : e;

function Oi(e) {
	const t = he(e) ? e.get() : e;
	return Ty(t) ? t.toValue() : t
}

function Ey({
	scrapeMotionValuesFromProps: e,
	createRenderState: t,
	onMount: n
}, r, i, o) {
	const s = {
		latestValues: My(r, i, o, e),
		renderState: t()
	};
	return n && (s.mount = l => n(r, l, s)), s
}
const np = e => (t, n) => {
	const r = R.useContext(jo),
		i = R.useContext(La),
		o = () => Ey(e, t, r, i);
	return n ? o() : Py(o)
};

function My(e, t, n, r) {
	const i = {},
		o = r(e, {});
	for (const d in o) i[d] = Oi(o[d]);
	let {
		initial: s,
		animate: l
	} = e;
	const a = Fo(e),
		u = Hh(e);
	t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || s === !1;
	const f = c ? l : s;
	return f && typeof f != "boolean" && !Oo(f) && (Array.isArray(f) ? f : [f]).forEach(g => {
		const y = Ha(e, g);
		if (!y) return;
		const {
			transitionEnd: v,
			transition: P,
			...m
		} = y;
		for (const h in m) {
			let p = m[h];
			if (Array.isArray(p)) {
				const x = c ? p.length - 1 : 0;
				p = p[x]
			}
			p !== null && (i[h] = p)
		}
		for (const h in v) i[h] = v[h]
	}), i
}
const {
	schedule: F,
	cancel: ht,
	state: se,
	steps: ps
} = Bh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : pe, !0), Vy = {
	useVisualState: np({
		scrapeMotionValuesFromProps: tp,
		createRenderState: Jh,
		onMount: (e, t, {
			renderState: n,
			latestValues: r
		}) => {
			F.read(() => {
				try {
					n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
				} catch {
					n.dimensions = {
						x: 0,
						y: 0,
						width: 0,
						height: 0
					}
				}
			}), F.render(() => {
				Ba(n, r, {
					enableHardwareAcceleration: !1
				}, Ua(t.tagName), e.transformTemplate), ep(t, n)
			})
		}
	})
}, Ly = {
	useVisualState: np({
		scrapeMotionValuesFromProps: $a,
		createRenderState: Ia
	})
};

function Ay(e, {
	forwardMotionProps: t = !1
}, n, r) {
	return {
		...ja(e) ? Vy : Ly,
		preloadedFeatures: n,
		useRender: ky(t),
		createVisualElement: r,
		Component: e
	}
}

function it(e, t, n, r = {
	passive: !0
}) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const rp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function zo(e, t = "page") {
	return {
		point: {
			x: e[`${t}X`],
			y: e[`${t}Y`]
		}
	}
}
const Ry = e => t => rp(t) && e(t, zo(t));

function st(e, t, n, r) {
	return it(e, t, Ry(n), r)
}
const Dy = (e, t) => n => t(e(n)),
	lt = (...e) => e.reduce(Dy);

function ip(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null
		};
		return t === null ? (t = e, n) : !1
	}
}
const wc = ip("dragHorizontal"),
	Sc = ip("dragVertical");

function op(e) {
	let t = !1;
	if (e === "y") t = Sc();
	else if (e === "x") t = wc();
	else {
		const n = wc(),
			r = Sc();
		n && r ? t = () => {
			n(), r()
		} : (n && n(), r && r())
	}
	return t
}

function sp() {
	const e = op(!0);
	return e ? (e(), !1) : !0
}
class Ht {
	constructor(t) {
		this.isMounted = !1, this.node = t
	}
	update() {}
}

function kc(e, t) {
	const n = t ? "pointerenter" : "pointerleave",
		r = t ? "onHoverStart" : "onHoverEnd",
		i = (o, s) => {
			if (o.pointerType === "touch" || sp()) return;
			const l = e.getProps();
			e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
			const a = l[r];
			a && F.postRender(() => a(o, s))
		};
	return st(e.current, n, i, {
		passive: !e.getProps()[r]
	})
}
class Ny extends Ht {
	mount() {
		this.unmount = lt(kc(this.node, !0), kc(this.node, !1))
	}
	unmount() {}
}
class _y extends Ht {
	constructor() {
		super(...arguments), this.isActive = !1
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(":focus-visible")
		} catch {
			t = !0
		}!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
	}
	mount() {
		this.unmount = lt(it(this.node.current, "focus", () => this.onFocus()), it(this.node.current, "blur", () => this.onBlur()))
	}
	unmount() {}
}
const lp = (e, t) => t ? e === t ? !0 : lp(e, t.parentElement) : !1;

function ms(e, t) {
	if (!t) return;
	const n = new PointerEvent("pointer" + e);
	t(n, zo(n))
}
class jy extends Ht {
	constructor() {
		super(...arguments), this.removeStartListeners = pe, this.removeEndListeners = pe, this.removeAccessibleListeners = pe, this.startPointerPress = (t, n) => {
			if (this.isPressing) return;
			this.removeEndListeners();
			const r = this.node.getProps(),
				o = st(window, "pointerup", (l, a) => {
					if (!this.checkPressEnd()) return;
					const {
						onTap: u,
						onTapCancel: c,
						globalTapTarget: f
					} = this.node.getProps(), d = !f && !lp(this.node.current, l.target) ? c : u;
					d && F.update(() => d(l, a))
				}, {
					passive: !(r.onTap || r.onPointerUp)
				}),
				s = st(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
					passive: !(r.onTapCancel || r.onPointerCancel)
				});
			this.removeEndListeners = lt(o, s), this.startPress(t, n)
		}, this.startAccessiblePress = () => {
			const t = o => {
					if (o.key !== "Enter" || this.isPressing) return;
					const s = l => {
						l.key !== "Enter" || !this.checkPressEnd() || ms("up", (a, u) => {
							const {
								onTap: c
							} = this.node.getProps();
							c && F.postRender(() => c(a, u))
						})
					};
					this.removeEndListeners(), this.removeEndListeners = it(this.node.current, "keyup", s), ms("down", (l, a) => {
						this.startPress(l, a)
					})
				},
				n = it(this.node.current, "keydown", t),
				r = () => {
					this.isPressing && ms("cancel", (o, s) => this.cancelPress(o, s))
				},
				i = it(this.node.current, "blur", r);
			this.removeAccessibleListeners = lt(n, i)
		}
	}
	startPress(t, n) {
		this.isPressing = !0;
		const {
			onTapStart: r,
			whileTap: i
		} = this.node.getProps();
		i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && F.postRender(() => r(t, n))
	}
	checkPressEnd() {
		return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sp()
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const {
			onTapCancel: r
		} = this.node.getProps();
		r && F.postRender(() => r(t, n))
	}
	mount() {
		const t = this.node.getProps(),
			n = st(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
				passive: !(t.onTapStart || t.onPointerStart)
			}),
			r = it(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = lt(n, r)
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
	}
}
const kl = new WeakMap,
	gs = new WeakMap,
	Oy = e => {
		const t = kl.get(e.target);
		t && t(e)
	},
	Fy = e => {
		e.forEach(Oy)
	};

function zy({
	root: e,
	...t
}) {
	const n = e || document;
	gs.has(n) || gs.set(n, {});
	const r = gs.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Fy, {
		root: e,
		...t
	})), r[i]
}

function Iy(e, t, n) {
	const r = zy(t);
	return kl.set(e, n), r.observe(e), () => {
		kl.delete(e), r.unobserve(e)
	}
}
const By = {
	some: 0,
	all: 1
};
class Uy extends Ht {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1
	}
	startObserver() {
		this.unmount();
		const {
			viewport: t = {}
		} = this.node.getProps(), {
			root: n,
			margin: r,
			amount: i = "some",
			once: o
		} = t, s = {
			root: n ? n.current : void 0,
			rootMargin: r,
			threshold: typeof i == "number" ? i : By[i]
		}, l = a => {
			const {
				isIntersecting: u
			} = a;
			if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
			u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
			const {
				onViewportEnter: c,
				onViewportLeave: f
			} = this.node.getProps(), d = u ? c : f;
			d && d(a)
		};
		return Iy(this.node.current, s, l)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		const {
			props: t,
			prevProps: n
		} = this.node;
		["amount", "margin", "root"].some($y(t, n)) && this.startObserver()
	}
	unmount() {}
}

function $y({
	viewport: e = {}
}, {
	viewport: t = {}
} = {}) {
	return n => e[n] !== t[n]
}
const Hy = {
	inView: {
		Feature: Uy
	},
	tap: {
		Feature: jy
	},
	focus: {
		Feature: _y
	},
	hover: {
		Feature: Ny
	}
};

function ap(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++)
		if (t[r] !== e[r]) return !1;
	return !0
}

function Io(e, t, n) {
	const r = e.getProps();
	return Ha(r, t, n !== void 0 ? n : r.custom, e)
}
const _t = e => e * 1e3,
	at = e => e / 1e3,
	Wy = {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restSpeed: 10
	},
	Ky = e => ({
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10
	}),
	Gy = {
		type: "keyframes",
		duration: .8
	},
	Qy = {
		type: "keyframes",
		ease: [.25, .1, .35, 1],
		duration: .3
	},
	Yy = (e, {
		keyframes: t
	}) => t.length > 2 ? Gy : pn.has(e) ? e.startsWith("scale") ? Ky(t[1]) : Wy : Qy;

function Xy({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: o,
	repeatType: s,
	repeatDelay: l,
	from: a,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length
}

function Wa(e, t) {
	return e[t] || e.default || e
}
const Zy = e => e !== null;

function Bo(e, {
	repeat: t,
	repeatType: n = "loop"
}, r) {
	const i = e.filter(Zy),
		o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
	return !o || r === void 0 ? i[o] : r
}
let Fi;

function Jy() {
	Fi = void 0
}
const jt = {
		now: () => (Fi === void 0 && jt.set(se.isProcessing || Fg.useManualTiming ? se.timestamp : performance.now()), Fi),
		set: e => {
			Fi = e, queueMicrotask(Jy)
		}
	},
	up = e => /^0[^.\s]+$/u.test(e);

function qy(e) {
	return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || up(e) : !0
}
const cp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	by = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function ev(e) {
	const t = by.exec(e);
	if (!t) return [, ];
	const [, n, r, i] = t;
	return [`--${n??r}`, i]
}

function fp(e, t, n = 1) {
	const [r, i] = ev(e);
	if (!r) return;
	const o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		const s = o.trim();
		return cp(s) ? parseFloat(s) : s
	}
	return Oa(i) ? fp(i, t, n + 1) : i
}
const tv = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
	Pc = e => e === Jn || e === L,
	Tc = (e, t) => parseFloat(e.split(", ")[t]),
	Cc = (e, t) => (n, {
		transform: r
	}) => {
		if (r === "none" || !r) return 0;
		const i = r.match(/^matrix3d\((.+)\)$/u);
		if (i) return Tc(i[1], t); {
			const o = r.match(/^matrix\((.+)\)$/u);
			return o ? Tc(o[1], e) : 0
		}
	},
	nv = new Set(["x", "y", "z"]),
	rv = qr.filter(e => !nv.has(e));

function iv(e) {
	const t = [];
	return rv.forEach(n => {
		const r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
	}), t
}
const Qn = {
	width: ({
		x: e
	}, {
		paddingLeft: t = "0",
		paddingRight: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({
		y: e
	}, {
		paddingTop: t = "0",
		paddingBottom: n = "0"
	}) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, {
		top: t
	}) => parseFloat(t),
	left: (e, {
		left: t
	}) => parseFloat(t),
	bottom: ({
		y: e
	}, {
		top: t
	}) => parseFloat(t) + (e.max - e.min),
	right: ({
		x: e
	}, {
		left: t
	}) => parseFloat(t) + (e.max - e.min),
	x: Cc(4, 13),
	y: Cc(5, 14)
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const dp = e => t => t.test(e),
	ov = {
		test: e => e === "auto",
		parse: e => e
	},
	hp = [Jn, L, be, yt, cy, uy, ov],
	Ec = e => hp.find(dp(e)),
	sn = new Set;
let Pl = !1,
	Tl = !1;

function pp() {
	if (Tl) {
		const e = Array.from(sn).filter(r => r.needsMeasurement),
			t = new Set(e.map(r => r.element)),
			n = new Map;
		t.forEach(r => {
			const i = iv(r);
			i.length && (n.set(r, i), r.render())
		}), e.forEach(r => r.measureInitialState()), t.forEach(r => {
			r.render();
			const i = n.get(r);
			i && i.forEach(([o, s]) => {
				var l;
				(l = r.getValue(o)) === null || l === void 0 || l.set(s)
			})
		}), e.forEach(r => r.measureEndState()), e.forEach(r => {
			r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
		})
	}
	Tl = !1, Pl = !1, sn.forEach(e => e.complete()), sn.clear()
}

function mp() {
	sn.forEach(e => {
		e.readKeyframes(), e.needsMeasurement && (Tl = !0)
	})
}

function sv() {
	mp(), pp()
}
class Ka {
	constructor(t, n, r, i, o, s = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (sn.add(this), Pl || (Pl = !0, F.read(mp), F.resolveKeyframes(pp))) : (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i
		} = this;
		for (let o = 0; o < t.length; o++)
			if (t[o] === null)
				if (o === 0) {
					const s = i == null ? void 0 : i.get(),
						l = t[t.length - 1];
					if (s !== void 0) t[0] = s;
					else if (r && n) {
						const a = r.readValue(n, l);
						a != null && (t[0] = a)
					}
					t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0])
				} else t[o] = t[o - 1]
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), sn.delete(this)
	}
	cancel() {
		this.isComplete || (this.isScheduled = !1, sn.delete(this))
	}
	resume() {
		this.isComplete || this.scheduleResolve()
	}
}
const Ga = (e, t) => n => !!(br(n) && ay.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
	gp = (e, t, n) => r => {
		if (!br(r)) return r;
		const [i, o, s, l] = r.match(Fa);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(o),
			[n]: parseFloat(s),
			alpha: l !== void 0 ? parseFloat(l) : 1
		}
	},
	lv = e => zt(0, 255, e),
	ys = {
		...Jn,
		transform: e => Math.round(lv(e))
	},
	nn = {
		test: Ga("rgb", "red"),
		parse: gp("red", "green", "blue"),
		transform: ({
			red: e,
			green: t,
			blue: n,
			alpha: r = 1
		}) => "rgba(" + ys.transform(e) + ", " + ys.transform(t) + ", " + ys.transform(n) + ", " + Pr(kr.transform(r)) + ")"
	};

function av(e) {
	let t = "",
		n = "",
		r = "",
		i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	}
}
const Cl = {
		test: Ga("#"),
		parse: av,
		transform: nn.transform
	},
	An = {
		test: Ga("hsl", "hue"),
		parse: gp("hue", "saturation", "lightness"),
		transform: ({
			hue: e,
			saturation: t,
			lightness: n,
			alpha: r = 1
		}) => "hsla(" + Math.round(e) + ", " + be.transform(Pr(t)) + ", " + be.transform(Pr(n)) + ", " + Pr(kr.transform(r)) + ")"
	},
	fe = {
		test: e => nn.test(e) || Cl.test(e) || An.test(e),
		parse: e => nn.test(e) ? nn.parse(e) : An.test(e) ? An.parse(e) : Cl.parse(e),
		transform: e => br(e) ? e : e.hasOwnProperty("red") ? nn.transform(e) : An.transform(e)
	};

function uv(e) {
	var t, n;
	return isNaN(e) && br(e) && (((t = e.match(Fa)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ly)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const yp = "number",
	vp = "color",
	cv = "var",
	fv = "var(",
	Mc = "${}",
	dv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Wr(e) {
	const t = e.toString(),
		n = [],
		r = {
			color: [],
			number: [],
			var: []
		},
		i = [];
	let o = 0;
	const l = t.replace(dv, a => (fe.test(a) ? (r.color.push(o), i.push(vp), n.push(fe.parse(a))) : a.startsWith(fv) ? (r.var.push(o), i.push(cv), n.push(a)) : (r.number.push(o), i.push(yp), n.push(parseFloat(a))), ++o, Mc)).split(Mc);
	return {
		values: n,
		split: l,
		indexes: r,
		types: i
	}
}

function xp(e) {
	return Wr(e).values
}

function wp(e) {
	const {
		split: t,
		types: n
	} = Wr(e), r = t.length;
	return i => {
		let o = "";
		for (let s = 0; s < r; s++)
			if (o += t[s], i[s] !== void 0) {
				const l = n[s];
				l === yp ? o += Pr(i[s]) : l === vp ? o += fe.transform(i[s]) : o += i[s]
			} return o
	}
}
const hv = e => typeof e == "number" ? 0 : e;

function pv(e) {
	const t = xp(e);
	return wp(e)(t.map(hv))
}
const It = {
		test: uv,
		parse: xp,
		createTransformer: wp,
		getAnimatableNone: pv
	},
	mv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function gv(e) {
	const [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	const [r] = n.match(Fa) || [];
	if (!r) return e;
	const i = n.replace(r, "");
	let o = mv.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const yv = /\b([a-z-]*)\(.*?\)/gu,
	El = {
		...It,
		getAnimatableNone: e => {
			const t = e.match(yv);
			return t ? t.map(gv).join(" ") : e
		}
	},
	vv = {
		...Yh,
		color: fe,
		backgroundColor: fe,
		outlineColor: fe,
		fill: fe,
		stroke: fe,
		borderColor: fe,
		borderTopColor: fe,
		borderRightColor: fe,
		borderBottomColor: fe,
		borderLeftColor: fe,
		filter: El,
		WebkitFilter: El
	},
	Qa = e => vv[e];

function Sp(e, t) {
	let n = Qa(e);
	return n !== El && (n = It), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const xv = new Set(["auto", "none", "0"]);

function wv(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i;) {
		const o = e[r];
		typeof o == "string" && !xv.has(o) && Wr(o).values.length && (i = e[r]), r++
	}
	if (i && n)
		for (const o of t) e[o] = Sp(n, i)
}
class kp extends Ka {
	constructor(t, n, r, i) {
		super(t, n, r, i, i == null ? void 0 : i.owner, !0)
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			element: n,
			name: r
		} = this;
		if (!n.current) return;
		super.readKeyframes();
		for (let a = 0; a < t.length; a++) {
			let u = t[a];
			if (typeof u == "string" && (u = u.trim(), Oa(u))) {
				const c = fp(u, n.current);
				c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u)
			}
		}
		if (this.resolveNoneKeyframes(), !tv.has(r) || t.length !== 2) return;
		const [i, o] = t, s = Ec(i), l = Ec(o);
		if (s !== l)
			if (Pc(s) && Pc(l))
				for (let a = 0; a < t.length; a++) {
					const u = t[a];
					typeof u == "string" && (t[a] = parseFloat(u))
				} else this.needsMeasurement = !0
	}
	resolveNoneKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n
		} = this, r = [];
		for (let i = 0; i < t.length; i++) qy(t[i]) && r.push(i);
		r.length && wv(t, r, n)
	}
	measureInitialState() {
		const {
			element: t,
			unresolvedKeyframes: n,
			name: r
		} = this;
		if (!t.current) return;
		r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Qn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1)
	}
	measureEndState() {
		var t;
		const {
			element: n,
			name: r,
			unresolvedKeyframes: i
		} = this;
		if (!n.current) return;
		const o = n.getValue(r);
		o && o.jump(this.measuredOrigin, !1);
		const s = i.length - 1,
			l = i[s];
		i[s] = Qn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
			n.getValue(a).set(u)
		}), this.resolveNoneKeyframes()
	}
}

function Pp(e) {
	let t;
	return () => (t === void 0 && (t = e()), t)
}
const Vc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (It.test(e) || e === "0") && !e.startsWith("url("));

function Sv(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++)
		if (e[n] !== t) return !0
}

function kv(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	const o = e[e.length - 1],
		s = Vc(i, t),
		l = Vc(o, t);
	return !s || !l ? !1 : Sv(e) || n === "spring" && r
}
class Tp {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = "keyframes",
		repeat: i = 0,
		repeatDelay: o = 0,
		repeatType: s = "loop",
		...l
	}) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
			autoplay: t,
			delay: n,
			type: r,
			repeat: i,
			repeatDelay: o,
			repeatType: s,
			...l
		}, this.updateFinishedPromise()
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && sv(), this._resolved
	}
	onKeyframesResolved(t, n) {
		this.hasAttemptedResolve = !0;
		const {
			name: r,
			type: i,
			velocity: o,
			delay: s,
			onComplete: l,
			onUpdate: a,
			isGenerator: u
		} = this.options;
		if (!u && !kv(t, r, i, o))
			if (s) this.options.duration = 0;
			else {
				a == null || a(Bo(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
				return
			} const c = this.initPlayback(t, n);
		c !== !1 && (this._resolved = {
			keyframes: t,
			finalKeyframe: n,
			...c
		}, this.onPostResolved())
	}
	onPostResolved() {}
	then(t, n) {
		return this.currentFinishedPromise.then(t, n)
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise(t => {
			this.resolveFinishedPromise = t
		})
	}
}

function Cp(e, t) {
	return t ? e * (1e3 / t) : 0
}
const Pv = 5;

function Ep(e, t, n) {
	const r = Math.max(t - Pv, 0);
	return Cp(n - e(r), t - r)
}
const vs = .001,
	Tv = .01,
	Cv = 10,
	Ev = .05,
	Mv = 1;

function Vv({
	duration: e = 800,
	bounce: t = .25,
	velocity: n = 0,
	mass: r = 1
}) {
	let i, o, s = 1 - t;
	s = zt(Ev, Mv, s), e = zt(Tv, Cv, at(e)), s < 1 ? (i = u => {
		const c = u * s,
			f = c * e,
			d = c - n,
			g = Ml(u, s),
			y = Math.exp(-f);
		return vs - d / g * y
	}, o = u => {
		const f = u * s * e,
			d = f * n + n,
			g = Math.pow(s, 2) * Math.pow(u, 2) * e,
			y = Math.exp(-f),
			v = Ml(Math.pow(u, 2), s);
		return (-i(u) + vs > 0 ? -1 : 1) * ((d - g) * y) / v
	}) : (i = u => {
		const c = Math.exp(-u * e),
			f = (u - n) * e + 1;
		return -vs + c * f
	}, o = u => {
		const c = Math.exp(-u * e),
			f = (n - u) * (e * e);
		return c * f
	});
	const l = 5 / e,
		a = Av(i, o, l);
	if (e = _t(e), isNaN(a)) return {
		stiffness: 100,
		damping: 10,
		duration: e
	}; {
		const u = Math.pow(a, 2) * r;
		return {
			stiffness: u,
			damping: s * 2 * Math.sqrt(r * u),
			duration: e
		}
	}
}
const Lv = 12;

function Av(e, t, n) {
	let r = n;
	for (let i = 1; i < Lv; i++) r = r - e(r) / t(r);
	return r
}

function Ml(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const Rv = ["duration", "bounce"],
	Dv = ["stiffness", "damping", "mass"];

function Lc(e, t) {
	return t.some(n => e[n] !== void 0)
}

function Nv(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Lc(e, Dv) && Lc(e, Rv)) {
		const n = Vv(e);
		t = {
			...t,
			...n,
			mass: 1
		}, t.isResolvedFromDuration = !0
	}
	return t
}

function Mp({
	keyframes: e,
	restDelta: t,
	restSpeed: n,
	...r
}) {
	const i = e[0],
		o = e[e.length - 1],
		s = {
			done: !1,
			value: i
		},
		{
			stiffness: l,
			damping: a,
			mass: u,
			duration: c,
			velocity: f,
			isResolvedFromDuration: d
		} = Nv({
			...r,
			velocity: -at(r.velocity || 0)
		}),
		g = f || 0,
		y = a / (2 * Math.sqrt(l * u)),
		v = o - i,
		P = at(Math.sqrt(l / u)),
		m = Math.abs(v) < 5;
	n || (n = m ? .01 : 2), t || (t = m ? .005 : .5);
	let h;
	if (y < 1) {
		const p = Ml(P, y);
		h = x => {
			const w = Math.exp(-y * P * x);
			return o - w * ((g + y * P * v) / p * Math.sin(p * x) + v * Math.cos(p * x))
		}
	} else if (y === 1) h = p => o - Math.exp(-P * p) * (v + (g + P * v) * p);
	else {
		const p = P * Math.sqrt(y * y - 1);
		h = x => {
			const w = Math.exp(-y * P * x),
				T = Math.min(p * x, 300);
			return o - w * ((g + y * P * v) * Math.sinh(T) + p * v * Math.cosh(T)) / p
		}
	}
	return {
		calculatedDuration: d && c || null,
		next: p => {
			const x = h(p);
			if (d) s.done = p >= c;
			else {
				let w = g;
				p !== 0 && (y < 1 ? w = Ep(h, p, x) : w = 0);
				const T = Math.abs(w) <= n,
					M = Math.abs(o - x) <= t;
				s.done = T && M
			}
			return s.value = s.done ? o : x, s
		}
	}
}

function Ac({
	keyframes: e,
	velocity: t = 0,
	power: n = .8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: s,
	min: l,
	max: a,
	restDelta: u = .5,
	restSpeed: c
}) {
	const f = e[0],
		d = {
			done: !1,
			value: f
		},
		g = k => l !== void 0 && k < l || a !== void 0 && k > a,
		y = k => l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a;
	let v = n * t;
	const P = f + v,
		m = s === void 0 ? P : s(P);
	m !== P && (v = m - f);
	const h = k => -v * Math.exp(-k / r),
		p = k => m + h(k),
		x = k => {
			const j = h(k),
				A = p(k);
			d.done = Math.abs(j) <= u, d.value = d.done ? m : A
		};
	let w, T;
	const M = k => {
		g(d.value) && (w = k, T = Mp({
			keyframes: [d.value, y(d.value)],
			velocity: Ep(p, k, d.value),
			damping: i,
			stiffness: o,
			restDelta: u,
			restSpeed: c
		}))
	};
	return M(0), {
		calculatedDuration: null,
		next: k => {
			let j = !1;
			return !T && w === void 0 && (j = !0, x(k), M(k)), w !== void 0 && k >= w ? T.next(k - w) : (!j && x(k), d)
		}
	}
}
const Vp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	_v = 1e-7,
	jv = 12;

function Ov(e, t, n, r, i) {
	let o, s, l = 0;
	do s = t + (n - t) / 2, o = Vp(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > _v && ++l < jv);
	return s
}

function ti(e, t, n, r) {
	if (e === t && n === r) return pe;
	const i = o => Ov(o, 0, 1, e, n);
	return o => o === 0 || o === 1 ? o : Vp(i(o), t, r)
}
const Fv = ti(.42, 0, 1, 1),
	zv = ti(0, 0, .58, 1),
	Lp = ti(.42, 0, .58, 1),
	Iv = e => Array.isArray(e) && typeof e[0] != "number",
	Ap = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	Rp = e => t => 1 - e(1 - t),
	Ya = e => 1 - Math.sin(Math.acos(e)),
	Dp = Rp(Ya),
	Bv = Ap(Ya),
	Np = ti(.33, 1.53, .69, .99),
	Xa = Rp(Np),
	Uv = Ap(Xa),
	$v = e => (e *= 2) < 1 ? .5 * Xa(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
	Rc = {
		linear: pe,
		easeIn: Fv,
		easeInOut: Lp,
		easeOut: zv,
		circIn: Ya,
		circInOut: Bv,
		circOut: Dp,
		backIn: Xa,
		backInOut: Uv,
		backOut: Np,
		anticipate: $v
	},
	Dc = e => {
		if (Array.isArray(e)) {
			wl(e.length === 4);
			const [t, n, r, i] = e;
			return ti(t, n, r, i)
		} else if (typeof e == "string") return wl(Rc[e] !== void 0), Rc[e];
		return e
	},
	Kr = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r
	},
	W = (e, t, n) => e + (t - e) * n;

function xs(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Hv({
	hue: e,
	saturation: t,
	lightness: n,
	alpha: r
}) {
	e /= 360, t /= 100, n /= 100;
	let i = 0,
		o = 0,
		s = 0;
	if (!t) i = o = s = n;
	else {
		const l = n < .5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l;
		i = xs(a, l, e + 1 / 3), o = xs(a, l, e), s = xs(a, l, e - 1 / 3)
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(s * 255),
		alpha: r
	}
}

function fo(e, t) {
	return n => n > 0 ? t : e
}
const ws = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i)
	},
	Wv = [Cl, nn, An],
	Kv = e => Wv.find(t => t.test(e));

function Nc(e) {
	const t = Kv(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === An && (n = Hv(n)), n
}
const _c = (e, t) => {
		const n = Nc(e),
			r = Nc(t);
		if (!n || !r) return fo(e, t);
		const i = {
			...n
		};
		return o => (i.red = ws(n.red, r.red, o), i.green = ws(n.green, r.green, o), i.blue = ws(n.blue, r.blue, o), i.alpha = W(n.alpha, r.alpha, o), nn.transform(i))
	},
	Vl = new Set(["none", "hidden"]);

function Gv(e, t) {
	return Vl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function Qv(e, t) {
	return n => W(e, t, n)
}

function Za(e) {
	return typeof e == "number" ? Qv : typeof e == "string" ? Oa(e) ? fo : fe.test(e) ? _c : Zv : Array.isArray(e) ? _p : typeof e == "object" ? fe.test(e) ? _c : Yv : fo
}

function _p(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((o, s) => Za(o)(o, t[s]));
	return o => {
		for (let s = 0; s < r; s++) n[s] = i[s](o);
		return n
	}
}

function Yv(e, t) {
	const n = {
			...e,
			...t
		},
		r = {};
	for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Za(e[i])(e[i], t[i]));
	return i => {
		for (const o in r) n[o] = r[o](i);
		return n
	}
}

function Xv(e, t) {
	var n;
	const r = [],
		i = {
			color: 0,
			var: 0,
			number: 0
		};
	for (let o = 0; o < t.values.length; o++) {
		const s = t.types[o],
			l = e.indexes[s][i[s]],
			a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
		r[o] = a, i[s]++
	}
	return r
}
const Zv = (e, t) => {
	const n = It.createTransformer(t),
		r = Wr(e),
		i = Wr(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Vl.has(e) && !i.values.length || Vl.has(t) && !r.values.length ? Gv(e, t) : lt(_p(Xv(r, i), i.values), n) : fo(e, t)
};

function jp(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? W(e, t, n) : Za(e)(e, t)
}

function Jv(e, t, n) {
	const r = [],
		i = n || jp,
		o = e.length - 1;
	for (let s = 0; s < o; s++) {
		let l = i(e[s], e[s + 1]);
		if (t) {
			const a = Array.isArray(t) ? t[s] || pe : t;
			l = lt(a, l)
		}
		r.push(l)
	}
	return r
}

function qv(e, t, {
	clamp: n = !0,
	ease: r,
	mixer: i
} = {}) {
	const o = e.length;
	if (wl(o === t.length), o === 1) return () => t[0];
	if (o === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
	const s = Jv(t, r, i),
		l = s.length,
		a = u => {
			let c = 0;
			if (l > 1)
				for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = Kr(e[c], e[c + 1], u);
			return s[c](f)
		};
	return n ? u => a(zt(e[0], e[o - 1], u)) : a
}

function bv(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = Kr(0, t, r);
		e.push(W(n, 1, i))
	}
}

function e1(e) {
	const t = [0];
	return bv(t, e.length - 1), t
}

function t1(e, t) {
	return e.map(n => n * t)
}

function n1(e, t) {
	return e.map(() => t || Lp).splice(0, e.length - 1)
}

function ho({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = "easeInOut"
}) {
	const i = Iv(r) ? r.map(Dc) : Dc(r),
		o = {
			done: !1,
			value: t[0]
		},
		s = t1(n && n.length === t.length ? n : e1(t), e),
		l = qv(s, t, {
			ease: Array.isArray(i) ? i : n1(t, i)
		});
	return {
		calculatedDuration: e,
		next: a => (o.value = l(a), o.done = a >= e, o)
	}
}
const jc = 2e4;

function r1(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < jc;) t += n, r = e.next(t);
	return t >= jc ? 1 / 0 : t
}
const i1 = e => {
		const t = ({
			timestamp: n
		}) => e(n);
		return {
			start: () => F.update(t, !0),
			stop: () => ht(t),
			now: () => se.isProcessing ? se.timestamp : jt.now()
		}
	},
	o1 = {
		decay: Ac,
		inertia: Ac,
		tween: ho,
		keyframes: ho,
		spring: Mp
	},
	s1 = e => e / 100;
class Ja extends Tp {
	constructor({
		KeyframeResolver: t = Ka,
		...n
	}) {
		super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			const {
				onStop: l
			} = this.options;
			l && l()
		};
		const {
			name: r,
			motionValue: i,
			keyframes: o
		} = this.options, s = (l, a) => this.onKeyframesResolved(l, a);
		r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, s, r, i) : this.resolver = new t(o, s, r, i), this.resolver.scheduleResolve()
	}
	initPlayback(t) {
		const {
			type: n = "keyframes",
			repeat: r = 0,
			repeatDelay: i = 0,
			repeatType: o,
			velocity: s = 0
		} = this.options, l = o1[n] || ho;
		let a, u;
		l !== ho && typeof t[0] != "number" && (a = lt(s1, jp(t[0], t[1])), t = [0, 100]);
		const c = l({
			...this.options,
			keyframes: t
		});
		o === "mirror" && (u = l({
			...this.options,
			keyframes: [...t].reverse(),
			velocity: -s
		})), c.calculatedDuration === null && (c.calculatedDuration = r1(c));
		const {
			calculatedDuration: f
		} = c, d = f + i, g = d * (r + 1) - i;
		return {
			generator: c,
			mirroredGenerator: u,
			mapPercentToKeyframes: a,
			calculatedDuration: f,
			resolvedDuration: d,
			totalDuration: g
		}
	}
	onPostResolved() {
		const {
			autoplay: t = !0
		} = this.options;
		this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
	}
	tick(t, n = !1) {
		const {
			resolved: r
		} = this;
		if (!r) {
			const {
				keyframes: k
			} = this.options;
			return {
				done: !0,
				value: k[k.length - 1]
			}
		}
		const {
			finalKeyframe: i,
			generator: o,
			mirroredGenerator: s,
			mapPercentToKeyframes: l,
			keyframes: a,
			calculatedDuration: u,
			totalDuration: c,
			resolvedDuration: f
		} = r;
		if (this.startTime === null) return o.next(0);
		const {
			delay: d,
			repeat: g,
			repeatType: y,
			repeatDelay: v,
			onUpdate: P
		} = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
		const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
			h = this.speed >= 0 ? m < 0 : m > c;
		this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
		let p = this.currentTime,
			x = o;
		if (g) {
			const k = Math.min(this.currentTime, c) / f;
			let j = Math.floor(k),
				A = k % 1;
			!A && k >= 1 && (A = 1), A === 1 && j--, j = Math.min(j, g + 1), !!(j % 2) && (y === "reverse" ? (A = 1 - A, v && (A -= v / f)) : y === "mirror" && (x = s)), p = zt(0, 1, A) * f
		}
		const w = h ? {
			done: !1,
			value: a[0]
		} : x.next(p);
		l && (w.value = l(w.value));
		let {
			done: T
		} = w;
		!h && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
		const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
		return M && i !== void 0 && (w.value = Bo(a, this.options, i)), P && P(w.value), M && this.finish(), w
	}
	get duration() {
		const {
			resolved: t
		} = this;
		return t ? at(t.calculatedDuration) : 0
	}
	get time() {
		return at(this.currentTime)
	}
	set time(t) {
		t = _t(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(t) {
		const n = this.playbackSpeed !== t;
		this.playbackSpeed = t, n && (this.time = at(this.currentTime))
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return
		}
		if (this.isStopped) return;
		const {
			driver: t = i1,
			onPlay: n
		} = this.options;
		this.driver || (this.driver = t(i => this.tick(i))), n && n();
		const r = this.driver.now();
		this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
	}
	pause() {
		var t;
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return
		}
		this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
	}
	complete() {
		this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
	}
	finish() {
		this.teardown(), this.state = "finished";
		const {
			onComplete: t
		} = this.options;
		t && t()
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
	}
	stopDriver() {
		this.driver && (this.driver.stop(), this.driver = void 0)
	}
	sample(t) {
		return this.startTime = 0, this.tick(t, !0)
	}
}
const Op = e => Array.isArray(e) && typeof e[0] == "number";

function Fp(e) {
	return !!(!e || typeof e == "string" && e in qa || Op(e) || Array.isArray(e) && e.every(Fp))
}
const dr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	qa = {
		linear: "linear",
		ease: "ease",
		easeIn: "ease-in",
		easeOut: "ease-out",
		easeInOut: "ease-in-out",
		circIn: dr([0, .65, .55, 1]),
		circOut: dr([.55, 0, 1, .45]),
		backIn: dr([.31, .01, .66, -.59]),
		backOut: dr([.33, 1.53, .69, .99])
	};

function l1(e) {
	return zp(e) || qa.easeOut
}

function zp(e) {
	if (e) return Op(e) ? dr(e) : Array.isArray(e) ? e.map(l1) : qa[e]
}

function a1(e, t, n, {
	delay: r = 0,
	duration: i = 300,
	repeat: o = 0,
	repeatType: s = "loop",
	ease: l,
	times: a
} = {}) {
	const u = {
		[t]: n
	};
	a && (u.offset = a);
	const c = zp(l);
	return Array.isArray(c) && (u.easing = c), e.animate(u, {
		delay: r,
		duration: i,
		easing: Array.isArray(c) ? "linear" : c,
		fill: "both",
		iterations: o + 1,
		direction: s === "reverse" ? "alternate" : "normal"
	})
}
const u1 = Pp(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
	c1 = new Set(["opacity", "clipPath", "filter", "transform"]),
	po = 10,
	f1 = 2e4;

function d1(e) {
	return e.type === "spring" || e.name === "backgroundColor" || !Fp(e.ease)
}

function h1(e, t) {
	const n = new Ja({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	});
	let r = {
		done: !1,
		value: e[0]
	};
	const i = [];
	let o = 0;
	for (; !r.done && o < f1;) r = n.sample(o), i.push(r.value), o += po;
	return {
		times: void 0,
		keyframes: i,
		duration: o - po,
		ease: "linear"
	}
}
class Oc extends Tp {
	constructor(t) {
		super(t);
		const {
			name: n,
			motionValue: r,
			keyframes: i
		} = this.options;
		this.resolver = new kp(i, (o, s) => this.onKeyframesResolved(o, s), n, r), this.resolver.scheduleResolve()
	}
	initPlayback(t, n) {
		var r;
		let {
			duration: i = 300,
			times: o,
			ease: s,
			type: l,
			motionValue: a,
			name: u
		} = this.options;
		if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
		if (d1(this.options)) {
			const {
				onComplete: f,
				onUpdate: d,
				motionValue: g,
				...y
			} = this.options, v = h1(t, y);
			t = v.keyframes, t.length === 1 && (t[1] = t[0]), i = v.duration, o = v.times, s = v.ease, l = "keyframes"
		}
		const c = a1(a.owner.current, u, t, {
			...this.options,
			duration: i,
			times: o,
			ease: s
		});
		return c.startTime = jt.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
			const {
				onComplete: f
			} = this.options;
			a.set(Bo(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
		}, {
			animation: c,
			duration: i,
			times: o,
			type: l,
			ease: s,
			keyframes: t
		}
	}
	get duration() {
		const {
			resolved: t
		} = this;
		if (!t) return 0;
		const {
			duration: n
		} = t;
		return at(n)
	}
	get time() {
		const {
			resolved: t
		} = this;
		if (!t) return 0;
		const {
			animation: n
		} = t;
		return at(n.currentTime || 0)
	}
	set time(t) {
		const {
			resolved: n
		} = this;
		if (!n) return;
		const {
			animation: r
		} = n;
		r.currentTime = _t(t)
	}
	get speed() {
		const {
			resolved: t
		} = this;
		if (!t) return 1;
		const {
			animation: n
		} = t;
		return n.playbackRate
	}
	set speed(t) {
		const {
			resolved: n
		} = this;
		if (!n) return;
		const {
			animation: r
		} = n;
		r.playbackRate = t
	}
	get state() {
		const {
			resolved: t
		} = this;
		if (!t) return "idle";
		const {
			animation: n
		} = t;
		return n.playState
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t;
		else {
			const {
				resolved: n
			} = this;
			if (!n) return pe;
			const {
				animation: r
			} = n;
			r.timeline = t, r.onfinish = null
		}
		return pe
	}
	play() {
		if (this.isStopped) return;
		const {
			resolved: t
		} = this;
		if (!t) return;
		const {
			animation: n
		} = t;
		n.playState === "finished" && this.updateFinishedPromise(), n.play()
	}
	pause() {
		const {
			resolved: t
		} = this;
		if (!t) return;
		const {
			animation: n
		} = t;
		n.pause()
	}
	stop() {
		if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
		const {
			resolved: t
		} = this;
		if (!t) return;
		const {
			animation: n,
			keyframes: r,
			duration: i,
			type: o,
			ease: s,
			times: l
		} = t;
		if (!(n.playState === "idle" || n.playState === "finished")) {
			if (this.time) {
				const {
					motionValue: a,
					onUpdate: u,
					onComplete: c,
					...f
				} = this.options, d = new Ja({
					...f,
					keyframes: r,
					duration: i,
					type: o,
					ease: s,
					times: l,
					isGenerator: !0
				}), g = _t(this.time);
				a.setWithVelocity(d.sample(g - po).value, d.sample(g).value, po)
			}
			this.cancel()
		}
	}
	complete() {
		const {
			resolved: t
		} = this;
		t && t.animation.finish()
	}
	cancel() {
		const {
			resolved: t
		} = this;
		t && t.animation.cancel()
	}
	static supports(t) {
		const {
			motionValue: n,
			name: r,
			repeatDelay: i,
			repeatType: o,
			damping: s,
			type: l
		} = t;
		return u1() && r && c1.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia"
	}
}

function p1(e, t) {
	let n;
	const r = () => {
		const {
			currentTime: i
		} = t, s = (i === null ? 0 : i.value) / 100;
		n !== s && e(s), n = s
	};
	return F.update(r, !0), () => ht(r)
}
const m1 = Pp(() => window.ScrollTimeline !== void 0);
class g1 {
	constructor(t) {
		this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n)
	}
	getAll(t) {
		return this.animations[0][t]
	}
	setAll(t, n) {
		for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
	}
	attachTimeline(t) {
		const n = this.animations.map(r => {
			if (m1() && r.attachTimeline) r.attachTimeline(t);
			else return r.pause(), p1(i => {
				r.time = r.duration * i
			}, t)
		});
		return () => {
			n.forEach((r, i) => {
				r && r(), this.animations[i].stop()
			})
		}
	}
	get time() {
		return this.getAll("time")
	}
	set time(t) {
		this.setAll("time", t)
	}
	get speed() {
		return this.getAll("speed")
	}
	set speed(t) {
		this.setAll("speed", t)
	}
	get duration() {
		let t = 0;
		for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
		return t
	}
	runAll(t) {
		this.animations.forEach(n => n[t]())
	}
	play() {
		this.runAll("play")
	}
	pause() {
		this.runAll("pause")
	}
	cancel() {
		this.runAll("cancel")
	}
	complete() {
		this.runAll("complete")
	}
}
const ba = (e, t, n, r = {}, i, o) => s => {
	const l = Wa(r, e) || {},
		a = l.delay || r.delay || 0;
	let {
		elapsed: u = 0
	} = r;
	u = u - _t(a);
	let c = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...l,
		delay: -u,
		onUpdate: d => {
			t.set(d), l.onUpdate && l.onUpdate(d)
		},
		onComplete: () => {
			s(), l.onComplete && l.onComplete()
		},
		name: e,
		motionValue: t,
		element: o ? void 0 : i
	};
	Xy(l) || (c = {
		...c,
		...Yy(e, c)
	}), c.duration && (c.duration = _t(c.duration)), c.repeatDelay && (c.repeatDelay = _t(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
	let f = !1;
	if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
		const d = Bo(c.keyframes, l);
		if (d !== void 0) return F.update(() => {
			c.onUpdate(d), c.onComplete()
		}), new g1([])
	}
	return !o && Oc.supports(c) ? new Oc(c) : new Ja(c)
};

function mo(e) {
	return !!(he(e) && e.add)
}

function eu(e, t) {
	e.indexOf(t) === -1 && e.push(t)
}

function tu(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1)
}
class nu {
	constructor() {
		this.subscriptions = []
	}
	add(t) {
		return eu(this.subscriptions, t), () => tu(this.subscriptions, t)
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let o = 0; o < i; o++) {
					const s = this.subscriptions[o];
					s && s(t, n, r)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const Fc = 30,
	y1 = e => !isNaN(parseFloat(e));
class v1 {
	constructor(t, n = {}) {
		this.version = "11.2.12", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
			const o = jt.now();
			this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
		}, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
	}
	setCurrent(t) {
		this.current = t, this.updatedAt = jt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = y1(this.current))
	}
	setPrevFrameValue(t = this.current) {
		this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
	}
	onChange(t) {
		return this.on("change", t)
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new nu);
		const r = this.events[t].add(n);
		return t === "change" ? () => {
			r(), F.read(() => {
				this.events.change.getSize() || this.stop()
			})
		} : r
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear()
	}
	attach(t, n) {
		this.passiveEffect = t, this.stopPassiveEffect = n
	}
	set(t, n = !0) {
		!n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
	}
	setWithVelocity(t, n, r) {
		this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
	}
	jump(t, n = !0) {
		this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const t = jt.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Fc) return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fc);
		return Cp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
	}
	start(t) {
		return this.stop(), new Promise(n => {
			this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
		})
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
	}
}

function Gr(e, t) {
	return new v1(e, t)
}

function x1(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gr(n))
}

function w1(e, t) {
	const n = Io(e, t);
	let {
		transitionEnd: r = {},
		transition: i = {},
		...o
	} = n || {};
	o = {
		...o,
		...r
	};
	for (const s in o) {
		const l = Cy(o[s]);
		x1(e, s, l)
	}
}

function Ip(e) {
	return e.getProps()[Ih]
}

function S1({
	protectedKeys: e,
	needsAnimating: t
}, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r
}

function Bp(e, t, {
	delay: n = 0,
	transitionOverride: r,
	type: i
} = {}) {
	var o;
	let {
		transition: s = e.getDefaultTransition(),
		transitionEnd: l,
		...a
	} = t;
	const u = e.getValue("willChange");
	r && (s = r);
	const c = [],
		f = i && e.animationState && e.animationState.getState()[i];
	for (const d in a) {
		const g = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null),
			y = a[d];
		if (y === void 0 || f && S1(f, d)) continue;
		const v = {
			delay: n,
			elapsed: 0,
			...Wa(s || {}, d)
		};
		let P = !1;
		if (window.HandoffAppearAnimations) {
			const h = Ip(e);
			if (h) {
				const p = window.HandoffAppearAnimations(h, d, g, F);
				p !== null && (v.elapsed = p, P = !0)
			}
		}
		g.start(ba(d, g, y, e.shouldReduceMotion && pn.has(d) ? {
			type: !1
		} : v, e, P));
		const m = g.animation;
		m && (mo(u) && (u.add(d), m.then(() => u.remove(d))), c.push(m))
	}
	return l && Promise.all(c).then(() => {
		F.update(() => {
			l && w1(e, l)
		})
	}), c
}

function Ll(e, t, n = {}) {
	var r;
	const i = Io(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
	let {
		transition: o = e.getDefaultTransition() || {}
	} = i || {};
	n.transitionOverride && (o = n.transitionOverride);
	const s = i ? () => Promise.all(Bp(e, i, n)) : () => Promise.resolve(),
		l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
			const {
				delayChildren: c = 0,
				staggerChildren: f,
				staggerDirection: d
			} = o;
			return k1(e, t, c + u, f, d, n)
		} : () => Promise.resolve(),
		{
			when: a
		} = o;
	if (a) {
		const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
		return u().then(() => c())
	} else return Promise.all([s(), l(n.delay)])
}

function k1(e, t, n = 0, r = 0, i = 1, o) {
	const s = [],
		l = (e.variantChildren.size - 1) * r,
		a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
	return Array.from(e.variantChildren).sort(P1).forEach((u, c) => {
		u.notify("AnimationStart", t), s.push(Ll(u, t, {
			...o,
			delay: n + a(c)
		}).then(() => u.notify("AnimationComplete", t)))
	}), Promise.all(s)
}

function P1(e, t) {
	return e.sortNodePosition(t)
}

function T1(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map(o => Ll(e, o, n));
		r = Promise.all(i)
	} else if (typeof t == "string") r = Ll(e, t, n);
	else {
		const i = typeof t == "function" ? Io(e, t, n.custom) : t;
		r = Promise.all(Bp(e, i, n))
	}
	return r.then(() => {
		F.postRender(() => {
			e.notify("AnimationComplete", t)
		})
	})
}
const C1 = [...Na].reverse(),
	E1 = Na.length;

function M1(e) {
	return t => Promise.all(t.map(({
		animation: n,
		options: r
	}) => T1(e, n, r)))
}

function V1(e) {
	let t = M1(e),
		n = zc(),
		r = !0;
	const i = a => (u, c) => {
		var f;
		const d = Io(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
		if (d) {
			const {
				transition: g,
				transitionEnd: y,
				...v
			} = d;
			u = {
				...u,
				...v,
				...y
			}
		}
		return u
	};

	function o(a) {
		t = a(e)
	}

	function s(a) {
		const u = e.getProps(),
			c = e.getVariantContext(!0) || {},
			f = [],
			d = new Set;
		let g = {},
			y = 1 / 0;
		for (let P = 0; P < E1; P++) {
			const m = C1[P],
				h = n[m],
				p = u[m] !== void 0 ? u[m] : c[m],
				x = Hr(p),
				w = m === a ? h.isActive : null;
			w === !1 && (y = P);
			let T = p === c[m] && p !== u[m] && x;
			if (T && r && e.manuallyAnimateOnMount && (T = !1), h.protectedKeys = {
					...g
				}, !h.isActive && w === null || !p && !h.prevProp || Oo(p) || typeof p == "boolean") continue;
			let k = L1(h.prevProp, p) || m === a && h.isActive && !T && x || P > y && x,
				j = !1;
			const A = Array.isArray(p) ? p : [p];
			let ee = A.reduce(i(m), {});
			w === !1 && (ee = {});
			const {
				prevResolvedValues: mt = {}
			} = h, Wt = {
				...mt,
				...ee
			}, qn = ie => {
				k = !0, d.has(ie) && (j = !0, d.delete(ie)), h.needsAnimating[ie] = !0;
				const Ce = e.getValue(ie);
				Ce && (Ce.liveStyle = !1)
			};
			for (const ie in Wt) {
				const Ce = ee[ie],
					Kt = mt[ie];
				if (g.hasOwnProperty(ie)) continue;
				let E = !1;
				Sl(Ce) && Sl(Kt) ? E = !ap(Ce, Kt) : E = Ce !== Kt, E ? Ce != null ? qn(ie) : d.add(ie) : Ce !== void 0 && d.has(ie) ? qn(ie) : h.protectedKeys[ie] = !0
			}
			h.prevProp = p, h.prevResolvedValues = ee, h.isActive && (g = {
				...g,
				...ee
			}), r && e.blockInitialAnimation && (k = !1), k && (!T || j) && f.push(...A.map(ie => ({
				animation: ie,
				options: {
					type: m
				}
			})))
		}
		if (d.size) {
			const P = {};
			d.forEach(m => {
				const h = e.getBaseTarget(m),
					p = e.getValue(m);
				p && (p.liveStyle = !0), P[m] = h ? ? null
			}), f.push({
				animation: P
			})
		}
		let v = !!f.length;
		return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve()
	}

	function l(a, u) {
		var c;
		if (n[a].isActive === u) return Promise.resolve();
		(c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
			var g;
			return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
		}), n[a].isActive = u;
		const f = s(a);
		for (const d in n) n[d].protectedKeys = {};
		return f
	}
	return {
		animateChanges: s,
		setActive: l,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = zc(), r = !0
		}
	}
}

function L1(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !ap(t, e) : !1
}

function Yt(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	}
}

function zc() {
	return {
		animate: Yt(!0),
		whileInView: Yt(),
		whileHover: Yt(),
		whileTap: Yt(),
		whileDrag: Yt(),
		whileFocus: Yt(),
		exit: Yt()
	}
}
class A1 extends Ht {
	constructor(t) {
		super(t), t.animationState || (t.animationState = V1(t))
	}
	updateAnimationControlsSubscription() {
		const {
			animate: t
		} = this.node.getProps();
		Oo(t) && (this.unmountControls = t.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const {
			animate: t
		} = this.node.getProps(), {
			animate: n
		} = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var t;
		this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
	}
}
let R1 = 0;
class D1 extends Ht {
	constructor() {
		super(...arguments), this.id = R1++
	}
	update() {
		if (!this.node.presenceContext) return;
		const {
			isPresent: t,
			onExitComplete: n
		} = this.node.presenceContext, {
			isPresent: r
		} = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		const i = this.node.animationState.setActive("exit", !t);
		n && !t && i.then(() => n(this.id))
	}
	mount() {
		const {
			register: t
		} = this.node.presenceContext || {};
		t && (this.unmount = t(this.id))
	}
	unmount() {}
}
const N1 = {
		animation: {
			Feature: A1
		},
		exit: {
			Feature: D1
		}
	},
	Ic = (e, t) => Math.abs(e - t);

function _1(e, t) {
	const n = Ic(e.x, t.x),
		r = Ic(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2)
}
class Up {
	constructor(t, n, {
		transformPagePoint: r,
		contextWindow: i,
		dragSnapToOrigin: o = !1
	} = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const f = ks(this.lastMoveEventInfo, this.history),
					d = this.startEvent !== null,
					g = _1(f.offset, {
						x: 0,
						y: 0
					}) >= 3;
				if (!d && !g) return;
				const {
					point: y
				} = f, {
					timestamp: v
				} = se;
				this.history.push({
					...y,
					timestamp: v
				});
				const {
					onStart: P,
					onMove: m
				} = this.handlers;
				d || (P && P(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f)
			}, this.handlePointerMove = (f, d) => {
				this.lastMoveEvent = f, this.lastMoveEventInfo = Ss(d, this.transformPagePoint), F.update(this.updatePoint, !0)
			}, this.handlePointerUp = (f, d) => {
				this.end();
				const {
					onEnd: g,
					onSessionEnd: y,
					resumeAnimation: v
				} = this.handlers;
				if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const P = ks(f.type === "pointercancel" ? this.lastMoveEventInfo : Ss(d, this.transformPagePoint), this.history);
				this.startEvent && g && g(f, P), y && y(f, P)
			}, !rp(t)) return;
		this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
		const s = zo(t),
			l = Ss(s, this.transformPagePoint),
			{
				point: a
			} = l,
			{
				timestamp: u
			} = se;
		this.history = [{
			...a,
			timestamp: u
		}];
		const {
			onSessionStart: c
		} = n;
		c && c(t, ks(l, this.history)), this.removeListeners = lt(st(this.contextWindow, "pointermove", this.handlePointerMove), st(this.contextWindow, "pointerup", this.handlePointerUp), st(this.contextWindow, "pointercancel", this.handlePointerUp))
	}
	updateHandlers(t) {
		this.handlers = t
	}
	end() {
		this.removeListeners && this.removeListeners(), ht(this.updatePoint)
	}
}

function Ss(e, t) {
	return t ? {
		point: t(e.point)
	} : e
}

function Bc(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	}
}

function ks({
	point: e
}, t) {
	return {
		point: e,
		delta: Bc(e, $p(t)),
		offset: Bc(e, j1(t)),
		velocity: O1(t, .1)
	}
}

function j1(e) {
	return e[0]
}

function $p(e) {
	return e[e.length - 1]
}

function O1(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1,
		r = null;
	const i = $p(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > _t(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	const o = at(i.timestamp - r.timestamp);
	if (o === 0) return {
		x: 0,
		y: 0
	};
	const s = {
		x: (i.x - r.x) / o,
		y: (i.y - r.y) / o
	};
	return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function Ae(e) {
	return e.max - e.min
}

function Al(e, t = 0, n = .01) {
	return Math.abs(e - t) <= n
}

function Uc(e, t, n, r = .5) {
	e.origin = r, e.originPoint = W(t.min, t.max, e.origin), e.scale = Ae(n) / Ae(t), (Al(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = W(n.min, n.max, e.origin) - e.originPoint, (Al(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Tr(e, t, n, r) {
	Uc(e.x, t.x, n.x, r ? r.originX : void 0), Uc(e.y, t.y, n.y, r ? r.originY : void 0)
}

function $c(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + Ae(t)
}

function F1(e, t, n) {
	$c(e.x, t.x, n.x), $c(e.y, t.y, n.y)
}

function Hc(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + Ae(t)
}

function Cr(e, t, n) {
	Hc(e.x, t.x, n.x), Hc(e.y, t.y, n.y)
}

function z1(e, {
	min: t,
	max: n
}, r) {
	return t !== void 0 && e < t ? e = r ? W(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)), e
}

function Wc(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
	}
}

function I1(e, {
	top: t,
	left: n,
	bottom: r,
	right: i
}) {
	return {
		x: Wc(e.x, n, i),
		y: Wc(e.y, t, r)
	}
}

function Kc(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	}
}

function B1(e, t) {
	return {
		x: Kc(e.x, t.x),
		y: Kc(e.y, t.y)
	}
}

function U1(e, t) {
	let n = .5;
	const r = Ae(e),
		i = Ae(t);
	return i > r ? n = Kr(t.min, t.max - r, e.min) : r > i && (n = Kr(e.min, e.max - i, t.min)), zt(0, 1, n)
}

function $1(e, t) {
	const n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Rl = .35;

function H1(e = Rl) {
	return e === !1 ? e = 0 : e === !0 && (e = Rl), {
		x: Gc(e, "left", "right"),
		y: Gc(e, "top", "bottom")
	}
}

function Gc(e, t, n) {
	return {
		min: Qc(e, t),
		max: Qc(e, n)
	}
}

function Qc(e, t) {
	return typeof e == "number" ? e : e[t] || 0
}
const Yc = () => ({
		translate: 0,
		scale: 1,
		origin: 0,
		originPoint: 0
	}),
	Rn = () => ({
		x: Yc(),
		y: Yc()
	}),
	Xc = () => ({
		min: 0,
		max: 0
	}),
	X = () => ({
		x: Xc(),
		y: Xc()
	});

function _e(e) {
	return [e("x"), e("y")]
}

function Hp({
	top: e,
	left: t,
	right: n,
	bottom: r
}) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	}
}

function W1({
	x: e,
	y: t
}) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	}
}

function K1(e, t) {
	if (!t) return e;
	const n = t({
			x: e.left,
			y: e.top
		}),
		r = t({
			x: e.right,
			y: e.bottom
		});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	}
}

function Ps(e) {
	return e === void 0 || e === 1
}

function Dl({
	scale: e,
	scaleX: t,
	scaleY: n
}) {
	return !Ps(e) || !Ps(t) || !Ps(n)
}

function Jt(e) {
	return Dl(e) || Wp(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Wp(e) {
	return Zc(e.x) || Zc(e.y)
}

function Zc(e) {
	return e && e !== "0%"
}

function go(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i
}

function Jc(e, t, n, r, i) {
	return i !== void 0 && (e = go(e, i, r)), go(e, n, r) + t
}

function Nl(e, t = 0, n = 1, r, i) {
	e.min = Jc(e.min, t, n, r, i), e.max = Jc(e.max, t, n, r, i)
}

function Kp(e, {
	x: t,
	y: n
}) {
	Nl(e.x, t.translate, t.scale, t.originPoint), Nl(e.y, n.translate, n.scale, n.originPoint)
}

function G1(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let o, s;
	for (let l = 0; l < i; l++) {
		o = n[l], s = o.projectionDelta;
		const a = o.instance;
		a && a.style && a.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Dn(e, {
			x: -o.scroll.offset.x,
			y: -o.scroll.offset.y
		}), s && (t.x *= s.x.scale, t.y *= s.y.scale, Kp(e, s)), r && Jt(o.latestValues) && Dn(e, o.latestValues))
	}
	t.x = qc(t.x), t.y = qc(t.y)
}

function qc(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function wt(e, t) {
	e.min = e.min + t, e.max = e.max + t
}

function bc(e, t, [n, r, i]) {
	const o = t[i] !== void 0 ? t[i] : .5,
		s = W(e.min, e.max, o);
	Nl(e, t[n], t[r], s, t.scale)
}
const Q1 = ["x", "scaleX", "originX"],
	Y1 = ["y", "scaleY", "originY"];

function Dn(e, t) {
	bc(e.x, t, Q1), bc(e.y, t, Y1)
}

function Gp(e, t) {
	return Hp(K1(e.getBoundingClientRect(), t))
}

function X1(e, t, n) {
	const r = Gp(e, n),
		{
			scroll: i
		} = t;
	return i && (wt(r.x, i.offset.x), wt(r.y, i.offset.y)), r
}
const Qp = ({
		current: e
	}) => e ? e.ownerDocument.defaultView : null,
	Z1 = new WeakMap;
class J1 {
	constructor(t) {
		this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = X(), this.visualElement = t
	}
	start(t, {
		snapToCursor: n = !1
	} = {}) {
		const {
			presenceContext: r
		} = this.visualElement;
		if (r && r.isPresent === !1) return;
		const i = c => {
				const {
					dragSnapToOrigin: f
				} = this.getProps();
				f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zo(c, "page").point)
			},
			o = (c, f) => {
				const {
					drag: d,
					dragPropagation: g,
					onDragStart: y
				} = this.getProps();
				if (d && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = op(d), !this.openGlobalLock)) return;
				this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _e(P => {
					let m = this.getAxisMotionValue(P).get() || 0;
					if (be.test(m)) {
						const {
							projection: h
						} = this.visualElement;
						if (h && h.layout) {
							const p = h.layout.layoutBox[P];
							p && (m = Ae(p) * (parseFloat(m) / 100))
						}
					}
					this.originPoint[P] = m
				}), y && F.postRender(() => y(c, f));
				const {
					animationState: v
				} = this.visualElement;
				v && v.setActive("whileDrag", !0)
			},
			s = (c, f) => {
				const {
					dragPropagation: d,
					dragDirectionLock: g,
					onDirectionLock: y,
					onDrag: v
				} = this.getProps();
				if (!d && !this.openGlobalLock) return;
				const {
					offset: P
				} = f;
				if (g && this.currentDirection === null) {
					this.currentDirection = q1(P), this.currentDirection !== null && y && y(this.currentDirection);
					return
				}
				this.updateAxis("x", f.point, P), this.updateAxis("y", f.point, P), this.visualElement.render(), v && v(c, f)
			},
			l = (c, f) => this.stop(c, f),
			a = () => _e(c => {
				var f;
				return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
			}),
			{
				dragSnapToOrigin: u
			} = this.getProps();
		this.panSession = new Up(t, {
			onSessionStart: i,
			onStart: o,
			onMove: s,
			onSessionEnd: l,
			resumeAnimation: a
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: u,
			contextWindow: Qp(this.visualElement)
		})
	}
	stop(t, n) {
		const r = this.isDragging;
		if (this.cancel(), !r) return;
		const {
			velocity: i
		} = n;
		this.startAnimation(i);
		const {
			onDragEnd: o
		} = this.getProps();
		o && F.postRender(() => o(t, n))
	}
	cancel() {
		this.isDragging = !1;
		const {
			projection: t,
			animationState: n
		} = this.visualElement;
		t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		const {
			dragPropagation: r
		} = this.getProps();
		!r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
	}
	updateAxis(t, n, r) {
		const {
			drag: i
		} = this.getProps();
		if (!r || !Pi(t, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(t);
		let s = this.originPoint[t] + r[t];
		this.constraints && this.constraints[t] && (s = z1(s, this.constraints[t], this.elastic[t])), o.set(s)
	}
	resolveConstraints() {
		var t;
		const {
			dragConstraints: n,
			dragElastic: r
		} = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
		n && Ln(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = I1(i.layoutBox, n) : this.constraints = !1, this.elastic = H1(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && _e(s => {
			this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = $1(i.layoutBox[s], this.constraints[s]))
		})
	}
	resolveRefConstraints() {
		const {
			dragConstraints: t,
			onMeasureDragConstraints: n
		} = this.getProps();
		if (!t || !Ln(t)) return !1;
		const r = t.current,
			{
				projection: i
			} = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = X1(r, i.root, this.visualElement.getTransformPagePoint());
		let s = B1(i.layout.layoutBox, o);
		if (n) {
			const l = n(W1(s));
			this.hasMutatedConstraints = !!l, l && (s = Hp(l))
		}
		return s
	}
	startAnimation(t) {
		const {
			drag: n,
			dragMomentum: r,
			dragElastic: i,
			dragTransition: o,
			dragSnapToOrigin: s,
			onDragTransitionEnd: l
		} = this.getProps(), a = this.constraints || {}, u = _e(c => {
			if (!Pi(c, n, this.currentDirection)) return;
			let f = a && a[c] || {};
			s && (f = {
				min: 0,
				max: 0
			});
			const d = i ? 200 : 1e6,
				g = i ? 40 : 1e7,
				y = {
					type: "inertia",
					velocity: r ? t[c] : 0,
					bounceStiffness: d,
					bounceDamping: g,
					timeConstant: 750,
					restDelta: 1,
					restSpeed: 10,
					...o,
					...f
				};
			return this.startAxisValueAnimation(c, y)
		});
		return Promise.all(u).then(l)
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return r.start(ba(t, r, 0, n, this.visualElement))
	}
	stopAnimation() {
		_e(t => this.getAxisMotionValue(t).stop())
	}
	pauseAnimation() {
		_e(t => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
		})
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n];
		return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
	}
	snapToCursor(t) {
		_e(n => {
			const {
				drag: r
			} = this.getProps();
			if (!Pi(n, r, this.currentDirection)) return;
			const {
				projection: i
			} = this.visualElement, o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const {
					min: s,
					max: l
				} = i.layout.layoutBox[n];
				o.set(t[n] - W(s, l, .5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const {
			drag: t,
			dragConstraints: n
		} = this.getProps(), {
			projection: r
		} = this.visualElement;
		if (!Ln(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = {
			x: 0,
			y: 0
		};
		_e(s => {
			const l = this.getAxisMotionValue(s);
			if (l && this.constraints !== !1) {
				const a = l.get();
				i[s] = U1({
					min: a,
					max: a
				}, this.constraints[s])
			}
		});
		const {
			transformTemplate: o
		} = this.visualElement.getProps();
		this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _e(s => {
			if (!Pi(s, t, null)) return;
			const l = this.getAxisMotionValue(s),
				{
					min: a,
					max: u
				} = this.constraints[s];
			l.set(W(a, u, i[s]))
		})
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Z1.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = st(t, "pointerdown", a => {
				const {
					drag: u,
					dragListener: c = !0
				} = this.getProps();
				u && c && this.start(a)
			}),
			r = () => {
				const {
					dragConstraints: a
				} = this.getProps();
				Ln(a) && a.current && (this.constraints = this.resolveRefConstraints())
			},
			{
				projection: i
			} = this.visualElement,
			o = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(r);
		const s = it(window, "resize", () => this.scalePositionWithinConstraints()),
			l = i.addEventListener("didUpdate", ({
				delta: a,
				hasLayoutChanged: u
			}) => {
				this.isDragging && u && (_e(c => {
					const f = this.getAxisMotionValue(c);
					f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate))
				}), this.visualElement.render())
			});
		return () => {
			s(), n(), o(), l && l()
		}
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: s = Rl,
				dragMomentum: l = !0
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: s,
			dragMomentum: l
		}
	}
}

function Pi(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e)
}

function q1(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class b1 extends Ht {
	constructor(t) {
		super(t), this.removeGroupControls = pe, this.removeListeners = pe, this.controls = new J1(t)
	}
	mount() {
		const {
			dragControls: t
		} = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || pe
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const ef = e => (t, n) => {
	e && F.postRender(() => e(t, n))
};
class ex extends Ht {
	constructor() {
		super(...arguments), this.removePointerDownListener = pe
	}
	onPointerDown(t) {
		this.session = new Up(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Qp(this.node)
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i
		} = this.node.getProps();
		return {
			onSessionStart: ef(t),
			onStart: ef(n),
			onMove: r,
			onEnd: (o, s) => {
				delete this.session, i && F.postRender(() => i(o, s))
			}
		}
	}
	mount() {
		this.removePointerDownListener = st(this.node.current, "pointerdown", t => this.onPointerDown(t))
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}

function tx() {
	const e = R.useContext(La);
	if (e === null) return [!0, null];
	const {
		isPresent: t,
		onExitComplete: n,
		register: r
	} = e, i = R.useId();
	return R.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const zi = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};

function tf(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const lr = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == "string")
				if (L.test(e)) e = parseFloat(e);
				else return e;
			const n = tf(e, t.target.x),
				r = tf(e, t.target.y);
			return `${n}% ${r}%`
		}
	},
	nx = {
		correct: (e, {
			treeScale: t,
			projectionDelta: n
		}) => {
			const r = e,
				i = It.parse(e);
			if (i.length > 5) return r;
			const o = It.createTransformer(e),
				s = typeof i[0] != "number" ? 1 : 0,
				l = n.x.scale * t.x,
				a = n.y.scale * t.y;
			i[0 + s] /= l, i[1 + s] /= a;
			const u = W(l, a, .5);
			return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
		}
	};
class rx extends R.Component {
	componentDidMount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r,
			layoutId: i
		} = this.props, {
			projection: o
		} = t;
		ey(ix), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
			this.safeToRemove()
		}), o.setOptions({
			...o.options,
			onExitComplete: () => this.safeToRemove()
		})), zi.hasEverUpdated = !0
	}
	getSnapshotBeforeUpdate(t) {
		const {
			layoutDependency: n,
			visualElement: r,
			drag: i,
			isPresent: o
		} = this.props, s = r.projection;
		return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || F.postRender(() => {
			const l = s.getStack();
			(!l || !l.members.length) && this.safeToRemove()
		}))), null
	}
	componentDidUpdate() {
		const {
			projection: t
		} = this.props.visualElement;
		t && (t.root.didUpdate(), Da.postRender(() => {
			!t.currentAnimation && t.isLead() && this.safeToRemove()
		}))
	}
	componentWillUnmount() {
		const {
			visualElement: t,
			layoutGroup: n,
			switchLayoutGroup: r
		} = this.props, {
			projection: i
		} = t;
		i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
	}
	safeToRemove() {
		const {
			safeToRemove: t
		} = this.props;
		t && t()
	}
	render() {
		return null
	}
}

function Yp(e) {
	const [t, n] = tx(), r = R.useContext(Wh);
	return C.jsx(rx, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: R.useContext(Uh),
		isPresent: t,
		safeToRemove: n
	})
}
const ix = {
		borderRadius: {
			...lr,
			applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
		},
		borderTopLeftRadius: lr,
		borderTopRightRadius: lr,
		borderBottomLeftRadius: lr,
		borderBottomRightRadius: lr,
		boxShadow: nx
	},
	Xp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
	ox = Xp.length,
	nf = e => typeof e == "string" ? parseFloat(e) : e,
	rf = e => typeof e == "number" || L.test(e);

function sx(e, t, n, r, i, o) {
	i ? (e.opacity = W(0, n.opacity !== void 0 ? n.opacity : 1, lx(r)), e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, ax(r))) : o && (e.opacity = W(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
	for (let s = 0; s < ox; s++) {
		const l = `border${Xp[s]}Radius`;
		let a = of (t, l),
			u = of (n, l);
		if (a === void 0 && u === void 0) continue;
		a || (a = 0), u || (u = 0), a === 0 || u === 0 || rf(a) === rf(u) ? (e[l] = Math.max(W(nf(a), nf(u), r), 0), (be.test(u) || be.test(a)) && (e[l] += "%")) : e[l] = u
	}(t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r))
}

function of (e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius
}
const lx = Zp(0, .5, Dp),
	ax = Zp(.5, .95, pe);

function Zp(e, t, n) {
	return r => r < e ? 0 : r > t ? 1 : n(Kr(e, t, r))
}

function sf(e, t) {
	e.min = t.min, e.max = t.max
}

function Ne(e, t) {
	sf(e.x, t.x), sf(e.y, t.y)
}

function lf(e, t, n, r, i) {
	return e -= t, e = go(e, 1 / n, r), i !== void 0 && (e = go(e, 1 / i, r)), e
}

function ux(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
	if (be.test(t) && (t = parseFloat(t), t = W(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
	let l = W(o.min, o.max, r);
	e === o && (l -= t), e.min = lf(e.min, t, n, l, i), e.max = lf(e.max, t, n, l, i)
}

function af(e, t, [n, r, i], o, s) {
	ux(e, t[n], t[r], t[i], t.scale, o, s)
}
const cx = ["x", "scaleX", "originX"],
	fx = ["y", "scaleY", "originY"];

function uf(e, t, n, r) {
	af(e.x, t, cx, n ? n.x : void 0, r ? r.x : void 0), af(e.y, t, fx, n ? n.y : void 0, r ? r.y : void 0)
}

function cf(e) {
	return e.translate === 0 && e.scale === 1
}

function Jp(e) {
	return cf(e.x) && cf(e.y)
}

function dx(e, t) {
	return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function qp(e, t) {
	return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function ff(e) {
	return Ae(e.x) / Ae(e.y)
}
class hx {
	constructor() {
		this.members = []
	}
	add(t) {
		eu(this.members, t), t.scheduleRender()
	}
	remove(t) {
		if (tu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n)
		}
	}
	relegate(t) {
		const n = this.members.findIndex(i => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				r = o;
				break
			}
		}
		return r ? (this.promote(r), !0) : !1
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
			r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const {
				crossfade: i
			} = t.options;
			i === !1 && r.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach(t => {
			const {
				options: n,
				resumingFrom: r
			} = t;
			n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach(t => {
			t.instance && t.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}

function df(e, t, n) {
	let r = "";
	const i = e.x.translate / t.x,
		o = e.y.translate / t.y,
		s = (n == null ? void 0 : n.z) || 0;
	if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: f,
			rotateY: d,
			skewX: g,
			skewY: y
		} = n;
		u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `)
	}
	const l = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none"
}
const px = (e, t) => e.depth - t.depth;
class mx {
	constructor() {
		this.children = [], this.isDirty = !1
	}
	add(t) {
		eu(this.children, t), this.isDirty = !0
	}
	remove(t) {
		tu(this.children, t), this.isDirty = !0
	}
	forEach(t) {
		this.isDirty && this.children.sort(px), this.isDirty = !1, this.children.forEach(t)
	}
}

function gx(e, t) {
	const n = jt.now(),
		r = ({
			timestamp: i
		}) => {
			const o = i - n;
			o >= t && (ht(r), e(o - t))
		};
	return F.read(r, !0), () => ht(r)
}

function yx(e) {
	window.MotionDebug && window.MotionDebug.record(e)
}

function vx(e) {
	return e instanceof SVGElement && e.tagName !== "svg"
}

function xx(e, t, n) {
	const r = he(e) ? e : Gr(e);
	return r.start(ba("", r, t, n)), r.animation
}
const Ts = ["", "X", "Y", "Z"],
	wx = {
		visibility: "hidden"
	},
	hf = 1e3;
let Sx = 0;
const qt = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0
};

function Cs(e, t, n, r) {
	const {
		latestValues: i
	} = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function bp(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return !1;
	const {
		visualElement: t
	} = e.options;
	return t ? Ip(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? bp(e.parent) : !1 : !1
}

function em({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i
}) {
	return class {
		constructor(s = {}, l = t == null ? void 0 : t()) {
			this.id = Sx++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, qt.totalNodes = qt.resolvedTargetDeltas = qt.recalculatedProjection = 0, this.nodes.forEach(Tx), this.nodes.forEach(Lx), this.nodes.forEach(Ax), this.nodes.forEach(Cx), yx(qt)
			}, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
			for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
			this.root === this && (this.nodes = new mx)
		}
		addEventListener(s, l) {
			return this.eventHandlers.has(s) || this.eventHandlers.set(s, new nu), this.eventHandlers.get(s).add(l)
		}
		notifyListeners(s, ...l) {
			const a = this.eventHandlers.get(s);
			a && a.notify(...l)
		}
		hasListeners(s) {
			return this.eventHandlers.has(s)
		}
		mount(s, l = this.root.hasTreeAnimated) {
			if (this.instance) return;
			this.isSVG = vx(s), this.instance = s;
			const {
				layoutId: a,
				layout: u,
				visualElement: c
			} = this.options;
			if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
				let f;
				const d = () => this.root.updateBlockedByResize = !1;
				e(s, () => {
					this.root.updateBlockedByResize = !0, f && f(), f = gx(d, 250), zi.hasAnimatedSinceResize && (zi.hasAnimatedSinceResize = !1, this.nodes.forEach(mf))
				})
			}
			a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({
				delta: f,
				hasLayoutChanged: d,
				hasRelativeTargetChanged: g,
				layout: y
			}) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return
				}
				const v = this.options.transition || c.getDefaultTransition() || jx,
					{
						onLayoutAnimationStart: P,
						onLayoutAnimationComplete: m
					} = c.getProps(),
					h = !this.targetLayout || !qp(this.targetLayout, y) || g,
					p = !d && g;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || d && (h || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, p);
					const x = {
						...Wa(v, "layout"),
						onPlay: P,
						onComplete: m
					};
					(c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x)
				} else d || mf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = y
			})
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const s = this.getStack();
			s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ht(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Rx), this.animationId++)
		}
		getTransformTemplate() {
			const {
				visualElement: s
			} = this.options;
			return s && s.getProps().transformTemplate
		}
		willUpdate(s = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return
			}
			if (window.HandoffCancelAllAnimations && bp(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c];
				f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
			}
			const {
				layoutId: l,
				layout: a
			} = this.options;
			if (l === void 0 && !a) return;
			const u = this.getTransformTemplate();
			this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(pf);
				return
			}
			this.isUpdating || this.nodes.forEach(Mx), this.isUpdating = !1, this.nodes.forEach(Vx), this.nodes.forEach(kx), this.nodes.forEach(Px), this.clearAllSnapshots();
			const l = jt.now();
			se.delta = zt(0, 1e3 / 60, l - se.timestamp), se.timestamp = l, se.isProcessing = !0, ps.update.process(se), ps.preRender.process(se), ps.render.process(se), se.isProcessing = !1
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Da.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(Ex), this.sharedNodes.forEach(Dx)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			F.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure())
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
			const s = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = X(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			const {
				visualElement: l
			} = this.options;
			l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
		}
		updateScroll(s = "measure") {
			let l = !!(this.options.layoutScroll && this.instance);
			this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l && (this.scroll = {
				animationId: this.root.animationId,
				phase: s,
				isRoot: r(this.instance),
				offset: n(this.instance)
			})
		}
		resetTransform() {
			if (!i) return;
			const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				l = this.projectionDelta && !Jp(this.projectionDelta),
				a = this.getTransformTemplate(),
				u = a ? a(this.latestValues, "") : void 0,
				c = u !== this.prevTransformTemplateValue;
			s && (l || Jt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
		}
		measure(s = !0) {
			const l = this.measurePageBox();
			let a = this.removeElementScroll(l);
			return s && (a = this.removeTransform(a)), Ox(a), {
				animationId: this.root.animationId,
				measuredBox: l,
				layoutBox: a,
				latestValues: {},
				source: this.id
			}
		}
		measurePageBox() {
			const {
				visualElement: s
			} = this.options;
			if (!s) return X();
			const l = s.measureViewportBox(),
				{
					scroll: a
				} = this.root;
			return a && (wt(l.x, a.offset.x), wt(l.y, a.offset.y)), l
		}
		removeElementScroll(s) {
			const l = X();
			Ne(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a],
					{
						scroll: c,
						options: f
					} = u;
				if (u !== this.root && c && f.layoutScroll) {
					if (c.isRoot) {
						Ne(l, s);
						const {
							scroll: d
						} = this.root;
						d && (wt(l.x, -d.offset.x), wt(l.y, -d.offset.y))
					}
					wt(l.x, c.offset.x), wt(l.y, c.offset.y)
				}
			}
			return l
		}
		applyTransform(s, l = !1) {
			const a = X();
			Ne(a, s);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!l && c.options.layoutScroll && c.scroll && c !== c.root && Dn(a, {
					x: -c.scroll.offset.x,
					y: -c.scroll.offset.y
				}), Jt(c.latestValues) && Dn(a, c.latestValues)
			}
			return Jt(this.latestValues) && Dn(a, this.latestValues), a
		}
		removeTransform(s) {
			const l = X();
			Ne(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a];
				if (!u.instance || !Jt(u.latestValues)) continue;
				Dl(u.latestValues) && u.updateSnapshot();
				const c = X(),
					f = u.measurePageBox();
				Ne(c, f), uf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
			}
			return Jt(this.latestValues) && uf(l, this.latestValues), l
		}
		setTargetDelta(s) {
			this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade !== void 0 ? s.crossfade : !0
			}
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== se.timestamp && this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(s = !1) {
			var l;
			const a = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== a;
			if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
			const {
				layout: f,
				layoutId: d
			} = this.options;
			if (!(!this.layout || !(f || d))) {
				if (this.resolvedRelativeTargetAt = se.timestamp, !this.targetDelta && !this.relativeTarget) {
					const g = this.getClosestProjectingParent();
					g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), Cr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = X(), this.targetWithTransforms = X()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), F1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ne(this.target, this.layout.layoutBox), Kp(this.target, this.targetDelta)) : Ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						const g = this.getClosestProjectingParent();
						g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), Cr(this.relativeTargetOrigin, this.target, g.target), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
					}
					qt.resolvedTargetDeltas++
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Dl(this.parent.latestValues) || Wp(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
		}
		calcProjection() {
			var s;
			const l = this.getLead(),
				a = !!this.resumingFrom || this !== l;
			let u = !0;
			if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === se.timestamp && (u = !1), u) return;
			const {
				layout: c,
				layoutId: f
			} = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
			Ne(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				g = this.treeScale.y;
			G1(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = X());
			const {
				target: y
			} = l;
			if (!y) {
				this.projectionTransform && (this.projectionDelta = Rn(), this.projectionTransform = "none", this.scheduleRender());
				return
			}
			this.projectionDelta || (this.projectionDelta = Rn(), this.projectionDeltaWithTransform = Rn());
			const v = this.projectionTransform;
			Tr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = df(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== g) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), qt.recalculatedProjection++
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(s = !0) {
			if (this.options.scheduleRender && this.options.scheduleRender(), s) {
				const l = this.getStack();
				l && l.scheduleRender()
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
		}
		setAnimationOrigin(s, l = !1) {
			const a = this.snapshot,
				u = a ? a.latestValues : {},
				c = {
					...this.latestValues
				},
				f = Rn();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
			const d = X(),
				g = a ? a.source : void 0,
				y = this.layout ? this.layout.source : void 0,
				v = g !== y,
				P = this.getStack(),
				m = !P || P.members.length <= 1,
				h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(_x));
			this.animationProgress = 0;
			let p;
			this.mixTargetDelta = x => {
				const w = x / 1e3;
				gf(f.x, s.x, w), gf(f.y, s.y, w), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Nx(this.relativeTarget, this.relativeTargetOrigin, d, w), p && dx(this.relativeTarget, p) && (this.isProjectionDirty = !1), p || (p = X()), Ne(p, this.relativeTarget)), v && (this.animationValues = c, sx(c, u, this.latestValues, w, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(s) {
			this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ht(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
				zi.hasAnimatedSinceResize = !0, this.currentAnimation = xx(0, hf, {
					...s,
					onUpdate: l => {
						this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
					},
					onComplete: () => {
						s.onComplete && s.onComplete(), this.completeAnimation()
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
			})
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			const s = this.getStack();
			s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hf), this.currentAnimation.stop()), this.completeAnimation()
		}
		applyTransformsToTarget() {
			const s = this.getLead();
			let {
				targetWithTransforms: l,
				target: a,
				layout: u,
				latestValues: c
			} = s;
			if (!(!l || !a || !u)) {
				if (this !== s && this.layout && u && tm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
					a = this.target || X();
					const f = Ae(this.layout.layoutBox.x);
					a.x.min = s.target.x.min, a.x.max = a.x.min + f;
					const d = Ae(this.layout.layoutBox.y);
					a.y.min = s.target.y.min, a.y.max = a.y.min + d
				}
				Ne(l, a), Dn(l, c), Tr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
			}
		}
		registerSharedNode(s, l) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new hx), this.sharedNodes.get(s).add(l);
			const u = l.options.initialPromotionConfig;
			l.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
			})
		}
		isLead() {
			const s = this.getStack();
			return s ? s.lead === this : !0
		}
		getLead() {
			var s;
			const {
				layoutId: l
			} = this.options;
			return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
		}
		getPrevLead() {
			var s;
			const {
				layoutId: l
			} = this.options;
			return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
		}
		getStack() {
			const {
				layoutId: s
			} = this.options;
			if (s) return this.root.sharedNodes.get(s)
		}
		promote({
			needsReset: s,
			transition: l,
			preserveFollowOpacity: a
		} = {}) {
			const u = this.getStack();
			u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
				transition: l
			})
		}
		relegate() {
			const s = this.getStack();
			return s ? s.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const {
				visualElement: s
			} = this.options;
			if (!s) return;
			let l = !1;
			const {
				latestValues: a
			} = s;
			if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l) return;
			const u = {};
			a.z && Cs("z", s, u, this.animationValues);
			for (let c = 0; c < Ts.length; c++) Cs(`rotate${Ts[c]}`, s, u, this.animationValues), Cs(`skew${Ts[c]}`, s, u, this.animationValues);
			s.render();
			for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
			s.scheduleRender()
		}
		getProjectionStyles(s) {
			var l, a;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return wx;
			const u = {
					visibility: ""
				},
				c = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Oi(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const v = {};
				return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Oi(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Jt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(), u.transform = df(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
			const {
				x: g,
				y
			} = this.projectionDelta;
			u.transformOrigin = `${g.origin*100}% ${y.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
			for (const v in uo) {
				if (d[v] === void 0) continue;
				const {
					correct: P,
					applyTo: m
				} = uo[v], h = u.transform === "none" ? d[v] : P(d[v], f);
				if (m) {
					const p = m.length;
					for (let x = 0; x < p; x++) u[m[x]] = h
				} else u[v] = h
			}
			return this.options.layoutId && (u.pointerEvents = f === this ? Oi(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach(s => {
				var l;
				return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
			}), this.root.nodes.forEach(pf), this.root.sharedNodes.clear()
		}
	}
}

function kx(e) {
	e.updateLayout()
}

function Px(e) {
	var t;
	const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
		const {
			layoutBox: r,
			measuredBox: i
		} = e.layout, {
			animationType: o
		} = e.options, s = n.source !== e.layout.source;
		o === "size" ? _e(f => {
			const d = s ? n.measuredBox[f] : n.layoutBox[f],
				g = Ae(d);
			d.min = r[f].min, d.max = d.min + g
		}) : tm(o, n.layoutBox, r) && _e(f => {
			const d = s ? n.measuredBox[f] : n.layoutBox[f],
				g = Ae(r[f]);
			d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g)
		});
		const l = Rn();
		Tr(l, r, n.layoutBox);
		const a = Rn();
		s ? Tr(a, e.applyTransform(i, !0), n.measuredBox) : Tr(a, r, n.layoutBox);
		const u = !Jp(l);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const {
					snapshot: d,
					layout: g
				} = f;
				if (d && g) {
					const y = X();
					Cr(y, n.layoutBox, d.layoutBox);
					const v = X();
					Cr(v, r, g.layoutBox), qp(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f)
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: r,
			snapshot: n,
			delta: a,
			layoutDelta: l,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c
		})
	} else if (e.isLead()) {
		const {
			onExitComplete: r
		} = e.options;
		r && r()
	}
	e.options.transition = void 0
}

function Tx(e) {
	qt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Cx(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Ex(e) {
	e.clearSnapshot()
}

function pf(e) {
	e.clearMeasurements()
}

function Mx(e) {
	e.isLayoutDirty = !1
}

function Vx(e) {
	const {
		visualElement: t
	} = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function mf(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Lx(e) {
	e.resolveTargetDelta()
}

function Ax(e) {
	e.calcProjection()
}

function Rx(e) {
	e.resetSkewAndRotation()
}

function Dx(e) {
	e.removeLeadSnapshot()
}

function gf(e, t, n) {
	e.translate = W(t.translate, 0, n), e.scale = W(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function yf(e, t, n, r) {
	e.min = W(t.min, n.min, r), e.max = W(t.max, n.max, r)
}

function Nx(e, t, n, r) {
	yf(e.x, t.x, n.x, r), yf(e.y, t.y, n.y, r)
}

function _x(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const jx = {
		duration: .45,
		ease: [.4, 0, .1, 1]
	},
	vf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	xf = vf("applewebkit/") && !vf("chrome/") ? Math.round : pe;

function wf(e) {
	e.min = xf(e.min), e.max = xf(e.max)
}

function Ox(e) {
	wf(e.x), wf(e.y)
}

function tm(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Al(ff(t), ff(n), .2)
}
const Fx = em({
		attachResizeListener: (e, t) => it(e, "resize", t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop
		}),
		checkIsScrollRoot: () => !0
	}),
	Es = {
		current: void 0
	},
	nm = em({
		measureScroll: e => ({
			x: e.scrollLeft,
			y: e.scrollTop
		}),
		defaultParent: () => {
			if (!Es.current) {
				const e = new Fx({});
				e.mount(window), e.setOptions({
					layoutScroll: !0
				}), Es.current = e
			}
			return Es.current
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : "none"
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
	}),
	zx = {
		pan: {
			Feature: ex
		},
		drag: {
			Feature: b1,
			ProjectionNode: nm,
			MeasureLayout: Yp
		}
	},
	_l = {
		current: null
	},
	rm = {
		current: !1
	};

function Ix() {
	if (rm.current = !0, !!Aa)
		if (window.matchMedia) {
			const e = window.matchMedia("(prefers-reduced-motion)"),
				t = () => _l.current = e.matches;
			e.addListener(t), t()
		} else _l.current = !1
}

function Bx(e, t, n) {
	const {
		willChange: r
	} = t;
	for (const i in t) {
		const o = t[i],
			s = n[i];
		if (he(o)) e.addValue(i, o), mo(r) && r.add(i);
		else if (he(s)) e.addValue(i, Gr(o, {
			owner: e
		})), mo(r) && r.remove(i);
		else if (s !== o)
			if (e.hasValue(i)) {
				const l = e.getValue(i);
				l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o)
			} else {
				const l = e.getStaticValue(i);
				e.addValue(i, Gr(l !== void 0 ? l : o, {
					owner: e
				}))
			}
	}
	for (const i in n) t[i] === void 0 && e.removeValue(i);
	return t
}
const Sf = new WeakMap,
	Ux = [...hp, fe, It],
	$x = e => Ux.find(dp(e)),
	kf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
	Hx = _a.length;
class Wx {
	scrapeMotionValuesFromProps(t, n, r) {
		return {}
	}
	constructor({
		parent: t,
		props: n,
		presenceContext: r,
		reducedMotionConfig: i,
		blockInitialAnimation: o,
		visualState: s
	}, l = {}) {
		this.resolveKeyframes = (d, g, y, v) => new this.KeyframeResolver(d, g, y, v, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Ka, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
		}, this.scheduleRender = () => F.render(this.render, !1, !0);
		const {
			latestValues: a,
			renderState: u
		} = s;
		this.latestValues = a, this.baseTarget = {
			...a
		}, this.initialValues = n.initial ? {
			...a
		} : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = Fo(n), this.isVariantNode = Hh(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
		const {
			willChange: c,
			...f
		} = this.scrapeMotionValuesFromProps(n, {}, this);
		for (const d in f) {
			const g = f[d];
			a[d] !== void 0 && he(g) && (g.set(a[d], !1), mo(c) && c.add(d))
		}
	}
	mount(t) {
		this.current = t, Sf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), rm.current || Ix(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : _l.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
	}
	unmount() {
		Sf.delete(this.current), this.projection && this.projection.unmount(), ht(this.notifyUpdate), ht(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) {
			const n = this.features[t];
			n && (n.unmount(), n.isMounted = !1)
		}
		this.current = null
	}
	bindToMotionValue(t, n) {
		const r = pn.has(t),
			i = n.on("change", s => {
				this.latestValues[t] = s, this.props.onUpdate && F.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
			}),
			o = n.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			i(), o(), n.owner && n.stop()
		})
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
	}
	updateFeatures() {
		let t = "animation";
		for (t in Gn) {
			const n = Gn[t];
			if (!n) continue;
			const {
				isEnabled: r,
				Feature: i
			} = n;
			if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
				const o = this.features[t];
				o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props)
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X()
	}
	getStaticValue(t) {
		return this.latestValues[t]
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
		for (let r = 0; r < kf.length; r++) {
			const i = kf[r];
			this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
			const o = "on" + i,
				s = t[o];
			s && (this.propEventSubscriptions[i] = this.on(i, s))
		}
		this.prevMotionValues = Bx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
	}
	getProps() {
		return this.props
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (r.initial = this.props.initial), r
		}
		const n = {};
		for (let r = 0; r < Hx; r++) {
			const i = _a[r],
				o = this.props[i];
			(Hr(o) || o === !1) && (n[i] = o)
		}
		return n
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
	}
	hasValue(t) {
		return this.values.has(t)
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return r === void 0 && n !== void 0 && (r = Gr(n === null ? void 0 : n, {
			owner: this
		}), this.addValue(t, r)), r
	}
	readValue(t, n) {
		var r;
		let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
		return i != null && (typeof i == "string" && (cp(i) || up(i)) ? i = parseFloat(i) : !$x(i) && It.test(n) && (i = Sp(t, n)), this.setBaseTarget(t, he(i) ? i.get() : i)), he(i) ? i.get() : i
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n
	}
	getBaseTarget(t) {
		var n;
		const {
			initial: r
		} = this.props;
		let i;
		if (typeof r == "string" || typeof r == "object") {
			const s = Ha(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
			s && (i = s[t])
		}
		if (r && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, t);
		return o !== void 0 && !he(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new nu), this.events[t].add(n)
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n)
	}
}
class im extends Wx {
	constructor() {
		super(...arguments), this.KeyframeResolver = kp
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0
	}
	removeValueFromRenderState(t, {
		vars: n,
		style: r
	}) {
		delete n[t], delete r[t]
	}
}

function Kx(e) {
	return window.getComputedStyle(e)
}
class Gx extends im {
	constructor() {
		super(...arguments), this.type = "html"
	}
	readValueFromInstance(t, n) {
		if (pn.has(n)) {
			const r = Qa(n);
			return r && r.default || 0
		} else {
			const r = Kx(t),
				i = (Qh(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof i == "string" ? i.trim() : i
		}
	}
	measureInstanceViewportBox(t, {
		transformPagePoint: n
	}) {
		return Gp(t, n)
	}
	build(t, n, r, i) {
		za(t, n, r, i.transformTemplate)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return $a(t, n, r)
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const {
			children: t
		} = this.props;
		he(t) && (this.childSubscription = t.on("change", n => {
			this.current && (this.current.textContent = `${n}`)
		}))
	}
	renderInstance(t, n, r, i) {
		qh(t, n, r, i)
	}
}
class Qx extends im {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1
	}
	getBaseTargetFromProps(t, n) {
		return t[n]
	}
	readValueFromInstance(t, n) {
		if (pn.has(n)) {
			const r = Qa(n);
			return r && r.default || 0
		}
		return n = bh.has(n) ? n : Ra(n), t.getAttribute(n)
	}
	measureInstanceViewportBox() {
		return X()
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return tp(t, n, r)
	}
	build(t, n, r, i) {
		Ba(t, n, r, this.isSVGTag, i.transformTemplate)
	}
	renderInstance(t, n, r, i) {
		ep(t, n, r, i)
	}
	mount(t) {
		this.isSVGTag = Ua(t.tagName), super.mount(t)
	}
}
const Yx = (e, t) => ja(e) ? new Qx(t, {
		enableHardwareAcceleration: !1
	}) : new Gx(t, {
		allowProjection: e !== R.Fragment,
		enableHardwareAcceleration: !0
	}),
	Xx = {
		layout: {
			ProjectionNode: nm,
			MeasureLayout: Yp
		}
	},
	Zx = {
		...N1,
		...Hy,
		...zx,
		...Xx
	},
	om = qg((e, t) => Ay(e, t, Zx, Yx));

function Jx({
	darkMode: e
}) {
	const t = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
				staggerChildren: .1
			}
		}
	};
	return C.jsxs("div", {
		className: "text-invert md:pt-20  flex w-full flex-col md:flex-row",
		children: [C.jsx(om.div, {
			className: "text-invert md:w-[50%] md:pr-10 md:pb-0 pb-5 flex justify-center items-center ",
			initial: "hidden",
			animate: "visible",
			variants: t,
			children: C.jsxs("div", {
				className: "text-[2rem] sm:text-[3rem] sm:pb-0 pb-5 text-inter font-bold md:text-[5rem] text-center w-full",
				children: [C.jsx("span", {
					className: ` font-inter   ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
					children: "W"
				}), "ho", " ", C.jsx("span", {
					className: ` font-poppins  ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
					children: "A"
				}), "m I", " ", C.jsx("span", {
					className: ` font-inter  ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
					children: "?"
				}), " "]
			})
		}), C.jsxs("div", {
			className: "md:w-[50%] p-5 backdrop-blur-sm  bg-transparent dark:bg-slate-600/30 rounded-xl justify-center items-center font-inter text-center max-w-6xl m-auto dark:shadow-[0_0_20px_0_rgb(255,255,255,0.1)] shadow-[0_0_15px_0_rgb(0,0,0,0.2)]  font-light",
			children: ["I am a recent graduate", " ", C.jsx("span", {
				className: "font-semibold",
				children: "(May, 2024)"
			}), ", passionate about software engineering, with a particular ", "", C.jsx("span", {
				className: "font-semibold",
				children: "interest in backend."
			}), C.jsx("br", {}), C.jsx("br", {}), "I enjoy the challenges of building efficient, scalable, and reliable systems that power applications and services. My education and personal projects have provided me with a solid foundation in various programming languages and frameworks, and I am constantly seeking to learn more and improve my skills.", C.jsx("br", {}), C.jsx("br", {}), "Additionally, I am a problem solver with a solve count of over", " ", C.jsx("span", {
				className: "font-semibold",
				children: "1500+ problems"
			}), " on various online judges like Codeforces, AtCoder, UVa, LightOJ, and others."]
		})]
	})
}

function qx({
	darkMode: e
}) {
	const t = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 120,
				duration: 1,
				staggerChildren: .1
			}
		}
	};
	return C.jsxs(om.div, {
		initial: "hidden",
		animate: "visible",
		variants: t,
		className: "text-5xl sm:text-6xl text-invert font-inter md:text-7xl  font-extrabold",
		children: ["Hi, I am", " ", C.jsxs("span", {
			className: ` font-poppins ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
			children: [C.jsx("br", {}), "Moursalin Emon"]
		}), C.jsx("hr", {
			className: "border-neutral-700/50 dark:border-neutral-200/50 my-5"
		}), C.jsxs("h3", {
			className: "uppercase text-2xl sm:text-3xl md:text-4xl",
			children: [" ", C.jsx("span", {
				className: ` font-poppins text-3xl sm:text-4xl md:text-5xl  ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
				children: "J"
			}), "unior", " ", C.jsx("span", {
				className: ` font-poppins text-3xl sm:text-4xl md:text-5xl  ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
				children: "S"
			}), "oftware", " ", C.jsx("span", {
				className: ` font-poppins text-3xl sm:text-4xl md:text-5xl ${e?"stroked-text-darkmode":"stroked-text-lightMode"}`,
				children: "E"
			}), "ngineer"]
		})]
	})
}
var sm = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Pf = Ct.createContext && Ct.createContext(sm),
	bx = ["attr", "size", "title"];

function e2(e, t) {
	if (e == null) return {};
	var n = t2(e, t),
		r, i;
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
	}
	return n
}

function t2(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e)
		if (Object.prototype.hasOwnProperty.call(e, r)) {
			if (t.indexOf(r) >= 0) continue;
			n[r] = e[r]
		} return n
}

function yo() {
	return yo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, yo.apply(this, arguments)
}

function Tf(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(i) {
			return Object.getOwnPropertyDescriptor(e, i).enumerable
		})), n.push.apply(n, r)
	}
	return n
}

function vo(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {};
		t % 2 ? Tf(Object(n), !0).forEach(function(r) {
			n2(e, r, n[r])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tf(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		})
	}
	return e
}

function n2(e, t, n) {
	return t = r2(t), t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function r2(e) {
	var t = i2(e, "string");
	return typeof t == "symbol" ? t : t + ""
}

function i2(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (t === "string" ? String : Number)(e)
}

function lm(e) {
	return e && e.map((t, n) => Ct.createElement(t.tag, vo({
		key: n
	}, t.attr), lm(t.child)))
}

function mn(e) {
	return t => Ct.createElement(o2, yo({
		attr: vo({}, e.attr)
	}, t), lm(e.child))
}

function o2(e) {
	var t = n => {
		var {
			attr: r,
			size: i,
			title: o
		} = e, s = e2(e, bx), l = i || n.size || "1em", a;
		return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), Ct.createElement("svg", yo({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, n.attr, r, s, {
			className: a,
			style: vo(vo({
				color: e.color || n.color
			}, n.style), e.style),
			height: l,
			width: l,
			xmlns: "http://www.w3.org/2000/svg"
		}), o && Ct.createElement("title", null, o), e.children)
	};
	return Pf !== void 0 ? Ct.createElement(Pf.Consumer, null, n => t(n)) : t(sm)
}

function s2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
			},
			child: []
		}]
	})(e)
}

function l2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 496 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			},
			child: []
		}]
	})(e)
}

function a2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 448 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
			},
			child: []
		}]
	})(e)
}

function u2() {
	const e = "size-7 text-neutral-900/85 dark:text-neutral-100/85 cursor-pointer";
	return C.jsxs("div", {
		className: "flex flex-col justify-center items-center",
		children: [C.jsxs("div", {
			className: "flex flex-row gap-5",
			children: [C.jsx("a", {
				href: "https://www.facebook.com/moursalinme",
				target: "_blank",
				rel: "noopener noreferrer",
				children: C.jsx(s2, {
					className: e
				})
			}), C.jsx("a", {
				href: "https://www.linkedin.com/in/moursalinme",
				target: "_blank",
				rel: "noopener noreferrer",
				children: C.jsx(a2, {
					className: e
				})
			}), C.jsx("a", {
				href: "https://www.github.com/moursalinme",
				target: "_blank",
				rel: "noopener noreferrer",
				children: C.jsx(l2, {
					className: e
				})
			})]
		}), C.jsx("p", {
			className: "pt-5 pb-8 text-invert text-md font-light tracking-wider sm:text-lg md:text-xl ",
			children: "© Moursalin Emon"
		})]
	})
}

function c2({
	hamOpen: e
}) {
	const t = "w-full px-20 text-center hover:text-cyan-600 text-lg font-semibold transition duration-100 cursor-pointer",
		n = "border-neutral-700/50 border-2 dark:border-neutral-200/50 mt-4";
	return C.jsx("div", {
		className: `fixed flex z-20 top-4 sm:top-6 md:top-8 h-screen w-screen transition-all duration-300 ${e?"opacity-100 translate-x-0":"opacity-0 translate-x-full"}`,
		children: C.jsxs("div", {
			className: " flex items-center uppercase font-sans tracking-widest flex-col justify-center font-xl font-semibold w-full gap-5 dark:text-white",
			children: [C.jsxs("a", {
				className: t,
				children: ["About Me", C.jsx("hr", {
					className: n
				})]
			}), C.jsxs("a", {
				className: t,
				children: ["Education", C.jsx("hr", {
					className: n
				})]
			}), C.jsxs("a", {
				className: t,
				children: ["Projects", C.jsx("hr", {
					className: n
				})]
			}), C.jsxs("a", {
				className: t,
				children: ["Skills", C.jsx("hr", {
					className: n
				})]
			}), C.jsxs("a", {
				className: t,
				children: ["Co-curricular", C.jsx("hr", {
					className: n
				})]
			}), C.jsx("a", {
				className: t,
				children: "Achievements"
			})]
		})
	})
}

function f2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M253.813 15.625c-132.32 0-239.782 107.46-239.782 239.78s107.463 239.782 239.782 239.782c132.32 0 239.782-107.46 239.782-239.78S386.132 15.624 253.814 15.624zm0 17.906c122.653 0 221.906 99.223 221.906 221.876 0 30.738-6.26 59.99-17.533 86.594l-42.343-34.72c-49.613 13.98-110.337 9.033-138.906-60.874l-41.97 152.938c-8.837-45.53-23.35-81.28-47.905-115.22-19.71 13.855-32.352 32.63-39.72 50.97L88.94 237.03c-17.85 27.32-33.77 56.565-45.032 90.47-7.744-22.6-11.968-46.852-11.968-72.094 0-26.013 4.484-50.973 12.687-74.156 2.752 6.608 9.27 11.25 16.875 11.25 10.093 0 18.28-8.157 18.28-18.25s-8.187-18.28-18.28-18.28c-2.385 0-4.66.48-6.75 1.31 27.537-55.83 77.83-98.368 138.844-115.5-.558 1.938-.844 3.98-.844 6.095 0 12.146 9.823 22 21.97 22 12.144 0 22-9.854 22-22 0-4.99-1.67-9.59-4.47-13.28 7.092-.683 14.29-1.064 21.563-1.064zm18.75 27.657c-6.444 0-11.657 5.213-11.657 11.657 0 6.443 5.213 11.687 11.656 11.687 6.444 0 11.688-5.243 11.688-11.686 0-6.444-5.244-11.656-11.688-11.656zM198.03 90.22c-6.02.06-12.132.868-18.218 2.5-38.945 10.434-62.06 50.46-51.625 89.405 10.436 38.946 50.463 62.06 89.407 51.625 21.712-5.818 38.48-20.85 47.28-39.75-6.835 7.36-15.737 12.958-26.155 15.75-29.504 7.905-59.846-9.59-67.75-39.094-7.907-29.504 9.62-59.813 39.124-67.72 10.41-2.788 20.906-2.417 30.5.533-12.28-8.598-27.116-13.405-42.563-13.25zm155.282.81c-9.408 0-17.03 7.624-17.03 17.032 0 9.41 7.622 17.032 17.03 17.032 9.41 0 17.032-7.623 17.032-17.03 0-9.41-7.623-17.033-17.03-17.033zm-248.937 27.376c-6.443 0-11.656 5.244-11.656 11.688 0 6.443 5.212 11.656 11.655 11.656s11.656-5.213 11.656-11.656c0-6.444-5.212-11.688-11.655-11.688zm275.688 40.813l-.625 29.843-28.22 9.812 28.22 9.813.625 29.843 18.03-23.78 28.563 8.625-17.03-24.5 17.03-24.53L398.094 183l-18.03-23.78zm-72.094 11.593c-6.445 0-11.658 5.212-11.658 11.656 0 6.442 5.213 11.686 11.657 11.686 6.442 0 11.686-5.244 11.686-11.687 0-6.445-5.244-11.657-11.687-11.657zm139 74.75c-6.445 0-11.658 5.244-11.658 11.687s5.213 11.656 11.657 11.656c6.442 0 11.686-5.213 11.686-11.656 0-6.443-5.244-11.688-11.687-11.688zm-127.314 3.5c-6.443 0-11.656 5.244-11.656 11.687s5.213 11.656 11.656 11.656c6.444 0 11.656-5.213 11.656-11.656 0-6.443-5.212-11.688-11.656-11.688z"
			},
			child: []
		}]
	})(e)
}

function d2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 512 512"
		},
		child: [{
			tag: "path",
			attr: {
				fill: "none",
				strokeLinecap: "round",
				strokeMiterlimit: "10",
				strokeWidth: "32",
				d: "M256 48v48m0 320v48m147.08-355.08-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08-33.94-33.94M142.86 142.86l-33.94-33.94"
			},
			child: []
		}, {
			tag: "circle",
			attr: {
				cx: "256",
				cy: "256",
				r: "80",
				fill: "none",
				strokeLinecap: "round",
				strokeMiterlimit: "10",
				strokeWidth: "32"
			},
			child: []
		}]
	})(e)
}

function h2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 15 15",
			fill: "none"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",
				fill: "currentColor"
			},
			child: []
		}]
	})(e)
}

function p2(e) {
	return mn({
		tag: "svg",
		attr: {
			viewBox: "0 0 15 15",
			fill: "none"
		},
		child: [{
			tag: "path",
			attr: {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
				fill: "currentColor"
			},
			child: []
		}]
	})(e)
}

function m2({
	darkMode: e,
	toggleDarkMode: t,
	hamOpen: n,
	toggleHam: r
}) {
	const i = "h-6 w-6 cursor-pointer transition-all duration-400";
	return C.jsx("div", {
		className: "sticky flex top-0 backdrop-blur-[2px]  z-[100] border-b border-neutral-400 dark:border-neutral-500 w-xl bg-white/10 dark:bg-black/10",
		children: C.jsxs("div", {
			className: "flex max-w-screen-2xl m-auto z-[101] blur-none items-center p-2 sm:p-3 md:p-4 justify-between h-full w-full px-4 sm:px-6 md:px-8",
			children: [C.jsx("div", {
				children: C.jsx("header", {
					className: "uppercase cursor-pointer text-neutral-900 dark:text-neutral-200 tracking-widest border-2 rounded-sm border-neutral-500 font-sans px-2 hover:bg-neutral-700 transition-all duration-400 hover:border-neutral-700 hover:text-neutral-200 dark:hover:bg-neutral-300 dark:hover:text-neutral-700 text-sm sm:text-md md:text-base",
					children: C.jsx("a", {
						href: "#",
						children: "Moursalin Emon"
					})
				})
			}), C.jsxs("div", {
				className: "flex flex-row  gap-4 backdrop-opacity-100 transition-opacity justify-between sm:justify-end items-center",
				children: [e ? C.jsx(d2, {
					className: `${i} text-white `,
					onClick: t
				}) : C.jsx(f2, {
					className: `${i} text-neutral-800/90 `,
					onClick: t
				}), C.jsxs("div", {
					className: "relative items-center flex",
					children: [C.jsx(p2, {
						className: `${i} absolute sm:hidden text-black dark:text-white  ${n?"opacity-0":"opacity-100"} transition-all duration-700`,
						onClick: r
					}), C.jsx(h2, {
						className: `${i} sm:hidden  text-black dark:text-white  ${n?"opacity-100":"opacity-0"} transition-all duration-700`,
						onClick: r
					})]
				})]
			})]
		})
	})
}

function g2() {
	const [e, t] = R.useState(() => {
		const s = JSON.parse(window.localStorage.getItem("darkMode")) || !1;
		return s && document.documentElement.classList.add("dark"), s
	}), n = () => {
		document.documentElement.classList.toggle("dark"), window.localStorage.setItem("darkMode", JSON.stringify(!e)), t(!e)
	}, [r, i] = R.useState(!1), o = () => {
		i(!r)
	};
	return C.jsxs(C.Fragment, {
		children: [C.jsxs("div", {
			className: "fixed top-0 h-full w-full -z-10 transition-all duration-400",
			children: [C.jsx("div", {
				className: `absolute top-0 -z-10 h-screen w-screen bg-[#1a1818] bg-[size:20px_20px]${e?"opacity-100":"opacity-0"} transition-all duration-400`
			}), C.jsx("div", {
				className: `absolute top-0 z-[-10] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] ${e?"opacity-0":"opacity-100"} transition-all duration-400`
			})]
		}), C.jsx(m2, {
			darkMode: e,
			toggleDarkMode: n,
			hamOpen: r,
			toggleHam: o
		}), C.jsx(c2, {
			hamOpen: r
		}), C.jsxs("div", {
			className: `dark:text-white px-8 pt-24 sm:pt-40 md:pt-40 sm:px-10 md:px-14 space-y-20 lg:px-20 max-w-screen-2xl m-auto ${r&&"blur-md"}`,
			children: [C.jsx(qx, {
				darkMode: e
			}), C.jsx(Jx, {
				darkMode: e
			}), C.jsx(u2, {})]
		})]
	})
}
Ms.createRoot(document.getElementById("root")).render(C.jsx(Ct.StrictMode, {
	children: C.jsx(g2, {})
}));