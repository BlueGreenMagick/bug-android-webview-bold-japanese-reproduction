/*! For license information please see nol_tools.js.LICENSE.txt */
!(function () {
  var t = {
      253: function (t, e, n) {
        "use strict";
        n.r(e),
          n.d(e, {
            api: function () {
              return i;
            },
            cgi: function () {
              return s;
            },
            launch: function () {
              return o;
            },
            launchError: function () {
              return r;
            },
            news: function () {
              return a;
            },
          });
        var o =
            "//apps.nhk.or.jp/assets/dtm/launch-EN7d55f9d4f78b412597c9c6586b2a86ec.min.js",
          r =
            "//apps.nhk.or.jp/assets/dtm/launch-EN7d55f9d4f78b412597c9c6586b2a86ec.min.js",
          i = "api.nhk.or.jp",
          s = "www2.nhk.or.jp",
          a = "www3.nhk.or.jp";
      },
      402: function (t) {
        t.exports = {
          replaces: [
            {
              match:
                "//www\\.nhk\\.or\\.jp/(shutoken|kansai|tokai|hiroshima|fukuoka|tohoku|sapporo|matsuyama)-news/",
              regexp: "//www\\.nhk\\.or\\.jp/",
              newSubStr: "//www3.nhk.or.jp/",
            },
          ],
          redirects: [
            {
              match:
                "//www3\\.nhk\\.or\\.jp/news/special/disaster/archive/suigai/",
              to: "https://www.nhk.or.jp/bousai/suigai/",
            },
            {
              match: "//www3\\.nhk\\.or\\.jp/news/special/saigai/suigai/",
              to: "https://www.nhk.or.jp/bousai/suigai/",
            },
          ],
        };
      },
      485: function (t) {
        "use strict";
        t.exports = {
          top: [
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              name: "NHK | 日本放送協会",
              description:
                "NHKの公式ホームページ。ニュース・気象災害情報や、朝ドラ・大河・紅白などさまざまな番組紹介をお届けします。イベント案内・受信契約の受付・経営に関する情報などもご覧いただけます。",
              url: "https://www.nhk.or.jp/",
              publisher: {
                "@type": "Organization",
                name: "NHK (Japan Broadcasting Corporation)",
                url: "https://www.nhk.or.jp/",
                logo: "https://www.nhk.or.jp/nhk-600x600.png",
              },
            },
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "NHK (Japan Broadcasting Corporation)",
              url: "https://www.nhk.or.jp/",
              logo: "https://www.nhk.or.jp/nhk-600x600.png",
            },
          ],
          nol: {
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "NHK (Japan Broadcasting Corporation)",
            url: "https://www.nhk.or.jp/",
            logo: "https://www.nhk.or.jp/nhk-600x600.png",
          },
        };
      },
      951: function (t) {
        "use strict";
        var e = {
          insert_css: function (t) {
            var n, o, r, i, s, a;
            e.console.info("💉insert_css:", t),
              (o = "link"),
              (r = t =
                ("/" === t.charAt(0) ? window.nol_tools.origin : "") + t),
              (i = (n = document).createElement(o)),
              (s = n.getElementsByTagName(o)),
              (a = n.getElementsByTagName("head")[0]),
              (i.rel = "stylesheet"),
              (i.href = r),
              s.length > 0
                ? s[0].parentNode.insertBefore(i, s[0])
                : a.appendChild(i);
          },
          insert_js: function (t, n, o) {
            var r, i, s, a, c;
            e.console.info("💉insert_js:", t, n, o),
              (i = "script"),
              (s = t =
                ("/" === t.charAt(0) ? window.nol_tools.origin : "") + t),
              (a = (r = document).createElement(i)),
              (c = r.getElementsByTagName(i)[0]),
              (a.src = s),
              (a.type = "text/javascript"),
              (a.charset = "utf-8"),
              n && (a.async = !0),
              o && (a.onload = o),
              c.parentNode.insertBefore(a, c);
          },
          insert_schema: function (t) {
            var n, o, r, i;
            e.console.info("💉insert_schema:", t),
              (o = "script"),
              (r = (n = document).createElement(o)),
              (i = n.getElementsByTagName(o)[0]),
              (r.type = "application/ld+json"),
              (r.textContent = JSON.stringify(t)),
              i.parentNode.insertBefore(r, i);
          },
          insert_schema_handler: function (t) {
            return function (n) {
              e.insert_schema(t);
            };
          },
          console: {},
        };
        (e.console.log = function (t) {
          if (
            window.nol_tools.debug &&
            window.console &&
            "function" == typeof window.console.log
          )
            try {
              window.console.log.apply(this, arguments);
            } catch (t) {}
        }),
          (e.console.info = function (t) {
            if (
              window.nol_tools.debug &&
              window.console &&
              "function" == typeof window.console.info
            )
              try {
                window.console.info.apply(this, arguments);
              } catch (t) {}
          }),
          (e.console.warn = function (t) {
            if (
              window.nol_tools.debug &&
              window.console &&
              "function" == typeof window.console.warn
            )
              try {
                window.console.warn.apply(this, arguments);
              } catch (t) {}
          }),
          (e.console.error = function (t) {
            if (
              window.nol_tools.debug &&
              window.console &&
              "function" == typeof window.console.error
            )
              try {
                window.console.error.apply(this, arguments);
              } catch (t) {}
          }),
          (e.console.debug = function (t) {
            if (
              window.nol_tools.debug &&
              window.console &&
              "function" == typeof window.console.debug
            )
              try {
                window.console.debug.apply(this, arguments);
              } catch (t) {}
          }),
          (e.console.logo = function (t) {
            if (
              window.parent === window &&
              window.console &&
              "function" == typeof window.console.log
            )
              try {
                window.console.log(
                  '%cMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMM@!_TMMMM" ?MMMMD`?MMMM#! TMMMM^ 7MMMM"!7MMMM\nMMMMMM`   ?MMF   MMMF   gMMM!  .MMM^  .M"`   .MMMM\nMMMMMt     ,@   -MMM`   ````   MMMF       ..MMMMMM\nMMMMF   (,     .MMMt   ....   (MM#   .   .WMMMMMMM\nMMMM`  .MMe    MMMF   JMMM\'  .MMM  .MN,   ,MMMMMMM\nMMMN, .MMMMb..-MMMh,..MMMM,..MMMMa..dMMMN,..MMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n',
                  "color: blue"
                );
              } catch (t) {}
          }),
          (t.exports = e);
      },
      964: function (t, e, n) {
        t.exports = (function () {
          "use strict";
          function t(t) {
            return "function" == typeof t;
          }
          var e = Array.isArray
              ? Array.isArray
              : function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
            o = 0,
            r = void 0,
            i = void 0,
            s = function (t, e) {
              (d[o] = t), (d[o + 1] = e), 2 === (o += 2) && (i ? i(p) : m());
            };
          var a = "undefined" != typeof window ? window : void 0,
            c = a || {},
            u = c.MutationObserver || c.WebKitMutationObserver,
            l =
              "undefined" == typeof self &&
              "undefined" != typeof process &&
              "[object process]" === {}.toString.call(process),
            h =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel;
          function f() {
            var t = setTimeout;
            return function () {
              return t(p, 1);
            };
          }
          var d = new Array(1e3);
          function p() {
            for (var t = 0; t < o; t += 2)
              (0, d[t])(d[t + 1]), (d[t] = void 0), (d[t + 1] = void 0);
            o = 0;
          }
          var M,
            w,
            y,
            b,
            m = void 0;
          function g(t, e) {
            var n = this,
              o = new this.constructor(T);
            void 0 === o[v] && F(o);
            var r = n._state;
            if (r) {
              var i = arguments[r - 1];
              s(function () {
                return P(r, o, i, n._result);
              });
            } else N(n, o, t, e);
            return o;
          }
          function _(t) {
            if (t && "object" == typeof t && t.constructor === this) return t;
            var e = new this(T);
            return B(e, t), e;
          }
          m = l
            ? function () {
                return process.nextTick(p);
              }
            : u
            ? ((w = 0),
              (y = new u(p)),
              (b = document.createTextNode("")),
              y.observe(b, { characterData: !0 }),
              function () {
                b.data = w = ++w % 2;
              })
            : h
            ? (((M = new MessageChannel()).port1.onmessage = p),
              function () {
                return M.port2.postMessage(0);
              })
            : void 0 === a
            ? (function () {
                try {
                  var t = Function("return this")().require("vertx");
                  return void 0 !== (r = t.runOnLoop || t.runOnContext)
                    ? function () {
                        r(p);
                      }
                    : f();
                } catch (t) {
                  return f();
                }
              })()
            : f();
          var v = Math.random().toString(36).substring(2);
          function T() {}
          var A = void 0,
            E = 1,
            j = 2;
          function x(e, n, o) {
            n.constructor === e.constructor &&
            o === g &&
            n.constructor.resolve === _
              ? (function (t, e) {
                  e._state === E
                    ? O(t, e._result)
                    : e._state === j
                    ? S(t, e._result)
                    : N(
                        e,
                        void 0,
                        function (e) {
                          return B(t, e);
                        },
                        function (e) {
                          return S(t, e);
                        }
                      );
                })(e, n)
              : void 0 === o
              ? O(e, n)
              : t(o)
              ? (function (t, e, n) {
                  s(function (t) {
                    var o = !1,
                      r = (function (t, e, n, o) {
                        try {
                          t.call(e, n, o);
                        } catch (t) {
                          return t;
                        }
                      })(
                        n,
                        e,
                        function (n) {
                          o || ((o = !0), e !== n ? B(t, n) : O(t, n));
                        },
                        function (e) {
                          o || ((o = !0), S(t, e));
                        },
                        t._label
                      );
                    !o && r && ((o = !0), S(t, r));
                  }, t);
                })(e, n, o)
              : O(e, n);
          }
          function B(t, e) {
            if (t === e)
              S(t, new TypeError("You cannot resolve a promise with itself"));
            else if (
              ((r = typeof (o = e)),
              null === o || ("object" !== r && "function" !== r))
            )
              O(t, e);
            else {
              var n = void 0;
              try {
                n = e.then;
              } catch (e) {
                return void S(t, e);
              }
              x(t, e, n);
            }
            var o, r;
          }
          function k(t) {
            t._onerror && t._onerror(t._result), C(t);
          }
          function O(t, e) {
            t._state === A &&
              ((t._result = e),
              (t._state = E),
              0 !== t._subscribers.length && s(C, t));
          }
          function S(t, e) {
            t._state === A && ((t._state = j), (t._result = e), s(k, t));
          }
          function N(t, e, n, o) {
            var r = t._subscribers,
              i = r.length;
            (t._onerror = null),
              (r[i] = e),
              (r[i + E] = n),
              (r[i + j] = o),
              0 === i && t._state && s(C, t);
          }
          function C(t) {
            var e = t._subscribers,
              n = t._state;
            if (0 !== e.length) {
              for (
                var o = void 0, r = void 0, i = t._result, s = 0;
                s < e.length;
                s += 3
              )
                (o = e[s]), (r = e[s + n]), o ? P(n, o, r, i) : r(i);
              t._subscribers.length = 0;
            }
          }
          function P(e, n, o, r) {
            var i = t(o),
              s = void 0,
              a = void 0,
              c = !0;
            if (i) {
              try {
                s = o(r);
              } catch (t) {
                (c = !1), (a = t);
              }
              if (n === s)
                return void S(
                  n,
                  new TypeError(
                    "A promises callback cannot return that same promise."
                  )
                );
            } else s = r;
            n._state !== A ||
              (i && c
                ? B(n, s)
                : !1 === c
                ? S(n, a)
                : e === E
                ? O(n, s)
                : e === j && S(n, s));
          }
          var R = 0;
          function F(t) {
            (t[v] = R++),
              (t._state = void 0),
              (t._result = void 0),
              (t._subscribers = []);
          }
          var U = (function () {
            function t(t, n) {
              (this._instanceConstructor = t),
                (this.promise = new t(T)),
                this.promise[v] || F(this.promise),
                e(n)
                  ? ((this.length = n.length),
                    (this._remaining = n.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? O(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(n),
                        0 === this._remaining && O(this.promise, this._result)))
                  : S(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (t.prototype._enumerate = function (t) {
                for (var e = 0; this._state === A && e < t.length; e++)
                  this._eachEntry(t[e], e);
              }),
              (t.prototype._eachEntry = function (t, e) {
                var n = this._instanceConstructor,
                  o = n.resolve;
                if (o === _) {
                  var r = void 0,
                    i = void 0,
                    s = !1;
                  try {
                    r = t.then;
                  } catch (t) {
                    (s = !0), (i = t);
                  }
                  if (r === g && t._state !== A)
                    this._settledAt(t._state, e, t._result);
                  else if ("function" != typeof r)
                    this._remaining--, (this._result[e] = t);
                  else if (n === D) {
                    var a = new n(T);
                    s ? S(a, i) : x(a, t, r), this._willSettleAt(a, e);
                  } else
                    this._willSettleAt(
                      new n(function (e) {
                        return e(t);
                      }),
                      e
                    );
                } else this._willSettleAt(o(t), e);
              }),
              (t.prototype._settledAt = function (t, e, n) {
                var o = this.promise;
                o._state === A &&
                  (this._remaining--,
                  t === j ? S(o, n) : (this._result[e] = n)),
                  0 === this._remaining && O(o, this._result);
              }),
              (t.prototype._willSettleAt = function (t, e) {
                var n = this;
                N(
                  t,
                  void 0,
                  function (t) {
                    return n._settledAt(E, e, t);
                  },
                  function (t) {
                    return n._settledAt(j, e, t);
                  }
                );
              }),
              t
            );
          })();
          var D = (function () {
            function e(t) {
              (this[v] = R++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                T !== t &&
                  ("function" != typeof t &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof e
                    ? (function (t, e) {
                        try {
                          e(
                            function (e) {
                              B(t, e);
                            },
                            function (e) {
                              S(t, e);
                            }
                          );
                        } catch (e) {
                          S(t, e);
                        }
                      })(this, t)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function (t) {
                return this.then(null, t);
              }),
              (e.prototype.finally = function (e) {
                var n = this,
                  o = n.constructor;
                return t(e)
                  ? n.then(
                      function (t) {
                        return o.resolve(e()).then(function () {
                          return t;
                        });
                      },
                      function (t) {
                        return o.resolve(e()).then(function () {
                          throw t;
                        });
                      }
                    )
                  : n.then(e, e);
              }),
              e
            );
          })();
          return (
            (D.prototype.then = g),
            (D.all = function (t) {
              return new U(this, t).promise;
            }),
            (D.race = function (t) {
              var n = this;
              return e(t)
                ? new n(function (e, o) {
                    for (var r = t.length, i = 0; i < r; i++)
                      n.resolve(t[i]).then(e, o);
                  })
                : new n(function (t, e) {
                    return e(new TypeError("You must pass an array to race."));
                  });
            }),
            (D.resolve = _),
            (D.reject = function (t) {
              var e = new this(T);
              return S(e, t), e;
            }),
            (D._setScheduler = function (t) {
              i = t;
            }),
            (D._setAsap = function (t) {
              s = t;
            }),
            (D._asap = s),
            (D.polyfill = function () {
              var t = void 0;
              if (void 0 !== n.g) t = n.g;
              else if ("undefined" != typeof self) t = self;
              else
                try {
                  t = Function("return this")();
                } catch (t) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var e = t.Promise;
              if (e) {
                var o = null;
                try {
                  o = Object.prototype.toString.call(e.resolve());
                } catch (t) {}
                if ("[object Promise]" === o && !e.cast) return;
              }
              t.Promise = D;
            }),
            (D.Promise = D),
            D
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var t = n(964),
        e =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== n.g && n.g) ||
          {},
        o = "URLSearchParams" in e,
        r = "Symbol" in e && "iterator" in Symbol,
        i =
          "FileReader" in e &&
          "Blob" in e &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        s = "FormData" in e,
        a = "ArrayBuffer" in e;
      if (a)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          u =
            ArrayBuffer.isView ||
            function (t) {
              return t && c.indexOf(Object.prototype.toString.call(t)) > -1;
            };
      function l(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
        )
          throw new TypeError(
            'Invalid character in header field name: "' + t + '"'
          );
        return t.toLowerCase();
      }
      function h(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function f(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return { done: void 0 === e, value: e };
          },
        };
        return (
          r &&
            (e[Symbol.iterator] = function () {
              return e;
            }),
          e
        );
      }
      function d(t) {
        (this.map = {}),
          t instanceof d
            ? t.forEach(function (t, e) {
                this.append(e, t);
              }, this)
            : Array.isArray(t)
            ? t.forEach(function (t) {
                if (2 != t.length)
                  throw new TypeError(
                    "Headers constructor: expected name/value pair to be length 2, found" +
                      t.length
                  );
                this.append(t[0], t[1]);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
      }
      function p(e) {
        if (!e._noBody)
          return e.bodyUsed
            ? t.reject(new TypeError("Already read"))
            : void (e.bodyUsed = !0);
      }
      function M(e) {
        return new t(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function w(t) {
        var e = new FileReader(),
          n = M(e);
        return e.readAsArrayBuffer(t), n;
      }
      function y(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }
      function b() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            var e;
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = t),
              t
                ? "string" == typeof t
                  ? (this._bodyText = t)
                  : i && Blob.prototype.isPrototypeOf(t)
                  ? (this._bodyBlob = t)
                  : s && FormData.prototype.isPrototypeOf(t)
                  ? (this._bodyFormData = t)
                  : o && URLSearchParams.prototype.isPrototypeOf(t)
                  ? (this._bodyText = t.toString())
                  : a && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                  ? ((this._bodyArrayBuffer = y(t.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : a && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t))
                  ? (this._bodyArrayBuffer = y(t))
                  : (this._bodyText = t = Object.prototype.toString.call(t))
                : ((this._noBody = !0), (this._bodyText = "")),
              this.headers.get("content-type") ||
                ("string" == typeof t
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : o &&
                    URLSearchParams.prototype.isPrototypeOf(t) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          i &&
            (this.blob = function () {
              var e = p(this);
              if (e) return e;
              if (this._bodyBlob) return t.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return t.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return t.resolve(new Blob([this._bodyText]));
            }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer)
              return (
                p(this) ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? t.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : t.resolve(this._bodyArrayBuffer))
              );
            if (i) return this.blob().then(w);
            throw new Error("could not read as ArrayBuffer");
          }),
          (this.text = function () {
            var e,
              n,
              o,
              r,
              i,
              s = p(this);
            if (s) return s;
            if (this._bodyBlob)
              return (
                (e = this._bodyBlob),
                (o = M((n = new FileReader()))),
                (i = (r = /charset=([A-Za-z0-9_-]+)/.exec(e.type))
                  ? r[1]
                  : "utf-8"),
                n.readAsText(e, i),
                o
              );
            if (this._bodyArrayBuffer)
              return t.resolve(
                (function (t) {
                  for (
                    var e = new Uint8Array(t), n = new Array(e.length), o = 0;
                    o < e.length;
                    o++
                  )
                    n[o] = String.fromCharCode(e[o]);
                  return n.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return t.resolve(this._bodyText);
          }),
          s &&
            (this.formData = function () {
              return this.text().then(_);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (d.prototype.append = function (t, e) {
        (t = l(t)), (e = h(e));
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e;
      }),
        (d.prototype.delete = function (t) {
          delete this.map[l(t)];
        }),
        (d.prototype.get = function (t) {
          return (t = l(t)), this.has(t) ? this.map[t] : null;
        }),
        (d.prototype.has = function (t) {
          return this.map.hasOwnProperty(l(t));
        }),
        (d.prototype.set = function (t, e) {
          this.map[l(t)] = h(e);
        }),
        (d.prototype.forEach = function (t, e) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
        }),
        (d.prototype.keys = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push(n);
            }),
            f(t)
          );
        }),
        (d.prototype.values = function () {
          var t = [];
          return (
            this.forEach(function (e) {
              t.push(e);
            }),
            f(t)
          );
        }),
        (d.prototype.entries = function () {
          var t = [];
          return (
            this.forEach(function (e, n) {
              t.push([n, e]);
            }),
            f(t)
          );
        }),
        r && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var m = [
        "CONNECT",
        "DELETE",
        "GET",
        "HEAD",
        "OPTIONS",
        "PATCH",
        "POST",
        "PUT",
        "TRACE",
      ];
      function g(t, n) {
        if (!(this instanceof g))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        var o,
          r,
          i = (n = n || {}).body;
        if (t instanceof g) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            n.headers || (this.headers = new d(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            (this.signal = t.signal),
            i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = String(t);
        if (
          ((this.credentials =
            n.credentials || this.credentials || "same-origin"),
          (!n.headers && this.headers) || (this.headers = new d(n.headers)),
          (this.method =
            ((r = (o = n.method || this.method || "GET").toUpperCase()),
            m.indexOf(r) > -1 ? r : o)),
          (this.mode = n.mode || this.mode || null),
          (this.signal =
            n.signal ||
            this.signal ||
            (function () {
              if ("AbortController" in e) return new AbortController().signal;
            })()),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && i)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(i),
          !(
            ("GET" !== this.method && "HEAD" !== this.method) ||
            ("no-store" !== n.cache && "no-cache" !== n.cache)
          ))
        ) {
          var s = /([?&])_=[^&]*/;
          s.test(this.url)
            ? (this.url = this.url.replace(s, "$1_=" + new Date().getTime()))
            : (this.url +=
                (/\?/.test(this.url) ? "&" : "?") +
                "_=" +
                new Date().getTime());
        }
      }
      function _(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              if (t) {
                var n = t.split("="),
                  o = n.shift().replace(/\+/g, " "),
                  r = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(o), decodeURIComponent(r));
              }
            }),
          e
        );
      }
      function v(t, e) {
        if (!(this instanceof v))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
          );
        if (
          (e || (e = {}),
          (this.type = "default"),
          (this.status = void 0 === e.status ? 200 : e.status),
          this.status < 200 || this.status > 599)
        )
          throw new RangeError(
            "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
          );
        (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = void 0 === e.statusText ? "" : "" + e.statusText),
          (this.headers = new d(e.headers)),
          (this.url = e.url || ""),
          this._initBody(t);
      }
      (g.prototype.clone = function () {
        return new g(this, { body: this._bodyInit });
      }),
        b.call(g.prototype),
        b.call(v.prototype),
        (v.prototype.clone = function () {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new d(this.headers),
            url: this.url,
          });
        }),
        (v.error = function () {
          var t = new v(null, { status: 200, statusText: "" });
          return (t.ok = !1), (t.status = 0), (t.type = "error"), t;
        });
      var T = [301, 302, 303, 307, 308];
      v.redirect = function (t, e) {
        if (-1 === T.indexOf(e)) throw new RangeError("Invalid status code");
        return new v(null, { status: e, headers: { location: t } });
      };
      var A = e.DOMException;
      try {
        new A();
      } catch (t) {
        ((A = function (t, e) {
          (this.message = t), (this.name = e);
          var n = Error(t);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
          (A.prototype.constructor = A);
      }
      function E(n, o) {
        return new t(function (t, r) {
          var s = new g(n, o);
          if (s.signal && s.signal.aborted)
            return r(new A("Aborted", "AbortError"));
          var c = new XMLHttpRequest();
          function u() {
            c.abort();
          }
          if (
            ((c.onload = function () {
              var e,
                n,
                o = {
                  statusText: c.statusText,
                  headers:
                    ((e = c.getAllResponseHeaders() || ""),
                    (n = new d()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split("\r")
                      .map(function (t) {
                        return 0 === t.indexOf("\n")
                          ? t.substr(1, t.length)
                          : t;
                      })
                      .forEach(function (t) {
                        var e = t.split(":"),
                          o = e.shift().trim();
                        if (o) {
                          var r = e.join(":").trim();
                          try {
                            n.append(o, r);
                          } catch (t) {
                            console.warn("Response " + t.message);
                          }
                        }
                      }),
                    n),
                };
              0 === s.url.indexOf("file://") &&
              (c.status < 200 || c.status > 599)
                ? (o.status = 200)
                : (o.status = c.status),
                (o.url =
                  "responseURL" in c
                    ? c.responseURL
                    : o.headers.get("X-Request-URL"));
              var r = "response" in c ? c.response : c.responseText;
              setTimeout(function () {
                t(new v(r, o));
              }, 0);
            }),
            (c.onerror = function () {
              setTimeout(function () {
                r(new TypeError("Network request failed"));
              }, 0);
            }),
            (c.ontimeout = function () {
              setTimeout(function () {
                r(new TypeError("Network request timed out"));
              }, 0);
            }),
            (c.onabort = function () {
              setTimeout(function () {
                r(new A("Aborted", "AbortError"));
              }, 0);
            }),
            c.open(
              s.method,
              (function (t) {
                try {
                  return "" === t && e.location.href ? e.location.href : t;
                } catch (e) {
                  return t;
                }
              })(s.url),
              !0
            ),
            "include" === s.credentials
              ? (c.withCredentials = !0)
              : "omit" === s.credentials && (c.withCredentials = !1),
            "responseType" in c &&
              (i
                ? (c.responseType = "blob")
                : a && (c.responseType = "arraybuffer")),
            o &&
              "object" == typeof o.headers &&
              !(
                o.headers instanceof d ||
                (e.Headers && o.headers instanceof e.Headers)
              ))
          ) {
            var f = [];
            Object.getOwnPropertyNames(o.headers).forEach(function (t) {
              f.push(l(t)), c.setRequestHeader(t, h(o.headers[t]));
            }),
              s.headers.forEach(function (t, e) {
                -1 === f.indexOf(e) && c.setRequestHeader(e, t);
              });
          } else
            s.headers.forEach(function (t, e) {
              c.setRequestHeader(e, t);
            });
          s.signal &&
            (s.signal.addEventListener("abort", u),
            (c.onreadystatechange = function () {
              4 === c.readyState && s.signal.removeEventListener("abort", u);
            })),
            c.send(void 0 === s._bodyInit ? null : s._bodyInit);
        });
      }
      (E.polyfill = !0),
        e.fetch ||
          ((e.fetch = E), (e.Headers = d), (e.Request = g), (e.Response = v));
    })(),
    (function () {
      "use strict";
      var t,
        e = n(402),
        o = n.n(e),
        r = n(951),
        i = n.n(r),
        s = n(485),
        a = n.n(s),
        c = n(253);
      if (
        ((window.nol_tools = i()),
        (window.nol_tools.config = c),
        (window.s_omni = null),
        (window._tc_onClick = function (t, e, n) {
          i().console.info("🆖_tc_onClick:", t, e, n);
        }),
        !(function () {
          if (
            "localhost" === window.location.hostname ||
            "127.0.0.1" === window.location.hostname ||
            window.location.hostname.match(/org/) ||
            !window.location.hostname.match(/(nhk\.or|nhk)\.jp$/)
          )
            return !1;
          var t = navigator.userAgent,
            e = 0;
          if (!t.match(/bot/i))
            for (e = 0; e < o().redirects.length; e++)
              if (location.href.match(new RegExp(o().redirects[e].match)))
                return (location.href = o().redirects[e].to), !0;
          if (!t.match(/bot/i))
            for (e = 0; e < o().replaces.length; e++)
              if (location.href.match(new RegExp(o().replaces[e].match)))
                return (
                  (location.href = location.href.replace(
                    new RegExp(o().replaces[e].regexp),
                    o().replaces[e].newSubStr
                  )),
                  !0
                );
          if ("http:" !== location.protocol) return !1;
          var n = /\bAndroid (\d+)/.exec(t);
          if (n && n[1] < 5) return !1;
          var r = "https:",
            i = document.getElementsByTagName("link");
          for (e = 0; e < i.length; e++)
            if ("canonical" === i[e].rel && 0 === i[e].href.indexOf(r))
              return (
                (location.href = location.href.replace(location.protocol, r)),
                !0
              );
          return !1;
        })())
      ) {
        if (
          ((window.nol_tools.DNT =
            window.nol_tools.DNT ||
            "yes" === navigator.doNotTrack ||
            "1" === navigator.doNotTrack ||
            "1" === window.doNotTrack ||
            "1" === navigator.msDoNotTrack),
          (window.nol_tools.origin =
            window.nol_tools.origin || window.nol_origin || ""),
          (window.nol_tools.debug = window.nol_tools.debug || !1),
          (window.nol_tools.iframe = window.nol_tools.iframe || !1),
          (window.nol_tools.webview = window.nol_tools.webview || !1),
          window.parent !== window &&
            ((window.nol_tools.iframe = !0),
            (window._tc_isPageTracking = function () {
              return !1;
            })),
          navigator.userAgent.match(/\bNHK[\w ]+\/\d/) &&
            ((window.nol_tools.webview = !0),
            ((t = document.createElement("style")).type = "text/css"),
            document.getElementsByTagName("head")[0].appendChild(t),
            t.sheet.insertRule(
              "#nol_header, #nol_footer, #nolCmnHeaderSection, #nolCmnFooterSection, #nolSpCmnHeader2, #nolSpCmnFooter2 { display: none; width: 0; max-width: 0; visibility: hidden; opacity: 0 }",
              0
            )),
          window.console &&
            !window.nol_tools.debug &&
            location.hostname.match(/(stg|dev)/) &&
            (window.nol_tools.debug = !0),
          window.nol_tools.origin ||
            location.hostname.match(/nhk\.or\.jp$/) ||
            (window.nol_tools.origin = "https://www.nhk.or.jp"),
          !window.nol_tools.iframe)
        ) {
          var u = a().nol;
          "/" === location.pathname && (u = a().top),
            window.addEventListener(
              "DOMContentLoaded",
              window.nol_tools.insert_schema_handler(u)
            );
        }
        var l = document.getElementsByTagName("html")[0];
        l.lang || (l.lang = "ja");
      }
    })();
})();
