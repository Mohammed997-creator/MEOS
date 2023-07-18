! function(E, S) {
    "object" == typeof exports && typeof module < "u" ? S(exports) : "function" == typeof define && define.amd ? define(["exports"], S) : S((E = typeof globalThis < "u" ? globalThis : E || self).marked = {})
}(this, function(E) {
    "use strict";

    function S(s, r) {
        for (var t = 0; t < r.length; t++) {
            var u = r[t];
            u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(s, "symbol" == typeof(e = function(n, i) {
                if ("object" != typeof n || null === n) return n;
                var a = n[Symbol.toPrimitive];
                if (void 0 === a) return String(n);
                if ("object" != typeof(a = a.call(n, "string"))) return a;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(e = u.key)) ? e : String(e), u)
        }
        var e
    }

    function N(s, r) {
        (null == r || r > s.length) && (r = s.length);
        for (var t = 0, u = new Array(r); t < r; t++) u[t] = s[t];
        return u
    }

    function q(s, r) {
        var t, u = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (u) return (u = u.call(s)).next.bind(u);
        if (Array.isArray(s) || (u = function(e, n) {
                var i;
                if (e) return "string" == typeof e ? N(e, n) : "Map" === (i = "Object" === (i = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? N(e, n) : void 0
            }(s)) || r && s && "number" == typeof s.length) return u && (s = u), t = 0,
            function() {
                return t >= s.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: s[t++]
                }
            };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function Q() {
        return {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1
        }
    }

    function X(s) {
        return re[s]
    }
    E.defaults = {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1
    };
    var G = /[&<>"']/,
        ne = new RegExp(G.source, "g"),
        V = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        ie = new RegExp(V.source, "g"),
        re = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

    function x(s, r) {
        if (r) {
            if (G.test(s)) return s.replace(ne, X)
        } else if (V.test(s)) return s.replace(ie, X);
        return s
    }
    var se = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

    function H(s) {
        return s.replace(se, function(r, t) {
            return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
    }
    var le = /(^|[^\[])\^/g;

    function k(s, r) {
        s = "string" == typeof s ? s : s.source, r = r || "";
        var t = {
            replace: function(u, e) {
                return e = (e = e.source || e).replace(le, "$1"), s = s.replace(u, e), t
            },
            getRegex: function() {
                return new RegExp(s, r)
            }
        };
        return t
    }
    var ae = /[^\w:]/g,
        De = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function J(s, r, t) {
        if (s) {
            try {
                u = decodeURIComponent(H(t)).replace(ae, "").toLowerCase()
            } catch {
                return null
            }
            if (0 === u.indexOf("javascript:") || 0 === u.indexOf("vbscript:") || 0 === u.indexOf("data:")) return null
        }
        var u;
        r && !De.test(t) && (s = t, O[" " + (u = r)] || (O[" " + u] = oe.test(u) ? u + "/" : j(u, "/", !0)), r = -1 === (u = O[" " + u]).indexOf(":"), t = "//" === s.substring(0, 2) ? r ? s : u.replace(ce, "$1") + s : "/" === s.charAt(0) ? r ? s : u.replace(he, "$1") + s : u + s);
        try {
            t = encodeURI(t).replace(/%25/g, "%")
        } catch {
            return null
        }
        return t
    }
    var O = {},
        oe = /^[^:]+:\/*[^/]*$/,
        ce = /^([^:]+:)[\s\S]*$/,
        he = /^([^:]+:\/*[^/]*)[\s\S]*$/,
        T = {
            exec: function() {}
        };

    function B(s) {
        for (var r, t, u = 1; u < arguments.length; u++)
            for (t in r = arguments[u]) Object.prototype.hasOwnProperty.call(r, t) && (s[t] = r[t]);
        return s
    }

    function K(s, r) {
        var t = s.replace(/\|/g, function(e, n, i) {
                for (var a = !1, o = n; 0 <= --o && "\\" === i[o];) a = !a;
                return a ? "|" : " |"
            }).split(/ \|/),
            u = 0;
        if (t[0].trim() || t.shift(), 0 < t.length && !t[t.length - 1].trim() && t.pop(), t.length > r) t.splice(r);
        else
            for (; t.length < r;) t.push("");
        for (; u < t.length; u++) t[u] = t[u].trim().replace(/\\\|/g, "|");
        return t
    }

    function j(s, r, t) {
        var u = s.length;
        if (0 === u) return "";
        for (var e = 0; e < u;) {
            var n = s.charAt(u - e - 1);
            if ((n !== r || t) && (n === r || !t)) break;
            e++
        }
        return s.slice(0, u - e)
    }

    function W(s) {
        s && s.sanitize && !s.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
    }

    function Y(s, r) {
        if (r < 1) return "";
        for (var t = ""; 1 < r;) 1 & r && (t += s), r >>= 1, s += s;
        return t + s
    }

    function ee(s, n, t, u) {
        var e = n.href,
            i = (n = n.title ? x(n.title) : null, s[1].replace(/\\([\[\]])/g, "$1"));
        return "!" !== s[0].charAt(0) ? (u.state.inLink = !0, s = {
            type: "link",
            raw: t,
            href: e,
            title: n,
            text: i,
            tokens: u.inlineTokens(i)
        }, u.state.inLink = !1, s) : {
            type: "image",
            raw: t,
            href: e,
            title: n,
            text: x(i)
        }
    }
    var L = function() {
            function s(t) {
                this.options = t || E.defaults
            }
            var r = s.prototype;
            return r.space = function(t) {
                if ((t = this.rules.block.newline.exec(t)) && 0 < t[0].length) return {
                    type: "space",
                    raw: t[0]
                }
            }, r.code = function(e) {
                var u;
                if (e = this.rules.block.code.exec(e)) return u = e[0].replace(/^ {1,4}/gm, ""), {
                    type: "code",
                    raw: e[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? u : j(u, "\n")
                }
            }, r.fences = function(a) {
                var u, e, n, i;
                if (a = this.rules.block.fences.exec(a)) return e = u = a[0], n = a[3] || "", e = null === (e = u.match(/^(\s+)(?:```)/)) ? n : (i = e[1], n.split("\n").map(function(o) {
                    var c = o.match(/^\s+/);
                    return null !== c && c[0].length >= i.length ? o.slice(i.length) : o
                }).join("\n")), {
                    type: "code",
                    raw: u,
                    lang: a[2] && a[2].trim().replace(this.rules.inline._escapes, "$1"),
                    text: e
                }
            }, r.heading = function(n) {
                var u, e;
                if (n = this.rules.block.heading.exec(n)) return u = n[2].trim(), /#$/.test(u) && (e = j(u, "#"), !this.options.pedantic && e && !/ $/.test(e) || (u = e.trim())), {
                    type: "heading",
                    raw: n[0],
                    depth: n[1].length,
                    text: u,
                    tokens: this.lexer.inline(u)
                }
            }, r.hr = function(t) {
                if (t = this.rules.block.hr.exec(t)) return {
                    type: "hr",
                    raw: t[0]
                }
            }, r.blockquote = function(i) {
                var u, e, n;
                if (i = this.rules.block.blockquote.exec(i)) return u = i[0].replace(/^ *>[ \t]?/gm, ""), e = this.lexer.state.top, this.lexer.state.top = !0, n = this.lexer.blockTokens(u), this.lexer.state.top = e, {
                    type: "blockquote",
                    raw: i[0],
                    tokens: n,
                    text: u
                }
            }, r.list = function(t) {
                var u = this.rules.block.list.exec(t);
                if (u) {
                    var e, n, i, a, o, c, g, l, f, A, d, C = 1 < (b = u[1].trim()).length,
                        F = {
                            type: "list",
                            raw: "",
                            ordered: C,
                            start: C ? +b.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        },
                        b = C ? "\\d{1,9}\\" + b.slice(-1) : "\\" + b;
                    this.options.pedantic && (b = C ? b : "[*+-]");
                    for (var w = new RegExp("^( {0,3}" + b + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); t && (d = !1, u = w.exec(t)) && !this.rules.block.hr.test(t);) {
                        if (t = t.substring((e = u[0]).length), g = u[2].split("\n", 1)[0].replace(/^\t+/, function(Z) {
                                return " ".repeat(3 * Z.length)
                            }), l = t.split("\n", 1)[0], this.options.pedantic ? (a = 2, A = g.trimLeft()) : (a = u[2].search(/[^ ]/), A = g.slice(a = 4 < a ? 1 : a), a += u[1].length), o = !1, !g && /^ *$/.test(l) && (e += l + "\n", t = t.substring(l.length + 1), d = !0), !d)
                            for (var R = new RegExp("^ {0," + Math.min(3, a - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"), m = new RegExp("^ {0," + Math.min(3, a - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), I = new RegExp("^ {0," + Math.min(3, a - 1) + "}(?:```|~~~)"), y = new RegExp("^ {0," + Math.min(3, a - 1) + "}#"); t && (l = f = t.split("\n", 1)[0], this.options.pedantic && (l = l.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !I.test(l)) && !y.test(l) && !R.test(l) && !m.test(t);) {
                                if (l.search(/[^ ]/) >= a || !l.trim()) A += "\n" + l.slice(a);
                                else {
                                    if (o || 4 <= g.search(/[^ ]/) || I.test(g) || y.test(g) || m.test(g)) break;
                                    A += "\n" + l
                                }
                                o || l.trim() || (o = !0), e += f + "\n", t = t.substring(f.length + 1), g = l.slice(a)
                            }
                        F.loose || (c ? F.loose = !0 : /\n *\n *$/.test(e) && (c = !0)), this.options.gfm && (n = /^\[[ xX]\] /.exec(A)) && (i = "[ ] " !== n[0], A = A.replace(/^\[[ xX]\] +/, "")), F.items.push({
                            type: "list_item",
                            raw: e,
                            task: !!n,
                            checked: i,
                            loose: !1,
                            text: A
                        }), F.raw += e
                    }
                    F.items[F.items.length - 1].raw = e.trimRight(), F.items[F.items.length - 1].text = A.trimRight(), F.raw = F.raw.trimRight();
                    for (var v, ue = F.items.length, _ = 0; _ < ue; _++) this.lexer.state.top = !1, F.items[_].tokens = this.lexer.blockTokens(F.items[_].text, []), F.loose || (v = 0 < (v = F.items[_].tokens.filter(function(Z) {
                        return "space" === Z.type
                    })).length && v.some(function(Z) {
                        return /\n.*\n/.test(Z.raw)
                    }), F.loose = v);
                    if (F.loose)
                        for (_ = 0; _ < ue; _++) F.items[_].loose = !0;
                    return F
                }
            }, r.html = function(e) {
                var u;
                if (e = this.rules.block.html.exec(e)) return u = {
                    type: "html",
                    raw: e[0],
                    pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                    text: e[0]
                }, this.options.sanitize && (e = this.options.sanitizer ? this.options.sanitizer(e[0]) : x(e[0]), u.type = "paragraph", u.text = e, u.tokens = this.lexer.inline(e)), u
            }, r.def = function(i) {
                var u, e, n;
                if (i = this.rules.block.def.exec(i)) return u = i[1].toLowerCase().replace(/\s+/g, " "), e = i[2] ? i[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", n = i[3] && i[3].substring(1, i[3].length - 1).replace(this.rules.inline._escapes, "$1"), {
                    type: "def",
                    tag: u,
                    raw: i[0],
                    href: e,
                    title: n
                }
            }, r.table = function(t) {
                if (t = this.rules.block.table.exec(t)) {
                    var u = {
                        type: "table",
                        header: K(t[1]).map(function(c) {
                            return {
                                text: c
                            }
                        }),
                        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                    };
                    if (u.header.length === u.align.length) {
                        u.raw = t[0];
                        for (var e, n, i, a = u.align.length, o = 0; o < a; o++) u.align[o] = /^ *-+: *$/.test(u.align[o]) ? "right" : /^ *:-+: *$/.test(u.align[o]) ? "center" : /^ *:-+ *$/.test(u.align[o]) ? "left" : null;
                        for (a = u.rows.length, o = 0; o < a; o++) u.rows[o] = K(u.rows[o], u.header.length).map(function(c) {
                            return {
                                text: c
                            }
                        });
                        for (a = u.header.length, e = 0; e < a; e++) u.header[e].tokens = this.lexer.inline(u.header[e].text);
                        for (a = u.rows.length, e = 0; e < a; e++)
                            for (i = u.rows[e], n = 0; n < i.length; n++) i[n].tokens = this.lexer.inline(i[n].text);
                        return u
                    }
                }
            }, r.lheading = function(t) {
                if (t = this.rules.block.lheading.exec(t)) return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                    tokens: this.lexer.inline(t[1])
                }
            }, r.paragraph = function(e) {
                var u;
                if (e = this.rules.block.paragraph.exec(e)) return u = "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1], {
                    type: "paragraph",
                    raw: e[0],
                    text: u,
                    tokens: this.lexer.inline(u)
                }
            }, r.text = function(t) {
                if (t = this.rules.block.text.exec(t)) return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    tokens: this.lexer.inline(t[0])
                }
            }, r.escape = function(t) {
                if (t = this.rules.inline.escape.exec(t)) return {
                    type: "escape",
                    raw: t[0],
                    text: x(t[1])
                }
            }, r.tag = function(t) {
                if (t = this.rules.inline.tag.exec(t)) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                    type: this.options.sanitize ? "text" : "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : x(t[0]) : t[0]
                }
            }, r.link = function(t) {
                if (t = this.rules.inline.link.exec(t)) {
                    var u = t[2].trim();
                    if (!this.options.pedantic && /^</.test(u)) {
                        if (!/>$/.test(u)) return;
                        var n = j(u.slice(0, -1), "\\");
                        if ((u.length - n.length) % 2 == 0) return
                    } else -1 < (n = function(a, o) {
                        if (-1 !== a.indexOf(o[1]))
                            for (var c = a.length, g = 0, l = 0; l < c; l++)
                                if ("\\" === a[l]) l++;
                                else if (a[l] === o[0]) g++;
                        else if (a[l] === o[1] && --g < 0) return l;
                        return -1
                    }(t[2], "()")) && (i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + n, t[2] = t[2].substring(0, n), t[0] = t[0].substring(0, i).trim(), t[3] = "");
                    n = t[2];
                    var e, i = "";
                    return this.options.pedantic ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n)) && (n = e[1], i = e[3]) : i = t[3] ? t[3].slice(1, -1) : "", n = n.trim(), ee(t, {
                        href: (n = /^</.test(n) ? this.options.pedantic && !/>$/.test(u) ? n.slice(1) : n.slice(1, -1) : n) && n.replace(this.rules.inline._escapes, "$1"),
                        title: i && i.replace(this.rules.inline._escapes, "$1")
                    }, t[0], this.lexer)
                }
            }, r.reflink = function(t, u) {
                var e;
                if (e = (e = this.rules.inline.reflink.exec(t)) || this.rules.inline.nolink.exec(t)) return (t = u[(t = (e[2] || e[1]).replace(/\s+/g, " ")).toLowerCase()]) ? ee(e, t, e[0], this.lexer) : {
                    type: "text",
                    raw: u = e[0].charAt(0),
                    text: u
                }
            }, r.emStrong = function(t, u, e) {
                void 0 === e && (e = "");
                var n = this.rules.inline.emStrong.lDelim.exec(t);
                if (n && (!n[3] || !e.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) && (!n[1] && !n[2] || "" === e || this.rules.inline.punctuation.exec(e))) {
                    var a = n[0].length - 1,
                        o = a,
                        c = 0,
                        g = "*" === n[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                    for (g.lastIndex = 0, u = u.slice(-1 * t.length + a); null != (n = g.exec(u));) {
                        var l, f = n[1] || n[2] || n[3] || n[4] || n[5] || n[6];
                        if (f)
                            if (l = f.length, n[3] || n[4]) o += l;
                            else if ((n[5] || n[6]) && a % 3 && !((a + l) % 3)) c += l;
                        else if (!(0 < (o -= l))) return l = Math.min(l, l + o + c), f = t.slice(0, a + n.index + (n[0].length - f.length) + l), Math.min(a, l) % 2 ? (l = f.slice(1, -1), {
                            type: "em",
                            raw: f,
                            text: l,
                            tokens: this.lexer.inlineTokens(l)
                        }) : (l = f.slice(2, -2), {
                            type: "strong",
                            raw: f,
                            text: l,
                            tokens: this.lexer.inlineTokens(l)
                        })
                    }
                }
            }, r.codespan = function(i) {
                var u, e, n;
                if (i = this.rules.inline.code.exec(i)) return n = i[2].replace(/\n/g, " "), u = /[^ ]/.test(n), e = /^ /.test(n) && / $/.test(n), n = x(n = u && e ? n.substring(1, n.length - 1) : n, !0), {
                    type: "codespan",
                    raw: i[0],
                    text: n
                }
            }, r.br = function(t) {
                if (t = this.rules.inline.br.exec(t)) return {
                    type: "br",
                    raw: t[0]
                }
            }, r.del = function(t) {
                if (t = this.rules.inline.del.exec(t)) return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2])
                }
            }, r.autolink = function(n, u) {
                var e;
                if (n = this.rules.inline.autolink.exec(n)) return u = "@" === n[2] ? "mailto:" + (e = x(this.options.mangle ? u(n[1]) : n[1])) : e = x(n[1]), {
                    type: "link",
                    raw: n[0],
                    text: e,
                    href: u,
                    tokens: [{
                        type: "text",
                        raw: e,
                        text: e
                    }]
                }
            }, r.url = function(t, u) {
                var e, n, i, a;
                if (e = this.rules.inline.url.exec(t)) {
                    if ("@" === e[2]) i = "mailto:" + (n = x(this.options.mangle ? u(e[0]) : e[0]));
                    else {
                        for (; a = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])[0], a !== e[0];);
                        n = x(e[0]), i = "www." === e[1] ? "http://" + e[0] : e[0]
                    }
                    return {
                        type: "link",
                        raw: e[0],
                        text: n,
                        href: i,
                        tokens: [{
                            type: "text",
                            raw: n,
                            text: n
                        }]
                    }
                }
            }, r.inlineText = function(t, u) {
                if (t = this.rules.inline.text.exec(t)) return u = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : x(t[0]) : t[0] : x(this.options.smartypants ? u(t[0]) : t[0]), {
                    type: "text",
                    raw: t[0],
                    text: u
                }
            }, s
        }(),
        h = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: T,
            lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        },
        D = (h.def = k(h.def).replace("label", h._label).replace("title", h._title).getRegex(), h.bullet = /(?:[*+-]|\d{1,9}[.)])/, h.listItemStart = k(/^( *)(bull) */).replace("bull", h.bullet).getRegex(), h.list = k(h.list).replace(/bull/g, h.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + h.def.source + ")").getRegex(), h._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", h._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, h.html = k(h.html, "i").replace("comment", h._comment).replace("tag", h._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), h.paragraph = k(h._paragraph).replace("hr", h.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", h._tag).getRegex(), h.blockquote = k(h.blockquote).replace("paragraph", h.paragraph).getRegex(), h.normal = B({}, h), h.gfm = B({}, h.normal, {
            table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        }), h.gfm.table = k(h.gfm.table).replace("hr", h.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", h._tag).getRegex(), h.gfm.paragraph = k(h._paragraph).replace("hr", h.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", h.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", h._tag).getRegex(), h.pedantic = B({}, h.normal, {
            html: k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", h._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: T,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: k(h.normal._paragraph).replace("hr", h.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", h.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
        }), {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: T,
            tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(ref)\]/,
            nolink: /^!?\[(ref)\](?:\[\])?/,
            reflinkSearch: "reflink|nolink(?!\\()",
            emStrong: {
                lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
                rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
            },
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: T,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            punctuation: /^([\spunctuation])/
        });

    function pe(s) {
        return s.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026")
    }

    function te(s) {
        for (var r, t = "", u = s.length, e = 0; e < u; e++) r = s.charCodeAt(e), t += "&#" + (r = .5 < Math.random() ? "x" + r.toString(16) : r) + ";";
        return t
    }
    D._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", D.punctuation = k(D.punctuation).replace(/punctuation/g, D._punctuation).getRegex(), D.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, D.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, D._comment = k(h._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), D.emStrong.lDelim = k(D.emStrong.lDelim).replace(/punct/g, D._punctuation).getRegex(), D.emStrong.rDelimAst = k(D.emStrong.rDelimAst, "g").replace(/punct/g, D._punctuation).getRegex(), D.emStrong.rDelimUnd = k(D.emStrong.rDelimUnd, "g").replace(/punct/g, D._punctuation).getRegex(), D._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, D._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, D._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, D.autolink = k(D.autolink).replace("scheme", D._scheme).replace("email", D._email).getRegex(), D._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, D.tag = k(D.tag).replace("comment", D._comment).replace("attribute", D._attribute).getRegex(), D._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, D._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, D._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, D.link = k(D.link).replace("label", D._label).replace("href", D._href).replace("title", D._title).getRegex(), D.reflink = k(D.reflink).replace("label", D._label).replace("ref", h._label).getRegex(), D.nolink = k(D.nolink).replace("ref", h._label).getRegex(), D.reflinkSearch = k(D.reflinkSearch, "g").replace("reflink", D.reflink).replace("nolink", D.nolink).getRegex(), D.normal = B({}, D), D.pedantic = B({}, D.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", D._label).getRegex(),
        reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", D._label).getRegex()
    }), D.gfm = B({}, D.normal, {
        escape: k(D.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    }), D.gfm.url = k(D.gfm.url, "i").replace("email", D.gfm._extended_email).getRegex(), D.breaks = B({}, D.gfm, {
        br: k(D.br).replace("{2,}", "*").getRegex(),
        text: k(D.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    var $ = function() {
            function s(e) {
                this.tokens = [], this.tokens.links = Object.create(null), this.options = e || E.defaults, this.options.tokenizer = this.options.tokenizer || new L, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, (this.tokenizer.lexer = this).inlineQueue = [], this.state = {
                    inLink: !1,
                    inRawBlock: !1,
                    top: !0
                }, e = {
                    block: h.normal,
                    inline: D.normal
                }, this.options.pedantic ? (e.block = h.pedantic, e.inline = D.pedantic) : this.options.gfm && (e.block = h.gfm, e.inline = this.options.breaks ? D.breaks : D.gfm), this.tokenizer.rules = e
            }
            s.lex = function(e, n) {
                return new s(n).lex(e)
            }, s.lexInline = function(e, n) {
                return new s(n).inlineTokens(e)
            };
            var t, u = s.prototype;
            return u.lex = function(e) {
                var n;
                for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); n = this.inlineQueue.shift();) this.inlineTokens(n.src, n.tokens);
                return this.tokens
            }, u.blockTokens = function(e, n) {
                var i, a, o, c, g = this;
                for (void 0 === n && (n = []), e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, function(f, A, d) {
                        return A + "    ".repeat(d.length)
                    }); e;)
                    if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(f) {
                            return !!(i = f.call({
                                lexer: g
                            }, e, n)) && (e = e.substring(i.raw.length), n.push(i), !0)
                        })))
                        if (i = this.tokenizer.space(e)) e = e.substring(i.raw.length), 1 === i.raw.length && 0 < n.length ? n[n.length - 1].raw += "\n" : n.push(i);
                        else if (i = this.tokenizer.code(e)) e = e.substring(i.raw.length), !(a = n[n.length - 1]) || "paragraph" !== a.type && "text" !== a.type ? n.push(i) : (a.raw += "\n" + i.raw, a.text += "\n" + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = a.text);
                else if (i = this.tokenizer.fences(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.heading(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.hr(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.blockquote(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.list(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.html(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.def(e)) e = e.substring(i.raw.length), !(a = n[n.length - 1]) || "paragraph" !== a.type && "text" !== a.type ? this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
                    href: i.href,
                    title: i.title
                }) : (a.raw += "\n" + i.raw, a.text += "\n" + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = a.text);
                else if (i = this.tokenizer.table(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.lheading(e)) e = e.substring(i.raw.length), n.push(i);
                else if (o = e, this.options.extensions && this.options.extensions.startBlock && function() {
                        var f = 1 / 0,
                            A = e.slice(1),
                            d = void 0;
                        g.options.extensions.startBlock.forEach(function(C) {
                            "number" == typeof(d = C.call({
                                lexer: this
                            }, A)) && 0 <= d && (f = Math.min(f, d))
                        }), f < 1 / 0 && 0 <= f && (o = e.substring(0, f + 1))
                    }(), this.state.top && (i = this.tokenizer.paragraph(o))) a = n[n.length - 1], c && "paragraph" === a.type ? (a.raw += "\n" + i.raw, a.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(i), c = o.length !== e.length, e = e.substring(i.raw.length);
                else if (i = this.tokenizer.text(e)) e = e.substring(i.raw.length), (a = n[n.length - 1]) && "text" === a.type ? (a.raw += "\n" + i.raw, a.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = a.text) : n.push(i);
                else if (e) {
                    var l = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(l);
                        break
                    }
                    throw new Error(l)
                }
                return this.state.top = !0, n
            }, u.inline = function(e, n) {
                return this.inlineQueue.push({
                    src: e,
                    tokens: n = void 0 === n ? [] : n
                }), n
            }, u.inlineTokens = function(e, n) {
                var i, a, o, c, g, l, f = this,
                    A = (void 0 === n && (n = []), e);
                if (this.tokens.links) {
                    var d = Object.keys(this.tokens.links);
                    if (0 < d.length)
                        for (; null != (c = this.tokenizer.rules.inline.reflinkSearch.exec(A));) d.includes(c[0].slice(c[0].lastIndexOf("[") + 1, -1)) && (A = A.slice(0, c.index) + "[" + Y("a", c[0].length - 2) + "]" + A.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (c = this.tokenizer.rules.inline.blockSkip.exec(A));) A = A.slice(0, c.index) + "[" + Y("a", c[0].length - 2) + "]" + A.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (; null != (c = this.tokenizer.rules.inline.escapedEmSt.exec(A));) A = A.slice(0, c.index + c[0].length - 2) + "++" + A.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
                for (; e;)
                    if (g || (l = ""), g = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(F) {
                            return !!(i = F.call({
                                lexer: f
                            }, e, n)) && (e = e.substring(i.raw.length), n.push(i), !0)
                        })))
                        if (i = this.tokenizer.escape(e)) e = e.substring(i.raw.length), n.push(i);
                        else if (i = this.tokenizer.tag(e)) e = e.substring(i.raw.length), (a = n[n.length - 1]) && "text" === i.type && "text" === a.type ? (a.raw += i.raw, a.text += i.text) : n.push(i);
                else if (i = this.tokenizer.link(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(i.raw.length), (a = n[n.length - 1]) && "text" === i.type && "text" === a.type ? (a.raw += i.raw, a.text += i.text) : n.push(i);
                else if (i = this.tokenizer.emStrong(e, A, l)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.codespan(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.br(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.del(e)) e = e.substring(i.raw.length), n.push(i);
                else if (i = this.tokenizer.autolink(e, te)) e = e.substring(i.raw.length), n.push(i);
                else if (!this.state.inLink && (i = this.tokenizer.url(e, te))) e = e.substring(i.raw.length), n.push(i);
                else if (o = e, this.options.extensions && this.options.extensions.startInline && function() {
                        var F = 1 / 0,
                            b = e.slice(1),
                            w = void 0;
                        f.options.extensions.startInline.forEach(function(R) {
                            "number" == typeof(w = R.call({
                                lexer: this
                            }, b)) && 0 <= w && (F = Math.min(F, w))
                        }), F < 1 / 0 && 0 <= F && (o = e.substring(0, F + 1))
                    }(), i = this.tokenizer.inlineText(o, pe)) e = e.substring(i.raw.length), "_" !== i.raw.slice(-1) && (l = i.raw.slice(-1)), g = !0, (a = n[n.length - 1]) && "text" === a.type ? (a.raw += i.raw, a.text += i.text) : n.push(i);
                else if (e) {
                    var C = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(C);
                        break
                    }
                    throw new Error(C)
                }
                return n
            }, u = s, (t = [{
                key: "rules",
                get: function() {
                    return {
                        block: h,
                        inline: D
                    }
                }
            }]) && S(u, t), Object.defineProperty(u, "prototype", {
                writable: !1
            }), s
        }(),
        P = function() {
            function s(t) {
                this.options = t || E.defaults
            }
            var r = s.prototype;
            return r.code = function(t, i, e) {
                var n;
                return i = (i || "").match(/\S*/)[0], this.options.highlight && null != (n = this.options.highlight(t, i)) && n !== t && (e = !0, t = n), t = t.replace(/\n$/, "") + "\n", i ? '<pre><code class="' + this.options.langPrefix + x(i) + '">' + (e ? t : x(t, !0)) + "</code></pre>\n" : "<pre><code>" + (e ? t : x(t, !0)) + "</code></pre>\n"
            }, r.blockquote = function(t) {
                return "<blockquote>\n" + t + "</blockquote>\n"
            }, r.html = function(t) {
                return t
            }, r.heading = function(t, u, e, n) {
                return this.options.headerIds ? "<h" + u + ' id="' + (this.options.headerPrefix + n.slug(e)) + '">' + t + "</h" + u + ">\n" : "<h" + u + ">" + t + "</h" + u + ">\n"
            }, r.hr = function() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, r.list = function(t, u, e) {
                var n = u ? "ol" : "ul";
                return "<" + n + (u && 1 !== e ? ' start="' + e + '"' : "") + ">\n" + t + "</" + n + ">\n"
            }, r.listitem = function(t) {
                return "<li>" + t + "</li>\n"
            }, r.checkbox = function(t) {
                return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, r.paragraph = function(t) {
                return "<p>" + t + "</p>\n"
            }, r.table = function(t, u) {
                return "<table>\n<thead>\n" + t + "</thead>\n" + (u = u && "<tbody>" + u + "</tbody>") + "</table>\n"
            }, r.tablerow = function(t) {
                return "<tr>\n" + t + "</tr>\n"
            }, r.tablecell = function(t, u) {
                var e = u.header ? "th" : "td";
                return (u.align ? "<" + e + ' align="' + u.align + '">' : "<" + e + ">") + t + "</" + e + ">\n"
            }, r.strong = function(t) {
                return "<strong>" + t + "</strong>"
            }, r.em = function(t) {
                return "<em>" + t + "</em>"
            }, r.codespan = function(t) {
                return "<code>" + t + "</code>"
            }, r.br = function() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, r.del = function(t) {
                return "<del>" + t + "</del>"
            }, r.link = function(t, u, e) {
                return null === (t = J(this.options.sanitize, this.options.baseUrl, t)) ? e : (t = '<a href="' + t + '"', u && (t += ' title="' + u + '"'), t + ">" + e + "</a>")
            }, r.image = function(t, u, e) {
                return null === (t = J(this.options.sanitize, this.options.baseUrl, t)) ? e : (t = '<img src="' + t + '" alt="' + e + '"', u && (t += ' title="' + u + '"'), t + (this.options.xhtml ? "/>" : ">"))
            }, r.text = function(t) {
                return t
            }, s
        }(),
        U = function() {
            function s() {}
            var r = s.prototype;
            return r.strong = function(t) {
                return t
            }, r.em = function(t) {
                return t
            }, r.codespan = function(t) {
                return t
            }, r.del = function(t) {
                return t
            }, r.html = function(t) {
                return t
            }, r.text = function(t) {
                return t
            }, r.link = function(t, u, e) {
                return "" + e
            }, r.image = function(t, u, e) {
                return "" + e
            }, r.br = function() {
                return ""
            }, s
        }(),
        M = function() {
            function s() {
                this.seen = {}
            }
            var r = s.prototype;
            return r.serialize = function(t) {
                return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
            }, r.getNextSafeSlug = function(t, u) {
                var e = t,
                    n = 0;
                if (this.seen.hasOwnProperty(e))
                    for (n = this.seen[t]; e = t + "-" + ++n, this.seen.hasOwnProperty(e););
                return u || (this.seen[t] = n, this.seen[e] = 0), e
            }, r.slug = function(t, u) {
                return void 0 === u && (u = {}), t = this.serialize(t), this.getNextSafeSlug(t, u.dryrun)
            }, s
        }(),
        z = function() {
            function s(t) {
                this.options = t || E.defaults, this.options.renderer = this.options.renderer || new P, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new U, this.slugger = new M
            }
            s.parse = function(t, u) {
                return new s(u).parse(t)
            }, s.parseInline = function(t, u) {
                return new s(u).parseInline(t)
            };
            var r = s.prototype;
            return r.parse = function(t, u) {
                void 0 === u && (u = !0);
                for (var e, n, i, a, o, c, g, l, f, A, d, C, F, b, w, R, m = "", I = t.length, y = 0; y < I; y++)
                    if (l = t[y], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[l.type] && (!1 !== (R = this.options.extensions.renderers[l.type].call({
                            parser: this
                        }, l)) || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(l.type))) m += R || "";
                    else switch (l.type) {
                        case "space":
                            continue;
                        case "hr":
                            m += this.renderer.hr();
                            continue;
                        case "heading":
                            m += this.renderer.heading(this.parseInline(l.tokens), l.depth, H(this.parseInline(l.tokens, this.textRenderer)), this.slugger);
                            continue;
                        case "code":
                            m += this.renderer.code(l.text, l.lang, l.escaped);
                            continue;
                        case "table":
                            for (c = f = "", i = l.header.length, e = 0; e < i; e++) c += this.renderer.tablecell(this.parseInline(l.header[e].tokens), {
                                header: !0,
                                align: l.align[e]
                            });
                            for (f += this.renderer.tablerow(c), g = "", i = l.rows.length, e = 0; e < i; e++) {
                                for (c = "", a = (o = l.rows[e]).length, n = 0; n < a; n++) c += this.renderer.tablecell(this.parseInline(o[n].tokens), {
                                    header: !1,
                                    align: l.align[n]
                                });
                                g += this.renderer.tablerow(c)
                            }
                            m += this.renderer.table(f, g);
                            continue;
                        case "blockquote":
                            g = this.parse(l.tokens), m += this.renderer.blockquote(g);
                            continue;
                        case "list":
                            for (f = l.ordered, v = l.start, A = l.loose, i = l.items.length, g = "", e = 0; e < i; e++) F = (C = l.items[e]).checked, b = C.task, d = "", C.task && (w = this.renderer.checkbox(F), A ? 0 < C.tokens.length && "paragraph" === C.tokens[0].type ? (C.tokens[0].text = w + " " + C.tokens[0].text, C.tokens[0].tokens && 0 < C.tokens[0].tokens.length && "text" === C.tokens[0].tokens[0].type && (C.tokens[0].tokens[0].text = w + " " + C.tokens[0].tokens[0].text)) : C.tokens.unshift({
                                type: "text",
                                text: w
                            }) : d += w), d += this.parse(C.tokens, A), g += this.renderer.listitem(d, b, F);
                            m += this.renderer.list(g, f, v);
                            continue;
                        case "html":
                            m += this.renderer.html(l.text);
                            continue;
                        case "paragraph":
                            m += this.renderer.paragraph(this.parseInline(l.tokens));
                            continue;
                        case "text":
                            for (g = l.tokens ? this.parseInline(l.tokens) : l.text; y + 1 < I && "text" === t[y + 1].type;) g += "\n" + ((l = t[++y]).tokens ? this.parseInline(l.tokens) : l.text);
                            m += u ? this.renderer.paragraph(g) : g;
                            continue;
                        default:
                            var v = 'Token with "' + l.type + '" type was not found.';
                            if (this.options.silent) return void console.error(v);
                            throw new Error(v)
                    }
                return m
            }, r.parseInline = function(t, u) {
                u = u || this.renderer;
                for (var e, n, i = "", a = t.length, o = 0; o < a; o++)
                    if (e = t[o], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[e.type] && (!1 !== (n = this.options.extensions.renderers[e.type].call({
                            parser: this
                        }, e)) || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(e.type))) i += n || "";
                    else switch (e.type) {
                        case "escape":
                        case "text":
                            i += u.text(e.text);
                            break;
                        case "html":
                            i += u.html(e.text);
                            break;
                        case "link":
                            i += u.link(e.href, e.title, this.parseInline(e.tokens, u));
                            break;
                        case "image":
                            i += u.image(e.href, e.title, e.text);
                            break;
                        case "strong":
                            i += u.strong(this.parseInline(e.tokens, u));
                            break;
                        case "em":
                            i += u.em(this.parseInline(e.tokens, u));
                            break;
                        case "codespan":
                            i += u.codespan(e.text);
                            break;
                        case "br":
                            i += u.br();
                            break;
                        case "del":
                            i += u.del(this.parseInline(e.tokens, u));
                            break;
                        default:
                            var c = 'Token with "' + e.type + '" type was not found.';
                            if (this.options.silent) return void console.error(c);
                            throw new Error(c)
                    }
                return i
            }, s
        }();

    function p(s, r, t) {
        if (null == s) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof s) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected");
        if ("function" == typeof r && (t = r, r = null), W(r = B({}, p.defaults, r || {})), t) {
            var u, e = r.highlight;
            try {
                u = $.lex(s, r)
            } catch (c) {
                return t(c)
            }
            var n, i = function(c) {
                var g;
                if (!c) try {
                    r.walkTokens && p.walkTokens(u, r.walkTokens), g = z.parse(u, r)
                } catch (l) {
                    c = l
                }
                return r.highlight = e, c ? t(c) : t(null, g)
            };
            return !e || e.length < 3 ? i() : (delete r.highlight, u.length ? (n = 0, p.walkTokens(u, function(c) {
                "code" === c.type && (n++, setTimeout(function() {
                    e(c.text, c.lang, function(g, l) {
                        if (g) return i(g);
                        null != l && l !== c.text && (c.text = l, c.escaped = !0), 0 == --n && i()
                    })
                }, 0))
            }), void(0 === n && i())) : i())
        }

        function a(c) {
            if (c.message += "\nPlease report this to https://github.com/markedjs/marked.", r.silent) return "<p>An error occurred:</p><pre>" + x(c.message + "", !0) + "</pre>";
            throw c
        }
        try {
            var o = $.lex(s, r);
            if (r.walkTokens) {
                if (r.async) return Promise.all(p.walkTokens(o, r.walkTokens)).then(function() {
                    return z.parse(o, r)
                }).catch(a);
                p.walkTokens(o, r.walkTokens)
            }
            return z.parse(o, r)
        } catch (c) {
            a(c)
        }
    }
    p.options = p.setOptions = function(s) {
        return B(p.defaults, s), E.defaults = s = p.defaults, p
    }, p.getDefaults = Q, p.defaults = E.defaults, p.use = function() {
        for (var s = p.defaults.extensions || {
                renderers: {},
                childTokens: {}
            }, r = arguments.length, t = new Array(r), u = 0; u < r; u++) t[u] = arguments[u];
        t.forEach(function(e) {
            var n, i = B({}, e);
            if (i.async = p.defaults.async || i.async, e.extensions && (e.extensions.forEach(function(l) {
                    if (!l.name) throw new Error("extension name required");
                    var f;
                    if (l.renderer && (s.renderers[l.name] = (f = s.renderers[l.name]) ? function() {
                            for (var A = arguments.length, d = new Array(A), C = 0; C < A; C++) d[C] = arguments[C];
                            var F = l.renderer.apply(this, d);
                            return !1 === F ? f.apply(this, d) : F
                        } : l.renderer), l.tokenizer) {
                        if (!l.level || "block" !== l.level && "inline" !== l.level) throw new Error("extension level must be 'block' or 'inline'");
                        s[l.level] ? s[l.level].unshift(l.tokenizer) : s[l.level] = [l.tokenizer], l.start && ("block" === l.level ? s.startBlock ? s.startBlock.push(l.start) : s.startBlock = [l.start] : "inline" === l.level && (s.startInline ? s.startInline.push(l.start) : s.startInline = [l.start]))
                    }
                    l.childTokens && (s.childTokens[l.name] = l.childTokens)
                }), i.extensions = s), e.renderer) {
                var a, o = p.defaults.renderer || new P;
                for (a in e.renderer) ! function(l) {
                    var f = o[l];
                    o[l] = function() {
                        for (var A = arguments.length, d = new Array(A), C = 0; C < A; C++) d[C] = arguments[C];
                        var F = e.renderer[l].apply(o, d);
                        return !1 === F ? f.apply(o, d) : F
                    }
                }(a);
                i.renderer = o
            }
            if (e.tokenizer) {
                var c, g = p.defaults.tokenizer || new L;
                for (c in e.tokenizer) ! function(l) {
                    var f = g[l];
                    g[l] = function() {
                        for (var A = arguments.length, d = new Array(A), C = 0; C < A; C++) d[C] = arguments[C];
                        var F = e.tokenizer[l].apply(g, d);
                        return !1 === F ? f.apply(g, d) : F
                    }
                }(c);
                i.tokenizer = g
            }
            e.walkTokens && (n = p.defaults.walkTokens, i.walkTokens = function(l) {
                var f = [];
                return f.push(e.walkTokens.call(this, l)), n ? f.concat(n.call(this, l)) : f
            }), p.setOptions(i)
        })
    }, p.walkTokens = function(s, r) {
        for (var t, u = [], e = q(s); !(t = e()).done;) ! function() {
            var n = t.value;
            switch (u = u.concat(r.call(p, n)), n.type) {
                case "table":
                    for (var i = q(n.header); !(a = i()).done;) {
                        var a = a.value;
                        u = u.concat(p.walkTokens(a.tokens, r))
                    }
                    for (var o, c = q(n.rows); !(o = c()).done;)
                        for (var g = q(o.value); !(l = g()).done;) {
                            var l = l.value;
                            u = u.concat(p.walkTokens(l.tokens, r))
                        }
                    break;
                case "list":
                    u = u.concat(p.walkTokens(n.items, r));
                    break;
                default:
                    p.defaults.extensions && p.defaults.extensions.childTokens && p.defaults.extensions.childTokens[n.type] ? p.defaults.extensions.childTokens[n.type].forEach(function(f) {
                        u = u.concat(p.walkTokens(n[f], r))
                    }) : n.tokens && (u = u.concat(p.walkTokens(n.tokens, r)))
            }
        }();
        return u
    }, p.parseInline = function(s, r) {
        if (null == s) throw new Error("marked.parseInline(): input parameter is undefined or null");
        if ("string" != typeof s) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected");
        W(r = B({}, p.defaults, r || {}));
        try {
            var t = $.lexInline(s, r);
            return r.walkTokens && p.walkTokens(t, r.walkTokens), z.parseInline(t, r)
        } catch (u) {
            if (u.message += "\nPlease report this to https://github.com/markedjs/marked.", r.silent) return "<p>An error occurred:</p><pre>" + x(u.message + "", !0) + "</pre>";
            throw u
        }
    }, p.Parser = z, p.parser = z.parse, p.Renderer = P, p.TextRenderer = U, p.Lexer = $, p.lexer = $.lex, p.Tokenizer = L, p.Slugger = M, T = (p.parse = p).options;
    var ge = p.setOptions,
        fe = p.use,
        Fe = p.walkTokens,
        Ae = p.parseInline,
        Ce = p,
        de = z.parse,
        ke = $.lex;
    E.Lexer = $, E.Parser = z, E.Renderer = P, E.Slugger = M, E.TextRenderer = U, E.Tokenizer = L, E.getDefaults = Q, E.lexer = ke, E.marked = p, E.options = T, E.parse = Ce, E.parseInline = Ae, E.parser = de, E.setOptions = ge, E.use = fe, E.walkTokens = Fe
});