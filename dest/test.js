function sliderHome() {
    let t = $(".scslider__list"),
        i = $(".scslider__bottom-paging span"),
        n = $(".scslider__bottom-paging");
    t.flickity({
        wrapAround: !0,
        contain: !0,
        prevNextButtons: !1,
        pageDots: !0,
        autoPlay: 5e3,
        pauseAutoPlayOnHover: !1,
        on: {
            change(e) {
                let t = e + 1;
                i.html(t.toString().padStart(2, 0));
            },
            ready() {
                var e = $(".flickity-page-dots");
                n.append(e);
            },
        },
    }),
        $(".btn-control.--prev").on("click", function (e) {
            e.preventDefault(), t.flickity("previous");
        }),
        $(".btn-control.--next").on("click", function (e) {
            e.preventDefault(), t.flickity("next");
        });
}
function galleryLight() {
    lightGallery(document.querySelector(".scgallery__list"), {
        thumbnail: !0,
        getCaptionFromTitleOrAlt: !1,
    });
}
function showSliderDrag() {
    let e = $(".slider-list");
    e.flickity({
        freeScroll: !0,
        contain: !0,
        prevNextButtons: !1,
        pageDots: !1,
        lazyLoad: 4,
    }),
        e.on("scroll.flickity", function (e, t) {
            t = 100 * t + "%";
            $(".timeline").css("width", t);
        });
}
function parallax() {
    $(".parallax").each(function () {
        $(this).parallaxie({ speed: 0.5 });
    });
}

function removeClassActiveMenu(e) {
    e.forEach((e) => e.classList.remove("active"));
}

function handleScrollMenu() {
    let s = document.querySelectorAll(".header__menu li a"),
        e = document.querySelectorAll(".navbar ul li a"),
        r = document.querySelector(".header").offsetHeight,
        o = [];
    e.forEach((e) => {
        var t = e.getAttribute("href").slice(1);
        let i = document.querySelector(".sc" + t);
        e.addEventListener("click", function (e) {
            e.preventDefault(),
                $("html, body")[0].scrollTo({ top: i.offsetTop + 1 }),
                $(".header__right .hamburger").removeClass("active"),
                $("nav").removeClass("active");
        });
    }),
        s.forEach((e, t) => {
            var i = e.getAttribute("href").slice(1);
            let n = document.querySelector(".sc" + i);
            o.push(n),
                e.addEventListener("click", function (e) {
                    e.preventDefault(),
                        $("html, body")[0].scrollTo({
                            top: n.offsetTop - r + 1,
                        }),
                        removeClassActiveMenu(s),
                        this.classList.add("active");
                });
        }),
        window.addEventListener("scroll", function () {
            let i = window.scrollY;
            o.forEach((e, t) => {
                i > e.offsetTop - r && i < e.offsetTop + e.offsetHeight
                    ? (removeClassActiveMenu(s), s[t].classList.add("active"))
                    : s[t].classList.remove("active");
            });
        });
}

function handleFixedMenu() {
    let e = document.querySelector(".header"),
        t = e.offsetHeight,
        i = document.querySelector(".scslider").offsetHeight;
    window.addEventListener("scroll", () => {
        window.scrollY > i - t
            ? e.classList.add("--fixed")
            : e.classList.remove("--fixed");
    });
}
function handleBackToTop() {
    let e = $(".btn-totop");
    e.click(function (e) {
        e.preventDefault(), $("html, body")[0].scrollTo({ top: 0 });
    });
}
function onChangeLanguage() {
    let e = $(".lang .lang__current"),
        t = $(".lang .lang__list li span"),
        i = $(".lang");
    i.click(function (e) {
        e.stopPropagation(),
            $(this).hasClass("open-lang")
                ? $(this).removeClass("open-lang")
                : $(this).addClass("open-lang");
    }),
        $(document).click(function () {
            i.removeClass("open-lang");
        }),
        t.click(function () {
            e.html($(this).html());
        });
}
function handleMenuMobile() {
    let t = $("nav"),
        e = $(".header__right .hamburger");
    e.on("click", function (e) {
        e.stopPropagation(),
            $(this).toggleClass("active"),
            t.toggleClass("active");
    }),
        $(window).resize(function () {
            e.hasClass("active") &&
                992 <= $(window).innerWidth() &&
                (e.removeClass("active"), t.removeClass("active"));
        });
}
function handlePopupModal() {
    let e = document.querySelectorAll(
            ".scvideo__list .scvideo__list-item .scvideo__thumbnail"
        ),
        t = document.querySelector(".modal"),
        i = document.querySelector(".modal .modal__content iframe"),
        n = document.querySelector(".modal__close"),
        s = document.querySelector(".scintro .scintro__content a");
    s.addEventListener("click", function (e) {
        e.preventDefault(), t.classList.add("open-modal");
        e = this.dataset.id;
        i.setAttribute(
            "src",
            `https://www.youtube.com/embed/${e}?rel=0&autoplay=1`
        );
    }),
        console.log(e),
        e.forEach((e) => {
            e.addEventListener("click", function () {
                t.classList.add("open-modal");
                var e = this.dataset.id;
                i.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${e}?rel=0&autoplay=1`
                );
            });
        }),
        n.addEventListener("click", function () {
            t.classList.remove("open-modal"), i.setAttribute("src", null);
        }),
        window.addEventListener("keyup", function (e) {
            27 === e.keyCode &&
                (t.classList.remove("open-modal"), i.setAttribute("src", null));
        });
}
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (e.document) return t(e);
                    throw new Error("jQuery requires a window with a document");
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, N) {
    "use strict";
    function y(e) {
        return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
        );
    }
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        _ = Object.getPrototypeOf,
        a = t.slice,
        j = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        q = t.push,
        H = t.indexOf,
        B = {},
        F = B.toString,
        W = B.hasOwnProperty,
        G = W.toString,
        R = G.call(Object),
        m = {},
        E = C.document,
        X = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function V(e, t, i) {
        var n,
            s,
            r = (i = i || E).createElement("script");
        if (((r.text = e), t))
            for (n in X)
                (s = t[n] || (t.getAttribute && t.getAttribute(n))) &&
                    r.setAttribute(n, s);
        i.head.appendChild(r).parentNode.removeChild(r);
    }
    function f(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? B[F.call(e)] || "object"
            : typeof e;
    }
    var e = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function Y(e) {
        var t = !!e && "length" in e && e.length,
            i = f(e);
        return (
            !y(e) &&
            !g(e) &&
            ("array" === i ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (S.fn = S.prototype =
        {
            jquery: e,
            constructor: S,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (e) {
                return null == e
                    ? a.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                e = S.merge(this.constructor(), e);
                return (e.prevObject = this), e;
            },
            each: function (e) {
                return S.each(this, e);
            },
            map: function (i) {
                return this.pushStack(
                    S.map(this, function (e, t) {
                        return i.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    S.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: q,
            sort: t.sort,
            splice: t.splice,
        }),
        (S.extend = S.fn.extend =
            function () {
                var e,
                    t,
                    i,
                    n,
                    s,
                    r = arguments[0] || {},
                    o = 1,
                    a = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof r &&
                        ((l = r), (r = arguments[o] || {}), o++),
                        "object" == typeof r || y(r) || (r = {}),
                        o === a && ((r = this), o--);
                    o < a;
                    o++
                )
                    if (null != (e = arguments[o]))
                        for (t in e)
                            (i = e[t]),
                                "__proto__" !== t &&
                                    r !== i &&
                                    (l &&
                                    i &&
                                    (S.isPlainObject(i) ||
                                        (n = Array.isArray(i)))
                                        ? ((s = r[t]),
                                          (s =
                                              n && !Array.isArray(s)
                                                  ? []
                                                  : n || S.isPlainObject(s)
                                                  ? s
                                                  : {}),
                                          (n = !1),
                                          (r[t] = S.extend(l, s, i)))
                                        : void 0 !== i && (r[t] = i));
                return r;
            }),
        S.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(
                    !e ||
                    "[object Object]" !== F.call(e) ||
                    ((e = _(e)) &&
                        ("function" !=
                            typeof (e =
                                W.call(e, "constructor") && e.constructor) ||
                            G.call(e) !== R))
                );
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, i) {
                V(e, { nonce: t && t.nonce }, i);
            },
            each: function (e, t) {
                var i,
                    n = 0;
                if (Y(e))
                    for (
                        i = e.length;
                        n < i && !1 !== t.call(e[n], n, e[n]);
                        n++
                    );
                else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return (
                    null != e &&
                        (Y(Object(e))
                            ? S.merge(t, "string" == typeof e ? [e] : e)
                            : q.call(t, e)),
                    t
                );
            },
            inArray: function (e, t, i) {
                return null == t ? -1 : H.call(t, e, i);
            },
            merge: function (e, t) {
                for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                    e[s++] = t[n];
                return (e.length = s), e;
            },
            grep: function (e, t, i) {
                for (var n = [], s = 0, r = e.length, o = !i; s < r; s++)
                    !t(e[s], s) != o && n.push(e[s]);
                return n;
            },
            map: function (e, t, i) {
                var n,
                    s,
                    r = 0,
                    o = [];
                if (Y(e))
                    for (n = e.length; r < n; r++)
                        null != (s = t(e[r], r, i)) && o.push(s);
                else for (r in e) null != (s = t(e[r], r, i)) && o.push(s);
                return j(o);
            },
            guid: 1,
            support: m,
        }),
        "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                B["[object " + t + "]"] = t.toLowerCase();
            }
        );
    function n(e, t, i) {
        for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (s && S(e).is(i)) break;
                n.push(e);
            }
        return n;
    }
    function U(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i;
    }
    var e = (function (N) {
            function u(e, t) {
                return (
                    (e = "0x" + e.slice(1) - 65536),
                    t ||
                        (e < 0
                            ? String.fromCharCode(65536 + e)
                            : String.fromCharCode(
                                  (e >> 10) | 55296,
                                  (1023 & e) | 56320
                              ))
                );
            }
            function _(e, t) {
                return t
                    ? "\0" === e
                        ? "�"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            }
            function j() {
                C();
            }
            var e,
                p,
                w,
                r,
                q,
                h,
                H,
                B,
                x,
                l,
                d,
                C,
                E,
                i,
                S,
                f,
                n,
                s,
                g,
                T = "sizzle" + +new Date(),
                c = N.document,
                k = 0,
                F = 0,
                W = L(),
                G = L(),
                R = L(),
                m = L(),
                X = function (e, t) {
                    return e === t && (d = !0), 0;
                },
                V = {}.hasOwnProperty,
                t = [],
                Y = t.pop,
                U = t.push,
                M = t.push,
                Q = t.slice,
                y = function (e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1;
                },
                K =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                o = "[\\x20\\t\\r\\n\\f]",
                a =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    o +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                J =
                    "\\[" +
                    o +
                    "*(" +
                    a +
                    ")(?:" +
                    o +
                    "*([*^$|!~]?=)" +
                    o +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    a +
                    "))|)" +
                    o +
                    "*\\]",
                Z =
                    ":(" +
                    a +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    J +
                    ")*)|.*)\\)|)",
                ee = new RegExp(o + "+", "g"),
                v = new RegExp(
                    "^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$",
                    "g"
                ),
                te = new RegExp("^" + o + "*," + o + "*"),
                ie = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
                ne = new RegExp(o + "|>"),
                se = new RegExp(Z),
                re = new RegExp("^" + a + "$"),
                b = {
                    ID: new RegExp("^#(" + a + ")"),
                    CLASS: new RegExp("^\\.(" + a + ")"),
                    TAG: new RegExp("^(" + a + "|[*])"),
                    ATTR: new RegExp("^" + J),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            o +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            o +
                            "*(?:([+-]|)" +
                            o +
                            "*(\\d+)|))" +
                            o +
                            "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                            o +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            o +
                            "*((?:-\\d)?\\d*)" +
                            o +
                            "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                oe = /HTML$/i,
                ae = /^(?:input|select|textarea|button)$/i,
                le = /^h\d$/i,
                I = /^[^{]+\{\s*\[native \w/,
                de = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ce = /[+~]/,
                P = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + o + "?|\\\\([^\\r\\n\\f])",
                    "g"
                ),
                ue = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                pe = ye(
                    function (e) {
                        return (
                            !0 === e.disabled &&
                            "fieldset" === e.nodeName.toLowerCase()
                        );
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                M.apply((t = Q.call(c.childNodes)), c.childNodes),
                    t[c.childNodes.length].nodeType;
            } catch (e) {
                M = {
                    apply: t.length
                        ? function (e, t) {
                              U.apply(e, Q.call(t));
                          }
                        : function (e, t) {
                              for (
                                  var i = e.length, n = 0;
                                  (e[i++] = t[n++]);

                              );
                              e.length = i - 1;
                          },
                };
            }
            function D(e, t, i, n) {
                var s,
                    r,
                    o,
                    a,
                    l,
                    d,
                    c = t && t.ownerDocument,
                    u = t ? t.nodeType : 9;
                if (
                    ((i = i || []),
                    "string" != typeof e ||
                        !e ||
                        (1 !== u && 9 !== u && 11 !== u))
                )
                    return i;
                if (!n && (C(t), (t = t || E), S)) {
                    if (11 !== u && (a = de.exec(e)))
                        if ((s = a[1])) {
                            if (9 === u) {
                                if (!(d = t.getElementById(s))) return i;
                                if (d.id === s) return i.push(d), i;
                            } else if (
                                c &&
                                (d = c.getElementById(s)) &&
                                g(t, d) &&
                                d.id === s
                            )
                                return i.push(d), i;
                        } else {
                            if (a[2])
                                return M.apply(i, t.getElementsByTagName(e)), i;
                            if (
                                (s = a[3]) &&
                                p.getElementsByClassName &&
                                t.getElementsByClassName
                            )
                                return (
                                    M.apply(i, t.getElementsByClassName(s)), i
                                );
                        }
                    if (
                        p.qsa &&
                        !m[e + " "] &&
                        (!f || !f.test(e)) &&
                        (1 !== u || "object" !== t.nodeName.toLowerCase())
                    ) {
                        if (
                            ((d = e),
                            (c = t),
                            1 === u && (ne.test(e) || ie.test(e)))
                        ) {
                            for (
                                ((c = (ce.test(e) && me(t.parentNode)) || t) ===
                                    t &&
                                    p.scope) ||
                                    ((o = t.getAttribute("id"))
                                        ? (o = o.replace(ue, _))
                                        : t.setAttribute("id", (o = T))),
                                    r = (l = h(e)).length;
                                r--;

                            )
                                l[r] = (o ? "#" + o : ":scope") + " " + O(l[r]);
                            d = l.join(",");
                        }
                        try {
                            return M.apply(i, c.querySelectorAll(d)), i;
                        } catch (t) {
                            m(e, !0);
                        } finally {
                            o === T && t.removeAttribute("id");
                        }
                    }
                }
                return B(e.replace(v, "$1"), t, i, n);
            }
            function L() {
                var n = [];
                return function e(t, i) {
                    return (
                        n.push(t + " ") > w.cacheLength && delete e[n.shift()],
                        (e[t + " "] = i)
                    );
                };
            }
            function A(e) {
                return (e[T] = !0), e;
            }
            function $(e) {
                var t = E.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                }
            }
            function he(e, t) {
                for (var i = e.split("|"), n = i.length; n--; )
                    w.attrHandle[i[n]] = t;
            }
            function fe(e, t) {
                var i = t && e,
                    n =
                        i &&
                        1 === e.nodeType &&
                        1 === t.nodeType &&
                        e.sourceIndex - t.sourceIndex;
                if (n) return n;
                if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
                return e ? 1 : -1;
            }
            function ge(t) {
                return function (e) {
                    return "form" in e
                        ? e.parentNode && !1 === e.disabled
                            ? "label" in e
                                ? "label" in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t ||
                                  (e.isDisabled !== !t && pe(e) === t)
                            : e.disabled === t
                        : "label" in e && e.disabled === t;
                };
            }
            function z(o) {
                return A(function (r) {
                    return (
                        (r = +r),
                        A(function (e, t) {
                            for (
                                var i, n = o([], e.length, r), s = n.length;
                                s--;

                            )
                                e[(i = n[s])] && (e[i] = !(t[i] = e[i]));
                        })
                    );
                });
            }
            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((p = D.support = {}),
            (q = D.isXML =
                function (e) {
                    var t = e && e.namespaceURI,
                        e = e && (e.ownerDocument || e).documentElement;
                    return !oe.test(t || (e && e.nodeName) || "HTML");
                }),
            (C = D.setDocument =
                function (e) {
                    var e = e ? e.ownerDocument || e : c;
                    return (
                        e != E &&
                            9 === e.nodeType &&
                            e.documentElement &&
                            ((i = (E = e).documentElement),
                            (S = !q(E)),
                            c != E &&
                                (e = E.defaultView) &&
                                e.top !== e &&
                                (e.addEventListener
                                    ? e.addEventListener("unload", j, !1)
                                    : e.attachEvent &&
                                      e.attachEvent("onunload", j)),
                            (p.scope = $(function (e) {
                                return (
                                    i
                                        .appendChild(e)
                                        .appendChild(E.createElement("div")),
                                    void 0 !== e.querySelectorAll &&
                                        !e.querySelectorAll(
                                            ":scope fieldset div"
                                        ).length
                                );
                            })),
                            (p.attributes = $(function (e) {
                                return (
                                    (e.className = "i"),
                                    !e.getAttribute("className")
                                );
                            })),
                            (p.getElementsByTagName = $(function (e) {
                                return (
                                    e.appendChild(E.createComment("")),
                                    !e.getElementsByTagName("*").length
                                );
                            })),
                            (p.getElementsByClassName = I.test(
                                E.getElementsByClassName
                            )),
                            (p.getById = $(function (e) {
                                return (
                                    (i.appendChild(e).id = T),
                                    !E.getElementsByName ||
                                        !E.getElementsByName(T).length
                                );
                            })),
                            p.getById
                                ? ((w.filter.ID = function (e) {
                                      var t = e.replace(P, u);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }),
                                  (w.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && S)
                                          return (t = t.getElementById(e))
                                              ? [t]
                                              : [];
                                  }))
                                : ((w.filter.ID = function (e) {
                                      var t = e.replace(P, u);
                                      return function (e) {
                                          e =
                                              void 0 !== e.getAttributeNode &&
                                              e.getAttributeNode("id");
                                          return e && e.value === t;
                                      };
                                  }),
                                  (w.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && S) {
                                          var i,
                                              n,
                                              s,
                                              r = t.getElementById(e);
                                          if (r) {
                                              if (
                                                  (i =
                                                      r.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  i.value === e
                                              )
                                                  return [r];
                                              for (
                                                  s = t.getElementsByName(e),
                                                      n = 0;
                                                  (r = s[n++]);

                                              )
                                                  if (
                                                      (i =
                                                          r.getAttributeNode(
                                                              "id"
                                                          )) &&
                                                      i.value === e
                                                  )
                                                      return [r];
                                          }
                                          return [];
                                      }
                                  })),
                            (w.find.TAG = p.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName
                                          ? t.getElementsByTagName(e)
                                          : p.qsa
                                          ? t.querySelectorAll(e)
                                          : void 0;
                                  }
                                : function (e, t) {
                                      var i,
                                          n = [],
                                          s = 0,
                                          r = t.getElementsByTagName(e);
                                      if ("*" !== e) return r;
                                      for (; (i = r[s++]); )
                                          1 === i.nodeType && n.push(i);
                                      return n;
                                  }),
                            (w.find.CLASS =
                                p.getElementsByClassName &&
                                function (e, t) {
                                    if (
                                        void 0 !== t.getElementsByClassName &&
                                        S
                                    )
                                        return t.getElementsByClassName(e);
                                }),
                            (n = []),
                            (f = []),
                            (p.qsa = I.test(E.querySelectorAll)) &&
                                ($(function (e) {
                                    var t;
                                    (i.appendChild(e).innerHTML =
                                        "<a id='" +
                                        T +
                                        "'></a><select id='" +
                                        T +
                                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll(
                                            "[msallowcapture^='']"
                                        ).length &&
                                            f.push(
                                                "[*^$]=" + o + "*(?:''|\"\")"
                                            ),
                                        e.querySelectorAll("[selected]")
                                            .length ||
                                            f.push(
                                                "\\[" +
                                                    o +
                                                    "*(?:value|" +
                                                    K +
                                                    ")"
                                            ),
                                        e.querySelectorAll("[id~=" + T + "-]")
                                            .length || f.push("~="),
                                        (t =
                                            E.createElement(
                                                "input"
                                            )).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']")
                                            .length ||
                                            f.push(
                                                "\\[" +
                                                    o +
                                                    "*name" +
                                                    o +
                                                    "*=" +
                                                    o +
                                                    "*(?:''|\"\")"
                                            ),
                                        e.querySelectorAll(":checked").length ||
                                            f.push(":checked"),
                                        e.querySelectorAll("a#" + T + "+*")
                                            .length || f.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        f.push("[\\r\\n\\f]");
                                }),
                                $(function (e) {
                                    e.innerHTML =
                                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = E.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e
                                            .appendChild(t)
                                            .setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length &&
                                            f.push("name" + o + "*[*^$|!~]?="),
                                        2 !==
                                            e.querySelectorAll(":enabled")
                                                .length &&
                                            f.push(":enabled", ":disabled"),
                                        (i.appendChild(e).disabled = !0),
                                        2 !==
                                            e.querySelectorAll(":disabled")
                                                .length &&
                                            f.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        f.push(",.*:");
                                })),
                            (p.matchesSelector = I.test(
                                (s =
                                    i.matches ||
                                    i.webkitMatchesSelector ||
                                    i.mozMatchesSelector ||
                                    i.oMatchesSelector ||
                                    i.msMatchesSelector)
                            )) &&
                                $(function (e) {
                                    (p.disconnectedMatch = s.call(e, "*")),
                                        s.call(e, "[s!='']:x"),
                                        n.push("!=", Z);
                                }),
                            (f = f.length && new RegExp(f.join("|"))),
                            (n = n.length && new RegExp(n.join("|"))),
                            (e = I.test(i.compareDocumentPosition)),
                            (g =
                                e || I.test(i.contains)
                                    ? function (e, t) {
                                          var i =
                                                  9 === e.nodeType
                                                      ? e.documentElement
                                                      : e,
                                              t = t && t.parentNode;
                                          return (
                                              e === t ||
                                              !(
                                                  !t ||
                                                  1 !== t.nodeType ||
                                                  !(i.contains
                                                      ? i.contains(t)
                                                      : e.compareDocumentPosition &&
                                                        16 &
                                                            e.compareDocumentPosition(
                                                                t
                                                            ))
                                              )
                                          );
                                      }
                                    : function (e, t) {
                                          if (t)
                                              for (; (t = t.parentNode); )
                                                  if (t === e) return !0;
                                          return !1;
                                      }),
                            (X = e
                                ? function (e, t) {
                                      return e === t
                                          ? ((d = !0), 0)
                                          : !e.compareDocumentPosition -
                                                !t.compareDocumentPosition ||
                                                (1 &
                                                    (i =
                                                        (e.ownerDocument ||
                                                            e) ==
                                                        (t.ownerDocument || t)
                                                            ? e.compareDocumentPosition(
                                                                  t
                                                              )
                                                            : 1) ||
                                                (!p.sortDetached &&
                                                    t.compareDocumentPosition(
                                                        e
                                                    ) === i)
                                                    ? e == E ||
                                                      (e.ownerDocument == c &&
                                                          g(c, e))
                                                        ? -1
                                                        : t == E ||
                                                          (t.ownerDocument ==
                                                              c &&
                                                              g(c, t))
                                                        ? 1
                                                        : l
                                                        ? y(l, e) - y(l, t)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1);
                                      var i;
                                  }
                                : function (e, t) {
                                      if (e === t) return (d = !0), 0;
                                      var i,
                                          n = 0,
                                          s = e.parentNode,
                                          r = t.parentNode,
                                          o = [e],
                                          a = [t];
                                      if (!s || !r)
                                          return e == E
                                              ? -1
                                              : t == E
                                              ? 1
                                              : s
                                              ? -1
                                              : r
                                              ? 1
                                              : l
                                              ? y(l, e) - y(l, t)
                                              : 0;
                                      if (s === r) return fe(e, t);
                                      for (i = e; (i = i.parentNode); )
                                          o.unshift(i);
                                      for (i = t; (i = i.parentNode); )
                                          a.unshift(i);
                                      for (; o[n] === a[n]; ) n++;
                                      return n
                                          ? fe(o[n], a[n])
                                          : o[n] == c
                                          ? -1
                                          : a[n] == c
                                          ? 1
                                          : 0;
                                  })),
                        E
                    );
                }),
            (D.matches = function (e, t) {
                return D(e, null, null, t);
            }),
            (D.matchesSelector = function (e, t) {
                if (
                    (C(e),
                    p.matchesSelector &&
                        S &&
                        !m[t + " "] &&
                        (!n || !n.test(t)) &&
                        (!f || !f.test(t)))
                )
                    try {
                        var i = s.call(e, t);
                        if (
                            i ||
                            p.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return i;
                    } catch (e) {
                        m(t, !0);
                    }
                return 0 < D(t, E, null, [e]).length;
            }),
            (D.contains = function (e, t) {
                return (e.ownerDocument || e) != E && C(e), g(e, t);
            }),
            (D.attr = function (e, t) {
                (e.ownerDocument || e) != E && C(e);
                var i = w.attrHandle[t.toLowerCase()],
                    i =
                        i && V.call(w.attrHandle, t.toLowerCase())
                            ? i(e, t, !S)
                            : void 0;
                return void 0 !== i
                    ? i
                    : p.attributes || !S
                    ? e.getAttribute(t)
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
            }),
            (D.escape = function (e) {
                return (e + "").replace(ue, _);
            }),
            (D.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (D.uniqueSort = function (e) {
                var t,
                    i = [],
                    n = 0,
                    s = 0;
                if (
                    ((d = !p.detectDuplicates),
                    (l = !p.sortStable && e.slice(0)),
                    e.sort(X),
                    d)
                ) {
                    for (; (t = e[s++]); ) t === e[s] && (n = i.push(s));
                    for (; n--; ) e.splice(i[n], 1);
                }
                return (l = null), e;
            }),
            (r = D.getText =
                function (e) {
                    var t,
                        i = "",
                        n = 0,
                        s = e.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                i += r(e);
                        } else if (3 === s || 4 === s) return e.nodeValue;
                    } else for (; (t = e[n++]); ) i += r(t);
                    return i;
                }),
            ((w = D.selectors =
                {
                    cacheLength: 50,
                    createPseudo: A,
                    match: b,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return (
                                (e[1] = e[1].replace(P, u)),
                                (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                    P,
                                    u
                                )),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                            );
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3)
                                    ? (e[3] || D.error(e[0]),
                                      (e[4] = +(e[4]
                                          ? e[5] + (e[6] || 1)
                                          : 2 *
                                            ("even" === e[3] ||
                                                "odd" === e[3]))),
                                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                    : e[3] && D.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                i = !e[6] && e[2];
                            return b.CHILD.test(e[0])
                                ? null
                                : (e[3]
                                      ? (e[2] = e[4] || e[5] || "")
                                      : i &&
                                        se.test(i) &&
                                        (t = h(i, !0)) &&
                                        (t =
                                            i.indexOf(")", i.length - t) -
                                            i.length) &&
                                        ((e[0] = e[0].slice(0, t)),
                                        (e[2] = i.slice(0, t))),
                                  e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(P, u).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return (
                                          e.nodeName &&
                                          e.nodeName.toLowerCase() === t
                                      );
                                  };
                        },
                        CLASS: function (e) {
                            var t = W[e + " "];
                            return (
                                t ||
                                ((t = new RegExp(
                                    "(^|" + o + ")" + e + "(" + o + "|$)"
                                )) &&
                                    W(e, function (e) {
                                        return t.test(
                                            ("string" == typeof e.className &&
                                                e.className) ||
                                                (void 0 !== e.getAttribute &&
                                                    e.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function (t, i, n) {
                            return function (e) {
                                e = D.attr(e, t);
                                return null == e
                                    ? "!=" === i
                                    : !i ||
                                          ((e += ""),
                                          "=" === i
                                              ? e === n
                                              : "!=" === i
                                              ? e !== n
                                              : "^=" === i
                                              ? n && 0 === e.indexOf(n)
                                              : "*=" === i
                                              ? n && -1 < e.indexOf(n)
                                              : "$=" === i
                                              ? n && e.slice(-n.length) === n
                                              : "~=" === i
                                              ? -1 <
                                                (
                                                    " " +
                                                    e.replace(ee, " ") +
                                                    " "
                                                ).indexOf(n)
                                              : "|=" === i &&
                                                (e === n ||
                                                    e.slice(0, n.length + 1) ===
                                                        n + "-"));
                            };
                        },
                        CHILD: function (f, e, t, g, m) {
                            var v = "nth" !== f.slice(0, 3),
                                y = "last" !== f.slice(-4),
                                b = "of-type" === e;
                            return 1 === g && 0 === m
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (e, t, i) {
                                      var n,
                                          s,
                                          r,
                                          o,
                                          a,
                                          l,
                                          d =
                                              v != y
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          c = e.parentNode,
                                          u = b && e.nodeName.toLowerCase(),
                                          p = !i && !b,
                                          h = !1;
                                      if (c) {
                                          if (v) {
                                              for (; d; ) {
                                                  for (o = e; (o = o[d]); )
                                                      if (
                                                          b
                                                              ? o.nodeName.toLowerCase() ===
                                                                u
                                                              : 1 === o.nodeType
                                                      )
                                                          return !1;
                                                  l = d =
                                                      "only" === f &&
                                                      !l &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((l = [
                                                  y
                                                      ? c.firstChild
                                                      : c.lastChild,
                                              ]),
                                              y && p)
                                          ) {
                                              for (
                                                  h =
                                                      (a =
                                                          (n =
                                                              (s =
                                                                  (r =
                                                                      (o = c)[
                                                                          T
                                                                      ] ||
                                                                      (o[T] =
                                                                          {}))[
                                                                      o.uniqueID
                                                                  ] ||
                                                                  (r[
                                                                      o.uniqueID
                                                                  ] = {}))[f] ||
                                                              [])[0] === k &&
                                                          n[1]) && n[2],
                                                      o = a && c.childNodes[a];
                                                  (o =
                                                      (++a && o && o[d]) ||
                                                      (h = a = 0) ||
                                                      l.pop());

                                              )
                                                  if (
                                                      1 === o.nodeType &&
                                                      ++h &&
                                                      o === e
                                                  ) {
                                                      s[f] = [k, a, h];
                                                      break;
                                                  }
                                          } else if (
                                              !1 ===
                                              (h = p
                                                  ? (a =
                                                        (n =
                                                            (s =
                                                                (r =
                                                                    (o = e)[
                                                                        T
                                                                    ] ||
                                                                    (o[T] =
                                                                        {}))[
                                                                    o.uniqueID
                                                                ] ||
                                                                (r[o.uniqueID] =
                                                                    {}))[f] ||
                                                            [])[0] === k &&
                                                        n[1])
                                                  : h)
                                          )
                                              for (
                                                  ;
                                                  (o =
                                                      (++a && o && o[d]) ||
                                                      (h = a = 0) ||
                                                      l.pop()) &&
                                                  ((b
                                                      ? o.nodeName.toLowerCase() !==
                                                        u
                                                      : 1 !== o.nodeType) ||
                                                      !++h ||
                                                      (p &&
                                                          ((s =
                                                              (r =
                                                                  o[T] ||
                                                                  (o[T] = {}))[
                                                                  o.uniqueID
                                                              ] ||
                                                              (r[o.uniqueID] =
                                                                  {}))[f] = [
                                                              k,
                                                              h,
                                                          ]),
                                                      o !== e));

                                              );
                                          return (
                                              (h -= m) === g ||
                                              (h % g == 0 && 0 <= h / g)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function (e, r) {
                            var t,
                                o =
                                    w.pseudos[e] ||
                                    w.setFilters[e.toLowerCase()] ||
                                    D.error("unsupported pseudo: " + e);
                            return o[T]
                                ? o(r)
                                : 1 < o.length
                                ? ((t = [e, e, "", r]),
                                  w.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? A(function (e, t) {
                                            for (
                                                var i,
                                                    n = o(e, r),
                                                    s = n.length;
                                                s--;

                                            )
                                                e[(i = y(e, n[s]))] = !(t[i] =
                                                    n[s]);
                                        })
                                      : function (e) {
                                            return o(e, 0, t);
                                        })
                                : o;
                        },
                    },
                    pseudos: {
                        not: A(function (e) {
                            var n = [],
                                s = [],
                                a = H(e.replace(v, "$1"));
                            return a[T]
                                ? A(function (e, t, i, n) {
                                      for (
                                          var s,
                                              r = a(e, null, n, []),
                                              o = e.length;
                                          o--;

                                      )
                                          (s = r[o]) && (e[o] = !(t[o] = s));
                                  })
                                : function (e, t, i) {
                                      return (
                                          (n[0] = e),
                                          a(n, null, i, s),
                                          (n[0] = null),
                                          !s.pop()
                                      );
                                  };
                        }),
                        has: A(function (t) {
                            return function (e) {
                                return 0 < D(t, e).length;
                            };
                        }),
                        contains: A(function (t) {
                            return (
                                (t = t.replace(P, u)),
                                function (e) {
                                    return (
                                        -1 < (e.textContent || r(e)).indexOf(t)
                                    );
                                }
                            );
                        }),
                        lang: A(function (i) {
                            return (
                                re.test(i || "") ||
                                    D.error("unsupported lang: " + i),
                                (i = i.replace(P, u).toLowerCase()),
                                function (e) {
                                    var t;
                                    do {
                                        if (
                                            (t = S
                                                ? e.lang
                                                : e.getAttribute("xml:lang") ||
                                                  e.getAttribute("lang"))
                                        )
                                            return (
                                                (t = t.toLowerCase()) === i ||
                                                0 === t.indexOf(i + "-")
                                            );
                                    } while (
                                        (e = e.parentNode) &&
                                        1 === e.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var t = N.location && N.location.hash;
                            return t && t.slice(1) === e.id;
                        },
                        root: function (e) {
                            return e === i;
                        },
                        focus: function (e) {
                            return (
                                e === E.activeElement &&
                                (!E.hasFocus || E.hasFocus()) &&
                                !!(e.type || e.href || ~e.tabIndex)
                            );
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && !!e.checked) ||
                                ("option" === t && !!e.selected)
                            );
                        },
                        selected: function (e) {
                            return (
                                e.parentNode && e.parentNode.selectedIndex,
                                !0 === e.selected
                            );
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !w.pseudos.empty(e);
                        },
                        header: function (e) {
                            return le.test(e.nodeName);
                        },
                        input: function (e) {
                            return ae.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return (
                                ("input" === t && "button" === e.type) ||
                                "button" === t
                            );
                        },
                        text: function (e) {
                            return (
                                "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type &&
                                (null == (e = e.getAttribute("type")) ||
                                    "text" === e.toLowerCase())
                            );
                        },
                        first: z(function () {
                            return [0];
                        }),
                        last: z(function (e, t) {
                            return [t - 1];
                        }),
                        eq: z(function (e, t, i) {
                            return [i < 0 ? i + t : i];
                        }),
                        even: z(function (e, t) {
                            for (var i = 0; i < t; i += 2) e.push(i);
                            return e;
                        }),
                        odd: z(function (e, t) {
                            for (var i = 1; i < t; i += 2) e.push(i);
                            return e;
                        }),
                        lt: z(function (e, t, i) {
                            for (
                                var n = i < 0 ? i + t : t < i ? t : i;
                                0 <= --n;

                            )
                                e.push(n);
                            return e;
                        }),
                        gt: z(function (e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t; )
                                e.push(n);
                            return e;
                        }),
                    },
                }).pseudos.nth = w.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                w.pseudos[e] = (function (t) {
                    return function (e) {
                        return (
                            "input" === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                })(e);
            for (e in { submit: !0, reset: !0 })
                w.pseudos[e] = (function (i) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t || "button" === t) && e.type === i
                        );
                    };
                })(e);
            function ve() {}
            function O(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++)
                    n += e[t].value;
                return n;
            }
            function ye(o, e, t) {
                var a = e.dir,
                    l = e.next,
                    d = l || a,
                    c = t && "parentNode" === d,
                    u = F++;
                return e.first
                    ? function (e, t, i) {
                          for (; (e = e[a]); )
                              if (1 === e.nodeType || c) return o(e, t, i);
                          return !1;
                      }
                    : function (e, t, i) {
                          var n,
                              s,
                              r = [k, u];
                          if (i) {
                              for (; (e = e[a]); )
                                  if ((1 === e.nodeType || c) && o(e, t, i))
                                      return !0;
                          } else
                              for (; (e = e[a]); )
                                  if (1 === e.nodeType || c)
                                      if (
                                          ((s =
                                              (s = e[T] || (e[T] = {}))[
                                                  e.uniqueID
                                              ] || (s[e.uniqueID] = {})),
                                          l && l === e.nodeName.toLowerCase())
                                      )
                                          e = e[a] || e;
                                      else {
                                          if (
                                              (n = s[d]) &&
                                              n[0] === k &&
                                              n[1] === u
                                          )
                                              return (r[2] = n[2]);
                                          if (((s[d] = r)[2] = o(e, t, i)))
                                              return !0;
                                      }
                          return !1;
                      };
            }
            function be(s) {
                return 1 < s.length
                    ? function (e, t, i) {
                          for (var n = s.length; n--; )
                              if (!s[n](e, t, i)) return !1;
                          return !0;
                      }
                    : s[0];
            }
            function we(e, t, i, n, s) {
                for (
                    var r, o = [], a = 0, l = e.length, d = null != t;
                    a < l;
                    a++
                )
                    !(r = e[a]) ||
                        (i && !i(r, n, s)) ||
                        (o.push(r), d && t.push(a));
                return o;
            }
            function xe(e) {
                for (
                    var n,
                        t,
                        i,
                        s = e.length,
                        r = w.relative[e[0].type],
                        o = r || w.relative[" "],
                        a = r ? 1 : 0,
                        l = ye(
                            function (e) {
                                return e === n;
                            },
                            o,
                            !0
                        ),
                        d = ye(
                            function (e) {
                                return -1 < y(n, e);
                            },
                            o,
                            !0
                        ),
                        c = [
                            function (e, t, i) {
                                e =
                                    (!r && (i || t !== x)) ||
                                    ((n = t).nodeType ? l : d)(e, t, i);
                                return (n = null), e;
                            },
                        ];
                    a < s;
                    a++
                )
                    if ((t = w.relative[e[a].type])) c = [ye(be(c), t)];
                    else {
                        if (
                            (t = w.filter[e[a].type].apply(null, e[a].matches))[
                                T
                            ]
                        ) {
                            for (i = ++a; i < s && !w.relative[e[i].type]; i++);
                            return (function e(h, f, g, m, v, t) {
                                return (
                                    m && !m[T] && (m = e(m)),
                                    v && !v[T] && (v = e(v, t)),
                                    A(function (e, t, i, n) {
                                        var s,
                                            r,
                                            o,
                                            a = [],
                                            l = [],
                                            d = t.length,
                                            c =
                                                e ||
                                                (function (e, t, i) {
                                                    for (
                                                        var n = 0, s = t.length;
                                                        n < s;
                                                        n++
                                                    )
                                                        D(e, t[n], i);
                                                    return i;
                                                })(
                                                    f || "*",
                                                    i.nodeType ? [i] : i,
                                                    []
                                                ),
                                            u =
                                                !h || (!e && f)
                                                    ? c
                                                    : we(c, a, h, i, n),
                                            p = g
                                                ? v || (e ? h : d || m)
                                                    ? []
                                                    : t
                                                : u;
                                        if ((g && g(u, p, i, n), m))
                                            for (
                                                s = we(p, l),
                                                    m(s, [], i, n),
                                                    r = s.length;
                                                r--;

                                            )
                                                (o = s[r]) &&
                                                    (p[l[r]] = !(u[l[r]] = o));
                                        if (e) {
                                            if (v || h) {
                                                if (v) {
                                                    for (
                                                        s = [], r = p.length;
                                                        r--;

                                                    )
                                                        (o = p[r]) &&
                                                            s.push((u[r] = o));
                                                    v(null, (p = []), s, n);
                                                }
                                                for (r = p.length; r--; )
                                                    (o = p[r]) &&
                                                        -1 <
                                                            (s = v
                                                                ? y(e, o)
                                                                : a[r]) &&
                                                        (e[s] = !(t[s] = o));
                                            }
                                        } else (p = we(p === t ? p.splice(d, p.length) : p)), v ? v(null, t, p, n) : M.apply(t, p);
                                    })
                                );
                            })(
                                1 < a && be(c),
                                1 < a &&
                                    O(
                                        e.slice(0, a - 1).concat({
                                            value:
                                                " " === e[a - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                    ).replace(v, "$1"),
                                t,
                                a < i && xe(e.slice(a, i)),
                                i < s && xe((e = e.slice(i))),
                                i < s && O(e)
                            );
                        }
                        c.push(t);
                    }
                return be(c);
            }
            return (
                (ve.prototype = w.filters = w.pseudos),
                (w.setFilters = new ve()),
                (h = D.tokenize =
                    function (e, t) {
                        var i,
                            n,
                            s,
                            r,
                            o,
                            a,
                            l,
                            d = G[e + " "];
                        if (d) return t ? 0 : d.slice(0);
                        for (o = e, a = [], l = w.preFilter; o; ) {
                            for (r in ((i && !(n = te.exec(o))) ||
                                (n && (o = o.slice(n[0].length) || o),
                                a.push((s = []))),
                            (i = !1),
                            (n = ie.exec(o)) &&
                                ((i = n.shift()),
                                s.push({
                                    value: i,
                                    type: n[0].replace(v, " "),
                                }),
                                (o = o.slice(i.length))),
                            w.filter))
                                !(n = b[r].exec(o)) ||
                                    (l[r] && !(n = l[r](n))) ||
                                    ((i = n.shift()),
                                    s.push({ value: i, type: r, matches: n }),
                                    (o = o.slice(i.length)));
                            if (!i) break;
                        }
                        return t ? o.length : o ? D.error(e) : G(e, a).slice(0);
                    }),
                (H = D.compile =
                    function (e, t) {
                        var i,
                            m,
                            v,
                            y,
                            b,
                            n,
                            s = [],
                            r = [],
                            o = R[e + " "];
                        if (!o) {
                            for (i = (t = t || h(e)).length; i--; )
                                ((o = xe(t[i]))[T] ? s : r).push(o);
                            (o = R(
                                e,
                                ((y = 0 < (v = s).length),
                                (b = 0 < (m = r).length),
                                (n = function (e, t, i, n, s) {
                                    var r,
                                        o,
                                        a,
                                        l = 0,
                                        d = "0",
                                        c = e && [],
                                        u = [],
                                        p = x,
                                        h = e || (b && w.find.TAG("*", s)),
                                        f = (k +=
                                            null == p
                                                ? 1
                                                : Math.random() || 0.1),
                                        g = h.length;
                                    for (
                                        s && (x = t == E || t || s);
                                        d !== g && null != (r = h[d]);
                                        d++
                                    ) {
                                        if (b && r) {
                                            for (
                                                o = 0,
                                                    t ||
                                                        r.ownerDocument == E ||
                                                        (C(r), (i = !S));
                                                (a = m[o++]);

                                            )
                                                if (a(r, t || E, i)) {
                                                    n.push(r);
                                                    break;
                                                }
                                            s && (k = f);
                                        }
                                        y &&
                                            ((r = !a && r) && l--,
                                            e && c.push(r));
                                    }
                                    if (((l += d), y && d !== l)) {
                                        for (o = 0; (a = v[o++]); )
                                            a(c, u, t, i);
                                        if (e) {
                                            if (0 < l)
                                                for (; d--; )
                                                    c[d] ||
                                                        u[d] ||
                                                        (u[d] = Y.call(n));
                                            u = we(u);
                                        }
                                        M.apply(n, u),
                                            s &&
                                                !e &&
                                                0 < u.length &&
                                                1 < l + v.length &&
                                                D.uniqueSort(n);
                                    }
                                    return s && ((k = f), (x = p)), c;
                                }),
                                y ? A(n) : n)
                            )).selector = e;
                        }
                        return o;
                    }),
                (B = D.select =
                    function (e, t, i, n) {
                        var s,
                            r,
                            o,
                            a,
                            l,
                            d = "function" == typeof e && e,
                            c = !n && h((e = d.selector || e));
                        if (((i = i || []), 1 === c.length)) {
                            if (
                                2 < (r = c[0] = c[0].slice(0)).length &&
                                "ID" === (o = r[0]).type &&
                                9 === t.nodeType &&
                                S &&
                                w.relative[r[1].type]
                            ) {
                                if (
                                    !(t = (w.find.ID(
                                        o.matches[0].replace(P, u),
                                        t
                                    ) || [])[0])
                                )
                                    return i;
                                d && (t = t.parentNode),
                                    (e = e.slice(r.shift().value.length));
                            }
                            for (
                                s = b.needsContext.test(e) ? 0 : r.length;
                                s-- && ((o = r[s]), !w.relative[(a = o.type)]);

                            )
                                if (
                                    (l = w.find[a]) &&
                                    (n = l(
                                        o.matches[0].replace(P, u),
                                        (ce.test(r[0].type) &&
                                            me(t.parentNode)) ||
                                            t
                                    ))
                                ) {
                                    if (
                                        (r.splice(s, 1), (e = n.length && O(r)))
                                    )
                                        break;
                                    return M.apply(i, n), i;
                                }
                        }
                        return (
                            (d || H(e, c))(
                                n,
                                t,
                                !S,
                                i,
                                !t || (ce.test(e) && me(t.parentNode)) || t
                            ),
                            i
                        );
                    }),
                (p.sortStable = T.split("").sort(X).join("") === T),
                (p.detectDuplicates = !!d),
                C(),
                (p.sortDetached = $(function (e) {
                    return (
                        1 &
                        e.compareDocumentPosition(E.createElement("fieldset"))
                    );
                })),
                $(function (e) {
                    return (
                        (e.innerHTML = "<a href='#'></a>"),
                        "#" === e.firstChild.getAttribute("href")
                    );
                }) ||
                    he("type|href|height|width", function (e, t, i) {
                        if (!i)
                            return e.getAttribute(
                                t,
                                "type" === t.toLowerCase() ? 1 : 2
                            );
                    }),
                (p.attributes &&
                    $(function (e) {
                        return (
                            (e.innerHTML = "<input/>"),
                            e.firstChild.setAttribute("value", ""),
                            "" === e.firstChild.getAttribute("value")
                        );
                    })) ||
                    he("value", function (e, t, i) {
                        if (!i && "input" === e.nodeName.toLowerCase())
                            return e.defaultValue;
                    }),
                $(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    he(K, function (e, t, i) {
                        if (!i)
                            return !0 === e[t]
                                ? t.toLowerCase()
                                : (i = e.getAttributeNode(t)) && i.specified
                                ? i.value
                                : null;
                    }),
                D
            );
        })(C),
        Q =
            ((S.find = e),
            (S.expr = e.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = e.uniqueSort),
            (S.text = e.getText),
            (S.isXMLDoc = e.isXML),
            (S.contains = e.contains),
            (S.escapeSelector = e.escape),
            S.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var K = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function J(e, i, n) {
        return y(i)
            ? S.grep(e, function (e, t) {
                  return !!i.call(e, t, e) !== n;
              })
            : i.nodeType
            ? S.grep(e, function (e) {
                  return (e === i) !== n;
              })
            : "string" != typeof i
            ? S.grep(e, function (e) {
                  return -1 < H.call(i, e) !== n;
              })
            : S.filter(i, e, n);
    }
    (S.filter = function (e, t, i) {
        var n = t[0];
        return (
            i && (e = ":not(" + e + ")"),
            1 === t.length && 1 === n.nodeType
                ? S.find.matchesSelector(n, e)
                    ? [n]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    i,
                    n = this.length,
                    s = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < n; t++)
                                if (S.contains(s[t], this)) return !0;
                        })
                    );
                for (i = this.pushStack([]), t = 0; t < n; t++)
                    S.find(e, s[t], i);
                return 1 < n ? S.uniqueSort(i) : i;
            },
            filter: function (e) {
                return this.pushStack(J(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(J(this, e || [], !0));
            },
            is: function (e) {
                return !!J(
                    this,
                    "string" == typeof e && Q.test(e) ? S(e) : e || [],
                    !1
                ).length;
            },
        });
    var Z,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
            (((S.fn.init = function (e, t, i) {
                if (!e) return this;
                if (((i = i || Z), "string" != typeof e))
                    return e.nodeType
                        ? ((this[0] = e), (this.length = 1), this)
                        : y(e)
                        ? void 0 !== i.ready
                            ? i.ready(e)
                            : e(S)
                        : S.makeArray(e, this);
                if (
                    !(n =
                        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                            ? [null, e, null]
                            : ee.exec(e)) ||
                    (!n[1] && t)
                )
                    return (!t || t.jquery ? t || i : this.constructor(t)).find(
                        e
                    );
                if (n[1]) {
                    if (
                        ((t = t instanceof S ? t[0] : t),
                        S.merge(
                            this,
                            S.parseHTML(
                                n[1],
                                t && t.nodeType ? t.ownerDocument || t : E,
                                !0
                            )
                        ),
                        K.test(n[1]) && S.isPlainObject(t))
                    )
                        for (var n in t)
                            y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this;
                }
                return (
                    (i = E.getElementById(n[2])) &&
                        ((this[0] = i), (this.length = 1)),
                    this
                );
            }).prototype = S.fn),
            (Z = S(E)),
            /^(?:parents|prev(?:Until|All))/),
        ie = { children: !0, contents: !0, next: !0, prev: !0 };
    function ne(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++)
                    if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var i,
                n = 0,
                s = this.length,
                r = [],
                o = "string" != typeof e && S(e);
            if (!Q.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (
                            i.nodeType < 11 &&
                            (o
                                ? -1 < o.index(i)
                                : 1 === i.nodeType &&
                                  S.find.matchesSelector(i, e))
                        ) {
                            r.push(i);
                            break;
                        }
            return this.pushStack(1 < r.length ? S.uniqueSort(r) : r);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? H.call(S(e), this[0])
                    : H.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        S.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return n(e, "parentNode");
                },
                parentsUntil: function (e, t, i) {
                    return n(e, "parentNode", i);
                },
                next: function (e) {
                    return ne(e, "nextSibling");
                },
                prev: function (e) {
                    return ne(e, "previousSibling");
                },
                nextAll: function (e) {
                    return n(e, "nextSibling");
                },
                prevAll: function (e) {
                    return n(e, "previousSibling");
                },
                nextUntil: function (e, t, i) {
                    return n(e, "nextSibling", i);
                },
                prevUntil: function (e, t, i) {
                    return n(e, "previousSibling", i);
                },
                siblings: function (e) {
                    return U((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return U(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && _(e.contentDocument)
                        ? e.contentDocument
                        : (l(e, "template") && (e = e.content || e),
                          S.merge([], e.childNodes));
                },
            },
            function (n, s) {
                S.fn[n] = function (e, t) {
                    var i = S.map(this, s, e);
                    return (
                        (t = "Until" !== n.slice(-5) ? e : t) &&
                            "string" == typeof t &&
                            (i = S.filter(t, i)),
                        1 < this.length &&
                            (ie[n] || S.uniqueSort(i),
                            te.test(n) && i.reverse()),
                        this.pushStack(i)
                    );
                };
            }
        );
    var T = /[^\x20\t\r\n\f]+/g;
    function c(e) {
        return e;
    }
    function se(e) {
        throw e;
    }
    function re(e, t, i, n) {
        var s;
        try {
            e && y((s = e.promise))
                ? s.call(e).done(t).fail(i)
                : e && y((s = e.then))
                ? s.call(e, t, i)
                : t.apply(void 0, [e].slice(n));
        } catch (e) {
            i.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (n) {
        var e, i;
        n =
            "string" == typeof n
                ? ((e = n),
                  (i = {}),
                  S.each(e.match(T) || [], function (e, t) {
                      i[t] = !0;
                  }),
                  i)
                : S.extend({}, n);
        function s() {
            for (a = a || n.once, o = r = !0; d.length; c = -1)
                for (t = d.shift(); ++c < l.length; )
                    !1 === l[c].apply(t[0], t[1]) &&
                        n.stopOnFalse &&
                        ((c = l.length), (t = !1));
            n.memory || (t = !1), (r = !1), a && (l = t ? [] : "");
        }
        var r,
            t,
            o,
            a,
            l = [],
            d = [],
            c = -1,
            u = {
                add: function () {
                    return (
                        l &&
                            (t && !r && ((c = l.length - 1), d.push(t)),
                            (function i(e) {
                                S.each(e, function (e, t) {
                                    y(t)
                                        ? (n.unique && u.has(t)) || l.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== f(t) &&
                                          i(t);
                                });
                            })(arguments),
                            t && !r && s()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            for (var i; -1 < (i = S.inArray(t, l, i)); )
                                l.splice(i, 1), i <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (a = d = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (a = d = []), t || r || (l = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            d.push(t),
                            r || s()),
                        this
                    );
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return u;
    }),
        S.extend({
            Deferred: function (e) {
                var r = [
                        [
                            "notify",
                            "progress",
                            S.Callbacks("memory"),
                            S.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            S.Callbacks("once memory"),
                            S.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    s = "pending",
                    o = {
                        state: function () {
                            return s;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return o.then(null, e);
                        },
                        pipe: function () {
                            var s = arguments;
                            return S.Deferred(function (n) {
                                S.each(r, function (e, t) {
                                    var i = y(s[t[4]]) && s[t[4]];
                                    a[t[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && y(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(n.notify)
                                                  .done(n.resolve)
                                                  .fail(n.reject)
                                            : n[t[0] + "With"](
                                                  this,
                                                  i ? [e] : arguments
                                              );
                                    });
                                }),
                                    (s = null);
                            }).promise();
                        },
                        then: function (t, i, n) {
                            var l = 0;
                            function d(s, r, o, a) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(s < l)) {
                                            if (
                                                (e = o.apply(i, n)) ===
                                                r.promise()
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (t =
                                                e &&
                                                ("object" == typeof e ||
                                                    "function" == typeof e) &&
                                                e.then),
                                                y(t)
                                                    ? a
                                                        ? t.call(
                                                              e,
                                                              d(l, r, c, a),
                                                              d(l, r, se, a)
                                                          )
                                                        : (l++,
                                                          t.call(
                                                              e,
                                                              d(l, r, c, a),
                                                              d(l, r, se, a),
                                                              d(
                                                                  l,
                                                                  r,
                                                                  c,
                                                                  r.notifyWith
                                                              )
                                                          ))
                                                    : (o !== c &&
                                                          ((i = void 0),
                                                          (n = [e])),
                                                      (a || r.resolveWith)(
                                                          i,
                                                          n
                                                      ));
                                        }
                                    }
                                    var i = this,
                                        n = arguments,
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred
                                                          .exceptionHook &&
                                                          S.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          l <= s + 1 &&
                                                              (o !== se &&
                                                                  ((i = void 0),
                                                                  (n = [e])),
                                                              r.rejectWith(
                                                                  i,
                                                                  n
                                                              ));
                                                  }
                                              };
                                    s
                                        ? t()
                                        : (S.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  S.Deferred.getStackHook()),
                                          C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                r[0][3].add(
                                    d(0, e, y(n) ? n : c, e.notifyWith)
                                ),
                                    r[1][3].add(d(0, e, y(t) ? t : c)),
                                    r[2][3].add(d(0, e, y(i) ? i : se));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, o) : o;
                        },
                    },
                    a = {};
                return (
                    S.each(r, function (e, t) {
                        var i = t[2],
                            n = t[5];
                        (o[t[1]] = i.add),
                            n &&
                                i.add(
                                    function () {
                                        s = n;
                                    },
                                    r[3 - e][2].disable,
                                    r[3 - e][3].disable,
                                    r[0][2].lock,
                                    r[0][3].lock
                                ),
                            i.add(t[3].fire),
                            (a[t[0]] = function () {
                                return (
                                    a[t[0] + "With"](
                                        this === a ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (a[t[0] + "With"] = i.fireWith);
                    }),
                    o.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (s[t] = this),
                            (r[t] =
                                1 < arguments.length ? a.call(arguments) : e),
                            --i || o.resolveWith(s, r);
                    };
                }
                var i = arguments.length,
                    n = i,
                    s = Array(n),
                    r = a.call(arguments),
                    o = S.Deferred();
                if (
                    i <= 1 &&
                    (re(e, o.done(t(n)).resolve, o.reject, !i),
                    "pending" === o.state() || y(r[n] && r[n].then))
                )
                    return o.then();
                for (; n--; ) re(r[n], t(n), o.reject);
                return o.promise();
            },
        });
    var oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        ae =
            ((S.Deferred.exceptionHook = function (e, t) {
                C.console &&
                    C.console.warn &&
                    e &&
                    oe.test(e.name) &&
                    C.console.warn(
                        "jQuery.Deferred exception: " + e.message,
                        e.stack,
                        t
                    );
            }),
            (S.readyException = function (e) {
                C.setTimeout(function () {
                    throw e;
                });
            }),
            S.Deferred());
    function le() {
        E.removeEventListener("DOMContentLoaded", le),
            C.removeEventListener("load", le),
            S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            ae.then(e).catch(function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                    ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                    ae.resolveWith(E, [S]);
            },
        }),
        (S.ready.then = ae.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? C.setTimeout(S.ready)
            : (E.addEventListener("DOMContentLoaded", le),
              C.addEventListener("load", le));
    function u(e, t, i, n, s, r, o) {
        var a = 0,
            l = e.length,
            d = null == i;
        if ("object" === f(i))
            for (a in ((s = !0), i)) u(e, t, a, i[a], !0, r, o);
        else if (
            void 0 !== n &&
            ((s = !0),
            y(n) || (o = !0),
            (t = d
                ? o
                    ? (t.call(e, n), null)
                    : ((d = t),
                      function (e, t, i) {
                          return d.call(S(e), i);
                      })
                : t))
        )
            for (; a < l; a++) t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
        return s ? e : d ? t.call(e) : l ? t(e[0], i) : r;
    }
    var de = /^-ms-/,
        ce = /-([a-z])/g;
    function ue(e, t) {
        return t.toUpperCase();
    }
    function b(e) {
        return e.replace(de, "ms-").replace(ce, ue);
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function pe() {
        this.expando = S.expando + pe.uid++;
    }
    (pe.uid = 1),
        (pe.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        v(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, i) {
                var n,
                    s = this.cache(e);
                if ("string" == typeof t) s[b(t)] = i;
                else for (n in t) s[b(n)] = t[n];
                return s;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][b(t)];
            },
            access: function (e, t, i) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === i)
                    ? this.get(e, t)
                    : (this.set(e, t, i), void 0 !== i ? i : t);
            },
            remove: function (e, t) {
                var i,
                    n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t)
                            ? t.map(b)
                            : (t = b(t)) in n
                            ? [t]
                            : t.match(T) || []).length;
                        for (; i--; ) delete n[t[i]];
                    }
                    (void 0 !== t && !S.isEmptyObject(n)) ||
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !S.isEmptyObject(e);
            },
        });
    var w = new pe(),
        d = new pe(),
        he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        fe = /[A-Z]/g;
    function ge(e, t, i) {
        var n, s;
        if (void 0 === i && 1 === e.nodeType)
            if (
                ((n = "data-" + t.replace(fe, "-$&").toLowerCase()),
                "string" == typeof (i = e.getAttribute(n)))
            ) {
                try {
                    i =
                        "true" === (s = i) ||
                        ("false" !== s &&
                            ("null" === s
                                ? null
                                : s === +s + ""
                                ? +s
                                : he.test(s)
                                ? JSON.parse(s)
                                : s));
                } catch (e) {}
                d.set(e, t, i);
            } else i = void 0;
        return i;
    }
    S.extend({
        hasData: function (e) {
            return d.hasData(e) || w.hasData(e);
        },
        data: function (e, t, i) {
            return d.access(e, t, i);
        },
        removeData: function (e, t) {
            d.remove(e, t);
        },
        _data: function (e, t, i) {
            return w.access(e, t, i);
        },
        _removeData: function (e, t) {
            w.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (i, e) {
                var t,
                    n,
                    s,
                    r = this[0],
                    o = r && r.attributes;
                if (void 0 !== i)
                    return "object" == typeof i
                        ? this.each(function () {
                              d.set(this, i);
                          })
                        : u(
                              this,
                              function (e) {
                                  var t;
                                  if (r && void 0 === e)
                                      return void 0 !== (t = d.get(r, i)) ||
                                          void 0 !== (t = ge(r, i))
                                          ? t
                                          : void 0;
                                  this.each(function () {
                                      d.set(this, i, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (
                    this.length &&
                    ((s = d.get(r)),
                    1 === r.nodeType && !w.get(r, "hasDataAttrs"))
                ) {
                    for (t = o.length; t--; )
                        o[t] &&
                            0 === (n = o[t].name).indexOf("data-") &&
                            ((n = b(n.slice(5))), ge(r, n, s[n]));
                    w.set(r, "hasDataAttrs", !0);
                }
                return s;
            },
            removeData: function (e) {
                return this.each(function () {
                    d.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, i) {
                var n;
                if (e)
                    return (
                        (n = w.get(e, (t = (t || "fx") + "queue"))),
                        i &&
                            (!n || Array.isArray(i)
                                ? (n = w.access(e, t, S.makeArray(i)))
                                : n.push(i)),
                        n || []
                    );
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var i = S.queue(e, t),
                    n = i.length,
                    s = i.shift(),
                    r = S._queueHooks(e, t);
                "inprogress" === s && ((s = i.shift()), n--),
                    s &&
                        ("fx" === t && i.unshift("inprogress"),
                        delete r.stop,
                        s.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            r
                        )),
                    !n && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return (
                    w.get(e, i) ||
                    w.access(e, i, {
                        empty: S.Callbacks("once memory").add(function () {
                            w.remove(e, [t + "queue", i]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, i) {
                var e = 2;
                return (
                    "string" != typeof t && ((i = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === i
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, i);
                              S._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function i() {
                    --s || r.resolveWith(o, [o]);
                }
                var n,
                    s = 1,
                    r = S.Deferred(),
                    o = this,
                    a = this.length;
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    a--;

                )
                    (n = w.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (s++, n.empty.add(i));
                return i(), r.promise(t);
            },
        });
    function me(e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && k(e) && "none" === S.css(e, "display"))
        );
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        p = ["Top", "Right", "Bottom", "Left"],
        x = E.documentElement,
        k = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        ye = { composed: !0 };
    x.getRootNode &&
        (k = function (e) {
            return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(ye) === e.ownerDocument
            );
        });
    function be(e, t, i, n) {
        var s,
            r,
            o = 20,
            a = n
                ? function () {
                      return n.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            l = a(),
            d = (i && i[3]) || (S.cssNumber[t] ? "" : "px"),
            c =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== d && +l)) &&
                ve.exec(S.css(e, t));
        if (c && c[3] !== d) {
            for (d = d || c[3], c = +(l /= 2) || 1; o--; )
                S.style(e, t, c + d),
                    (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
                    (c /= r);
            S.style(e, t, (c *= 2) + d), (i = i || []);
        }
        return (
            i &&
                ((c = +c || +l || 0),
                (s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
                n && ((n.unit = d), (n.start = c), (n.end = s))),
            s
        );
    }
    var we = {};
    function M(e, t) {
        for (var i, n, s, r, o, a, l = [], d = 0, c = e.length; d < c; d++)
            (n = e[d]).style &&
                ((i = n.style.display),
                t
                    ? ("none" === i &&
                          ((l[d] = w.get(n, "display") || null),
                          l[d] || (n.style.display = "")),
                      "" === n.style.display &&
                          me(n) &&
                          (l[d] =
                              ((a = r = s = void 0),
                              (r = n.ownerDocument),
                              (o = n.nodeName),
                              (a = we[o]) ||
                                  ((s = r.body.appendChild(r.createElement(o))),
                                  (a = S.css(s, "display")),
                                  s.parentNode.removeChild(s),
                                  (we[o] = a = "none" === a ? "block" : a)))))
                    : "none" !== i &&
                      ((l[d] = "none"), w.set(n, "display", i)));
        for (d = 0; d < c; d++) null != l[d] && (e[d].style.display = l[d]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return M(this, !0);
        },
        hide: function () {
            return M(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      me(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var xe = /^(?:checkbox|radio)$/i,
        Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ee = /^$|^module$|\/(?:java|ecma)script/i,
        i = E.createDocumentFragment().appendChild(E.createElement("div")),
        I =
            ((A = E.createElement("input")).setAttribute("type", "radio"),
            A.setAttribute("checked", "checked"),
            A.setAttribute("name", "t"),
            i.appendChild(A),
            (m.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (i.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue),
            (i.innerHTML = "<option></option>"),
            (m.option = !!i.lastChild),
            {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            });
    function P(e, t) {
        var i =
            void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
        return void 0 === t || (t && l(e, t)) ? S.merge([e], i) : i;
    }
    function Se(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            w.set(e[i], "globalEval", !t || w.get(t[i], "globalEval"));
    }
    (I.tbody = I.tfoot = I.colgroup = I.caption = I.thead),
        (I.th = I.td),
        m.option ||
            (I.optgroup = I.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var Te = /<|&#?\w+;/;
    function ke(e, t, i, n, s) {
        for (
            var r,
                o,
                a,
                l,
                d,
                c = t.createDocumentFragment(),
                u = [],
                p = 0,
                h = e.length;
            p < h;
            p++
        )
            if ((r = e[p]) || 0 === r)
                if ("object" === f(r)) S.merge(u, r.nodeType ? [r] : r);
                else if (Te.test(r)) {
                    for (
                        o = o || c.appendChild(t.createElement("div")),
                            a = (Ce.exec(r) || ["", ""])[1].toLowerCase(),
                            a = I[a] || I._default,
                            o.innerHTML = a[1] + S.htmlPrefilter(r) + a[2],
                            d = a[0];
                        d--;

                    )
                        o = o.lastChild;
                    S.merge(u, o.childNodes),
                        ((o = c.firstChild).textContent = "");
                } else u.push(t.createTextNode(r));
        for (c.textContent = "", p = 0; (r = u[p++]); )
            if (n && -1 < S.inArray(r, n)) s && s.push(r);
            else if (
                ((l = k(r)), (o = P(c.appendChild(r), "script")), l && Se(o), i)
            )
                for (d = 0; (r = o[d++]); ) Ee.test(r.type || "") && i.push(r);
        return c;
    }
    var Me = /^([^.]*)(?:\.(.+)|)/;
    function o() {
        return !0;
    }
    function h() {
        return !1;
    }
    function Ie(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Pe(e, t, i, n, s, r) {
        var o, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), t))
                Pe(e, a, i, n, t[a], r);
            return e;
        }
        if (
            (null == n && null == s
                ? ((s = i), (n = i = void 0))
                : null == s &&
                  ("string" == typeof i
                      ? ((s = n), (n = void 0))
                      : ((s = n), (n = i), (i = void 0))),
            !1 === s)
        )
            s = h;
        else if (!s) return e;
        return (
            1 === r &&
                ((o = s),
                ((s = function (e) {
                    return S().off(e), o.apply(this, arguments);
                }).guid = o.guid || (o.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, s, n, i);
            })
        );
    }
    function De(e, s, r) {
        r
            ? (w.set(e, s, !1),
              S.event.add(e, s, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          i,
                          n = w.get(this, s);
                      if (1 & e.isTrigger && this[s]) {
                          if (n.length)
                              (S.event.special[s] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((n = a.call(arguments)),
                              w.set(this, s, n),
                              (t = r(this, s)),
                              this[s](),
                              n !== (i = w.get(this, s)) || t
                                  ? w.set(this, s, !1)
                                  : (i = {}),
                              n !== i)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  i && i.value
                              );
                      } else
                          n.length &&
                              (w.set(this, s, {
                                  value: S.event.trigger(
                                      S.extend(n[0], S.Event.prototype),
                                      n.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === w.get(e, s) && S.event.add(e, s, o);
    }
    (S.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var r,
                o,
                a,
                l,
                d,
                c,
                u,
                p,
                h,
                f = w.get(t);
            if (v(t))
                for (
                    i.handler && ((i = (r = i).handler), (s = r.selector)),
                        s && S.find.matchesSelector(x, s),
                        i.guid || (i.guid = S.guid++),
                        (a = f.events) || (a = f.events = Object.create(null)),
                        (o = f.handle) ||
                            (o = f.handle =
                                function (e) {
                                    return void 0 !== S &&
                                        S.event.triggered !== e.type
                                        ? S.event.dispatch.apply(t, arguments)
                                        : void 0;
                                }),
                        l = (e = (e || "").match(T) || [""]).length;
                    l--;

                )
                    (u = h = (p = Me.exec(e[l]) || [])[1]),
                        (p = (p[2] || "").split(".").sort()),
                        u &&
                            ((d = S.event.special[u] || {}),
                            (u = (s ? d.delegateType : d.bindType) || u),
                            (d = S.event.special[u] || {}),
                            (h = S.extend(
                                {
                                    type: u,
                                    origType: h,
                                    data: n,
                                    handler: i,
                                    guid: i.guid,
                                    selector: s,
                                    needsContext:
                                        s && S.expr.match.needsContext.test(s),
                                    namespace: p.join("."),
                                },
                                r
                            )),
                            (c = a[u]) ||
                                (((c = a[u] = []).delegateCount = 0),
                                (d.setup && !1 !== d.setup.call(t, n, p, o)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(u, o))),
                            d.add &&
                                (d.add.call(t, h),
                                h.handler.guid || (h.handler.guid = i.guid)),
                            s ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                            (S.event.global[u] = !0));
        },
        remove: function (e, t, i, n, s) {
            var r,
                o,
                a,
                l,
                d,
                c,
                u,
                p,
                h,
                f,
                g,
                m = w.hasData(e) && w.get(e);
            if (m && (l = m.events)) {
                for (d = (t = (t || "").match(T) || [""]).length; d--; )
                    if (
                        ((h = g = (a = Me.exec(t[d]) || [])[1]),
                        (f = (a[2] || "").split(".").sort()),
                        h)
                    ) {
                        for (
                            u = S.event.special[h] || {},
                                p =
                                    l[
                                        (h =
                                            (n ? u.delegateType : u.bindType) ||
                                            h)
                                    ] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            f.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                o = r = p.length;
                            r--;

                        )
                            (c = p[r]),
                                (!s && g !== c.origType) ||
                                    (i && i.guid !== c.guid) ||
                                    (a && !a.test(c.namespace)) ||
                                    (n &&
                                        n !== c.selector &&
                                        ("**" !== n || !c.selector)) ||
                                    (p.splice(r, 1),
                                    c.selector && p.delegateCount--,
                                    u.remove && u.remove.call(e, c));
                        o &&
                            !p.length &&
                            ((u.teardown &&
                                !1 !== u.teardown.call(e, f, m.handle)) ||
                                S.removeEvent(e, h, m.handle),
                            delete l[h]);
                    } else for (h in l) S.event.remove(e, h + t[d], i, n, !0);
                S.isEmptyObject(l) && w.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                i,
                n,
                s,
                r,
                o = new Array(arguments.length),
                a = S.event.fix(e),
                e =
                    (w.get(this, "events") || Object.create(null))[a.type] ||
                    [],
                l = S.event.special[a.type] || {};
            for (o[0] = a, t = 1; t < arguments.length; t++)
                o[t] = arguments[t];
            if (
                ((a.delegateTarget = this),
                !l.preDispatch || !1 !== l.preDispatch.call(this, a))
            ) {
                for (
                    r = S.event.handlers.call(this, a, e), t = 0;
                    (n = r[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = n.elem, i = 0;
                        (s = n.handlers[i++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== s.namespace &&
                            !a.rnamespace.test(s.namespace)) ||
                            ((a.handleObj = s),
                            (a.data = s.data),
                            void 0 !==
                                (s = (
                                    (S.event.special[s.origType] || {})
                                        .handle || s.handler
                                ).apply(n.elem, o)) &&
                                !1 === (a.result = s) &&
                                (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var i,
                n,
                s,
                r,
                o,
                a = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (
                        1 === d.nodeType &&
                        ("click" !== e.type || !0 !== d.disabled)
                    ) {
                        for (r = [], o = {}, i = 0; i < l; i++)
                            void 0 === o[(s = (n = t[i]).selector + " ")] &&
                                (o[s] = n.needsContext
                                    ? -1 < S(s, this).index(d)
                                    : S.find(s, this, null, [d]).length),
                                o[s] && r.push(n);
                        r.length && a.push({ elem: d, handlers: r });
                    }
            return (
                (d = this),
                l < t.length && a.push({ elem: d, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return (
                        xe.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            De(e, "click", o),
                        !1
                    );
                },
                trigger: function (e) {
                    e = this || e;
                    return (
                        xe.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            De(e, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    e = e.target;
                    return (
                        (xe.test(e.type) &&
                            e.click &&
                            l(e, "input") &&
                            w.get(e, "click")) ||
                        l(e, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? o
                          : h),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = o),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = o),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = o),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return De(this, e, Ie), !1;
                },
                trigger: function () {
                    return De(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        S.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, s) {
                S.event.special[e] = {
                    delegateType: s,
                    bindType: s,
                    handle: function (e) {
                        var t,
                            i = e.relatedTarget,
                            n = e.handleObj;
                        return (
                            (i && (i === this || S.contains(this, i))) ||
                                ((e.type = n.origType),
                                (t = n.handler.apply(this, arguments)),
                                (e.type = s)),
                            t
                        );
                    },
                };
            }
        ),
        S.fn.extend({
            on: function (e, t, i, n) {
                return Pe(this, e, t, i, n);
            },
            one: function (e, t, i, n) {
                return Pe(this, e, t, i, n, 1);
            },
            off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (n = e.handleObj),
                        S(e.delegateTarget).off(
                            n.namespace
                                ? n.origType + "." + n.namespace
                                : n.origType,
                            n.selector,
                            n.handler
                        ),
                        this
                    );
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) ||
                            ((i = t), (t = void 0)),
                        !1 === i && (i = h),
                        this.each(function () {
                            S.event.remove(this, e, i, t);
                        })
                    );
                for (s in e) this.off(s, t, e[s]);
                return this;
            },
        });
    var Le = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ze(e, t) {
        return (
            (l(e, "table") &&
                l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
            e
        );
    }
    function Oe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Ne(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function _e(e, t) {
        var i, n, s, r;
        if (1 === t.nodeType) {
            if (w.hasData(e) && (r = w.get(e).events))
                for (s in (w.remove(t, "handle events"), r))
                    for (i = 0, n = r[s].length; i < n; i++)
                        S.event.add(t, s, r[s][i]);
            d.hasData(e) &&
                ((e = d.access(e)), (e = S.extend({}, e)), d.set(t, e));
        }
    }
    function D(i, n, s, r) {
        n = j(n);
        var e,
            t,
            o,
            a,
            l,
            d,
            c = 0,
            u = i.length,
            p = u - 1,
            h = n[0],
            f = y(h);
        if (f || (1 < u && "string" == typeof h && !m.checkClone && Ae.test(h)))
            return i.each(function (e) {
                var t = i.eq(e);
                f && (n[0] = h.call(this, e, t.html())), D(t, n, s, r);
            });
        if (
            u &&
            ((t = (e = ke(n, i[0].ownerDocument, !1, i, r)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || r)
        ) {
            for (a = (o = S.map(P(e, "script"), Oe)).length; c < u; c++)
                (l = e),
                    c !== p &&
                        ((l = S.clone(l, !0, !0)),
                        a && S.merge(o, P(l, "script"))),
                    s.call(i[c], l, c);
            if (a)
                for (
                    d = o[o.length - 1].ownerDocument, S.map(o, Ne), c = 0;
                    c < a;
                    c++
                )
                    (l = o[c]),
                        Ee.test(l.type || "") &&
                            !w.access(l, "globalEval") &&
                            S.contains(d, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase()
                                ? S._evalUrl &&
                                  !l.noModule &&
                                  S._evalUrl(
                                      l.src,
                                      {
                                          nonce:
                                              l.nonce ||
                                              l.getAttribute("nonce"),
                                      },
                                      d
                                  )
                                : V(l.textContent.replace($e, ""), l, d));
        }
        return i;
    }
    function je(e, t, i) {
        for (var n, s = t ? S.filter(t, e) : e, r = 0; null != (n = s[r]); r++)
            i || 1 !== n.nodeType || S.cleanData(P(n)),
                n.parentNode &&
                    (i && k(n) && Se(P(n, "script")),
                    n.parentNode.removeChild(n));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, i) {
            var n,
                s,
                r,
                o,
                a,
                l,
                d,
                c = e.cloneNode(!0),
                u = k(e);
            if (
                !(
                    m.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    S.isXMLDoc(e)
                )
            )
                for (o = P(c), n = 0, s = (r = P(e)).length; n < s; n++)
                    (a = r[n]),
                        "input" === (d = (l = o[n]).nodeName.toLowerCase()) &&
                        xe.test(a.type)
                            ? (l.checked = a.checked)
                            : ("input" !== d && "textarea" !== d) ||
                              (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (
                        r = r || P(e), o = o || P(c), n = 0, s = r.length;
                        n < s;
                        n++
                    )
                        _e(r[n], o[n]);
                else _e(e, c);
            return (
                0 < (o = P(c, "script")).length && Se(o, !u && P(e, "script")),
                c
            );
        },
        cleanData: function (e) {
            for (
                var t, i, n, s = S.event.special, r = 0;
                void 0 !== (i = e[r]);
                r++
            )
                if (v(i)) {
                    if ((t = i[w.expando])) {
                        if (t.events)
                            for (n in t.events)
                                s[n]
                                    ? S.event.remove(i, n)
                                    : S.removeEvent(i, n, t.handle);
                        i[w.expando] = void 0;
                    }
                    i[d.expando] && (i[d.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return je(this, e, !0);
            },
            remove: function (e) {
                return je(this, e);
            },
            text: function (e) {
                return u(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return D(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        ze(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return D(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (t = ze(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return D(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return D(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (S.cleanData(P(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return u(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Le.test(e) &&
                            !I[(Ce.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; i < n; i++)
                                    1 === (t = this[i] || {}).nodeType &&
                                        (S.cleanData(P(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var i = [];
                return D(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, i) < 0 &&
                            (S.cleanData(P(this)),
                            t && t.replaceChild(e, this));
                    },
                    i
                );
            },
        }),
        S.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, o) {
                S.fn[e] = function (e) {
                    for (
                        var t, i = [], n = S(e), s = n.length - 1, r = 0;
                        r <= s;
                        r++
                    )
                        (t = r === s ? this : this.clone(!0)),
                            S(n[r])[o](t),
                            q.apply(i, t.get());
                    return this.pushStack(i);
                };
            }
        );
    function qe(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : C).getComputedStyle(e);
    }
    function He(e, t, i) {
        var n,
            s = {};
        for (n in t) (s[n] = e.style[n]), (e.style[n] = t[n]);
        for (n in ((i = i.call(e)), t)) e.style[n] = s[n];
        return i;
    }
    var Be,
        Fe,
        We,
        Ge,
        Re,
        Xe,
        Ve,
        s,
        Ye = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Ue = new RegExp(p.join("|"), "i");
    function Qe(e, t, i) {
        var n,
            s,
            r = e.style;
        return (
            (i = i || qe(e)) &&
                ("" !== (s = i.getPropertyValue(t) || i[t]) ||
                    k(e) ||
                    (s = S.style(e, t)),
                !m.pixelBoxStyles() &&
                    Ye.test(s) &&
                    Ue.test(t) &&
                    ((e = r.width),
                    (t = r.minWidth),
                    (n = r.maxWidth),
                    (r.minWidth = r.maxWidth = r.width = s),
                    (s = i.width),
                    (r.width = e),
                    (r.minWidth = t),
                    (r.maxWidth = n))),
            void 0 !== s ? s + "" : s
        );
    }
    function Ke(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function Je() {
        var e;
        s &&
            ((Ve.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (s.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            x.appendChild(Ve).appendChild(s),
            (e = C.getComputedStyle(s)),
            (Be = "1%" !== e.top),
            (Xe = 12 === Ze(e.marginLeft)),
            (s.style.right = "60%"),
            (Ge = 36 === Ze(e.right)),
            (Fe = 36 === Ze(e.width)),
            (s.style.position = "absolute"),
            (We = 12 === Ze(s.offsetWidth / 3)),
            x.removeChild(Ve),
            (s = null));
    }
    function Ze(e) {
        return Math.round(parseFloat(e));
    }
    (Ve = E.createElement("div")),
        (s = E.createElement("div")).style &&
            ((s.style.backgroundClip = "content-box"),
            (s.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === s.style.backgroundClip),
            S.extend(m, {
                boxSizingReliable: function () {
                    return Je(), Fe;
                },
                pixelBoxStyles: function () {
                    return Je(), Ge;
                },
                pixelPosition: function () {
                    return Je(), Be;
                },
                reliableMarginLeft: function () {
                    return Je(), Xe;
                },
                scrollboxSize: function () {
                    return Je(), We;
                },
                reliableTrDimensions: function () {
                    var e, t, i;
                    return (
                        null == Re &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (i = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (i.style.height = "9px"),
                            (i.style.display = "block"),
                            x.appendChild(e).appendChild(t).appendChild(i),
                            (i = C.getComputedStyle(t)),
                            (Re =
                                parseInt(i.height, 10) +
                                    parseInt(i.borderTopWidth, 10) +
                                    parseInt(i.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            x.removeChild(e)),
                        Re
                    );
                },
            }));
    var et = ["Webkit", "Moz", "ms"],
        tt = E.createElement("div").style,
        it = {};
    function nt(e) {
        return (
            S.cssProps[e] ||
            it[e] ||
            (e in tt
                ? e
                : (it[e] =
                      (function (e) {
                          for (
                              var t = e[0].toUpperCase() + e.slice(1),
                                  i = et.length;
                              i--;

                          )
                              if ((e = et[i] + t) in tt) return e;
                      })(e) || e))
        );
    }
    var st = /^(none|table(?!-c[ea]).+)/,
        rt = /^--/,
        ot = { position: "absolute", visibility: "hidden", display: "block" },
        at = { letterSpacing: "0", fontWeight: "400" };
    function lt(e, t, i) {
        var n = ve.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
    }
    function dt(e, t, i, n, s, r) {
        var o = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
            "margin" === i && (l += S.css(e, i + p[o], !0, s)),
                n
                    ? ("content" === i &&
                          (l -= S.css(e, "padding" + p[o], !0, s)),
                      "margin" !== i &&
                          (l -= S.css(e, "border" + p[o] + "Width", !0, s)))
                    : ((l += S.css(e, "padding" + p[o], !0, s)),
                      "padding" !== i
                          ? (l += S.css(e, "border" + p[o] + "Width", !0, s))
                          : (a += S.css(e, "border" + p[o] + "Width", !0, s)));
        return (
            !n &&
                0 <= r &&
                (l +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                r -
                                l -
                                a -
                                0.5
                        )
                    ) || 0),
            l
        );
    }
    function ct(e, t, i) {
        var n = qe(e),
            s =
                (!m.boxSizingReliable() || i) &&
                "border-box" === S.css(e, "boxSizing", !1, n),
            r = s,
            o = Qe(e, t, n),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(o)) {
            if (!i) return o;
            o = "auto";
        }
        return (
            ((!m.boxSizingReliable() && s) ||
                (!m.reliableTrDimensions() && l(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === S.css(e, "display", !1, n))) &&
                e.getClientRects().length &&
                ((s = "border-box" === S.css(e, "boxSizing", !1, n)),
                (r = a in e) && (o = e[a])),
            (o = parseFloat(o) || 0) +
                dt(e, t, i || (s ? "border" : "content"), r, n, o) +
                "px"
        );
    }
    function r(e, t, i, n, s) {
        return new r.prototype.init(e, t, i, n, s);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = Qe(e, "opacity")) ? "1" : t;
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                    r,
                    o,
                    a = b(t),
                    l = rt.test(t),
                    d = e.style;
                if (
                    (l || (t = nt(a)),
                    (o = S.cssHooks[t] || S.cssHooks[a]),
                    void 0 === i)
                )
                    return o && "get" in o && void 0 !== (s = o.get(e, !1, n))
                        ? s
                        : d[t];
                "string" == (r = typeof i) &&
                    (s = ve.exec(i)) &&
                    s[1] &&
                    ((i = be(e, t, s)), (r = "number")),
                    null != i &&
                        i == i &&
                        ("number" !== r ||
                            l ||
                            (i += (s && s[3]) || (S.cssNumber[a] ? "" : "px")),
                        m.clearCloneStyle ||
                            "" !== i ||
                            0 !== t.indexOf("background") ||
                            (d[t] = "inherit"),
                        (o && "set" in o && void 0 === (i = o.set(e, i, n))) ||
                            (l ? d.setProperty(t, i) : (d[t] = i)));
            }
        },
        css: function (e, t, i, n) {
            var s,
                r = b(t);
            return (
                rt.test(t) || (t = nt(r)),
                "normal" ===
                    (s =
                        void 0 ===
                        (s =
                            (r = S.cssHooks[t] || S.cssHooks[r]) && "get" in r
                                ? r.get(e, !0, i)
                                : s)
                            ? Qe(e, t, n)
                            : s) &&
                    t in at &&
                    (s = at[t]),
                "" === i || i
                    ? ((r = parseFloat(s)),
                      !0 === i || isFinite(r) ? r || 0 : s)
                    : s
            );
        },
    }),
        S.each(["height", "width"], function (e, o) {
            S.cssHooks[o] = {
                get: function (e, t, i) {
                    if (t)
                        return !st.test(S.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? ct(e, o, i)
                            : He(e, ot, function () {
                                  return ct(e, o, i);
                              });
                },
                set: function (e, t, i) {
                    var n = qe(e),
                        s = !m.scrollboxSize() && "absolute" === n.position,
                        r =
                            (s || i) &&
                            "border-box" === S.css(e, "boxSizing", !1, n),
                        i = i ? dt(e, o, i, r, n) : 0;
                    return (
                        r &&
                            s &&
                            (i -= Math.ceil(
                                e["offset" + o[0].toUpperCase() + o.slice(1)] -
                                    parseFloat(n[o]) -
                                    dt(e, o, "border", !1, n) -
                                    0.5
                            )),
                        i &&
                            (r = ve.exec(t)) &&
                            "px" !== (r[3] || "px") &&
                            ((e.style[o] = t), (t = S.css(e, o))),
                        lt(0, t, i)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = Ke(m.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Qe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            He(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (s, r) {
            (S.cssHooks[s + r] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            i = {},
                            n = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        i[s + p[t] + r] = n[t] || n[t - 2] || n[0];
                    return i;
                },
            }),
                "margin" !== s && (S.cssHooks[s + r].set = lt);
        }),
        S.fn.extend({
            css: function (e, t) {
                return u(
                    this,
                    function (e, t, i) {
                        var n,
                            s,
                            r = {},
                            o = 0;
                        if (Array.isArray(t)) {
                            for (n = qe(e), s = t.length; o < s; o++)
                                r[t[o]] = S.css(e, t[o], !1, n);
                            return r;
                        }
                        return void 0 !== i ? S.style(e, t, i) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = r).prototype = {
            constructor: r,
            init: function (e, t, i, n, s, r) {
                (this.elem = e),
                    (this.prop = i),
                    (this.easing = s || S.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = n),
                    (this.unit = r || (S.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var e = r.propHooks[this.prop];
                return (e && e.get ? e : r.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    i = r.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              S.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    (i && i.set ? i : r.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = r.prototype),
        ((r.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (e = S.css(e.elem, e.prop, "")) && "auto" !== e
                        ? e
                        : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop]
                        ? S.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!S.cssHooks[e.prop] &&
                              null == e.elem.style[nt(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = r.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = r.prototype.init),
        (S.fx.step = {});
    var L,
        ut,
        A,
        pt = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;
    function ft() {
        ut &&
            (!1 === E.hidden && C.requestAnimationFrame
                ? C.requestAnimationFrame(ft)
                : C.setTimeout(ft, S.fx.interval),
            S.fx.tick());
    }
    function gt() {
        return (
            C.setTimeout(function () {
                L = void 0;
            }),
            (L = Date.now())
        );
    }
    function mt(e, t) {
        var i,
            n = 0,
            s = { height: e };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            s["margin" + (i = p[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s;
    }
    function vt(e, t, i) {
        for (
            var n,
                s = ($.tweeners[t] || []).concat($.tweeners["*"]),
                r = 0,
                o = s.length;
            r < o;
            r++
        )
            if ((n = s[r].call(i, t, e))) return n;
    }
    function $(s, e, t) {
        var i,
            r,
            n,
            o,
            a,
            l,
            d,
            c = 0,
            u = $.prefilters.length,
            p = S.Deferred().always(function () {
                delete h.elem;
            }),
            h = function () {
                if (r) return !1;
                for (
                    var e = L || gt(),
                        e = Math.max(0, f.startTime + f.duration - e),
                        t = 1 - (e / f.duration || 0),
                        i = 0,
                        n = f.tweens.length;
                    i < n;
                    i++
                )
                    f.tweens[i].run(t);
                return (
                    p.notifyWith(s, [f, t, e]),
                    t < 1 && n
                        ? e
                        : (n || p.notifyWith(s, [f, 1, 0]),
                          p.resolveWith(s, [f]),
                          !1)
                );
            },
            f = p.promise({
                elem: s,
                props: S.extend({}, e),
                opts: S.extend(
                    !0,
                    { specialEasing: {}, easing: S.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: L || gt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = S.Tween(
                        s,
                        f.opts,
                        e,
                        t,
                        f.opts.specialEasing[e] || f.opts.easing
                    );
                    return f.tweens.push(t), t;
                },
                stop: function (e) {
                    var t = 0,
                        i = e ? f.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < i; t++) f.tweens[t].run(1);
                    return (
                        e
                            ? (p.notifyWith(s, [f, 1, 0]),
                              p.resolveWith(s, [f, e]))
                            : p.rejectWith(s, [f, e]),
                        this
                    );
                },
            }),
            g = f.props,
            m = g,
            v = f.opts.specialEasing;
        for (n in m)
            if (
                ((a = v[(o = b(n))]),
                (l = m[n]),
                Array.isArray(l) && ((a = l[1]), (l = m[n] = l[0])),
                n !== o && ((m[o] = l), delete m[n]),
                (d = S.cssHooks[o]) && "expand" in d)
            )
                for (n in ((l = d.expand(l)), delete m[o], l))
                    n in m || ((m[n] = l[n]), (v[n] = a));
            else v[o] = a;
        for (; c < u; c++)
            if ((i = $.prefilters[c].call(f, s, g, f.opts)))
                return (
                    y(i.stop) &&
                        (S._queueHooks(f.elem, f.opts.queue).stop =
                            i.stop.bind(i)),
                    i
                );
        return (
            S.map(g, vt, f),
            y(f.opts.start) && f.opts.start.call(s, f),
            f
                .progress(f.opts.progress)
                .done(f.opts.done, f.opts.complete)
                .fail(f.opts.fail)
                .always(f.opts.always),
            S.fx.timer(S.extend(h, { elem: s, anim: f, queue: f.opts.queue })),
            f
        );
    }
    (S.Animation = S.extend($, {
        tweeners: {
            "*": [
                function (e, t) {
                    var i = this.createTween(e, t);
                    return be(i.elem, e, ve.exec(t), i), i;
                },
            ],
        },
        tweener: function (e, t) {
            for (
                var i,
                    n = 0,
                    s = (e = y(e) ? ((t = e), ["*"]) : e.match(T)).length;
                n < s;
                n++
            )
                (i = e[n]),
                    ($.tweeners[i] = $.tweeners[i] || []),
                    $.tweeners[i].unshift(t);
        },
        prefilters: [
            function (e, t, i) {
                var n,
                    s,
                    r,
                    o,
                    a,
                    l,
                    d,
                    c = "width" in t || "height" in t,
                    u = this,
                    p = {},
                    h = e.style,
                    f = e.nodeType && me(e),
                    g = w.get(e, "fxshow");
                for (n in (i.queue ||
                    (null == (o = S._queueHooks(e, "fx")).unqueued &&
                        ((o.unqueued = 0),
                        (a = o.empty.fire),
                        (o.empty.fire = function () {
                            o.unqueued || a();
                        })),
                    o.unqueued++,
                    u.always(function () {
                        u.always(function () {
                            o.unqueued--,
                                S.queue(e, "fx").length || o.empty.fire();
                        });
                    })),
                t))
                    if (((s = t[n]), pt.test(s))) {
                        if (
                            (delete t[n],
                            (r = r || "toggle" === s),
                            s === (f ? "hide" : "show"))
                        ) {
                            if ("show" !== s || !g || void 0 === g[n]) continue;
                            f = !0;
                        }
                        p[n] = (g && g[n]) || S.style(e, n);
                    }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                    for (n in (c &&
                        1 === e.nodeType &&
                        ((i.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (d = g && g.display) &&
                            (d = w.get(e, "display")),
                        "none" === (c = S.css(e, "display")) &&
                            (d
                                ? (c = d)
                                : (M([e], !0),
                                  (d = e.style.display || d),
                                  (c = S.css(e, "display")),
                                  M([e]))),
                        ("inline" === c ||
                            ("inline-block" === c && null != d)) &&
                            "none" === S.css(e, "float") &&
                            (l ||
                                (u.done(function () {
                                    h.display = d;
                                }),
                                null == d &&
                                    ((c = h.display),
                                    (d = "none" === c ? "" : c))),
                            (h.display = "inline-block"))),
                    i.overflow &&
                        ((h.overflow = "hidden"),
                        u.always(function () {
                            (h.overflow = i.overflow[0]),
                                (h.overflowX = i.overflow[1]),
                                (h.overflowY = i.overflow[2]);
                        })),
                    (l = !1),
                    p))
                        l ||
                            (g
                                ? "hidden" in g && (f = g.hidden)
                                : (g = w.access(e, "fxshow", { display: d })),
                            r && (g.hidden = !f),
                            f && M([e], !0),
                            u.done(function () {
                                for (n in (f || M([e]),
                                w.remove(e, "fxshow"),
                                p))
                                    S.style(e, n, p[n]);
                            })),
                            (l = vt(f ? g[n] : 0, n, u)),
                            n in g ||
                                ((g[n] = l.start),
                                f && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, i) {
            var n =
                e && "object" == typeof e
                    ? S.extend({}, e)
                    : {
                          complete: i || (!i && t) || (y(e) && e),
                          duration: e,
                          easing: (i && t) || (t && !y(t) && t),
                      };
            return (
                S.fx.off
                    ? (n.duration = 0)
                    : "number" != typeof n.duration &&
                      (n.duration in S.fx.speeds
                          ? (n.duration = S.fx.speeds[n.duration])
                          : (n.duration = S.fx.speeds._default)),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    y(n.old) && n.old.call(this),
                        n.queue && S.dequeue(this, n.queue);
                }),
                n
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(me)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, i, n);
            },
            animate: function (t, e, i, n) {
                function s() {
                    var e = $(this, S.extend({}, t), o);
                    (r || w.get(this, "finish")) && e.stop(!0);
                }
                var r = S.isEmptyObject(t),
                    o = S.speed(e, i, n);
                return (
                    (s.finish = s),
                    r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
            },
            stop: function (s, e, r) {
                function o(e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                }
                return (
                    "string" != typeof s && ((r = e), (e = s), (s = void 0)),
                    e && this.queue(s || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != s && s + "queueHooks",
                            i = S.timers,
                            n = w.get(this);
                        if (t) n[t] && n[t].stop && o(n[t]);
                        else
                            for (t in n)
                                n[t] && n[t].stop && ht.test(t) && o(n[t]);
                        for (t = i.length; t--; )
                            i[t].elem !== this ||
                                (null != s && i[t].queue !== s) ||
                                (i[t].anim.stop(r), (e = !1), i.splice(t, 1));
                        (!e && r) || S.dequeue(this, s);
                    })
                );
            },
            finish: function (o) {
                return (
                    !1 !== o && (o = o || "fx"),
                    this.each(function () {
                        var e,
                            t = w.get(this),
                            i = t[o + "queue"],
                            n = t[o + "queueHooks"],
                            s = S.timers,
                            r = i ? i.length : 0;
                        for (
                            t.finish = !0,
                                S.queue(this, o, []),
                                n && n.stop && n.stop.call(this, !0),
                                e = s.length;
                            e--;

                        )
                            s[e].elem === this &&
                                s[e].queue === o &&
                                (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < r; e++)
                            i[e] && i[e].finish && i[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, n) {
            var s = S.fn[n];
            S.fn[n] = function (e, t, i) {
                return null == e || "boolean" == typeof e
                    ? s.apply(this, arguments)
                    : this.animate(mt(n, !0), e, t, i);
            };
        }),
        S.each(
            {
                slideDown: mt("show"),
                slideUp: mt("hide"),
                slideToggle: mt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, n) {
                S.fn[e] = function (e, t, i) {
                    return this.animate(n, e, t, i);
                };
            }
        ),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                i = S.timers;
            for (L = Date.now(); t < i.length; t++)
                (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || S.fx.stop(), (L = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            ut || ((ut = !0), ft());
        }),
        (S.fx.stop = function () {
            ut = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (n, e) {
            return (
                (n = (S.fx && S.fx.speeds[n]) || n),
                this.queue((e = e || "fx"), function (e, t) {
                    var i = C.setTimeout(e, n);
                    t.stop = function () {
                        C.clearTimeout(i);
                    };
                })
            );
        }),
        (A = E.createElement("input")),
        (i = E.createElement("select").appendChild(E.createElement("option"))),
        (A.type = "checkbox"),
        (m.checkOn = "" !== A.value),
        (m.optSelected = i.selected),
        ((A = E.createElement("input")).value = "t"),
        (A.type = "radio"),
        (m.radioValue = "t" === A.value);
    var yt,
        bt = S.expr.attrHandle,
        wt =
            (S.fn.extend({
                attr: function (e, t) {
                    return u(this, S.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        S.removeAttr(this, e);
                    });
                },
            }),
            S.extend({
                attr: function (e, t, i) {
                    var n,
                        s,
                        r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute
                            ? S.prop(e, t, i)
                            : ((1 === r && S.isXMLDoc(e)) ||
                                  (s =
                                      S.attrHooks[t.toLowerCase()] ||
                                      (S.expr.match.bool.test(t)
                                          ? yt
                                          : void 0)),
                              void 0 !== i
                                  ? null === i
                                      ? void S.removeAttr(e, t)
                                      : s &&
                                        "set" in s &&
                                        void 0 !== (n = s.set(e, i, t))
                                      ? n
                                      : (e.setAttribute(t, i + ""), i)
                                  : !(
                                        s &&
                                        "get" in s &&
                                        null !== (n = s.get(e, t))
                                    ) && null == (n = S.find.attr(e, t))
                                  ? void 0
                                  : n);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            var i;
                            if (!m.radioValue && "radio" === t && l(e, "input"))
                                return (
                                    (i = e.value),
                                    e.setAttribute("type", t),
                                    i && (e.value = i),
                                    t
                                );
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var i,
                        n = 0,
                        s = t && t.match(T);
                    if (s && 1 === e.nodeType)
                        for (; (i = s[n++]); ) e.removeAttribute(i);
                },
            }),
            (yt = {
                set: function (e, t, i) {
                    return (
                        !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
                    );
                },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var o = bt[t] || S.find.attr;
                bt[t] = function (e, t, i) {
                    var n,
                        s,
                        r = t.toLowerCase();
                    return (
                        i ||
                            ((s = bt[r]),
                            (bt[r] = n),
                            (n = null != o(e, t, i) ? r : null),
                            (bt[r] = s)),
                        n
                    );
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        xt = /^(?:a|area)$/i;
    function z(e) {
        return (e.match(T) || []).join(" ");
    }
    function O(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Ct(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(T)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return u(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, i) {
                var n,
                    s,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && S.isXMLDoc(e)) ||
                            ((t = S.propFix[t] || t), (s = S.propHooks[t])),
                        void 0 !== i
                            ? s && "set" in s && void 0 !== (n = s.set(e, i, t))
                                ? n
                                : (e[t] = i)
                            : s && "get" in s && null !== (n = s.get(e, t))
                            ? n
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : wt.test(e.nodeName) ||
                              (xt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return (
                        e && e.parentNode && e.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    e = e.parentNode;
                    e &&
                        (e.selectedIndex,
                        e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        S.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                S.propFix[this.toLowerCase()] = this;
            }
        ),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    i,
                    n,
                    s,
                    r,
                    o,
                    a = 0;
                if (y(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, O(this)));
                    });
                if ((e = Ct(t)).length)
                    for (; (i = this[a++]); )
                        if (
                            ((o = O(i)),
                            (n = 1 === i.nodeType && " " + z(o) + " "))
                        ) {
                            for (r = 0; (s = e[r++]); )
                                n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            o !== (o = z(n)) && i.setAttribute("class", o);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    i,
                    n,
                    s,
                    r,
                    o,
                    a = 0;
                if (y(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, O(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Ct(t)).length)
                    for (; (i = this[a++]); )
                        if (
                            ((o = O(i)),
                            (n = 1 === i.nodeType && " " + z(o) + " "))
                        ) {
                            for (r = 0; (s = e[r++]); )
                                for (; -1 < n.indexOf(" " + s + " "); )
                                    n = n.replace(" " + s + " ", " ");
                            o !== (o = z(n)) && i.setAttribute("class", o);
                        }
                return this;
            },
            toggleClass: function (s, t) {
                var r = typeof s,
                    o = "string" == r || Array.isArray(s);
                return "boolean" == typeof t && o
                    ? t
                        ? this.addClass(s)
                        : this.removeClass(s)
                    : y(s)
                    ? this.each(function (e) {
                          S(this).toggleClass(s.call(this, e, O(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, i, n;
                          if (o)
                              for (
                                  t = 0, i = S(this), n = Ct(s);
                                  (e = n[t++]);

                              )
                                  i.hasClass(e)
                                      ? i.removeClass(e)
                                      : i.addClass(e);
                          else
                              (void 0 !== s && "boolean" != r) ||
                                  ((e = O(this)) &&
                                      w.set(this, "__className__", e),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          (!e &&
                                              !1 !== s &&
                                              w.get(this, "__className__")) ||
                                              ""
                                      ));
                      });
            },
            hasClass: function (e) {
                for (var t, i = 0, n = " " + e + " "; (t = this[i++]); )
                    if (
                        1 === t.nodeType &&
                        -1 < (" " + z(O(t)) + " ").indexOf(n)
                    )
                        return !0;
                return !1;
            },
        });
    function Et(e) {
        e.stopPropagation();
    }
    var St = /\r/g,
        Tt =
            (S.fn.extend({
                val: function (t) {
                    var i,
                        e,
                        n,
                        s = this[0];
                    return arguments.length
                        ? ((n = y(t)),
                          this.each(function (e) {
                              1 === this.nodeType &&
                                  (null ==
                                  (e = n ? t.call(this, e, S(this).val()) : t)
                                      ? (e = "")
                                      : "number" == typeof e
                                      ? (e += "")
                                      : Array.isArray(e) &&
                                        (e = S.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((i =
                                      S.valHooks[this.type] ||
                                      S.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      "set" in i &&
                                      void 0 !== i.set(this, e, "value")) ||
                                      (this.value = e));
                          }))
                        : s
                        ? (i =
                              S.valHooks[s.type] ||
                              S.valHooks[s.nodeName.toLowerCase()]) &&
                          "get" in i &&
                          void 0 !== (e = i.get(s, "value"))
                            ? e
                            : "string" == typeof (e = s.value)
                            ? e.replace(St, "")
                            : null == e
                            ? ""
                            : e
                        : void 0;
                },
            }),
            S.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = S.find.attr(e, "value");
                            return null != t ? t : z(S.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (
                                var t,
                                    i = e.options,
                                    n = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    r = s ? null : [],
                                    o = s ? n + 1 : i.length,
                                    a = n < 0 ? o : s ? n : 0;
                                a < o;
                                a++
                            )
                                if (
                                    ((t = i[a]).selected || a === n) &&
                                    !t.disabled &&
                                    (!t.parentNode.disabled ||
                                        !l(t.parentNode, "optgroup"))
                                ) {
                                    if (((t = S(t).val()), s)) return t;
                                    r.push(t);
                                }
                            return r;
                        },
                        set: function (e, t) {
                            for (
                                var i,
                                    n,
                                    s = e.options,
                                    r = S.makeArray(t),
                                    o = s.length;
                                o--;

                            )
                                ((n = s[o]).selected =
                                    -1 <
                                    S.inArray(S.valHooks.option.get(n), r)) &&
                                    (i = !0);
                            return i || (e.selectedIndex = -1), r;
                        },
                    },
                },
            }),
            S.each(["radio", "checkbox"], function () {
                (S.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t))
                            return (e.checked = -1 < S.inArray(S(e).val(), t));
                    },
                }),
                    m.checkOn ||
                        (S.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value")
                                ? "on"
                                : e.value;
                        });
            }),
            (m.focusin = "onfocusin" in C),
            /^(?:focusinfocus|focusoutblur)$/),
        kt =
            (S.extend(S.event, {
                trigger: function (e, t, i, n) {
                    var s,
                        r,
                        o,
                        a,
                        l,
                        d,
                        c,
                        u = [i || E],
                        p = W.call(e, "type") ? e.type : e,
                        h = W.call(e, "namespace")
                            ? e.namespace.split(".")
                            : [],
                        f = (c = r = i = i || E);
                    if (
                        3 !== i.nodeType &&
                        8 !== i.nodeType &&
                        !Tt.test(p + S.event.triggered) &&
                        (-1 < p.indexOf(".") &&
                            ((p = (h = p.split(".")).shift()), h.sort()),
                        (a = p.indexOf(":") < 0 && "on" + p),
                        ((e = e[S.expando]
                            ? e
                            : new S.Event(
                                  p,
                                  "object" == typeof e && e
                              )).isTrigger = n ? 2 : 3),
                        (e.namespace = h.join(".")),
                        (e.rnamespace = e.namespace
                            ? new RegExp(
                                  "(^|\\.)" +
                                      h.join("\\.(?:.*\\.|)") +
                                      "(\\.|$)"
                              )
                            : null),
                        (e.result = void 0),
                        e.target || (e.target = i),
                        (t = null == t ? [e] : S.makeArray(t, [e])),
                        (d = S.event.special[p] || {}),
                        n || !d.trigger || !1 !== d.trigger.apply(i, t))
                    ) {
                        if (!n && !d.noBubble && !g(i)) {
                            for (
                                o = d.delegateType || p,
                                    Tt.test(o + p) || (f = f.parentNode);
                                f;
                                f = f.parentNode
                            )
                                u.push(f), (r = f);
                            r === (i.ownerDocument || E) &&
                                u.push(r.defaultView || r.parentWindow || C);
                        }
                        for (s = 0; (f = u[s++]) && !e.isPropagationStopped(); )
                            (c = f),
                                (e.type = 1 < s ? o : d.bindType || p),
                                (l =
                                    (w.get(f, "events") || Object.create(null))[
                                        e.type
                                    ] && w.get(f, "handle")) && l.apply(f, t),
                                (l = a && f[a]) &&
                                    l.apply &&
                                    v(f) &&
                                    ((e.result = l.apply(f, t)),
                                    !1 === e.result && e.preventDefault());
                        return (
                            (e.type = p),
                            n ||
                                e.isDefaultPrevented() ||
                                (d._default &&
                                    !1 !== d._default.apply(u.pop(), t)) ||
                                !v(i) ||
                                (a &&
                                    y(i[p]) &&
                                    !g(i) &&
                                    ((r = i[a]) && (i[a] = null),
                                    (S.event.triggered = p),
                                    e.isPropagationStopped() &&
                                        c.addEventListener(p, Et),
                                    i[p](),
                                    e.isPropagationStopped() &&
                                        c.removeEventListener(p, Et),
                                    (S.event.triggered = void 0),
                                    r && (i[a] = r))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, i) {
                    i = S.extend(new S.Event(), i, {
                        type: e,
                        isSimulated: !0,
                    });
                    S.event.trigger(i, null, t);
                },
            }),
            S.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        S.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var i = this[0];
                    if (i) return S.event.trigger(e, t, i, !0);
                },
            }),
            m.focusin ||
                S.each({ focus: "focusin", blur: "focusout" }, function (i, n) {
                    function s(e) {
                        S.event.simulate(n, e.target, S.event.fix(e));
                    }
                    S.event.special[n] = {
                        setup: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = w.access(e, n);
                            t || e.addEventListener(i, s, !0),
                                w.access(e, n, (t || 0) + 1);
                        },
                        teardown: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = w.access(e, n) - 1;
                            t
                                ? w.access(e, n, t)
                                : (e.removeEventListener(i, s, !0),
                                  w.remove(e, n));
                        },
                    };
                }),
            C.location),
        Mt = { guid: Date.now() },
        It = /\?/,
        Pt =
            ((S.parseXML = function (e) {
                var t, i;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new C.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {}
                return (
                    (i = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !i) ||
                        S.error(
                            "Invalid XML: " +
                                (i
                                    ? S.map(i.childNodes, function (e) {
                                          return e.textContent;
                                      }).join("\n")
                                    : e)
                        ),
                    t
                );
            }),
            /\[\]$/),
        Dt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    (S.param = function (e, t) {
        function i(e, t) {
            (t = y(t) ? t() : t),
                (s[s.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == t ? "" : t));
        }
        var n,
            s = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                i(this.name, this.value);
            });
        else
            for (n in e)
                !(function i(n, e, s, r) {
                    if (Array.isArray(e))
                        S.each(e, function (e, t) {
                            s || Pt.test(n)
                                ? r(n, t)
                                : i(
                                      n +
                                          "[" +
                                          ("object" == typeof t && null != t
                                              ? e
                                              : "") +
                                          "]",
                                      t,
                                      s,
                                      r
                                  );
                        });
                    else if (s || "object" !== f(e)) r(n, e);
                    else for (var t in e) i(n + "[" + t + "]", e[t], s, r);
                })(n, e[n], t, i);
        return s.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !S(this).is(":disabled") &&
                            At.test(this.nodeName) &&
                            !Lt.test(e) &&
                            (this.checked || !xe.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var i = S(this).val();
                        return null == i
                            ? null
                            : Array.isArray(i)
                            ? S.map(i, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Dt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: i.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var $t = /%20/g,
        zt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        qt = {},
        Ht = {},
        Bt = "*/".concat("*"),
        Ft = E.createElement("a");
    function Wt(r) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var i,
                n = 0,
                s = e.toLowerCase().match(T) || [];
            if (y(t))
                for (; (i = s[n++]); )
                    "+" === i[0]
                        ? ((i = i.slice(1) || "*"),
                          (r[i] = r[i] || []).unshift(t))
                        : (r[i] = r[i] || []).push(t);
        };
    }
    function Gt(t, n, s, r) {
        var o = {},
            a = t === Ht;
        function l(e) {
            var i;
            return (
                (o[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    t = t(n, s, r);
                    return "string" != typeof t || a || o[t]
                        ? a
                            ? !(i = t)
                            : void 0
                        : (n.dataTypes.unshift(t), l(t), !1);
                }),
                i
            );
        }
        return l(n.dataTypes[0]) || (!o["*"] && l("*"));
    }
    function Rt(e, t) {
        var i,
            n,
            s = S.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : (n = n || {}))[i] = t[i]);
        return n && S.extend(!0, e, n), e;
    }
    (Ft.href = kt.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        kt.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Rt(Rt(e, S.ajaxSettings), t) : Rt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Wt(qt),
            ajaxTransport: Wt(Ht),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    d,
                    c,
                    i,
                    u,
                    p,
                    h,
                    n,
                    s,
                    f = S.ajaxSetup({}, (t = t || {})),
                    g = f.context || f,
                    m = f.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                    v = S.Deferred(),
                    y = S.Callbacks("once memory"),
                    b = f.statusCode || {},
                    r = {},
                    o = {},
                    a = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (p) {
                                if (!i)
                                    for (i = {}; (t = Nt.exec(c)); )
                                        i[t[1].toLowerCase() + " "] = (
                                            i[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = i[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return p ? c : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == p &&
                                    ((e = o[e.toLowerCase()] =
                                        o[e.toLowerCase()] || e),
                                    (r[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == p && (f.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (p) w.always(e[w.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || a;
                            return l && l.abort(e), x(0, e), this;
                        },
                    };
                if (
                    (v.promise(w),
                    (f.url = ((e || f.url || kt.href) + "").replace(
                        jt,
                        kt.protocol + "//"
                    )),
                    (f.type = t.method || t.type || f.method || f.type),
                    (f.dataTypes = (f.dataType || "*")
                        .toLowerCase()
                        .match(T) || [""]),
                    null == f.crossDomain)
                ) {
                    s = E.createElement("a");
                    try {
                        (s.href = f.url),
                            (s.href = s.href),
                            (f.crossDomain =
                                Ft.protocol + "//" + Ft.host !=
                                s.protocol + "//" + s.host);
                    } catch (e) {
                        f.crossDomain = !0;
                    }
                }
                if (
                    (f.data &&
                        f.processData &&
                        "string" != typeof f.data &&
                        (f.data = S.param(f.data, f.traditional)),
                    Gt(qt, f, t, w),
                    p)
                )
                    return w;
                for (n in ((h = S.event && f.global) &&
                    0 == S.active++ &&
                    S.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !_t.test(f.type)),
                (d = f.url.replace(zt, "")),
                f.hasContent
                    ? f.data &&
                      f.processData &&
                      0 ===
                          (f.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (f.data = f.data.replace($t, "+"))
                    : ((s = f.url.slice(d.length)),
                      f.data &&
                          (f.processData || "string" == typeof f.data) &&
                          ((d += (It.test(d) ? "&" : "?") + f.data),
                          delete f.data),
                      !1 === f.cache &&
                          ((d = d.replace(Ot, "$1")),
                          (s =
                              (It.test(d) ? "&" : "?") + "_=" + Mt.guid++ + s)),
                      (f.url = d + s)),
                f.ifModified &&
                    (S.lastModified[d] &&
                        w.setRequestHeader(
                            "If-Modified-Since",
                            S.lastModified[d]
                        ),
                    S.etag[d] &&
                        w.setRequestHeader("If-None-Match", S.etag[d])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                    t.contentType) &&
                    w.setRequestHeader("Content-Type", f.contentType),
                w.setRequestHeader(
                    "Accept",
                    f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                        ? f.accepts[f.dataTypes[0]] +
                              ("*" !== f.dataTypes[0]
                                  ? ", " + Bt + "; q=0.01"
                                  : "")
                        : f.accepts["*"]
                ),
                f.headers))
                    w.setRequestHeader(n, f.headers[n]);
                if (f.beforeSend && (!1 === f.beforeSend.call(g, w, f) || p))
                    return w.abort();
                if (
                    ((a = "abort"),
                    y.add(f.complete),
                    w.done(f.success),
                    w.fail(f.error),
                    (l = Gt(Ht, f, t, w)))
                ) {
                    if (
                        ((w.readyState = 1),
                        h && m.trigger("ajaxSend", [w, f]),
                        p)
                    )
                        return w;
                    f.async &&
                        0 < f.timeout &&
                        (u = C.setTimeout(function () {
                            w.abort("timeout");
                        }, f.timeout));
                    try {
                        (p = !1), l.send(r, x);
                    } catch (e) {
                        if (p) throw e;
                        x(-1, e);
                    }
                } else x(-1, "No Transport");
                function x(e, t, i, n) {
                    var s,
                        r,
                        o,
                        a = t;
                    p ||
                        ((p = !0),
                        u && C.clearTimeout(u),
                        (l = void 0),
                        (c = n || ""),
                        (w.readyState = 0 < e ? 4 : 0),
                        (n = (200 <= e && e < 300) || 304 === e),
                        i &&
                            (o = (function (e, t, i) {
                                for (
                                    var n,
                                        s,
                                        r,
                                        o,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                        void 0 === n &&
                                            (n =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (n)
                                    for (s in a)
                                        if (a[s] && a[s].test(n)) {
                                            l.unshift(s);
                                            break;
                                        }
                                if (l[0] in i) r = l[0];
                                else {
                                    for (s in i) {
                                        if (
                                            !l[0] ||
                                            e.converters[s + " " + l[0]]
                                        ) {
                                            r = s;
                                            break;
                                        }
                                        o = o || s;
                                    }
                                    r = r || o;
                                }
                                if (r) return r !== l[0] && l.unshift(r), i[r];
                            })(f, w, i)),
                        !n &&
                            -1 < S.inArray("script", f.dataTypes) &&
                            S.inArray("json", f.dataTypes) < 0 &&
                            (f.converters["text script"] = function () {}),
                        (o = (function (e, t, i, n) {
                            var s,
                                r,
                                o,
                                a,
                                l,
                                d = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (o in e.converters)
                                    d[o.toLowerCase()] = e.converters[o];
                            for (r = c.shift(); r; )
                                if (
                                    (e.responseFields[r] &&
                                        (i[e.responseFields[r]] = t),
                                    !l &&
                                        n &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = r),
                                    (r = c.shift()))
                                )
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                        if (
                                            !(o = d[l + " " + r] || d["* " + r])
                                        )
                                            for (s in d)
                                                if (
                                                    (a = s.split(" "))[1] ===
                                                        r &&
                                                    (o =
                                                        d[l + " " + a[0]] ||
                                                        d["* " + a[0]])
                                                ) {
                                                    !0 === o
                                                        ? (o = d[s])
                                                        : !0 !== d[s] &&
                                                          ((r = a[0]),
                                                          c.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== o)
                                            if (o && e.throws) t = o(t);
                                            else
                                                try {
                                                    t = o(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: o
                                                            ? e
                                                            : "No conversion from " +
                                                              l +
                                                              " to " +
                                                              r,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(f, o, w, n)),
                        n
                            ? (f.ifModified &&
                                  ((i = w.getResponseHeader("Last-Modified")) &&
                                      (S.lastModified[d] = i),
                                  (i = w.getResponseHeader("etag")) &&
                                      (S.etag[d] = i)),
                              204 === e || "HEAD" === f.type
                                  ? (a = "nocontent")
                                  : 304 === e
                                  ? (a = "notmodified")
                                  : ((a = o.state),
                                    (s = o.data),
                                    (n = !(r = o.error))))
                            : ((r = a),
                              (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                        (w.status = e),
                        (w.statusText = (t || a) + ""),
                        n
                            ? v.resolveWith(g, [s, a, w])
                            : v.rejectWith(g, [w, a, r]),
                        w.statusCode(b),
                        (b = void 0),
                        h &&
                            m.trigger(n ? "ajaxSuccess" : "ajaxError", [
                                w,
                                f,
                                n ? s : r,
                            ]),
                        y.fireWith(g, [w, a]),
                        h &&
                            (m.trigger("ajaxComplete", [w, f]),
                            --S.active || S.event.trigger("ajaxStop")));
                }
                return w;
            },
            getJSON: function (e, t, i) {
                return S.get(e, t, i, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, s) {
            S[s] = function (e, t, i, n) {
                return (
                    y(t) && ((n = n || i), (i = t), (t = void 0)),
                    S.ajax(
                        S.extend(
                            {
                                url: e,
                                type: s,
                                dataType: n,
                                data: t,
                                success: i,
                            },
                            S.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        S.ajaxPrefilter(function (e) {
            for (var t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, i) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, i);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (y(e) && (e = e.call(this[0])),
                        (e = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (i) {
                return y(i)
                    ? this.each(function (e) {
                          S(this).wrapInner(i.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(i) : e.append(i);
                      });
            },
            wrap: function (t) {
                var i = y(t);
                return this.each(function (e) {
                    S(this).wrapAll(i ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Xt = { 0: 200, 1223: 204 },
        Vt = S.ajaxSettings.xhr();
    (m.cors = !!Vt && "withCredentials" in Vt),
        (m.ajax = Vt = !!Vt),
        S.ajaxTransport(function (s) {
            var r, o;
            if (m.cors || (Vt && !s.crossDomain))
                return {
                    send: function (e, t) {
                        var i,
                            n = s.xhr();
                        if (
                            (n.open(
                                s.type,
                                s.url,
                                s.async,
                                s.username,
                                s.password
                            ),
                            s.xhrFields)
                        )
                            for (i in s.xhrFields) n[i] = s.xhrFields[i];
                        for (i in (s.mimeType &&
                            n.overrideMimeType &&
                            n.overrideMimeType(s.mimeType),
                        s.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            n.setRequestHeader(i, e[i]);
                        (r = function (e) {
                            return function () {
                                r &&
                                    ((r =
                                        o =
                                        n.onload =
                                        n.onerror =
                                        n.onabort =
                                        n.ontimeout =
                                        n.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? n.abort()
                                        : "error" === e
                                        ? "number" != typeof n.status
                                            ? t(0, "error")
                                            : t(n.status, n.statusText)
                                        : t(
                                              Xt[n.status] || n.status,
                                              n.statusText,
                                              "text" !==
                                                  (n.responseType || "text") ||
                                                  "string" !=
                                                      typeof n.responseText
                                                  ? { binary: n.response }
                                                  : { text: n.responseText },
                                              n.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (n.onload = r()),
                            (o = n.onerror = n.ontimeout = r("error")),
                            void 0 !== n.onabort
                                ? (n.onabort = o)
                                : (n.onreadystatechange = function () {
                                      4 === n.readyState &&
                                          C.setTimeout(function () {
                                              r && o();
                                          });
                                  }),
                            (r = r("abort"));
                        try {
                            n.send((s.hasContent && s.data) || null);
                        } catch (e) {
                            if (r) throw e;
                        }
                    },
                    abort: function () {
                        r && r();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (i) {
            var n, s;
            if (i.crossDomain || i.scriptAttrs)
                return {
                    send: function (e, t) {
                        (n = S("<script>")
                            .attr(i.scriptAttrs || {})
                            .prop({ charset: i.scriptCharset, src: i.url })
                            .on(
                                "load error",
                                (s = function (e) {
                                    n.remove(),
                                        (s = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(n[0]);
                    },
                    abort: function () {
                        s && s();
                    },
                };
        });
    var Yt = [],
        Ut = /(=)\?(?=&|$)|\?\?/,
        Qt =
            (S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Yt.pop() || S.expando + "_" + Mt.guid++;
                    return (this[e] = !0), e;
                },
            }),
            S.ajaxPrefilter("json jsonp", function (e, t, i) {
                var n,
                    s,
                    r,
                    o =
                        !1 !== e.jsonp &&
                        (Ut.test(e.url)
                            ? "url"
                            : "string" == typeof e.data &&
                              0 ===
                                  (e.contentType || "").indexOf(
                                      "application/x-www-form-urlencoded"
                                  ) &&
                              Ut.test(e.data) &&
                              "data");
                if (o || "jsonp" === e.dataTypes[0])
                    return (
                        (n = e.jsonpCallback =
                            y(e.jsonpCallback)
                                ? e.jsonpCallback()
                                : e.jsonpCallback),
                        o
                            ? (e[o] = e[o].replace(Ut, "$1" + n))
                            : !1 !== e.jsonp &&
                              (e.url +=
                                  (It.test(e.url) ? "&" : "?") +
                                  e.jsonp +
                                  "=" +
                                  n),
                        (e.converters["script json"] = function () {
                            return r || S.error(n + " was not called"), r[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (s = C[n]),
                        (C[n] = function () {
                            r = arguments;
                        }),
                        i.always(function () {
                            void 0 === s ? S(C).removeProp(n) : (C[n] = s),
                                e[n] &&
                                    ((e.jsonpCallback = t.jsonpCallback),
                                    Yt.push(n)),
                                r && y(s) && s(r[0]),
                                (r = s = void 0);
                        }),
                        "script"
                    );
            }),
            (m.createHTMLDocument =
                (((e = E.implementation.createHTMLDocument("").body).innerHTML =
                    "<form></form><form></form>"),
                2 === e.childNodes.length)),
            (S.parseHTML = function (e, t, i) {
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((i = t), (t = !1)),
                      t ||
                          (m.createHTMLDocument
                              ? (((n = (t =
                                    E.implementation.createHTMLDocument(
                                        ""
                                    )).createElement("base")).href =
                                    E.location.href),
                                t.head.appendChild(n))
                              : (t = E)),
                      (n = !i && []),
                      (i = K.exec(e))
                          ? [t.createElement(i[1])]
                          : ((i = ke([e], t, n)),
                            n && n.length && S(n).remove(),
                            S.merge([], i.childNodes)));
                var n;
            }),
            (S.fn.load = function (e, t, i) {
                var n,
                    s,
                    r,
                    o = this,
                    a = e.indexOf(" ");
                return (
                    -1 < a && ((n = z(e.slice(a))), (e = e.slice(0, a))),
                    y(t)
                        ? ((i = t), (t = void 0))
                        : t && "object" == typeof t && (s = "POST"),
                    0 < o.length &&
                        S.ajax({
                            url: e,
                            type: s || "GET",
                            dataType: "html",
                            data: t,
                        })
                            .done(function (e) {
                                (r = arguments),
                                    o.html(
                                        n
                                            ? S("<div>")
                                                  .append(S.parseHTML(e))
                                                  .find(n)
                                            : e
                                    );
                            })
                            .always(
                                i &&
                                    function (e, t) {
                                        o.each(function () {
                                            i.apply(
                                                this,
                                                r || [e.responseText, t, e]
                                            );
                                        });
                                    }
                            ),
                    this
                );
            }),
            (S.expr.pseudos.animated = function (t) {
                return S.grep(S.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (S.offset = {
                setOffset: function (e, t, i) {
                    var n,
                        s,
                        r,
                        o,
                        a = S.css(e, "position"),
                        l = S(e),
                        d = {};
                    "static" === a && (e.style.position = "relative"),
                        (r = l.offset()),
                        (n = S.css(e, "top")),
                        (o = S.css(e, "left")),
                        (a =
                            ("absolute" === a || "fixed" === a) &&
                            -1 < (n + o).indexOf("auto")
                                ? ((s = (a = l.position()).top), a.left)
                                : ((s = parseFloat(n) || 0),
                                  parseFloat(o) || 0)),
                        null !=
                            (t = y(t) ? t.call(e, i, S.extend({}, r)) : t)
                                .top && (d.top = t.top - r.top + s),
                        null != t.left && (d.left = t.left - r.left + a),
                        "using" in t ? t.using.call(e, d) : l.css(d);
                },
            }),
            S.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  S.offset.setOffset(this, t, e);
                              });
                    var e,
                        i = this[0];
                    return i
                        ? i.getClientRects().length
                            ? ((e = i.getBoundingClientRect()),
                              (i = i.ownerDocument.defaultView),
                              {
                                  top: e.top + i.pageYOffset,
                                  left: e.left + i.pageXOffset,
                              })
                            : { top: 0, left: 0 }
                        : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            i,
                            n = this[0],
                            s = { top: 0, left: 0 };
                        if ("fixed" === S.css(n, "position"))
                            t = n.getBoundingClientRect();
                        else {
                            for (
                                t = this.offset(),
                                    i = n.ownerDocument,
                                    e = n.offsetParent || i.documentElement;
                                e &&
                                (e === i.body || e === i.documentElement) &&
                                "static" === S.css(e, "position");

                            )
                                e = e.parentNode;
                            e &&
                                e !== n &&
                                1 === e.nodeType &&
                                (((s = S(e).offset()).top += S.css(
                                    e,
                                    "borderTopWidth",
                                    !0
                                )),
                                (s.left += S.css(e, "borderLeftWidth", !0)));
                        }
                        return {
                            top: t.top - s.top - S.css(n, "marginTop", !0),
                            left: t.left - s.left - S.css(n, "marginLeft", !0),
                        };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (
                            var e = this.offsetParent;
                            e && "static" === S.css(e, "position");

                        )
                            e = e.offsetParent;
                        return e || x;
                    });
                },
            }),
            S.each(
                { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function (t, s) {
                    var r = "pageYOffset" === s;
                    S.fn[t] = function (e) {
                        return u(
                            this,
                            function (e, t, i) {
                                var n;
                                if (
                                    (g(e)
                                        ? (n = e)
                                        : 9 === e.nodeType &&
                                          (n = e.defaultView),
                                    void 0 === i)
                                )
                                    return n ? n[s] : e[t];
                                n
                                    ? n.scrollTo(
                                          r ? n.pageXOffset : i,
                                          r ? i : n.pageYOffset
                                      )
                                    : (e[t] = i);
                            },
                            t,
                            e,
                            arguments.length
                        );
                    };
                }
            ),
            S.each(["top", "left"], function (e, i) {
                S.cssHooks[i] = Ke(m.pixelPosition, function (e, t) {
                    if (t)
                        return (
                            (t = Qe(e, i)),
                            Ye.test(t) ? S(e).position()[i] + "px" : t
                        );
                });
            }),
            S.each({ Height: "height", Width: "width" }, function (o, a) {
                S.each(
                    { padding: "inner" + o, content: a, "": "outer" + o },
                    function (n, r) {
                        S.fn[r] = function (e, t) {
                            var i =
                                    arguments.length &&
                                    (n || "boolean" != typeof e),
                                s =
                                    n ||
                                    (!0 === e || !0 === t
                                        ? "margin"
                                        : "border");
                            return u(
                                this,
                                function (e, t, i) {
                                    var n;
                                    return g(e)
                                        ? 0 === r.indexOf("outer")
                                            ? e["inner" + o]
                                            : e.document.documentElement[
                                                  "client" + o
                                              ]
                                        : 9 === e.nodeType
                                        ? ((n = e.documentElement),
                                          Math.max(
                                              e.body["scroll" + o],
                                              n["scroll" + o],
                                              e.body["offset" + o],
                                              n["offset" + o],
                                              n["client" + o]
                                          ))
                                        : void 0 === i
                                        ? S.css(e, t, s)
                                        : S.style(e, t, i, s);
                                },
                                a,
                                i ? e : void 0,
                                i
                            );
                        };
                    }
                );
            }),
            S.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function (e, t) {
                    S.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }
            ),
            S.fn.extend({
                bind: function (e, t, i) {
                    return this.on(e, null, t, i);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, i, n) {
                    return this.on(t, e, i, n);
                },
                undelegate: function (e, t, i) {
                    return 1 === arguments.length
                        ? this.off(e, "**")
                        : this.off(t, e || "**", i);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            S.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (e, i) {
                    S.fn[i] = function (e, t) {
                        return 0 < arguments.length
                            ? this.on(i, null, e, t)
                            : this.trigger(i);
                    };
                }
            ),
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Kt =
            ((S.proxy = function (e, t) {
                var i, n;
                if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    y(e))
                )
                    return (
                        (i = a.call(arguments, 2)),
                        ((n = function () {
                            return e.apply(
                                t || this,
                                i.concat(a.call(arguments))
                            );
                        }).guid = e.guid =
                            e.guid || S.guid++),
                        n
                    );
            }),
            (S.holdReady = function (e) {
                e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = l),
            (S.isFunction = y),
            (S.isWindow = g),
            (S.camelCase = b),
            (S.type = f),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
                var t = S.type(e);
                return (
                    ("number" === t || "string" === t) &&
                    !isNaN(e - parseFloat(e))
                );
            }),
            (S.trim = function (e) {
                return null == e ? "" : (e + "").replace(Qt, "");
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return S;
                }),
            C.jQuery),
        Jt = C.$;
    return (
        (S.noConflict = function (e) {
            return (
                C.$ === S && (C.$ = Jt),
                e && C.jQuery === S && (C.jQuery = Kt),
                S
            );
        }),
        void 0 === N && (C.jQuery = C.$ = S),
        S
    );
}),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
                  return i(t, e);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("jquery")))
            : (t.jQueryBridget = i(t, t.jQuery));
    })(window, function (e, t) {
        "use strict";
        var i = Array.prototype.slice,
            n = e.console,
            u =
                void 0 === n
                    ? function () {}
                    : function (e) {
                          n.error(e);
                      };
        function s(l, d, c) {
            (c = c || t || e.jQuery) &&
                (d.prototype.option ||
                    (d.prototype.option = function (e) {
                        c.isPlainObject(e) &&
                            (this.options = c.extend(!0, this.options, e));
                    }),
                (c.fn[l] = function (e) {
                    var t, n, s, r, o, a;
                    return "string" == typeof e
                        ? ((t = i.call(arguments, 1)),
                          (s = t),
                          (o = "$()." + l + '("' + (n = e) + '")'),
                          (t = this).each(function (e, t) {
                              var i,
                                  t = c.data(t, l);
                              t
                                  ? (i = t[n]) && "_" != n.charAt(0)
                                      ? ((i = i.apply(t, s)),
                                        (r = void 0 === r ? i : r))
                                      : u(o + " is not a valid method")
                                  : u(
                                        l +
                                            " not initialized. Cannot call methods, i.e. " +
                                            o
                                    );
                          }),
                          void 0 !== r ? r : t)
                        : ((a = e),
                          this.each(function (e, t) {
                              var i = c.data(t, l);
                              i
                                  ? (i.option(a), i._init())
                                  : ((i = new d(t, a)), c.data(t, l, i));
                          }),
                          this);
                }),
                r(c));
        }
        function r(e) {
            e && !e.bridget && (e.bridget = s);
        }
        return r(t || e.jQuery), s;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() {}
        var t = e.prototype;
        return (
            (t.on = function (e, t) {
                var i;
                if (e && t)
                    return (
                        (i = this._events = this._events || {}),
                        (i = i[e] = i[e] || []),
                        -1 == i.indexOf(t) && i.push(t),
                        this
                    );
            }),
            (t.once = function (e, t) {
                var i;
                if (e && t)
                    return (
                        this.on(e, t),
                        (i = this._onceEvents = this._onceEvents || {}),
                        ((i[e] = i[e] || {})[t] = !0),
                        this
                    );
            }),
            (t.off = function (e, t) {
                e = this._events && this._events[e];
                if (e && e.length)
                    return (t = e.indexOf(t)), -1 != t && e.splice(t, 1), this;
            }),
            (t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    (i = i.slice(0)), (t = t || []);
                    for (
                        var n = this._onceEvents && this._onceEvents[e], s = 0;
                        s < i.length;
                        s++
                    ) {
                        var r = i[s];
                        n && n[r] && (this.off(e, r), delete n[r]),
                            r.apply(this, t);
                    }
                    return this;
                }
            }),
            (t.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("get-size/get-size", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.getSize = t());
    })(window, function () {
        "use strict";
        function m(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        var t =
                "undefined" == typeof console
                    ? function () {}
                    : function (e) {
                          console.error(e);
                      },
            v = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            y = v.length;
        function b(e) {
            e = getComputedStyle(e);
            return (
                e ||
                    t(
                        "Style returned " +
                            e +
                            ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                e
            );
        }
        var w,
            x = !1;
        function C(e) {
            if (
                (x ||
                    ((x = !0),
                    ((c = document.createElement("div")).style.width = "200px"),
                    (c.style.padding = "1px 2px 3px 4px"),
                    (c.style.borderStyle = "solid"),
                    (c.style.borderWidth = "1px 2px 3px 4px"),
                    (c.style.boxSizing = "border-box"),
                    (d = document.body || document.documentElement).appendChild(
                        c
                    ),
                    (r = b(c)),
                    (w = 200 == Math.round(m(r.width))),
                    (C.isBoxSizeOuter = w),
                    d.removeChild(c)),
                (e = "string" == typeof e ? document.querySelector(e) : e) &&
                    "object" == typeof e &&
                    e.nodeType)
            ) {
                var t = b(e);
                if ("none" == t.display) {
                    for (
                        var i = {
                                width: 0,
                                height: 0,
                                innerWidth: 0,
                                innerHeight: 0,
                                outerWidth: 0,
                                outerHeight: 0,
                            },
                            n = 0;
                        n < y;
                        n++
                    )
                        i[v[n]] = 0;
                    return i;
                }
                for (
                    var s = {},
                        r =
                            ((s.width = e.offsetWidth),
                            (s.height = e.offsetHeight),
                            (s.isBorderBox = "border-box" == t.boxSizing)),
                        o = 0;
                    o < y;
                    o++
                ) {
                    var a = v[o],
                        l = t[a],
                        l = parseFloat(l);
                    s[a] = isNaN(l) ? 0 : l;
                }
                var d = s.paddingLeft + s.paddingRight,
                    c = s.paddingTop + s.paddingBottom,
                    e = s.marginLeft + s.marginRight,
                    u = s.marginTop + s.marginBottom,
                    p = s.borderLeftWidth + s.borderRightWidth,
                    h = s.borderTopWidth + s.borderBottomWidth,
                    f = r && w,
                    g = m(t.width),
                    g =
                        (!1 !== g && (s.width = g + (f ? 0 : d + p)),
                        m(t.height));
                return (
                    !1 !== g && (s.height = g + (f ? 0 : c + h)),
                    (s.innerWidth = s.width - (d + p)),
                    (s.innerHeight = s.height - (c + h)),
                    (s.outerWidth = s.width + e),
                    (s.outerHeight = s.height + u),
                    s
                );
            }
        }
        return C;
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.matchesSelector = t());
    })(window, function () {
        "use strict";
        var i = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (
                var t = ["webkit", "moz", "ms", "o"], i = 0;
                i < t.length;
                i++
            ) {
                var n = t[i] + "MatchesSelector";
                if (e[n]) return n;
            }
        })();
        return function (e, t) {
            return e[i](t);
        };
    }),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define(
                  "fizzy-ui-utils/utils",
                  ["desandro-matches-selector/matches-selector"],
                  function (e) {
                      return i(t, e);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = i(t, t.matchesSelector));
    })(window, function (i, r) {
        var l = {
                extend: function (e, t) {
                    for (var i in t) e[i] = t[i];
                    return e;
                },
                modulo: function (e, t) {
                    return ((e % t) + t) % t;
                },
            },
            t = Array.prototype.slice,
            d =
                ((l.makeArray = function (e) {
                    return Array.isArray(e)
                        ? e
                        : null == e
                        ? []
                        : "object" == typeof e && "number" == typeof e.length
                        ? t.call(e)
                        : [e];
                }),
                (l.removeFrom = function (e, t) {
                    t = e.indexOf(t);
                    -1 != t && e.splice(t, 1);
                }),
                (l.getParent = function (e, t) {
                    for (; e.parentNode && e != document.body; )
                        if (((e = e.parentNode), r(e, t))) return e;
                }),
                (l.getQueryElement = function (e) {
                    return "string" == typeof e ? document.querySelector(e) : e;
                }),
                (l.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (l.filterFindElements = function (e, n) {
                    e = l.makeArray(e);
                    var s = [];
                    return (
                        e.forEach(function (e) {
                            if (e instanceof HTMLElement)
                                if (n) {
                                    r(e, n) && s.push(e);
                                    for (
                                        var t = e.querySelectorAll(n), i = 0;
                                        i < t.length;
                                        i++
                                    )
                                        s.push(t[i]);
                                } else s.push(e);
                        }),
                        s
                    );
                }),
                (l.debounceMethod = function (e, t, n) {
                    n = n || 100;
                    var s = e.prototype[t],
                        r = t + "Timeout";
                    e.prototype[t] = function () {
                        var e = this[r],
                            t = (clearTimeout(e), arguments),
                            i = this;
                        this[r] = setTimeout(function () {
                            s.apply(i, t), delete i[r];
                        }, n);
                    };
                }),
                (l.docReady = function (e) {
                    var t = document.readyState;
                    "complete" == t || "interactive" == t
                        ? setTimeout(e)
                        : document.addEventListener("DOMContentLoaded", e);
                }),
                (l.toDashed = function (e) {
                    return e
                        .replace(/(.)([A-Z])/g, function (e, t, i) {
                            return t + "-" + i;
                        })
                        .toLowerCase();
                }),
                i.console);
        return (
            (l.htmlInit = function (o, a) {
                l.docReady(function () {
                    var e = l.toDashed(a),
                        n = "data-" + e,
                        t = document.querySelectorAll("[" + n + "]"),
                        e = document.querySelectorAll(".js-" + e),
                        t = l.makeArray(t).concat(l.makeArray(e)),
                        s = n + "-options",
                        r = i.jQuery;
                    t.forEach(function (e) {
                        var t = e.getAttribute(n) || e.getAttribute(s);
                        try {
                            i = t && JSON.parse(t);
                        } catch (t) {
                            return void (
                                d &&
                                d.error(
                                    "Error parsing " +
                                        n +
                                        " on " +
                                        e.className +
                                        ": " +
                                        t
                                )
                            );
                        }
                        var i = new o(e, i);
                        r && r.data(e, a, i);
                    });
                });
            }),
            l
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/cell", ["get-size/get-size"], function (e) {
                  return t(0, e);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(0, require("get-size")))
            : ((e.Flickity = e.Flickity || {}),
              (e.Flickity.Cell = t(0, e.getSize)));
    })(window, function (e, t) {
        function i(e, t) {
            (this.element = e), (this.parent = t), this.create();
        }
        var n = i.prototype;
        return (
            (n.create = function () {
                (this.element.style.position = "absolute"),
                    this.element.setAttribute("aria-hidden", "true"),
                    (this.x = 0),
                    (this.shift = 0),
                    (this.element.style[this.parent.originSide] = 0);
            }),
            (n.destroy = function () {
                this.unselect(), (this.element.style.position = "");
                var e = this.parent.originSide;
                (this.element.style[e] = ""),
                    (this.element.style.transform = ""),
                    this.element.removeAttribute("aria-hidden");
            }),
            (n.getSize = function () {
                this.size = t(this.element);
            }),
            (n.setPosition = function (e) {
                (this.x = e), this.updateTarget(), this.renderPosition(e);
            }),
            (n.updateTarget = n.setDefaultTarget =
                function () {
                    var e =
                        "left" == this.parent.originSide
                            ? "marginLeft"
                            : "marginRight";
                    this.target =
                        this.x +
                        this.size[e] +
                        this.size.width * this.parent.cellAlign;
                }),
            (n.renderPosition = function (e) {
                var t = "left" === this.parent.originSide ? 1 : -1,
                    e = this.parent.options.percentPosition
                        ? e *
                          t *
                          (this.parent.size.innerWidth / this.size.width)
                        : e * t;
                this.element.style.transform =
                    "translateX(" + this.parent.getPositionValue(e) + ")";
            }),
            (n.select = function () {
                this.element.classList.add("is-selected"),
                    this.element.removeAttribute("aria-hidden");
            }),
            (n.unselect = function () {
                this.element.classList.remove("is-selected"),
                    this.element.setAttribute("aria-hidden", "true");
            }),
            (n.wrapShift = function (e) {
                (this.shift = e),
                    this.renderPosition(
                        this.x + this.parent.slideableWidth * e
                    );
            }),
            (n.remove = function () {
                this.element.parentNode.removeChild(this.element);
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("flickity/js/slide", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : ((e.Flickity = e.Flickity || {}), (e.Flickity.Slide = t()));
    })(window, function () {
        "use strict";
        function e(e) {
            (this.parent = e),
                (this.isOriginLeft = "left" == e.originSide),
                (this.cells = []),
                (this.outerWidth = 0),
                (this.height = 0);
        }
        var t = e.prototype;
        return (
            (t.addCell = function (e) {
                var t;
                this.cells.push(e),
                    (this.outerWidth += e.size.outerWidth),
                    (this.height = Math.max(e.size.outerHeight, this.height)),
                    1 == this.cells.length &&
                        ((this.x = e.x),
                        (t = this.isOriginLeft ? "marginLeft" : "marginRight"),
                        (this.firstMargin = e.size[t]));
            }),
            (t.updateTarget = function () {
                var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                    t = this.getLastCell(),
                    t = t ? t.size[e] : 0,
                    e = this.outerWidth - (this.firstMargin + t);
                this.target =
                    this.x + this.firstMargin + e * this.parent.cellAlign;
            }),
            (t.getLastCell = function () {
                return this.cells[this.cells.length - 1];
            }),
            (t.select = function () {
                this.cells.forEach(function (e) {
                    e.select();
                });
            }),
            (t.unselect = function () {
                this.cells.forEach(function (e) {
                    e.unselect();
                });
            }),
            (t.getCellElements = function () {
                return this.cells.map(function (e) {
                    return e.element;
                });
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/animate",
                  ["fizzy-ui-utils/utils"],
                  function (e) {
                      return t(0, e);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(0, require("fizzy-ui-utils")))
            : ((e.Flickity = e.Flickity || {}),
              (e.Flickity.animatePrototype = t(0, e.fizzyUIUtils)));
    })(window, function (e, t) {
        var i = {
            startAnimation: function () {
                this.isAnimating ||
                    ((this.isAnimating = !0),
                    (this.restingFrames = 0),
                    this.animate());
            },
            animate: function () {
                this.applyDragForce(), this.applySelectedAttraction();
                var e,
                    t = this.x;
                this.integratePhysics(),
                    this.positionSlider(),
                    this.settle(t),
                    this.isAnimating &&
                        ((e = this),
                        requestAnimationFrame(function () {
                            e.animate();
                        }));
            },
            positionSlider: function () {
                var e = this.x;
                this.options.wrapAround &&
                    1 < this.cells.length &&
                    ((e = t.modulo(e, this.slideableWidth)),
                    (e -= this.slideableWidth),
                    this.shiftWrapCells(e)),
                    this.setTranslateX(e, this.isAnimating),
                    this.dispatchScrollEvent();
            },
            setTranslateX: function (e, t) {
                (e += this.cursorPosition),
                    (e = this.options.rightToLeft ? -e : e);
                e = this.getPositionValue(e);
                this.slider.style.transform = t
                    ? "translate3d(" + e + ",0,0)"
                    : "translateX(" + e + ")";
            },
            dispatchScrollEvent: function () {
                var e,
                    t = this.slides[0];
                t &&
                    ((e = (t = -this.x - t.target) / this.slidesWidth),
                    this.dispatchEvent("scroll", null, [e, t]));
            },
            positionSliderAtSelected: function () {
                this.cells.length &&
                    ((this.x = -this.selectedSlide.target),
                    (this.velocity = 0),
                    this.positionSlider());
            },
            getPositionValue: function (e) {
                return this.options.percentPosition
                    ? 0.01 * Math.round((e / this.size.innerWidth) * 1e4) + "%"
                    : Math.round(e) + "px";
            },
            settle: function (e) {
                this.isPointerDown ||
                    Math.round(100 * this.x) != Math.round(100 * e) ||
                    this.restingFrames++,
                    2 < this.restingFrames &&
                        ((this.isAnimating = !1),
                        delete this.isFreeScrolling,
                        this.positionSlider(),
                        this.dispatchEvent("settle", null, [
                            this.selectedIndex,
                        ]));
            },
            shiftWrapCells: function (e) {
                var t = this.cursorPosition + e,
                    t =
                        (this._shiftCells(this.beforeShiftCells, t, -1),
                        this.size.innerWidth -
                            (e + this.slideableWidth + this.cursorPosition));
                this._shiftCells(this.afterShiftCells, t, 1);
            },
            _shiftCells: function (e, t, i) {
                for (var n = 0; n < e.length; n++) {
                    var s = e[n];
                    s.wrapShift(0 < t ? i : 0), (t -= s.size.outerWidth);
                }
            },
            _unshiftCells: function (e) {
                if (e && e.length)
                    for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
            },
            integratePhysics: function () {
                (this.x += this.velocity),
                    (this.velocity *= this.getFrictionFactor());
            },
            applyForce: function (e) {
                this.velocity += e;
            },
            getFrictionFactor: function () {
                return (
                    1 -
                    this.options[
                        this.isFreeScrolling ? "freeScrollFriction" : "friction"
                    ]
                );
            },
            getRestingPosition: function () {
                return this.x + this.velocity / (1 - this.getFrictionFactor());
            },
            applyDragForce: function () {
                var e;
                this.isDraggable &&
                    this.isPointerDown &&
                    ((e = this.dragX - this.x - this.velocity),
                    this.applyForce(e));
            },
            applySelectedAttraction: function () {
                var e;
                (this.isDraggable && this.isPointerDown) ||
                    this.isFreeScrolling ||
                    !this.slides.length ||
                    ((e =
                        (-1 * this.selectedSlide.target - this.x) *
                        this.options.selectedAttraction),
                    this.applyForce(e));
            },
        };
        return i;
    }),
    (function (o, a) {
        var e;
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/flickity",
                  [
                      "ev-emitter/ev-emitter",
                      "get-size/get-size",
                      "fizzy-ui-utils/utils",
                      "./cell",
                      "./slide",
                      "./animate",
                  ],
                  function (e, t, i, n, s, r) {
                      return a(o, e, t, i, n, s, r);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = a(
                  o,
                  require("ev-emitter"),
                  require("get-size"),
                  require("fizzy-ui-utils"),
                  require("./cell"),
                  require("./slide"),
                  require("./animate")
              ))
            : ((e = o.Flickity),
              (o.Flickity = a(
                  o,
                  o.EvEmitter,
                  o.getSize,
                  o.fizzyUIUtils,
                  e.Cell,
                  e.Slide,
                  e.animatePrototype
              )));
    })(window, function (n, e, t, o, i, a, s) {
        var r = n.jQuery,
            l = n.getComputedStyle,
            d = n.console;
        function c(e, t) {
            for (e = o.makeArray(e); e.length; ) t.appendChild(e.shift());
        }
        var u = 0,
            p = {};
        function h(e, t) {
            var i,
                n = o.getQueryElement(e);
            if (n) {
                if (((this.element = n), this.element.flickityGUID))
                    return (i = p[this.element.flickityGUID]) && i.option(t), i;
                r && (this.$element = r(this.element)),
                    (this.options = o.extend({}, this.constructor.defaults)),
                    this.option(t),
                    this._create();
            } else d && d.error("Bad element for Flickity: " + (n || e));
        }
        (h.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: 0.075,
            friction: 0.28,
            namespaceJQueryEvents: !0,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: 0.025,
            setGallerySize: !0,
        }),
            (h.createMethods = []);
        var f = h.prototype,
            g =
                (o.extend(f, e.prototype),
                (f._create = function () {
                    var e,
                        t = (this.guid = ++u);
                    for (e in ((this.element.flickityGUID = t),
                    ((p[t] = this).selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft
                        ? "right"
                        : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) &&
                        n.addEventListener("resize", this),
                    this.options.on)) {
                        var i = this.options.on[e];
                        this.on(e, i);
                    }
                    h.createMethods.forEach(function (e) {
                        this[e]();
                    }, this),
                        this.options.watchCSS
                            ? this.watchCSS()
                            : this.activate();
                }),
                (f.option = function (e) {
                    o.extend(this.options, e);
                }),
                (f.activate = function () {
                    this.isActive ||
                        ((this.isActive = !0),
                        this.element.classList.add("flickity-enabled"),
                        this.options.rightToLeft &&
                            this.element.classList.add("flickity-rtl"),
                        this.getSize(),
                        c(
                            this._filterFindCellElements(this.element.children),
                            this.slider
                        ),
                        this.viewport.appendChild(this.slider),
                        this.element.appendChild(this.viewport),
                        this.reloadCells(),
                        this.options.accessibility &&
                            ((this.element.tabIndex = 0),
                            this.element.addEventListener("keydown", this)),
                        this.emitEvent("activate"),
                        this.selectInitialIndex(),
                        (this.isInitActivated = !0),
                        this.dispatchEvent("ready"));
                }),
                (f._createSlider = function () {
                    var e = document.createElement("div");
                    (e.className = "flickity-slider"),
                        (e.style[this.originSide] = 0),
                        (this.slider = e);
                }),
                (f._filterFindCellElements = function (e) {
                    return o.filterFindElements(e, this.options.cellSelector);
                }),
                (f.reloadCells = function () {
                    (this.cells = this._makeCells(this.slider.children)),
                        this.positionCells(),
                        this._getWrapShiftCells(),
                        this.setGallerySize();
                }),
                (f._makeCells = function (e) {
                    return this._filterFindCellElements(e).map(function (e) {
                        return new i(e, this);
                    }, this);
                }),
                (f.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                }),
                (f.getLastSlide = function () {
                    return this.slides[this.slides.length - 1];
                }),
                (f.positionCells = function () {
                    this._sizeCells(this.cells), this._positionCells(0);
                }),
                (f._positionCells = function (e) {
                    this.maxCellHeight =
                        ((e = e || 0) && this.maxCellHeight) || 0;
                    for (
                        var t,
                            i = 0,
                            n =
                                (0 < e &&
                                    (i =
                                        (t = this.cells[e - 1]).x +
                                        t.size.outerWidth),
                                this.cells.length),
                            s = e;
                        s < n;
                        s++
                    ) {
                        var r = this.cells[s];
                        r.setPosition(i),
                            (i += r.size.outerWidth),
                            (this.maxCellHeight = Math.max(
                                r.size.outerHeight,
                                this.maxCellHeight
                            ));
                    }
                    (this.slideableWidth = i),
                        this.updateSlides(),
                        this._containSlides(),
                        (this.slidesWidth = n
                            ? this.getLastSlide().target - this.slides[0].target
                            : 0);
                }),
                (f._sizeCells = function (e) {
                    e.forEach(function (e) {
                        e.getSize();
                    });
                }),
                (f.updateSlides = function () {
                    var n, s, r;
                    (this.slides = []),
                        this.cells.length &&
                            ((n = new a(this)),
                            this.slides.push(n),
                            (s =
                                "left" == this.originSide
                                    ? "marginRight"
                                    : "marginLeft"),
                            (r = this._getCanCellFit()),
                            this.cells.forEach(function (e, t) {
                                var i;
                                n.cells.length &&
                                    ((i =
                                        n.outerWidth -
                                        n.firstMargin +
                                        (e.size.outerWidth - e.size[s])),
                                    r.call(this, t, i) ||
                                        (n.updateTarget(),
                                        (n = new a(this)),
                                        this.slides.push(n))),
                                    n.addCell(e);
                            }, this),
                            n.updateTarget(),
                            this.updateSelectedSlide());
                }),
                (f._getCanCellFit = function () {
                    var t,
                        e = this.options.groupCells;
                    if (!e)
                        return function () {
                            return !1;
                        };
                    if ("number" == typeof e)
                        return (
                            (t = parseInt(e, 10)),
                            function (e) {
                                return e % t != 0;
                            }
                        );
                    var e = "string" == typeof e && e.match(/^(\d+)%$/),
                        i = e ? parseInt(e[1], 10) / 100 : 1;
                    return function (e, t) {
                        return t <= (this.size.innerWidth + 1) * i;
                    };
                }),
                (f._init = f.reposition =
                    function () {
                        this.positionCells(), this.positionSliderAtSelected();
                    }),
                (f.getSize = function () {
                    (this.size = t(this.element)),
                        this.setCellAlign(),
                        (this.cursorPosition =
                            this.size.innerWidth * this.cellAlign);
                }),
                {
                    center: { left: 0.5, right: 0.5 },
                    left: { left: 0, right: 1 },
                    right: { right: 0, left: 1 },
                });
        return (
            (f.setCellAlign = function () {
                var e = g[this.options.cellAlign];
                this.cellAlign = e
                    ? e[this.originSide]
                    : this.options.cellAlign;
            }),
            (f.setGallerySize = function () {
                var e;
                this.options.setGallerySize &&
                    ((e =
                        this.options.adaptiveHeight && this.selectedSlide
                            ? this.selectedSlide.height
                            : this.maxCellHeight),
                    (this.viewport.style.height = e + "px"));
            }),
            (f._getWrapShiftCells = function () {
                var e, t;
                this.options.wrapAround &&
                    (this._unshiftCells(this.beforeShiftCells),
                    this._unshiftCells(this.afterShiftCells),
                    (e = this.cursorPosition),
                    (t = this.cells.length - 1),
                    (this.beforeShiftCells = this._getGapCells(e, t, -1)),
                    (e = this.size.innerWidth - this.cursorPosition),
                    (this.afterShiftCells = this._getGapCells(e, 0, 1)));
            }),
            (f._getGapCells = function (e, t, i) {
                for (var n = []; 0 < e; ) {
                    var s = this.cells[t];
                    if (!s) break;
                    n.push(s), (t += i), (e -= s.size.outerWidth);
                }
                return n;
            }),
            (f._containSlides = function () {
                var e, t, i, n, s, r;
                this.options.contain &&
                    !this.options.wrapAround &&
                    this.cells.length &&
                    ((e = (t = this.options.rightToLeft)
                        ? "marginRight"
                        : "marginLeft"),
                    (t = t ? "marginLeft" : "marginRight"),
                    (i = this.slideableWidth - this.getLastCell().size[t]),
                    (n = i < this.size.innerWidth),
                    (s = this.cursorPosition + this.cells[0].size[e]),
                    (r = i - this.size.innerWidth * (1 - this.cellAlign)),
                    this.slides.forEach(function (e) {
                        n
                            ? (e.target = i * this.cellAlign)
                            : ((e.target = Math.max(e.target, s)),
                              (e.target = Math.min(e.target, r)));
                    }, this));
            }),
            (f.dispatchEvent = function (e, t, i) {
                var n = t ? [t].concat(i) : i;
                this.emitEvent(e, n),
                    r &&
                        this.$element &&
                        ((n = e +=
                            this.options.namespaceJQueryEvents
                                ? ".flickity"
                                : ""),
                        t && (((t = new r.Event(t)).type = e), (n = t)),
                        this.$element.trigger(n, i));
            }),
            (f.select = function (e, t, i) {
                this.isActive &&
                    ((e = parseInt(e, 10)),
                    this._wrapSelect(e),
                    (this.options.wrapAround || t) &&
                        (e = o.modulo(e, this.slides.length)),
                    this.slides[e] &&
                        ((t = this.selectedIndex),
                        (this.selectedIndex = e),
                        this.updateSelectedSlide(),
                        i
                            ? this.positionSliderAtSelected()
                            : this.startAnimation(),
                        this.options.adaptiveHeight && this.setGallerySize(),
                        this.dispatchEvent("select", null, [e]),
                        e != t && this.dispatchEvent("change", null, [e]),
                        this.dispatchEvent("cellSelect")));
            }),
            (f._wrapSelect = function (e) {
                var t = this.slides.length;
                if (!(this.options.wrapAround && 1 < t)) return e;
                var i = o.modulo(e, t),
                    n = Math.abs(i - this.selectedIndex),
                    s = Math.abs(i + t - this.selectedIndex),
                    i = Math.abs(i - t - this.selectedIndex);
                !this.isDragSelect && s < n
                    ? (e += t)
                    : !this.isDragSelect && i < n && (e -= t),
                    e < 0
                        ? (this.x -= this.slideableWidth)
                        : t <= e && (this.x += this.slideableWidth);
            }),
            (f.previous = function (e, t) {
                this.select(this.selectedIndex - 1, e, t);
            }),
            (f.next = function (e, t) {
                this.select(this.selectedIndex + 1, e, t);
            }),
            (f.updateSelectedSlide = function () {
                var e = this.slides[this.selectedIndex];
                e &&
                    (this.unselectSelectedSlide(),
                    (this.selectedSlide = e).select(),
                    (this.selectedCells = e.cells),
                    (this.selectedElements = e.getCellElements()),
                    (this.selectedCell = e.cells[0]),
                    (this.selectedElement = this.selectedElements[0]));
            }),
            (f.unselectSelectedSlide = function () {
                this.selectedSlide && this.selectedSlide.unselect();
            }),
            (f.selectInitialIndex = function () {
                var e = this.options.initialIndex;
                if (this.isInitActivated)
                    this.select(this.selectedIndex, !1, !0);
                else {
                    if (e && "string" == typeof e)
                        if (this.queryCell(e))
                            return void this.selectCell(e, !1, !0);
                    var t = 0;
                    e && this.slides[e] && (t = e), this.select(t, !1, !0);
                }
            }),
            (f.selectCell = function (e, t, i) {
                var e = this.queryCell(e);
                e && ((e = this.getCellSlideIndex(e)), this.select(e, t, i));
            }),
            (f.getCellSlideIndex = function (e) {
                for (var t = 0; t < this.slides.length; t++)
                    if (-1 != this.slides[t].cells.indexOf(e)) return t;
            }),
            (f.getCell = function (e) {
                for (var t = 0; t < this.cells.length; t++) {
                    var i = this.cells[t];
                    if (i.element == e) return i;
                }
            }),
            (f.getCells = function (e) {
                e = o.makeArray(e);
                var t = [];
                return (
                    e.forEach(function (e) {
                        e = this.getCell(e);
                        e && t.push(e);
                    }, this),
                    t
                );
            }),
            (f.getCellElements = function () {
                return this.cells.map(function (e) {
                    return e.element;
                });
            }),
            (f.getParentCell = function (e) {
                var t = this.getCell(e);
                return (
                    t ||
                    ((e = o.getParent(e, ".flickity-slider > *")),
                    this.getCell(e))
                );
            }),
            (f.getAdjacentCellElements = function (e, t) {
                if (!e) return this.selectedSlide.getCellElements();
                t = void 0 === t ? this.selectedIndex : t;
                var i = this.slides.length;
                if (i <= 1 + 2 * e) return this.getCellElements();
                for (var n = [], s = t - e; s <= t + e; s++) {
                    var r = this.options.wrapAround ? o.modulo(s, i) : s,
                        r = this.slides[r];
                    r && (n = n.concat(r.getCellElements()));
                }
                return n;
            }),
            (f.queryCell = function (e) {
                if ("number" == typeof e) return this.cells[e];
                if ("string" == typeof e) {
                    if (e.match(/^[#.]?[\d/]/)) return;
                    e = this.element.querySelector(e);
                }
                return this.getCell(e);
            }),
            (f.uiChange = function () {
                this.emitEvent("uiChange");
            }),
            (f.childUIPointerDown = function (e) {
                "touchstart" != e.type && e.preventDefault(), this.focus();
            }),
            (f.onresize = function () {
                this.watchCSS(), this.resize();
            }),
            o.debounceMethod(h, "onresize", 150),
            (f.resize = function () {
                var e;
                !this.isActive ||
                    this.isAnimating ||
                    this.isDragging ||
                    (this.getSize(),
                    this.options.wrapAround &&
                        (this.x = o.modulo(this.x, this.slideableWidth)),
                    this.positionCells(),
                    this._getWrapShiftCells(),
                    this.setGallerySize(),
                    this.emitEvent("resize"),
                    (e = this.selectedElements && this.selectedElements[0]),
                    this.selectCell(e, !1, !0));
            }),
            (f.watchCSS = function () {
                this.options.watchCSS &&
                    (-1 != l(this.element, ":after").content.indexOf("flickity")
                        ? this.activate()
                        : this.deactivate());
            }),
            (f.onkeydown = function (e) {
                var t =
                    document.activeElement &&
                    document.activeElement != this.element;
                this.options.accessibility &&
                    !t &&
                    (t = h.keyboardHandlers[e.keyCode]) &&
                    t.call(this);
            }),
            (h.keyboardHandlers = {
                37: function () {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]();
                },
                39: function () {
                    var e = this.options.rightToLeft ? "previous" : "next";
                    this.uiChange(), this[e]();
                },
            }),
            (f.focus = function () {
                var e = n.pageYOffset;
                this.element.focus({ preventScroll: !0 }),
                    n.pageYOffset != e && n.scrollTo(n.pageXOffset, e);
            }),
            (f.deactivate = function () {
                this.isActive &&
                    (this.element.classList.remove("flickity-enabled"),
                    this.element.classList.remove("flickity-rtl"),
                    this.unselectSelectedSlide(),
                    this.cells.forEach(function (e) {
                        e.destroy();
                    }),
                    this.element.removeChild(this.viewport),
                    c(this.slider.children, this.element),
                    this.options.accessibility &&
                        (this.element.removeAttribute("tabIndex"),
                        this.element.removeEventListener("keydown", this)),
                    (this.isActive = !1),
                    this.emitEvent("deactivate"));
            }),
            (f.destroy = function () {
                this.deactivate(),
                    n.removeEventListener("resize", this),
                    this.allOff(),
                    this.emitEvent("destroy"),
                    r &&
                        this.$element &&
                        r.removeData(this.element, "flickity"),
                    delete this.element.flickityGUID,
                    delete p[this.guid];
            }),
            o.extend(f, s),
            (h.data = function (e) {
                e = (e = o.getQueryElement(e)) && e.flickityGUID;
                return e && p[e];
            }),
            o.htmlInit(h, "flickity"),
            r && r.bridget && r.bridget("flickity", h),
            (h.setJQuery = function (e) {
                r = e;
            }),
            (h.Cell = i),
            (h.Slide = a),
            h
        );
    }),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define(
                  "unipointer/unipointer",
                  ["ev-emitter/ev-emitter"],
                  function (e) {
                      return i(t, e);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("ev-emitter")))
            : (t.Unipointer = i(t, t.EvEmitter));
    })(window, function (n, e) {
        function t() {}
        var e = (t.prototype = Object.create(e.prototype)),
            i =
                ((e.bindStartEvent = function (e) {
                    this._bindStartEvent(e, !0);
                }),
                (e.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1);
                }),
                (e._bindStartEvent = function (e, t) {
                    var t = (t = void 0 === t || t)
                            ? "addEventListener"
                            : "removeEventListener",
                        i = "mousedown";
                    "ontouchstart" in n
                        ? (i = "touchstart")
                        : n.PointerEvent && (i = "pointerdown"),
                        e[t](i, this);
                }),
                (e.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (e.getTouch = function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (i.identifier == this.pointerIdentifier) return i;
                    }
                }),
                (e.onmousedown = function (e) {
                    var t = e.button;
                    (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
                }),
                (e.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0]);
                }),
                (e.onpointerdown = function (e) {
                    this._pointerDown(e, e);
                }),
                (e._pointerDown = function (e, t) {
                    e.button ||
                        this.isPointerDown ||
                        ((this.isPointerDown = !0),
                        (this.pointerIdentifier =
                            void 0 !== t.pointerId
                                ? t.pointerId
                                : t.identifier),
                        this.pointerDown(e, t));
                }),
                (e.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e),
                        this.emitEvent("pointerDown", [e, t]);
                }),
                {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"],
                });
        return (
            (e._bindPostStartEvents = function (e) {
                e &&
                    ((e = i[e.type]).forEach(function (e) {
                        n.addEventListener(e, this);
                    }, this),
                    (this._boundPointerEvents = e));
            }),
            (e._unbindPostStartEvents = function () {
                this._boundPointerEvents &&
                    (this._boundPointerEvents.forEach(function (e) {
                        n.removeEventListener(e, this);
                    }, this),
                    delete this._boundPointerEvents);
            }),
            (e.onmousemove = function (e) {
                this._pointerMove(e, e);
            }),
            (e.onpointermove = function (e) {
                e.pointerId == this.pointerIdentifier &&
                    this._pointerMove(e, e);
            }),
            (e.ontouchmove = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerMove(e, t);
            }),
            (e._pointerMove = function (e, t) {
                this.pointerMove(e, t);
            }),
            (e.pointerMove = function (e, t) {
                this.emitEvent("pointerMove", [e, t]);
            }),
            (e.onmouseup = function (e) {
                this._pointerUp(e, e);
            }),
            (e.onpointerup = function (e) {
                e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
            }),
            (e.ontouchend = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerUp(e, t);
            }),
            (e._pointerUp = function (e, t) {
                this._pointerDone(), this.pointerUp(e, t);
            }),
            (e.pointerUp = function (e, t) {
                this.emitEvent("pointerUp", [e, t]);
            }),
            (e._pointerDone = function () {
                this._pointerReset(),
                    this._unbindPostStartEvents(),
                    this.pointerDone();
            }),
            (e._pointerReset = function () {
                (this.isPointerDown = !1), delete this.pointerIdentifier;
            }),
            (e.pointerDone = function () {}),
            (e.onpointercancel = function (e) {
                e.pointerId == this.pointerIdentifier &&
                    this._pointerCancel(e, e);
            }),
            (e.ontouchcancel = function (e) {
                var t = this.getTouch(e.changedTouches);
                t && this._pointerCancel(e, t);
            }),
            (e._pointerCancel = function (e, t) {
                this._pointerDone(), this.pointerCancel(e, t);
            }),
            (e.pointerCancel = function (e, t) {
                this.emitEvent("pointerCancel", [e, t]);
            }),
            (t.getPointerPoint = function (e) {
                return { x: e.pageX, y: e.pageY };
            }),
            t
        );
    }),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define(
                  "unidragger/unidragger",
                  ["unipointer/unipointer"],
                  function (e) {
                      return i(t, e);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("unipointer")))
            : (t.Unidragger = i(t, t.Unipointer));
    })(window, function (r, e) {
        function t() {}
        var i = (t.prototype = Object.create(e.prototype)),
            n =
                ((i.bindHandles = function () {
                    this._bindHandles(!0);
                }),
                (i.unbindHandles = function () {
                    this._bindHandles(!1);
                }),
                (i._bindHandles = function (e) {
                    for (
                        var t = (e = void 0 === e || e)
                                ? "addEventListener"
                                : "removeEventListener",
                            i = e ? this._touchActionValue : "",
                            n = 0;
                        n < this.handles.length;
                        n++
                    ) {
                        var s = this.handles[n];
                        this._bindStartEvent(s, e),
                            s[t]("click", this),
                            r.PointerEvent && (s.style.touchAction = i);
                    }
                }),
                (i._touchActionValue = "none"),
                (i.pointerDown = function (e, t) {
                    this.okayPointerDown(e) &&
                        ((this.pointerDownPointer = {
                            pageX: t.pageX,
                            pageY: t.pageY,
                        }),
                        e.preventDefault(),
                        this.pointerDownBlur(),
                        this._bindPostStartEvents(e),
                        this.emitEvent("pointerDown", [e, t]));
                }),
                { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 }),
            s = {
                radio: !0,
                checkbox: !0,
                button: !0,
                submit: !0,
                image: !0,
                file: !0,
            };
        return (
            (i.okayPointerDown = function (e) {
                var t = n[e.target.nodeName],
                    e = s[e.target.type],
                    t = !t || e;
                return t || this._pointerReset(), t;
            }),
            (i.pointerDownBlur = function () {
                var e = document.activeElement;
                e && e.blur && e != document.body && e.blur();
            }),
            (i.pointerMove = function (e, t) {
                var i = this._dragPointerMove(e, t);
                this.emitEvent("pointerMove", [e, t, i]),
                    this._dragMove(e, t, i);
            }),
            (i._dragPointerMove = function (e, t) {
                var i = {
                    x: t.pageX - this.pointerDownPointer.pageX,
                    y: t.pageY - this.pointerDownPointer.pageY,
                };
                return (
                    !this.isDragging &&
                        this.hasDragStarted(i) &&
                        this._dragStart(e, t),
                    i
                );
            }),
            (i.hasDragStarted = function (e) {
                return 3 < Math.abs(e.x) || 3 < Math.abs(e.y);
            }),
            (i.pointerUp = function (e, t) {
                this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
            }),
            (i._dragPointerUp = function (e, t) {
                this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
            }),
            (i._dragStart = function (e, t) {
                (this.isDragging = !0),
                    (this.isPreventingClicks = !0),
                    this.dragStart(e, t);
            }),
            (i.dragStart = function (e, t) {
                this.emitEvent("dragStart", [e, t]);
            }),
            (i._dragMove = function (e, t, i) {
                this.isDragging && this.dragMove(e, t, i);
            }),
            (i.dragMove = function (e, t, i) {
                e.preventDefault(), this.emitEvent("dragMove", [e, t, i]);
            }),
            (i._dragEnd = function (e, t) {
                (this.isDragging = !1),
                    setTimeout(
                        function () {
                            delete this.isPreventingClicks;
                        }.bind(this)
                    ),
                    this.dragEnd(e, t);
            }),
            (i.dragEnd = function (e, t) {
                this.emitEvent("dragEnd", [e, t]);
            }),
            (i.onclick = function (e) {
                this.isPreventingClicks && e.preventDefault();
            }),
            (i._staticClick = function (e, t) {
                (this.isIgnoringMouseUp && "mouseup" == e.type) ||
                    (this.staticClick(e, t),
                    "mouseup" != e.type &&
                        ((this.isIgnoringMouseUp = !0),
                        setTimeout(
                            function () {
                                delete this.isIgnoringMouseUp;
                            }.bind(this),
                            400
                        )));
            }),
            (i.staticClick = function (e, t) {
                this.emitEvent("staticClick", [e, t]);
            }),
            (t.getPointerPoint = e.getPointerPoint),
            t
        );
    }),
    (function (n, s) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/drag",
                  [
                      "./flickity",
                      "unidragger/unidragger",
                      "fizzy-ui-utils/utils",
                  ],
                  function (e, t, i) {
                      return s(n, e, t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = s(
                  n,
                  require("./flickity"),
                  require("unidragger"),
                  require("fizzy-ui-utils")
              ))
            : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
    })(window, function (i, e, t, r) {
        r.extend(e.defaults, { draggable: ">1", dragThreshold: 3 }),
            e.createMethods.push("_createDrag");
        var n = e.prototype,
            s =
                (r.extend(n, t.prototype),
                (n._touchActionValue = "pan-y"),
                (n._createDrag = function () {
                    this.on("activate", this.onActivateDrag),
                        this.on("uiChange", this._uiChangeDrag),
                        this.on("deactivate", this.onDeactivateDrag),
                        this.on("cellChange", this.updateDraggable);
                }),
                (n.onActivateDrag = function () {
                    (this.handles = [this.viewport]),
                        this.bindHandles(),
                        this.updateDraggable();
                }),
                (n.onDeactivateDrag = function () {
                    this.unbindHandles(),
                        this.element.classList.remove("is-draggable");
                }),
                (n.updateDraggable = function () {
                    ">1" == this.options.draggable
                        ? (this.isDraggable = 1 < this.slides.length)
                        : (this.isDraggable = this.options.draggable),
                        this.isDraggable
                            ? this.element.classList.add("is-draggable")
                            : this.element.classList.remove("is-draggable");
                }),
                (n.bindDrag = function () {
                    (this.options.draggable = !0), this.updateDraggable();
                }),
                (n.unbindDrag = function () {
                    (this.options.draggable = !1), this.updateDraggable();
                }),
                (n._uiChangeDrag = function () {
                    delete this.isFreeScrolling;
                }),
                (n.pointerDown = function (e, t) {
                    this.isDraggable
                        ? this.okayPointerDown(e) &&
                          (this._pointerDownPreventDefault(e),
                          this.pointerDownFocus(e),
                          document.activeElement != this.element &&
                              this.pointerDownBlur(),
                          (this.dragX = this.x),
                          this.viewport.classList.add("is-pointer-down"),
                          (this.pointerDownScroll = o()),
                          i.addEventListener("scroll", this),
                          this._pointerDownDefault(e, t))
                        : this._pointerDownDefault(e, t);
                }),
                (n._pointerDownDefault = function (e, t) {
                    (this.pointerDownPointer = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                    }),
                        this._bindPostStartEvents(e),
                        this.dispatchEvent("pointerDown", e, [t]);
                }),
                { INPUT: !0, TEXTAREA: !0, SELECT: !0 });
        function o() {
            return { x: i.pageXOffset, y: i.pageYOffset };
        }
        return (
            (n.pointerDownFocus = function (e) {
                s[e.target.nodeName] || this.focus();
            }),
            (n._pointerDownPreventDefault = function (e) {
                var t = "touchstart" == e.type,
                    i = "touch" == e.pointerType,
                    n = s[e.target.nodeName];
                t || i || n || e.preventDefault();
            }),
            (n.hasDragStarted = function (e) {
                return Math.abs(e.x) > this.options.dragThreshold;
            }),
            (n.pointerUp = function (e, t) {
                delete this.isTouchScrolling,
                    this.viewport.classList.remove("is-pointer-down"),
                    this.dispatchEvent("pointerUp", e, [t]),
                    this._dragPointerUp(e, t);
            }),
            (n.pointerDone = function () {
                i.removeEventListener("scroll", this),
                    delete this.pointerDownScroll;
            }),
            (n.dragStart = function (e, t) {
                this.isDraggable &&
                    ((this.dragStartPosition = this.x),
                    this.startAnimation(),
                    i.removeEventListener("scroll", this),
                    this.dispatchEvent("dragStart", e, [t]));
            }),
            (n.pointerMove = function (e, t) {
                var i = this._dragPointerMove(e, t);
                this.dispatchEvent("pointerMove", e, [t, i]),
                    this._dragMove(e, t, i);
            }),
            (n.dragMove = function (e, t, i) {
                var n, s;
                this.isDraggable &&
                    (e.preventDefault(),
                    (this.previousDragX = this.dragX),
                    (n = this.options.rightToLeft ? -1 : 1),
                    this.options.wrapAround && (i.x %= this.slideableWidth),
                    (n = this.dragStartPosition + i.x * n),
                    !this.options.wrapAround &&
                        this.slides.length &&
                        (n =
                            (n =
                                (s = Math.max(
                                    -this.slides[0].target,
                                    this.dragStartPosition
                                )) < n
                                    ? 0.5 * (n + s)
                                    : n) <
                            (s = Math.min(
                                -this.getLastSlide().target,
                                this.dragStartPosition
                            ))
                                ? 0.5 * (n + s)
                                : n),
                    (this.dragX = n),
                    (this.dragMoveTime = new Date()),
                    this.dispatchEvent("dragMove", e, [t, i]));
            }),
            (n.dragEnd = function (e, t) {
                var i, n;
                this.isDraggable &&
                    (this.options.freeScroll && (this.isFreeScrolling = !0),
                    (i = this.dragEndRestingSelect()),
                    this.options.freeScroll && !this.options.wrapAround
                        ? ((n = this.getRestingPosition()),
                          (this.isFreeScrolling =
                              -n > this.slides[0].target &&
                              -n < this.getLastSlide().target))
                        : this.options.freeScroll ||
                          i != this.selectedIndex ||
                          (i += this.dragEndBoostSelect()),
                    delete this.previousDragX,
                    (this.isDragSelect = this.options.wrapAround),
                    this.select(i),
                    delete this.isDragSelect,
                    this.dispatchEvent("dragEnd", e, [t]));
            }),
            (n.dragEndRestingSelect = function () {
                var e = this.getRestingPosition(),
                    t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
                    i = this._getClosestResting(e, t, 1),
                    e = this._getClosestResting(e, t, -1);
                return (i.distance < e.distance ? i : e).index;
            }),
            (n._getClosestResting = function (e, t, i) {
                for (
                    var n = this.selectedIndex,
                        s = 1 / 0,
                        r =
                            this.options.contain && !this.options.wrapAround
                                ? function (e, t) {
                                      return e <= t;
                                  }
                                : function (e, t) {
                                      return e < t;
                                  };
                    r(t, s) &&
                    ((s = t),
                    null !== (t = this.getSlideDistance(-e, (n += i))));

                )
                    t = Math.abs(t);
                return { distance: s, index: n - i };
            }),
            (n.getSlideDistance = function (e, t) {
                var i = this.slides.length,
                    n = this.options.wrapAround && 1 < i,
                    s = n ? r.modulo(t, i) : t,
                    s = this.slides[s];
                if (!s) return null;
                n = n ? this.slideableWidth * Math.floor(t / i) : 0;
                return e - (s.target + n);
            }),
            (n.dragEndBoostSelect = function () {
                if (
                    void 0 === this.previousDragX ||
                    !this.dragMoveTime ||
                    100 < new Date() - this.dragMoveTime
                )
                    return 0;
                var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                    t = this.previousDragX - this.dragX;
                return 0 < e && 0 < t ? 1 : e < 0 && t < 0 ? -1 : 0;
            }),
            (n.staticClick = function (e, t) {
                var i = this.getParentCell(e.target),
                    n = i && i.element,
                    i = i && this.cells.indexOf(i);
                this.dispatchEvent("staticClick", e, [t, n, i]);
            }),
            (n.onscroll = function () {
                var e = o(),
                    t = this.pointerDownScroll.x - e.x,
                    e = this.pointerDownScroll.y - e.y;
                (3 < Math.abs(t) || 3 < Math.abs(e)) && this._pointerDone();
            }),
            e
        );
    }),
    (function (e, n) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/prev-next-button",
                  [
                      "./flickity",
                      "unipointer/unipointer",
                      "fizzy-ui-utils/utils",
                  ],
                  function (e, t, i) {
                      return n(0, e, t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = n(
                  0,
                  require("./flickity"),
                  require("unipointer"),
                  require("fizzy-ui-utils")
              ))
            : n(0, e.Flickity, e.Unipointer, e.fizzyUIUtils);
    })(window, function (e, t, i, n) {
        "use strict";
        var s = "http://www.w3.org/2000/svg";
        function r(e, t) {
            (this.direction = e), (this.parent = t), this._create();
        }
        ((r.prototype = Object.create(i.prototype))._create = function () {
            (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
            var e = this.parent.options.rightToLeft ? 1 : -1,
                e =
                    ((this.isLeft = this.direction == e),
                    (this.element = document.createElement("button"))),
                t =
                    ((e.className =
                        "flickity-button flickity-prev-next-button"),
                    (e.className += this.isPrevious ? " previous" : " next"),
                    e.setAttribute("type", "button"),
                    this.disable(),
                    e.setAttribute(
                        "aria-label",
                        this.isPrevious ? "Previous" : "Next"
                    ),
                    this.createSVG());
            e.appendChild(t),
                this.parent.on("select", this.update.bind(this)),
                this.on(
                    "pointerDown",
                    this.parent.childUIPointerDown.bind(this.parent)
                );
        }),
            (r.prototype.activate = function () {
                this.bindStartEvent(this.element),
                    this.element.addEventListener("click", this),
                    this.parent.element.appendChild(this.element);
            }),
            (r.prototype.deactivate = function () {
                this.parent.element.removeChild(this.element),
                    this.unbindStartEvent(this.element),
                    this.element.removeEventListener("click", this);
            }),
            (r.prototype.createSVG = function () {
                var e = document.createElementNS(s, "svg"),
                    t =
                        (e.setAttribute("class", "flickity-button-icon"),
                        e.setAttribute("viewBox", "0 0 100 100"),
                        document.createElementNS(s, "path")),
                    i =
                        "string" != typeof (i = this.parent.options.arrowShape)
                            ? "M " +
                              i.x0 +
                              ",50 L " +
                              i.x1 +
                              "," +
                              (i.y1 + 50) +
                              " L " +
                              i.x2 +
                              "," +
                              (i.y2 + 50) +
                              " L " +
                              i.x3 +
                              ",50  L " +
                              i.x2 +
                              "," +
                              (50 - i.y2) +
                              " L " +
                              i.x1 +
                              "," +
                              (50 - i.y1) +
                              " Z"
                            : i;
                return (
                    t.setAttribute("d", i),
                    t.setAttribute("class", "arrow"),
                    this.isLeft ||
                        t.setAttribute(
                            "transform",
                            "translate(100, 100) rotate(180) "
                        ),
                    e.appendChild(t),
                    e
                );
            }),
            (r.prototype.handleEvent = n.handleEvent),
            (r.prototype.onclick = function () {
                var e;
                this.isEnabled &&
                    (this.parent.uiChange(),
                    (e = this.isPrevious ? "previous" : "next"),
                    this.parent[e]());
            }),
            (r.prototype.enable = function () {
                this.isEnabled ||
                    ((this.element.disabled = !1), (this.isEnabled = !0));
            }),
            (r.prototype.disable = function () {
                this.isEnabled &&
                    ((this.element.disabled = !0), (this.isEnabled = !1));
            }),
            (r.prototype.update = function () {
                var e = this.parent.slides;
                this.parent.options.wrapAround && 1 < e.length
                    ? this.enable()
                    : ((e = e.length ? e.length - 1 : 0),
                      (e = this.isPrevious ? 0 : e),
                      this[
                          this.parent.selectedIndex == e ? "disable" : "enable"
                      ]());
            }),
            (r.prototype.destroy = function () {
                this.deactivate(), this.allOff();
            }),
            n.extend(t.defaults, {
                prevNextButtons: !0,
                arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
            }),
            t.createMethods.push("_createPrevNextButtons");
        i = t.prototype;
        return (
            (i._createPrevNextButtons = function () {
                this.options.prevNextButtons &&
                    ((this.prevButton = new r(-1, this)),
                    (this.nextButton = new r(1, this)),
                    this.on("activate", this.activatePrevNextButtons));
            }),
            (i.activatePrevNextButtons = function () {
                this.prevButton.activate(),
                    this.nextButton.activate(),
                    this.on("deactivate", this.deactivatePrevNextButtons);
            }),
            (i.deactivatePrevNextButtons = function () {
                this.prevButton.deactivate(),
                    this.nextButton.deactivate(),
                    this.off("deactivate", this.deactivatePrevNextButtons);
            }),
            (t.PrevNextButton = r),
            t
        );
    }),
    (function (e, n) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/page-dots",
                  [
                      "./flickity",
                      "unipointer/unipointer",
                      "fizzy-ui-utils/utils",
                  ],
                  function (e, t, i) {
                      return n(0, e, t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = n(
                  0,
                  require("./flickity"),
                  require("unipointer"),
                  require("fizzy-ui-utils")
              ))
            : n(0, e.Flickity, e.Unipointer, e.fizzyUIUtils);
    })(window, function (e, t, i, n) {
        function s(e) {
            (this.parent = e), this._create();
        }
        ((s.prototype = Object.create(i.prototype))._create = function () {
            (this.holder = document.createElement("ol")),
                (this.holder.className = "flickity-page-dots"),
                (this.dots = []),
                (this.handleClick = this.onClick.bind(this)),
                this.on(
                    "pointerDown",
                    this.parent.childUIPointerDown.bind(this.parent)
                );
        }),
            (s.prototype.activate = function () {
                this.setDots(),
                    this.holder.addEventListener("click", this.handleClick),
                    this.bindStartEvent(this.holder),
                    this.parent.element.appendChild(this.holder);
            }),
            (s.prototype.deactivate = function () {
                this.holder.removeEventListener("click", this.handleClick),
                    this.unbindStartEvent(this.holder),
                    this.parent.element.removeChild(this.holder);
            }),
            (s.prototype.setDots = function () {
                var e = this.parent.slides.length - this.dots.length;
                0 < e ? this.addDots(e) : e < 0 && this.removeDots(-e);
            }),
            (s.prototype.addDots = function (e) {
                for (
                    var t = document.createDocumentFragment(),
                        i = [],
                        n = this.dots.length,
                        s = n + e,
                        r = n;
                    r < s;
                    r++
                ) {
                    var o = document.createElement("li");
                    (o.className = "dot"),
                        o.setAttribute("aria-label", "Page dot " + (r + 1)),
                        t.appendChild(o),
                        i.push(o);
                }
                this.holder.appendChild(t), (this.dots = this.dots.concat(i));
            }),
            (s.prototype.removeDots = function (e) {
                this.dots.splice(this.dots.length - e, e).forEach(function (e) {
                    this.holder.removeChild(e);
                }, this);
            }),
            (s.prototype.updateSelected = function () {
                this.selectedDot &&
                    ((this.selectedDot.className = "dot"),
                    this.selectedDot.removeAttribute("aria-current")),
                    this.dots.length &&
                        ((this.selectedDot =
                            this.dots[this.parent.selectedIndex]),
                        (this.selectedDot.className = "dot is-selected"),
                        this.selectedDot.setAttribute("aria-current", "step"));
            }),
            (s.prototype.onTap = s.prototype.onClick =
                function (e) {
                    var e = e.target;
                    "LI" == e.nodeName &&
                        (this.parent.uiChange(),
                        (e = this.dots.indexOf(e)),
                        this.parent.select(e));
                }),
            (s.prototype.destroy = function () {
                this.deactivate(), this.allOff();
            }),
            (t.PageDots = s),
            n.extend(t.defaults, { pageDots: !0 }),
            t.createMethods.push("_createPageDots");
        i = t.prototype;
        return (
            (i._createPageDots = function () {
                this.options.pageDots &&
                    ((this.pageDots = new s(this)),
                    this.on("activate", this.activatePageDots),
                    this.on("select", this.updateSelectedPageDots),
                    this.on("cellChange", this.updatePageDots),
                    this.on("resize", this.updatePageDots),
                    this.on("deactivate", this.deactivatePageDots));
            }),
            (i.activatePageDots = function () {
                this.pageDots.activate();
            }),
            (i.updateSelectedPageDots = function () {
                this.pageDots.updateSelected();
            }),
            (i.updatePageDots = function () {
                this.pageDots.setDots();
            }),
            (i.deactivatePageDots = function () {
                this.pageDots.deactivate();
            }),
            (t.PageDots = s),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/player",
                  [
                      "ev-emitter/ev-emitter",
                      "fizzy-ui-utils/utils",
                      "./flickity",
                  ],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  require("ev-emitter"),
                  require("fizzy-ui-utils"),
                  require("./flickity")
              ))
            : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity);
    })(window, function (e, t, i) {
        function n(e) {
            (this.parent = e),
                (this.state = "stopped"),
                (this.onVisibilityChange = this.visibilityChange.bind(this)),
                (this.onVisibilityPlay = this.visibilityPlay.bind(this));
        }
        ((n.prototype = Object.create(e.prototype)).play = function () {
            "playing" != this.state &&
                (document.hidden
                    ? document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityPlay
                      )
                    : ((this.state = "playing"),
                      document.addEventListener(
                          "visibilitychange",
                          this.onVisibilityChange
                      ),
                      this.tick()));
        }),
            (n.prototype.tick = function () {
                var e, t;
                "playing" == this.state &&
                    ((e =
                        "number" == typeof (e = this.parent.options.autoPlay)
                            ? e
                            : 3e3),
                    (t = this).clear(),
                    (this.timeout = setTimeout(function () {
                        t.parent.next(!0), t.tick();
                    }, e)));
            }),
            (n.prototype.stop = function () {
                (this.state = "stopped"),
                    this.clear(),
                    document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityChange
                    );
            }),
            (n.prototype.clear = function () {
                clearTimeout(this.timeout);
            }),
            (n.prototype.pause = function () {
                "playing" == this.state &&
                    ((this.state = "paused"), this.clear());
            }),
            (n.prototype.unpause = function () {
                "paused" == this.state && this.play();
            }),
            (n.prototype.visibilityChange = function () {
                this[document.hidden ? "pause" : "unpause"]();
            }),
            (n.prototype.visibilityPlay = function () {
                this.play(),
                    document.removeEventListener(
                        "visibilitychange",
                        this.onVisibilityPlay
                    );
            }),
            t.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
            i.createMethods.push("_createPlayer");
        e = i.prototype;
        return (
            (e._createPlayer = function () {
                (this.player = new n(this)),
                    this.on("activate", this.activatePlayer),
                    this.on("uiChange", this.stopPlayer),
                    this.on("pointerDown", this.stopPlayer),
                    this.on("deactivate", this.deactivatePlayer);
            }),
            (e.activatePlayer = function () {
                this.options.autoPlay &&
                    (this.player.play(),
                    this.element.addEventListener("mouseenter", this));
            }),
            (e.playPlayer = function () {
                this.player.play();
            }),
            (e.stopPlayer = function () {
                this.player.stop();
            }),
            (e.pausePlayer = function () {
                this.player.pause();
            }),
            (e.unpausePlayer = function () {
                this.player.unpause();
            }),
            (e.deactivatePlayer = function () {
                this.player.stop(),
                    this.element.removeEventListener("mouseenter", this);
            }),
            (e.onmouseenter = function () {
                this.options.pauseAutoPlayOnHover &&
                    (this.player.pause(),
                    this.element.addEventListener("mouseleave", this));
            }),
            (e.onmouseleave = function () {
                this.player.unpause(),
                    this.element.removeEventListener("mouseleave", this);
            }),
            (i.Player = n),
            i
        );
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/add-remove-cell",
                  ["./flickity", "fizzy-ui-utils/utils"],
                  function (e, t) {
                      return i(0, e, t);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(
                  0,
                  require("./flickity"),
                  require("fizzy-ui-utils")
              ))
            : i(0, e.Flickity, e.fizzyUIUtils);
    })(window, function (e, t, n) {
        var i = t.prototype;
        return (
            (i.insert = function (e, t) {
                var i,
                    n,
                    s,
                    r,
                    o,
                    e = this._makeCells(e);
                e &&
                    e.length &&
                    ((i = this.cells.length),
                    (t = void 0 === t ? i : t),
                    (o = e),
                    (n = document.createDocumentFragment()),
                    o.forEach(function (e) {
                        n.appendChild(e.element);
                    }),
                    (o = n),
                    (s = t == i)
                        ? this.slider.appendChild(o)
                        : ((r = this.cells[t].element),
                          this.slider.insertBefore(o, r)),
                    0 === t
                        ? (this.cells = e.concat(this.cells))
                        : s
                        ? (this.cells = this.cells.concat(e))
                        : ((o = this.cells.splice(t, i - t)),
                          (this.cells = this.cells.concat(e).concat(o))),
                    this._sizeCells(e),
                    this.cellChange(t, !0));
            }),
            (i.append = function (e) {
                this.insert(e, this.cells.length);
            }),
            (i.prepend = function (e) {
                this.insert(e, 0);
            }),
            (i.remove = function (e) {
                var i,
                    e = this.getCells(e);
                e &&
                    e.length &&
                    ((i = this.cells.length - 1),
                    e.forEach(function (e) {
                        e.remove();
                        var t = this.cells.indexOf(e);
                        (i = Math.min(t, i)), n.removeFrom(this.cells, e);
                    }, this),
                    this.cellChange(i, !0));
            }),
            (i.cellSizeChange = function (e) {
                var e = this.getCell(e);
                e &&
                    (e.getSize(),
                    (e = this.cells.indexOf(e)),
                    this.cellChange(e));
            }),
            (i.cellChange = function (e, t) {
                var i = this.selectedElement,
                    i =
                        (this._positionCells(e),
                        this._getWrapShiftCells(),
                        this.setGallerySize(),
                        this.getCell(i));
                i && (this.selectedIndex = this.getCellSlideIndex(i)),
                    (this.selectedIndex = Math.min(
                        this.slides.length - 1,
                        this.selectedIndex
                    )),
                    this.emitEvent("cellChange", [e]),
                    this.select(this.selectedIndex),
                    t && this.positionSliderAtSelected();
            }),
            t
        );
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/lazyload",
                  ["./flickity", "fizzy-ui-utils/utils"],
                  function (e, t) {
                      return i(0, e, t);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(
                  0,
                  require("./flickity"),
                  require("fizzy-ui-utils")
              ))
            : i(0, e.Flickity, e.fizzyUIUtils);
    })(window, function (e, t, s) {
        "use strict";
        t.createMethods.push("_createLazyload");
        var i = t.prototype;
        function n(e, t) {
            (this.img = e), (this.flickity = t), this.load();
        }
        return (
            (i._createLazyload = function () {
                this.on("select", this.lazyLoad);
            }),
            (i.lazyLoad = function () {
                var t,
                    e = this.options.lazyLoad;
                e &&
                    ((e = this.getAdjacentCellElements(
                        "number" == typeof e ? e : 0
                    )),
                    (t = []),
                    e.forEach(function (e) {
                        e = (function (e) {
                            if ("IMG" == e.nodeName) {
                                var t = e.getAttribute(
                                        "data-flickity-lazyload"
                                    ),
                                    i = e.getAttribute(
                                        "data-flickity-lazyload-src"
                                    ),
                                    n = e.getAttribute(
                                        "data-flickity-lazyload-srcset"
                                    );
                                if (t || i || n) return [e];
                            }
                            t = e.querySelectorAll(
                                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
                            );
                            return s.makeArray(t);
                        })(e);
                        t = t.concat(e);
                    }),
                    t.forEach(function (e) {
                        new n(e, this);
                    }, this));
            }),
            (n.prototype.handleEvent = s.handleEvent),
            (n.prototype.load = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this);
                var e =
                        this.img.getAttribute("data-flickity-lazyload") ||
                        this.img.getAttribute("data-flickity-lazyload-src"),
                    t = this.img.getAttribute("data-flickity-lazyload-srcset");
                (this.img.src = e),
                    t && this.img.setAttribute("srcset", t),
                    this.img.removeAttribute("data-flickity-lazyload"),
                    this.img.removeAttribute("data-flickity-lazyload-src"),
                    this.img.removeAttribute("data-flickity-lazyload-srcset");
            }),
            (n.prototype.onload = function (e) {
                this.complete(e, "flickity-lazyloaded");
            }),
            (n.prototype.onerror = function (e) {
                this.complete(e, "flickity-lazyerror");
            }),
            (n.prototype.complete = function (e, t) {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                var i = this.flickity.getParentCell(this.img),
                    i = i && i.element;
                this.flickity.cellSizeChange(i),
                    this.img.classList.add(t),
                    this.flickity.dispatchEvent("lazyLoad", e, i);
            }),
            (t.LazyLoader = n),
            t
        );
    }),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity/js/index",
                  [
                      "./flickity",
                      "./drag",
                      "./prev-next-button",
                      "./page-dots",
                      "./player",
                      "./add-remove-cell",
                      "./lazyload",
                  ],
                  e
              )
            : "object" == typeof module &&
              module.exports &&
              (module.exports = e(
                  require("./flickity"),
                  require("./drag"),
                  require("./prev-next-button"),
                  require("./page-dots"),
                  require("./player"),
                  require("./add-remove-cell"),
                  require("./lazyload")
              ));
    })(
        (window,
        function (e) {
            return e;
        })
    ),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "flickity-as-nav-for/as-nav-for",
                  ["flickity/js/index", "fizzy-ui-utils/utils"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  require("flickity"),
                  require("fizzy-ui-utils")
              ))
            : (e.Flickity = t(e.Flickity, e.fizzyUIUtils));
    })(window, function (i, n) {
        i.createMethods.push("_createAsNavFor");
        var e = i.prototype;
        return (
            (e._createAsNavFor = function () {
                this.on("activate", this.activateAsNavFor),
                    this.on("deactivate", this.deactivateAsNavFor),
                    this.on("destroy", this.destroyAsNavFor);
                var e,
                    t = this.options.asNavFor;
                t &&
                    ((e = this),
                    setTimeout(function () {
                        e.setNavCompanion(t);
                    }));
            }),
            (e.setNavCompanion = function (e) {
                e = n.getQueryElement(e);
                var t,
                    e = i.data(e);
                e &&
                    e != this &&
                    ((this.navCompanion = e),
                    ((t = this).onNavCompanionSelect = function () {
                        t.navCompanionSelect();
                    }),
                    e.on("select", this.onNavCompanionSelect),
                    this.on("staticClick", this.onNavStaticClick),
                    this.navCompanionSelect(!0));
            }),
            (e.navCompanionSelect = function (e) {
                var t,
                    i,
                    n = this.navCompanion && this.navCompanion.selectedCells;
                n &&
                    ((t = n[0]),
                    (t = this.navCompanion.cells.indexOf(t)),
                    (n = t + n.length - 1),
                    (i = Math.floor(
                        ((i = this.navCompanion.cellAlign), (n - t) * i + t)
                    )),
                    this.selectCell(i, !1, e),
                    this.removeNavSelectedElements(),
                    i >= this.cells.length ||
                        ((e = this.cells.slice(t, 1 + n)),
                        (this.navSelectedElements = e.map(function (e) {
                            return e.element;
                        })),
                        this.changeNavSelectedClass("add")));
            }),
            (e.changeNavSelectedClass = function (t) {
                this.navSelectedElements.forEach(function (e) {
                    e.classList[t]("is-nav-selected");
                });
            }),
            (e.activateAsNavFor = function () {
                this.navCompanionSelect(!0);
            }),
            (e.removeNavSelectedElements = function () {
                this.navSelectedElements &&
                    (this.changeNavSelectedClass("remove"),
                    delete this.navSelectedElements);
            }),
            (e.onNavStaticClick = function (e, t, i, n) {
                "number" == typeof n && this.navCompanion.selectCell(n);
            }),
            (e.deactivateAsNavFor = function () {
                this.removeNavSelectedElements();
            }),
            (e.destroyAsNavFor = function () {
                this.navCompanion &&
                    (this.navCompanion.off("select", this.onNavCompanionSelect),
                    this.off("staticClick", this.onNavStaticClick),
                    delete this.navCompanion);
            }),
            i
        );
    }),
    (function (t, i) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                  "imagesloaded/imagesloaded",
                  ["ev-emitter/ev-emitter"],
                  function (e) {
                      return i(t, e);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("ev-emitter")))
            : (t.imagesLoaded = i(t, t.EvEmitter));
    })("undefined" != typeof window ? window : this, function (t, e) {
        var r = t.jQuery,
            o = t.console;
        function a(e, t) {
            for (var i in t) e[i] = t[i];
            return e;
        }
        var l = Array.prototype.slice;
        function d(e, t, i) {
            if (!(this instanceof d)) return new d(e, t, i);
            var n,
                s = e;
            (s = "string" == typeof e ? document.querySelectorAll(e) : s)
                ? ((this.elements =
                      ((n = s),
                      Array.isArray(n)
                          ? n
                          : "object" == typeof n && "number" == typeof n.length
                          ? l.call(n)
                          : [n])),
                  (this.options = a({}, this.options)),
                  "function" == typeof t ? (i = t) : a(this.options, t),
                  i && this.on("always", i),
                  this.getImages(),
                  r && (this.jqDeferred = new r.Deferred()),
                  setTimeout(this.check.bind(this)))
                : o.error("Bad element for imagesLoaded " + (s || e));
        }
        ((d.prototype = Object.create(e.prototype)).options = {}),
            (d.prototype.getImages = function () {
                (this.images = []),
                    this.elements.forEach(this.addElementImages, this);
            }),
            (d.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e),
                    !0 === this.options.background &&
                        this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && c[t]) {
                    for (
                        var i = e.querySelectorAll("img"), n = 0;
                        n < i.length;
                        n++
                    ) {
                        var s = i[n];
                        this.addImage(s);
                    }
                    if ("string" == typeof this.options.background)
                        for (
                            var r = e.querySelectorAll(this.options.background),
                                n = 0;
                            n < r.length;
                            n++
                        ) {
                            var o = r[n];
                            this.addElementBackgroundImages(o);
                        }
                }
            });
        var c = { 1: !0, 9: !0, 11: !0 };
        function i(e) {
            this.img = e;
        }
        function n(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
        }
        return (
            (d.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);
                if (t)
                    for (
                        var i = /url\((['"])?(.*?)\1\)/gi,
                            n = i.exec(t.backgroundImage);
                        null !== n;

                    ) {
                        var s = n && n[2];
                        s && this.addBackground(s, e),
                            (n = i.exec(t.backgroundImage));
                    }
            }),
            (d.prototype.addImage = function (e) {
                e = new i(e);
                this.images.push(e);
            }),
            (d.prototype.addBackground = function (e, t) {
                e = new n(e, t);
                this.images.push(e);
            }),
            (d.prototype.check = function () {
                var n = this;
                function t(e, t, i) {
                    setTimeout(function () {
                        n.progress(e, t, i);
                    });
                }
                (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? this.images.forEach(function (e) {
                              e.once("progress", t), e.check();
                          })
                        : this.complete();
            }),
            (d.prototype.progress = function (e, t, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, e),
                    this.progressedCount == this.images.length &&
                        this.complete(),
                    this.options.debug && o && o.log("progress: " + i, e, t);
            }),
            (d.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                (this.isComplete = !0),
                    this.emitEvent(e, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred &&
                        ((e = this.hasAnyBroken ? "reject" : "resolve"),
                        this.jqDeferred[e](this));
            }),
            ((i.prototype = Object.create(e.prototype)).check = function () {
                this.getIsImageComplete()
                    ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.proxyImage.src = this.img.src));
            }),
            (i.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (i.prototype.confirm = function (e, t) {
                (this.isLoaded = e),
                    this.emitEvent("progress", [this, this.img, t]);
            }),
            (i.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (i.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (i.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (i.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            ((n.prototype = Object.create(i.prototype)).check = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url),
                    this.getIsImageComplete() &&
                        (this.confirm(
                            0 !== this.img.naturalWidth,
                            "naturalWidth"
                        ),
                        this.unbindEvents());
            }),
            (n.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (n.prototype.confirm = function (e, t) {
                (this.isLoaded = e),
                    this.emitEvent("progress", [this, this.element, t]);
            }),
            (d.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery) &&
                    ((r = e).fn.imagesLoaded = function (e, t) {
                        return new d(this, e, t).jqDeferred.promise(r(this));
                    });
            })(),
            d
        );
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define(
                  ["flickity/js/index", "imagesloaded/imagesloaded"],
                  function (e, t) {
                      return i(0, e, t);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = i(
                  0,
                  require("flickity"),
                  require("imagesloaded")
              ))
            : (e.Flickity = i(0, e.Flickity, e.imagesLoaded));
    })(window, function (e, t, n) {
        "use strict";
        t.createMethods.push("_createImagesLoaded");
        var i = t.prototype;
        return (
            (i._createImagesLoaded = function () {
                this.on("activate", this.imagesLoaded);
            }),
            (i.imagesLoaded = function () {
                var i;
                this.options.imagesLoaded &&
                    n((i = this).slider).on("progress", function (e, t) {
                        (t = i.getParentCell(t.img)),
                            i.cellSizeChange(t && t.element),
                            i.options.freeScroll ||
                                i.positionSliderAtSelected();
                    });
            }),
            t
        );
    }),
    (function (e, t) {
        "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() {}
        let t = e.prototype;
        return (
            (t.on = function (e, t) {
                if (!e || !t) return this;
                let i = (this._events = this._events || {}),
                    n = (i[e] = i[e] || []);
                return n.includes(t) || n.push(t), this;
            }),
            (t.once = function (e, t) {
                if (!e || !t) return this;
                this.on(e, t);
                let i = (this._onceEvents = this._onceEvents || {}),
                    n = (i[e] = i[e] || {});
                return (n[t] = !0), this;
            }),
            (t.off = function (e, t) {
                let i = this._events && this._events[e];
                if (!i || !i.length) return this;
                e = i.indexOf(t);
                return -1 != e && i.splice(e, 1), this;
            }),
            (t.emitEvent = function (e, t) {
                let i = this._events && this._events[e];
                if (!i || !i.length) return this;
                (i = i.slice(0)), (t = t || []);
                let n = this._onceEvents && this._onceEvents[e];
                for (var s of i)
                    n && n[s] && (this.off(e, s), delete n[s]),
                        s.apply(this, t);
                return this;
            }),
            (t.allOff = function () {
                return delete this._events, delete this._onceEvents, this;
            }),
            e
        );
    }),
    (function (e, t) {
        "object" == typeof module && module.exports
            ? (module.exports = t(e, require("ev-emitter")))
            : (e.imagesLoaded = t(e, e.EvEmitter));
    })("undefined" != typeof window ? window : this, function (t, e) {
        let r = t.jQuery,
            o = t.console;
        function a(e, t, i) {
            if (!(this instanceof a)) return new a(e, t, i);
            let n = e;
            var s;
            (n = "string" == typeof e ? document.querySelectorAll(e) : n)
                ? ((this.elements =
                      ((s = n),
                      Array.isArray(s)
                          ? s
                          : "object" == typeof s && "number" == typeof s.length
                          ? [...s]
                          : [s])),
                  (this.options = {}),
                  "function" == typeof t
                      ? (i = t)
                      : Object.assign(this.options, t),
                  i && this.on("always", i),
                  this.getImages(),
                  r && (this.jqDeferred = new r.Deferred()),
                  setTimeout(this.check.bind(this)))
                : o.error("Bad element for imagesLoaded " + (n || e));
        }
        (a.prototype = Object.create(e.prototype)).getImages = function () {
            (this.images = []),
                this.elements.forEach(this.addElementImages, this);
        };
        const s = [1, 9, 11],
            l =
                ((a.prototype.addElementImages = function (e) {
                    "IMG" === e.nodeName && this.addImage(e),
                        !0 === this.options.background &&
                            this.addElementBackgroundImages(e);
                    var t,
                        i,
                        n = e["nodeType"];
                    if (n && s.includes(n)) {
                        for (t of e.querySelectorAll("img")) this.addImage(t);
                        if ("string" == typeof this.options.background)
                            for (i of e.querySelectorAll(
                                this.options.background
                            ))
                                this.addElementBackgroundImages(i);
                    }
                }),
                /url\((['"])?(.*?)\1\)/gi);
        function i(e) {
            this.img = e;
        }
        function n(e, t) {
            (this.url = e), (this.element = t), (this.img = new Image());
        }
        return (
            (a.prototype.addElementBackgroundImages = function (t) {
                var i = getComputedStyle(t);
                if (i) {
                    let e = l.exec(i.backgroundImage);
                    for (; null !== e; ) {
                        var n = e && e[2];
                        n && this.addBackground(n, t),
                            (e = l.exec(i.backgroundImage));
                    }
                }
            }),
            (a.prototype.addImage = function (e) {
                e = new i(e);
                this.images.push(e);
            }),
            (a.prototype.addBackground = function (e, t) {
                e = new n(e, t);
                this.images.push(e);
            }),
            (a.prototype.check = function () {
                if (
                    ((this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length)
                ) {
                    let t = (e, t, i) => {
                        setTimeout(() => {
                            this.progress(e, t, i);
                        });
                    };
                    this.images.forEach(function (e) {
                        e.once("progress", t), e.check();
                    });
                } else this.complete();
            }),
            (a.prototype.progress = function (e, t, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, e),
                    this.progressedCount === this.images.length &&
                        this.complete(),
                    this.options.debug && o && o.log("progress: " + i, e, t);
            }),
            (a.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                (this.isComplete = !0),
                    this.emitEvent(e, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred &&
                        ((e = this.hasAnyBroken ? "reject" : "resolve"),
                        this.jqDeferred[e](this));
            }),
            ((i.prototype = Object.create(e.prototype)).check = function () {
                this.getIsImageComplete()
                    ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.img.crossOrigin &&
                          (this.proxyImage.crossOrigin = this.img.crossOrigin),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.proxyImage.src =
                          this.img.currentSrc || this.img.src));
            }),
            (i.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth;
            }),
            (i.prototype.confirm = function (e, t) {
                this.isLoaded = e;
                (e = this.img.parentNode),
                    (e = "PICTURE" === e.nodeName ? e : this.img);
                this.emitEvent("progress", [this, e, t]);
            }),
            (i.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (i.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (i.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (i.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            ((n.prototype = Object.create(i.prototype)).check = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url),
                    this.getIsImageComplete() &&
                        (this.confirm(
                            0 !== this.img.naturalWidth,
                            "naturalWidth"
                        ),
                        this.unbindEvents());
            }),
            (n.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (n.prototype.confirm = function (e, t) {
                (this.isLoaded = e),
                    this.emitEvent("progress", [this, this.element, t]);
            }),
            (a.makeJQueryPlugin = function (e) {
                (e = e || t.jQuery) &&
                    ((r = e).fn.imagesLoaded = function (e, t) {
                        let i = new a(this, e, t);
                        return i.jqDeferred.promise(r(this));
                    });
            })(),
            a
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).lightGallery = t());
    })(this, function () {
        "use strict";
        var t = function () {
                return (t =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, n = arguments.length; i < n; i++)
                            for (var s in (t = arguments[i]))
                                Object.prototype.hasOwnProperty.call(t, s) &&
                                    (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            },
            s = "lgUpdateSlides",
            a = "lgPosterClick",
            n = "lgBeforeNextSlide",
            r = "lgBeforePrevSlide",
            i = {
                mode: "lg-slide",
                easing: "ease",
                speed: 400,
                licenseKey: "0000-0000-000-0000",
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 300,
                container: "",
                startAnimationDuration: 400,
                zoomFromOrigin: !0,
                hideBarsDelay: 0,
                showBarsAfter: 1e4,
                slideDelay: 0,
                supportLegacyBrowser: !0,
                allowMediaOverlap: !1,
                videoMaxSize: "1280-720",
                loadYouTubePoster: !0,
                defaultCaptionHeight: 0,
                ariaLabelledby: "",
                ariaDescribedby: "",
                closable: !0,
                swipeToClose: !0,
                closeOnTap: !0,
                showCloseIcon: !0,
                showMaximizeIcon: !1,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimation: !0,
                hideControlOnEnd: !1,
                mousewheel: !1,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 2,
                numberOfSlideItemsInDom: 10,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: 0,
                iframeWidth: "100%",
                iframeHeight: "100%",
                iframeMaxWidth: "100%",
                iframeMaxHeight: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                extraProps: [],
                exThumbImage: "",
                isMobile: void 0,
                mobileSettings: {
                    controls: !1,
                    showCloseIcon: !1,
                    download: !1,
                },
                plugins: [],
                strings: {
                    closeGallery: "Close gallery",
                    toggleMaximize: "Toggle maximize",
                    previousSlide: "Previous slide",
                    nextSlide: "Next slide",
                    download: "Download",
                    playVideo: "Play video",
                },
            },
            o =
                ((l.generateUUID = function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function (e) {
                            var t = (16 * Math.random()) | 0;
                            return ("x" == e ? t : (3 & t) | 8).toString(16);
                        }
                    );
                }),
                (l.prototype._getSelector = function (e, t) {
                    return (
                        void 0 === t && (t = document),
                        "string" != typeof e
                            ? e
                            : ((t = t || document),
                              "#" === e.substring(0, 1)
                                  ? t.querySelector(e)
                                  : t.querySelectorAll(e))
                    );
                }),
                (l.prototype._each = function (e) {
                    return (
                        this.selector &&
                            (void 0 !== this.selector.length
                                ? [].forEach.call(this.selector, e)
                                : e(this.selector, 0)),
                        this
                    );
                }),
                (l.prototype._setCssVendorPrefix = function (e, t, i) {
                    t = t.replace(/-([a-z])/gi, function (e, t) {
                        return t.toUpperCase();
                    });
                    -1 !== this.cssVenderPrefixes.indexOf(t)
                        ? ((e.style[t.charAt(0).toLowerCase() + t.slice(1)] =
                              i),
                          (e.style["webkit" + t] = i),
                          (e.style["moz" + t] = i),
                          (e.style["ms" + t] = i),
                          (e.style["o" + t] = i))
                        : (e.style[t] = i);
                }),
                (l.prototype._getFirstEl = function () {
                    return this.selector && void 0 !== this.selector.length
                        ? this.selector[0]
                        : this.selector;
                }),
                (l.prototype.isEventMatched = function (e, t) {
                    var i = t.split(".");
                    return e
                        .split(".")
                        .filter(function (e) {
                            return e;
                        })
                        .every(function (e) {
                            return -1 !== i.indexOf(e);
                        });
                }),
                (l.prototype.attr = function (t, i) {
                    return void 0 === i
                        ? this.firstElement
                            ? this.firstElement.getAttribute(t)
                            : ""
                        : (this._each(function (e) {
                              e.setAttribute(t, i);
                          }),
                          this);
                }),
                (l.prototype.find = function (e) {
                    return E(this._getSelector(e, this.selector));
                }),
                (l.prototype.first = function () {
                    return this.selector && void 0 !== this.selector.length
                        ? E(this.selector[0])
                        : E(this.selector);
                }),
                (l.prototype.eq = function (e) {
                    return E(this.selector[e]);
                }),
                (l.prototype.parent = function () {
                    return E(this.selector.parentElement);
                }),
                (l.prototype.get = function () {
                    return this._getFirstEl();
                }),
                (l.prototype.removeAttr = function (e) {
                    var i = e.split(" ");
                    return (
                        this._each(function (t) {
                            i.forEach(function (e) {
                                return t.removeAttribute(e);
                            });
                        }),
                        this
                    );
                }),
                (l.prototype.wrap = function (e) {
                    if (!this.firstElement) return this;
                    var t = document.createElement("div");
                    return (
                        (t.className = e),
                        this.firstElement.parentNode.insertBefore(
                            t,
                            this.firstElement
                        ),
                        this.firstElement.parentNode.removeChild(
                            this.firstElement
                        ),
                        t.appendChild(this.firstElement),
                        this
                    );
                }),
                (l.prototype.addClass = function (e) {
                    return (
                        void 0 === e && (e = ""),
                        this._each(function (t) {
                            e.split(" ").forEach(function (e) {
                                e && t.classList.add(e);
                            });
                        }),
                        this
                    );
                }),
                (l.prototype.removeClass = function (e) {
                    return (
                        this._each(function (t) {
                            e.split(" ").forEach(function (e) {
                                e && t.classList.remove(e);
                            });
                        }),
                        this
                    );
                }),
                (l.prototype.hasClass = function (e) {
                    return (
                        !!this.firstElement &&
                        this.firstElement.classList.contains(e)
                    );
                }),
                (l.prototype.hasAttribute = function (e) {
                    return (
                        !!this.firstElement && this.firstElement.hasAttribute(e)
                    );
                }),
                (l.prototype.toggleClass = function (e) {
                    return (
                        this.firstElement &&
                            (this.hasClass(e)
                                ? this.removeClass(e)
                                : this.addClass(e)),
                        this
                    );
                }),
                (l.prototype.css = function (t, i) {
                    var n = this;
                    return (
                        this._each(function (e) {
                            n._setCssVendorPrefix(e, t, i);
                        }),
                        this
                    );
                }),
                (l.prototype.on = function (e, t) {
                    var i = this;
                    return (
                        this.selector &&
                            e.split(" ").forEach(function (e) {
                                Array.isArray(l.eventListeners[e]) ||
                                    (l.eventListeners[e] = []),
                                    l.eventListeners[e].push(t),
                                    i.selector.addEventListener(
                                        e.split(".")[0],
                                        t
                                    );
                            }),
                        this
                    );
                }),
                (l.prototype.once = function (e, t) {
                    var i = this;
                    return (
                        this.on(e, function () {
                            i.off(e), t(e);
                        }),
                        this
                    );
                }),
                (l.prototype.off = function (e) {
                    var i = this;
                    return (
                        this.selector &&
                            Object.keys(l.eventListeners).forEach(function (t) {
                                i.isEventMatched(e, t) &&
                                    (l.eventListeners[t].forEach(function (e) {
                                        i.selector.removeEventListener(
                                            t.split(".")[0],
                                            e
                                        );
                                    }),
                                    (l.eventListeners[t] = []));
                            }),
                        this
                    );
                }),
                (l.prototype.trigger = function (e, t) {
                    if (!this.firstElement) return this;
                    e = new CustomEvent(e.split(".")[0], { detail: t || null });
                    return this.firstElement.dispatchEvent(e), this;
                }),
                (l.prototype.load = function (e) {
                    var t = this;
                    return (
                        fetch(e)
                            .then(function (e) {
                                return e.text();
                            })
                            .then(function (e) {
                                t.selector.innerHTML = e;
                            }),
                        this
                    );
                }),
                (l.prototype.html = function (t) {
                    return void 0 === t
                        ? this.firstElement
                            ? this.firstElement.innerHTML
                            : ""
                        : (this._each(function (e) {
                              e.innerHTML = t;
                          }),
                          this);
                }),
                (l.prototype.append = function (t) {
                    return (
                        this._each(function (e) {
                            "string" == typeof t
                                ? e.insertAdjacentHTML("beforeend", t)
                                : e.appendChild(t);
                        }),
                        this
                    );
                }),
                (l.prototype.prepend = function (t) {
                    return (
                        this._each(function (e) {
                            e.insertAdjacentHTML("afterbegin", t);
                        }),
                        this
                    );
                }),
                (l.prototype.remove = function () {
                    return (
                        this._each(function (e) {
                            e.parentNode.removeChild(e);
                        }),
                        this
                    );
                }),
                (l.prototype.empty = function () {
                    return (
                        this._each(function (e) {
                            e.innerHTML = "";
                        }),
                        this
                    );
                }),
                (l.prototype.scrollTop = function (e) {
                    return void 0 !== e
                        ? ((document.body.scrollTop = e),
                          (document.documentElement.scrollTop = e),
                          this)
                        : window.pageYOffset ||
                              document.documentElement.scrollTop ||
                              document.body.scrollTop ||
                              0;
                }),
                (l.prototype.scrollLeft = function (e) {
                    return void 0 !== e
                        ? ((document.body.scrollLeft = e),
                          (document.documentElement.scrollLeft = e),
                          this)
                        : window.pageXOffset ||
                              document.documentElement.scrollLeft ||
                              document.body.scrollLeft ||
                              0;
                }),
                (l.prototype.offset = function () {
                    if (!this.firstElement) return { left: 0, top: 0 };
                    var e = this.firstElement.getBoundingClientRect(),
                        t = E("body").style().marginLeft;
                    return {
                        left: e.left - parseFloat(t) + this.scrollLeft(),
                        top: e.top + this.scrollTop(),
                    };
                }),
                (l.prototype.style = function () {
                    return this.firstElement
                        ? this.firstElement.currentStyle ||
                              window.getComputedStyle(this.firstElement)
                        : {};
                }),
                (l.prototype.width = function () {
                    var e = this.style();
                    return (
                        this.firstElement.clientWidth -
                        parseFloat(e.paddingLeft) -
                        parseFloat(e.paddingRight)
                    );
                }),
                (l.prototype.height = function () {
                    var e = this.style();
                    return (
                        this.firstElement.clientHeight -
                        parseFloat(e.paddingTop) -
                        parseFloat(e.paddingBottom)
                    );
                }),
                (l.eventListeners = {}),
                l);
        function l(e) {
            return (
                (this.cssVenderPrefixes = [
                    "TransitionDuration",
                    "TransitionTimingFunction",
                    "Transform",
                    "Transition",
                ]),
                (this.selector = this._getSelector(e)),
                (this.firstElement = this._getFirstEl()),
                this
            );
        }
        function E(e) {
            return (
                "function" != typeof window.CustomEvent &&
                    (window.CustomEvent = function (e, t) {
                        t = t || { bubbles: !1, cancelable: !1, detail: null };
                        var i = document.createEvent("CustomEvent");
                        return (
                            i.initCustomEvent(
                                e,
                                t.bubbles,
                                t.cancelable,
                                t.detail
                            ),
                            i
                        );
                    }),
                Element.prototype.matches ||
                    (Element.prototype.matches =
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.webkitMatchesSelector),
                new o(e)
            );
        }
        var h = [
            "src",
            "sources",
            "subHtml",
            "subHtmlUrl",
            "html",
            "video",
            "poster",
            "slideName",
            "responsive",
            "srcset",
            "sizes",
            "iframe",
            "downloadUrl",
            "download",
            "width",
            "facebookShareUrl",
            "tweetText",
            "iframeTitle",
            "twitterShareUrl",
            "pinterestShareUrl",
            "pinterestText",
            "fbHtml",
            "disqusIdentifier",
            "disqusUrl",
        ];
        function S(e, t, i, n) {
            void 0 === i && (i = 0);
            var s = E(e).attr("data-lg-size") || n;
            if (s) {
                var r = s.split(",");
                if (r[1])
                    for (var o = window.innerWidth, a = 0; a < r.length; a++) {
                        var l = r[a];
                        if (parseInt(l.split("-")[2], 10) > o) {
                            s = l;
                            break;
                        }
                        a === r.length - 1 && (s = l);
                    }
                var e = s.split("-"),
                    n = parseInt(e[0], 10),
                    e = parseInt(e[1], 10),
                    d = t.width(),
                    t = t.height() - i,
                    i = Math.min(d, n),
                    d = Math.min(t, e),
                    t = Math.min(i / n, d / e);
                return { width: n * t, height: e * t };
            }
        }
        function d(e, t, i, n, s) {
            if (s) {
                var r,
                    o,
                    a,
                    l,
                    e = E(e).find("img").first();
                if (e.get())
                    return (
                        (a = (l = t.get().getBoundingClientRect()).width),
                        (t = t.height() - (i + n)),
                        (n = e.width()),
                        (r = e.height()),
                        (o = e.style()),
                        (a =
                            (a - n) / 2 -
                            e.offset().left +
                            (parseFloat(o.paddingLeft) || 0) +
                            (parseFloat(o.borderLeft) || 0) +
                            E(window).scrollLeft() +
                            l.left),
                        (l =
                            (t - r) / 2 -
                            e.offset().top +
                            (parseFloat(o.paddingTop) || 0) +
                            (parseFloat(o.borderTop) || 0) +
                            E(window).scrollTop() +
                            i),
                        "translate3d(" +
                            (a *= -1) +
                            "px, " +
                            (l *= -1) +
                            "px, 0) scale3d(" +
                            n / s.width +
                            ", " +
                            r / s.height +
                            ", 1)"
                    );
            }
        }
        function T(e, t, i, n, s, r) {
            return (
                (i =
                    "<img " +
                    i +
                    " " +
                    (n ? 'srcset="' + n + '"' : "") +
                    "  " +
                    (s ? 'sizes="' + s + '"' : "") +
                    ' class="lg-object lg-image" data-index="' +
                    e +
                    '" src="' +
                    t +
                    '" />'),
                (n = ""),
                (n = r
                    ? ("string" == typeof r ? JSON.parse(r) : r).map(function (
                          t
                      ) {
                          var i = "";
                          return (
                              Object.keys(t).forEach(function (e) {
                                  i += " " + e + '="' + t[e] + '"';
                              }),
                              "<source " + i + "></source>"
                          );
                      })
                    : n) + i
            );
        }
        function c(e, t, d, c) {
            var u = [],
                p = (function () {
                    for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                        e += arguments[t].length;
                    for (var n = Array(e), s = 0, t = 0; t < i; t++)
                        for (
                            var r = arguments[t], o = 0, a = r.length;
                            o < a;
                            o++, s++
                        )
                            n[s] = r[o];
                    return n;
                })(h, t);
            return (
                [].forEach.call(e, function (e) {
                    for (var t = {}, i = 0; i < e.attributes.length; i++) {
                        var n,
                            s,
                            r = e.attributes[i];
                        r.specified &&
                            ((n =
                                "href" === (n = r.name)
                                    ? "src"
                                    : (n =
                                          (n = n.replace("data-", ""))
                                              .charAt(0)
                                              .toLowerCase() +
                                          n.slice(1)).replace(
                                          /-([a-z])/g,
                                          function (e) {
                                              return e[1].toUpperCase();
                                          }
                                      )),
                            (s = ""),
                            (s = -1 < p.indexOf(n) ? n : s) &&
                                (t[s] = r.value));
                    }
                    var o = E(e),
                        a = o.find("img").first().attr("alt"),
                        l = o.attr("title"),
                        o = c ? o.attr(c) : o.find("img").first().attr("src");
                    (t.thumb = o),
                        d && !t.subHtml && (t.subHtml = l || a || ""),
                        (t.alt = a || l || ""),
                        u.push(t);
                }),
                u
            );
        }
        var u = 0,
            p =
                ((e.prototype.generateSettings = function (e) {
                    (this.settings = t(t({}, i), e)),
                        (this.settings.isMobile &&
                        "function" == typeof this.settings.isMobile
                            ? this.settings.isMobile()
                            : /iPhone|iPad|iPod|Android/i.test(
                                  navigator.userAgent
                              )) &&
                            ((e = t(
                                t({}, this.settings.mobileSettings),
                                this.settings.mobileSettings
                            )),
                            (this.settings = t(t({}, this.settings), e)));
                }),
                (e.prototype.normalizeSettings = function () {
                    this.settings.slideEndAnimation &&
                        (this.settings.hideControlOnEnd = !1),
                        this.settings.closable ||
                            (this.settings.swipeToClose = !1),
                        (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                        this.settings.dynamic && (this.zoomFromOrigin = !1),
                        this.settings.container ||
                            (this.settings.container = document.body),
                        (this.settings.preload = Math.min(
                            this.settings.preload,
                            this.galleryItems.length
                        ));
                }),
                (e.prototype.init = function () {
                    var e = this;
                    this.addSlideVideoInfo(this.galleryItems),
                        this.buildStructure(),
                        this.LGel.trigger("lgInit", { instance: this }),
                        this.settings.keyPress && this.keyPress(),
                        setTimeout(function () {
                            e.enableDrag(),
                                e.enableSwipe(),
                                e.triggerPosterClick();
                        }, 50),
                        this.arrow(),
                        this.settings.mousewheel && this.mousewheel(),
                        this.settings.dynamic || this.openGalleryOnItemClick();
                }),
                (e.prototype.openGalleryOnItemClick = function () {
                    for (
                        var s = this, r = this, e = 0;
                        e < this.items.length;
                        e++
                    )
                        !(function (t) {
                            var i = r.items[t],
                                e = E(i),
                                n = o.generateUUID();
                            e.attr("data-lg-id", n).on(
                                "click.lgcustom-item-" + n,
                                function (e) {
                                    e.preventDefault();
                                    e = s.settings.index || t;
                                    s.openGallery(e, i);
                                }
                            );
                        })(e);
                }),
                (e.prototype.buildModules = function () {
                    var t = this;
                    this.settings.plugins.forEach(function (e) {
                        t.plugins.push(new e(t, E));
                    });
                }),
                (e.prototype.validateLicense = function () {
                    this.settings.licenseKey
                        ? "0000-0000-000-0000" === this.settings.licenseKey &&
                          console.warn(
                              "lightGallery: " +
                                  this.settings.licenseKey +
                                  " license key is not valid for production use"
                          )
                        : console.error("Please provide a valid license key");
                }),
                (e.prototype.getSlideItem = function (e) {
                    return E(this.getSlideItemId(e));
                }),
                (e.prototype.getSlideItemId = function (e) {
                    return "#lg-item-" + this.lgId + "-" + e;
                }),
                (e.prototype.getIdName = function (e) {
                    return e + "-" + this.lgId;
                }),
                (e.prototype.getElementById = function (e) {
                    return E("#" + this.getIdName(e));
                }),
                (e.prototype.manageSingleSlideClassName = function () {
                    this.galleryItems.length < 2
                        ? this.outer.addClass("lg-single-item")
                        : this.outer.removeClass("lg-single-item");
                }),
                (e.prototype.buildStructure = function () {
                    var e,
                        t,
                        i,
                        n,
                        s,
                        r,
                        o,
                        a,
                        l = this;
                    (this.$container && this.$container.get()) ||
                        ((t = e = ""),
                        this.settings.controls &&
                            (e =
                                '<button type="button" id="' +
                                this.getIdName("lg-prev") +
                                '" aria-label="' +
                                this.settings.strings.previousSlide +
                                '" class="lg-prev lg-icon"> ' +
                                this.settings.prevHtml +
                                ' </button>\n                <button type="button" id="' +
                                this.getIdName("lg-next") +
                                '" aria-label="' +
                                this.settings.strings.nextSlide +
                                '" class="lg-next lg-icon"> ' +
                                this.settings.nextHtml +
                                " </button>"),
                        ".lg-item" !== this.settings.appendSubHtmlTo &&
                            (t =
                                '<div class="lg-sub-html" role="status" aria-live="polite"></div>'),
                        (i = ""),
                        this.settings.allowMediaOverlap &&
                            (i += "lg-media-overlap "),
                        (a = this.settings.ariaLabelledby
                            ? 'aria-labelledby="' +
                              this.settings.ariaLabelledby +
                              '"'
                            : ""),
                        (n = this.settings.ariaDescribedby
                            ? 'aria-describedby="' +
                              this.settings.ariaDescribedby +
                              '"'
                            : ""),
                        (o =
                            "lg-container " +
                            this.settings.addClass +
                            " " +
                            (document.body !== this.settings.container
                                ? "lg-inline"
                                : "")),
                        (s =
                            this.settings.closable &&
                            this.settings.showCloseIcon
                                ? '<button type="button" aria-label="' +
                                  this.settings.strings.closeGallery +
                                  '" id="' +
                                  this.getIdName("lg-close") +
                                  '" class="lg-close lg-icon"></button>'
                                : ""),
                        (r = this.settings.showMaximizeIcon
                            ? '<button type="button" aria-label="' +
                              this.settings.strings.toggleMaximize +
                              '" id="' +
                              this.getIdName("lg-maximize") +
                              '" class="lg-maximize lg-icon"></button>'
                            : ""),
                        (o =
                            '\n        <div class="' +
                            o +
                            '" id="' +
                            this.getIdName("lg-container") +
                            '" tabindex="-1" aria-modal="true" ' +
                            a +
                            " " +
                            n +
                            ' role="dialog"\n        >\n            <div id="' +
                            this.getIdName("lg-backdrop") +
                            '" class="lg-backdrop"></div>\n\n            <div id="' +
                            this.getIdName("lg-outer") +
                            '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                            i +
                            ' ">\n\n              <div id="' +
                            this.getIdName("lg-content") +
                            '" class="lg-content">\n                <div id="' +
                            this.getIdName("lg-inner") +
                            '" class="lg-inner">\n                </div>\n                ' +
                            e +
                            '\n              </div>\n                <div id="' +
                            this.getIdName("lg-toolbar") +
                            '" class="lg-toolbar lg-group">\n                    ' +
                            r +
                            "\n                    " +
                            s +
                            "\n                    </div>\n                    " +
                            (".lg-outer" === this.settings.appendSubHtmlTo
                                ? t
                                : "") +
                            '\n                <div id="' +
                            this.getIdName("lg-components") +
                            '" class="lg-components">\n                    ' +
                            (".lg-sub-html" === this.settings.appendSubHtmlTo
                                ? t
                                : "") +
                            "\n                </div>\n            </div>\n        </div>\n        "),
                        E(this.settings.container).append(o),
                        document.body !== this.settings.container &&
                            E(this.settings.container).css(
                                "position",
                                "relative"
                            ),
                        (this.outer = this.getElementById("lg-outer")),
                        (this.$lgComponents =
                            this.getElementById("lg-components")),
                        (this.$backdrop = this.getElementById("lg-backdrop")),
                        (this.$container = this.getElementById("lg-container")),
                        (this.$inner = this.getElementById("lg-inner")),
                        (this.$content = this.getElementById("lg-content")),
                        (this.$toolbar = this.getElementById("lg-toolbar")),
                        this.$backdrop.css(
                            "transition-duration",
                            this.settings.backdropDuration + "ms"
                        ),
                        (a = this.settings.mode + " "),
                        this.manageSingleSlideClassName(),
                        this.settings.enableDrag && (a += "lg-grab "),
                        this.outer.addClass(a),
                        this.$inner.css(
                            "transition-timing-function",
                            this.settings.easing
                        ),
                        this.$inner.css(
                            "transition-duration",
                            this.settings.speed + "ms"
                        ),
                        this.settings.download &&
                            this.$toolbar.append(
                                '<a id="' +
                                    this.getIdName("lg-download") +
                                    '" target="_blank" rel="noopener" aria-label="' +
                                    this.settings.strings.download +
                                    '" download class="lg-download lg-icon"></a>'
                            ),
                        this.counter(),
                        E(window).on(
                            "resize.lg.global" +
                                this.lgId +
                                " orientationchange.lg.global" +
                                this.lgId,
                            function () {
                                l.refreshOnResize();
                            }
                        ),
                        this.hideBars(),
                        this.manageCloseGallery(),
                        this.toggleMaximize(),
                        this.initModules());
                }),
                (e.prototype.refreshOnResize = function () {
                    var e, t, i;
                    this.lgOpened &&
                        ((e = this.galleryItems[this.index].__slideVideoInfo),
                        (this.mediaContainerPosition =
                            this.getMediaContainerPosition()),
                        (i = (t = this.mediaContainerPosition).top),
                        (t = t.bottom),
                        (this.currentImageSize = S(
                            this.items[this.index],
                            this.outer,
                            i + t,
                            e && this.settings.videoMaxSize
                        )),
                        e &&
                            this.resizeVideoSlide(
                                this.index,
                                this.currentImageSize
                            ),
                        this.zoomFromOrigin &&
                            !this.isDummyImageRemoved &&
                            ((i = this.getDummyImgStyles(
                                this.currentImageSize
                            )),
                            this.outer
                                .find(".lg-current .lg-dummy-img")
                                .first()
                                .attr("style", i)),
                        this.LGel.trigger("lgContainerResize"));
                }),
                (e.prototype.resizeVideoSlide = function (e, t) {
                    t = this.getVideoContStyle(t);
                    this.getSlideItem(e)
                        .find(".lg-video-cont")
                        .attr("style", t);
                }),
                (e.prototype.updateSlides = function (e, t) {
                    var i, n;
                    this.index > e.length - 1 && (this.index = e.length - 1),
                        1 === e.length && (this.index = 0),
                        e.length
                            ? ((i = this.galleryItems[t].src),
                              (this.galleryItems = e),
                              this.updateControls(),
                              this.$inner.empty(),
                              (this.currentItemsInDom = []),
                              (n = 0),
                              this.galleryItems.some(function (e, t) {
                                  return e.src === i && ((n = t), !0);
                              }),
                              (this.currentItemsInDom = this.organizeSlideItems(
                                  n,
                                  -1
                              )),
                              this.loadContent(n, !0),
                              this.getSlideItem(n).addClass("lg-current"),
                              (this.index = n),
                              this.updateCurrentCounter(n),
                              this.LGel.trigger(s))
                            : this.closeGallery();
                }),
                (e.prototype.getItems = function () {
                    return (
                        (this.items = []),
                        this.settings.dynamic
                            ? this.settings.dynamicEl || []
                            : ("this" === this.settings.selector
                                  ? this.items.push(this.el)
                                  : this.settings.selector
                                  ? "string" == typeof this.settings.selector
                                      ? this.settings.selectWithin
                                          ? ((e = E(
                                                this.settings.selectWithin
                                            )),
                                            (this.items = e
                                                .find(this.settings.selector)
                                                .get()))
                                          : (this.items =
                                                this.el.querySelectorAll(
                                                    this.settings.selector
                                                ))
                                      : (this.items = this.settings.selector)
                                  : (this.items = this.el.children),
                              c(
                                  this.items,
                                  this.settings.extraProps,
                                  this.settings.getCaptionFromTitleOrAlt,
                                  this.settings.exThumbImage
                              ))
                    );
                    var e;
                }),
                (e.prototype.openGallery = function (t, e) {
                    var i,
                        n,
                        s,
                        r,
                        o,
                        a = this;
                    void 0 === t && (t = this.settings.index),
                        this.lgOpened ||
                            ((this.lgOpened = !0),
                            this.outer.get().focus(),
                            this.outer.removeClass("lg-hide-items"),
                            this.$container.addClass("lg-show"),
                            (r = this.getItemsToBeInsertedToDom(t, t)),
                            (this.currentItemsInDom = r),
                            (i = ""),
                            r.forEach(function (e) {
                                i =
                                    i +
                                    '<div id="' +
                                    e +
                                    '" class="lg-item"></div>';
                            }),
                            this.$inner.append(i),
                            this.addHtml(t),
                            (n = ""),
                            (this.mediaContainerPosition =
                                this.getMediaContainerPosition()),
                            (s = (r = this.mediaContainerPosition).top),
                            (r = r.bottom),
                            this.settings.allowMediaOverlap ||
                                this.setMediaContainerPosition(s, r),
                            (o = this.galleryItems[t].__slideVideoInfo),
                            this.zoomFromOrigin &&
                                e &&
                                ((this.currentImageSize = S(
                                    e,
                                    this.outer,
                                    s + r,
                                    o && this.settings.videoMaxSize
                                )),
                                (n = d(
                                    e,
                                    this.outer,
                                    s,
                                    r,
                                    this.currentImageSize
                                ))),
                            (this.zoomFromOrigin && n) ||
                                (this.outer.addClass(this.settings.startClass),
                                this.getSlideItem(t).removeClass(
                                    "lg-complete"
                                )),
                            (o = this.settings.zoomFromOrigin
                                ? 100
                                : this.settings.backdropDuration),
                            setTimeout(function () {
                                a.outer.addClass("lg-components-open");
                            }, o),
                            (this.index = t),
                            this.LGel.trigger("lgBeforeOpen"),
                            this.getSlideItem(t).addClass("lg-current"),
                            (this.lGalleryOn = !1),
                            (this.prevScrollTop = E(window).scrollTop()),
                            setTimeout(function () {
                                var e;
                                a.zoomFromOrigin &&
                                    n &&
                                    ((e = a.getSlideItem(t)).css(
                                        "transform",
                                        n
                                    ),
                                    setTimeout(function () {
                                        e
                                            .addClass(
                                                "lg-start-progress lg-start-end-progress"
                                            )
                                            .css(
                                                "transition-duration",
                                                a.settings
                                                    .startAnimationDuration +
                                                    "ms"
                                            ),
                                            a.outer.addClass(
                                                "lg-zoom-from-image"
                                            );
                                    }),
                                    setTimeout(function () {
                                        e.css(
                                            "transform",
                                            "translate3d(0, 0, 0)"
                                        );
                                    }, 100)),
                                    setTimeout(function () {
                                        a.$backdrop.addClass("in"),
                                            a.$container.addClass("lg-show-in");
                                    }, 10),
                                    (a.zoomFromOrigin && n) ||
                                        setTimeout(function () {
                                            a.outer.addClass("lg-visible");
                                        }, a.settings.backdropDuration),
                                    a.slide(t, !1, !1, !1),
                                    a.LGel.trigger("lgAfterOpen");
                            }),
                            document.body === this.settings.container &&
                                E("html").addClass("lg-on"));
                }),
                (e.prototype.getMediaContainerPosition = function () {
                    if (this.settings.allowMediaOverlap)
                        return { top: 0, bottom: 0 };
                    var e = this.$toolbar.get().clientHeight || 0,
                        t = this.outer
                            .find(".lg-components .lg-sub-html")
                            .get(),
                        t =
                            this.settings.defaultCaptionHeight ||
                            (t && t.clientHeight) ||
                            0,
                        i = this.outer.find(".lg-thumb-outer").get();
                    return { top: e, bottom: (i ? i.clientHeight : 0) + t };
                }),
                (e.prototype.setMediaContainerPosition = function (e, t) {
                    void 0 === t && (t = 0),
                        this.$content
                            .css("top", (e = void 0 === e ? 0 : e) + "px")
                            .css("bottom", t + "px");
                }),
                (e.prototype.hideBars = function () {
                    var e = this;
                    setTimeout(function () {
                        e.outer.removeClass("lg-hide-items"),
                            0 < e.settings.hideBarsDelay &&
                                (e.outer.on(
                                    "mousemove.lg click.lg touchstart.lg",
                                    function () {
                                        e.outer.removeClass("lg-hide-items"),
                                            clearTimeout(e.hideBarTimeout),
                                            (e.hideBarTimeout = setTimeout(
                                                function () {
                                                    e.outer.addClass(
                                                        "lg-hide-items"
                                                    );
                                                },
                                                e.settings.hideBarsDelay
                                            ));
                                    }
                                ),
                                e.outer.trigger("mousemove.lg"));
                    }, this.settings.showBarsAfter);
                }),
                (e.prototype.initPictureFill = function (e) {
                    if (this.settings.supportLegacyBrowser)
                        try {
                            picturefill({ elements: [e.get()] });
                        } catch (e) {
                            console.warn(
                                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                            );
                        }
                }),
                (e.prototype.counter = function () {
                    var e;
                    this.settings.counter &&
                        ((e =
                            '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                            this.getIdName("lg-counter-current") +
                            '" class="lg-counter-current">' +
                            (this.index + 1) +
                            ' </span> /\n                <span id="' +
                            this.getIdName("lg-counter-all") +
                            '" class="lg-counter-all">' +
                            this.galleryItems.length +
                            " </span></div>"),
                        this.outer
                            .find(this.settings.appendCounterTo)
                            .append(e));
                }),
                (e.prototype.addHtml = function (e) {
                    var t, i, n;
                    this.galleryItems[e].subHtmlUrl
                        ? (i = this.galleryItems[e].subHtmlUrl)
                        : (t = this.galleryItems[e].subHtml),
                        i ||
                            (t
                                ? ("." !== (n = t.substring(0, 1)) &&
                                      "#" !== n) ||
                                  (t = (
                                      this.settings.subHtmlSelectorRelative &&
                                      !this.settings.dynamic
                                          ? E(this.items).eq(e).find(t)
                                          : E(t)
                                  )
                                      .first()
                                      .html())
                                : (t = "")),
                        ".lg-item" !== this.settings.appendSubHtmlTo
                            ? i
                                ? this.outer.find(".lg-sub-html").load(i)
                                : this.outer.find(".lg-sub-html").html(t)
                            : ((n = E(this.getSlideItemId(e))),
                              i
                                  ? n.load(i)
                                  : n.append(
                                        '<div class="lg-sub-html">' +
                                            t +
                                            "</div>"
                                    )),
                        null != t &&
                            ("" === t
                                ? this.outer
                                      .find(this.settings.appendSubHtmlTo)
                                      .addClass("lg-empty-html")
                                : this.outer
                                      .find(this.settings.appendSubHtmlTo)
                                      .removeClass("lg-empty-html")),
                        this.LGel.trigger("lgAfterAppendSubHtml", { index: e });
                }),
                (e.prototype.preload = function (e) {
                    for (
                        var t = 1;
                        t <= this.settings.preload &&
                        !(t >= this.galleryItems.length - e);
                        t++
                    )
                        this.loadContent(e + t, !1);
                    for (
                        var i = 1;
                        i <= this.settings.preload && !(e - i < 0);
                        i++
                    )
                        this.loadContent(e - i, !1);
                }),
                (e.prototype.getDummyImgStyles = function (e) {
                    return e
                        ? "width:" +
                              e.width +
                              "px;\n                margin-left: -" +
                              e.width / 2 +
                              "px;\n                margin-top: -" +
                              e.height / 2 +
                              "px;\n                height:" +
                              e.height +
                              "px"
                        : "";
                }),
                (e.prototype.getVideoContStyle = function (e) {
                    return e
                        ? "width:" +
                              e.width +
                              "px;\n                height:" +
                              e.height +
                              "px"
                        : "";
                }),
                (e.prototype.getDummyImageContent = function (e, t, i) {
                    if ((n = this.settings.dynamic ? n : E(this.items).eq(t))) {
                        if (
                            !(t = this.settings.exThumbImage
                                ? n.attr(this.settings.exThumbImage)
                                : n.find("img").first().attr("src"))
                        )
                            return "";
                        var n =
                            "<img " +
                            i +
                            ' style="' +
                            this.getDummyImgStyles(this.currentImageSize) +
                            '" class="lg-dummy-img" src="' +
                            t +
                            '" />';
                        return (
                            e.addClass("lg-first-slide"),
                            this.outer.addClass("lg-first-slide-loading"),
                            n
                        );
                    }
                    return "";
                }),
                (e.prototype.setImgMarkup = function (e, t, i) {
                    var n = this.galleryItems[i],
                        s = n.alt,
                        r = n.srcset,
                        o = n.sizes,
                        n = n.sources,
                        s = s ? 'alt="' + s + '"' : "",
                        i =
                            '<picture class="lg-img-wrap"> ' +
                            (this.isFirstSlideWithZoomAnimation()
                                ? this.getDummyImageContent(t, i, s)
                                : T(i, e, s, r, o, n)) +
                            "</picture>";
                    t.prepend(i);
                }),
                (e.prototype.onSlideObjectLoad = function (e, t, i, n) {
                    var s,
                        e = e.find(".lg-object").first();
                    (!!(s = e.get()) && !!s.complete && 0 !== s.naturalWidth) ||
                    t
                        ? i()
                        : (e.on("load.lg error.lg", function () {
                              i && i();
                          }),
                          e.on("error.lg", function () {
                              n && n();
                          }));
                }),
                (e.prototype.onLgObjectLoad = function (e, t, i, n, s, r) {
                    var o = this;
                    this.onSlideObjectLoad(
                        e,
                        r,
                        function () {
                            o.triggerSlideItemLoad(e, t, i, n, s);
                        },
                        function () {
                            e.addClass("lg-complete lg-complete_"),
                                e.html(
                                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                                );
                        }
                    );
                }),
                (e.prototype.triggerSlideItemLoad = function (e, t, i, n, s) {
                    var r = this,
                        o = this.galleryItems[t],
                        o =
                            s && "video" === this.getSlideType(o) && !o.poster
                                ? n
                                : 0;
                    setTimeout(function () {
                        e.addClass("lg-complete lg-complete_"),
                            r.LGel.trigger("lgSlideItemLoad", {
                                index: t,
                                delay: i || 0,
                                isFirstSlide: s,
                            });
                    }, o);
                }),
                (e.prototype.isFirstSlideWithZoomAnimation = function () {
                    return !(
                        this.lGalleryOn ||
                        !this.zoomFromOrigin ||
                        !this.currentImageSize
                    );
                }),
                (e.prototype.addSlideVideoInfo = function (e) {
                    var i = this;
                    e.forEach(function (e, t) {
                        (e.__slideVideoInfo = (function (e, t, i) {
                            if (!e)
                                return t
                                    ? { html5: !0 }
                                    : void console.error(
                                          "lightGallery :- data-src is not provided on slide item " +
                                              (i + 1) +
                                              ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                                      );
                            (t = e.match(
                                /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
                            )),
                                (i = e.match(
                                    /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
                                )),
                                (e = e.match(
                                    /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
                                ));
                            return t
                                ? { youtube: t }
                                : i
                                ? { vimeo: i }
                                : e
                                ? { wistia: e }
                                : void 0;
                        })(e.src, !!e.video, t)),
                            e.__slideVideoInfo &&
                                i.settings.loadYouTubePoster &&
                                !e.poster &&
                                e.__slideVideoInfo.youtube &&
                                (e.poster =
                                    "//img.youtube.com/vi/" +
                                    e.__slideVideoInfo.youtube[1] +
                                    "/maxresdefault.jpg");
                    });
                }),
                (e.prototype.loadContent = function (t, e) {
                    var i,
                        n,
                        s,
                        r,
                        o,
                        a,
                        l = this,
                        d = this.galleryItems[t],
                        c = E(this.getSlideItemId(t)),
                        u = d.poster,
                        p = d.srcset,
                        h = d.sizes,
                        f = d.sources,
                        g = d.src,
                        m = d.video,
                        m = m && "string" == typeof m ? JSON.parse(m) : m,
                        v =
                            (d.responsive &&
                                (g =
                                    (function (e) {
                                        for (
                                            var t = [], i = [], n = "", s = 0;
                                            s < e.length;
                                            s++
                                        ) {
                                            var r = e[s].split(" ");
                                            "" === r[0] && r.splice(0, 1),
                                                i.push(r[0]),
                                                t.push(r[1]);
                                        }
                                        for (
                                            var o = window.innerWidth, a = 0;
                                            a < t.length;
                                            a++
                                        )
                                            if (parseInt(t[a], 10) > o) {
                                                n = i[a];
                                                break;
                                            }
                                        return n;
                                    })(d.responsive.split(",")) || g),
                            d.__slideVideoInfo),
                        y = "",
                        b = !!d.iframe,
                        w = !this.lGalleryOn,
                        x = 0,
                        C =
                            (w &&
                                (x =
                                    this.zoomFromOrigin && this.currentImageSize
                                        ? this.settings.startAnimationDuration +
                                          10
                                        : this.settings.backdropDuration + 10),
                            c.hasClass("lg-loaded") ||
                                (v &&
                                    ((s = (n = this.mediaContainerPosition)
                                        .top),
                                    (n = n.bottom),
                                    (s = S(
                                        this.items[t],
                                        this.outer,
                                        s + n,
                                        v && this.settings.videoMaxSize
                                    )),
                                    (y = this.getVideoContStyle(s))),
                                b
                                    ? ((n = this.settings.iframeWidth),
                                      (s = this.settings.iframeHeight),
                                      (b = this.settings.iframeMaxWidth),
                                      (r = this.settings.iframeMaxHeight),
                                      (o = g),
                                      (a = d.iframeTitle),
                                      c.prepend(
                                          (r =
                                              '<div class="lg-video-cont lg-has-iframe" style="width:' +
                                              n +
                                              "; max-width:" +
                                              b +
                                              "; height: " +
                                              s +
                                              "; max-height:" +
                                              r +
                                              '">\n                    <iframe class="lg-object" frameborder="0" ' +
                                              (a ? 'title="' + a + '"' : "") +
                                              ' src="' +
                                              o +
                                              '"  allowfullscreen="true"></iframe>\n                </div>')
                                      ))
                                    : u
                                    ? ((b = ""),
                                      w &&
                                          this.zoomFromOrigin &&
                                          this.currentImageSize &&
                                          (b = this.getDummyImageContent(
                                              c,
                                              t,
                                              ""
                                          )),
                                      (a = b || ""),
                                      (o = y),
                                      (b = this.settings.strings.playVideo),
                                      (r =
                                          '<div class="lg-video-cont ' +
                                          ((i = v) && i.youtube
                                              ? "lg-has-youtube"
                                              : i && i.vimeo
                                              ? "lg-has-vimeo"
                                              : "lg-has-html5") +
                                          '" style="' +
                                          o +
                                          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
                                          b +
                                          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
                                          b +
                                          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
                                          (a || "") +
                                          '\n            <img class="lg-object lg-video-poster" src="' +
                                          u +
                                          '" />\n        </div>'),
                                      c.prepend(r))
                                    : v
                                    ? c.prepend(
                                          (r =
                                              '<div class="lg-video-cont " style="' +
                                              y +
                                              '"></div>')
                                      )
                                    : (this.setImgMarkup(g, c, t),
                                      (p || f) &&
                                          ((i = c.find(".lg-object")),
                                          this.initPictureFill(i))),
                                (u || v) &&
                                    this.LGel.trigger("lgHasVideo", {
                                        index: t,
                                        src: g,
                                        html5Video: m,
                                        hasPoster: !!u,
                                    }),
                                this.LGel.trigger("lgAfterAppendSlide", {
                                    index: t,
                                }),
                                this.lGalleryOn &&
                                    ".lg-item" ===
                                        this.settings.appendSubHtmlTo &&
                                    this.addHtml(t)),
                            0);
                    x && !E(document.body).hasClass("lg-from-hash") && (C = x),
                        this.isFirstSlideWithZoomAnimation() &&
                            (setTimeout(function () {
                                c.removeClass(
                                    "lg-start-end-progress lg-start-progress"
                                ).removeAttr("style");
                            }, this.settings.startAnimationDuration + 100),
                            c.hasClass("lg-loaded") ||
                                setTimeout(function () {
                                    var e;
                                    "image" === l.getSlideType(d) &&
                                        (c
                                            .find(".lg-img-wrap")
                                            .append(
                                                T(t, g, "", p, h, d.sources)
                                            ),
                                        p || f) &&
                                        ((e = c.find(".lg-object")),
                                        l.initPictureFill(e)),
                                        ("image" === l.getSlideType(d) ||
                                            ("video" === l.getSlideType(d) &&
                                                u)) &&
                                            (l.onLgObjectLoad(
                                                c,
                                                t,
                                                x,
                                                C,
                                                !0,
                                                !1
                                            ),
                                            l.onSlideObjectLoad(
                                                c,
                                                !(!v || !v.html5 || u),
                                                function () {
                                                    l.loadContentOnFirstSlideLoad(
                                                        t,
                                                        c,
                                                        C
                                                    );
                                                },
                                                function () {
                                                    l.loadContentOnFirstSlideLoad(
                                                        t,
                                                        c,
                                                        C
                                                    );
                                                }
                                            ));
                                }, this.settings.startAnimationDuration + 100)),
                        c.addClass("lg-loaded"),
                        (this.isFirstSlideWithZoomAnimation() &&
                            ("video" !== this.getSlideType(d) || u)) ||
                            this.onLgObjectLoad(
                                c,
                                t,
                                x,
                                C,
                                w,
                                !(!v || !v.html5 || u)
                            ),
                        (this.zoomFromOrigin && this.currentImageSize) ||
                            !c.hasClass("lg-complete_") ||
                            this.lGalleryOn ||
                            setTimeout(function () {
                                c.addClass("lg-complete");
                            }, this.settings.backdropDuration),
                        (this.lGalleryOn = !0) === e &&
                            (c.hasClass("lg-complete_")
                                ? this.preload(t)
                                : c
                                      .find(".lg-object")
                                      .first()
                                      .on("load.lg error.lg", function () {
                                          l.preload(t);
                                      }));
                }),
                (e.prototype.loadContentOnFirstSlideLoad = function (e, t, i) {
                    var n = this;
                    setTimeout(function () {
                        t.find(".lg-dummy-img").remove(),
                            t.removeClass("lg-first-slide"),
                            n.outer.removeClass("lg-first-slide-loading"),
                            (n.isDummyImageRemoved = !0),
                            n.preload(e);
                    }, i + 300);
                }),
                (e.prototype.getItemsToBeInsertedToDom = function (e, t, i) {
                    var n = this,
                        s = (void 0 === i && (i = 0), []),
                        r = Math.max(i, 3),
                        r = Math.min(r, this.galleryItems.length),
                        i = "lg-item-" + this.lgId + "-" + t;
                    if (this.galleryItems.length <= 3)
                        return (
                            this.galleryItems.forEach(function (e, t) {
                                s.push("lg-item-" + n.lgId + "-" + t);
                            }),
                            s
                        );
                    if (e < (this.galleryItems.length - 1) / 2) {
                        for (var o = e; e - r / 2 < o && 0 <= o; o--)
                            s.push("lg-item-" + this.lgId + "-" + o);
                        for (var a = s.length, o = 0; o < r - a; o++)
                            s.push("lg-item-" + this.lgId + "-" + (e + o + 1));
                    } else {
                        for (
                            o = e;
                            o <= this.galleryItems.length - 1 && o < e + r / 2;
                            o++
                        )
                            s.push("lg-item-" + this.lgId + "-" + o);
                        for (a = s.length, o = 0; o < r - a; o++)
                            s.push("lg-item-" + this.lgId + "-" + (e - o - 1));
                    }
                    return (
                        this.settings.loop &&
                            (e === this.galleryItems.length - 1
                                ? s.push("lg-item-" + this.lgId + "-0")
                                : 0 === e &&
                                  s.push(
                                      "lg-item-" +
                                          this.lgId +
                                          "-" +
                                          (this.galleryItems.length - 1)
                                  )),
                        -1 === s.indexOf(i) &&
                            s.push("lg-item-" + this.lgId + "-" + t),
                        s
                    );
                }),
                (e.prototype.organizeSlideItems = function (e, t) {
                    var i = this,
                        n = this.getItemsToBeInsertedToDom(
                            e,
                            t,
                            this.settings.numberOfSlideItemsInDom
                        );
                    return (
                        n.forEach(function (e) {
                            -1 === i.currentItemsInDom.indexOf(e) &&
                                i.$inner.append(
                                    '<div id="' + e + '" class="lg-item"></div>'
                                );
                        }),
                        this.currentItemsInDom.forEach(function (e) {
                            -1 === n.indexOf(e) && E("#" + e).remove();
                        }),
                        n
                    );
                }),
                (e.prototype.getPreviousSlideIndex = function () {
                    var e = 0;
                    try {
                        var t = this.outer
                                .find(".lg-current")
                                .first()
                                .attr("id"),
                            e = parseInt(t.split("-")[3]) || 0;
                    } catch (t) {
                        e = 0;
                    }
                    return e;
                }),
                (e.prototype.setDownloadValue = function (e) {
                    var t;
                    this.settings.download &&
                        (!1 === (e = this.galleryItems[e]).downloadUrl ||
                        "false" === e.downloadUrl
                            ? this.outer.addClass("lg-hide-download")
                            : ((t = this.getElementById("lg-download")),
                              this.outer.removeClass("lg-hide-download"),
                              t.attr("href", e.downloadUrl || e.src),
                              e.download && t.attr("download", e.download)));
                }),
                (e.prototype.makeSlideAnimation = function (e, t, i) {
                    var n = this;
                    this.lGalleryOn && i.addClass("lg-slide-progress"),
                        setTimeout(
                            function () {
                                n.outer.addClass("lg-no-trans"),
                                    n.outer
                                        .find(".lg-item")
                                        .removeClass(
                                            "lg-prev-slide lg-next-slide"
                                        ),
                                    "prev" === e
                                        ? (t.addClass("lg-prev-slide"),
                                          i.addClass("lg-next-slide"))
                                        : (t.addClass("lg-next-slide"),
                                          i.addClass("lg-prev-slide")),
                                    setTimeout(function () {
                                        n.outer
                                            .find(".lg-item")
                                            .removeClass("lg-current"),
                                            t.addClass("lg-current"),
                                            n.outer.removeClass("lg-no-trans");
                                    }, 50);
                            },
                            this.lGalleryOn ? this.settings.slideDelay : 0
                        );
                }),
                (e.prototype.slide = function (e, t, i, n) {
                    var s,
                        r,
                        o,
                        a,
                        l,
                        d,
                        c = this,
                        u = this.getPreviousSlideIndex();
                    (this.currentItemsInDom = this.organizeSlideItems(e, u)),
                        (this.lGalleryOn && u === e) ||
                            ((s = this.galleryItems.length),
                            this.lgBusy ||
                                (this.settings.counter &&
                                    this.updateCurrentCounter(e),
                                (r = this.getSlideItem(e)),
                                (o = this.getSlideItem(u)),
                                (d = (l = this.galleryItems[e])
                                    .__slideVideoInfo),
                                this.outer.attr(
                                    "data-lg-slide-type",
                                    this.getSlideType(l)
                                ),
                                this.setDownloadValue(e),
                                d &&
                                    ((a = (l = this.mediaContainerPosition)
                                        .top),
                                    (l = l.bottom),
                                    (a = S(
                                        this.items[e],
                                        this.outer,
                                        a + l,
                                        d && this.settings.videoMaxSize
                                    )),
                                    this.resizeVideoSlide(e, a)),
                                this.LGel.trigger("lgBeforeSlide", {
                                    prevIndex: u,
                                    index: e,
                                    fromTouch: !!t,
                                    fromThumb: !!i,
                                }),
                                (this.lgBusy = !0),
                                clearTimeout(this.hideBarTimeout),
                                this.arrowDisable(e),
                                n ||
                                    (e < u
                                        ? (n = "prev")
                                        : u < e && (n = "next")),
                                t
                                    ? (this.outer
                                          .find(".lg-item")
                                          .removeClass(
                                              "lg-prev-slide lg-current lg-next-slide"
                                          ),
                                      (d = l = void 0),
                                      2 < s
                                          ? ((l = e - 1),
                                            (d = e + 1),
                                            ((0 === e && u === s - 1) ||
                                                (e === s - 1 && 0 === u)) &&
                                                ((d = 0), (l = s - 1)))
                                          : ((l = 0), (d = 1)),
                                      "prev" === n
                                          ? this.getSlideItem(d).addClass(
                                                "lg-next-slide"
                                            )
                                          : this.getSlideItem(l).addClass(
                                                "lg-prev-slide"
                                            ),
                                      r.addClass("lg-current"))
                                    : this.makeSlideAnimation(n, r, o),
                                this.lGalleryOn
                                    ? setTimeout(function () {
                                          c.loadContent(e, !0),
                                              ".lg-item" !==
                                                  c.settings.appendSubHtmlTo &&
                                                  c.addHtml(e);
                                      }, this.settings.speed +
                                          50 +
                                          (t ? 0 : this.settings.slideDelay))
                                    : this.loadContent(e, !0),
                                setTimeout(function () {
                                    (c.lgBusy = !1),
                                        o.removeClass("lg-slide-progress"),
                                        c.LGel.trigger("lgAfterSlide", {
                                            prevIndex: u,
                                            index: e,
                                            fromTouch: t,
                                            fromThumb: i,
                                        });
                                }, (this.lGalleryOn
                                    ? this.settings.speed + 100
                                    : 100) +
                                    (t ? 0 : this.settings.slideDelay))),
                            (this.index = e));
                }),
                (e.prototype.updateCurrentCounter = function (e) {
                    this.getElementById("lg-counter-current").html(e + 1 + "");
                }),
                (e.prototype.updateCounterTotal = function () {
                    this.getElementById("lg-counter-all").html(
                        this.galleryItems.length + ""
                    );
                }),
                (e.prototype.getSlideType = function (e) {
                    return e.__slideVideoInfo
                        ? "video"
                        : e.iframe
                        ? "iframe"
                        : "image";
                }),
                (e.prototype.touchMove = function (e, t, i) {
                    var n,
                        s,
                        r = t.pageX - e.pageX,
                        t = t.pageY - e.pageY,
                        e = !1;
                    this.swipeDirection
                        ? (e = !0)
                        : 15 < Math.abs(r)
                        ? ((this.swipeDirection = "horizontal"), (e = !0))
                        : 15 < Math.abs(t) &&
                          ((this.swipeDirection = "vertical"), (e = !0)),
                        e &&
                            ((e = this.getSlideItem(this.index)),
                            "horizontal" === this.swipeDirection
                                ? (null != i && i.preventDefault(),
                                  this.outer.addClass("lg-dragging"),
                                  this.setTranslate(e, r, 0),
                                  (n =
                                      (15 * (s = e.get().offsetWidth)) / 100 -
                                      Math.abs((10 * r) / 100)),
                                  this.setTranslate(
                                      this.outer.find(".lg-prev-slide").first(),
                                      r - s - n,
                                      0
                                  ),
                                  this.setTranslate(
                                      this.outer.find(".lg-next-slide").first(),
                                      s + r + n,
                                      0
                                  ))
                                : "vertical" === this.swipeDirection &&
                                  this.settings.swipeToClose &&
                                  (null != i && i.preventDefault(),
                                  this.$container.addClass(
                                      "lg-dragging-vertical"
                                  ),
                                  (s = 1 - Math.abs(t) / window.innerHeight),
                                  this.$backdrop.css("opacity", s),
                                  (r =
                                      1 -
                                      Math.abs(t) / (2 * window.innerWidth)),
                                  this.setTranslate(e, 0, t, r, r),
                                  100 < Math.abs(t) &&
                                      this.outer
                                          .addClass("lg-hide-items")
                                          .removeClass("lg-components-open")));
                }),
                (e.prototype.touchEnd = function (i, n, s) {
                    var r,
                        o = this;
                    "lg-slide" !== this.settings.mode &&
                        this.outer.addClass("lg-slide"),
                        setTimeout(function () {
                            o.$container.removeClass("lg-dragging-vertical"),
                                o.outer
                                    .removeClass("lg-dragging lg-hide-items")
                                    .addClass("lg-components-open");
                            var e = !0;
                            if ("horizontal" === o.swipeDirection) {
                                r = i.pageX - n.pageX;
                                var t = Math.abs(i.pageX - n.pageX);
                                r < 0 && t > o.settings.swipeThreshold
                                    ? (o.goToNextSlide(!0), (e = !1))
                                    : 0 < r &&
                                      t > o.settings.swipeThreshold &&
                                      (o.goToPrevSlide(!0), (e = !1));
                            } else if ("vertical" === o.swipeDirection) {
                                if (
                                    ((r = Math.abs(i.pageY - n.pageY)),
                                    o.settings.closable &&
                                        o.settings.swipeToClose &&
                                        100 < r)
                                )
                                    return void o.closeGallery();
                                o.$backdrop.css("opacity", 1);
                            }
                            o.outer.find(".lg-item").removeAttr("style"),
                                e &&
                                    Math.abs(i.pageX - n.pageX) < 5 &&
                                    ((t = E(s.target)),
                                    o.isPosterElement(t) && o.LGel.trigger(a)),
                                (o.swipeDirection = void 0);
                        }),
                        setTimeout(function () {
                            o.outer.hasClass("lg-dragging") ||
                                "lg-slide" === o.settings.mode ||
                                o.outer.removeClass("lg-slide");
                        }, this.settings.speed + 100);
                }),
                (e.prototype.enableSwipe = function () {
                    var i = this,
                        n = {},
                        t = {},
                        s = !1,
                        r = !1;
                    this.settings.enableSwipe &&
                        (this.$inner.on("touchstart.lg", function (e) {
                            i.dragOrSwipeEnabled = !0;
                            var t = i.getSlideItem(i.index);
                            (!E(e.target).hasClass("lg-item") &&
                                !t.get().contains(e.target)) ||
                                i.outer.hasClass("lg-zoomed") ||
                                i.lgBusy ||
                                1 !== e.targetTouches.length ||
                                ((r = !0),
                                (i.touchAction = "swipe"),
                                i.manageSwipeClass(),
                                (n = {
                                    pageX: e.targetTouches[0].pageX,
                                    pageY: e.targetTouches[0].pageY,
                                }));
                        }),
                        this.$inner.on("touchmove.lg", function (e) {
                            r &&
                                "swipe" === i.touchAction &&
                                1 === e.targetTouches.length &&
                                ((t = {
                                    pageX: e.targetTouches[0].pageX,
                                    pageY: e.targetTouches[0].pageY,
                                }),
                                i.touchMove(n, t, e),
                                (s = !0));
                        }),
                        this.$inner.on("touchend.lg", function (e) {
                            "swipe" === i.touchAction &&
                                (s
                                    ? ((s = !1), i.touchEnd(t, n, e))
                                    : r &&
                                      ((e = E(e.target)),
                                      i.isPosterElement(e) &&
                                          i.LGel.trigger(a)),
                                (i.touchAction = void 0),
                                (r = !1));
                        }));
                }),
                (e.prototype.enableDrag = function () {
                    var i = this,
                        n = {},
                        s = {},
                        r = !1,
                        o = !1;
                    this.settings.enableDrag &&
                        (this.outer.on("mousedown.lg", function (e) {
                            i.dragOrSwipeEnabled = !0;
                            var t = i.getSlideItem(i.index);
                            (!E(e.target).hasClass("lg-item") &&
                                !t.get().contains(e.target)) ||
                                i.outer.hasClass("lg-zoomed") ||
                                i.lgBusy ||
                                (e.preventDefault(),
                                i.lgBusy ||
                                    (i.manageSwipeClass(),
                                    (n = { pageX: e.pageX, pageY: e.pageY }),
                                    (r = !0),
                                    (i.outer.get().scrollLeft += 1),
                                    --i.outer.get().scrollLeft,
                                    i.outer
                                        .removeClass("lg-grab")
                                        .addClass("lg-grabbing"),
                                    i.LGel.trigger("lgDragStart")));
                        }),
                        E(window).on(
                            "mousemove.lg.global" + this.lgId,
                            function (e) {
                                r &&
                                    i.lgOpened &&
                                    ((o = !0),
                                    (s = { pageX: e.pageX, pageY: e.pageY }),
                                    i.touchMove(n, s),
                                    i.LGel.trigger("lgDragMove"));
                            }
                        ),
                        E(window).on(
                            "mouseup.lg.global" + this.lgId,
                            function (e) {
                                var t;
                                i.lgOpened &&
                                    ((t = E(e.target)),
                                    o
                                        ? ((o = !1),
                                          i.touchEnd(s, n, e),
                                          i.LGel.trigger("lgDragEnd"))
                                        : i.isPosterElement(t) &&
                                          i.LGel.trigger(a),
                                    r &&
                                        ((r = !1),
                                        i.outer
                                            .removeClass("lg-grabbing")
                                            .addClass("lg-grab")));
                            }
                        ));
                }),
                (e.prototype.triggerPosterClick = function () {
                    var t = this;
                    this.$inner.on("click.lg", function (e) {
                        !t.dragOrSwipeEnabled &&
                            t.isPosterElement(E(e.target)) &&
                            t.LGel.trigger(a);
                    });
                }),
                (e.prototype.manageSwipeClass = function () {
                    var e = this.index + 1,
                        t = this.index - 1;
                    this.settings.loop &&
                        2 < this.galleryItems.length &&
                        (0 === this.index
                            ? (t = this.galleryItems.length - 1)
                            : this.index === this.galleryItems.length - 1 &&
                              (e = 0)),
                        this.outer
                            .find(".lg-item")
                            .removeClass("lg-next-slide lg-prev-slide"),
                        -1 < t &&
                            this.getSlideItem(t).addClass("lg-prev-slide"),
                        this.getSlideItem(e).addClass("lg-next-slide");
                }),
                (e.prototype.goToNextSlide = function (e) {
                    var t = this,
                        i = this.settings.loop;
                    e && this.galleryItems.length < 3 && (i = !1),
                        this.lgBusy ||
                            (this.index + 1 < this.galleryItems.length
                                ? (this.index++,
                                  this.LGel.trigger(n, { index: this.index }),
                                  this.slide(this.index, !!e, !1, "next"))
                                : i
                                ? ((this.index = 0),
                                  this.LGel.trigger(n, { index: this.index }),
                                  this.slide(this.index, !!e, !1, "next"))
                                : this.settings.slideEndAnimation &&
                                  !e &&
                                  (this.outer.addClass("lg-right-end"),
                                  setTimeout(function () {
                                      t.outer.removeClass("lg-right-end");
                                  }, 400)));
                }),
                (e.prototype.goToPrevSlide = function (e) {
                    var t = this,
                        i = this.settings.loop;
                    e && this.galleryItems.length < 3 && (i = !1),
                        this.lgBusy ||
                            (0 < this.index
                                ? (this.index--,
                                  this.LGel.trigger(r, {
                                      index: this.index,
                                      fromTouch: e,
                                  }),
                                  this.slide(this.index, !!e, !1, "prev"))
                                : i
                                ? ((this.index = this.galleryItems.length - 1),
                                  this.LGel.trigger(r, {
                                      index: this.index,
                                      fromTouch: e,
                                  }),
                                  this.slide(this.index, !!e, !1, "prev"))
                                : this.settings.slideEndAnimation &&
                                  !e &&
                                  (this.outer.addClass("lg-left-end"),
                                  setTimeout(function () {
                                      t.outer.removeClass("lg-left-end");
                                  }, 400)));
                }),
                (e.prototype.keyPress = function () {
                    var t = this;
                    E(window).on("keydown.lg.global" + this.lgId, function (e) {
                        t.lgOpened &&
                            !0 === t.settings.escKey &&
                            27 === e.keyCode &&
                            (e.preventDefault(),
                            t.settings.allowMediaOverlap &&
                            t.outer.hasClass("lg-can-toggle") &&
                            t.outer.hasClass("lg-components-open")
                                ? t.outer.removeClass("lg-components-open")
                                : t.closeGallery()),
                            t.lgOpened &&
                                1 < t.galleryItems.length &&
                                (37 === e.keyCode &&
                                    (e.preventDefault(), t.goToPrevSlide()),
                                39 === e.keyCode &&
                                    (e.preventDefault(), t.goToNextSlide()));
                    });
                }),
                (e.prototype.arrow = function () {
                    var e = this;
                    this.getElementById("lg-prev").on("click.lg", function () {
                        e.goToPrevSlide();
                    }),
                        this.getElementById("lg-next").on(
                            "click.lg",
                            function () {
                                e.goToNextSlide();
                            }
                        );
                }),
                (e.prototype.arrowDisable = function (e) {
                    var t, i;
                    !this.settings.loop &&
                        this.settings.hideControlOnEnd &&
                        ((t = this.getElementById("lg-prev")),
                        (i = this.getElementById("lg-next")),
                        e + 1 === this.galleryItems.length
                            ? i
                                  .attr("disabled", "disabled")
                                  .addClass("disabled")
                            : i.removeAttr("disabled").removeClass("disabled"),
                        0 === e
                            ? t
                                  .attr("disabled", "disabled")
                                  .addClass("disabled")
                            : t.removeAttr("disabled").removeClass("disabled"));
                }),
                (e.prototype.setTranslate = function (e, t, i, n, s) {
                    e.css(
                        "transform",
                        "translate3d(" +
                            t +
                            "px, " +
                            i +
                            "px, 0px) scale3d(" +
                            (n = void 0 === n ? 1 : n) +
                            ", " +
                            (s = void 0 === s ? 1 : s) +
                            ", 1)"
                    );
                }),
                (e.prototype.mousewheel = function () {
                    var i = this,
                        n = 0;
                    this.outer.on("wheel.lg", function (e) {
                        var t;
                        !e.deltaY ||
                            i.galleryItems.length < 2 ||
                            (e.preventDefault(),
                            (t = new Date().getTime()) - n < 1e3 ||
                                ((n = t),
                                0 < e.deltaY
                                    ? i.goToNextSlide()
                                    : e.deltaY < 0 && i.goToPrevSlide()));
                    });
                }),
                (e.prototype.isSlideElement = function (e) {
                    return (
                        e.hasClass("lg-outer") ||
                        e.hasClass("lg-item") ||
                        e.hasClass("lg-img-wrap")
                    );
                }),
                (e.prototype.isPosterElement = function (e) {
                    var t = this.getSlideItem(this.index)
                        .find(".lg-video-play-button")
                        .get();
                    return (
                        e.hasClass("lg-video-poster") ||
                        e.hasClass("lg-video-play-button") ||
                        (t && t.contains(e.get()))
                    );
                }),
                (e.prototype.toggleMaximize = function () {
                    var e = this;
                    this.getElementById("lg-maximize").on(
                        "click.lg",
                        function () {
                            e.$container.toggleClass("lg-inline"),
                                e.refreshOnResize();
                        }
                    );
                }),
                (e.prototype.invalidateItems = function () {
                    for (var e = 0; e < this.items.length; e++) {
                        var t = E(this.items[e]);
                        t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
                    }
                }),
                (e.prototype.manageCloseGallery = function () {
                    var t,
                        i = this;
                    this.settings.closable &&
                        ((t = !1),
                        this.getElementById("lg-close").on(
                            "click.lg",
                            function () {
                                i.closeGallery();
                            }
                        ),
                        this.settings.closeOnTap &&
                            (this.outer.on("mousedown.lg", function (e) {
                                e = E(e.target);
                                t = !!i.isSlideElement(e);
                            }),
                            this.outer.on("mousemove.lg", function () {
                                t = !1;
                            }),
                            this.outer.on("mouseup.lg", function (e) {
                                e = E(e.target);
                                i.isSlideElement(e) &&
                                    t &&
                                    (i.outer.hasClass("lg-dragging") ||
                                        i.closeGallery());
                            })));
                }),
                (e.prototype.closeGallery = function (e) {
                    var t = this;
                    if (!this.lgOpened || (!this.settings.closable && !e))
                        return 0;
                    this.LGel.trigger("lgBeforeClose"),
                        E(window).scrollTop(this.prevScrollTop);
                    var i,
                        n,
                        s,
                        r,
                        e = this.items[this.index],
                        o =
                            (this.zoomFromOrigin &&
                                e &&
                                ((i = (n = this.mediaContainerPosition).top),
                                (n = n.bottom),
                                (s = (o = this.galleryItems[this.index])
                                    .__slideVideoInfo),
                                (o = o.poster),
                                (s = S(
                                    e,
                                    this.outer,
                                    i + n,
                                    s && o && this.settings.videoMaxSize
                                )),
                                (r = d(e, this.outer, i, n, s))),
                            this.zoomFromOrigin && r
                                ? (this.outer.addClass(
                                      "lg-closing lg-zoom-from-image"
                                  ),
                                  this.getSlideItem(this.index)
                                      .addClass("lg-start-end-progress")
                                      .css(
                                          "transition-duration",
                                          this.settings.startAnimationDuration +
                                              "ms"
                                      )
                                      .css("transform", r))
                                : (this.outer.addClass("lg-hide-items"),
                                  this.outer.removeClass("lg-zoom-from-image")),
                            this.destroyModules(),
                            (this.lGalleryOn = !1),
                            (this.isDummyImageRemoved = !1),
                            (this.zoomFromOrigin =
                                this.settings.zoomFromOrigin),
                            clearTimeout(this.hideBarTimeout),
                            (this.hideBarTimeout = !1),
                            E("html").removeClass("lg-on"),
                            this.outer.removeClass(
                                "lg-visible lg-components-open"
                            ),
                            this.$backdrop.removeClass("in").css("opacity", 0),
                            this.zoomFromOrigin && r
                                ? Math.max(
                                      this.settings.startAnimationDuration,
                                      this.settings.backdropDuration
                                  )
                                : this.settings.backdropDuration);
                    return (
                        this.$container.removeClass("lg-show-in"),
                        setTimeout(function () {
                            t.zoomFromOrigin &&
                                r &&
                                t.outer.removeClass("lg-zoom-from-image"),
                                t.$container.removeClass("lg-show"),
                                t.$backdrop
                                    .removeAttr("style")
                                    .css(
                                        "transition-duration",
                                        t.settings.backdropDuration + "ms"
                                    ),
                                t.outer.removeClass(
                                    "lg-closing " + t.settings.startClass
                                ),
                                t
                                    .getSlideItem(t.index)
                                    .removeClass("lg-start-end-progress"),
                                t.$inner.empty(),
                                t.lgOpened &&
                                    t.LGel.trigger("lgAfterClose", {
                                        instance: t,
                                    }),
                                t.outer.get() && t.outer.get().blur(),
                                (t.lgOpened = !1);
                        }, o + 100),
                        o + 100
                    );
                }),
                (e.prototype.initModules = function () {
                    this.plugins.forEach(function (e) {
                        try {
                            e.init();
                        } catch (e) {
                            console.warn(
                                "lightGallery:- make sure lightGallery module is properly initiated"
                            );
                        }
                    });
                }),
                (e.prototype.destroyModules = function (t) {
                    this.plugins.forEach(function (e) {
                        try {
                            t
                                ? e.destroy()
                                : e.closeGallery && e.closeGallery();
                        } catch (e) {
                            console.warn(
                                "lightGallery:- make sure lightGallery module is properly destroyed"
                            );
                        }
                    });
                }),
                (e.prototype.refresh = function (e) {
                    this.settings.dynamic || this.invalidateItems(),
                        (this.galleryItems = e || this.getItems()),
                        this.updateControls(),
                        this.openGalleryOnItemClick(),
                        this.LGel.trigger(s);
                }),
                (e.prototype.updateControls = function () {
                    this.addSlideVideoInfo(this.galleryItems),
                        this.updateCounterTotal(),
                        this.manageSingleSlideClassName();
                }),
                (e.prototype.destroy = function () {
                    var e = this,
                        t = this.closeGallery(!0);
                    return (
                        setTimeout(function () {
                            e.destroyModules(!0),
                                e.settings.dynamic || e.invalidateItems(),
                                E(window).off(".lg.global" + e.lgId),
                                e.LGel.off(".lg"),
                                e.$container.remove();
                        }, t),
                        t
                    );
                }),
                e);
        function e(e, t) {
            if (
                ((this.lgOpened = !1),
                (this.index = 0),
                (this.plugins = []),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.currentItemsInDom = []),
                (this.prevScrollTop = 0),
                (this.isDummyImageRemoved = !1),
                (this.dragOrSwipeEnabled = !1),
                (this.mediaContainerPosition = { top: 0, bottom: 0 }),
                !e)
            )
                return this;
            if (
                (u++,
                (this.lgId = u),
                (this.el = e),
                (this.LGel = E(e)),
                this.generateSettings(t),
                this.buildModules(),
                this.settings.dynamic &&
                    void 0 !== this.settings.dynamicEl &&
                    !Array.isArray(this.settings.dynamicEl))
            )
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
                (this.galleryItems = this.getItems()),
                this.normalizeSettings(),
                this.init(),
                this.validateLicense(),
                this
            );
        }
        return function (e, t) {
            return new p(e, t);
        };
    }),
    $(document).ready(function () {
        sliderHome(),
            galleryLight(),
            parallax(),
            handleFixedMenu(),
            handleScrollMenu(),
            handleBackToTop(),
            onChangeLanguage(),
            handleMenuMobile(),
            handlePopupModal();
        let e = document.querySelector(".loading"),
            t = document.querySelector(".modal"),
            i = document.querySelector("nav"),
            n = document.querySelector(".lang__list"),
            s = document.querySelector(".wrapper");
        showSliderDrag(),
            $(".main").imagesLoaded({ background: !0 }, function () {
                s.classList.remove("--opacity"),
                    e.classList.remove("--show"),
                    t.classList.remove("--hidden"),
                    i.classList.remove("--hidden"),
                    n.classList.remove("--hidden");
            });
    }),
    (function (r) {
        function o(e, t) {
            var i =
                t.offset +
                (e.offset().top - r(window).scrollTop()) * (1 - t.speed);
            e.data("pos_y", i),
                e.css("background-position", t.pos_x + " " + i + "px");
        }
        r.fn.parallaxie = function (s) {
            return (
                (s = r.extend(
                    {
                        speed: 0.2,
                        repeat: "no-repeat",
                        size: "cover",
                        pos_x: "center",
                        offset: 0,
                    },
                    s
                )),
                this.each(function () {
                    var e,
                        t,
                        i = r(this),
                        n = i.data("parallaxie");
                    "object" != typeof n && (n = {}),
                        (n = r.extend({}, s, n)),
                        void 0 === i.data("image") &&
                            (t = i.css("background-image")) &&
                            ((e =
                                n.offset +
                                (i.offset().top - r(window).scrollTop()) *
                                    (1 - n.speed)),
                            i.css({
                                "background-image": t,
                                "background-size": n.size,
                                "background-repeat": n.repeat,
                                "background-attachment": "fixed",
                                "background-position": n.pos_x + " " + e + "px",
                            }),
                            o(i, n),
                            r(window).scroll(function () {
                                o(i, n);
                            }));
                }),
                this
            );
        };
    })(jQuery),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function n(e) {
            return (
                null !== e &&
                "object" == typeof e &&
                "constructor" in e &&
                e.constructor === Object
            );
        }
        function s(t, i) {
            void 0 === t && (t = {}),
                void 0 === i && (i = {}),
                Object.keys(i).forEach((e) => {
                    void 0 === t[e]
                        ? (t[e] = i[e])
                        : n(i[e]) &&
                          n(t[e]) &&
                          0 < Object.keys(i[e]).length &&
                          s(t[e], i[e]);
                });
        }
        const t = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: { blur() {}, nodeName: "" },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({ initEvent() {} }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => [],
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
        };
        function E() {
            var e = "undefined" != typeof document ? document : {};
            return s(e, t), e;
        }
        const N = {
            document: t,
            navigator: { userAgent: "" },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
            history: { replaceState() {}, pushState() {}, go() {}, back() {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({ getPropertyValue: () => "" }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: (e) =>
                "undefined" == typeof setTimeout
                    ? (e(), null)
                    : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function L() {
            var e = "undefined" != typeof window ? window : {};
            return s(e, N), e;
        }
        class o extends Array {
            constructor(e) {
                if ("number" != typeof e) {
                    super(...(e || []));
                    {
                        var t = this;
                        const i = t.__proto__;
                        void Object.defineProperty(t, "__proto__", {
                            get: () => i,
                            set(e) {
                                i.__proto__ = e;
                            },
                        });
                    }
                } else super(e);
            }
        }
        function r(e) {
            const t = [];
            return (
                (e = void 0 === e ? [] : e).forEach((e) => {
                    Array.isArray(e) ? t.push(...r(e)) : t.push(e);
                }),
                t
            );
        }
        function a(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function A(e, t) {
            const i = L(),
                n = E();
            let s = [];
            if (!t && e instanceof o) return e;
            if (!e) return new o(s);
            if ("string" == typeof e) {
                const i = e.trim();
                if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                    let e = "div";
                    0 === i.indexOf("<li") && (e = "ul"),
                        0 === i.indexOf("<tr") && (e = "tbody"),
                        (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) ||
                            (e = "tr"),
                        0 === i.indexOf("<tbody") && (e = "table"),
                        0 === i.indexOf("<option") && (e = "select");
                    const t = n.createElement(e);
                    t.innerHTML = i;
                    for (let e = 0; e < t.childNodes.length; e += 1)
                        s.push(t.childNodes[e]);
                } else
                    s = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        const i = [],
                            n = t.querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) i.push(n[e]);
                        return i;
                    })(e.trim(), t || n);
            } else if (e.nodeType || e === i || e === n) s.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof o) return e;
                s = e;
            }
            return new o(
                (function (t) {
                    const i = [];
                    for (let e = 0; e < t.length; e += 1)
                        -1 === i.indexOf(t[e]) && i.push(t[e]);
                    return i;
                })(s)
            );
        }
        A.fn = o.prototype;
        const i = {
            addClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                )
                    t[i] = arguments[i];
                const n = r(t.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.add(...n);
                    }),
                    this
                );
            },
            removeClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                )
                    t[i] = arguments[i];
                const n = r(t.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.remove(...n);
                    }),
                    this
                );
            },
            hasClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                )
                    t[i] = arguments[i];
                const n = r(t.map((e) => e.split(" ")));
                return (
                    0 <
                    a(
                        this,
                        (t) =>
                            0 < n.filter((e) => t.classList.contains(e)).length
                    ).length
                );
            },
            toggleClass: function () {
                for (
                    var e = arguments.length, t = new Array(e), i = 0;
                    i < e;
                    i++
                )
                    t[i] = arguments[i];
                const n = r(t.map((e) => e.split(" ")));
                this.forEach((t) => {
                    n.forEach((e) => {
                        t.classList.toggle(e);
                    });
                });
            },
            attr: function (t, i) {
                if (1 === arguments.length && "string" == typeof t)
                    return this[0] ? this[0].getAttribute(t) : void 0;
                for (let e = 0; e < this.length; e += 1)
                    if (2 === arguments.length) this[e].setAttribute(t, i);
                    else
                        for (const i in t)
                            (this[e][i] = t[i]), this[e].setAttribute(i, t[i]);
                return this;
            },
            removeAttr: function (t) {
                for (let e = 0; e < this.length; e += 1)
                    this[e].removeAttribute(t);
                return this;
            },
            transform: function (t) {
                for (let e = 0; e < this.length; e += 1)
                    this[e].style.transform = t;
                return this;
            },
            transition: function (t) {
                for (let e = 0; e < this.length; e += 1)
                    this[e].style.transitionDuration =
                        "string" != typeof t ? t + "ms" : t;
                return this;
            },
            on: function () {
                for (
                    var t = arguments.length, i = new Array(t), e = 0;
                    e < t;
                    e++
                )
                    i[e] = arguments[e];
                let [n, s, r, o] = i;
                function a(t) {
                    var e = t.target;
                    if (e) {
                        const i = t.target.dom7EventData || [];
                        if ((i.indexOf(t) < 0 && i.unshift(t), A(e).is(s)))
                            r.apply(e, i);
                        else {
                            const t = A(e).parents();
                            for (let e = 0; e < t.length; e += 1)
                                A(t[e]).is(s) && r.apply(t[e], i);
                        }
                    }
                }
                function l(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                }
                "function" == typeof i[1] && (([n, r, o] = i), (s = void 0)),
                    (o = o || !1);
                var d = n.split(" ");
                let c;
                for (let e = 0; e < this.length; e += 1) {
                    const i = this[e];
                    if (s)
                        for (c = 0; c < d.length; c += 1) {
                            const t = d[c];
                            i.dom7LiveListeners || (i.dom7LiveListeners = {}),
                                i.dom7LiveListeners[t] ||
                                    (i.dom7LiveListeners[t] = []),
                                i.dom7LiveListeners[t].push({
                                    listener: r,
                                    proxyListener: a,
                                }),
                                i.addEventListener(t, a, o);
                        }
                    else
                        for (c = 0; c < d.length; c += 1) {
                            const t = d[c];
                            i.dom7Listeners || (i.dom7Listeners = {}),
                                i.dom7Listeners[t] || (i.dom7Listeners[t] = []),
                                i.dom7Listeners[t].push({
                                    listener: r,
                                    proxyListener: l,
                                }),
                                i.addEventListener(t, l, o);
                        }
                }
                return this;
            },
            off: function () {
                for (
                    var e = arguments.length, i = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    i[n] = arguments[n];
                let [t, s, r, o] = i;
                "function" == typeof i[1] && (([t, r, o] = i), (s = void 0)),
                    (o = o || !1);
                var a = t.split(" ");
                for (let e = 0; e < a.length; e += 1) {
                    const i = a[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const n = this[e];
                        let t;
                        if (
                            (!s && n.dom7Listeners
                                ? (t = n.dom7Listeners[i])
                                : s &&
                                  n.dom7LiveListeners &&
                                  (t = n.dom7LiveListeners[i]),
                            t && t.length)
                        )
                            for (let e = t.length - 1; 0 <= e; --e) {
                                const s = t[e];
                                ((r && s.listener === r) ||
                                    (r &&
                                        s.listener &&
                                        s.listener.dom7proxy &&
                                        s.listener.dom7proxy === r) ||
                                    !r) &&
                                    (n.removeEventListener(
                                        i,
                                        s.proxyListener,
                                        o
                                    ),
                                    t.splice(e, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function () {
                const t = L();
                for (
                    var i = arguments.length, n = new Array(i), s = 0;
                    s < i;
                    s++
                )
                    n[s] = arguments[s];
                const r = n[0].split(" "),
                    o = n[1];
                for (let e = 0; e < r.length; e += 1) {
                    const s = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        if (t.CustomEvent) {
                            const i = new t.CustomEvent(s, {
                                detail: o,
                                bubbles: !0,
                                cancelable: !0,
                            });
                            (r.dom7EventData = n.filter((e, t) => 0 < t)),
                                r.dispatchEvent(i),
                                (r.dom7EventData = []),
                                delete r.dom7EventData;
                        }
                    }
                }
                return this;
            },
            transitionEnd: function (i) {
                const n = this;
                return (
                    i &&
                        n.on("transitionend", function e(t) {
                            t.target === this &&
                                (i.call(this, t), n.off("transitionend", e));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (0 < this.length) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetWidth +
                            parseFloat(e.getPropertyValue("margin-right")) +
                            parseFloat(e.getPropertyValue("margin-left"))
                        );
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (0 < this.length) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetHeight +
                            parseFloat(e.getPropertyValue("margin-top")) +
                            parseFloat(e.getPropertyValue("margin-bottom"))
                        );
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                const e = L();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (0 < this.length) {
                    const e = L(),
                        t = E(),
                        i = this[0],
                        n = i.getBoundingClientRect(),
                        s = t.body,
                        r = i.clientTop || s.clientTop || 0,
                        o = i.clientLeft || s.clientLeft || 0,
                        a = i === e ? e.scrollY : i.scrollTop,
                        l = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + a - r, left: n.left + l - o };
                }
                return null;
            },
            css: function (e, t) {
                const i = L();
                let n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (const t in e) this[n].style[t] = e[t];
                        return this;
                    }
                    if (this[0])
                        return i
                            .getComputedStyle(this[0], null)
                            .getPropertyValue(e);
                }
                if (2 !== arguments.length || "string" != typeof e) return this;
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this;
            },
            each: function (i) {
                return (
                    i &&
                        this.forEach((e, t) => {
                            i.apply(e, [e, t]);
                        }),
                    this
                );
            },
            html: function (t) {
                if (void 0 === t) return this[0] ? this[0].innerHTML : null;
                for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this;
            },
            text: function (t) {
                if (void 0 === t)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let e = 0; e < this.length; e += 1)
                    this[e].textContent = t;
                return this;
            },
            is: function (e) {
                const t = L(),
                    i = E(),
                    n = this[0];
                let s, r;
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector)
                        return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (s = A(e), r = 0; r < s.length; r += 1)
                        if (s[r] === n) return !0;
                    return !1;
                }
                if (e === i) return n === i;
                if (e === t) return n === t;
                if (e.nodeType || e instanceof o) {
                    for (s = e.nodeType ? [e] : e, r = 0; r < s.length; r += 1)
                        if (s[r] === n) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                return A(
                    t - 1 < e
                        ? []
                        : e < 0
                        ? (t = t + e) < 0
                            ? []
                            : [this[t]]
                        : [this[e]]
                );
            },
            append: function () {
                var i;
                const n = E();
                for (let e = 0; e < arguments.length; e += 1) {
                    i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                    for (let t = 0; t < this.length; t += 1)
                        if ("string" == typeof i) {
                            const E = n.createElement("div");
                            for (E.innerHTML = i; E.firstChild; )
                                this[t].appendChild(E.firstChild);
                        } else if (i instanceof o)
                            for (let e = 0; e < i.length; e += 1)
                                this[t].appendChild(i[e]);
                        else this[t].appendChild(i);
                }
                return this;
            },
            prepend: function (e) {
                const t = E();
                let i, n;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        const E = t.createElement("div");
                        for (
                            E.innerHTML = e, n = E.childNodes.length - 1;
                            0 <= n;
                            --n
                        )
                            this[i].insertBefore(
                                E.childNodes[n],
                                this[i].childNodes[0]
                            );
                    } else if (e instanceof o)
                        for (n = 0; n < e.length; n += 1)
                            this[i].insertBefore(e[n], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                return this;
            },
            next: function (e) {
                return 0 < this.length
                    ? e
                        ? this[0].nextElementSibling &&
                          A(this[0].nextElementSibling).is(e)
                            ? A([this[0].nextElementSibling])
                            : A([])
                        : this[0].nextElementSibling
                        ? A([this[0].nextElementSibling])
                        : A([])
                    : A([]);
            },
            nextAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return A([]);
                for (; i.nextElementSibling; ) {
                    var n = i.nextElementSibling;
                    (e && !A(n).is(e)) || t.push(n), (i = n);
                }
                return A(t);
            },
            prev: function (e) {
                var t;
                return 0 < this.length
                    ? ((t = this[0]),
                      e
                          ? t.previousElementSibling &&
                            A(t.previousElementSibling).is(e)
                              ? A([t.previousElementSibling])
                              : A([])
                          : t.previousElementSibling
                          ? A([t.previousElementSibling])
                          : A([]))
                    : A([]);
            },
            prevAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return A([]);
                for (; i.previousElementSibling; ) {
                    var n = i.previousElementSibling;
                    (e && !A(n).is(e)) || t.push(n), (i = n);
                }
                return A(t);
            },
            parent: function (t) {
                const i = [];
                for (let e = 0; e < this.length; e += 1)
                    null === this[e].parentNode ||
                        (t && !A(this[e].parentNode).is(t)) ||
                        i.push(this[e].parentNode);
                return A(i);
            },
            parents: function (i) {
                const n = [];
                for (let t = 0; t < this.length; t += 1) {
                    let e = this[t].parentNode;
                    for (; e; )
                        (i && !A(e).is(i)) || n.push(e), (e = e.parentNode);
                }
                return A(n);
            },
            closest: function (e) {
                let t = this;
                return void 0 === e
                    ? A([])
                    : (t = t.is(e) ? t : t.parents(e).eq(0));
            },
            find: function (t) {
                const i = [];
                for (let e = 0; e < this.length; e += 1) {
                    var n = this[e].querySelectorAll(t);
                    for (let e = 0; e < n.length; e += 1) i.push(n[e]);
                }
                return A(i);
            },
            children: function (t) {
                const i = [];
                for (let e = 0; e < this.length; e += 1) {
                    var n = this[e].children;
                    for (let e = 0; e < n.length; e += 1)
                        (t && !A(n[e]).is(t)) || i.push(n[e]);
                }
                return A(i);
            },
            filter: function (e) {
                return A(a(this, e));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode &&
                        this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        function S(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t);
        }
        function v() {
            return Date.now();
        }
        function $(e, t) {
            void 0 === t && (t = "x");
            const i = L();
            let n, s, r;
            const o = (function (e) {
                const t = L();
                let i;
                return (i =
                    (i =
                        !(i = t.getComputedStyle
                            ? t.getComputedStyle(e, null)
                            : i) && e.currentStyle
                            ? e.currentStyle
                            : i) || e.style);
            })(e);
            return (
                i.WebKitCSSMatrix
                    ? (6 <
                          (s = o.transform || o.webkitTransform).split(",")
                              .length &&
                          (s = s
                              .split(", ")
                              .map((e) => e.replace(",", "."))
                              .join(", ")),
                      (r = new i.WebKitCSSMatrix("none" === s ? "" : s)))
                    : ((r =
                          o.MozTransform ||
                          o.OTransform ||
                          o.MsTransform ||
                          o.msTransform ||
                          o.transform ||
                          o
                              .getPropertyValue("transform")
                              .replace("translate(", "matrix(1, 0, 0, 1,")),
                      (n = r.toString().split(","))),
                "x" === t &&
                    (s = i.WebKitCSSMatrix
                        ? r.m41
                        : 16 === n.length
                        ? parseFloat(n[12])
                        : parseFloat(n[4])),
                (s =
                    "y" === t
                        ? i.WebKitCSSMatrix
                            ? r.m42
                            : 16 === n.length
                            ? parseFloat(n[13])
                            : parseFloat(n[5])
                        : s) || 0
            );
        }
        function d(e) {
            return (
                "object" == typeof e &&
                null !== e &&
                e.constructor &&
                "Object" === Object.prototype.toString.call(e).slice(8, -1)
            );
        }
        function p(e) {
            const i = Object(arguments.length <= 0 ? void 0 : e),
                t = ["__proto__", "constructor", "prototype"];
            for (let e = 1; e < arguments.length; e += 1) {
                var n = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                if (
                    null != n &&
                    ((a = n),
                    !("undefined" != typeof window &&
                    void 0 !== window.HTMLElement
                        ? a instanceof HTMLElement
                        : a && (1 === a.nodeType || 11 === a.nodeType)))
                ) {
                    var s = Object.keys(Object(n)).filter(
                        (e) => t.indexOf(e) < 0
                    );
                    for (let e = 0, t = s.length; e < t; e += 1) {
                        var r = s[e],
                            o = Object.getOwnPropertyDescriptor(n, r);
                        void 0 !== o &&
                            o.enumerable &&
                            (d(i[r]) && d(n[r])
                                ? n[r].__swiper__
                                    ? (i[r] = n[r])
                                    : p(i[r], n[r])
                                : !d(i[r]) && d(n[r])
                                ? ((i[r] = {}),
                                  n[r].__swiper__
                                      ? (i[r] = n[r])
                                      : p(i[r], n[r]))
                                : (i[r] = n[r]));
                    }
                }
            }
            var a;
            return i;
        }
        function k(e, t, i) {
            e.style.setProperty(t, i);
        }
        function y(e) {
            let { swiper: i, targetPosition: n, side: s } = e;
            const r = L(),
                o = -i.translate;
            let a,
                l = null;
            const d = i.params.speed,
                c =
                    ((i.wrapperEl.style.scrollSnapType = "none"),
                    r.cancelAnimationFrame(i.cssModeFrameID),
                    n > o ? "next" : "prev"),
                u = (e, t) =>
                    ("next" === c && t <= e) || ("prev" === c && e <= t),
                p = () => {
                    (a = new Date().getTime()), null === l && (l = a);
                    var e = Math.max(Math.min((a - l) / d, 1), 0),
                        e = 0.5 - Math.cos(e * Math.PI) / 2;
                    let t = o + e * (n - o);
                    if (
                        (u(t, n) && (t = n),
                        i.wrapperEl.scrollTo({ [s]: t }),
                        u(t, n))
                    )
                        return (
                            (i.wrapperEl.style.overflow = "hidden"),
                            (i.wrapperEl.style.scrollSnapType = ""),
                            setTimeout(() => {
                                (i.wrapperEl.style.overflow = ""),
                                    i.wrapperEl.scrollTo({ [s]: t });
                            }),
                            void r.cancelAnimationFrame(i.cssModeFrameID)
                        );
                    i.cssModeFrameID = r.requestAnimationFrame(p);
                };
            p();
        }
        let e, c, u;
        function f() {
            return (e =
                e ||
                (function () {
                    const i = L(),
                        e = E();
                    return {
                        smoothScroll:
                            e.documentElement &&
                            "scrollBehavior" in e.documentElement.style,
                        touch: !!(
                            "ontouchstart" in i ||
                            (i.DocumentTouch && e instanceof i.DocumentTouch)
                        ),
                        passiveListener: (function () {
                            let e = !1;
                            try {
                                var t = Object.defineProperty({}, "passive", {
                                    get() {
                                        e = !0;
                                    },
                                });
                                i.addEventListener(
                                    "testPassiveListener",
                                    null,
                                    t
                                );
                            } catch (e) {}
                            return e;
                        })(),
                        gestures: "ongesturestart" in i,
                    };
                })());
        }
        function l(e) {
            let { swiper: t, runCallbacks: i, direction: n, step: s } = e;
            var { activeIndex: e, previousIndex: r } = t;
            let o = n;
            if (
                ((o = o || (r < e ? "next" : e < r ? "prev" : "reset")),
                t.emit("transition" + s),
                i && e !== r)
            ) {
                if ("reset" === o) return t.emit("slideResetTransition" + s);
                t.emit("slideChangeTransition" + s),
                    "next" === o
                        ? t.emit("slideNextTransition" + s)
                        : t.emit("slidePrevTransition" + s);
            }
        }
        function h() {
            var e,
                t,
                i = this,
                { params: n, el: s } = i;
            (s && 0 === s.offsetWidth) ||
                (n.breakpoints && i.setBreakpoint(),
                ({ allowSlideNext: s, allowSlidePrev: e, snapGrid: t } = i),
                (i.allowSlideNext = !0),
                (i.allowSlidePrev = !0),
                i.updateSize(),
                i.updateSlides(),
                i.updateSlidesClasses(),
                ("auto" === n.slidesPerView || 1 < n.slidesPerView) &&
                i.isEnd &&
                !i.isBeginning &&
                !i.params.centeredSlides
                    ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                    : i.slideTo(i.activeIndex, 0, !1, !0),
                i.autoplay &&
                    i.autoplay.running &&
                    i.autoplay.paused &&
                    i.autoplay.run(),
                (i.allowSlidePrev = e),
                (i.allowSlideNext = s),
                i.params.watchOverflow &&
                    t !== i.snapGrid &&
                    i.checkOverflow());
        }
        Object.keys(i).forEach((e) => {
            Object.defineProperty(A.fn, e, { value: i[e], writable: !0 });
        });
        let g = !1;
        function _() {}
        const m = (e, t) => {
                const i = E(),
                    {
                        params: n,
                        touchEvents: s,
                        el: r,
                        wrapperEl: o,
                        device: a,
                        support: l,
                    } = e,
                    d = !!n.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (l.touch) {
                    const t = !(
                        "touchstart" !== s.start ||
                        !l.passiveListener ||
                        !n.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    r[c](s.start, e.onTouchStart, t),
                        r[c](
                            s.move,
                            e.onTouchMove,
                            l.passiveListener ? { passive: !1, capture: d } : d
                        ),
                        r[c](s.end, e.onTouchEnd, t),
                        s.cancel && r[c](s.cancel, e.onTouchEnd, t);
                } else
                    r[c](s.start, e.onTouchStart, !1),
                        i[c](s.move, e.onTouchMove, d),
                        i[c](s.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) &&
                    r[c]("click", e.onClick, !0),
                    n.cssMode && o[c]("scroll", e.onScroll),
                    n.updateOnWindowResize
                        ? e[u](
                              a.ios || a.android
                                  ? "resize orientationchange observerUpdate"
                                  : "resize observerUpdate",
                              h,
                              !0
                          )
                        : e[u]("observerUpdate", h, !0);
            },
            b = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
        var w = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements:
                "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        const x = {
                eventsEmitter: {
                    on(e, t, i) {
                        const n = this;
                        if ("function" != typeof t) return n;
                        const s = i ? "unshift" : "push";
                        return (
                            e.split(" ").forEach((e) => {
                                n.eventsListeners[e] ||
                                    (n.eventsListeners[e] = []),
                                    n.eventsListeners[e][s](t);
                            }),
                            n
                        );
                    },
                    once(n, s, e) {
                        const r = this;
                        return "function" != typeof s
                            ? r
                            : ((o.__emitterProxy = s), r.on(n, o, e));
                        function o() {
                            r.off(n, o),
                                o.__emitterProxy && delete o.__emitterProxy;
                            for (
                                var e = arguments.length,
                                    t = new Array(e),
                                    i = 0;
                                i < e;
                                i++
                            )
                                t[i] = arguments[i];
                            s.apply(r, t);
                        }
                    },
                    onAny(e, t) {
                        if ("function" != typeof e) return this;
                        t = t ? "unshift" : "push";
                        return (
                            this.eventsAnyListeners.indexOf(e) < 0 &&
                                this.eventsAnyListeners[t](e),
                            this
                        );
                    },
                    offAny(e) {
                        if (!this.eventsAnyListeners) return this;
                        e = this.eventsAnyListeners.indexOf(e);
                        return (
                            0 <= e && this.eventsAnyListeners.splice(e, 1), this
                        );
                    },
                    off(e, n) {
                        const s = this;
                        return (
                            s.eventsListeners &&
                                e.split(" ").forEach((i) => {
                                    void 0 === n
                                        ? (s.eventsListeners[i] = [])
                                        : s.eventsListeners[i] &&
                                          s.eventsListeners[i].forEach(
                                              (e, t) => {
                                                  (e === n ||
                                                      (e.__emitterProxy &&
                                                          e.__emitterProxy ===
                                                              n)) &&
                                                      s.eventsListeners[
                                                          i
                                                      ].splice(t, 1);
                                              }
                                          );
                                }),
                            s
                        );
                    },
                    emit() {
                        const e = this;
                        if (!e.eventsListeners) return e;
                        let t, i, n;
                        for (
                            var s = arguments.length, r = new Array(s), o = 0;
                            o < s;
                            o++
                        )
                            r[o] = arguments[o];
                        return (
                            (n =
                                "string" == typeof r[0] || Array.isArray(r[0])
                                    ? ((t = r[0]),
                                      (i = r.slice(1, r.length)),
                                      e)
                                    : ((t = r[0].events),
                                      (i = r[0].data),
                                      r[0].context || e)),
                            i.unshift(n),
                            (Array.isArray(t) ? t : t.split(" ")).forEach(
                                (t) => {
                                    e.eventsAnyListeners &&
                                        e.eventsAnyListeners.length &&
                                        e.eventsAnyListeners.forEach((e) => {
                                            e.apply(n, [t, ...i]);
                                        }),
                                        e.eventsListeners &&
                                            e.eventsListeners[t] &&
                                            e.eventsListeners[t].forEach(
                                                (e) => {
                                                    e.apply(n, i);
                                                }
                                            );
                                }
                            ),
                            e
                        );
                    },
                },
                update: {
                    updateSize: function () {
                        var e = this;
                        let t, i;
                        const n = e.$el;
                        (t =
                            void 0 !== e.params.width && null !== e.params.width
                                ? e.params.width
                                : n[0].clientWidth),
                            (i =
                                void 0 !== e.params.height &&
                                null !== e.params.height
                                    ? e.params.height
                                    : n[0].clientHeight),
                            (0 === t && e.isHorizontal()) ||
                                (0 === i && e.isVertical()) ||
                                ((t =
                                    t -
                                    parseInt(n.css("padding-left") || 0, 10) -
                                    parseInt(n.css("padding-right") || 0, 10)),
                                (i =
                                    i -
                                    parseInt(n.css("padding-top") || 0, 10) -
                                    parseInt(n.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(i) && (i = 0),
                                Object.assign(e, {
                                    width: t,
                                    height: i,
                                    size: e.isHorizontal() ? t : i,
                                }));
                    },
                    updateSlides: function () {
                        const i = this;
                        function n(e) {
                            return i.isHorizontal()
                                ? e
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[e];
                        }
                        function s(e, t) {
                            return parseFloat(e.getPropertyValue(n(t)) || 0);
                        }
                        const r = i.params,
                            {
                                $wrapperEl: o,
                                size: a,
                                rtlTranslate: l,
                                wrongRTL: d,
                            } = i,
                            c = i.virtual && r.virtual.enabled,
                            e = (c ? i.virtual : i).slides.length,
                            u = o.children("." + i.params.slideClass),
                            p = (c ? i.virtual.slides : u).length;
                        let h = [];
                        const f = [],
                            g = [];
                        let m = r.slidesOffsetBefore,
                            v =
                                ("function" == typeof m &&
                                    (m = r.slidesOffsetBefore.call(i)),
                                r.slidesOffsetAfter);
                        "function" == typeof v &&
                            (v = r.slidesOffsetAfter.call(i));
                        var y = i.snapGrid.length,
                            b = i.slidesGrid.length;
                        let w = r.spaceBetween,
                            x = -m,
                            C = 0,
                            E = 0;
                        if (void 0 !== a) {
                            "string" == typeof w &&
                                0 <= w.indexOf("%") &&
                                (w =
                                    (parseFloat(w.replace("%", "")) / 100) * a),
                                (i.virtualSize = -w),
                                l
                                    ? u.css({
                                          marginLeft: "",
                                          marginBottom: "",
                                          marginTop: "",
                                      })
                                    : u.css({
                                          marginRight: "",
                                          marginBottom: "",
                                          marginTop: "",
                                      }),
                                r.centeredSlides &&
                                    r.cssMode &&
                                    (k(
                                        i.wrapperEl,
                                        "--swiper-centered-offset-before",
                                        ""
                                    ),
                                    k(
                                        i.wrapperEl,
                                        "--swiper-centered-offset-after",
                                        ""
                                    ));
                            var S = r.grid && 1 < r.grid.rows && i.grid;
                            let t;
                            S && i.grid.initSlides(p);
                            var T =
                                "auto" === r.slidesPerView &&
                                r.breakpoints &&
                                0 <
                                    Object.keys(r.breakpoints).filter(
                                        (e) =>
                                            void 0 !==
                                            r.breakpoints[e].slidesPerView
                                    ).length;
                            for (let e = 0; e < p; e += 1) {
                                t = 0;
                                const l = u.eq(e);
                                if (
                                    (S && i.grid.updateSlide(e, l, p, n),
                                    "none" !== l.css("display"))
                                ) {
                                    if ("auto" === r.slidesPerView) {
                                        T && (u[e].style[n("width")] = "");
                                        const a = getComputedStyle(l[0]),
                                            d = l[0].style.transform,
                                            c = l[0].style.webkitTransform;
                                        if (
                                            (d &&
                                                (l[0].style.transform = "none"),
                                            c &&
                                                (l[0].style.webkitTransform =
                                                    "none"),
                                            r.roundLengths)
                                        )
                                            t = i.isHorizontal()
                                                ? l.outerWidth(!0)
                                                : l.outerHeight(!0);
                                        else {
                                            const i = s(a, "width"),
                                                n = s(a, "padding-left"),
                                                r = s(a, "padding-right"),
                                                o = s(a, "margin-left"),
                                                d = s(a, "margin-right"),
                                                c =
                                                    a.getPropertyValue(
                                                        "box-sizing"
                                                    );
                                            if (c && "border-box" === c)
                                                t = i + o + d;
                                            else {
                                                const {
                                                    clientWidth: s,
                                                    offsetWidth: a,
                                                } = l[0];
                                                t = i + n + r + o + d + (a - s);
                                            }
                                        }
                                        d && (l[0].style.transform = d),
                                            c &&
                                                (l[0].style.webkitTransform =
                                                    c),
                                            r.roundLengths &&
                                                (t = Math.floor(t));
                                    } else
                                        (t =
                                            (a - (r.slidesPerView - 1) * w) /
                                            r.slidesPerView),
                                            r.roundLengths &&
                                                (t = Math.floor(t)),
                                            u[e] &&
                                                (u[e].style[n("width")] =
                                                    t + "px");
                                    u[e] && (u[e].swiperSlideSize = t),
                                        g.push(t),
                                        r.centeredSlides
                                            ? ((x = x + t / 2 + C / 2 + w),
                                              0 === C &&
                                                  0 !== e &&
                                                  (x = x - a / 2 - w),
                                              0 === e && (x = x - a / 2 - w),
                                              Math.abs(x) < 0.001 && (x = 0),
                                              r.roundLengths &&
                                                  (x = Math.floor(x)),
                                              E % r.slidesPerGroup == 0 &&
                                                  h.push(x),
                                              f.push(x))
                                            : (r.roundLengths &&
                                                  (x = Math.floor(x)),
                                              (E -
                                                  Math.min(
                                                      i.params
                                                          .slidesPerGroupSkip,
                                                      E
                                                  )) %
                                                  i.params.slidesPerGroup ==
                                                  0 && h.push(x),
                                              f.push(x),
                                              (x = x + t + w)),
                                        (i.virtualSize += t + w),
                                        (C = t),
                                        (E += 1);
                                }
                            }
                            if (
                                ((i.virtualSize =
                                    Math.max(i.virtualSize, a) + v),
                                l &&
                                    d &&
                                    ("slide" === r.effect ||
                                        "coverflow" === r.effect) &&
                                    o.css({
                                        width:
                                            i.virtualSize +
                                            r.spaceBetween +
                                            "px",
                                    }),
                                r.setWrapperSize &&
                                    o.css({
                                        [n("width")]:
                                            i.virtualSize +
                                            r.spaceBetween +
                                            "px",
                                    }),
                                S && i.grid.updateWrapperSize(t, h, n),
                                !r.centeredSlides)
                            ) {
                                const n = [];
                                for (let t = 0; t < h.length; t += 1) {
                                    let e = h[t];
                                    r.roundLengths && (e = Math.floor(e)),
                                        h[t] <= i.virtualSize - a && n.push(e);
                                }
                                (h = n),
                                    1 <
                                        Math.floor(i.virtualSize - a) -
                                            Math.floor(h[h.length - 1]) &&
                                        h.push(i.virtualSize - a);
                            }
                            if (
                                (0 === h.length && (h = [0]),
                                0 !== r.spaceBetween)
                            ) {
                                const s =
                                    i.isHorizontal() && l
                                        ? "marginLeft"
                                        : n("marginRight");
                                u.filter(
                                    (e, t) => !r.cssMode || t !== u.length - 1
                                ).css({ [s]: w + "px" });
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let t = 0;
                                g.forEach((e) => {
                                    t += e + (r.spaceBetween || 0);
                                });
                                const n = (t -= r.spaceBetween) - a;
                                h = h.map((e) =>
                                    e < 0 ? -m : e > n ? n + v : e
                                );
                            }
                            if (r.centerInsufficientSlides) {
                                let t = 0;
                                if (
                                    (g.forEach((e) => {
                                        t += e + (r.spaceBetween || 0);
                                    }),
                                    (t -= r.spaceBetween) < a)
                                ) {
                                    const n = (a - t) / 2;
                                    h.forEach((e, t) => {
                                        h[t] = e - n;
                                    }),
                                        f.forEach((e, t) => {
                                            f[t] = e + n;
                                        });
                                }
                            }
                            if (
                                (Object.assign(i, {
                                    slides: u,
                                    snapGrid: h,
                                    slidesGrid: f,
                                    slidesSizesGrid: g,
                                }),
                                r.centeredSlides &&
                                    r.cssMode &&
                                    !r.centeredSlidesBounds)
                            ) {
                                k(
                                    i.wrapperEl,
                                    "--swiper-centered-offset-before",
                                    -h[0] + "px"
                                ),
                                    k(
                                        i.wrapperEl,
                                        "--swiper-centered-offset-after",
                                        i.size / 2 - g[g.length - 1] / 2 + "px"
                                    );
                                const n = -i.snapGrid[0],
                                    s = -i.slidesGrid[0];
                                (i.snapGrid = i.snapGrid.map((e) => e + n)),
                                    (i.slidesGrid = i.slidesGrid.map(
                                        (e) => e + s
                                    ));
                            }
                            if (
                                (p !== e && i.emit("slidesLengthChange"),
                                h.length !== y &&
                                    (i.params.watchOverflow &&
                                        i.checkOverflow(),
                                    i.emit("snapGridLengthChange")),
                                f.length !== b &&
                                    i.emit("slidesGridLengthChange"),
                                r.watchSlidesProgress && i.updateSlidesOffset(),
                                !(
                                    c ||
                                    r.cssMode ||
                                    ("slide" !== r.effect &&
                                        "fade" !== r.effect)
                                ))
                            ) {
                                const n =
                                        r.containerModifierClass +
                                        "backface-hidden",
                                    s = i.$el.hasClass(n);
                                p <= r.maxBackfaceHiddenSlides
                                    ? s || i.$el.addClass(n)
                                    : s && i.$el.removeClass(n);
                            }
                        }
                    },
                    updateAutoHeight: function (e) {
                        const i = this,
                            t = [],
                            n = i.virtual && i.params.virtual.enabled;
                        let s,
                            r = 0;
                        "number" == typeof e
                            ? i.setTransition(e)
                            : !0 === e && i.setTransition(i.params.speed);
                        var o = (t) =>
                            (n
                                ? i.slides.filter(
                                      (e) =>
                                          parseInt(
                                              e.getAttribute(
                                                  "data-swiper-slide-index"
                                              ),
                                              10
                                          ) === t
                                  )
                                : i.slides.eq(t))[0];
                        if (
                            "auto" !== i.params.slidesPerView &&
                            1 < i.params.slidesPerView
                        )
                            if (i.params.centeredSlides)
                                i.visibleSlides.each((e) => {
                                    t.push(e);
                                });
                            else
                                for (
                                    s = 0;
                                    s < Math.ceil(i.params.slidesPerView);
                                    s += 1
                                ) {
                                    const e = i.activeIndex + s;
                                    if (e > i.slides.length && !n) break;
                                    t.push(o(e));
                                }
                        else t.push(o(i.activeIndex));
                        for (s = 0; s < t.length; s += 1)
                            if (void 0 !== t[s]) {
                                const e = t[s].offsetHeight;
                                r = e > r ? e : r;
                            }
                        (!r && 0 !== r) || i.$wrapperEl.css("height", r + "px");
                    },
                    updateSlidesOffset: function () {
                        const t = this.slides;
                        for (let e = 0; e < t.length; e += 1)
                            t[e].swiperSlideOffset = this.isHorizontal()
                                ? t[e].offsetLeft
                                : t[e].offsetTop;
                    },
                    updateSlidesProgress: function (e) {
                        void 0 === e && (e = (this && this.translate) || 0);
                        const n = this,
                            s = n.params,
                            { slides: r, rtlTranslate: o, snapGrid: a } = n;
                        if (0 !== r.length) {
                            void 0 === r[0].swiperSlideOffset &&
                                n.updateSlidesOffset();
                            let i = o ? e : -e;
                            r.removeClass(s.slideVisibleClass),
                                (n.visibleSlidesIndexes = []),
                                (n.visibleSlides = []);
                            for (let t = 0; t < r.length; t += 1) {
                                const l = r[t];
                                let e = l.swiperSlideOffset;
                                s.cssMode &&
                                    s.centeredSlides &&
                                    (e -= r[0].swiperSlideOffset);
                                const A =
                                        (i +
                                            (s.centeredSlides
                                                ? n.minTranslate()
                                                : 0) -
                                            e) /
                                        (l.swiperSlideSize + s.spaceBetween),
                                    d =
                                        (i -
                                            a[0] +
                                            (s.centeredSlides
                                                ? n.minTranslate()
                                                : 0) -
                                            e) /
                                        (l.swiperSlideSize + s.spaceBetween),
                                    c = -(i - e),
                                    u = c + n.slidesSizesGrid[t];
                                ((0 <= c && c < n.size - 1) ||
                                    (1 < u && u <= n.size) ||
                                    (c <= 0 && u >= n.size)) &&
                                    (n.visibleSlides.push(l),
                                    n.visibleSlidesIndexes.push(t),
                                    r.eq(t).addClass(s.slideVisibleClass)),
                                    (l.progress = o ? -A : A),
                                    (l.originalProgress = o ? -d : d);
                            }
                            n.visibleSlides = A(n.visibleSlides);
                        }
                    },
                    updateProgress: function (e) {
                        var t = this;
                        if (void 0 === e) {
                            const i = t.rtlTranslate ? -1 : 1;
                            e = (t && t.translate && t.translate * i) || 0;
                        }
                        const i = t.params,
                            n = t.maxTranslate() - t.minTranslate();
                        let { progress: s, isBeginning: r, isEnd: o } = t;
                        var a = r,
                            l = o;
                        (o =
                            0 == n
                                ? ((s = 0), (r = !0))
                                : ((s = (e - t.minTranslate()) / n),
                                  (r = s <= 0),
                                  1 <= s)),
                            Object.assign(t, {
                                progress: s,
                                isBeginning: r,
                                isEnd: o,
                            }),
                            (i.watchSlidesProgress ||
                                (i.centeredSlides && i.autoHeight)) &&
                                t.updateSlidesProgress(e),
                            r && !a && t.emit("reachBeginning toEdge"),
                            o && !l && t.emit("reachEnd toEdge"),
                            ((a && !r) || (l && !o)) && t.emit("fromEdge"),
                            t.emit("progress", s);
                    },
                    updateSlidesClasses: function () {
                        const {
                                slides: e,
                                params: t,
                                $wrapperEl: i,
                                activeIndex: n,
                                realIndex: s,
                            } = this,
                            r = this.virtual && t.virtual.enabled;
                        let o,
                            a =
                                (e.removeClass(
                                    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ` +
                                        t.slideDuplicatePrevClass
                                ),
                                (o = r
                                    ? this.$wrapperEl.find(
                                          `.${t.slideClass}[data-swiper-slide-index="${n}"]`
                                      )
                                    : e.eq(n)).addClass(t.slideActiveClass),
                                t.loop &&
                                    (o.hasClass(t.slideDuplicateClass)
                                        ? i.children(
                                              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                                          )
                                        : i.children(
                                              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                                          )
                                    ).addClass(t.slideDuplicateActiveClass),
                                o
                                    .nextAll("." + t.slideClass)
                                    .eq(0)
                                    .addClass(t.slideNextClass)),
                            l =
                                (t.loop &&
                                    0 === a.length &&
                                    (a = e.eq(0)).addClass(t.slideNextClass),
                                o
                                    .prevAll("." + t.slideClass)
                                    .eq(0)
                                    .addClass(t.slidePrevClass));
                        t.loop &&
                            0 === l.length &&
                            (l = e.eq(-1)).addClass(t.slidePrevClass),
                            t.loop &&
                                ((a.hasClass(t.slideDuplicateClass)
                                    ? i.children(
                                          `.${t.slideClass}:not(.${
                                              t.slideDuplicateClass
                                          })[data-swiper-slide-index="${a.attr(
                                              "data-swiper-slide-index"
                                          )}"]`
                                      )
                                    : i.children(
                                          `.${t.slideClass}.${
                                              t.slideDuplicateClass
                                          }[data-swiper-slide-index="${a.attr(
                                              "data-swiper-slide-index"
                                          )}"]`
                                      )
                                ).addClass(t.slideDuplicateNextClass),
                                (l.hasClass(t.slideDuplicateClass)
                                    ? i.children(
                                          `.${t.slideClass}:not(.${
                                              t.slideDuplicateClass
                                          })[data-swiper-slide-index="${l.attr(
                                              "data-swiper-slide-index"
                                          )}"]`
                                      )
                                    : i.children(
                                          `.${t.slideClass}.${
                                              t.slideDuplicateClass
                                          }[data-swiper-slide-index="${l.attr(
                                              "data-swiper-slide-index"
                                          )}"]`
                                      )
                                ).addClass(t.slideDuplicatePrevClass)),
                            this.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        const t = this,
                            i = t.rtlTranslate ? t.translate : -t.translate,
                            {
                                slidesGrid: n,
                                snapGrid: s,
                                params: r,
                                activeIndex: o,
                                realIndex: a,
                                snapIndex: l,
                            } = t;
                        let d,
                            c = e;
                        if (void 0 === c) {
                            for (let e = 0; e < n.length; e += 1)
                                void 0 !== n[e + 1]
                                    ? i >= n[e] &&
                                      i < n[e + 1] - (n[e + 1] - n[e]) / 2
                                        ? (c = e)
                                        : i >= n[e] &&
                                          i < n[e + 1] &&
                                          (c = e + 1)
                                    : i >= n[e] && (c = e);
                            r.normalizeSlideIndex &&
                                (c < 0 || void 0 === c) &&
                                (c = 0);
                        }
                        if (0 <= s.indexOf(i)) d = s.indexOf(i);
                        else {
                            const e = Math.min(r.slidesPerGroupSkip, c);
                            d = e + Math.floor((c - e) / r.slidesPerGroup);
                        }
                        d >= s.length && (d = s.length - 1),
                            c === o
                                ? d !== l &&
                                  ((t.snapIndex = d), t.emit("snapIndexChange"))
                                : ((e = parseInt(
                                      t.slides
                                          .eq(c)
                                          .attr("data-swiper-slide-index") || c,
                                      10
                                  )),
                                  Object.assign(t, {
                                      snapIndex: d,
                                      realIndex: e,
                                      previousIndex: o,
                                      activeIndex: c,
                                  }),
                                  t.emit("activeIndexChange"),
                                  t.emit("snapIndexChange"),
                                  a !== e && t.emit("realIndexChange"),
                                  (t.initialized ||
                                      t.params.runCallbacksOnInit) &&
                                      t.emit("slideChange"));
                    },
                    updateClickedSlide: function (e) {
                        var t = this,
                            i = t.params,
                            n = A(e).closest("." + i.slideClass)[0];
                        let s,
                            r = !1;
                        if (n)
                            for (let e = 0; e < t.slides.length; e += 1)
                                if (t.slides[e] === n) {
                                    (r = !0), (s = e);
                                    break;
                                }
                        if (!n || !r)
                            return (
                                (t.clickedSlide = void 0),
                                void (t.clickedIndex = void 0)
                            );
                        (t.clickedSlide = n),
                            t.virtual && t.params.virtual.enabled
                                ? (t.clickedIndex = parseInt(
                                      A(n).attr("data-swiper-slide-index"),
                                      10
                                  ))
                                : (t.clickedIndex = s),
                            i.slideToClickedSlide &&
                                void 0 !== t.clickedIndex &&
                                t.clickedIndex !== t.activeIndex &&
                                t.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        var {
                            params: t,
                            rtlTranslate: i,
                            translate: n,
                            $wrapperEl: s,
                        } = this;
                        if (t.virtualTranslate) return i ? -n : n;
                        if (t.cssMode) return n;
                        let r = $(s[0], e);
                        return (r = i ? -r : r) || 0;
                    },
                    setTranslate: function (e, t) {
                        const i = this,
                            {
                                rtlTranslate: n,
                                params: s,
                                $wrapperEl: r,
                                wrapperEl: o,
                                progress: a,
                            } = i;
                        let l = 0,
                            d = 0;
                        i.isHorizontal() ? (l = n ? -e : e) : (d = e),
                            s.roundLengths &&
                                ((l = Math.floor(l)), (d = Math.floor(d))),
                            s.cssMode
                                ? (o[
                                      i.isHorizontal()
                                          ? "scrollLeft"
                                          : "scrollTop"
                                  ] = i.isHorizontal() ? -l : -d)
                                : s.virtualTranslate ||
                                  r.transform(
                                      `translate3d(${l}px, ${d}px, 0px)`
                                  ),
                            (i.previousTranslate = i.translate),
                            (i.translate = i.isHorizontal() ? l : d);
                        var c = i.maxTranslate() - i.minTranslate();
                        (0 == c ? 0 : (e - i.minTranslate()) / c) !== a &&
                            i.updateProgress(e),
                            i.emit("setTranslate", i.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (e, t, i, n, s) {
                        void 0 === e && (e = 0),
                            void 0 === t && (t = this.params.speed),
                            void 0 === i && (i = !0),
                            void 0 === n && (n = !0);
                        const r = this,
                            { params: o, wrapperEl: a } = r;
                        if (r.animating && o.preventInteractionOnTransition)
                            return !1;
                        var l = r.minTranslate(),
                            d = r.maxTranslate(),
                            l = n && l < e ? l : n && e < d ? d : e;
                        if ((r.updateProgress(l), o.cssMode)) {
                            const e = r.isHorizontal();
                            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -l;
                            else {
                                if (!r.support.smoothScroll)
                                    return (
                                        y({
                                            swiper: r,
                                            targetPosition: -l,
                                            side: e ? "left" : "top",
                                        }),
                                        !0
                                    );
                                a.scrollTo({
                                    [e ? "left" : "top"]: -l,
                                    behavior: "smooth",
                                });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0),
                                  r.setTranslate(l),
                                  i &&
                                      (r.emit("beforeTransitionStart", t, s),
                                      r.emit("transitionEnd")))
                                : (r.setTransition(t),
                                  r.setTranslate(l),
                                  i &&
                                      (r.emit("beforeTransitionStart", t, s),
                                      r.emit("transitionStart")),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onTranslateToWrapperTransitionEnd ||
                                          (r.onTranslateToWrapperTransitionEnd =
                                              function (e) {
                                                  r &&
                                                      !r.destroyed &&
                                                      e.target === this &&
                                                      (r.$wrapperEl[0].removeEventListener(
                                                          "transitionend",
                                                          r.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      r.$wrapperEl[0].removeEventListener(
                                                          "webkitTransitionEnd",
                                                          r.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      (r.onTranslateToWrapperTransitionEnd =
                                                          null),
                                                      delete r.onTranslateToWrapperTransitionEnd,
                                                      i &&
                                                          r.emit(
                                                              "transitionEnd"
                                                          ));
                                              }),
                                      r.$wrapperEl[0].addEventListener(
                                          "transitionend",
                                          r.onTranslateToWrapperTransitionEnd
                                      ),
                                      r.$wrapperEl[0].addEventListener(
                                          "webkitTransitionEnd",
                                          r.onTranslateToWrapperTransitionEnd
                                      ))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e),
                            this.emit("setTransition", e, t);
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this["params"];
                        i.cssMode ||
                            (i.autoHeight && this.updateAutoHeight(),
                            l({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start",
                            }));
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this["params"];
                        (this.animating = !1),
                            i.cssMode ||
                                (this.setTransition(0),
                                l({
                                    swiper: this,
                                    runCallbacks: e,
                                    direction: t,
                                    step: "End",
                                }));
                    },
                },
                slide: {
                    slideTo: function (e, t, i, n, s) {
                        if (
                            (void 0 === t && (t = this.params.speed),
                            void 0 === i && (i = !0),
                            "number" != typeof (e = void 0 === e ? 0 : e) &&
                                "string" != typeof e)
                        )
                            throw new Error(
                                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                            );
                        if ("string" == typeof e) {
                            const t = parseInt(e, 10);
                            if (!isFinite(t))
                                throw new Error(
                                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                                );
                            e = t;
                        }
                        const r = this;
                        let o = e;
                        o < 0 && (o = 0);
                        const {
                            params: a,
                            snapGrid: l,
                            slidesGrid: d,
                            previousIndex: c,
                            activeIndex: u,
                            rtlTranslate: p,
                            wrapperEl: h,
                            enabled: f,
                        } = r;
                        if (
                            (r.animating && a.preventInteractionOnTransition) ||
                            (!f && !n && !s)
                        )
                            return !1;
                        e = Math.min(r.params.slidesPerGroupSkip, o);
                        let g =
                            e + Math.floor((o - e) / r.params.slidesPerGroup);
                        g >= l.length && (g = l.length - 1),
                            (u || a.initialSlide || 0) === (c || 0) &&
                                i &&
                                r.emit("beforeSlideChangeStart");
                        var m = -l[g];
                        if ((r.updateProgress(m), a.normalizeSlideIndex))
                            for (let e = 0; e < d.length; e += 1) {
                                const t = -Math.floor(100 * m),
                                    i = Math.floor(100 * d[e]),
                                    n = Math.floor(100 * d[e + 1]);
                                void 0 !== d[e + 1]
                                    ? t >= i && t < n - (n - i) / 2
                                        ? (o = e)
                                        : t >= i && t < n && (o = e + 1)
                                    : t >= i && (o = e);
                            }
                        if (r.initialized && o !== u) {
                            if (
                                !r.allowSlideNext &&
                                m < r.translate &&
                                m < r.minTranslate()
                            )
                                return !1;
                            if (
                                !r.allowSlidePrev &&
                                m > r.translate &&
                                m > r.maxTranslate() &&
                                (u || 0) !== o
                            )
                                return !1;
                        }
                        let v;
                        if (
                            ((v = o > u ? "next" : o < u ? "prev" : "reset"),
                            (p && -m === r.translate) ||
                                (!p && m === r.translate))
                        )
                            return (
                                r.updateActiveIndex(o),
                                a.autoHeight && r.updateAutoHeight(),
                                r.updateSlidesClasses(),
                                "slide" !== a.effect && r.setTranslate(m),
                                "reset" != v &&
                                    (r.transitionStart(i, v),
                                    r.transitionEnd(i, v)),
                                !1
                            );
                        if (a.cssMode) {
                            const e = r.isHorizontal(),
                                i = p ? m : -m;
                            if (0 === t) {
                                const t = r.virtual && r.params.virtual.enabled;
                                t &&
                                    ((r.wrapperEl.style.scrollSnapType =
                                        "none"),
                                    (r._immediateVirtual = !0)),
                                    (h[e ? "scrollLeft" : "scrollTop"] = i),
                                    t &&
                                        requestAnimationFrame(() => {
                                            (r.wrapperEl.style.scrollSnapType =
                                                ""),
                                                (r._swiperImmediateVirtual =
                                                    !1);
                                        });
                            } else {
                                if (!r.support.smoothScroll)
                                    return (
                                        y({
                                            swiper: r,
                                            targetPosition: i,
                                            side: e ? "left" : "top",
                                        }),
                                        !0
                                    );
                                h.scrollTo({
                                    [e ? "left" : "top"]: i,
                                    behavior: "smooth",
                                });
                            }
                            return !0;
                        }
                        return (
                            r.setTransition(t),
                            r.setTranslate(m),
                            r.updateActiveIndex(o),
                            r.updateSlidesClasses(),
                            r.emit("beforeTransitionStart", t, n),
                            r.transitionStart(i, v),
                            0 === t
                                ? r.transitionEnd(i, v)
                                : r.animating ||
                                  ((r.animating = !0),
                                  r.onSlideToWrapperTransitionEnd ||
                                      (r.onSlideToWrapperTransitionEnd =
                                          function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener(
                                                      "transitionend",
                                                      r.onSlideToWrapperTransitionEnd
                                                  ),
                                                  r.$wrapperEl[0].removeEventListener(
                                                      "webkitTransitionEnd",
                                                      r.onSlideToWrapperTransitionEnd
                                                  ),
                                                  (r.onSlideToWrapperTransitionEnd =
                                                      null),
                                                  delete r.onSlideToWrapperTransitionEnd,
                                                  r.transitionEnd(i, v));
                                          }),
                                  r.$wrapperEl[0].addEventListener(
                                      "transitionend",
                                      r.onSlideToWrapperTransitionEnd
                                  ),
                                  r.$wrapperEl[0].addEventListener(
                                      "webkitTransitionEnd",
                                      r.onSlideToWrapperTransitionEnd
                                  )),
                            !0
                        );
                    },
                    slideToLoop: function (e, t, i, n) {
                        void 0 === t && (t = this.params.speed),
                            void 0 === i && (i = !0);
                        let s = (e = void 0 === e ? 0 : e);
                        return (
                            this.params.loop && (s += this.loopedSlides),
                            this.slideTo(s, t, i, n)
                        );
                    },
                    slideNext: function (e, t, i) {
                        void 0 === e && (e = this.params.speed),
                            void 0 === t && (t = !0);
                        var n = this,
                            { animating: s, enabled: r, params: o } = n;
                        if (!r) return n;
                        let a = o.slidesPerGroup;
                        "auto" === o.slidesPerView &&
                            1 === o.slidesPerGroup &&
                            o.slidesPerGroupAuto &&
                            (a = Math.max(
                                n.slidesPerViewDynamic("current", !0),
                                1
                            ));
                        r = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                        if (o.loop) {
                            if (s && o.loopPreventsSlide) return !1;
                            n.loopFix(),
                                (n._clientLeft = n.$wrapperEl[0].clientLeft);
                        }
                        return o.rewind && n.isEnd
                            ? n.slideTo(0, e, t, i)
                            : n.slideTo(n.activeIndex + r, e, t, i);
                    },
                    slidePrev: function (e, t, i) {
                        void 0 === e && (e = this.params.speed),
                            void 0 === t && (t = !0);
                        const n = this,
                            {
                                params: s,
                                animating: r,
                                snapGrid: o,
                                slidesGrid: a,
                                rtlTranslate: l,
                                enabled: d,
                            } = n;
                        if (!d) return n;
                        if (s.loop) {
                            if (r && s.loopPreventsSlide) return !1;
                            n.loopFix(),
                                (n._clientLeft = n.$wrapperEl[0].clientLeft);
                        }
                        function c(e) {
                            return e < 0
                                ? -Math.floor(Math.abs(e))
                                : Math.floor(e);
                        }
                        const u = c(l ? n.translate : -n.translate),
                            p = o.map((e) => c(e));
                        let h = o[p.indexOf(u) - 1];
                        if (void 0 === h && s.cssMode) {
                            let i;
                            o.forEach((e, t) => {
                                u >= e && (i = t);
                            }),
                                void 0 !== i && (h = o[0 < i ? i - 1 : i]);
                        }
                        let f = 0;
                        if (
                            (void 0 !== h &&
                                ((f = a.indexOf(h)) < 0 &&
                                    (f = n.activeIndex - 1),
                                "auto" === s.slidesPerView &&
                                    1 === s.slidesPerGroup &&
                                    s.slidesPerGroupAuto &&
                                    ((f =
                                        f -
                                        n.slidesPerViewDynamic("previous", !0) +
                                        1),
                                    (f = Math.max(f, 0)))),
                            s.rewind && n.isBeginning)
                        ) {
                            const s =
                                n.params.virtual &&
                                n.params.virtual.enabled &&
                                n.virtual
                                    ? n.virtual.slides.length - 1
                                    : n.slides.length - 1;
                            return n.slideTo(s, e, t, i);
                        }
                        return n.slideTo(f, e, t, i);
                    },
                    slideReset: function (e, t, i) {
                        return (
                            void 0 === e && (e = this.params.speed),
                            this.slideTo(
                                this.activeIndex,
                                e,
                                (t = void 0 === t ? !0 : t),
                                i
                            )
                        );
                    },
                    slideToClosest: function (e, t, i, n) {
                        void 0 === e && (e = this.params.speed),
                            void 0 === t && (t = !0),
                            void 0 === n && (n = 0.5);
                        var s = this;
                        let r = s.activeIndex;
                        var o = Math.min(s.params.slidesPerGroupSkip, r),
                            o =
                                o +
                                Math.floor((r - o) / s.params.slidesPerGroup),
                            a = s.rtlTranslate ? s.translate : -s.translate;
                        if (a >= s.snapGrid[o]) {
                            const e = s.snapGrid[o];
                            a - e > (s.snapGrid[o + 1] - e) * n &&
                                (r += s.params.slidesPerGroup);
                        } else {
                            const e = s.snapGrid[o - 1];
                            a - e <= (s.snapGrid[o] - e) * n &&
                                (r -= s.params.slidesPerGroup);
                        }
                        return (
                            (r = Math.max(r, 0)),
                            (r = Math.min(r, s.slidesGrid.length - 1)),
                            s.slideTo(r, e, t, i)
                        );
                    },
                    slideToClickedSlide: function () {
                        const e = this,
                            { params: t, $wrapperEl: i } = e,
                            n =
                                "auto" === t.slidesPerView
                                    ? e.slidesPerViewDynamic()
                                    : t.slidesPerView;
                        let s,
                            r = e.clickedIndex;
                        t.loop
                            ? e.animating ||
                              ((s = parseInt(
                                  A(e.clickedSlide).attr(
                                      "data-swiper-slide-index"
                                  ),
                                  10
                              )),
                              t.centeredSlides
                                  ? r < e.loopedSlides - n / 2 ||
                                    r > e.slides.length - e.loopedSlides + n / 2
                                      ? (e.loopFix(),
                                        (r = i
                                            .children(
                                                `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                                            )
                                            .eq(0)
                                            .index()),
                                        S(() => {
                                            e.slideTo(r);
                                        }))
                                      : e.slideTo(r)
                                  : r > e.slides.length - n
                                  ? (e.loopFix(),
                                    (r = i
                                        .children(
                                            `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                                        )
                                        .eq(0)
                                        .index()),
                                    S(() => {
                                        e.slideTo(r);
                                    }))
                                  : e.slideTo(r))
                            : e.slideTo(r);
                    },
                },
                loop: {
                    loopCreate: function () {
                        const n = this,
                            t = E(),
                            { params: i, $wrapperEl: e } = n,
                            s =
                                0 < e.children().length
                                    ? A(e.children()[0].parentNode)
                                    : e;
                        s.children(
                            `.${i.slideClass}.` + i.slideDuplicateClass
                        ).remove();
                        let r = s.children("." + i.slideClass);
                        if (i.loopFillGroupWithBlank) {
                            const n =
                                i.slidesPerGroup -
                                (r.length % i.slidesPerGroup);
                            if (n !== i.slidesPerGroup) {
                                for (let e = 0; e < n; e += 1) {
                                    const n = A(
                                        t.createElement("div")
                                    ).addClass(
                                        i.slideClass + " " + i.slideBlankClass
                                    );
                                    s.append(n);
                                }
                                r = s.children("." + i.slideClass);
                            }
                        }
                        "auto" !== i.slidesPerView ||
                            i.loopedSlides ||
                            (i.loopedSlides = r.length),
                            (n.loopedSlides = Math.ceil(
                                parseFloat(
                                    i.loopedSlides || i.slidesPerView,
                                    10
                                )
                            )),
                            (n.loopedSlides += i.loopAdditionalSlides),
                            n.loopedSlides > r.length &&
                                (n.loopedSlides = r.length);
                        const o = [],
                            a = [];
                        r.each((e, t) => {
                            const i = A(e);
                            t < n.loopedSlides && a.push(e),
                                t < r.length &&
                                    t >= r.length - n.loopedSlides &&
                                    o.push(e),
                                i.attr("data-swiper-slide-index", t);
                        });
                        for (let e = 0; e < a.length; e += 1)
                            s.append(
                                A(a[e].cloneNode(!0)).addClass(
                                    i.slideDuplicateClass
                                )
                            );
                        for (let e = o.length - 1; 0 <= e; --e)
                            s.prepend(
                                A(o[e].cloneNode(!0)).addClass(
                                    i.slideDuplicateClass
                                )
                            );
                    },
                    loopFix: function () {
                        var e = this,
                            {
                                activeIndex: t,
                                slides: i,
                                loopedSlides: n,
                                allowSlidePrev: s,
                                allowSlideNext: r,
                                snapGrid: o,
                                rtlTranslate: a,
                            } = (e.emit("beforeLoopFix"), e);
                        let l;
                        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                        o = -o[t] - e.getTranslate();
                        t < n
                            ? ((l = i.length - 3 * n + t),
                              (l += n),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 != o &&
                                  e.setTranslate(
                                      (a ? -e.translate : e.translate) - o
                                  ))
                            : t >= i.length - n &&
                              ((l = -i.length + t + n),
                              (l += n),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 != o &&
                                  e.setTranslate(
                                      (a ? -e.translate : e.translate) - o
                                  )),
                            (e.allowSlidePrev = s),
                            (e.allowSlideNext = r),
                            e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        const { $wrapperEl: e, params: t, slides: i } = this;
                        e
                            .children(
                                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.` +
                                    t.slideBlankClass
                            )
                            .remove(),
                            i.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        if (
                            !(
                                this.support.touch ||
                                !this.params.simulateTouch ||
                                (this.params.watchOverflow && this.isLocked) ||
                                this.params.cssMode
                            )
                        ) {
                            const t =
                                "container" === this.params.touchEventsTarget
                                    ? this.el
                                    : this.wrapperEl;
                            (t.style.cursor = "move"),
                                (t.style.cursor = e
                                    ? "-webkit-grabbing"
                                    : "-webkit-grab"),
                                (t.style.cursor = e
                                    ? "-moz-grabbin"
                                    : "-moz-grab"),
                                (t.style.cursor = e ? "grabbing" : "grab");
                        }
                    },
                    unsetGrabCursor: function () {
                        this.support.touch ||
                            (this.params.watchOverflow && this.isLocked) ||
                            this.params.cssMode ||
                            (this[
                                "container" === this.params.touchEventsTarget
                                    ? "el"
                                    : "wrapperEl"
                            ].style.cursor = "");
                    },
                },
                events: {
                    attachEvents: function () {
                        const e = this,
                            t = E(),
                            { params: i, support: n } = e;
                        (e.onTouchStart = function (e) {
                            const n = this,
                                s = E(),
                                r = L(),
                                o = n.touchEventsData,
                                { params: a, touches: l, enabled: t } = n;
                            if (
                                t &&
                                (!n.animating ||
                                    !a.preventInteractionOnTransition)
                            ) {
                                !n.animating &&
                                    a.cssMode &&
                                    a.loop &&
                                    n.loopFix();
                                let t = e,
                                    i = A(
                                        (t = t.originalEvent
                                            ? t.originalEvent
                                            : t).target
                                    );
                                if (
                                    ("wrapper" !== a.touchEventsTarget ||
                                        i.closest(n.wrapperEl).length) &&
                                    ((o.isTouchEvent = "touchstart" === t.type),
                                    (o.isTouchEvent ||
                                        !("which" in t) ||
                                        3 !== t.which) &&
                                        !(
                                            (!o.isTouchEvent &&
                                                "button" in t &&
                                                0 < t.button) ||
                                            (o.isTouched && o.isMoved)
                                        ))
                                ) {
                                    a.noSwipingClass &&
                                        "" !== a.noSwipingClass &&
                                        t.target &&
                                        t.target.shadowRoot &&
                                        e.path &&
                                        e.path[0] &&
                                        (i = A(e.path[0]));
                                    var d =
                                            a.noSwipingSelector ||
                                            "." + a.noSwipingClass,
                                        c = !(
                                            !t.target || !t.target.shadowRoot
                                        );
                                    if (
                                        a.noSwiping &&
                                        (c
                                            ? (function (i, e) {
                                                  return (function e(t) {
                                                      return t &&
                                                          t !== E() &&
                                                          t !== L()
                                                          ? (t = t.assignedSlot
                                                                ? t.assignedSlot
                                                                : t).closest(
                                                                i
                                                            ) ||
                                                                e(
                                                                    t.getRootNode()
                                                                        .host
                                                                )
                                                          : null;
                                                  })(
                                                      (e =
                                                          void 0 === e
                                                              ? this
                                                              : e)
                                                  );
                                              })(d, t.target)
                                            : i.closest(d)[0])
                                    )
                                        n.allowClick = !0;
                                    else if (
                                        !a.swipeHandler ||
                                        i.closest(a.swipeHandler)[0]
                                    ) {
                                        (l.currentX = (
                                            "touchstart" === t.type
                                                ? t.targetTouches[0]
                                                : t
                                        ).pageX),
                                            (l.currentY = (
                                                "touchstart" === t.type
                                                    ? t.targetTouches[0]
                                                    : t
                                            ).pageY);
                                        var c = l.currentX,
                                            d = l.currentY,
                                            u =
                                                a.edgeSwipeDetection ||
                                                a.iOSEdgeSwipeDetection,
                                            p =
                                                a.edgeSwipeThreshold ||
                                                a.iOSEdgeSwipeThreshold;
                                        if (
                                            u &&
                                            (c <= p || c >= r.innerWidth - p)
                                        ) {
                                            if ("prevent" !== u) return;
                                            e.preventDefault();
                                        }
                                        if (
                                            (Object.assign(o, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0,
                                            }),
                                            (l.startX = c),
                                            (l.startY = d),
                                            (o.touchStartTime = v()),
                                            (n.allowClick = !0),
                                            n.updateSize(),
                                            (n.swipeDirection = void 0),
                                            0 < a.threshold &&
                                                (o.allowThresholdMove = !1),
                                            "touchstart" !== t.type)
                                        ) {
                                            let e = !0;
                                            i.is(o.focusableElements) &&
                                                ((e = !1),
                                                "SELECT" === i[0].nodeName &&
                                                    (o.isTouched = !1)),
                                                s.activeElement &&
                                                    A(s.activeElement).is(
                                                        o.focusableElements
                                                    ) &&
                                                    s.activeElement !== i[0] &&
                                                    s.activeElement.blur();
                                            const E =
                                                e &&
                                                n.allowTouchMove &&
                                                a.touchStartPreventDefault;
                                            (!a.touchStartForcePreventDefault &&
                                                !E) ||
                                                i[0].isContentEditable ||
                                                t.preventDefault();
                                        }
                                        n.params.freeMode &&
                                            n.params.freeMode.enabled &&
                                            n.freeMode &&
                                            n.animating &&
                                            !a.cssMode &&
                                            n.freeMode.onTouchStart(),
                                            n.emit("touchStart", t);
                                    }
                                }
                            }
                        }.bind(e)),
                            (e.onTouchMove = function (s) {
                                const e = E(),
                                    r = this,
                                    o = r.touchEventsData,
                                    {
                                        params: a,
                                        touches: l,
                                        rtlTranslate: d,
                                        enabled: t,
                                    } = r;
                                if (t) {
                                    let n = s;
                                    if (
                                        (n.originalEvent &&
                                            (n = n.originalEvent),
                                        o.isTouched)
                                    ) {
                                        if (
                                            !o.isTouchEvent ||
                                            "touchmove" === n.type
                                        ) {
                                            var s =
                                                    "touchmove" === n.type &&
                                                    n.targetTouches &&
                                                    (n.targetTouches[0] ||
                                                        n.changedTouches[0]),
                                                c = (
                                                    "touchmove" === n.type
                                                        ? s
                                                        : n
                                                ).pageX,
                                                s = (
                                                    "touchmove" === n.type
                                                        ? s
                                                        : n
                                                ).pageY;
                                            if (n.preventedByNestedSwiper)
                                                return (
                                                    (l.startX = c),
                                                    void (l.startY = s)
                                                );
                                            if (!r.allowTouchMove)
                                                return (
                                                    A(n.target).is(
                                                        o.focusableElements
                                                    ) || (r.allowClick = !1),
                                                    void (
                                                        o.isTouched &&
                                                        (Object.assign(l, {
                                                            startX: c,
                                                            startY: s,
                                                            currentX: c,
                                                            currentY: s,
                                                        }),
                                                        (o.touchStartTime =
                                                            v()))
                                                    )
                                                );
                                            if (
                                                o.isTouchEvent &&
                                                a.touchReleaseOnEdges &&
                                                !a.loop
                                            )
                                                if (r.isVertical()) {
                                                    if (
                                                        (s < l.startY &&
                                                            r.translate <=
                                                                r.maxTranslate()) ||
                                                        (s > l.startY &&
                                                            r.translate >=
                                                                r.minTranslate())
                                                    )
                                                        return (
                                                            (o.isTouched = !1),
                                                            void (o.isMoved =
                                                                !1)
                                                        );
                                                } else if (
                                                    (c < l.startX &&
                                                        r.translate <=
                                                            r.maxTranslate()) ||
                                                    (c > l.startX &&
                                                        r.translate >=
                                                            r.minTranslate())
                                                )
                                                    return;
                                            if (
                                                o.isTouchEvent &&
                                                e.activeElement &&
                                                n.target === e.activeElement &&
                                                A(n.target).is(
                                                    o.focusableElements
                                                )
                                            )
                                                return (
                                                    (o.isMoved = !0),
                                                    void (r.allowClick = !1)
                                                );
                                            if (
                                                (o.allowTouchCallbacks &&
                                                    r.emit("touchMove", n),
                                                !(
                                                    n.targetTouches &&
                                                    1 < n.targetTouches.length
                                                ))
                                            ) {
                                                (l.currentX = c),
                                                    (l.currentY = s);
                                                var i,
                                                    c = l.currentX - l.startX,
                                                    s = l.currentY - l.startY;
                                                if (
                                                    !(
                                                        r.params.threshold &&
                                                        Math.sqrt(
                                                            c ** 2 + s ** 2
                                                        ) < r.params.threshold
                                                    )
                                                )
                                                    if (
                                                        (void 0 ===
                                                            o.isScrolling &&
                                                            ((r.isHorizontal() &&
                                                                l.currentY ===
                                                                    l.startY) ||
                                                            (r.isVertical() &&
                                                                l.currentX ===
                                                                    l.startX)
                                                                ? (o.isScrolling =
                                                                      !1)
                                                                : 25 <=
                                                                      c * c +
                                                                          s *
                                                                              s &&
                                                                  ((i =
                                                                      (180 *
                                                                          Math.atan2(
                                                                              Math.abs(
                                                                                  s
                                                                              ),
                                                                              Math.abs(
                                                                                  c
                                                                              )
                                                                          )) /
                                                                      Math.PI),
                                                                  (o.isScrolling =
                                                                      r.isHorizontal()
                                                                          ? i >
                                                                            a.touchAngle
                                                                          : 90 -
                                                                                i >
                                                                            a.touchAngle))),
                                                        o.isScrolling &&
                                                            r.emit(
                                                                "touchMoveOpposite",
                                                                n
                                                            ),
                                                        void 0 !==
                                                            o.startMoving ||
                                                            (l.currentX ===
                                                                l.startX &&
                                                                l.currentY ===
                                                                    l.startY) ||
                                                            (o.startMoving =
                                                                !0),
                                                        o.isScrolling)
                                                    )
                                                        o.isTouched = !1;
                                                    else if (o.startMoving) {
                                                        (r.allowClick = !1),
                                                            !a.cssMode &&
                                                                n.cancelable &&
                                                                n.preventDefault(),
                                                            a.touchMoveStopPropagation &&
                                                                !a.nested &&
                                                                n.stopPropagation(),
                                                            o.isMoved ||
                                                                (a.loop &&
                                                                    !a.cssMode &&
                                                                    r.loopFix(),
                                                                (o.startTranslate =
                                                                    r.getTranslate()),
                                                                r.setTransition(
                                                                    0
                                                                ),
                                                                r.animating &&
                                                                    r.$wrapperEl.trigger(
                                                                        "webkitTransitionEnd transitionend"
                                                                    ),
                                                                (o.allowMomentumBounce =
                                                                    !1),
                                                                !a.grabCursor ||
                                                                    (!0 !==
                                                                        r.allowSlideNext &&
                                                                        !0 !==
                                                                            r.allowSlidePrev) ||
                                                                    r.setGrabCursor(
                                                                        !0
                                                                    ),
                                                                r.emit(
                                                                    "sliderFirstMove",
                                                                    n
                                                                )),
                                                            r.emit(
                                                                "sliderMove",
                                                                n
                                                            ),
                                                            (o.isMoved = !0);
                                                        let e = r.isHorizontal()
                                                                ? c
                                                                : s,
                                                            t =
                                                                ((l.diff = e),
                                                                (e *=
                                                                    a.touchRatio),
                                                                d && (e = -e),
                                                                (r.swipeDirection =
                                                                    0 < e
                                                                        ? "prev"
                                                                        : "next"),
                                                                (o.currentTranslate =
                                                                    e +
                                                                    o.startTranslate),
                                                                !0),
                                                            i =
                                                                a.resistanceRatio;
                                                        if (
                                                            (a.touchReleaseOnEdges &&
                                                                (i = 0),
                                                            0 < e &&
                                                            o.currentTranslate >
                                                                r.minTranslate()
                                                                ? ((t = !1),
                                                                  a.resistance &&
                                                                      (o.currentTranslate =
                                                                          r.minTranslate() -
                                                                          1 +
                                                                          (-r.minTranslate() +
                                                                              o.startTranslate +
                                                                              e) **
                                                                              i))
                                                                : e < 0 &&
                                                                  o.currentTranslate <
                                                                      r.maxTranslate() &&
                                                                  ((t = !1),
                                                                  a.resistance &&
                                                                      (o.currentTranslate =
                                                                          r.maxTranslate() +
                                                                          1 -
                                                                          (r.maxTranslate() -
                                                                              o.startTranslate -
                                                                              e) **
                                                                              i)),
                                                            t &&
                                                                (n.preventedByNestedSwiper =
                                                                    !0),
                                                            !r.allowSlideNext &&
                                                                "next" ===
                                                                    r.swipeDirection &&
                                                                o.currentTranslate <
                                                                    o.startTranslate &&
                                                                (o.currentTranslate =
                                                                    o.startTranslate),
                                                            !r.allowSlidePrev &&
                                                                "prev" ===
                                                                    r.swipeDirection &&
                                                                o.currentTranslate >
                                                                    o.startTranslate &&
                                                                (o.currentTranslate =
                                                                    o.startTranslate),
                                                            r.allowSlidePrev ||
                                                                r.allowSlideNext ||
                                                                (o.currentTranslate =
                                                                    o.startTranslate),
                                                            0 < a.threshold)
                                                        ) {
                                                            if (
                                                                !(
                                                                    Math.abs(
                                                                        e
                                                                    ) >
                                                                        a.threshold ||
                                                                    o.allowThresholdMove
                                                                )
                                                            )
                                                                return void (o.currentTranslate =
                                                                    o.startTranslate);
                                                            if (
                                                                !o.allowThresholdMove
                                                            )
                                                                return (
                                                                    (o.allowThresholdMove =
                                                                        !0),
                                                                    (l.startX =
                                                                        l.currentX),
                                                                    (l.startY =
                                                                        l.currentY),
                                                                    (o.currentTranslate =
                                                                        o.startTranslate),
                                                                    void (l.diff =
                                                                        r.isHorizontal()
                                                                            ? l.currentX -
                                                                              l.startX
                                                                            : l.currentY -
                                                                              l.startY)
                                                                );
                                                        }
                                                        a.followFinger &&
                                                            !a.cssMode &&
                                                            (((a.freeMode &&
                                                                a.freeMode
                                                                    .enabled &&
                                                                r.freeMode) ||
                                                                a.watchSlidesProgress) &&
                                                                (r.updateActiveIndex(),
                                                                r.updateSlidesClasses()),
                                                            r.params.freeMode &&
                                                                a.freeMode
                                                                    .enabled &&
                                                                r.freeMode &&
                                                                r.freeMode.onTouchMove(),
                                                            r.updateProgress(
                                                                o.currentTranslate
                                                            ),
                                                            r.setTranslate(
                                                                o.currentTranslate
                                                            ));
                                                    }
                                            }
                                        }
                                    } else
                                        o.startMoving &&
                                            o.isScrolling &&
                                            r.emit("touchMoveOpposite", n);
                                }
                            }.bind(e)),
                            (e.onTouchEnd = function (r) {
                                const o = this,
                                    e = o.touchEventsData,
                                    {
                                        params: a,
                                        touches: t,
                                        rtlTranslate: i,
                                        slidesGrid: l,
                                        enabled: n,
                                    } = o;
                                if (n) {
                                    let s = r;
                                    if (
                                        (s.originalEvent &&
                                            (s = s.originalEvent),
                                        e.allowTouchCallbacks &&
                                            o.emit("touchEnd", s),
                                        (e.allowTouchCallbacks = !1),
                                        !e.isTouched)
                                    )
                                        return (
                                            e.isMoved &&
                                                a.grabCursor &&
                                                o.setGrabCursor(!1),
                                            (e.isMoved = !1),
                                            void (e.startMoving = !1)
                                        );
                                    a.grabCursor &&
                                        e.isMoved &&
                                        e.isTouched &&
                                        (!0 === o.allowSlideNext ||
                                            !0 === o.allowSlidePrev) &&
                                        o.setGrabCursor(!1);
                                    var d,
                                        c = v(),
                                        u = c - e.touchStartTime;
                                    if (o.allowClick) {
                                        const r =
                                            s.path ||
                                            (s.composedPath &&
                                                s.composedPath());
                                        o.updateClickedSlide(
                                            (r && r[0]) || s.target
                                        ),
                                            o.emit("tap click", s),
                                            u < 300 &&
                                                c - e.lastClickTime < 300 &&
                                                o.emit(
                                                    "doubleTap doubleClick",
                                                    s
                                                );
                                    }
                                    if (
                                        ((e.lastClickTime = v()),
                                        S(() => {
                                            o.destroyed || (o.allowClick = !0);
                                        }),
                                        !e.isTouched ||
                                            !e.isMoved ||
                                            !o.swipeDirection ||
                                            0 === t.diff ||
                                            e.currentTranslate ===
                                                e.startTranslate)
                                    )
                                        return (
                                            (e.isTouched = !1),
                                            (e.isMoved = !1),
                                            void (e.startMoving = !1)
                                        );
                                    if (
                                        ((e.isTouched = !1),
                                        (e.isMoved = !1),
                                        (e.startMoving = !1),
                                        (d = a.followFinger
                                            ? i
                                                ? o.translate
                                                : -o.translate
                                            : -e.currentTranslate),
                                        !a.cssMode)
                                    )
                                        if (
                                            o.params.freeMode &&
                                            a.freeMode.enabled
                                        )
                                            o.freeMode.onTouchEnd({
                                                currentPos: d,
                                            });
                                        else {
                                            let t = 0,
                                                i = o.slidesSizesGrid[0];
                                            for (
                                                let e = 0;
                                                e < l.length;
                                                e +=
                                                    e < a.slidesPerGroupSkip
                                                        ? 1
                                                        : a.slidesPerGroup
                                            ) {
                                                const o =
                                                    e < a.slidesPerGroupSkip - 1
                                                        ? 1
                                                        : a.slidesPerGroup;
                                                void 0 !== l[e + o]
                                                    ? d >= l[e] &&
                                                      d < l[e + o] &&
                                                      ((t = e),
                                                      (i = l[e + o] - l[e]))
                                                    : d >= l[e] &&
                                                      ((t = e),
                                                      (i =
                                                          l[l.length - 1] -
                                                          l[l.length - 2]));
                                            }
                                            let e = null,
                                                n = null;
                                            a.rewind &&
                                                (o.isBeginning
                                                    ? (n =
                                                          o.params.virtual &&
                                                          o.params.virtual
                                                              .enabled &&
                                                          o.virtual
                                                              ? o.virtual.slides
                                                                    .length - 1
                                                              : o.slides
                                                                    .length - 1)
                                                    : o.isEnd && (e = 0));
                                            (r = (d - l[t]) / i),
                                                (c =
                                                    t < a.slidesPerGroupSkip - 1
                                                        ? 1
                                                        : a.slidesPerGroup);
                                            u > a.longSwipesMs
                                                ? a.longSwipes
                                                    ? ("next" ===
                                                          o.swipeDirection &&
                                                          (r >=
                                                          a.longSwipesRatio
                                                              ? o.slideTo(
                                                                    a.rewind &&
                                                                        o.isEnd
                                                                        ? e
                                                                        : t + c
                                                                )
                                                              : o.slideTo(t)),
                                                      "prev" ===
                                                          o.swipeDirection &&
                                                          (r >
                                                          1 - a.longSwipesRatio
                                                              ? o.slideTo(t + c)
                                                              : null !== n &&
                                                                r < 0 &&
                                                                Math.abs(r) >
                                                                    a.longSwipesRatio
                                                              ? o.slideTo(n)
                                                              : o.slideTo(t)))
                                                    : o.slideTo(o.activeIndex)
                                                : a.shortSwipes
                                                ? !o.navigation ||
                                                  (s.target !==
                                                      o.navigation.nextEl &&
                                                      s.target !==
                                                          o.navigation.prevEl)
                                                    ? ("next" ===
                                                          o.swipeDirection &&
                                                          o.slideTo(
                                                              null !== e
                                                                  ? e
                                                                  : t + c
                                                          ),
                                                      "prev" ===
                                                          o.swipeDirection &&
                                                          o.slideTo(
                                                              null !== n ? n : t
                                                          ))
                                                    : s.target ===
                                                      o.navigation.nextEl
                                                    ? o.slideTo(t + c)
                                                    : o.slideTo(t)
                                                : o.slideTo(o.activeIndex);
                                        }
                                }
                            }.bind(e)),
                            i.cssMode &&
                                (e.onScroll = function () {
                                    var e = this,
                                        {
                                            wrapperEl: t,
                                            rtlTranslate: i,
                                            enabled: n,
                                        } = e;
                                    n &&
                                        ((e.previousTranslate = e.translate),
                                        e.isHorizontal()
                                            ? (e.translate = -t.scrollLeft)
                                            : (e.translate = -t.scrollTop),
                                        -0 === e.translate && (e.translate = 0),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses(),
                                        (0 ==
                                        (n =
                                            e.maxTranslate() - e.minTranslate())
                                            ? 0
                                            : (e.translate - e.minTranslate()) /
                                              n) !== e.progress &&
                                            e.updateProgress(
                                                i ? -e.translate : e.translate
                                            ),
                                        e.emit(
                                            "setTranslate",
                                            e.translate,
                                            !1
                                        ));
                                }.bind(e)),
                            (e.onClick = function (e) {
                                this.enabled &&
                                    !this.allowClick &&
                                    (this.params.preventClicks &&
                                        e.preventDefault(),
                                    this.params.preventClicksPropagation &&
                                        this.animating &&
                                        (e.stopPropagation(),
                                        e.stopImmediatePropagation()));
                            }.bind(e)),
                            n.touch &&
                                !g &&
                                (t.addEventListener("touchstart", _), (g = !0)),
                            m(e, "on");
                    },
                    detachEvents: function () {
                        m(this, "off");
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            {
                                activeIndex: t,
                                initialized: i,
                                loopedSlides: n = 0,
                                params: s,
                                $el: r,
                            } = e,
                            o = s.breakpoints;
                        var a, l, d, c, u;
                        !o ||
                            0 === Object.keys(o).length ||
                            ((a = e.getBreakpoint(
                                o,
                                e.params.breakpointsBase,
                                e.el
                            )) &&
                                e.currentBreakpoint !== a &&
                                ((l =
                                    (a in o ? o[a] : void 0) ||
                                    e.originalParams),
                                (u = b(e, s)),
                                (c = b(e, l)),
                                (d = s.enabled),
                                u && !c
                                    ? (r.removeClass(
                                          `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
                                      ),
                                      e.emitContainerClasses())
                                    : !u &&
                                      c &&
                                      (r.addClass(
                                          s.containerModifierClass + "grid"
                                      ),
                                      ((l.grid.fill &&
                                          "column" === l.grid.fill) ||
                                          (!l.grid.fill &&
                                              "column" === s.grid.fill)) &&
                                          r.addClass(
                                              s.containerModifierClass +
                                                  "grid-column"
                                          ),
                                      e.emitContainerClasses()),
                                (u =
                                    l.direction && l.direction !== s.direction),
                                (c =
                                    s.loop &&
                                    (l.slidesPerView !== s.slidesPerView || u)),
                                u && i && e.changeDirection(),
                                p(e.params, l),
                                (u = e.params.enabled),
                                Object.assign(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev,
                                }),
                                d && !u ? e.disable() : !d && u && e.enable(),
                                (e.currentBreakpoint = a),
                                e.emit("_beforeBreakpoint", l),
                                c &&
                                    i &&
                                    (e.loopDestroy(),
                                    e.loopCreate(),
                                    e.updateSlides(),
                                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", l)));
                    },
                    getBreakpoint: function (e, i, n) {
                        if (
                            (void 0 === i && (i = "window"),
                            e && ("container" !== i || n))
                        ) {
                            let t = !1;
                            const s = L(),
                                r =
                                    "window" === i
                                        ? s.innerHeight
                                        : n.clientHeight,
                                o = Object.keys(e).map((e) => {
                                    var t;
                                    return "string" == typeof e &&
                                        0 === e.indexOf("@")
                                        ? ((t = parseFloat(e.substr(1))),
                                          { value: r * t, point: e })
                                        : { value: e, point: e };
                                });
                            o.sort(
                                (e, t) =>
                                    parseInt(e.value, 10) -
                                    parseInt(t.value, 10)
                            );
                            for (let e = 0; e < o.length; e += 1) {
                                const { point: L, value: r } = o[e];
                                "window" === i
                                    ? s.matchMedia(`(min-width: ${r}px)`)
                                          .matches && (t = L)
                                    : r <= n.clientWidth && (t = L);
                            }
                            return t || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            { isLocked: t, params: i } = e,
                            n = i["slidesOffsetBefore"];
                        if (n) {
                            const t = e.slides.length - 1,
                                i =
                                    e.slidesGrid[t] +
                                    e.slidesSizesGrid[t] +
                                    2 * n;
                            e.isLocked = e.size > i;
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext &&
                            (e.allowSlideNext = !e.isLocked),
                            !0 === i.allowSlidePrev &&
                                (e.allowSlidePrev = !e.isLocked),
                            t && t !== e.isLocked && (e.isEnd = !1),
                            t !== e.isLocked &&
                                e.emit(e.isLocked ? "lock" : "unlock");
                    },
                },
                classes: {
                    addClasses: function () {
                        const {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: n,
                                device: s,
                                support: r,
                            } = this,
                            o = (function (e, i) {
                                const n = [];
                                return (
                                    e.forEach((t) => {
                                        "object" == typeof t
                                            ? Object.keys(t).forEach((e) => {
                                                  t[e] && n.push(i + e);
                                              })
                                            : "string" == typeof t &&
                                              n.push(i + t);
                                    }),
                                    n
                                );
                            })(
                                [
                                    "initialized",
                                    t.direction,
                                    { "pointer-events": !r.touch },
                                    {
                                        "free-mode":
                                            this.params.freeMode &&
                                            t.freeMode.enabled,
                                    },
                                    { autoheight: t.autoHeight },
                                    { rtl: i },
                                    { grid: t.grid && 1 < t.grid.rows },
                                    {
                                        "grid-column":
                                            t.grid &&
                                            1 < t.grid.rows &&
                                            "column" === t.grid.fill,
                                    },
                                    { android: s.android },
                                    { ios: s.ios },
                                    { "css-mode": t.cssMode },
                                    { centered: t.cssMode && t.centeredSlides },
                                ],
                                t.containerModifierClass
                            );
                        e.push(...o),
                            n.addClass([...e].join(" ")),
                            this.emitContainerClasses();
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, i, n, s, r) {
                        const o = L();
                        let a;
                        function l() {
                            r && r();
                        }
                        !(A(e).parent("picture")[0] || (e.complete && s)) && t
                            ? (((a = new o.Image()).onload = l),
                              (a.onerror = l),
                              n && (a.sizes = n),
                              i && (a.srcset = i),
                              t && (a.src = t))
                            : l();
                    },
                    preloadImages: function () {
                        const t = this;
                        function i() {
                            null != t &&
                                t &&
                                !t.destroyed &&
                                (void 0 !== t.imagesLoaded &&
                                    (t.imagesLoaded += 1),
                                t.imagesLoaded === t.imagesToLoad.length &&
                                    (t.params.updateOnImagesReady && t.update(),
                                    t.emit("imagesReady")));
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (let e = 0; e < t.imagesToLoad.length; e += 1) {
                            const n = t.imagesToLoad[e];
                            t.loadImage(
                                n,
                                n.currentSrc || n.getAttribute("src"),
                                n.srcset || n.getAttribute("srcset"),
                                n.sizes || n.getAttribute("sizes"),
                                !0,
                                i
                            );
                        }
                    },
                },
            },
            C = {};
        class T {
            constructor() {
                let t, i;
                for (
                    var h, e = arguments.length, n = new Array(e), s = 0;
                    s < e;
                    s++
                )
                    n[s] = arguments[s];
                if (
                    (1 === n.length &&
                    n[0].constructor &&
                    "Object" ===
                        Object.prototype.toString.call(n[0]).slice(8, -1)
                        ? (i = n[0])
                        : ([t, i] = n),
                    (i = p({}, (i = i || {}))),
                    t && !i.el && (i.el = t),
                    i.el && 1 < A(i.el).length)
                ) {
                    const t = [];
                    return (
                        A(i.el).each((e) => {
                            e = p({}, i, { el: e });
                            t.push(new T(e));
                        }),
                        t
                    );
                }
                const r = this,
                    o =
                        ((r.__swiper__ = !0),
                        (r.support = f()),
                        (r.device =
                            (void 0 === (h = { userAgent: i.userAgent }) &&
                                (h = {}),
                            (c =
                                c ||
                                (function () {
                                    var e = (void 0 === h ? {} : h)[
                                        "userAgent"
                                    ];
                                    const t = f(),
                                        i = L(),
                                        n = i.navigator.platform,
                                        s = e || i.navigator.userAgent,
                                        r = { ios: !1, android: !1 },
                                        o = i.screen.width,
                                        a = i.screen.height,
                                        l = s.match(
                                            /(Android);?[\s\/]+([\d.]+)?/
                                        );
                                    let d = s.match(/(iPad).*OS\s([\d_]+)/);
                                    var e = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                                        c =
                                            !d &&
                                            s.match(
                                                /(iPhone\sOS|iOS)\s([\d_]+)/
                                            ),
                                        u = "Win32" === n;
                                    let p = "MacIntel" === n;
                                    return (
                                        !d &&
                                            p &&
                                            t.touch &&
                                            0 <=
                                                [
                                                    "1024x1366",
                                                    "1366x1024",
                                                    "834x1194",
                                                    "1194x834",
                                                    "834x1112",
                                                    "1112x834",
                                                    "768x1024",
                                                    "1024x768",
                                                    "820x1180",
                                                    "1180x820",
                                                    "810x1080",
                                                    "1080x810",
                                                ].indexOf(o + "x" + a) &&
                                            ((d = (d =
                                                s.match(
                                                    /(Version)\/([\d.]+)/
                                                )) || [0, 1, "13_0_0"]),
                                            (p = !1)),
                                        l &&
                                            !u &&
                                            ((r.os = "android"),
                                            (r.android = !0)),
                                        (d || c || e) &&
                                            ((r.os = "ios"), (r.ios = !0)),
                                        r
                                    );
                                })()))),
                        (r.browser = u =
                            u ||
                            (function () {
                                const t = L();
                                return {
                                    isSafari: (function () {
                                        const e =
                                            t.navigator.userAgent.toLowerCase();
                                        return (
                                            0 <= e.indexOf("safari") &&
                                            e.indexOf("chrome") < 0 &&
                                            e.indexOf("android") < 0
                                        );
                                    })(),
                                    isWebView:
                                        /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                            t.navigator.userAgent
                                        ),
                                };
                            })()),
                        (r.eventsListeners = {}),
                        (r.eventsAnyListeners = []),
                        (r.modules = [...r.__modules__]),
                        i.modules &&
                            Array.isArray(i.modules) &&
                            r.modules.push(...i.modules),
                        {});
                r.modules.forEach((e) => {
                    var n, s;
                    e({
                        swiper: r,
                        extendParams:
                            ((n = i),
                            (s = o),
                            function (e) {
                                void 0 === e && (e = {});
                                var t = Object.keys(e)[0],
                                    i = e[t];
                                "object" == typeof i &&
                                    null !== i &&
                                    (0 <=
                                        [
                                            "navigation",
                                            "pagination",
                                            "scrollbar",
                                        ].indexOf(t) &&
                                        !0 === n[t] &&
                                        (n[t] = { auto: !0 }),
                                    t in n &&
                                        "enabled" in i &&
                                        (!0 === n[t] &&
                                            (n[t] = { enabled: !0 }),
                                        "object" != typeof n[t] ||
                                            "enabled" in n[t] ||
                                            (n[t].enabled = !0),
                                        n[t] || (n[t] = { enabled: !1 }))),
                                    p(s, e);
                            }),
                        on: r.on.bind(r),
                        once: r.once.bind(r),
                        off: r.off.bind(r),
                        emit: r.emit.bind(r),
                    });
                });
                var a,
                    l = p({}, w, o);
                return (
                    (r.params = p({}, l, C, i)),
                    (r.originalParams = p({}, r.params)),
                    (r.passedParams = p({}, i)),
                    r.params &&
                        r.params.on &&
                        Object.keys(r.params.on).forEach((e) => {
                            r.on(e, r.params.on[e]);
                        }),
                    r.params && r.params.onAny && r.onAny(r.params.onAny),
                    (r.$ = A),
                    Object.assign(r, {
                        enabled: r.params.enabled,
                        el: t,
                        classNames: [],
                        slides: A(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents:
                            ((l = [
                                "touchstart",
                                "touchmove",
                                "touchend",
                                "touchcancel",
                            ]),
                            (a = ["pointerdown", "pointermove", "pointerup"]),
                            (r.touchEventsTouch = {
                                start: l[0],
                                move: l[1],
                                end: l[2],
                                cancel: l[3],
                            }),
                            (r.touchEventsDesktop = {
                                start: a[0],
                                move: a[1],
                                end: a[2],
                            }),
                            r.support.touch || !r.params.simulateTouch
                                ? r.touchEventsTouch
                                : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: r.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0,
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    r.emit("_swiper"),
                    r.params.init && r.init(),
                    r
                );
            }
            enable() {
                this.enabled ||
                    ((this.enabled = !0),
                    this.params.grabCursor && this.setGrabCursor(),
                    this.emit("enable"));
            }
            disable() {
                this.enabled &&
                    ((this.enabled = !1),
                    this.params.grabCursor && this.unsetGrabCursor(),
                    this.emit("disable"));
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                var i = this.minTranslate(),
                    e = (this.maxTranslate() - i) * e + i;
                this.translateTo(e, void 0 === t ? 0 : t),
                    this.updateActiveIndex(),
                    this.updateSlidesClasses();
            }
            emitContainerClasses() {
                const t = this;
                if (t.params._emitClasses && t.el) {
                    const e = t.el.className
                        .split(" ")
                        .filter(
                            (e) =>
                                0 === e.indexOf("swiper") ||
                                0 === e.indexOf(t.params.containerModifierClass)
                        );
                    t.emit("_containerClasses", e.join(" "));
                }
            }
            getSlideClasses(e) {
                const t = this;
                return e.className
                    .split(" ")
                    .filter(
                        (e) =>
                            0 === e.indexOf("swiper-slide") ||
                            0 === e.indexOf(t.params.slideClass)
                    )
                    .join(" ");
            }
            emitSlidesClasses() {
                const i = this;
                if (i.params._emitClasses && i.el) {
                    const n = [];
                    i.slides.each((e) => {
                        var t = i.getSlideClasses(e);
                        n.push({ slideEl: e, classNames: t }),
                            i.emit("_slideClass", e, t);
                    }),
                        i.emit("_slideClasses", n);
                }
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                var {
                    params: i,
                    slides: n,
                    slidesGrid: s,
                    slidesSizesGrid: r,
                    size: o,
                    activeIndex: a,
                } = this;
                let l = 1;
                if (i.centeredSlides) {
                    let t,
                        i = n[a].swiperSlideSize;
                    for (let e = a + 1; e < n.length; e += 1)
                        n[e] &&
                            !t &&
                            ((i += n[e].swiperSlideSize),
                            (l += 1),
                            i > o && (t = !0));
                    for (let e = a - 1; 0 <= e; --e)
                        n[e] &&
                            !t &&
                            ((i += n[e].swiperSlideSize),
                            (l += 1),
                            i > o && (t = !0));
                } else if ("current" === e)
                    for (let e = a + 1; e < n.length; e += 1)
                        (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) &&
                            (l += 1);
                else
                    for (let e = a - 1; 0 <= e; --e)
                        s[a] - s[e] < o && (l += 1);
                return l;
            }
            update() {
                const t = this;
                var e, i;
                function n() {
                    var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                        e = Math.min(
                            Math.max(e, t.maxTranslate()),
                            t.minTranslate()
                        );
                    t.setTranslate(e),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                }
                t &&
                    !t.destroyed &&
                    (({ snapGrid: e, params: i } = t),
                    i.breakpoints && t.setBreakpoint(),
                    t.updateSize(),
                    t.updateSlides(),
                    t.updateProgress(),
                    t.updateSlidesClasses(),
                    t.params.freeMode && t.params.freeMode.enabled
                        ? (n(), t.params.autoHeight && t.updateAutoHeight())
                        : (("auto" === t.params.slidesPerView ||
                              1 < t.params.slidesPerView) &&
                          t.isEnd &&
                          !t.params.centeredSlides
                              ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                              : t.slideTo(t.activeIndex, 0, !1, !0)) || n(),
                    i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
                    t.emit("update"));
            }
            changeDirection(t, e) {
                void 0 === e && (e = !0);
                var i = this,
                    n = i.params.direction;
                return (
                    (t =
                        t ||
                        ("horizontal" === n ? "vertical" : "horizontal")) ===
                        n ||
                        ("horizontal" !== t && "vertical" !== t) ||
                        (i.$el
                            .removeClass(
                                "" + i.params.containerModifierClass + n
                            )
                            .addClass("" + i.params.containerModifierClass + t),
                        i.emitContainerClasses(),
                        (i.params.direction = t),
                        i.slides.each((e) => {
                            "vertical" === t
                                ? (e.style.width = "")
                                : (e.style.height = "");
                        }),
                        i.emit("changeDirection"),
                        e && i.update()),
                    i
                );
            }
            mount(t) {
                const e = this;
                if (e.mounted) return !0;
                const i = A(t || e.params.el);
                if (!(t = i[0])) return !1;
                t.swiper = e;
                const n = () =>
                    "." +
                    (e.params.wrapperClass || "").trim().split(" ").join(".");
                let s = (() => {
                    if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                        const e = A(t.shadowRoot.querySelector(n()));
                        return (e.children = (e) => i.children(e)), e;
                    }
                    return i.children(n());
                })();
                if (0 === s.length && e.params.createElements) {
                    const t = E().createElement("div");
                    (s = A(t)),
                        (t.className = e.params.wrapperClass),
                        i.append(t),
                        i.children("." + e.params.slideClass).each((e) => {
                            s.append(e);
                        });
                }
                return (
                    Object.assign(e, {
                        $el: i,
                        el: t,
                        $wrapperEl: s,
                        wrapperEl: s[0],
                        mounted: !0,
                        rtl:
                            "rtl" === t.dir.toLowerCase() ||
                            "rtl" === i.css("direction"),
                        rtlTranslate:
                            "horizontal" === e.params.direction &&
                            ("rtl" === t.dir.toLowerCase() ||
                                "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === s.css("display"),
                    }),
                    !0
                );
            }
            init(e) {
                var t = this;
                return (
                    t.initialized ||
                        (!1 !== t.mount(e) &&
                            (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor &&
                                t.enabled &&
                                t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop
                                ? t.slideTo(
                                      t.params.initialSlide + t.loopedSlides,
                                      0,
                                      t.params.runCallbacksOnInit,
                                      !1,
                                      !0
                                  )
                                : t.slideTo(
                                      t.params.initialSlide,
                                      0,
                                      t.params.runCallbacksOnInit,
                                      !1,
                                      !0
                                  ),
                            t.attachEvents(),
                            (t.initialized = !0),
                            t.emit("init"),
                            t.emit("afterInit"))),
                    t
                );
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const i = this,
                    { params: n, $el: s, $wrapperEl: r, slides: o } = i;
                if (void 0 !== i.params && !i.destroyed) {
                    if (
                        (i.emit("beforeDestroy"),
                        (i.initialized = !1),
                        i.detachEvents(),
                        n.loop && i.loopDestroy(),
                        t &&
                            (i.removeClasses(),
                            s.removeAttr("style"),
                            r.removeAttr("style"),
                            o &&
                                o.length &&
                                o
                                    .removeClass(
                                        [
                                            n.slideVisibleClass,
                                            n.slideActiveClass,
                                            n.slideNextClass,
                                            n.slidePrevClass,
                                        ].join(" ")
                                    )
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")),
                        i.emit("destroy"),
                        Object.keys(i.eventsListeners).forEach((e) => {
                            i.off(e);
                        }),
                        !1 !== e)
                    ) {
                        i.$el[0].swiper = null;
                        {
                            const a = i;
                            Object.keys(a).forEach((e) => {
                                try {
                                    a[e] = null;
                                } catch (e) {}
                                try {
                                    delete a[e];
                                } catch (e) {}
                            });
                        }
                    }
                    i.destroyed = !0;
                }
                return null;
            }
            static extendDefaults(e) {
                p(C, e);
            }
            static get extendedDefaults() {
                return C;
            }
            static get defaults() {
                return w;
            }
            static installModule(e) {
                T.prototype.__modules__ || (T.prototype.__modules__ = []);
                const t = T.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
            }
            static use(e) {
                return (
                    Array.isArray(e)
                        ? e.forEach((e) => T.installModule(e))
                        : T.installModule(e),
                    T
                );
            }
        }
        function M(i, n, s, r) {
            const o = E();
            return (
                i.params.createElements &&
                    Object.keys(r).forEach((t) => {
                        if (!s[t] && !0 === s.auto) {
                            let e = i.$el.children("." + r[t])[0];
                            e ||
                                (((e = o.createElement("div")).className =
                                    r[t]),
                                i.$el.append(e)),
                                (s[t] = e),
                                (n[t] = e);
                        }
                    }),
                s
            );
        }
        function I(e) {
            return (
                "." +
                (e = void 0 === e ? "" : e)
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")
            );
        }
        function P(e) {
            const {
                effect: i,
                swiper: n,
                on: t,
                setTranslate: s,
                setTransition: r,
                overwriteParams: o,
                perspective: a,
            } = e;
            t("beforeInit", () => {
                var e;
                n.params.effect === i &&
                    (n.classNames.push(
                        "" + n.params.containerModifierClass + i
                    ),
                    a &&
                        a() &&
                        n.classNames.push(
                            n.params.containerModifierClass + "3d"
                        ),
                    (e = o ? o() : {}),
                    Object.assign(n.params, e),
                    Object.assign(n.originalParams, e));
            }),
                t("setTranslate", () => {
                    n.params.effect === i && s();
                }),
                t("setTransition", (e, t) => {
                    n.params.effect === i && r(t);
                });
        }
        function D(e, t) {
            return e.transformEl
                ? t.find(e.transformEl).css({
                      "backface-visibility": "hidden",
                      "-webkit-backface-visibility": "hidden",
                  })
                : t;
        }
        function z(e) {
            let { swiper: n, duration: t, transformEl: s, allSlides: r } = e;
            const { slides: o, activeIndex: a, $wrapperEl: l } = n;
            if (n.params.virtualTranslate && 0 !== t) {
                let e,
                    i = !1;
                (e = r
                    ? s
                        ? o.find(s)
                        : o
                    : s
                    ? o.eq(a).find(s)
                    : o.eq(a)).transitionEnd(() => {
                    if (!i && n && !n.destroyed) {
                        (i = !0), (n.animating = !1);
                        var t = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < t.length; e += 1) l.trigger(t[e]);
                    }
                });
            }
        }
        function O(e, t, i) {
            const n = "swiper-slide-shadow" + (i ? "-" + i : ""),
                s = e.transformEl ? t.find(e.transformEl) : t;
            let r = s.children("." + n);
            return (
                r.length ||
                    ((r = A(
                        `<div class="swiper-slide-shadow${
                            i ? "-" + i : ""
                        }"></div>`
                    )),
                    s.append(r)),
                r
            );
        }
        return (
            Object.keys(x).forEach((t) => {
                Object.keys(x[t]).forEach((e) => {
                    T.prototype[e] = x[t][e];
                });
            }),
            T.use([
                function (e) {
                    let { swiper: r, on: t, emit: i } = e;
                    const n = L();
                    let s = null,
                        o = null;
                    const a = () => {
                            r &&
                                !r.destroyed &&
                                r.initialized &&
                                (i("beforeResize"), i("resize"));
                        },
                        l = () => {
                            r &&
                                !r.destroyed &&
                                r.initialized &&
                                i("orientationchange");
                        };
                    t("init", () => {
                        r.params.resizeObserver && void 0 !== n.ResizeObserver
                            ? r &&
                              !r.destroyed &&
                              r.initialized &&
                              (s = new ResizeObserver((i) => {
                                  o = n.requestAnimationFrame(() => {
                                      var { width: e, height: t } = r;
                                      let n = e,
                                          s = t;
                                      i.forEach((e) => {
                                          var {
                                              contentBoxSize: e,
                                              contentRect: t,
                                              target: i,
                                          } = e;
                                          (i && i !== r.el) ||
                                              ((n = t
                                                  ? t.width
                                                  : (e[0] || e).inlineSize),
                                              (s = t
                                                  ? t.height
                                                  : (e[0] || e).blockSize));
                                      }),
                                          (n === e && s === t) || a();
                                  });
                              })).observe(r.el)
                            : (n.addEventListener("resize", a),
                              n.addEventListener("orientationchange", l));
                    }),
                        t("destroy", () => {
                            o && n.cancelAnimationFrame(o),
                                s &&
                                    s.unobserve &&
                                    r.el &&
                                    (s.unobserve(r.el), (s = null)),
                                n.removeEventListener("resize", a),
                                n.removeEventListener("orientationchange", l);
                        });
                },
                function (e) {
                    let { swiper: i, extendParams: t, on: n, emit: s } = e;
                    function r(e, t) {
                        void 0 === t && (t = {});
                        const i = new (a.MutationObserver ||
                            a.WebkitMutationObserver)((e) => {
                            var t;
                            1 === e.length
                                ? s("observerUpdate", e[0])
                                : ((t = function () {
                                      s("observerUpdate", e[0]);
                                  }),
                                  a.requestAnimationFrame
                                      ? a.requestAnimationFrame(t)
                                      : a.setTimeout(t, 0));
                        });
                        i.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData:
                                void 0 === t.characterData || t.characterData,
                        }),
                            o.push(i);
                    }
                    const o = [],
                        a = L();
                    t({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1,
                    }),
                        n("init", () => {
                            if (i.params.observer) {
                                if (i.params.observeParents) {
                                    var t = i.$el.parents();
                                    for (let e = 0; e < t.length; e += 1)
                                        r(t[e]);
                                }
                                r(i.$el[0], {
                                    childList: i.params.observeSlideChildren,
                                }),
                                    r(i.$wrapperEl[0], { attributes: !1 });
                            }
                        }),
                        n("destroy", () => {
                            o.forEach((e) => {
                                e.disconnect();
                            }),
                                o.splice(0, o.length);
                        });
                },
            ]),
            T.use([
                function (e) {
                    let t,
                        { swiper: x, extendParams: i, on: n } = e;
                    function C(e, t) {
                        const i = x.params.virtual;
                        if (i.cache && x.virtual.cache[t])
                            return x.virtual.cache[t];
                        const n = i.renderSlide
                            ? A(i.renderSlide.call(x, e, t))
                            : A(
                                  `<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                              );
                        return (
                            n.attr("data-swiper-slide-index") ||
                                n.attr("data-swiper-slide-index", t),
                            i.cache && (x.virtual.cache[t] = n),
                            n
                        );
                    }
                    function o(t) {
                        const {
                                slidesPerView: e,
                                slidesPerGroup: i,
                                centeredSlides: n,
                            } = x.params,
                            { addSlidesBefore: s, addSlidesAfter: r } =
                                x.params.virtual,
                            {
                                from: o,
                                to: a,
                                slides: l,
                                slidesGrid: d,
                                offset: c,
                            } = x.virtual;
                        x.params.cssMode || x.updateActiveIndex();
                        var u = x.activeIndex || 0;
                        let p, h, f;
                        (p = x.rtlTranslate
                            ? "right"
                            : x.isHorizontal()
                            ? "left"
                            : "top"),
                            (f = n
                                ? ((h = Math.floor(e / 2) + i + r),
                                  Math.floor(e / 2) + i + s)
                                : ((h = e + (i - 1) + r), i + s));
                        const g = Math.max((u || 0) - f, 0),
                            m = Math.min((u || 0) + h, l.length - 1),
                            v = (x.slidesGrid[g] || 0) - (x.slidesGrid[0] || 0);
                        function y() {
                            x.updateSlides(),
                                x.updateProgress(),
                                x.updateSlidesClasses(),
                                x.lazy &&
                                    x.params.lazy.enabled &&
                                    x.lazy.load();
                        }
                        if (
                            (Object.assign(x.virtual, {
                                from: g,
                                to: m,
                                offset: v,
                                slidesGrid: x.slidesGrid,
                            }),
                            o === g && a === m && !t)
                        )
                            return (
                                x.slidesGrid !== d &&
                                    v !== c &&
                                    x.slides.css(p, v + "px"),
                                void x.updateProgress()
                            );
                        if (x.params.virtual.renderExternal)
                            return (
                                x.params.virtual.renderExternal.call(x, {
                                    offset: v,
                                    from: g,
                                    to: m,
                                    slides: (function () {
                                        const t = [];
                                        for (let e = g; e <= m; e += 1)
                                            t.push(l[e]);
                                        return t;
                                    })(),
                                }),
                                void (
                                    x.params.virtual.renderExternalUpdate && y()
                                )
                            );
                        const b = [],
                            w = [];
                        if (t)
                            x.$wrapperEl
                                .find("." + x.params.slideClass)
                                .remove();
                        else
                            for (let e = o; e <= a; e += 1)
                                (e < g || e > m) &&
                                    x.$wrapperEl
                                        .find(
                                            `.${x.params.slideClass}[data-swiper-slide-index="${e}"]`
                                        )
                                        .remove();
                        for (let e = 0; e < l.length; e += 1)
                            e >= g &&
                                e <= m &&
                                (void 0 === a || t
                                    ? w.push(e)
                                    : (e > a && w.push(e), e < o && b.push(e)));
                        w.forEach((e) => {
                            x.$wrapperEl.append(C(l[e], e));
                        }),
                            b
                                .sort((e, t) => t - e)
                                .forEach((e) => {
                                    x.$wrapperEl.prepend(C(l[e], e));
                                }),
                            x.$wrapperEl
                                .children(".swiper-slide")
                                .css(p, v + "px"),
                            y();
                    }
                    i({
                        virtual: {
                            enabled: !1,
                            slides: [],
                            cache: !0,
                            renderSlide: null,
                            renderExternal: null,
                            renderExternalUpdate: !0,
                            addSlidesBefore: 0,
                            addSlidesAfter: 0,
                        },
                    }),
                        (x.virtual = {
                            cache: {},
                            from: void 0,
                            to: void 0,
                            slides: [],
                            offset: 0,
                            slidesGrid: [],
                        }),
                        n("beforeInit", () => {
                            x.params.virtual.enabled &&
                                ((x.virtual.slides = x.params.virtual.slides),
                                x.classNames.push(
                                    x.params.containerModifierClass + "virtual"
                                ),
                                (x.params.watchSlidesProgress = !0),
                                (x.originalParams.watchSlidesProgress = !0),
                                x.params.initialSlide || o());
                        }),
                        n("setTranslate", () => {
                            x.params.virtual.enabled &&
                                (x.params.cssMode && !x._immediateVirtual
                                    ? (clearTimeout(t),
                                      (t = setTimeout(() => {
                                          o();
                                      }, 100)))
                                    : o());
                        }),
                        n("init update resize", () => {
                            x.params.virtual.enabled &&
                                x.params.cssMode &&
                                k(
                                    x.wrapperEl,
                                    "--swiper-virtual-size",
                                    x.virtualSize + "px"
                                );
                        }),
                        Object.assign(x.virtual, {
                            appendSlide: function (t) {
                                if ("object" == typeof t && "length" in t)
                                    for (let e = 0; e < t.length; e += 1)
                                        t[e] && x.virtual.slides.push(t[e]);
                                else x.virtual.slides.push(t);
                                o(!0);
                            },
                            prependSlide: function (n) {
                                const s = x.activeIndex;
                                let e = s + 1,
                                    r = 1;
                                if (Array.isArray(n)) {
                                    for (let e = 0; e < n.length; e += 1)
                                        n[e] && x.virtual.slides.unshift(n[e]);
                                    (e = s + n.length), (r = n.length);
                                } else x.virtual.slides.unshift(n);
                                if (x.params.virtual.cache) {
                                    const n = x.virtual.cache,
                                        s = {};
                                    Object.keys(n).forEach((e) => {
                                        const t = n[e],
                                            i = t.attr(
                                                "data-swiper-slide-index"
                                            );
                                        i &&
                                            t.attr(
                                                "data-swiper-slide-index",
                                                parseInt(i, 10) + r
                                            ),
                                            (s[parseInt(e, 10) + r] = t);
                                    }),
                                        (x.virtual.cache = s);
                                }
                                o(!0), x.slideTo(e, 0);
                            },
                            removeSlide: function (i) {
                                if (null != i) {
                                    let t = x.activeIndex;
                                    if (Array.isArray(i))
                                        for (let e = i.length - 1; 0 <= e; --e)
                                            x.virtual.slides.splice(i[e], 1),
                                                x.params.virtual.cache &&
                                                    delete x.virtual.cache[
                                                        i[e]
                                                    ],
                                                i[e] < t && --t,
                                                (t = Math.max(t, 0));
                                    else
                                        x.virtual.slides.splice(i, 1),
                                            x.params.virtual.cache &&
                                                delete x.virtual.cache[i],
                                            i < t && --t,
                                            (t = Math.max(t, 0));
                                    o(!0), x.slideTo(t, 0);
                                }
                            },
                            removeAllSlides: function () {
                                (x.virtual.slides = []),
                                    x.params.virtual.cache &&
                                        (x.virtual.cache = {}),
                                    o(!0),
                                    x.slideTo(0, 0);
                            },
                            update: o,
                        });
                },
                function (e) {
                    let { swiper: u, extendParams: t, on: i, emit: p } = e;
                    const h = E(),
                        f = L();
                    function n(t) {
                        if (u.enabled) {
                            const i = u["rtlTranslate"];
                            let e = t;
                            const n =
                                    (e = e.originalEvent ? e.originalEvent : e)
                                        .keyCode || e.charCode,
                                s = u.params.keyboard.pageUpDown,
                                r = s && 33 === n,
                                o = s && 34 === n,
                                a = 37 === n,
                                l = 39 === n,
                                d = 38 === n,
                                c = 40 === n;
                            if (
                                !u.allowSlideNext &&
                                ((u.isHorizontal() && l) ||
                                    (u.isVertical() && c) ||
                                    o)
                            )
                                return !1;
                            if (
                                !u.allowSlidePrev &&
                                ((u.isHorizontal() && a) ||
                                    (u.isVertical() && d) ||
                                    r)
                            )
                                return !1;
                            if (
                                !(
                                    e.shiftKey ||
                                    e.altKey ||
                                    e.ctrlKey ||
                                    e.metaKey ||
                                    (h.activeElement &&
                                        h.activeElement.nodeName &&
                                        ("input" ===
                                            h.activeElement.nodeName.toLowerCase() ||
                                            "textarea" ===
                                                h.activeElement.nodeName.toLowerCase()))
                                )
                            ) {
                                if (
                                    u.params.keyboard.onlyInViewport &&
                                    (r || o || a || l || d || c)
                                ) {
                                    let t = !1;
                                    if (
                                        0 <
                                            u.$el.parents(
                                                "." + u.params.slideClass
                                            ).length &&
                                        0 ===
                                            u.$el.parents(
                                                "." + u.params.slideActiveClass
                                            ).length
                                    )
                                        return;
                                    const e = u.$el,
                                        n = e[0].clientWidth,
                                        s = e[0].clientHeight,
                                        p = f.innerWidth,
                                        h = f.innerHeight,
                                        r = u.$el.offset(),
                                        o =
                                            (i &&
                                                (r.left -= u.$el[0].scrollLeft),
                                            [
                                                [r.left, r.top],
                                                [r.left + n, r.top],
                                                [r.left, r.top + s],
                                                [r.left + n, r.top + s],
                                            ]);
                                    for (let e = 0; e < o.length; e += 1) {
                                        const i = o[e];
                                        0 <= i[0] &&
                                            i[0] <= p &&
                                            0 <= i[1] &&
                                            i[1] <= h &&
                                            ((0 === i[0] && 0 === i[1]) ||
                                                (t = !0));
                                    }
                                    if (!t) return;
                                }
                                u.isHorizontal()
                                    ? ((r || o || a || l) &&
                                          (e.preventDefault
                                              ? e.preventDefault()
                                              : (e.returnValue = !1)),
                                      (((o || l) && !i) || ((r || a) && i)) &&
                                          u.slideNext(),
                                      (((r || a) && !i) || ((o || l) && i)) &&
                                          u.slidePrev())
                                    : ((r || o || d || c) &&
                                          (e.preventDefault
                                              ? e.preventDefault()
                                              : (e.returnValue = !1)),
                                      (o || c) && u.slideNext(),
                                      (r || d) && u.slidePrev()),
                                    p("keyPress", n);
                            }
                        }
                    }
                    function s() {
                        u.keyboard.enabled ||
                            (A(h).on("keydown", n), (u.keyboard.enabled = !0));
                    }
                    function r() {
                        u.keyboard.enabled &&
                            (A(h).off("keydown", n), (u.keyboard.enabled = !1));
                    }
                    (u.keyboard = { enabled: !1 }),
                        t({
                            keyboard: {
                                enabled: !1,
                                onlyInViewport: !0,
                                pageUpDown: !0,
                            },
                        }),
                        i("init", () => {
                            u.params.keyboard.enabled && s();
                        }),
                        i("destroy", () => {
                            u.keyboard.enabled && r();
                        }),
                        Object.assign(u.keyboard, { enable: s, disable: r });
                },
                function (e) {
                    let { swiper: d, extendParams: t, on: i, emit: c } = e;
                    const n = L();
                    let u;
                    t({
                        mousewheel: {
                            enabled: !1,
                            releaseOnEdges: !1,
                            invert: !1,
                            forceToAxis: !1,
                            sensitivity: 1,
                            eventsTarget: "container",
                            thresholdDelta: null,
                            thresholdTime: null,
                        },
                    }),
                        (d.mousewheel = { enabled: !1 });
                    let p,
                        s = v();
                    const h = [];
                    function r() {
                        d.enabled && (d.mouseEntered = !0);
                    }
                    function o() {
                        d.enabled && (d.mouseEntered = !1);
                    }
                    function f(e) {
                        (d.params.mousewheel.thresholdDelta &&
                            e.delta < d.params.mousewheel.thresholdDelta) ||
                            (d.params.mousewheel.thresholdTime &&
                                v() - s < d.params.mousewheel.thresholdTime) ||
                            (6 <= e.delta && v() - s < 60) ||
                            (e.direction < 0
                                ? (d.isEnd && !d.params.loop) ||
                                  d.animating ||
                                  (d.slideNext(), c("scroll", e.raw))
                                : (d.isBeginning && !d.params.loop) ||
                                  d.animating ||
                                  (d.slidePrev(), c("scroll", e.raw)),
                            (s = new n.Date().getTime()));
                    }
                    function a(n) {
                        let s = n,
                            r = !0;
                        if (d.enabled) {
                            var o = d.params.mousewheel;
                            d.params.cssMode && s.preventDefault();
                            let e = d.$el;
                            if (
                                ("container" !==
                                    d.params.mousewheel.eventsTarget &&
                                    (e = A(d.params.mousewheel.eventsTarget)),
                                !d.mouseEntered &&
                                    !e[0].contains(s.target) &&
                                    !o.releaseOnEdges)
                            )
                                return !0;
                            s.originalEvent && (s = s.originalEvent);
                            let t = 0;
                            var a = d.rtlTranslate ? -1 : 1,
                                l = (function (e) {
                                    let t = 0,
                                        i = 0,
                                        n = 0,
                                        s = 0;
                                    return (
                                        "detail" in e && (i = e.detail),
                                        "wheelDelta" in e &&
                                            (i = -e.wheelDelta / 120),
                                        "wheelDeltaY" in e &&
                                            (i = -e.wheelDeltaY / 120),
                                        "wheelDeltaX" in e &&
                                            (t = -e.wheelDeltaX / 120),
                                        "axis" in e &&
                                            e.axis === e.HORIZONTAL_AXIS &&
                                            ((t = i), (i = 0)),
                                        (n = 10 * t),
                                        (s = 10 * i),
                                        "deltaY" in e && (s = e.deltaY),
                                        "deltaX" in e && (n = e.deltaX),
                                        e.shiftKey && !n && ((n = s), (s = 0)),
                                        (n || s) &&
                                            e.deltaMode &&
                                            (1 === e.deltaMode
                                                ? ((n *= 40), (s *= 40))
                                                : ((n *= 800), (s *= 800))),
                                        n && !t && (t = n < 1 ? -1 : 1),
                                        s && !i && (i = s < 1 ? -1 : 1),
                                        {
                                            spinX: t,
                                            spinY: i,
                                            pixelX: n,
                                            pixelY: s,
                                        }
                                    );
                                })(s);
                            if (o.forceToAxis)
                                if (d.isHorizontal()) {
                                    if (
                                        !(
                                            Math.abs(l.pixelX) >
                                            Math.abs(l.pixelY)
                                        )
                                    )
                                        return !0;
                                    t = -l.pixelX * a;
                                } else {
                                    if (
                                        !(
                                            Math.abs(l.pixelY) >
                                            Math.abs(l.pixelX)
                                        )
                                    )
                                        return !0;
                                    t = -l.pixelY;
                                }
                            else
                                t =
                                    Math.abs(l.pixelX) > Math.abs(l.pixelY)
                                        ? -l.pixelX * a
                                        : -l.pixelY;
                            if (0 === t) return !0;
                            o.invert && (t = -t);
                            let i = d.getTranslate() + t * o.sensitivity;
                            if (
                                ((i =
                                    i >= d.minTranslate()
                                        ? d.minTranslate()
                                        : i) <= d.maxTranslate() &&
                                    (i = d.maxTranslate()),
                                (r =
                                    !!d.params.loop ||
                                    !(
                                        i === d.minTranslate() ||
                                        i === d.maxTranslate()
                                    )) &&
                                    d.params.nested &&
                                    s.stopPropagation(),
                                d.params.freeMode && d.params.freeMode.enabled)
                            ) {
                                const n = {
                                        time: v(),
                                        delta: Math.abs(t),
                                        direction: Math.sign(t),
                                    },
                                    r =
                                        p &&
                                        n.time < p.time + 500 &&
                                        n.delta <= p.delta &&
                                        n.direction === p.direction;
                                if (!r) {
                                    (p = void 0), d.params.loop && d.loopFix();
                                    let e =
                                        d.getTranslate() + t * o.sensitivity;
                                    const A = d.isBeginning,
                                        v = d.isEnd;
                                    if (
                                        ((e =
                                            e >= d.minTranslate()
                                                ? d.minTranslate()
                                                : e) <= d.maxTranslate() &&
                                            (e = d.maxTranslate()),
                                        d.setTransition(0),
                                        d.setTranslate(e),
                                        d.updateProgress(),
                                        d.updateActiveIndex(),
                                        d.updateSlidesClasses(),
                                        ((!A && d.isBeginning) ||
                                            (!v && d.isEnd)) &&
                                            d.updateSlidesClasses(),
                                        d.params.freeMode.sticky)
                                    ) {
                                        clearTimeout(u),
                                            (u = void 0),
                                            15 <= h.length && h.shift();
                                        const s = h.length
                                                ? h[h.length - 1]
                                                : void 0,
                                            r = h[0];
                                        if (
                                            (h.push(n),
                                            s &&
                                                (n.delta > s.delta ||
                                                    n.direction !==
                                                        s.direction))
                                        )
                                            h.splice(0);
                                        else if (
                                            15 <= h.length &&
                                            n.time - r.time < 500 &&
                                            1 <= r.delta - n.delta &&
                                            n.delta <= 6
                                        ) {
                                            const s = 0 < t ? 0.8 : 0.2;
                                            (p = n),
                                                h.splice(0),
                                                (u = S(() => {
                                                    d.slideToClosest(
                                                        d.params.speed,
                                                        !0,
                                                        void 0,
                                                        s
                                                    );
                                                }, 0));
                                        }
                                        u =
                                            u ||
                                            S(() => {
                                                (p = n),
                                                    h.splice(0),
                                                    d.slideToClosest(
                                                        d.params.speed,
                                                        !0,
                                                        void 0,
                                                        0.5
                                                    );
                                            }, 500);
                                    }
                                    if (
                                        (r || c("scroll", s),
                                        d.params.autoplay &&
                                            d.params
                                                .autoplayDisableOnInteraction &&
                                            d.autoplay.stop(),
                                        e === d.minTranslate() ||
                                            e === d.maxTranslate())
                                    )
                                        return !0;
                                }
                            } else {
                                const s = {
                                        time: v(),
                                        delta: Math.abs(t),
                                        direction: Math.sign(t),
                                        raw: n,
                                    },
                                    r =
                                        (2 <= h.length && h.shift(),
                                        h.length ? h[h.length - 1] : void 0);
                                if (
                                    (h.push(s),
                                    (!r ||
                                        s.direction !== r.direction ||
                                        s.delta > r.delta ||
                                        s.time > r.time + 150) &&
                                        f(s),
                                    (function (e) {
                                        var t = d.params.mousewheel;
                                        if (e.direction < 0) {
                                            if (
                                                d.isEnd &&
                                                !d.params.loop &&
                                                t.releaseOnEdges
                                            )
                                                return 1;
                                        } else if (
                                            d.isBeginning &&
                                            !d.params.loop &&
                                            t.releaseOnEdges
                                        )
                                            return 1;
                                    })(s))
                                )
                                    return !0;
                            }
                            return (
                                s.preventDefault
                                    ? s.preventDefault()
                                    : (s.returnValue = !1),
                                !1
                            );
                        }
                    }
                    function l(e) {
                        let t = d.$el;
                        (t =
                            "container" !== d.params.mousewheel.eventsTarget
                                ? A(d.params.mousewheel.eventsTarget)
                                : t)[e]("mouseenter", r),
                            t[e]("mouseleave", o),
                            t[e]("wheel", a);
                    }
                    function g() {
                        return d.params.cssMode
                            ? (d.wrapperEl.removeEventListener("wheel", a), !0)
                            : !d.mousewheel.enabled &&
                                  (l("on"), (d.mousewheel.enabled = !0));
                    }
                    function m() {
                        return d.params.cssMode
                            ? (d.wrapperEl.addEventListener(event, a), !0)
                            : !!d.mousewheel.enabled &&
                                  (l("off"), !(d.mousewheel.enabled = !1));
                    }
                    i("init", () => {
                        !d.params.mousewheel.enabled && d.params.cssMode && m(),
                            d.params.mousewheel.enabled && g();
                    }),
                        i("destroy", () => {
                            d.params.cssMode && g(),
                                d.mousewheel.enabled && m();
                        }),
                        Object.assign(d.mousewheel, { enable: g, disable: m });
                },
                function (e) {
                    let { swiper: r, extendParams: t, on: i, emit: o } = e;
                    function n(e) {
                        let t;
                        return (
                            e &&
                                ((t = A(e)),
                                r.params.uniqueNavElements &&
                                    "string" == typeof e &&
                                    1 < t.length &&
                                    1 === r.$el.find(e).length &&
                                    (t = r.$el.find(e))),
                            t
                        );
                    }
                    function s(e, t) {
                        var i = r.params.navigation;
                        e &&
                            0 < e.length &&
                            (e[t ? "addClass" : "removeClass"](i.disabledClass),
                            e[0] &&
                                "BUTTON" === e[0].tagName &&
                                (e[0].disabled = t),
                            r.params.watchOverflow &&
                                r.enabled &&
                                e[r.isLocked ? "addClass" : "removeClass"](
                                    i.lockClass
                                ));
                    }
                    function a() {
                        var e, t;
                        r.params.loop ||
                            (({ $nextEl: e, $prevEl: t } = r.navigation),
                            s(t, r.isBeginning && !r.params.rewind),
                            s(e, r.isEnd && !r.params.rewind));
                    }
                    function l(e) {
                        e.preventDefault(),
                            (r.isBeginning &&
                                !r.params.loop &&
                                !r.params.rewind) ||
                                r.slidePrev();
                    }
                    function d(e) {
                        e.preventDefault(),
                            (r.isEnd && !r.params.loop && !r.params.rewind) ||
                                r.slideNext();
                    }
                    function c() {
                        var e = r.params.navigation;
                        if (
                            ((r.params.navigation = M(
                                r,
                                r.originalParams.navigation,
                                r.params.navigation,
                                {
                                    nextEl: "swiper-button-next",
                                    prevEl: "swiper-button-prev",
                                }
                            )),
                            e.nextEl || e.prevEl)
                        ) {
                            const t = n(e.nextEl),
                                i = n(e.prevEl);
                            t && 0 < t.length && t.on("click", d),
                                i && 0 < i.length && i.on("click", l),
                                Object.assign(r.navigation, {
                                    $nextEl: t,
                                    nextEl: t && t[0],
                                    $prevEl: i,
                                    prevEl: i && i[0],
                                }),
                                r.enabled ||
                                    (t && t.addClass(e.lockClass),
                                    i && i.addClass(e.lockClass));
                        }
                    }
                    function u() {
                        const { $nextEl: e, $prevEl: t } = r.navigation;
                        e &&
                            e.length &&
                            (e.off("click", d),
                            e.removeClass(r.params.navigation.disabledClass)),
                            t &&
                                t.length &&
                                (t.off("click", l),
                                t.removeClass(
                                    r.params.navigation.disabledClass
                                ));
                    }
                    t({
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock",
                        },
                    }),
                        (r.navigation = {
                            nextEl: null,
                            $nextEl: null,
                            prevEl: null,
                            $prevEl: null,
                        }),
                        i("init", () => {
                            c(), a();
                        }),
                        i("toEdge fromEdge lock unlock", () => {
                            a();
                        }),
                        i("destroy", () => {
                            u();
                        }),
                        i("enable disable", () => {
                            const { $nextEl: e, $prevEl: t } = r.navigation;
                            e &&
                                e[r.enabled ? "removeClass" : "addClass"](
                                    r.params.navigation.lockClass
                                ),
                                t &&
                                    t[r.enabled ? "removeClass" : "addClass"](
                                        r.params.navigation.lockClass
                                    );
                        }),
                        i("click", (e, t) => {
                            const { $nextEl: i, $prevEl: n } = r.navigation,
                                s = t.target;
                            if (
                                r.params.navigation.hideOnClick &&
                                !A(s).is(n) &&
                                !A(s).is(i) &&
                                (!(
                                    r.pagination &&
                                    r.params.pagination &&
                                    r.params.pagination.clickable
                                ) ||
                                    (r.pagination.el !== s &&
                                        !r.pagination.el.contains(s)))
                            ) {
                                let e;
                                i
                                    ? (e = i.hasClass(
                                          r.params.navigation.hiddenClass
                                      ))
                                    : n &&
                                      (e = n.hasClass(
                                          r.params.navigation.hiddenClass
                                      )),
                                    o(
                                        !0 === e
                                            ? "navigationShow"
                                            : "navigationHide"
                                    ),
                                    i &&
                                        i.toggleClass(
                                            r.params.navigation.hiddenClass
                                        ),
                                    n &&
                                        n.toggleClass(
                                            r.params.navigation.hiddenClass
                                        );
                            }
                        }),
                        Object.assign(r.navigation, {
                            update: a,
                            init: c,
                            destroy: u,
                        });
                },
                function (e) {
                    let { swiper: d, extendParams: t, on: i, emit: c } = e;
                    e = "swiper-pagination";
                    let u,
                        p =
                            (t({
                                pagination: {
                                    el: null,
                                    bulletElement: "span",
                                    clickable: !1,
                                    hideOnClick: !1,
                                    renderBullet: null,
                                    renderProgressbar: null,
                                    renderFraction: null,
                                    renderCustom: null,
                                    progressbarOpposite: !1,
                                    type: "bullets",
                                    dynamicBullets: !1,
                                    dynamicMainBullets: 1,
                                    formatFractionCurrent: (e) => e,
                                    formatFractionTotal: (e) => e,
                                    bulletClass: e + "-bullet",
                                    bulletActiveClass: e + "-bullet-active",
                                    modifierClass: e + "-",
                                    currentClass: e + "-current",
                                    totalClass: e + "-total",
                                    hiddenClass: e + "-hidden",
                                    progressbarFillClass:
                                        e + "-progressbar-fill",
                                    progressbarOppositeClass:
                                        e + "-progressbar-opposite",
                                    clickableClass: e + "-clickable",
                                    lockClass: e + "-lock",
                                    horizontalClass: e + "-horizontal",
                                    verticalClass: e + "-vertical",
                                },
                            }),
                            (d.pagination = {
                                el: null,
                                $el: null,
                                bullets: [],
                            }),
                            0);
                    function r() {
                        return (
                            !d.params.pagination.el ||
                            !d.pagination.el ||
                            !d.pagination.$el ||
                            0 === d.pagination.$el.length
                        );
                    }
                    function h(e, t) {
                        var i = d.params.pagination["bulletActiveClass"];
                        e[t]()
                            .addClass(i + "-" + t)
                            [t]()
                            .addClass(i + `-${t}-` + t);
                    }
                    function n() {
                        const t = d.rtl,
                            o = d.params.pagination;
                        if (!r()) {
                            const a = (
                                    d.virtual && d.params.virtual.enabled
                                        ? d.virtual
                                        : d
                                ).slides.length,
                                l = d.pagination.$el;
                            let r;
                            var i = d.params.loop
                                ? Math.ceil(
                                      (a - 2 * d.loopedSlides) /
                                          d.params.slidesPerGroup
                                  )
                                : d.snapGrid.length;
                            if (
                                (d.params.loop
                                    ? ((r = Math.ceil(
                                          (d.activeIndex - d.loopedSlides) /
                                              d.params.slidesPerGroup
                                      )) >
                                          a - 1 - 2 * d.loopedSlides &&
                                          (r -= a - 2 * d.loopedSlides),
                                      r > i - 1 && (r -= i),
                                      r < 0 &&
                                          "bullets" !==
                                              d.params.paginationType &&
                                          (r = i + r))
                                    : (r =
                                          void 0 !== d.snapIndex
                                              ? d.snapIndex
                                              : d.activeIndex || 0),
                                "bullets" === o.type &&
                                    d.pagination.bullets &&
                                    0 < d.pagination.bullets.length)
                            ) {
                                const a = d.pagination.bullets;
                                let n, s, e;
                                if (
                                    (o.dynamicBullets &&
                                        ((u = a
                                            .eq(0)
                                            [
                                                d.isHorizontal()
                                                    ? "outerWidth"
                                                    : "outerHeight"
                                            ](!0)),
                                        l.css(
                                            d.isHorizontal()
                                                ? "width"
                                                : "height",
                                            u * (o.dynamicMainBullets + 4) +
                                                "px"
                                        ),
                                        1 < o.dynamicMainBullets &&
                                            void 0 !== d.previousIndex &&
                                            ((p +=
                                                r -
                                                (d.previousIndex -
                                                    d.loopedSlides || 0)) >
                                            o.dynamicMainBullets - 1
                                                ? (p = o.dynamicMainBullets - 1)
                                                : p < 0 && (p = 0)),
                                        (n = Math.max(r - p, 0)),
                                        (s =
                                            n +
                                            (Math.min(
                                                a.length,
                                                o.dynamicMainBullets
                                            ) -
                                                1)),
                                        (e = (s + n) / 2)),
                                    a.removeClass(
                                        [
                                            "",
                                            "-next",
                                            "-next-next",
                                            "-prev",
                                            "-prev-prev",
                                            "-main",
                                        ]
                                            .map(
                                                (e) =>
                                                    "" + o.bulletActiveClass + e
                                            )
                                            .join(" ")
                                    ),
                                    1 < l.length)
                                )
                                    a.each((e) => {
                                        const t = A(e),
                                            i = t.index();
                                        i === r &&
                                            t.addClass(o.bulletActiveClass),
                                            o.dynamicBullets &&
                                                (i >= n &&
                                                    i <= s &&
                                                    t.addClass(
                                                        o.bulletActiveClass +
                                                            "-main"
                                                    ),
                                                i === n && h(t, "prev"),
                                                i === s && h(t, "next"));
                                    });
                                else {
                                    const t = a.eq(r),
                                        l = t.index();
                                    if (
                                        (t.addClass(o.bulletActiveClass),
                                        o.dynamicBullets)
                                    ) {
                                        const t = a.eq(n),
                                            u = a.eq(s);
                                        for (let e = n; e <= s; e += 1)
                                            a.eq(e).addClass(
                                                o.bulletActiveClass + "-main"
                                            );
                                        if (d.params.loop)
                                            if (l >= a.length) {
                                                for (
                                                    let e =
                                                        o.dynamicMainBullets;
                                                    0 <= e;
                                                    --e
                                                )
                                                    a.eq(a.length - e).addClass(
                                                        o.bulletActiveClass +
                                                            "-main"
                                                    );
                                                a.eq(
                                                    a.length -
                                                        o.dynamicMainBullets -
                                                        1
                                                ).addClass(
                                                    o.bulletActiveClass +
                                                        "-prev"
                                                );
                                            } else h(t, "prev"), h(u, "next");
                                        else h(t, "prev"), h(u, "next");
                                    }
                                }
                                if (o.dynamicBullets) {
                                    const c = Math.min(
                                            a.length,
                                            o.dynamicMainBullets + 4
                                        ),
                                        l = (u * c - u) / 2 - e * u,
                                        p = t ? "right" : "left";
                                    a.css(
                                        d.isHorizontal() ? p : "top",
                                        l + "px"
                                    );
                                }
                            }
                            if (
                                ("fraction" === o.type &&
                                    (l
                                        .find(I(o.currentClass))
                                        .text(o.formatFractionCurrent(r + 1)),
                                    l
                                        .find(I(o.totalClass))
                                        .text(o.formatFractionTotal(i))),
                                "progressbar" === o.type)
                            ) {
                                var n = o.progressbarOpposite
                                    ? d.isHorizontal()
                                        ? "vertical"
                                        : "horizontal"
                                    : d.isHorizontal()
                                    ? "horizontal"
                                    : "vertical";
                                const a = (r + 1) / i;
                                let e = 1,
                                    t = 1;
                                "horizontal" == n ? (e = a) : (t = a),
                                    l
                                        .find(I(o.progressbarFillClass))
                                        .transform(
                                            `translate3d(0,0,0) scaleX(${e}) scaleY(${t})`
                                        )
                                        .transition(d.params.speed);
                            }
                            "custom" === o.type && o.renderCustom
                                ? (l.html(o.renderCustom(d, r + 1, i)),
                                  c("paginationRender", l[0]))
                                : c("paginationUpdate", l[0]),
                                d.params.watchOverflow &&
                                    d.enabled &&
                                    l[d.isLocked ? "addClass" : "removeClass"](
                                        o.lockClass
                                    );
                        }
                    }
                    function s() {
                        const n = d.params.pagination;
                        if (!r()) {
                            const e = (
                                    d.virtual && d.params.virtual.enabled
                                        ? d.virtual
                                        : d
                                ).slides.length,
                                s = d.pagination.$el;
                            let i = "";
                            if ("bullets" === n.type) {
                                let t = d.params.loop
                                    ? Math.ceil(
                                          (e - 2 * d.loopedSlides) /
                                              d.params.slidesPerGroup
                                      )
                                    : d.snapGrid.length;
                                d.params.freeMode &&
                                    d.params.freeMode.enabled &&
                                    !d.params.loop &&
                                    t > e &&
                                    (t = e);
                                for (let e = 0; e < t; e += 1)
                                    n.renderBullet
                                        ? (i += n.renderBullet.call(
                                              d,
                                              e,
                                              n.bulletClass
                                          ))
                                        : (i += `<${n.bulletElement} class="${n.bulletClass}"></${n.bulletElement}>`);
                                s.html(i),
                                    (d.pagination.bullets = s.find(
                                        I(n.bulletClass)
                                    ));
                            }
                            "fraction" === n.type &&
                                ((i = n.renderFraction
                                    ? n.renderFraction.call(
                                          d,
                                          n.currentClass,
                                          n.totalClass
                                      )
                                    : `<span class="${n.currentClass}"></span> / <span class="${n.totalClass}"></span>`),
                                s.html(i)),
                                "progressbar" === n.type &&
                                    ((i = n.renderProgressbar
                                        ? n.renderProgressbar.call(
                                              d,
                                              n.progressbarFillClass
                                          )
                                        : `<span class="${n.progressbarFillClass}"></span>`),
                                    s.html(i)),
                                "custom" !== n.type &&
                                    c("paginationRender", d.pagination.$el[0]);
                        }
                    }
                    function o() {
                        d.params.pagination = M(
                            d,
                            d.originalParams.pagination,
                            d.params.pagination,
                            { el: "swiper-pagination" }
                        );
                        const t = d.params.pagination;
                        if (t.el) {
                            let e = A(t.el);
                            0 !== e.length &&
                                (d.params.uniqueNavElements &&
                                    "string" == typeof t.el &&
                                    1 < e.length &&
                                    1 < (e = d.$el.find(t.el)).length &&
                                    (e = e.filter(
                                        (e) =>
                                            A(e).parents(".swiper")[0] === d.el
                                    )),
                                "bullets" === t.type &&
                                    t.clickable &&
                                    e.addClass(t.clickableClass),
                                e.addClass(t.modifierClass + t.type),
                                e.addClass(
                                    t.modifierClass + d.params.direction
                                ),
                                "bullets" === t.type &&
                                    t.dynamicBullets &&
                                    (e.addClass(
                                        "" +
                                            t.modifierClass +
                                            t.type +
                                            "-dynamic"
                                    ),
                                    (p = 0),
                                    t.dynamicMainBullets < 1 &&
                                        (t.dynamicMainBullets = 1)),
                                "progressbar" === t.type &&
                                    t.progressbarOpposite &&
                                    e.addClass(t.progressbarOppositeClass),
                                t.clickable &&
                                    e.on(
                                        "click",
                                        I(t.bulletClass),
                                        function (e) {
                                            e.preventDefault();
                                            let t =
                                                A(this).index() *
                                                d.params.slidesPerGroup;
                                            d.params.loop &&
                                                (t += d.loopedSlides),
                                                d.slideTo(t);
                                        }
                                    ),
                                Object.assign(d.pagination, {
                                    $el: e,
                                    el: e[0],
                                }),
                                d.enabled || e.addClass(t.lockClass));
                        }
                    }
                    function a() {
                        var e = d.params.pagination;
                        if (!r()) {
                            const t = d.pagination.$el;
                            t.removeClass(e.hiddenClass),
                                t.removeClass(e.modifierClass + e.type),
                                t.removeClass(
                                    e.modifierClass + d.params.direction
                                ),
                                d.pagination.bullets &&
                                    d.pagination.bullets.removeClass &&
                                    d.pagination.bullets.removeClass(
                                        e.bulletActiveClass
                                    ),
                                e.clickable && t.off("click", I(e.bulletClass));
                        }
                    }
                    i("init", () => {
                        o(), s(), n();
                    }),
                        i("activeIndexChange", () => {
                            (!d.params.loop && void 0 !== d.snapIndex) || n();
                        }),
                        i("snapIndexChange", () => {
                            d.params.loop || n();
                        }),
                        i("slidesLengthChange", () => {
                            d.params.loop && (s(), n());
                        }),
                        i("snapGridLengthChange", () => {
                            d.params.loop || (s(), n());
                        }),
                        i("destroy", () => {
                            a();
                        }),
                        i("enable disable", () => {
                            const e = d.pagination["$el"];
                            e &&
                                e[d.enabled ? "removeClass" : "addClass"](
                                    d.params.pagination.lockClass
                                );
                        }),
                        i("lock unlock", () => {
                            n();
                        }),
                        i("click", (e, t) => {
                            const i = t.target,
                                n = d.pagination["$el"];
                            if (
                                d.params.pagination.el &&
                                d.params.pagination.hideOnClick &&
                                0 < n.length &&
                                !A(i).hasClass(
                                    d.params.pagination.bulletClass
                                ) &&
                                (!d.navigation ||
                                    !(
                                        (d.navigation.nextEl &&
                                            i === d.navigation.nextEl) ||
                                        (d.navigation.prevEl &&
                                            i === d.navigation.prevEl)
                                    ))
                            ) {
                                const e = n.hasClass(
                                    d.params.pagination.hiddenClass
                                );
                                c(
                                    !0 === e
                                        ? "paginationShow"
                                        : "paginationHide"
                                ),
                                    n.toggleClass(
                                        d.params.pagination.hiddenClass
                                    );
                            }
                        }),
                        Object.assign(d.pagination, {
                            render: s,
                            update: n,
                            init: o,
                            destroy: a,
                        });
                },
                function (e) {
                    let { swiper: d, extendParams: t, on: i, emit: o } = e;
                    const c = E();
                    let a,
                        l,
                        u,
                        n,
                        p = !1,
                        h = null,
                        f = null;
                    function s() {
                        if (d.params.scrollbar.el && d.scrollbar.el) {
                            const {
                                    scrollbar: i,
                                    rtlTranslate: n,
                                    progress: s,
                                } = d,
                                { $dragEl: r, $el: o } = i,
                                a = d.params.scrollbar;
                            let e = l,
                                t = (u - l) * s;
                            n
                                ? 0 < (t = -t)
                                    ? ((e = l - t), (t = 0))
                                    : -t + l > u && (e = u + t)
                                : t < 0
                                ? ((e = l + t), (t = 0))
                                : t + l > u && (e = u - t),
                                d.isHorizontal()
                                    ? (r.transform(`translate3d(${t}px, 0, 0)`),
                                      (r[0].style.width = e + "px"))
                                    : (r.transform(
                                          `translate3d(0px, ${t}px, 0)`
                                      ),
                                      (r[0].style.height = e + "px")),
                                a.hide &&
                                    (clearTimeout(h),
                                    (o[0].style.opacity = 1),
                                    (h = setTimeout(() => {
                                        (o[0].style.opacity = 0),
                                            o.transition(400);
                                    }, 1e3)));
                        }
                    }
                    function r() {
                        if (d.params.scrollbar.el && d.scrollbar.el) {
                            const e = d["scrollbar"],
                                { $dragEl: t, $el: i } = e;
                            (t[0].style.width = ""),
                                (t[0].style.height = ""),
                                (u = d.isHorizontal()
                                    ? i[0].offsetWidth
                                    : i[0].offsetHeight),
                                (n =
                                    d.size /
                                    (d.virtualSize +
                                        d.params.slidesOffsetBefore -
                                        (d.params.centeredSlides
                                            ? d.snapGrid[0]
                                            : 0))),
                                (l =
                                    "auto" === d.params.scrollbar.dragSize
                                        ? u * n
                                        : parseInt(
                                              d.params.scrollbar.dragSize,
                                              10
                                          )),
                                d.isHorizontal()
                                    ? (t[0].style.width = l + "px")
                                    : (t[0].style.height = l + "px"),
                                (i[0].style.display = 1 <= n ? "none" : ""),
                                d.params.scrollbar.hide &&
                                    (i[0].style.opacity = 0),
                                d.params.watchOverflow &&
                                    d.enabled &&
                                    e.$el[
                                        d.isLocked ? "addClass" : "removeClass"
                                    ](d.params.scrollbar.lockClass);
                        }
                    }
                    function g(e) {
                        return d.isHorizontal()
                            ? ("touchstart" === e.type || "touchmove" === e.type
                                  ? e.targetTouches[0]
                                  : e
                              ).clientX
                            : ("touchstart" === e.type || "touchmove" === e.type
                                  ? e.targetTouches[0]
                                  : e
                              ).clientY;
                    }
                    function m(e) {
                        const { scrollbar: t, rtlTranslate: i } = d,
                            n = t["$el"];
                        let s;
                        (s =
                            (g(e) -
                                n.offset()[d.isHorizontal() ? "left" : "top"] -
                                (null !== a ? a : l / 2)) /
                            (u - l)),
                            (s = Math.max(Math.min(s, 1), 0)),
                            i && (s = 1 - s);
                        e =
                            d.minTranslate() +
                            (d.maxTranslate() - d.minTranslate()) * s;
                        d.updateProgress(e),
                            d.setTranslate(e),
                            d.updateActiveIndex(),
                            d.updateSlidesClasses();
                    }
                    function v(e) {
                        const t = d.params.scrollbar,
                            { scrollbar: i, $wrapperEl: n } = d,
                            { $el: s, $dragEl: r } = i;
                        (p = !0),
                            (a =
                                e.target === r[0] || e.target === r
                                    ? g(e) -
                                      e.target.getBoundingClientRect()[
                                          d.isHorizontal() ? "left" : "top"
                                      ]
                                    : null),
                            e.preventDefault(),
                            e.stopPropagation(),
                            n.transition(100),
                            r.transition(100),
                            m(e),
                            clearTimeout(f),
                            s.transition(0),
                            t.hide && s.css("opacity", 1),
                            d.params.cssMode &&
                                d.$wrapperEl.css("scroll-snap-type", "none"),
                            o("scrollbarDragStart", e);
                    }
                    function y(e) {
                        const { scrollbar: t, $wrapperEl: i } = d,
                            { $el: n, $dragEl: s } = t;
                        p &&
                            (e.preventDefault
                                ? e.preventDefault()
                                : (e.returnValue = !1),
                            m(e),
                            i.transition(0),
                            n.transition(0),
                            s.transition(0),
                            o("scrollbarDragMove", e));
                    }
                    function b(e) {
                        const t = d.params.scrollbar,
                            { scrollbar: i, $wrapperEl: n } = d,
                            s = i["$el"];
                        p &&
                            ((p = !1),
                            d.params.cssMode &&
                                (d.$wrapperEl.css("scroll-snap-type", ""),
                                n.transition("")),
                            t.hide &&
                                (clearTimeout(f),
                                (f = S(() => {
                                    s.css("opacity", 0), s.transition(400);
                                }, 1e3))),
                            o("scrollbarDragEnd", e),
                            t.snapOnRelease && d.slideToClosest());
                    }
                    function w(e) {
                        const {
                                scrollbar: t,
                                touchEventsTouch: i,
                                touchEventsDesktop: n,
                                params: s,
                                support: r,
                            } = d,
                            o = t.$el[0],
                            a = !(
                                !r.passiveListener || !s.passiveListeners
                            ) && { passive: !1, capture: !1 },
                            l = !(
                                !r.passiveListener || !s.passiveListeners
                            ) && { passive: !0, capture: !1 };
                        o &&
                            ((e =
                                "on" === e
                                    ? "addEventListener"
                                    : "removeEventListener"),
                            r.touch
                                ? (o[e](i.start, v, a),
                                  o[e](i.move, y, a),
                                  o[e](i.end, b, l))
                                : (o[e](n.start, v, a),
                                  c[e](n.move, y, a),
                                  c[e](n.end, b, l)));
                    }
                    function x() {
                        const { scrollbar: i, $el: n } = d;
                        d.params.scrollbar = M(
                            d,
                            d.originalParams.scrollbar,
                            d.params.scrollbar,
                            { el: "swiper-scrollbar" }
                        );
                        var s = d.params.scrollbar;
                        if (s.el) {
                            let e = A(s.el),
                                t = (e =
                                    d.params.uniqueNavElements &&
                                    "string" == typeof s.el &&
                                    1 < e.length &&
                                    1 === n.find(s.el).length
                                        ? n.find(s.el)
                                        : e).find(
                                    "." + d.params.scrollbar.dragClass
                                );
                            0 === t.length &&
                                ((t = A(
                                    `<div class="${d.params.scrollbar.dragClass}"></div>`
                                )),
                                e.append(t)),
                                Object.assign(i, {
                                    $el: e,
                                    el: e[0],
                                    $dragEl: t,
                                    dragEl: t[0],
                                }),
                                s.draggable && d.params.scrollbar.el && w("on"),
                                e &&
                                    e[d.enabled ? "removeClass" : "addClass"](
                                        d.params.scrollbar.lockClass
                                    );
                        }
                    }
                    function C() {
                        d.params.scrollbar.el && w("off");
                    }
                    t({
                        scrollbar: {
                            el: null,
                            dragSize: "auto",
                            hide: !1,
                            draggable: !1,
                            snapOnRelease: !0,
                            lockClass: "swiper-scrollbar-lock",
                            dragClass: "swiper-scrollbar-drag",
                        },
                    }),
                        (d.scrollbar = {
                            el: null,
                            dragEl: null,
                            $el: null,
                            $dragEl: null,
                        }),
                        i("init", () => {
                            x(), r(), s();
                        }),
                        i("update resize observerUpdate lock unlock", () => {
                            r();
                        }),
                        i("setTranslate", () => {
                            s();
                        }),
                        i("setTransition", (e, t) => {
                            (t = t),
                                d.params.scrollbar.el &&
                                    d.scrollbar.el &&
                                    d.scrollbar.$dragEl.transition(t);
                        }),
                        i("enable disable", () => {
                            const e = d.scrollbar["$el"];
                            e &&
                                e[d.enabled ? "removeClass" : "addClass"](
                                    d.params.scrollbar.lockClass
                                );
                        }),
                        i("destroy", () => {
                            C();
                        }),
                        Object.assign(d.scrollbar, {
                            updateSize: r,
                            setTranslate: s,
                            init: x,
                            destroy: C,
                        });
                },
                function (e) {
                    let { swiper: c, extendParams: t, on: i } = e;
                    t({ parallax: { enabled: !1 } });
                    const r = (e, t) => {
                            const i = c["rtl"],
                                n = A(e),
                                s = i ? -1 : 1,
                                r = n.attr("data-swiper-parallax") || "0";
                            let o = n.attr("data-swiper-parallax-x"),
                                a = n.attr("data-swiper-parallax-y");
                            var l = n.attr("data-swiper-parallax-scale"),
                                d = n.attr("data-swiper-parallax-opacity");
                            if (
                                (o || a
                                    ? ((o = o || "0"), (a = a || "0"))
                                    : c.isHorizontal()
                                    ? ((o = r), (a = "0"))
                                    : ((a = r), (o = "0")),
                                (o =
                                    0 <= o.indexOf("%")
                                        ? parseInt(o, 10) * t * s + "%"
                                        : o * t * s + "px"),
                                (a =
                                    0 <= a.indexOf("%")
                                        ? parseInt(a, 10) * t + "%"
                                        : a * t + "px"),
                                null != d)
                            ) {
                                const e = d - (d - 1) * (1 - Math.abs(t));
                                n[0].style.opacity = e;
                            }
                            if (null == l)
                                n.transform(`translate3d(${o}, ${a}, 0px)`);
                            else {
                                const e = l - (l - 1) * (1 - Math.abs(t));
                                n.transform(
                                    `translate3d(${o}, ${a}, 0px) scale(${e})`
                                );
                            }
                        },
                        n = () => {
                            const {
                                $el: e,
                                slides: t,
                                progress: n,
                                snapGrid: s,
                            } = c;
                            e
                                .children(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                )
                                .each((e) => {
                                    r(e, n);
                                }),
                                t.each((e, t) => {
                                    let i = e.progress;
                                    1 < c.params.slidesPerGroup &&
                                        "auto" !== c.params.slidesPerView &&
                                        (i +=
                                            Math.ceil(t / 2) -
                                            n * (s.length - 1)),
                                        (i = Math.min(Math.max(i, -1), 1)),
                                        A(e)
                                            .find(
                                                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                            )
                                            .each((e) => {
                                                r(e, i);
                                            });
                                });
                        };
                    i("beforeInit", () => {
                        c.params.parallax.enabled &&
                            ((c.params.watchSlidesProgress = !0),
                            (c.originalParams.watchSlidesProgress = !0));
                    }),
                        i("init", () => {
                            c.params.parallax.enabled && n();
                        }),
                        i("setTranslate", () => {
                            c.params.parallax.enabled && n();
                        }),
                        i("setTransition", (e, t) => {
                            if (c.params.parallax.enabled) {
                                var n = t;
                                void 0 === n && (n = c.params.speed);
                                const i = c["$el"];
                                i.find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                ).each((e) => {
                                    const t = A(e);
                                    let i =
                                        parseInt(
                                            t.attr(
                                                "data-swiper-parallax-duration"
                                            ),
                                            10
                                        ) || n;
                                    0 === n && (i = 0), t.transition(i);
                                });
                            }
                        });
                },
                function (e) {
                    let { swiper: x, extendParams: t, on: i, emit: n } = e;
                    const C = L();
                    t({
                        zoom: {
                            enabled: !1,
                            maxRatio: 3,
                            minRatio: 1,
                            toggle: !0,
                            containerClass: "swiper-zoom-container",
                            zoomedSlideClass: "swiper-slide-zoomed",
                        },
                    }),
                        (x.zoom = { enabled: !1 });
                    let s,
                        r,
                        o,
                        E = 1,
                        a = !1;
                    const S = {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3,
                        },
                        T = {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {},
                        },
                        l = {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0,
                        };
                    let d = 1;
                    function c(e) {
                        if (e.targetTouches.length < 2) return 1;
                        var t = e.targetTouches[0].pageX,
                            i = e.targetTouches[0].pageY,
                            n = e.targetTouches[1].pageX,
                            e = e.targetTouches[1].pageY;
                        return Math.sqrt((n - t) ** 2 + (e - i) ** 2);
                    }
                    function u(e) {
                        var t = x.support,
                            i = x.params.zoom;
                        if (((r = !1), (o = !1), !t.gestures)) {
                            if (
                                "touchstart" !== e.type ||
                                ("touchstart" === e.type &&
                                    e.targetTouches.length < 2)
                            )
                                return;
                            (r = !0), (S.scaleStart = c(e));
                        }
                        (S.$slideEl && S.$slideEl.length) ||
                        ((S.$slideEl = A(e.target).closest(
                            "." + x.params.slideClass
                        )),
                        0 === S.$slideEl.length &&
                            (S.$slideEl = x.slides.eq(x.activeIndex)),
                        (S.$imageEl = S.$slideEl
                            .find("." + i.containerClass)
                            .eq(0)
                            .find(
                                "picture, img, svg, canvas, .swiper-zoom-target"
                            )
                            .eq(0)),
                        (S.$imageWrapEl = S.$imageEl.parent(
                            "." + i.containerClass
                        )),
                        (S.maxRatio =
                            S.$imageWrapEl.attr("data-swiper-zoom") ||
                            i.maxRatio),
                        0 !== S.$imageWrapEl.length)
                            ? (S.$imageEl && S.$imageEl.transition(0), (a = !0))
                            : (S.$imageEl = void 0);
                    }
                    function p(e) {
                        const t = x.support,
                            i = x.params.zoom,
                            n = x.zoom;
                        if (!t.gestures) {
                            if (
                                "touchmove" !== e.type ||
                                ("touchmove" === e.type &&
                                    e.targetTouches.length < 2)
                            )
                                return;
                            (o = !0), (S.scaleMove = c(e));
                        }
                        S.$imageEl && 0 !== S.$imageEl.length
                            ? (t.gestures
                                  ? (n.scale = e.scale * E)
                                  : (n.scale =
                                        (S.scaleMove / S.scaleStart) * E),
                              n.scale > S.maxRatio &&
                                  (n.scale =
                                      S.maxRatio -
                                      1 +
                                      (n.scale - S.maxRatio + 1) ** 0.5),
                              n.scale < i.minRatio &&
                                  (n.scale =
                                      i.minRatio +
                                      1 -
                                      (i.minRatio - n.scale + 1) ** 0.5),
                              S.$imageEl.transform(
                                  `translate3d(0,0,0) scale(${n.scale})`
                              ))
                            : "gesturechange" === e.type && u(e);
                    }
                    function h(e) {
                        const t = x.device,
                            i = x.support,
                            n = x.params.zoom,
                            s = x.zoom;
                        if (!i.gestures) {
                            if (!r || !o) return;
                            if (
                                "touchend" !== e.type ||
                                ("touchend" === e.type &&
                                    e.changedTouches.length < 2 &&
                                    !t.android)
                            )
                                return;
                            (r = !1), (o = !1);
                        }
                        S.$imageEl &&
                            0 !== S.$imageEl.length &&
                            ((s.scale = Math.max(
                                Math.min(s.scale, S.maxRatio),
                                n.minRatio
                            )),
                            S.$imageEl
                                .transition(x.params.speed)
                                .transform(
                                    `translate3d(0,0,0) scale(${s.scale})`
                                ),
                            (E = s.scale),
                            (a = !1),
                            1 === s.scale && (S.$slideEl = void 0));
                    }
                    function f(e) {
                        var t = x.zoom;
                        if (
                            S.$imageEl &&
                            0 !== S.$imageEl.length &&
                            ((x.allowClick = !1), T.isTouched && S.$slideEl)
                        ) {
                            T.isMoved ||
                                ((T.width = S.$imageEl[0].offsetWidth),
                                (T.height = S.$imageEl[0].offsetHeight),
                                (T.startX = $(S.$imageWrapEl[0], "x") || 0),
                                (T.startY = $(S.$imageWrapEl[0], "y") || 0),
                                (S.slideWidth = S.$slideEl[0].offsetWidth),
                                (S.slideHeight = S.$slideEl[0].offsetHeight),
                                S.$imageWrapEl.transition(0));
                            var i = T.width * t.scale,
                                t = T.height * t.scale;
                            if (!(i < S.slideWidth && t < S.slideHeight)) {
                                if (
                                    ((T.minX = Math.min(
                                        S.slideWidth / 2 - i / 2,
                                        0
                                    )),
                                    (T.maxX = -T.minX),
                                    (T.minY = Math.min(
                                        S.slideHeight / 2 - t / 2,
                                        0
                                    )),
                                    (T.maxY = -T.minY),
                                    (T.touchesCurrent.x = (
                                        "touchmove" === e.type
                                            ? e.targetTouches[0]
                                            : e
                                    ).pageX),
                                    (T.touchesCurrent.y = (
                                        "touchmove" === e.type
                                            ? e.targetTouches[0]
                                            : e
                                    ).pageY),
                                    !T.isMoved && !a)
                                ) {
                                    if (
                                        x.isHorizontal() &&
                                        ((Math.floor(T.minX) ===
                                            Math.floor(T.startX) &&
                                            T.touchesCurrent.x <
                                                T.touchesStart.x) ||
                                            (Math.floor(T.maxX) ===
                                                Math.floor(T.startX) &&
                                                T.touchesCurrent.x >
                                                    T.touchesStart.x))
                                    )
                                        return void (T.isTouched = !1);
                                    if (
                                        !x.isHorizontal() &&
                                        ((Math.floor(T.minY) ===
                                            Math.floor(T.startY) &&
                                            T.touchesCurrent.y <
                                                T.touchesStart.y) ||
                                            (Math.floor(T.maxY) ===
                                                Math.floor(T.startY) &&
                                                T.touchesCurrent.y >
                                                    T.touchesStart.y))
                                    )
                                        return void (T.isTouched = !1);
                                }
                                e.cancelable && e.preventDefault(),
                                    e.stopPropagation(),
                                    (T.isMoved = !0),
                                    (T.currentX =
                                        T.touchesCurrent.x -
                                        T.touchesStart.x +
                                        T.startX),
                                    (T.currentY =
                                        T.touchesCurrent.y -
                                        T.touchesStart.y +
                                        T.startY),
                                    T.currentX < T.minX &&
                                        (T.currentX =
                                            T.minX +
                                            1 -
                                            (T.minX - T.currentX + 1) ** 0.8),
                                    T.currentX > T.maxX &&
                                        (T.currentX =
                                            T.maxX -
                                            1 +
                                            (T.currentX - T.maxX + 1) ** 0.8),
                                    T.currentY < T.minY &&
                                        (T.currentY =
                                            T.minY +
                                            1 -
                                            (T.minY - T.currentY + 1) ** 0.8),
                                    T.currentY > T.maxY &&
                                        (T.currentY =
                                            T.maxY -
                                            1 +
                                            (T.currentY - T.maxY + 1) ** 0.8),
                                    l.prevPositionX ||
                                        (l.prevPositionX = T.touchesCurrent.x),
                                    l.prevPositionY ||
                                        (l.prevPositionY = T.touchesCurrent.y),
                                    l.prevTime || (l.prevTime = Date.now()),
                                    (l.x =
                                        (T.touchesCurrent.x - l.prevPositionX) /
                                        (Date.now() - l.prevTime) /
                                        2),
                                    (l.y =
                                        (T.touchesCurrent.y - l.prevPositionY) /
                                        (Date.now() - l.prevTime) /
                                        2),
                                    Math.abs(
                                        T.touchesCurrent.x - l.prevPositionX
                                    ) < 2 && (l.x = 0),
                                    Math.abs(
                                        T.touchesCurrent.y - l.prevPositionY
                                    ) < 2 && (l.y = 0),
                                    (l.prevPositionX = T.touchesCurrent.x),
                                    (l.prevPositionY = T.touchesCurrent.y),
                                    (l.prevTime = Date.now()),
                                    S.$imageWrapEl.transform(
                                        `translate3d(${T.currentX}px, ${T.currentY}px,0)`
                                    );
                            }
                        }
                    }
                    function g() {
                        const e = x.zoom;
                        S.$slideEl &&
                            x.previousIndex !== x.activeIndex &&
                            (S.$imageEl &&
                                S.$imageEl.transform(
                                    "translate3d(0,0,0) scale(1)"
                                ),
                            S.$imageWrapEl &&
                                S.$imageWrapEl.transform("translate3d(0,0,0)"),
                            (e.scale = 1),
                            (E = 1),
                            (S.$slideEl = void 0),
                            (S.$imageEl = void 0),
                            (S.$imageWrapEl = void 0));
                    }
                    function m(y) {
                        const b = x.zoom,
                            w = x.params.zoom;
                        if (
                            (S.$slideEl ||
                                (y &&
                                    y.target &&
                                    (S.$slideEl = A(y.target).closest(
                                        "." + x.params.slideClass
                                    )),
                                S.$slideEl ||
                                    (x.params.virtual &&
                                    x.params.virtual.enabled &&
                                    x.virtual
                                        ? (S.$slideEl = x.$wrapperEl.children(
                                              "." + x.params.slideActiveClass
                                          ))
                                        : (S.$slideEl = x.slides.eq(
                                              x.activeIndex
                                          ))),
                                (S.$imageEl = S.$slideEl
                                    .find("." + w.containerClass)
                                    .eq(0)
                                    .find(
                                        "picture, img, svg, canvas, .swiper-zoom-target"
                                    )
                                    .eq(0)),
                                (S.$imageWrapEl = S.$imageEl.parent(
                                    "." + w.containerClass
                                ))),
                            S.$imageEl &&
                                0 !== S.$imageEl.length &&
                                S.$imageWrapEl &&
                                0 !== S.$imageWrapEl.length)
                        ) {
                            let e,
                                t,
                                i,
                                n,
                                s,
                                r,
                                o,
                                a,
                                l,
                                d,
                                c,
                                u,
                                p,
                                h,
                                f,
                                g,
                                m,
                                v;
                            x.params.cssMode &&
                                ((x.wrapperEl.style.overflow = "hidden"),
                                (x.wrapperEl.style.touchAction = "none")),
                                S.$slideEl.addClass("" + w.zoomedSlideClass),
                                (t =
                                    void 0 === T.touchesStart.x && y
                                        ? ((e = (
                                              "touchend" === y.type
                                                  ? y.changedTouches[0]
                                                  : y
                                          ).pageX),
                                          ("touchend" === y.type
                                              ? y.changedTouches[0]
                                              : y
                                          ).pageY)
                                        : ((e = T.touchesStart.x),
                                          T.touchesStart.y)),
                                (b.scale =
                                    S.$imageWrapEl.attr("data-swiper-zoom") ||
                                    w.maxRatio),
                                (E =
                                    S.$imageWrapEl.attr("data-swiper-zoom") ||
                                    w.maxRatio),
                                y
                                    ? ((m = S.$slideEl[0].offsetWidth),
                                      (v = S.$slideEl[0].offsetHeight),
                                      (i =
                                          S.$slideEl.offset().left + C.scrollX),
                                      (n = S.$slideEl.offset().top + C.scrollY),
                                      (s = i + m / 2 - e),
                                      (r = n + v / 2 - t),
                                      (l = S.$imageEl[0].offsetWidth),
                                      (d = S.$imageEl[0].offsetHeight),
                                      (c = l * b.scale),
                                      (u = d * b.scale),
                                      (f = -(p = Math.min(m / 2 - c / 2, 0))),
                                      (g = -(h = Math.min(v / 2 - u / 2, 0))),
                                      (o = s * b.scale),
                                      (a = r * b.scale),
                                      (o = o < p ? p : o) > f && (o = f),
                                      (a = a < h ? h : a) > g && (a = g))
                                    : ((o = 0), (a = 0)),
                                S.$imageWrapEl
                                    .transition(300)
                                    .transform(`translate3d(${o}px, ${a}px,0)`),
                                S.$imageEl
                                    .transition(300)
                                    .transform(
                                        `translate3d(0,0,0) scale(${b.scale})`
                                    );
                        }
                    }
                    function v() {
                        const e = x.zoom,
                            t = x.params.zoom;
                        S.$slideEl ||
                            (x.params.virtual &&
                            x.params.virtual.enabled &&
                            x.virtual
                                ? (S.$slideEl = x.$wrapperEl.children(
                                      "." + x.params.slideActiveClass
                                  ))
                                : (S.$slideEl = x.slides.eq(x.activeIndex)),
                            (S.$imageEl = S.$slideEl
                                .find("." + t.containerClass)
                                .eq(0)
                                .find(
                                    "picture, img, svg, canvas, .swiper-zoom-target"
                                )
                                .eq(0)),
                            (S.$imageWrapEl = S.$imageEl.parent(
                                "." + t.containerClass
                            ))),
                            S.$imageEl &&
                                0 !== S.$imageEl.length &&
                                S.$imageWrapEl &&
                                0 !== S.$imageWrapEl.length &&
                                (x.params.cssMode &&
                                    ((x.wrapperEl.style.overflow = ""),
                                    (x.wrapperEl.style.touchAction = "")),
                                (e.scale = 1),
                                (E = 1),
                                S.$imageWrapEl
                                    .transition(300)
                                    .transform("translate3d(0,0,0)"),
                                S.$imageEl
                                    .transition(300)
                                    .transform("translate3d(0,0,0) scale(1)"),
                                S.$slideEl.removeClass("" + t.zoomedSlideClass),
                                (S.$slideEl = void 0));
                    }
                    function y(e) {
                        var t = x.zoom;
                        t.scale && 1 !== t.scale ? v() : m(e);
                    }
                    function b() {
                        var e = x.support;
                        return {
                            passiveListener: !(
                                "touchstart" !== x.touchEvents.start ||
                                !e.passiveListener ||
                                !x.params.passiveListeners
                            ) && { passive: !0, capture: !1 },
                            activeListenerWithCapture: !e.passiveListener || {
                                passive: !1,
                                capture: !0,
                            },
                        };
                    }
                    function w() {
                        return "." + x.params.slideClass;
                    }
                    function k(e) {
                        var t = b()["passiveListener"],
                            i = w();
                        x.$wrapperEl[e]("gesturestart", i, u, t),
                            x.$wrapperEl[e]("gesturechange", i, p, t),
                            x.$wrapperEl[e]("gestureend", i, h, t);
                    }
                    function M() {
                        s || ((s = !0), k("on"));
                    }
                    function I() {
                        s && ((s = !1), k("off"));
                    }
                    function P() {
                        const e = x.zoom;
                        var t, i, n, s;
                        e.enabled ||
                            ((e.enabled = !0),
                            (t = x.support),
                            ({
                                passiveListener: i,
                                activeListenerWithCapture: n,
                            } = b()),
                            (s = w()),
                            t.gestures
                                ? (x.$wrapperEl.on(x.touchEvents.start, M, i),
                                  x.$wrapperEl.on(x.touchEvents.end, I, i))
                                : "touchstart" === x.touchEvents.start &&
                                  (x.$wrapperEl.on(
                                      x.touchEvents.start,
                                      s,
                                      u,
                                      i
                                  ),
                                  x.$wrapperEl.on(x.touchEvents.move, s, p, n),
                                  x.$wrapperEl.on(x.touchEvents.end, s, h, i),
                                  x.touchEvents.cancel &&
                                      x.$wrapperEl.on(
                                          x.touchEvents.cancel,
                                          s,
                                          h,
                                          i
                                      )),
                            x.$wrapperEl.on(
                                x.touchEvents.move,
                                "." + x.params.zoom.containerClass,
                                f,
                                n
                            ));
                    }
                    function D() {
                        const e = x.zoom;
                        var t, i, n, s;
                        e.enabled &&
                            ((t = x.support),
                            ({
                                passiveListener: i,
                                activeListenerWithCapture: n,
                            } = ((e.enabled = !1), b())),
                            (s = w()),
                            t.gestures
                                ? (x.$wrapperEl.off(x.touchEvents.start, M, i),
                                  x.$wrapperEl.off(x.touchEvents.end, I, i))
                                : "touchstart" === x.touchEvents.start &&
                                  (x.$wrapperEl.off(
                                      x.touchEvents.start,
                                      s,
                                      u,
                                      i
                                  ),
                                  x.$wrapperEl.off(x.touchEvents.move, s, p, n),
                                  x.$wrapperEl.off(x.touchEvents.end, s, h, i),
                                  x.touchEvents.cancel &&
                                      x.$wrapperEl.off(
                                          x.touchEvents.cancel,
                                          s,
                                          h,
                                          i
                                      )),
                            x.$wrapperEl.off(
                                x.touchEvents.move,
                                "." + x.params.zoom.containerClass,
                                f,
                                n
                            ));
                    }
                    Object.defineProperty(x.zoom, "scale", {
                        get: () => d,
                        set(e) {
                            var t, i;
                            d !== e &&
                                ((t = S.$imageEl ? S.$imageEl[0] : void 0),
                                (i = S.$slideEl ? S.$slideEl[0] : void 0),
                                n("zoomChange", e, t, i)),
                                (d = e);
                        },
                    }),
                        i("init", () => {
                            x.params.zoom.enabled && P();
                        }),
                        i("destroy", () => {
                            D();
                        }),
                        i("touchStart", (e, t) => {
                            var i;
                            x.zoom.enabled &&
                                ((t = t),
                                (i = x.device),
                                S.$imageEl &&
                                    0 !== S.$imageEl.length &&
                                    !T.isTouched &&
                                    (i.android &&
                                        t.cancelable &&
                                        t.preventDefault(),
                                    (T.isTouched = !0),
                                    (T.touchesStart.x = (
                                        "touchstart" === t.type
                                            ? t.targetTouches[0]
                                            : t
                                    ).pageX),
                                    (T.touchesStart.y = (
                                        "touchstart" === t.type
                                            ? t.targetTouches[0]
                                            : t
                                    ).pageY)));
                        }),
                        i("touchEnd", (e, t) => {
                            if (x.zoom.enabled) {
                                var i = x.zoom;
                                if (S.$imageEl && 0 !== S.$imageEl.length) {
                                    if (!T.isTouched || !T.isMoved)
                                        return void ((T.isTouched = !1),
                                        (T.isMoved = !1));
                                    (T.isTouched = !1), (T.isMoved = !1);
                                    let e = 300,
                                        t = 300;
                                    var n = l.x * e,
                                        n = T.currentX + n,
                                        s = l.y * t,
                                        s = T.currentY + s,
                                        r =
                                            (0 !== l.x &&
                                                (e = Math.abs(
                                                    (n - T.currentX) / l.x
                                                )),
                                            0 !== l.y &&
                                                (t = Math.abs(
                                                    (s - T.currentY) / l.y
                                                )),
                                            Math.max(e, t)),
                                        n =
                                            ((T.currentX = n),
                                            (T.currentY = s),
                                            T.width * i.scale),
                                        s = T.height * i.scale;
                                    (T.minX = Math.min(
                                        S.slideWidth / 2 - n / 2,
                                        0
                                    )),
                                        (T.maxX = -T.minX),
                                        (T.minY = Math.min(
                                            S.slideHeight / 2 - s / 2,
                                            0
                                        )),
                                        (T.maxY = -T.minY),
                                        (T.currentX = Math.max(
                                            Math.min(T.currentX, T.maxX),
                                            T.minX
                                        )),
                                        (T.currentY = Math.max(
                                            Math.min(T.currentY, T.maxY),
                                            T.minY
                                        )),
                                        S.$imageWrapEl
                                            .transition(r)
                                            .transform(
                                                `translate3d(${T.currentX}px, ${T.currentY}px,0)`
                                            );
                                }
                            }
                        }),
                        i("doubleTap", (e, t) => {
                            !x.animating &&
                                x.params.zoom.enabled &&
                                x.zoom.enabled &&
                                x.params.zoom.toggle &&
                                y(t);
                        }),
                        i("transitionEnd", () => {
                            x.zoom.enabled && x.params.zoom.enabled && g();
                        }),
                        i("slideChange", () => {
                            x.zoom.enabled &&
                                x.params.zoom.enabled &&
                                x.params.cssMode &&
                                g();
                        }),
                        Object.assign(x.zoom, {
                            enable: P,
                            disable: D,
                            in: m,
                            out: v,
                            toggle: y,
                        });
                },
                function (e) {
                    let { swiper: c, extendParams: t, on: i, emit: u } = e,
                        d =
                            (t({
                                lazy: {
                                    checkInView: !1,
                                    enabled: !1,
                                    loadPrevNext: !1,
                                    loadPrevNextAmount: 1,
                                    loadOnTransitionStart: !1,
                                    scrollingElement: "",
                                    elementClass: "swiper-lazy",
                                    loadingClass: "swiper-lazy-loading",
                                    loadedClass: "swiper-lazy-loaded",
                                    preloaderClass: "swiper-lazy-preloader",
                                },
                            }),
                            !(c.lazy = {})),
                        p = !1;
                    function h(e, a) {
                        void 0 === a && (a = !0);
                        const l = c.params.lazy;
                        if (void 0 !== e && 0 !== c.slides.length) {
                            const d =
                                    c.virtual && c.params.virtual.enabled
                                        ? c.$wrapperEl.children(
                                              `.${c.params.slideClass}[data-swiper-slide-index="${e}"]`
                                          )
                                        : c.slides.eq(e),
                                t = d.find(
                                    `.${l.elementClass}:not(.${l.loadedClass}):not(.${l.loadingClass})`
                                );
                            !d.hasClass(l.elementClass) ||
                                d.hasClass(l.loadedClass) ||
                                d.hasClass(l.loadingClass) ||
                                t.push(d[0]),
                                0 !== t.length &&
                                    t.each((e) => {
                                        const t = A(e),
                                            i =
                                                (t.addClass(l.loadingClass),
                                                t.attr("data-background")),
                                            n = t.attr("data-src"),
                                            s = t.attr("data-srcset"),
                                            r = t.attr("data-sizes"),
                                            o = t.parent("picture");
                                        c.loadImage(
                                            t[0],
                                            n || i,
                                            s,
                                            r,
                                            !1,
                                            () => {
                                                var e;
                                                null == c ||
                                                    !c ||
                                                    (c && !c.params) ||
                                                    c.destroyed ||
                                                    (i
                                                        ? (t.css(
                                                              "background-image",
                                                              `url("${i}")`
                                                          ),
                                                          t.removeAttr(
                                                              "data-background"
                                                          ))
                                                        : (s &&
                                                              (t.attr(
                                                                  "srcset",
                                                                  s
                                                              ),
                                                              t.removeAttr(
                                                                  "data-srcset"
                                                              )),
                                                          r &&
                                                              (t.attr(
                                                                  "sizes",
                                                                  r
                                                              ),
                                                              t.removeAttr(
                                                                  "data-sizes"
                                                              )),
                                                          o.length &&
                                                              o
                                                                  .children(
                                                                      "source"
                                                                  )
                                                                  .each((e) => {
                                                                      const t =
                                                                          A(e);
                                                                      t.attr(
                                                                          "data-srcset"
                                                                      ) &&
                                                                          (t.attr(
                                                                              "srcset",
                                                                              t.attr(
                                                                                  "data-srcset"
                                                                              )
                                                                          ),
                                                                          t.removeAttr(
                                                                              "data-srcset"
                                                                          ));
                                                                  }),
                                                          n &&
                                                              (t.attr("src", n),
                                                              t.removeAttr(
                                                                  "data-src"
                                                              ))),
                                                    t
                                                        .addClass(l.loadedClass)
                                                        .removeClass(
                                                            l.loadingClass
                                                        ),
                                                    d
                                                        .find(
                                                            "." +
                                                                l.preloaderClass
                                                        )
                                                        .remove(),
                                                    c.params.loop &&
                                                        a &&
                                                        ((e = d.attr(
                                                            "data-swiper-slide-index"
                                                        )),
                                                        d.hasClass(
                                                            c.params
                                                                .slideDuplicateClass
                                                        )
                                                            ? h(
                                                                  c.$wrapperEl
                                                                      .children(
                                                                          `[data-swiper-slide-index="${e}"]:not(.${c.params.slideDuplicateClass})`
                                                                      )
                                                                      .index(),
                                                                  !1
                                                              )
                                                            : h(
                                                                  c.$wrapperEl
                                                                      .children(
                                                                          `.${c.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                                                                      )
                                                                      .index(),
                                                                  !1
                                                              )),
                                                    u(
                                                        "lazyImageReady",
                                                        d[0],
                                                        t[0]
                                                    ),
                                                    c.params.autoHeight &&
                                                        c.updateAutoHeight());
                                            }
                                        ),
                                            u("lazyImageLoad", d[0], t[0]);
                                    });
                        }
                    }
                    function f() {
                        const {
                                $wrapperEl: t,
                                params: i,
                                slides: n,
                                activeIndex: s,
                            } = c,
                            r = c.virtual && i.virtual.enabled,
                            e = i.lazy;
                        let o = i.slidesPerView;
                        function a(e) {
                            if (r) {
                                if (
                                    t.children(
                                        `.${i.slideClass}[data-swiper-slide-index="${e}"]`
                                    ).length
                                )
                                    return 1;
                            } else if (n[e]) return 1;
                        }
                        function l(e) {
                            return r
                                ? A(e).attr("data-swiper-slide-index")
                                : A(e).index();
                        }
                        if (
                            ("auto" === o && (o = 0),
                            (p = p || !0),
                            c.params.watchSlidesProgress)
                        )
                            t.children("." + i.slideVisibleClass).each((e) => {
                                h(
                                    r
                                        ? A(e).attr("data-swiper-slide-index")
                                        : A(e).index()
                                );
                            });
                        else if (1 < o)
                            for (let e = s; e < s + o; e += 1) a(e) && h(e);
                        else h(s);
                        if (e.loadPrevNext)
                            if (
                                1 < o ||
                                (e.loadPrevNextAmount &&
                                    1 < e.loadPrevNextAmount)
                            ) {
                                const t = e.loadPrevNextAmount,
                                    c = o,
                                    i = Math.min(
                                        s + c + Math.max(t, c),
                                        n.length
                                    ),
                                    r = Math.max(s - Math.max(c, t), 0);
                                for (let e = s + o; e < i; e += 1) a(e) && h(e);
                                for (let e = r; e < s; e += 1) a(e) && h(e);
                            } else {
                                const c = t.children("." + i.slideNextClass),
                                    n =
                                        (0 < c.length && h(l(c)),
                                        t.children("." + i.slidePrevClass));
                                0 < n.length && h(l(n));
                            }
                    }
                    function g() {
                        var e = L();
                        if (c && !c.destroyed) {
                            const n = c.params.lazy.scrollingElement
                                    ? A(c.params.lazy.scrollingElement)
                                    : A(e),
                                s = n[0] === e,
                                r = s ? e.innerWidth : n[0].offsetWidth,
                                o = s ? e.innerHeight : n[0].offsetHeight,
                                a = c.$el.offset(),
                                l = c["rtlTranslate"];
                            let t = !1;
                            l && (a.left -= c.$el[0].scrollLeft);
                            var i = [
                                [a.left, a.top],
                                [a.left + c.width, a.top],
                                [a.left, a.top + c.height],
                                [a.left + c.width, a.top + c.height],
                            ];
                            for (let e = 0; e < i.length; e += 1) {
                                const c = i[e];
                                0 <= c[0] &&
                                    c[0] <= r &&
                                    0 <= c[1] &&
                                    c[1] <= o &&
                                    ((0 === c[0] && 0 === c[1]) || (t = !0));
                            }
                            e = !(
                                "touchstart" !== c.touchEvents.start ||
                                !c.support.passiveListener ||
                                !c.params.passiveListeners
                            ) && { passive: !0, capture: !1 };
                            t
                                ? (f(), n.off("scroll", g, e))
                                : d || ((d = !0), n.on("scroll", g, e));
                        }
                    }
                    i("beforeInit", () => {
                        c.params.lazy.enabled &&
                            c.params.preloadImages &&
                            (c.params.preloadImages = !1);
                    }),
                        i("init", () => {
                            c.params.lazy.enabled &&
                                (c.params.lazy.checkInView ? g : f)();
                        }),
                        i("scroll", () => {
                            c.params.freeMode &&
                                c.params.freeMode.enabled &&
                                !c.params.freeMode.sticky &&
                                f();
                        }),
                        i(
                            "scrollbarDragMove resize _freeModeNoMomentumRelease",
                            () => {
                                c.params.lazy.enabled &&
                                    (c.params.lazy.checkInView ? g : f)();
                            }
                        ),
                        i("transitionStart", () => {
                            c.params.lazy.enabled &&
                                (c.params.lazy.loadOnTransitionStart ||
                                    (!c.params.lazy.loadOnTransitionStart &&
                                        !p)) &&
                                (c.params.lazy.checkInView ? g : f)();
                        }),
                        i("transitionEnd", () => {
                            c.params.lazy.enabled &&
                                !c.params.lazy.loadOnTransitionStart &&
                                (c.params.lazy.checkInView ? g : f)();
                        }),
                        i("slideChange", () => {
                            var {
                                lazy: e,
                                cssMode: t,
                                watchSlidesProgress: i,
                                touchReleaseOnEdges: n,
                                resistanceRatio: s,
                            } = c.params;
                            e.enabled && (t || (i && (n || 0 === s))) && f();
                        }),
                        Object.assign(c.lazy, { load: f, loadInSlide: h });
                },
                function (e) {
                    let { swiper: a, extendParams: t, on: i } = e;
                    function l(e, t) {
                        const i = (function () {
                            let i, n, s;
                            return (e, t) => {
                                for (n = -1, i = e.length; 1 < i - n; )
                                    e[(s = (i + n) >> 1)] <= t
                                        ? (n = s)
                                        : (i = s);
                                return i;
                            };
                        })();
                        let n, s;
                        return (
                            (this.x = e),
                            (this.y = t),
                            (this.lastIndex = e.length - 1),
                            (this.interpolate = function (e) {
                                return e
                                    ? ((s = i(this.x, e)),
                                      (n = s - 1),
                                      ((e - this.x[n]) *
                                          (this.y[s] - this.y[n])) /
                                          (this.x[s] - this.x[n]) +
                                          this.y[n])
                                    : 0;
                            }),
                            this
                        );
                    }
                    function n() {
                        a.controller.control &&
                            a.controller.spline &&
                            ((a.controller.spline = void 0),
                            delete a.controller.spline);
                    }
                    t({
                        controller: {
                            control: void 0,
                            inverse: !1,
                            by: "slide",
                        },
                    }),
                        (a.controller = { control: void 0 }),
                        i("beforeInit", () => {
                            a.controller.control = a.params.controller.control;
                        }),
                        i("update", () => {
                            n();
                        }),
                        i("resize", () => {
                            n();
                        }),
                        i("observerUpdate", () => {
                            n();
                        }),
                        i("setTranslate", (e, t, i) => {
                            a.controller.control &&
                                a.controller.setTranslate(t, i);
                        }),
                        i("setTransition", (e, t, i) => {
                            a.controller.control &&
                                a.controller.setTransition(t, i);
                        }),
                        Object.assign(a.controller, {
                            setTranslate: function (e, t) {
                                var i = a.controller.control;
                                let n, s;
                                var r = a.constructor;
                                function o(e) {
                                    var t,
                                        i = a.rtlTranslate
                                            ? -a.translate
                                            : a.translate;
                                    "slide" === a.params.controller.by &&
                                        ((t = e),
                                        a.controller.spline ||
                                            (a.controller.spline = a.params.loop
                                                ? new l(
                                                      a.slidesGrid,
                                                      t.slidesGrid
                                                  )
                                                : new l(
                                                      a.snapGrid,
                                                      t.snapGrid
                                                  )),
                                        (s = -a.controller.spline.interpolate(
                                            -i
                                        ))),
                                        (s &&
                                            "container" !==
                                                a.params.controller.by) ||
                                            ((n =
                                                (e.maxTranslate() -
                                                    e.minTranslate()) /
                                                (a.maxTranslate() -
                                                    a.minTranslate())),
                                            (s =
                                                (i - a.minTranslate()) * n +
                                                e.minTranslate())),
                                        a.params.controller.inverse &&
                                            (s = e.maxTranslate() - s),
                                        e.updateProgress(s),
                                        e.setTranslate(s, a),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses();
                                }
                                if (Array.isArray(i))
                                    for (let e = 0; e < i.length; e += 1)
                                        i[e] !== t &&
                                            i[e] instanceof r &&
                                            o(i[e]);
                                else i instanceof r && t !== i && o(i);
                            },
                            setTransition: function (t, e) {
                                const i = a.constructor,
                                    n = a.controller.control;
                                let s;
                                function r(e) {
                                    e.setTransition(t, a),
                                        0 !== t &&
                                            (e.transitionStart(),
                                            e.params.autoHeight &&
                                                S(() => {
                                                    e.updateAutoHeight();
                                                }),
                                            e.$wrapperEl.transitionEnd(() => {
                                                n &&
                                                    (e.params.loop &&
                                                        "slide" ===
                                                            a.params.controller
                                                                .by &&
                                                        e.loopFix(),
                                                    e.transitionEnd());
                                            }));
                                }
                                if (Array.isArray(n))
                                    for (s = 0; s < n.length; s += 1)
                                        n[s] !== e &&
                                            n[s] instanceof i &&
                                            r(n[s]);
                                else n instanceof i && e !== n && r(n);
                            },
                        });
                },
                function (e) {
                    let { swiper: a, extendParams: t, on: i } = e,
                        l =
                            (t({
                                a11y: {
                                    enabled: !0,
                                    notificationClass: "swiper-notification",
                                    prevSlideMessage: "Previous slide",
                                    nextSlideMessage: "Next slide",
                                    firstSlideMessage:
                                        "This is the first slide",
                                    lastSlideMessage: "This is the last slide",
                                    paginationBulletMessage:
                                        "Go to slide {{index}}",
                                    slideLabelMessage:
                                        "{{index}} / {{slidesLength}}",
                                    containerMessage: null,
                                    containerRoleDescriptionMessage: null,
                                    itemRoleDescriptionMessage: null,
                                    slideRole: "group",
                                },
                            }),
                            null);
                    function n(e) {
                        const t = l;
                        0 !== t.length && (t.html(""), t.html(e));
                    }
                    function s(e) {
                        e.attr("tabIndex", "0");
                    }
                    function r(e) {
                        e.attr("tabIndex", "-1");
                    }
                    function d(e, t) {
                        e.attr("role", t);
                    }
                    function c(e, t) {
                        e.attr("aria-roledescription", t);
                    }
                    function u(e, t) {
                        e.attr("aria-label", t);
                    }
                    function o(e) {
                        e.attr("aria-disabled", !0);
                    }
                    function p(e) {
                        e.attr("aria-disabled", !1);
                    }
                    function h(e) {
                        if (13 === e.keyCode || 32 === e.keyCode) {
                            const t = a.params.a11y,
                                i = A(e.target);
                            a.navigation &&
                                a.navigation.$nextEl &&
                                i.is(a.navigation.$nextEl) &&
                                ((a.isEnd && !a.params.loop) || a.slideNext(),
                                a.isEnd
                                    ? n(t.lastSlideMessage)
                                    : n(t.nextSlideMessage)),
                                a.navigation &&
                                    a.navigation.$prevEl &&
                                    i.is(a.navigation.$prevEl) &&
                                    ((a.isBeginning && !a.params.loop) ||
                                        a.slidePrev(),
                                    a.isBeginning
                                        ? n(t.firstSlideMessage)
                                        : n(t.prevSlideMessage)),
                                a.pagination &&
                                    i.is(I(a.params.pagination.bulletClass)) &&
                                    i[0].click();
                        }
                    }
                    function f() {
                        return (
                            a.pagination &&
                            a.pagination.bullets &&
                            a.pagination.bullets.length
                        );
                    }
                    function g() {
                        return f() && a.params.pagination.clickable;
                    }
                    const m = (e, t, i) => {
                            s(e),
                                "BUTTON" !== e[0].tagName &&
                                    (d(e, "button"), e.on("keydown", h)),
                                u(e, i),
                                e.attr("aria-controls", t);
                        },
                        v = (e) => {
                            var t,
                                i,
                                e = e.target.closest("." + a.params.slideClass);
                            e &&
                                a.slides.includes(e) &&
                                ((t = a.slides.indexOf(e) === a.activeIndex),
                                (i =
                                    a.params.watchSlidesProgress &&
                                    a.visibleSlides &&
                                    a.visibleSlides.includes(e)),
                                t || i || a.slideTo(a.slides.indexOf(e), 0));
                        };
                    i("beforeInit", () => {
                        l = A(
                            `<span class="${a.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                        );
                    }),
                        i("afterInit", () => {
                            if (a.params.a11y.enabled) {
                                const s = a.params.a11y;
                                a.$el.append(l);
                                var i = a.$el;
                                s.containerRoleDescriptionMessage &&
                                    c(i, s.containerRoleDescriptionMessage),
                                    s.containerMessage &&
                                        u(i, s.containerMessage);
                                const n = a.$wrapperEl,
                                    r =
                                        n.attr("id") ||
                                        "swiper-wrapper-" +
                                            "x"
                                                .repeat(
                                                    (i =
                                                        void 0 === (i = 16)
                                                            ? 16
                                                            : i)
                                                )
                                                .replace(/x/g, () =>
                                                    Math.round(
                                                        16 * Math.random()
                                                    ).toString(16)
                                                ),
                                    o =
                                        ((i =
                                            a.params.autoplay &&
                                            a.params.autoplay.enabled
                                                ? "off"
                                                : "polite"),
                                        n.attr("id", r),
                                        n.attr("aria-live", i),
                                        s.itemRoleDescriptionMessage &&
                                            c(
                                                A(a.slides),
                                                s.itemRoleDescriptionMessage
                                            ),
                                        d(A(a.slides), s.slideRole),
                                        (a.params.loop
                                            ? a.slides.filter(
                                                  (e) =>
                                                      !e.classList.contains(
                                                          a.params
                                                              .slideDuplicateClass
                                                      )
                                              )
                                            : a.slides
                                        ).length);
                                let e, t;
                                a.slides.each((e, t) => {
                                    const i = A(e),
                                        n = a.params.loop
                                            ? parseInt(
                                                  i.attr(
                                                      "data-swiper-slide-index"
                                                  ),
                                                  10
                                              )
                                            : t;
                                    u(
                                        i,
                                        s.slideLabelMessage
                                            .replace(/\{\{index\}\}/, n + 1)
                                            .replace(/\{\{slidesLength\}\}/, o)
                                    );
                                }),
                                    a.navigation &&
                                        a.navigation.$nextEl &&
                                        (e = a.navigation.$nextEl),
                                    a.navigation &&
                                        a.navigation.$prevEl &&
                                        (t = a.navigation.$prevEl),
                                    e &&
                                        e.length &&
                                        m(e, r, s.nextSlideMessage),
                                    t &&
                                        t.length &&
                                        m(t, r, s.prevSlideMessage),
                                    g() &&
                                        a.pagination.$el.on(
                                            "keydown",
                                            I(a.params.pagination.bulletClass),
                                            h
                                        ),
                                    a.$el.on("focus", v, !0);
                            }
                        }),
                        i("fromEdge toEdge afterInit lock unlock", () => {
                            var e, t;
                            a.params.a11y.enabled &&
                                !a.params.loop &&
                                !a.params.rewind &&
                                a.navigation &&
                                (({ $nextEl: e, $prevEl: t } = a.navigation),
                                t &&
                                    0 < t.length &&
                                    (a.isBeginning
                                        ? (o(t), r(t))
                                        : (p(t), s(t))),
                                e &&
                                    0 < e.length &&
                                    (a.isEnd ? (o(e), r(e)) : (p(e), s(e))));
                        }),
                        i("paginationUpdate", () => {
                            if (a.params.a11y.enabled) {
                                const i = a.params.a11y;
                                f() &&
                                    a.pagination.bullets.each((e) => {
                                        const t = A(e);
                                        a.params.pagination.clickable &&
                                            (s(t),
                                            a.params.pagination.renderBullet ||
                                                (d(t, "button"),
                                                u(
                                                    t,
                                                    i.paginationBulletMessage.replace(
                                                        /\{\{index\}\}/,
                                                        t.index() + 1
                                                    )
                                                ))),
                                            t.is(
                                                "." +
                                                    a.params.pagination
                                                        .bulletActiveClass
                                            )
                                                ? t.attr("aria-current", "true")
                                                : t.removeAttr("aria-current");
                                    });
                            }
                        }),
                        i("destroy", () => {
                            if (a.params.a11y.enabled) {
                                let e, t;
                                l && 0 < l.length && l.remove(),
                                    a.navigation &&
                                        a.navigation.$nextEl &&
                                        (e = a.navigation.$nextEl),
                                    a.navigation &&
                                        a.navigation.$prevEl &&
                                        (t = a.navigation.$prevEl),
                                    e && e.off("keydown", h),
                                    t && t.off("keydown", h),
                                    g() &&
                                        a.pagination.$el.off(
                                            "keydown",
                                            I(a.params.pagination.bulletClass),
                                            h
                                        ),
                                    a.$el.off("focus", v, !0);
                            }
                        });
                },
                function (e) {
                    let { swiper: o, extendParams: t, on: i } = e,
                        a =
                            (t({
                                history: {
                                    enabled: !1,
                                    root: "",
                                    replaceState: !1,
                                    key: "slides",
                                },
                            }),
                            !1),
                        n = {};
                    const l = (e) =>
                            e
                                .toString()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]+/g, "")
                                .replace(/--+/g, "-")
                                .replace(/^-+/, "")
                                .replace(/-+$/, ""),
                        s = (e) => {
                            var t = L();
                            let i;
                            (e = (i = e ? new URL(e) : t.location).pathname
                                .slice(1)
                                .split("/")
                                .filter((e) => "" !== e)),
                                (t = e.length);
                            return { key: e[t - 2], value: e[t - 1] };
                        },
                        r = (i, n) => {
                            const s = L();
                            if (a && o.params.history.enabled) {
                                let e;
                                e = o.params.url
                                    ? new URL(o.params.url)
                                    : s.location;
                                const r = o.slides.eq(n);
                                let t = l(r.attr("data-history"));
                                if (0 < o.params.history.root.length) {
                                    let e = o.params.history.root;
                                    "/" === e[e.length - 1] &&
                                        (e = e.slice(0, e.length - 1)),
                                        (t = e + `/${i}/` + t);
                                } else
                                    e.pathname.includes(i) || (t = i + "/" + t);
                                n = s.history.state;
                                (n && n.value === t) ||
                                    (o.params.history.replaceState
                                        ? s.history.replaceState(
                                              { value: t },
                                              null,
                                              t
                                          )
                                        : s.history.pushState(
                                              { value: t },
                                              null,
                                              t
                                          ));
                            }
                        },
                        d = (i, n, s) => {
                            if (n)
                                for (
                                    let e = 0, t = o.slides.length;
                                    e < t;
                                    e += 1
                                ) {
                                    const r = o.slides.eq(e);
                                    if (
                                        l(r.attr("data-history")) === n &&
                                        !r.hasClass(
                                            o.params.slideDuplicateClass
                                        )
                                    ) {
                                        const n = r.index();
                                        o.slideTo(n, i, s);
                                    }
                                }
                            else o.slideTo(0, i, s);
                        },
                        c = () => {
                            (n = s(o.params.url)),
                                d(o.params.speed, o.paths.value, !1);
                        };
                    i("init", () => {
                        if (o.params.history.enabled) {
                            const e = L();
                            if (o.params.history) {
                                if (!e.history || !e.history.pushState)
                                    return void ((o.params.history.enabled =
                                        !1),
                                    (o.params.hashNavigation.enabled = !0));
                                (a = !0),
                                    ((n = s(o.params.url)).key || n.value) &&
                                        (d(
                                            0,
                                            n.value,
                                            o.params.runCallbacksOnInit
                                        ),
                                        o.params.history.replaceState ||
                                            e.addEventListener("popstate", c));
                            }
                        }
                    }),
                        i("destroy", () => {
                            if (o.params.history.enabled) {
                                const e = L();
                                o.params.history.replaceState ||
                                    e.removeEventListener("popstate", c);
                            }
                        }),
                        i("transitionEnd _freeModeNoMomentumRelease", () => {
                            a && r(o.params.history.key, o.activeIndex);
                        }),
                        i("slideChange", () => {
                            a &&
                                o.params.cssMode &&
                                r(o.params.history.key, o.activeIndex);
                        });
                },
                function (e) {
                    let { swiper: s, extendParams: t, emit: i, on: n } = e,
                        r = !1;
                    const o = E(),
                        a = L(),
                        l =
                            (t({
                                hashNavigation: {
                                    enabled: !1,
                                    replaceState: !1,
                                    watchState: !1,
                                },
                            }),
                            () => {
                                i("hashChange");
                                var e = o.location.hash.replace("#", "");
                                e !==
                                    s.slides
                                        .eq(s.activeIndex)
                                        .attr("data-hash") &&
                                    void 0 !==
                                        (e = s.$wrapperEl
                                            .children(
                                                `.${s.params.slideClass}[data-hash="${e}"]`
                                            )
                                            .index()) &&
                                    s.slideTo(e);
                            }),
                        d = () => {
                            if (r && s.params.hashNavigation.enabled)
                                if (
                                    s.params.hashNavigation.replaceState &&
                                    a.history &&
                                    a.history.replaceState
                                )
                                    a.history.replaceState(
                                        null,
                                        null,
                                        "#" +
                                            s.slides
                                                .eq(s.activeIndex)
                                                .attr("data-hash") || ""
                                    ),
                                        i("hashSet");
                                else {
                                    const e = s.slides.eq(s.activeIndex),
                                        t =
                                            e.attr("data-hash") ||
                                            e.attr("data-history");
                                    (o.location.hash = t || ""), i("hashSet");
                                }
                        };
                    n("init", () => {
                        if (
                            s.params.hashNavigation.enabled &&
                            !(
                                !s.params.hashNavigation.enabled ||
                                (s.params.history && s.params.history.enabled)
                            )
                        ) {
                            r = !0;
                            const i = o.location.hash.replace("#", "");
                            if (i)
                                for (
                                    let e = 0, t = s.slides.length;
                                    e < t;
                                    e += 1
                                ) {
                                    const n = s.slides.eq(e);
                                    if (
                                        (n.attr("data-hash") ||
                                            n.attr("data-history")) === i &&
                                        !n.hasClass(
                                            s.params.slideDuplicateClass
                                        )
                                    ) {
                                        const i = n.index();
                                        s.slideTo(
                                            i,
                                            0,
                                            s.params.runCallbacksOnInit,
                                            !0
                                        );
                                    }
                                }
                            s.params.hashNavigation.watchState &&
                                A(a).on("hashchange", l);
                        }
                    }),
                        n("destroy", () => {
                            s.params.hashNavigation.enabled &&
                                s.params.hashNavigation.watchState &&
                                A(a).off("hashchange", l);
                        }),
                        n("transitionEnd _freeModeNoMomentumRelease", () => {
                            r && d();
                        }),
                        n("slideChange", () => {
                            r && s.params.cssMode && d();
                        });
                },
                function (e) {
                    let i,
                        { swiper: n, extendParams: t, on: s, emit: r } = e;
                    function o() {
                        const e = n.slides.eq(n.activeIndex);
                        let t = n.params.autoplay.delay;
                        e.attr("data-swiper-autoplay") &&
                            (t =
                                e.attr("data-swiper-autoplay") ||
                                n.params.autoplay.delay),
                            clearTimeout(i),
                            (i = S(() => {
                                let e;
                                n.params.autoplay.reverseDirection
                                    ? n.params.loop
                                        ? (n.loopFix(),
                                          (e = n.slidePrev(
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          r("autoplay"))
                                        : n.isBeginning
                                        ? n.params.autoplay.stopOnLastSlide
                                            ? l()
                                            : ((e = n.slideTo(
                                                  n.slides.length - 1,
                                                  n.params.speed,
                                                  !0,
                                                  !0
                                              )),
                                              r("autoplay"))
                                        : ((e = n.slidePrev(
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          r("autoplay"))
                                    : n.params.loop
                                    ? (n.loopFix(),
                                      (e = n.slideNext(n.params.speed, !0, !0)),
                                      r("autoplay"))
                                    : n.isEnd
                                    ? n.params.autoplay.stopOnLastSlide
                                        ? l()
                                        : ((e = n.slideTo(
                                              0,
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          r("autoplay"))
                                    : ((e = n.slideNext(
                                          n.params.speed,
                                          !0,
                                          !0
                                      )),
                                      r("autoplay")),
                                    ((n.params.cssMode && n.autoplay.running) ||
                                        !1 === e) &&
                                        o();
                            }, t));
                    }
                    function a() {
                        return (
                            void 0 === i &&
                            !n.autoplay.running &&
                            ((n.autoplay.running = !0),
                            r("autoplayStart"),
                            o(),
                            !0)
                        );
                    }
                    function l() {
                        return (
                            !!n.autoplay.running &&
                            void 0 !== i &&
                            (i && (clearTimeout(i), (i = void 0)),
                            (n.autoplay.running = !1),
                            r("autoplayStop"),
                            !0)
                        );
                    }
                    function d(e) {
                        !n.autoplay.running ||
                            n.autoplay.paused ||
                            (i && clearTimeout(i),
                            (n.autoplay.paused = !0),
                            0 !== e && n.params.autoplay.waitForTransition
                                ? [
                                      "transitionend",
                                      "webkitTransitionEnd",
                                  ].forEach((e) => {
                                      n.$wrapperEl[0].addEventListener(e, u);
                                  })
                                : ((n.autoplay.paused = !1), o()));
                    }
                    function c() {
                        var e = E();
                        "hidden" === e.visibilityState &&
                            n.autoplay.running &&
                            d(),
                            "visible" === e.visibilityState &&
                                n.autoplay.paused &&
                                (o(), (n.autoplay.paused = !1));
                    }
                    function u(e) {
                        n &&
                            !n.destroyed &&
                            n.$wrapperEl &&
                            e.target === n.$wrapperEl[0] &&
                            (["transitionend", "webkitTransitionEnd"].forEach(
                                (e) => {
                                    n.$wrapperEl[0].removeEventListener(e, u);
                                }
                            ),
                            (n.autoplay.paused = !1),
                            (n.autoplay.running ? o : l)());
                    }
                    function p() {
                        n.params.autoplay.disableOnInteraction
                            ? l()
                            : (r("autoplayPause"), d()),
                            ["transitionend", "webkitTransitionEnd"].forEach(
                                (e) => {
                                    n.$wrapperEl[0].removeEventListener(e, u);
                                }
                            );
                    }
                    function h() {
                        n.params.autoplay.disableOnInteraction ||
                            ((n.autoplay.paused = !1),
                            r("autoplayResume"),
                            o());
                    }
                    (n.autoplay = { running: !1, paused: !1 }),
                        t({
                            autoplay: {
                                enabled: !1,
                                delay: 3e3,
                                waitForTransition: !0,
                                disableOnInteraction: !0,
                                stopOnLastSlide: !1,
                                reverseDirection: !1,
                                pauseOnMouseEnter: !1,
                            },
                        }),
                        s("init", () => {
                            n.params.autoplay.enabled &&
                                (a(),
                                E().addEventListener("visibilitychange", c),
                                n.params.autoplay.pauseOnMouseEnter &&
                                    (n.$el.on("mouseenter", p),
                                    n.$el.on("mouseleave", h)));
                        }),
                        s("beforeTransitionStart", (e, t, i) => {
                            n.autoplay.running &&
                                (i || !n.params.autoplay.disableOnInteraction
                                    ? n.autoplay.pause(t)
                                    : l());
                        }),
                        s("sliderFirstMove", () => {
                            n.autoplay.running &&
                                (n.params.autoplay.disableOnInteraction
                                    ? l
                                    : d)();
                        }),
                        s("touchEnd", () => {
                            n.params.cssMode &&
                                n.autoplay.paused &&
                                !n.params.autoplay.disableOnInteraction &&
                                o();
                        }),
                        s("destroy", () => {
                            n.$el.off("mouseenter", p),
                                n.$el.off("mouseleave", h),
                                n.autoplay.running && l(),
                                E().removeEventListener("visibilitychange", c);
                        }),
                        Object.assign(n.autoplay, {
                            pause: d,
                            run: o,
                            start: a,
                            stop: l,
                        });
                },
                function (e) {
                    let { swiper: l, extendParams: t, on: i } = e,
                        n =
                            (t({
                                thumbs: {
                                    swiper: null,
                                    multipleActiveThumbs: !0,
                                    autoScrollOffset: 0,
                                    slideThumbActiveClass:
                                        "swiper-slide-thumb-active",
                                    thumbsContainerClass: "swiper-thumbs",
                                },
                            }),
                            !1),
                        s = !1;
                    function r() {
                        var e = l.thumbs.swiper;
                        if (e) {
                            const i = e.clickedIndex,
                                n = e.clickedSlide;
                            if (
                                !(
                                    (n &&
                                        A(n).hasClass(
                                            l.params.thumbs
                                                .slideThumbActiveClass
                                        )) ||
                                    null == i
                                )
                            ) {
                                let t;
                                if (
                                    ((t = e.params.loop
                                        ? parseInt(
                                              A(e.clickedSlide).attr(
                                                  "data-swiper-slide-index"
                                              ),
                                              10
                                          )
                                        : i),
                                    l.params.loop)
                                ) {
                                    let e = l.activeIndex;
                                    l.slides
                                        .eq(e)
                                        .hasClass(
                                            l.params.slideDuplicateClass
                                        ) &&
                                        (l.loopFix(),
                                        (l._clientLeft =
                                            l.$wrapperEl[0].clientLeft),
                                        (e = l.activeIndex));
                                    const i = l.slides
                                            .eq(e)
                                            .prevAll(
                                                `[data-swiper-slide-index="${t}"]`
                                            )
                                            .eq(0)
                                            .index(),
                                        n = l.slides
                                            .eq(e)
                                            .nextAll(
                                                `[data-swiper-slide-index="${t}"]`
                                            )
                                            .eq(0)
                                            .index();
                                    t =
                                        void 0 === i ||
                                        (void 0 !== n && n - e < e - i)
                                            ? n
                                            : i;
                                }
                                l.slideTo(t);
                            }
                        }
                    }
                    function o() {
                        var e = l.params["thumbs"];
                        if (n) return !1;
                        n = !0;
                        const t = l.constructor;
                        return (
                            e.swiper instanceof t
                                ? ((l.thumbs.swiper = e.swiper),
                                  Object.assign(
                                      l.thumbs.swiper.originalParams,
                                      {
                                          watchSlidesProgress: !0,
                                          slideToClickedSlide: !1,
                                      }
                                  ),
                                  Object.assign(l.thumbs.swiper.params, {
                                      watchSlidesProgress: !0,
                                      slideToClickedSlide: !1,
                                  }))
                                : d(e.swiper) &&
                                  ((e = Object.assign({}, e.swiper)),
                                  Object.assign(e, {
                                      watchSlidesProgress: !0,
                                      slideToClickedSlide: !1,
                                  }),
                                  (l.thumbs.swiper = new t(e)),
                                  (s = !0)),
                            l.thumbs.swiper.$el.addClass(
                                l.params.thumbs.thumbsContainerClass
                            ),
                            l.thumbs.swiper.on("tap", r),
                            !0
                        );
                    }
                    function a(n) {
                        const s = l.thumbs.swiper;
                        if (s) {
                            const r =
                                    "auto" === s.params.slidesPerView
                                        ? s.slidesPerViewDynamic()
                                        : s.params.slidesPerView,
                                o = l.params.thumbs.autoScrollOffset,
                                a = o && !s.params.loop;
                            if (l.realIndex !== s.realIndex || a) {
                                let e,
                                    t,
                                    i = s.activeIndex;
                                if (s.params.loop) {
                                    s.slides
                                        .eq(i)
                                        .hasClass(
                                            s.params.slideDuplicateClass
                                        ) &&
                                        (s.loopFix(),
                                        (s._clientLeft =
                                            s.$wrapperEl[0].clientLeft),
                                        (i = s.activeIndex));
                                    const n = s.slides
                                            .eq(i)
                                            .prevAll(
                                                `[data-swiper-slide-index="${l.realIndex}"]`
                                            )
                                            .eq(0)
                                            .index(),
                                        r = s.slides
                                            .eq(i)
                                            .nextAll(
                                                `[data-swiper-slide-index="${l.realIndex}"]`
                                            )
                                            .eq(0)
                                            .index();
                                    (e =
                                        void 0 === n
                                            ? r
                                            : void 0 === r
                                            ? n
                                            : r - i == i - n
                                            ? 1 < s.params.slidesPerGroup
                                                ? r
                                                : i
                                            : r - i < i - n
                                            ? r
                                            : n),
                                        (t =
                                            l.activeIndex > l.previousIndex
                                                ? "next"
                                                : "prev");
                                } else
                                    (e = l.realIndex),
                                        (t =
                                            e > l.previousIndex
                                                ? "next"
                                                : "prev");
                                a && (e += "next" === t ? o : -1 * o),
                                    s.visibleSlidesIndexes &&
                                        s.visibleSlidesIndexes.indexOf(e) < 0 &&
                                        (s.params.centeredSlides
                                            ? (e =
                                                  e > i
                                                      ? e -
                                                        Math.floor(r / 2) +
                                                        1
                                                      : e +
                                                        Math.floor(r / 2) -
                                                        1)
                                            : e > i && s.params.slidesPerGroup,
                                        s.slideTo(e, n ? 0 : void 0));
                            }
                            let t = 1;
                            var i = l.params.thumbs.slideThumbActiveClass;
                            if (
                                (1 < l.params.slidesPerView &&
                                    !l.params.centeredSlides &&
                                    (t = l.params.slidesPerView),
                                l.params.thumbs.multipleActiveThumbs || (t = 1),
                                (t = Math.floor(t)),
                                s.slides.removeClass(i),
                                s.params.loop ||
                                    (s.params.virtual &&
                                        s.params.virtual.enabled))
                            )
                                for (let e = 0; e < t; e += 1)
                                    s.$wrapperEl
                                        .children(
                                            `[data-swiper-slide-index="${
                                                l.realIndex + e
                                            }"]`
                                        )
                                        .addClass(i);
                            else
                                for (let e = 0; e < t; e += 1)
                                    s.slides.eq(l.realIndex + e).addClass(i);
                        }
                    }
                    (l.thumbs = { swiper: null }),
                        i("beforeInit", () => {
                            var e = l.params["thumbs"];
                            e && e.swiper && (o(), a(!0));
                        }),
                        i("slideChange update resize observerUpdate", () => {
                            l.thumbs.swiper && a();
                        }),
                        i("setTransition", (e, t) => {
                            const i = l.thumbs.swiper;
                            i && i.setTransition(t);
                        }),
                        i("beforeDestroy", () => {
                            const e = l.thumbs.swiper;
                            e && s && e && e.destroy();
                        }),
                        Object.assign(l.thumbs, { init: o, update: a });
                },
                function (e) {
                    let { swiper: p, extendParams: t, emit: h, once: f } = e;
                    t({
                        freeMode: {
                            enabled: !1,
                            momentum: !0,
                            momentumRatio: 1,
                            momentumBounce: !0,
                            momentumBounceRatio: 1,
                            momentumVelocityRatio: 1,
                            sticky: !1,
                            minimumVelocity: 0.02,
                        },
                    }),
                        Object.assign(p, {
                            freeMode: {
                                onTouchStart: function () {
                                    var e = p.getTranslate();
                                    p.setTranslate(e),
                                        p.setTransition(0),
                                        (p.touchEventsData.velocities.length = 0),
                                        p.freeMode.onTouchEnd({
                                            currentPos: p.rtl
                                                ? p.translate
                                                : -p.translate,
                                        });
                                },
                                onTouchMove: function () {
                                    const { touchEventsData: e, touches: t } =
                                        p;
                                    0 === e.velocities.length &&
                                        e.velocities.push({
                                            position:
                                                t[
                                                    p.isHorizontal()
                                                        ? "startX"
                                                        : "startY"
                                                ],
                                            time: e.touchStartTime,
                                        }),
                                        e.velocities.push({
                                            position:
                                                t[
                                                    p.isHorizontal()
                                                        ? "currentX"
                                                        : "currentY"
                                                ],
                                            time: v(),
                                        });
                                },
                                onTouchEnd: function (r) {
                                    let o = r["currentPos"];
                                    const {
                                            params: a,
                                            $wrapperEl: l,
                                            rtlTranslate: d,
                                            snapGrid: c,
                                            touchEventsData: u,
                                        } = p,
                                        e = v() - u.touchStartTime;
                                    if (o < -p.minTranslate())
                                        p.slideTo(p.activeIndex);
                                    else if (o > -p.maxTranslate())
                                        p.slides.length < c.length
                                            ? p.slideTo(c.length - 1)
                                            : p.slideTo(p.slides.length - 1);
                                    else {
                                        if (a.freeMode.momentum) {
                                            if (1 < u.velocities.length) {
                                                const r = u.velocities.pop(),
                                                    o = u.velocities.pop(),
                                                    h = r.position - o.position,
                                                    f = r.time - o.time;
                                                (p.velocity = h / f),
                                                    (p.velocity /= 2),
                                                    Math.abs(p.velocity) <
                                                        a.freeMode
                                                            .minimumVelocity &&
                                                        (p.velocity = 0),
                                                    (150 < f ||
                                                        300 < v() - r.time) &&
                                                        (p.velocity = 0);
                                            } else p.velocity = 0;
                                            (p.velocity *=
                                                a.freeMode.momentumVelocityRatio),
                                                (u.velocities.length = 0);
                                            let e =
                                                1e3 * a.freeMode.momentumRatio;
                                            const o = p.velocity * e;
                                            let i = p.translate + o;
                                            d && (i = -i);
                                            let t,
                                                n = !1;
                                            r =
                                                20 *
                                                Math.abs(p.velocity) *
                                                a.freeMode.momentumBounceRatio;
                                            let s;
                                            if (i < p.maxTranslate())
                                                a.freeMode.momentumBounce
                                                    ? (i + p.maxTranslate() <
                                                          -r &&
                                                          (i =
                                                              p.maxTranslate() -
                                                              r),
                                                      (t = p.maxTranslate()),
                                                      (n = !0),
                                                      (u.allowMomentumBounce =
                                                          !0))
                                                    : (i = p.maxTranslate()),
                                                    a.loop &&
                                                        a.centeredSlides &&
                                                        (s = !0);
                                            else if (i > p.minTranslate())
                                                a.freeMode.momentumBounce
                                                    ? (i - p.minTranslate() >
                                                          r &&
                                                          (i =
                                                              p.minTranslate() +
                                                              r),
                                                      (t = p.minTranslate()),
                                                      (n = !0),
                                                      (u.allowMomentumBounce =
                                                          !0))
                                                    : (i = p.minTranslate()),
                                                    a.loop &&
                                                        a.centeredSlides &&
                                                        (s = !0);
                                            else if (a.freeMode.sticky) {
                                                let t;
                                                for (
                                                    let e = 0;
                                                    e < c.length;
                                                    e += 1
                                                )
                                                    if (c[e] > -i) {
                                                        t = e;
                                                        break;
                                                    }
                                                i = -(i =
                                                    Math.abs(c[t] - i) <
                                                        Math.abs(
                                                            c[t - 1] - i
                                                        ) ||
                                                    "next" === p.swipeDirection
                                                        ? c[t]
                                                        : c[t - 1]);
                                            }
                                            if (
                                                (s &&
                                                    f("transitionEnd", () => {
                                                        p.loopFix();
                                                    }),
                                                0 !== p.velocity)
                                            ) {
                                                if (
                                                    ((e = d
                                                        ? Math.abs(
                                                              (-i -
                                                                  p.translate) /
                                                                  p.velocity
                                                          )
                                                        : Math.abs(
                                                              (i -
                                                                  p.translate) /
                                                                  p.velocity
                                                          )),
                                                    a.freeMode.sticky)
                                                ) {
                                                    const o = Math.abs(
                                                            (d ? -i : i) -
                                                                p.translate
                                                        ),
                                                        h =
                                                            p.slidesSizesGrid[
                                                                p.activeIndex
                                                            ];
                                                    e =
                                                        o < h
                                                            ? a.speed
                                                            : o < 2 * h
                                                            ? 1.5 * a.speed
                                                            : 2.5 * a.speed;
                                                }
                                            } else if (a.freeMode.sticky)
                                                return void p.slideToClosest();
                                            a.freeMode.momentumBounce && n
                                                ? (p.updateProgress(t),
                                                  p.setTransition(e),
                                                  p.setTranslate(i),
                                                  p.transitionStart(
                                                      !0,
                                                      p.swipeDirection
                                                  ),
                                                  (p.animating = !0),
                                                  l.transitionEnd(() => {
                                                      p &&
                                                          !p.destroyed &&
                                                          u.allowMomentumBounce &&
                                                          (h("momentumBounce"),
                                                          p.setTransition(
                                                              a.speed
                                                          ),
                                                          setTimeout(() => {
                                                              p.setTranslate(t),
                                                                  l.transitionEnd(
                                                                      () => {
                                                                          p &&
                                                                              !p.destroyed &&
                                                                              p.transitionEnd();
                                                                      }
                                                                  );
                                                          }, 0));
                                                  }))
                                                : p.velocity
                                                ? (h(
                                                      "_freeModeNoMomentumRelease"
                                                  ),
                                                  p.updateProgress(i),
                                                  p.setTransition(e),
                                                  p.setTranslate(i),
                                                  p.transitionStart(
                                                      !0,
                                                      p.swipeDirection
                                                  ),
                                                  p.animating ||
                                                      ((p.animating = !0),
                                                      l.transitionEnd(() => {
                                                          p &&
                                                              !p.destroyed &&
                                                              p.transitionEnd();
                                                      })))
                                                : p.updateProgress(i),
                                                p.updateActiveIndex(),
                                                p.updateSlidesClasses();
                                        } else {
                                            if (a.freeMode.sticky)
                                                return void p.slideToClosest();
                                            a.freeMode &&
                                                h("_freeModeNoMomentumRelease");
                                        }
                                        (!a.freeMode.momentum ||
                                            e >= a.longSwipesMs) &&
                                            (p.updateProgress(),
                                            p.updateActiveIndex(),
                                            p.updateSlidesClasses());
                                    }
                                },
                            },
                        });
                },
                function (e) {
                    let u,
                        p,
                        h,
                        { swiper: f, extendParams: t } = e;
                    t({ grid: { rows: 1, fill: "column" } }),
                        (f.grid = {
                            initSlides: (e) => {
                                var t = f.params["slidesPerView"],
                                    { rows: i, fill: n } = f.params.grid;
                                (p = u / i),
                                    (h = Math.floor(e / i)),
                                    (u =
                                        Math.floor(e / i) === e / i
                                            ? e
                                            : Math.ceil(e / i) * i),
                                    "auto" !== t &&
                                        "row" === n &&
                                        (u = Math.max(u, t * i));
                            },
                            updateSlide: (e, t, i, n) => {
                                var { slidesPerGroup: s, spaceBetween: r } =
                                        f.params,
                                    { rows: o, fill: a } = f.params.grid;
                                let l, d, c;
                                if ("row" === a && 1 < s) {
                                    const p = Math.floor(e / (s * o)),
                                        h = e - o * s * p,
                                        f =
                                            0 === p
                                                ? s
                                                : Math.min(
                                                      Math.ceil(
                                                          (i - p * o * s) / o
                                                      ),
                                                      s
                                                  );
                                    (c = Math.floor(h / f)),
                                        (l =
                                            (d = h - c * f + p * s) +
                                            (c * u) / o),
                                        t.css({ "-webkit-order": l, order: l });
                                } else
                                    "column" === a
                                        ? ((d = Math.floor(e / o)),
                                          (c = e - d * o),
                                          (d > h || (d === h && c === o - 1)) &&
                                              (c += 1) >= o &&
                                              ((c = 0), (d += 1)))
                                        : ((c = Math.floor(e / p)),
                                          (d = e - c * p));
                                t.css(
                                    n("margin-top"),
                                    0 !== c ? r && r + "px" : ""
                                );
                            },
                            updateWrapperSize: (i, n, e) => {
                                var {
                                        spaceBetween: t,
                                        centeredSlides: s,
                                        roundLengths: r,
                                    } = f.params,
                                    o = f.params.grid["rows"];
                                if (
                                    ((f.virtualSize = (i + t) * u),
                                    (f.virtualSize =
                                        Math.ceil(f.virtualSize / o) - t),
                                    f.$wrapperEl.css({
                                        [e("width")]: f.virtualSize + t + "px",
                                    }),
                                    s)
                                ) {
                                    n.splice(0, n.length);
                                    const i = [];
                                    for (let t = 0; t < n.length; t += 1) {
                                        let e = n[t];
                                        r && (e = Math.floor(e)),
                                            n[t] < f.virtualSize + n[0] &&
                                                i.push(e);
                                    }
                                    n.push(...i);
                                }
                            },
                        });
                },
                function (e) {
                    e = e.swiper;
                    Object.assign(e, {
                        appendSlide: function (t) {
                            const { $wrapperEl: i, params: e } = this;
                            if (
                                (e.loop && this.loopDestroy(),
                                "object" == typeof t && "length" in t)
                            )
                                for (let e = 0; e < t.length; e += 1)
                                    t[e] && i.append(t[e]);
                            else i.append(t);
                            e.loop && this.loopCreate(),
                                e.observer || this.update();
                        }.bind(e),
                        prependSlide: function (t) {
                            const {
                                params: e,
                                $wrapperEl: i,
                                activeIndex: n,
                            } = this;
                            e.loop && this.loopDestroy();
                            let s = n + 1;
                            if ("object" == typeof t && "length" in t) {
                                for (let e = 0; e < t.length; e += 1)
                                    t[e] && i.prepend(t[e]);
                                s = n + t.length;
                            } else i.prepend(t);
                            e.loop && this.loopCreate(),
                                e.observer || this.update(),
                                this.slideTo(s, 0, !1);
                        }.bind(e),
                        addSlide: function (t, i) {
                            const n = this,
                                {
                                    $wrapperEl: s,
                                    params: r,
                                    activeIndex: e,
                                } = n;
                            let o = e;
                            r.loop &&
                                ((o -= n.loopedSlides),
                                n.loopDestroy(),
                                (n.slides = s.children("." + r.slideClass)));
                            var a = n.slides.length;
                            if (t <= 0) n.prependSlide(i);
                            else if (a <= t) n.appendSlide(i);
                            else {
                                let e = o > t ? o + 1 : o;
                                const l = [];
                                for (let e = a - 1; e >= t; --e) {
                                    const t = n.slides.eq(e);
                                    t.remove(), l.unshift(t);
                                }
                                if ("object" == typeof i && "length" in i) {
                                    for (let e = 0; e < i.length; e += 1)
                                        i[e] && s.append(i[e]);
                                    e = o > t ? o + i.length : o;
                                } else s.append(i);
                                for (let e = 0; e < l.length; e += 1)
                                    s.append(l[e]);
                                r.loop && n.loopCreate(),
                                    r.observer || n.update(),
                                    r.loop
                                        ? n.slideTo(e + n.loopedSlides, 0, !1)
                                        : n.slideTo(e, 0, !1);
                            }
                        }.bind(e),
                        removeSlide: function (t) {
                            const i = this,
                                {
                                    params: e,
                                    $wrapperEl: n,
                                    activeIndex: s,
                                } = i;
                            let r = s;
                            e.loop &&
                                ((r -= i.loopedSlides),
                                i.loopDestroy(),
                                (i.slides = n.children("." + e.slideClass)));
                            let o,
                                a = r;
                            if ("object" == typeof t && "length" in t) {
                                for (let e = 0; e < t.length; e += 1)
                                    (o = t[e]),
                                        i.slides[o] && i.slides.eq(o).remove(),
                                        o < a && --a;
                                a = Math.max(a, 0);
                            } else
                                (o = t),
                                    i.slides[o] && i.slides.eq(o).remove(),
                                    o < a && --a,
                                    (a = Math.max(a, 0));
                            e.loop && i.loopCreate(),
                                e.observer || i.update(),
                                e.loop
                                    ? i.slideTo(a + i.loopedSlides, 0, !1)
                                    : i.slideTo(a, 0, !1);
                        }.bind(e),
                        removeAllSlides: function () {
                            const t = [];
                            for (let e = 0; e < this.slides.length; e += 1)
                                t.push(e);
                            this.removeSlide(t);
                        }.bind(e),
                    });
                },
                function (e) {
                    let { swiper: o, extendParams: t, on: i } = e;
                    t({ fadeEffect: { crossFade: !1, transformEl: null } }),
                        P({
                            effect: "fade",
                            swiper: o,
                            on: i,
                            setTranslate: () => {
                                const n = o["slides"],
                                    s = o.params.fadeEffect;
                                for (let i = 0; i < n.length; i += 1) {
                                    const n = o.slides.eq(i);
                                    let e = -n[0].swiperSlideOffset,
                                        t =
                                            (o.params.virtualTranslate ||
                                                (e -= o.translate),
                                            0);
                                    o.isHorizontal() || ((t = e), (e = 0));
                                    var r = o.params.fadeEffect.crossFade
                                        ? Math.max(
                                              1 - Math.abs(n[0].progress),
                                              0
                                          )
                                        : 1 +
                                          Math.min(
                                              Math.max(n[0].progress, -1),
                                              0
                                          );
                                    D(s, n)
                                        .css({ opacity: r })
                                        .transform(
                                            `translate3d(${e}px, ${t}px, 0px)`
                                        );
                                }
                            },
                            setTransition: (e) => {
                                var t = o.params.fadeEffect["transformEl"];
                                (t ? o.slides.find(t) : o.slides).transition(e),
                                    z({
                                        swiper: o,
                                        duration: e,
                                        transformEl: t,
                                        allSlides: !0,
                                    });
                            },
                            overwriteParams: () => ({
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !o.params.cssMode,
                            }),
                        });
                },
                function (e) {
                    let { swiper: m, extendParams: t, on: i } = e;
                    t({
                        cubeEffect: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        },
                    }),
                        P({
                            effect: "cube",
                            swiper: m,
                            on: i,
                            setTranslate: () => {
                                const {
                                        $el: e,
                                        $wrapperEl: t,
                                        slides: a,
                                        width: i,
                                        height: n,
                                        rtlTranslate: l,
                                        size: d,
                                        browser: c,
                                    } = m,
                                    u = m.params.cubeEffect,
                                    p = m.isHorizontal(),
                                    h = m.virtual && m.params.virtual.enabled;
                                let s,
                                    f = 0;
                                u.shadow &&
                                    (p
                                        ? (0 ===
                                              (s = t.find(
                                                  ".swiper-cube-shadow"
                                              )).length &&
                                              ((s = A(
                                                  '<div class="swiper-cube-shadow"></div>'
                                              )),
                                              t.append(s)),
                                          s.css({ height: i + "px" }))
                                        : 0 ===
                                              (s = e.find(
                                                  ".swiper-cube-shadow"
                                              )).length &&
                                          ((s = A(
                                              '<div class="swiper-cube-shadow"></div>'
                                          )),
                                          e.append(s)));
                                for (let o = 0; o < a.length; o += 1) {
                                    const m = a.eq(o);
                                    let e = o,
                                        t =
                                            90 *
                                            (e = h
                                                ? parseInt(
                                                      m.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      10
                                                  )
                                                : e),
                                        i = Math.floor(t / 360);
                                    l && ((t = -t), (i = Math.floor(-t / 360)));
                                    const c = Math.max(
                                        Math.min(m[0].progress, 1),
                                        -1
                                    );
                                    let n = 0,
                                        s = 0,
                                        r = 0;
                                    e % 4 == 0
                                        ? ((n = 4 * -i * d), (r = 0))
                                        : (e - 1) % 4 == 0
                                        ? ((n = 0), (r = 4 * -i * d))
                                        : (e - 2) % 4 == 0
                                        ? ((n = d + 4 * i * d), (r = d))
                                        : (e - 3) % 4 == 0 &&
                                          ((n = -d), (r = 3 * d + 4 * d * i)),
                                        l && (n = -n),
                                        p || ((s = n), (n = 0));
                                    var g = `rotateX(${
                                        p ? 0 : -t
                                    }deg) rotateY(${
                                        p ? t : 0
                                    }deg) translate3d(${n}px, ${s}px, ${r}px)`;
                                    if (
                                        (c <= 1 &&
                                            -1 < c &&
                                            ((f = 90 * e + 90 * c),
                                            l && (f = 90 * -e - 90 * c)),
                                        m.transform(g),
                                        u.slideShadows)
                                    ) {
                                        let e = p
                                                ? m.find(
                                                      ".swiper-slide-shadow-left"
                                                  )
                                                : m.find(
                                                      ".swiper-slide-shadow-top"
                                                  ),
                                            t = p
                                                ? m.find(
                                                      ".swiper-slide-shadow-right"
                                                  )
                                                : m.find(
                                                      ".swiper-slide-shadow-bottom"
                                                  );
                                        0 === e.length &&
                                            ((e = A(
                                                `<div class="swiper-slide-shadow-${
                                                    p ? "left" : "top"
                                                }"></div>`
                                            )),
                                            m.append(e)),
                                            0 === t.length &&
                                                ((t = A(
                                                    `<div class="swiper-slide-shadow-${
                                                        p ? "right" : "bottom"
                                                    }"></div>`
                                                )),
                                                m.append(t)),
                                            e.length &&
                                                (e[0].style.opacity = Math.max(
                                                    -c,
                                                    0
                                                )),
                                            t.length &&
                                                (t[0].style.opacity = Math.max(
                                                    c,
                                                    0
                                                ));
                                    }
                                }
                                if (
                                    (t.css({
                                        "-webkit-transform-origin": `50% 50% -${
                                            d / 2
                                        }px`,
                                        "transform-origin": `50% 50% -${
                                            d / 2
                                        }px`,
                                    }),
                                    u.shadow)
                                )
                                    if (p)
                                        s.transform(
                                            `translate3d(0px, ${
                                                i / 2 + u.shadowOffset
                                            }px, ${
                                                -i / 2
                                            }px) rotateX(90deg) rotateZ(0deg) scale(${
                                                u.shadowScale
                                            })`
                                        );
                                    else {
                                        const e =
                                                Math.abs(f) -
                                                90 *
                                                    Math.floor(
                                                        Math.abs(f) / 90
                                                    ),
                                            m =
                                                1.5 -
                                                (Math.sin(
                                                    (2 * e * Math.PI) / 360
                                                ) /
                                                    2 +
                                                    Math.cos(
                                                        (2 * e * Math.PI) / 360
                                                    ) /
                                                        2),
                                            t = u.shadowScale,
                                            a = u.shadowScale / m,
                                            i = u.shadowOffset;
                                        s.transform(
                                            `scale3d(${t}, 1, ${a}) translate3d(0px, ${
                                                n / 2 + i
                                            }px, ${
                                                -n / 2 / a
                                            }px) rotateX(-90deg)`
                                        );
                                    }
                                var r = c.isSafari || c.isWebView ? -d / 2 : 0;
                                t.transform(
                                    `translate3d(0px,0,${r}px) rotateX(${
                                        m.isHorizontal() ? 0 : f
                                    }deg) rotateY(${
                                        m.isHorizontal() ? -f : 0
                                    }deg)`
                                );
                            },
                            setTransition: (e) => {
                                const { $el: t, slides: i } = m;
                                i
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e),
                                    m.params.cubeEffect.shadow &&
                                        !m.isHorizontal() &&
                                        t
                                            .find(".swiper-cube-shadow")
                                            .transition(e);
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0,
                            }),
                        });
                },
                function (e) {
                    let { swiper: u, extendParams: t, on: i } = e;
                    t({
                        flipEffect: {
                            slideShadows: !0,
                            limitRotation: !0,
                            transformEl: null,
                        },
                    }),
                        P({
                            effect: "flip",
                            swiper: u,
                            on: i,
                            setTranslate: () => {
                                const { slides: o, rtlTranslate: a } = u,
                                    l = u.params.flipEffect;
                                for (let r = 0; r < o.length; r += 1) {
                                    const c = o.eq(r);
                                    let i = c[0].progress;
                                    u.params.flipEffect.limitRotation &&
                                        (i = Math.max(
                                            Math.min(c[0].progress, 1),
                                            -1
                                        ));
                                    var d = c[0].swiperSlideOffset;
                                    let e = -180 * i,
                                        t = 0,
                                        n = u.params.cssMode
                                            ? -d - u.translate
                                            : -d,
                                        s = 0;
                                    if (
                                        (u.isHorizontal()
                                            ? a && (e = -e)
                                            : ((s = n),
                                              (n = 0),
                                              (t = -e),
                                              (e = 0)),
                                        (c[0].style.zIndex =
                                            -Math.abs(Math.round(i)) +
                                            o.length),
                                        l.slideShadows)
                                    ) {
                                        let e = u.isHorizontal()
                                                ? c.find(
                                                      ".swiper-slide-shadow-left"
                                                  )
                                                : c.find(
                                                      ".swiper-slide-shadow-top"
                                                  ),
                                            t = u.isHorizontal()
                                                ? c.find(
                                                      ".swiper-slide-shadow-right"
                                                  )
                                                : c.find(
                                                      ".swiper-slide-shadow-bottom"
                                                  );
                                        0 === e.length &&
                                            (e = O(
                                                l,
                                                c,
                                                u.isHorizontal()
                                                    ? "left"
                                                    : "top"
                                            )),
                                            0 === t.length &&
                                                (t = O(
                                                    l,
                                                    c,
                                                    u.isHorizontal()
                                                        ? "right"
                                                        : "bottom"
                                                )),
                                            e.length &&
                                                (e[0].style.opacity = Math.max(
                                                    -i,
                                                    0
                                                )),
                                            t.length &&
                                                (t[0].style.opacity = Math.max(
                                                    i,
                                                    0
                                                ));
                                    }
                                    d = `translate3d(${n}px, ${s}px, 0px) rotateX(${t}deg) rotateY(${e}deg)`;
                                    D(l, c).transform(d);
                                }
                            },
                            setTransition: (e) => {
                                var t = u.params.flipEffect["transformEl"];
                                (t ? u.slides.find(t) : u.slides)
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e),
                                    z({
                                        swiper: u,
                                        duration: e,
                                        transformEl: t,
                                    });
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !u.params.cssMode,
                            }),
                        });
                },
                function (e) {
                    let { swiper: y, extendParams: t, on: i } = e;
                    t({
                        coverflowEffect: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            scale: 1,
                            modifier: 1,
                            slideShadows: !0,
                            transformEl: null,
                        },
                    }),
                        P({
                            effect: "coverflow",
                            swiper: y,
                            on: i,
                            setTranslate: () => {
                                const {
                                        width: e,
                                        height: l,
                                        slides: d,
                                        slidesSizesGrid: c,
                                    } = y,
                                    u = y.params.coverflowEffect,
                                    p = y.isHorizontal(),
                                    h = y.translate,
                                    f = p ? e / 2 - h : l / 2 - h,
                                    g = p ? u.rotate : -u.rotate,
                                    m = u.depth;
                                for (let a = 0, e = d.length; a < e; a += 1) {
                                    const y = d.eq(a),
                                        l = c[a],
                                        h =
                                            ((f -
                                                y[0].swiperSlideOffset -
                                                l / 2) /
                                                l) *
                                            u.modifier;
                                    let e = p ? g * h : 0,
                                        t = p ? 0 : g * h,
                                        i = -m * Math.abs(h),
                                        n = u.stretch,
                                        s =
                                            ("string" == typeof n &&
                                                -1 !== n.indexOf("%") &&
                                                (n =
                                                    (parseFloat(u.stretch) /
                                                        100) *
                                                    l),
                                            p ? 0 : n * h),
                                        r = p ? n * h : 0,
                                        o = 1 - (1 - u.scale) * Math.abs(h);
                                    Math.abs(r) < 0.001 && (r = 0),
                                        Math.abs(s) < 0.001 && (s = 0),
                                        Math.abs(i) < 0.001 && (i = 0),
                                        Math.abs(e) < 0.001 && (e = 0),
                                        Math.abs(t) < 0.001 && (t = 0),
                                        Math.abs(o) < 0.001 && (o = 0);
                                    var v = `translate3d(${r}px,${s}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${o})`;
                                    if (
                                        (D(u, y).transform(v),
                                        (y[0].style.zIndex =
                                            1 - Math.abs(Math.round(h))),
                                        u.slideShadows)
                                    ) {
                                        let e = p
                                                ? y.find(
                                                      ".swiper-slide-shadow-left"
                                                  )
                                                : y.find(
                                                      ".swiper-slide-shadow-top"
                                                  ),
                                            t = p
                                                ? y.find(
                                                      ".swiper-slide-shadow-right"
                                                  )
                                                : y.find(
                                                      ".swiper-slide-shadow-bottom"
                                                  );
                                        0 === e.length &&
                                            (e = O(u, y, p ? "left" : "top")),
                                            0 === t.length &&
                                                (t = O(
                                                    u,
                                                    y,
                                                    p ? "right" : "bottom"
                                                )),
                                            e.length &&
                                                (e[0].style.opacity =
                                                    0 < h ? h : 0),
                                            t.length &&
                                                (t[0].style.opacity =
                                                    0 < -h ? -h : 0);
                                    }
                                }
                            },
                            setTransition: (e) => {
                                var t = y.params.coverflowEffect["transformEl"];
                                (t ? y.slides.find(t) : y.slides)
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e);
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({
                                watchSlidesProgress: !0,
                            }),
                        });
                },
                function (e) {
                    let { swiper: b, extendParams: t, on: i } = e;
                    t({
                        creativeEffect: {
                            transformEl: null,
                            limitProgress: 1,
                            shadowPerProgress: !1,
                            progressMultiplier: 1,
                            perspective: !0,
                            prev: {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                opacity: 1,
                                scale: 1,
                            },
                            next: {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                opacity: 1,
                                scale: 1,
                            },
                        },
                    });
                    P({
                        effect: "creative",
                        swiper: b,
                        on: i,
                        setTranslate: () => {
                            const {
                                    slides: s,
                                    $wrapperEl: e,
                                    slidesSizesGrid: r,
                                } = b,
                                o = b.params.creativeEffect,
                                a = o["progressMultiplier"],
                                l = b.params.centeredSlides;
                            if (l) {
                                const s =
                                    r[0] / 2 - b.params.slidesOffsetBefore || 0;
                                e.transform(`translateX(calc(50% - ${s}px))`);
                            }
                            for (let n = 0; n < s.length; n += 1) {
                                const r = s.eq(n),
                                    h = r[0].progress,
                                    f = Math.min(
                                        Math.max(
                                            r[0].progress,
                                            -o.limitProgress
                                        ),
                                        o.limitProgress
                                    );
                                let e = f;
                                l ||
                                    (e = Math.min(
                                        Math.max(
                                            r[0].originalProgress,
                                            -o.limitProgress
                                        ),
                                        o.limitProgress
                                    ));
                                const g = r[0].swiperSlideOffset,
                                    m = [
                                        b.params.cssMode
                                            ? -g - b.translate
                                            : -g,
                                        0,
                                        0,
                                    ],
                                    v = [0, 0, 0];
                                let t = !1,
                                    i =
                                        (b.isHorizontal() ||
                                            ((m[1] = m[0]), (m[0] = 0)),
                                        {
                                            translate: [0, 0, 0],
                                            rotate: [0, 0, 0],
                                            scale: 1,
                                            opacity: 1,
                                        });
                                f < 0
                                    ? ((i = o.next), (t = !0))
                                    : 0 < f && ((i = o.prev), (t = !0)),
                                    m.forEach((e, t) => {
                                        m[t] = `calc(${e}px + (${
                                            ((e = i.translate[t]),
                                            "string" == typeof e ? e : e + "px")
                                        } * ${Math.abs(f * a)}))`;
                                    }),
                                    v.forEach((e, t) => {
                                        v[t] = i.rotate[t] * Math.abs(f * a);
                                    }),
                                    (r[0].style.zIndex =
                                        -Math.abs(Math.round(h)) + s.length);
                                var d = m.join(", "),
                                    c = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`,
                                    u =
                                        e < 0
                                            ? `scale(${
                                                  1 + (1 - i.scale) * e * a
                                              })`
                                            : `scale(${
                                                  1 - (1 - i.scale) * e * a
                                              })`,
                                    p =
                                        e < 0
                                            ? 1 + (1 - i.opacity) * e * a
                                            : 1 - (1 - i.opacity) * e * a,
                                    d = `translate3d(${d}) ${c} ` + u;
                                if ((t && i.shadow) || !t) {
                                    let e = r.children(".swiper-slide-shadow");
                                    if (
                                        (e =
                                            0 === e.length && i.shadow
                                                ? O(o, r)
                                                : e).length
                                    ) {
                                        const b = o.shadowPerProgress
                                            ? f * (1 / o.limitProgress)
                                            : f;
                                        e[0].style.opacity = Math.min(
                                            Math.max(Math.abs(b), 0),
                                            1
                                        );
                                    }
                                }
                                const y = D(o, r);
                                y.transform(d).css({ opacity: p }),
                                    i.origin &&
                                        y.css("transform-origin", i.origin);
                            }
                        },
                        setTransition: (e) => {
                            var t = b.params.creativeEffect["transformEl"];
                            (t ? b.slides.find(t) : b.slides)
                                .transition(e)
                                .find(".swiper-slide-shadow")
                                .transition(e),
                                z({
                                    swiper: b,
                                    duration: e,
                                    transformEl: t,
                                    allSlides: !0,
                                });
                        },
                        perspective: () => b.params.creativeEffect.perspective,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !b.params.cssMode,
                        }),
                    });
                },
                function (e) {
                    let { swiper: b, extendParams: t, on: i } = e;
                    t({ cardsEffect: { slideShadows: !0, transformEl: null } }),
                        P({
                            effect: "cards",
                            swiper: b,
                            on: i,
                            setTranslate: () => {
                                const { slides: a, activeIndex: l } = b,
                                    d = b.params.cardsEffect,
                                    { startTranslate: c, isTouched: u } =
                                        b.touchEventsData,
                                    p = b.translate;
                                for (let o = 0; o < a.length; o += 1) {
                                    const m = a.eq(o),
                                        v = m[0].progress,
                                        y = Math.min(Math.max(v, -4), 4);
                                    let e = m[0].swiperSlideOffset,
                                        t =
                                            (b.params.centeredSlides &&
                                                !b.params.cssMode &&
                                                b.$wrapperEl.transform(
                                                    `translateX(${b.minTranslate()}px)`
                                                ),
                                            b.params.centeredSlides &&
                                                b.params.cssMode &&
                                                (e -= a[0].swiperSlideOffset),
                                            b.params.cssMode
                                                ? -e - b.translate
                                                : -e),
                                        i = 0;
                                    var h = -100 * Math.abs(y);
                                    let n = 1,
                                        s = -2 * y,
                                        r = 8 - 0.75 * Math.abs(y);
                                    var f =
                                            (o === l || o === l - 1) &&
                                            0 < y &&
                                            y < 1 &&
                                            (u || b.params.cssMode) &&
                                            p < c,
                                        g =
                                            (o === l || o === l + 1) &&
                                            y < 0 &&
                                            -1 < y &&
                                            (u || b.params.cssMode) &&
                                            c < p;
                                    if (f || g) {
                                        const a =
                                            (1 -
                                                Math.abs(
                                                    (Math.abs(y) - 0.5) / 0.5
                                                )) **
                                            0.5;
                                        (s += -28 * y * a),
                                            (n += -0.5 * a),
                                            (r += 96 * a),
                                            (i = -25 * a * Math.abs(y) + "%");
                                    }
                                    if (
                                        ((t =
                                            y < 0
                                                ? `calc(${t}px + (${
                                                      r * Math.abs(y)
                                                  }%))`
                                                : 0 < y
                                                ? `calc(${t}px + (-${
                                                      r * Math.abs(y)
                                                  }%))`
                                                : t + "px"),
                                        !b.isHorizontal())
                                    ) {
                                        const a = i;
                                        (i = t), (t = a);
                                    }
                                    f = `
        translate3d(${t}, ${i}, ${h}px)
        rotateZ(${s}deg)
        scale(${y < 0 ? "" + (1 + (1 - n) * y) : "" + (1 - (1 - n) * y)})
      `;
                                    if (d.slideShadows) {
                                        let e = m.find(".swiper-slide-shadow");
                                        (e = 0 === e.length ? O(d, m) : e)
                                            .length &&
                                            (e[0].style.opacity = Math.min(
                                                Math.max(
                                                    (Math.abs(y) - 0.5) / 0.5,
                                                    0
                                                ),
                                                1
                                            ));
                                    }
                                    (m[0].style.zIndex =
                                        -Math.abs(Math.round(v)) + a.length),
                                        D(d, m).transform(f);
                                }
                            },
                            setTransition: (e) => {
                                var t = b.params.cardsEffect["transformEl"];
                                (t ? b.slides.find(t) : b.slides)
                                    .transition(e)
                                    .find(".swiper-slide-shadow")
                                    .transition(e),
                                    z({
                                        swiper: b,
                                        duration: e,
                                        transformEl: t,
                                    });
                            },
                            perspective: () => !0,
                            overwriteParams: () => ({
                                watchSlidesProgress: !0,
                                virtualTranslate: !b.params.cssMode,
                            }),
                        });
                },
            ]),
            T
        );
    });
