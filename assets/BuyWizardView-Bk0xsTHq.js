import { _ as tA } from "./BaseHeader.vue_vue_type_script_setup_true_lang-CnEIG7Xs.js";
import {
  P as aA,
  _ as G,
  a as E,
  b as Y,
  e,
  M,
  N as sA,
  d as R,
  i as q,
  O as _,
  p as b,
  J as nA,
  s as Q,
  h as f,
  w as C,
  t as S,
  f as m,
  a6 as lA,
  E as O,
  Q as j,
  A as oA,
  g as iA,
  m as x,
  x as H,
  B as N,
  L as P,
  a7 as K,
  q as D,
  a8 as rA,
  a0 as cA,
  c as gA,
  v as dA,
  y as uA,
  z as wA,
  n as fA,
  o as BA,
} from "./index-COVov2sH.js";
import {
  n as mA,
  d as CA,
  l as pA,
  _ as IA,
  B as $,
} from "./FAQ.vue_vue_type_script_setup_true_lang-DE3qKmXf.js";
import { p as bA } from "./power-token-C8TAXkdm.js";
import { I as EA, t as xA, p as UA } from "./tokens-bg-Bl_Aaa0g.js";
import { s as hA, t as F } from "./tweets-XVis-RWH.js";
(function () {
  try {
    var A =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {},
      t = new A.Error().stack;
    t &&
      ((A._sentryDebugIds = A._sentryDebugIds || {}),
      (A._sentryDebugIds[t] = "fcf4e80a-580e-4d3f-8cb4-b2dd347ab63e"),
      (A._sentryDebugIdIdentifier =
        "sentry-dbid-fcf4e80a-580e-4d3f-8cb4-b2dd347ab63e"));
  } catch {}
})();
const YA =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='8'%20cy='8'%20r='8'%20fill='%23FF2A2A'/%3e%3ccircle%20cx='8'%20cy='12'%20r='0.5'%20fill='white'%20stroke='white'/%3e%3cpath%20d='M8%203V9'%20stroke='white'%20stroke-linecap='round'/%3e%3c/svg%3e",
  vA = () => {
    async function A(t, n, g, o, l) {
      try {
        const a = await aA.getQuote(t, n, g, o, l);
        if (a.data) {
          const s = a.data.find((B) => B.payment_method === "card");
          if (!s) throw new Error("No credit card quote found");
          return s.converted_amount;
        }
      } catch (a) {
        throw (console.error(a), new Error("Failed to get quote"));
      }
    }
    return { getBuyQuote: A };
  },
  MA = {},
  SA = {
    width: "20",
    height: "11",
    viewBox: "0 0 20 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  XA = e(
    "path",
    { d: "M1 10L10 2L19 10", stroke: "currentColor", "stroke-width": "2" },
    null,
    -1,
  ),
  NA = [XA];
function RA(A, t) {
  return E(), Y("svg", SA, NA);
}
const DA = G(MA, [["render", RA]]);
var JA = "Expected a function",
  W = NaN,
  kA = "[object Symbol]",
  HA = /^\s+|\s+$/g,
  PA = /^[-+]0x[0-9a-f]+$/i,
  yA = /^0b[01]+$/i,
  QA = /^0o[0-7]+$/i,
  zA = parseInt,
  GA = typeof M == "object" && M && M.Object === Object && M,
  LA = typeof self == "object" && self && self.Object === Object && self,
  VA = GA || LA || Function("return this")(),
  OA = Object.prototype,
  jA = OA.toString,
  KA = Math.max,
  FA = Math.min,
  y = function () {
    return VA.Date.now();
  };
function WA(A, t, n) {
  var g,
    o,
    l,
    a,
    s,
    B,
    d = 0,
    v = !1,
    u = !1,
    I = !0;
  if (typeof A != "function") throw new TypeError(JA);
  (t = T(t) || 0),
    z(n) &&
      ((v = !!n.leading),
      (u = "maxWait" in n),
      (l = u ? KA(T(n.maxWait) || 0, t) : l),
      (I = "trailing" in n ? !!n.trailing : I));
  function U(c) {
    var p = g,
      h = o;
    return (g = o = void 0), (d = c), (a = A.apply(h, p)), a;
  }
  function J(c) {
    return (d = c), (s = setTimeout(r, t)), v ? U(c) : a;
  }
  function w(c) {
    var p = c - B,
      h = c - d,
      V = t - p;
    return u ? FA(V, l - h) : V;
  }
  function i(c) {
    var p = c - B,
      h = c - d;
    return B === void 0 || p >= t || p < 0 || (u && h >= l);
  }
  function r() {
    var c = y();
    if (i(c)) return L(c);
    s = setTimeout(r, w(c));
  }
  function L(c) {
    return (s = void 0), I && g ? U(c) : ((g = o = void 0), a);
  }
  function AA() {
    s !== void 0 && clearTimeout(s), (d = 0), (g = B = o = s = void 0);
  }
  function eA() {
    return s === void 0 ? a : L(y());
  }
  function k() {
    var c = y(),
      p = i(c);
    if (((g = arguments), (o = this), (B = c), p)) {
      if (s === void 0) return J(B);
      if (u) return (s = setTimeout(r, t)), U(B);
    }
    return s === void 0 && (s = setTimeout(r, t)), a;
  }
  return (k.cancel = AA), (k.flush = eA), k;
}
function z(A) {
  var t = typeof A;
  return !!A && (t == "object" || t == "function");
}
function TA(A) {
  return !!A && typeof A == "object";
}
function ZA(A) {
  return typeof A == "symbol" || (TA(A) && jA.call(A) == kA);
}
function T(A) {
  if (typeof A == "number") return A;
  if (ZA(A)) return W;
  if (z(A)) {
    var t = typeof A.valueOf == "function" ? A.valueOf() : A;
    A = z(t) ? t + "" : t;
  }
  if (typeof A != "string") return A === 0 ? A : +A;
  A = A.replace(HA, "");
  var n = yA.test(A);
  return n || QA.test(A) ? zA(A.slice(2), n ? 2 : 8) : PA.test(A) ? W : +A;
}
var qA = WA;
const Z = sA(qA),
  X = [
    {
      value: "ARS",
      label: "Argentine Peso",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHpSURBVHja7JfPahRBEMZ/1dMzGyW6IIh4EgL+w38Q2Gfw4DPkCXLzNXwMfQffwbAnwehBETwKuiRLNtMzVeVhRzNZPLgj6b2kLn2Y7p6vvq7v62pxdzYZgQ3HJQABCmDUjTlDgToC11++/fAjBMme+avnD29EYCwCu7fHWQF8/XkCMI7AyIDGjHlq+a1K6QhZVakI5+b8TcWra1fnbVeRZAYwigBmTt0qqbUs2SdVtEMUAdScWo1a8wCIKjTdvyJA684iGaeNZdK+oNZjwNw5UWWhms19UgdAgPvu/nHQRu7LHRgmYRF5EIel4GjzBUuHgBKqxxTlziAggwC06RM6f4PpN0AI9RTf3iNWdzMA8BZLB7TpEE2fASiqOdJModwBKS6aAQc/xfSIWMyWpq7HYIvltyEMuDsi/3h+UhLKCbE6wDTgXhDLO4RqAhLXqF8fCACIW0+BfSxNcTeK0YQ4erSmgPo+YEYIYS0hx61neHUPBESurE29Wc8JX7x+B7H8Y48XHWURQJueFatSFpFcDaq407bau4zcKGVIDQ/vRtT0rCf0XHfAuRrwMwBmtpYK/psAEcy0L8Oli18t8/Wl3ruOFTeOZrPMh+AAKsAt4AlwMzOC78B76d4E17oxZ9TAsVw+TjcN4NcAEDjiEwBWF/0AAAAASUVORK5CYII=",
    },
    {
      value: "AUD",
      label: "Australian Dollar",
      flag: "data:image/png;base64,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",
    },
    {
      value: "BRL",
      label: "Brazilian Real",
      flag: "data:image/png;base64,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",
    },
    {
      value: "GBP",
      label: "British Pound Sterling",
      flag: "data:image/png;base64,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",
    },
    {
      value: "BGN",
      label: "Bulgarian Lev",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFpSURBVHja7JdLTsMwEIa/cdNWoi2VKiHEDdhwCc7EJbgJB+ASrDkGEkgtfaT2zLBI2oY+YIFwNv03UayJ/PmfsT0Rd6dNBVrWGUCADtCvnzmlQFkAl+7+3srqRSYBGLeYgXGo7W9L/fMuOAMUAPdPD9wMJixSmWXSi6LPdL3YASRTZnHJKq3znEBulBq/A3yWy+2gAN44KpvaH/cjMae0iU2qJNMGgCpzXREtHR7Uf7mtT3wfVemE0ABwZR6XxJrqv9UNHUa9wQ4gqqLqmPt3b/nB333v/Uhe/LgTipNSMwUWMTHM7dAy/yWpp979dJwhRG8WoRoOlQMZ5F65vgV4fnyh646v82xD6fWIIXC7AbCUoCgqtDyNAJrSzgEz23mTSVbvuACgpohItslFZLvowKb4MgLQACgq5yuAMBxmTIFvAdQcPqbTrNdwXW0qwDVwB1xlbgXegFepm9JRC81pCczk/HPaNsDXAHiJs95W71VRAAAAAElFTkSuQmCC",
    },
    {
      value: "CAD",
      label: "Canadian Dollar",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANzSURBVHja7JfLbxtVFMZ/dzz2uGkeJWkUQ5MC7QZiIVhBQGxoNpXKY8WiQhWs2PDfIKGqsEIRFBWpEoINO8SKx5INilRYRGkLCYlje+x53HsPixmPx47HitMq2fRIoxnNPfPd737nce8oEeE0zeGU7QkBBZQAL72fpBkgdIHZ7fev76lS8fxP39441gwPrt8Ys3TFM7c35l1gTjkO1TffeOxLHIcZ/bkJMOcCnhgDUYQ9aNIrS6UUAI9SpubfnQwrj+PMzUIUAnguANog3QAJwszpsXSHMBqNFYQQawBcADEaGwTYIJhshf/tAVBamB85XohXKSN5AmiDdHyk25mIQLS5CcCZ19dGjhfhietgTZ6AMdimj/WPRkBvbeGcP0/r6zsAeK+8jN3dxV1ZGVSgXYAnKguPC2DjGOu3kU73SAS6v/5O+7sfkHYLgH8+/oTp995mZoiAdEYTsAgSRfkQaGzLRw7FTNJeNWhe/UUaNz+n1zuk2cKrrx6eyPfT7wdxlLFIXgHRGttuI2GYNQl6ZaMU+sFD7N4e0V9/o7e2mP3wBhLHCYgIlBzciys0bt7CXV6mcul5nPl57LCiIqAUSmvQ8SAB/DYSx6Oz/eCAhx98lIHYIECVXex+I6nrp87RuPUFrS+/SsgDtW82kI4/OoZxBKl6WQi070MBAbe2BJUyZmcHlKLx6Wfg9Pcx02j034lQWlzErS1hGo3RBMplSjMz+STUYAxYm9uj+nHT2/cTua2ASt8P+PaCLiBJfPX2/ZzPsKQGm4bA6YVAWUkArCQfZneLV19l+cfvqdRfAG1y430frIDWVFJfr76a8xm8lBUkNnkCcZIgGdjQBbi1GhfufsvUtaugU8W0HnieunaVC3fv4NZqqSIFeCJInKsCrQ1lEaRIsp7Y1Spn16/Q/elnypcvozwvycswJL53j7PrV1DVaj/pi/BE0NrkckBrcN1+6Y2xqfW3eO7dd1BVj+CX35Jtd+1VJAixfvtw2RWcBYzOtWLbY3oEAqWFhX5L3t3NqeNRqnpHIwBYm1PAWJPs2RPutuL7xzsHKpUtOlEg7VCTmvvsxWOeRIcISErAmZ6eCOfM2mvjj9xj8KyVjICxAvvNZqHzuf39Yy10HGYabqOAJeAlYPGEj+U7wB8q/SeYSe8naSHQUk9+Tk+bwP8DABUr8pbubxXBAAAAAElFTkSuQmCC",
    },
    {
      value: "CLP",
      label: "Chilean Peso",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIXSURBVHja7Je/ixNBFMc/k90Qi+QOBLlDT0Rb0cZCC21ESCFYWlrY+Vfcv2B32BzYCYpYXmdpq8TmEKw8uPP8RTabzey8mWeRTbKEhBO83TT3hWXYNzO7n5k3782MUVVWqQYr1hmAASKgVZR1ygM2BtYePH31K4rNP/Xae/H49EZvzPkYWG9EDe7fvrIKD6zHQEt8wFrhT2JRVcwYb9xEFS18VUHAtmKA4AOZFUZWpjVbm2t8O+zXEwVOAtnIYZ3HOk82cjx5dL2wydSWjVw1AOIDg8wRRYY7Ny+ys93l0kabne0u925tca4ZkY6EdCSnDhCPAZRkkDMY5hwcJlze7NC9e5UPnw54vbdfvQtEAv00Jxk6kqHDGHj47A2D4r38VDIDTgJJmpNZwRjYfdvj6OeQl+8+k+VCkDCLimoAPP3UYnMPwMf97wD0vhxXHgXxxAXJMMe5UHsmigHe/9jFpym4k3389drz//9rs0nU6cwAghPwHkIo7VGT/DeRztm11HZRPctzp/cEcTMAFcEERYPOdZz/wCK7nlC/YBMKijpfBnAY1dIMVCxV1OXlRehpqqI1AoiUZiCIQBxDXQdUY/AiJYDJyGs8IYfgZ6nYB4+pKNMtOQlNB90ACKqVpdplLpgAjKOgAGi02zW6QKcAPij87vepU8Vq8wbYAG4AF2reBo6BninuBJ2irFMWSMzZ5XTVAH8HAPe8Jfm/nz0kAAAAAElFTkSuQmCC",
    },
    {
      value: "COP",
      label: "Colombian Peso",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGESURBVHja7Jc9TsNAEIW/sU2iSIFISIiGK3AGjoC4BRUH4g7chI6CQ4BA+Sfen0dhQ5xAJBomTaZZr7XFNzNv7LcmiX1GwZ7jAGBACfTb1TMSsKqAkzS+fkPOxbCCcvRwWgEjZHB05Zz/M8CoasqfgBo0BtTpDp19t2v65Xn7DLvP2QhUA/Sr5k0GLUEfTul/AAGAquGMGEtg6QRwtAkAETQHLZwASrQBoAiaNhBuUW8DzBwrINBqswXS1FGECfKGBkLbgtWOUdui/zFq9vfMsVaAcUuEefatzP/vQA1WdjUQWgEGvzG0kzXAxc0t80UgJh9zUpXG8bAH3DUAMSQkyNkHQIURQ15XICUhIDvZMwEhpjVAiBEokFMFkEixU4EYE2VVkt38qRFi5zvw+HrPoNdDS5+fkQ0GLELN5ZcnTDlhZrjlb0bOeW1KswSOAHQAGj/QAhTDoRvD18hXQMqC98nE1RK2ek8GnAOXwJmzLX8Bnqy9Exy3q2esgKkdLqf7BvgcAIbCtO8QpVy1AAAAAElFTkSuQmCC",
    },
    {
      value: "CZK",
      label: "Czech Koruna",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALXSURBVHja7JdNiBRXFIW/Wz/TjmHojIMGQhbBiJGIC3EhCpqNrhXcJbsgSSAgEzRxo6ig7kXGjQtRFAQJIggSF9pRyaioIfFvnPiXARcmjg7TXVVdVe+966KnTY+IjEN3zcYDxatNcU+dc+/lPFFVZhIeM4z3BATwgdLEWSQskAL0Dhy7pvXUaNEAegOgfOr0Hcqzu1i7ej7z5nxQpAplDyjZWQEPR16w79BVBv94UiSBkgfgrKPulLFqytFf/uTIyZtESV7cFOTWEddzktySqKNy8QF7D1zi1r1/iyFgjBLFOXGSEyeGGLj/eJTdAxc5ceZuRwkEAMY6xqOM2uuyW8vh4zcYfjTK918to+/D7s4QyI2lGqVv9F2Bs+eH+evuU/q/Wc6KpZ90oAeMo1pLieJs0lOLMuI4I1LhwcgLNu36lYGj10gz22YLTMOCemYm1qOg6Kv3V2qosv/gIJXLj9nZ/yWLF8xtyyr+fP6agSE8yHM3pY80yukud/PzD6vZuO6L6RcXWRQ0LajFGbmZIgEJGXs6zt+bt/Hwx9vvXjkM8Xt6WprQWox1WPf2cKIISMhn+TN2RRVW5f9QdQHvHGmcQphO7gFVcG8hoOIDwtfxDTYnl+nThKp0gUdLl0xRes+jmcQCAGscCrg3xDMFkC76bI3t0W9sSIfIxCciAHXTM18VzbPWPWAAD31NgabkK9NH7InOsdCOUpMSDZ5u+q2vijG2dRNa/MCntX5Dco9voytsTX4nVNeQvB0hVgRrzGQLfL8x503JPzZjbIsvsD69R10C6vjtKd78QdeigFOLCCgeSMDadJjdUYVP3RhVKdHu4C4iWOf+J6DqwAvpImdLVOG75DqCMC6lDiVRwbUScBqy0I6yw1VY4T8h6injkI5G5ubIB4Bdl97ip+eD9FFnhLAZVgtJxgJ8BCwB5lIs/gNuysSdoGfiLBIpUJX3l9OZJvByACmB5UHd8MJgAAAAAElFTkSuQmCC",
    },
    {
      value: "DKK",
      label: "Danish Krone",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHZSURBVHja7JfPahRBEMZ/Nem4BmJWBBE9eBBBEQTP4mt4yMGnyyEP5CWIKAjiIeLiJrM7f7qrvMzM9sQ1m57g7GXr0tRMVfVXXV1fd4uZsU3J2LLsAAiwB0yacUwJQOmAo+/vj3/J3ub5H5+e9PQfxx9ukbrw5PTkgQOmkmXcffc2OcYQn1aqs08AUwdMLASoKvT3nLYtRQSA69pUz3+u/X/VV0R6dtn0CKoSYOIA8AFbFlhRdkY3YYfYvvd9g05RQu0BcAAWPFoUaFEkLWOqfSd39rEYAD5gixxbLpLipNp3fi5DQwwgBHSeo3laQL0cBgATKKsVAK1rNL/EFsu0OIthABTDqiougUcvcuyvmlrDVe14JVCeR3zGGrv1/hIUa1ZAgBdmdrYVGhZ5uTuMsk1s97+kndMBfH31BilLzPtrnZ59+9zTvzx9Pqz2zmEHBxET+hoxA9XEftKh6WN11IbeB/bNsMSAdgsA3oeIiLwH5yB1LwzdOyIEH1GxtpmMBQBQDasuCBq6M3wkAuqSzgDUDEYEQATAdT0pQnZ4mEYiifb9Eqx4IKjBbD7f6HR/NuvpN/H55/ZpbsYCPAJeAw9HJsNz4KM0b4J7zTimlMCF7B6n2wbwZwA0ZvnD19OXPgAAAABJRU5ErkJggg==",
    },
    {
      value: "EUR",
      label: "Euro",
      flag: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBzdGFuZGFsb25lPSdubyc/Pgo8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnCiB2ZXJzaW9uPScxLjEnCiB2aWV3Qm94PScwIDAgODEwIDU0MCcKIHdpZHRoPSc4MTAnIGhlaWdodD0nNTQwJz4KIDxkZXNjPkV1cm9wZWFuIGZsYWc8L2Rlc2M+CiA8ZGVmcz4KIDxnIGlkPSdzJz4KIDxnIGlkPSdjJz4KIDxwYXRoIGlkPSd0JyBkPSdNMCwwdjFoMC41eicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMCwtMSkgcm90YXRlKDE4KScvPgogPHVzZSB4bGluazpocmVmPScjdCcgdHJhbnNmb3JtPSdzY2FsZSgtMSwxKScvPgogPC9nPgogPGcgaWQ9J2EnPgogPHVzZSB4bGluazpocmVmPScjYycgdHJhbnNmb3JtPSdyb3RhdGUoNzIpJy8+CiA8dXNlIHhsaW5rOmhyZWY9JyNjJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNDQpJy8+CiA8L2c+CiA8dXNlIHhsaW5rOmhyZWY9JyNhJyB0cmFuc2Zvcm09J3NjYWxlKC0xLDEpJy8+CiA8L2c+CiA8L2RlZnM+CiA8cmVjdCBmaWxsPScjMDM5JyB3aWR0aD0nODEwJyBoZWlnaHQ9JzU0MCcvPgogPGcgZmlsbD0nI2ZjMCcgdHJhbnNmb3JtPSdzY2FsZSgzMCl0cmFuc2xhdGUoMTMuNSw5KSc+CiA8dXNlIHhsaW5rOmhyZWY9JyNzJyB5PSctNicvPgogPHVzZSB4bGluazpocmVmPScjcycgeT0nNicvPgogPGcgaWQ9J2wnPgogPHVzZSB4bGluazpocmVmPScjcycgeD0nLTYnLz4KIDx1c2UgeGxpbms6aHJlZj0nI3MnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSg2NiknLz4KIDx1c2UgeGxpbms6aHJlZj0nI3MnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCl0cmFuc2xhdGUoMCw2KXJvdGF0ZSgyNCknLz4KIDx1c2UgeGxpbms6aHJlZj0nI3MnIHRyYW5zZm9ybT0ncm90YXRlKDYwKXRyYW5zbGF0ZSgwLDYpcm90YXRlKDEyKScvPgogPHVzZSB4bGluazpocmVmPScjcycgdHJhbnNmb3JtPSdyb3RhdGUoMzApdHJhbnNsYXRlKDAsNilyb3RhdGUoNDIpJy8+CiA8L2c+CiA8dXNlIHhsaW5rOmhyZWY9JyNsJyB0cmFuc2Zvcm09J3NjYWxlKC0xLDEpJy8+CiA8L2c+Cjwvc3ZnPg==",
    },
    {
      value: "HUF",
      label: "Hungarian Forint",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAF/SURBVHja7JfPLgRBEIe/6m4mxNqQiIMH4OLuLK5ew8nNM3gXJ0cSB+8gQjyAm0TIWrPzp6scDDsSZA+2x2Hr0odJp7+pX9WvusXM6DIcHccMQAAPZM2aMiJQBGD5fm//UXxInHth4/x0NQB9cZ6F3Z0JFPk7yPLmFqAfgMzqGisi+vT08w5rBPstrCXsd/ua726lhxUlQPb+SxqxfISNRkmyb/kcVPU4p1ZFLH/F8jwNwLzHyqolal2hL0N0+DqFJvvGab2gddkGiMTBIzp8+V38SepgggIyKaBsAfSPDnFLi1ijy9TNZy6gRQWXZwiwaWZ3nbigyNZsFvwPgC4uJR9ndg4QAE6uLnDOoaaJBqHDVMcAB6fHmIOicadpRxbm8SpjgDrWeB9QEkkhUGlrGMUY8RbS1YK9n/lZhKqKiCQrQBFBNX7tAiEhAIJqqwtMDRHoZYvp2rAFEDFj8DxIbQQAUYB1YBtYS+xFD8C1NG+CXrOmjAIYyOxx2jXA2wAKxavOvgn85gAAAABJRU5ErkJggg==",
    },
    {
      value: "IDR",
      label: "Indonesian Rupiah",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFwSURBVHja7Je/TsNADIc/p4Gy0EpICIkXgIUXQLwGA8/HwAOxVOxMSFS0SZtc7mwGkjZN/4wXpNaLI+cX+ZPPdnRiZvRpCT3bCUCAATCsfUwLQJkCo8/nl28ZRM4vwu3b61UKjCVJuHh6jJrfTT4AxikwtBDAOfRnRjOWIgJAd0xFZEOza4y733Z1yXgErgQYpgD4gC0LrChXon3bwfY8cyC+pStKqDwAKYAFjxYFWhRx6n9+hrUB8AFb5NhyESW/pQka2gAhoLMczeMAYAKlWwNoVaF5hi2WUfIrhjnXPgKPznNsqwes3lWN3xWn9e6Qbh2XoFi7AuY9mmVYWa6WBM3YiHSYOnGzbc3e0v9pxXvw1SYAeYZVVZweqBzUm1eAOzOb9PIjErlPdm27KINQ5/wfAKoaHaDJebwAIYR/VIGG5nh7oI8xbABSIKgq0+m0jz0QBLgBHoDryEX4At6lvhNc1j6mlcBcTpfTvgF+BwBQX+dNKiecnQAAAABJRU5ErkJggg==",
    },
    {
      value: "JPY",
      label: "Japanese Yen",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJHSURBVHja7JfPaxNBFMc/s9lkk5Kmra0kelFbJJUiiAqKpaBQ8OhB8SIIgid78OLBq4f+A0UPIoh4VLyK6EHBQpWChypUUhV/IP6qCWzTTTbdnefBVNNizVRi9tIvDMvCzJvv+773Zt4oESFKWESMDQIKiAFO/dtOhIBvAxkRKUbivVKbLKArwgh0WXX5o4ITeRLa/7RKhLBYZOn1WwiWiA/0Y/X1omKx/08g+PCR0sRlgvfvUChAIYTEevvoHhsjMTS47jLMi8hLk8nVqWnmxy9hkfjDESJofLpPnyF98rhpFQwaKxB8+szXixeIkUII1/SmeGWCeP8OnP17W6iACF9OnaVWmAXigNSXSoMZ6v8ay0my9dE9VNxujQLh/Heqz54CSaC66hRvJPOTSFguUpt5gbNvT2uS0H8yjV6soAhMy4TFu/dbR0B7HrpUQpEwJKCRctm8DEUEpdSak5Ijh5CwZly1Go/U0dEmaSW/A9msK7K35HAGhhDtg9ZNRoAV6yA1fMCcgNa6WcGSvX0Trb2mBEK9QPbGNZTz9ytmeU8zAkBiV57c1esE4iISIKJXjYBAXHrOnSd94ljzMDXsma9UKmKKyuSUvNm2UwoqIXMqLXOqUwoqIa96cuLeumNsx/M8AfK2qQK/EnL4INtnZ6g8nsR78BDxfTpGj5A6PIKVyRjbWaGA67rSbriuK0DeWq8CrcKKJIzicbJMwAZCrTWlUqmtBOpOhwrIAruBzW0W4RvwXNWb0s4ImlMfWFAbj9OoCfwYAOvZ37XX6A+0AAAAAElFTkSuQmCC",
    },
    {
      value: "MXN",
      label: "Mexican Peso",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAANrSURBVHja7JfNbxtFGMZ/s17HjvCHWlJckqpKVRqStqkEUkulKodKCKkcAAkOIHHpgTP8AVz4J7hx4gC3coELXwIkgloEgqatK9qmYBHU2M2HnfV+zrwcdl1v3NQ2InIufaVXo9ndmXn2eZ/3nRklIuylWeyxPQaggAyQS9pRmgZ8Gyi9cemDtYw1mIxPX3l/qJlX3nx7CO4tpj75eL8NlC2lWDh0MiEEQFIEpfvD2fjCuYHfBDduApRtIKfF4OuITd/5v2vH3K42dviR7kRWuYQEPkDOBtDG4EU+fhTsSnDF9/u/93wINQA2QGQ0Xhjg6gCk+/Md8NL7bBAAz011HiZBxmwkCrsAtBicyMMN/V1hwLTd/h/YGUwUbWegFbg4offfFwt8rLHc9meOM3hgEHQBhCbCCT3aQzLgRgGNv+5wd/EL7l37gaeeOcWZ198jX94XU9xu9weNIGkAHQa8HhEKgkI9aDt27e51lj/7iJVbl1G25sZijfv1Gq+++yFWPo9xEgAioFS37chBG8TbAYCvg0Qv8aIIKLVdfs3NOuPFMqVnn2Nl6Wu28oashps//0h18RLHz7/VBfCQOmMgKowgLcLIaJzAJTRRX+rWvAahH/J79Rcqy7fY9FqIzvHChYvcvn6F+laD1dYq0h6ggTCATKYHQOgSGt133NU/vqdYUzTbdWanjjB7aoFq9Sdu//o5M2deo3xwhsvVbzi+sdEfQDZLplhMiVBrtBZMOuF7KyJQHt+Pe1SQK3/y5T/38A+fZl9+AjdwkI0x/vYbHKwcRoz0L6Nao5M0tOJKGGKUwWAwkjg9fTEcO/Q87WaNmblZtqZeorD0Fb8tfUtm8ixr0wVCPOanT4MxicuOrowgYQpAqA0CGJG+/kS+xMm5F/G8GpXid/D0MU6cOM997jA1cYCz8xfIZfMpAI9wESRMZ4GOkIwVh2CAVQqTvHzuHVaayzhzDuiI7JNFpieOdsVuzIBaLURRei/QGtu24tQb0iZLR6D06AX6H4PUAw3YAMYYENi1E/IQ80iScVYMQKMUIzOlFDoJkwUgenupHQGCmPVOCARBKUVhbHx3jtqFwuBdNAmTDWgRobWxOXDQ+vr6UADWW80hdBKXJAVUgHngwIiP5XXgqkruBMWkHaX5QEs9vpzuNYB/BwA7w/0Mp44rhwAAAABJRU5ErkJggg==",
    },
    {
      value: "NZD",
      label: "New Zealand Dollar",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAARqSURBVHja7JdtiFRVGMd/5947M3cnZ9f1ZW19RTNfQhEiDUEjDT8E+iH2Q30ICqQvEQkSlZIVFBW49iWFskjKyIJehIxdLMkKNAoKCV921zZ11XV33be5c+fuveeec/ow4+yMO5LYpl984HBn7j3c8z//5//8z3OFMYZbGRa3OG4DEIANpIrXmxkKCB2gVv58ZOB4/Vze3tFCz8U+wOWbjx6jf/NLIASTd7zGhif2AYZp0yfy5DzFg7MSPLxv8MaptwQtLZsmOUDdrwd/Z+V6m13NTXx/5AztJ7oQrkvNqvsBgXBd1j50D3dNr2F1JqBhXiM9U2eztueX6rQKTSJhIaXGmOpZPn78AkCdA6S2HbPYsiDHfX8fYsPK5fxYPwGURvb0FbKkNEsnKla7AySW3cvhbsWBT77DSE1FERsQKFKuS8OUNIODASMjIULYpecGqK9PE4YxQMoBaH2vCeEmQRde+MDiNKCJsnmwLECzrmlFaZ1VGVj1/Bo2bWutsjfN/FkuTZOH2C/qOHbaB3TFjCCIkFIB4AAMPPsCiSWLCYdzGGGBlBijMaEEoPfVZkglMTJGYEgmHVwUQXB3FQCGc5d8DqdqOdubIwjiotZHI5l0iKIyAHE2hzWYJR4YQiOwbBstJRRdUuWDQm4TCSyjUbZACY3vR1Xz2+n303nmcnFhUWKmMCxs2yKOywA0fPgOJBzQlbZ8/pkXAcHMnW9WXcjf+Nl1Kd51U8yaXsv5bo8gCBFCEEVy1IiWr9/Nxz90EfkB0Zf7+erdVjCaRBySjCUYzcGTwzj9l7m8Zx+7mw+w7qkv8LwQzwtRCmbeWYvWlO6Vj/mNNWxu7GVhYxrPC8lmRwgCNQpg567H2Tg7YGDPp7z1h2J7azdogz0SYEUjoA2vPLeXN1ouMOHRR3h6oeblBQG+H+L7IYtm3sHWGT0snjEB34/KRojvR7Sfy/L10CTazmfx/QjPyyNlPJqCFccO8VPbENtPp+no6AIcjDGIfB4sG2MMuZxh7/sH+e1oO1u3rGftnJP43x7FGM2ps1k+T0/hVNcwuVxYot62C/k/0dbDyfZLGBMDSaS0kVKXrHjh3LlbToFVQnV9oUkmk0RRTG1tEs8bqTAd2x79rZQumEBRkImEg+MIOjpeX+QASKnJ5fKl2rz+8AEYHBx7rllW5X+tZem4SSRs6upqysowVsSxQSlzA2dZmQ2WnzRKVTChlFWaI4Sp9AEpY4wxaD3+3ZHWY1k1xlT6gIoVxvC/AKgWxlBZBTKOgYLax2nfxePevkbPY4rCLGnAYNvjxYAmk0mzaP5k2v7qJ5vNVwVxhQGrIJC4lJv/PiSrl01l75Je1ixrwBg5Zk65SK2CUDRCiHGi36HjYp4P8nNo6/avkHxVwyJKbDtXdj5u62PR0dlHc+cFIFmVfiEKm74KgCCTccdR6zX/UgmjABQYPG94PAvtGmY1tjMWwDRgKTD1JrflfcCfovhNkCleb2aEgCduf5zeagD/DAAXWGtU2QJr6AAAAABJRU5ErkJggg==",
    },
    {
      value: "NOK",
      label: "Norwegian Krone",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJtSURBVHja7Jc/axRBFMB/s9kzHiY5ECRKEIMICmJhZyNCQLAUxCJfwK/gZ7AVbPwCabTXSqwsLSxiaSrzBzySvdu93Zl5z2LX3b3ksnvk5NLkNTMM78385r2ZN2+MqnKeEnDOcgFggAVgsWjnKR5IQ2Dl9/OXfwia17/+cYtnr7YA+PR+k90XmzP63nDjw9bVEOhhArpPHrfabDxaL/vT6DdJtr0N0AuBRfWCpilyeAT/rqUxeVu7prsHw3LY7+3nOpOu8XHbY3pBrwepBVgM89kcmozQ0aiROs1c2dc0PfPudTRCnQWgAPBIkiBJ0miYjCqANt1G6XSQrAagzqFxjLZMOkxstYsZADQMwbk6gEejCB0OWwCyapIW3UYAQLOsFgJr8YMBGseNhlFcAcgsAKpQnKHyEEo0OHkItUhVxQEexrYGEJfjmGP6k+xr48YL2JoH1r59nYp8EGclzdqXz/8hD5sc4PbTdxAo1spUdjc33s60bqcTEAZB5QHrPIM4wzphHtIJA3rLl8vo3RWRn8aYVsPuwzd5Pvj+emYIVSUIgnshwM6d+5g0Ra071WB9bweRKp3+Wr119tB3QrTbrULgnSNUBWkOgdTzvsgs20dsLROKdSiKtkyqNQ+oyNgVnXgd9XQAb2uZULyDhXDyyzbmgfFJTiygp/Qn1EHejwFIXg+1AIxV0DNW0+Klqgm9SPWGz6UQNIjUAEQVM0cAUwPIX0PNPRAsLTUaLl+5VFU1LbqtIdAKwAvQj44aDVb6faKjQwD6/X6r/jRPMuANsAo8AK7NuSw/AH6Y4k+wXLTzlBSIzMXn9LwB/g4AW7s7XlkEogEAAAAASUVORK5CYII=",
    },
    {
      value: "PLN",
      label: "Polish Zloty",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAECSURBVHja7Jc9agQxDEafZmbZZn8gEHKIkCb3v0WOkDKQQJYEFlv6UsyAJ1MsbGM3VmNkF36WLOuzSaKlDTS2DmDACOyXsaY5cJ2Ak6TPJqc3exiAc8MMnIcl/K1s36ugA3SADjABvD+/4j+/kFKdXXc7xtOxAETO4A4RldqQEykXAOWMKVAlAFOgnAqA58wk1YuARKQVQKSM0P0RMEAbn2Vuu7YB8HUKwjOME9wrUHXD121y938AMeuhigo5PMo74BFgVlMKEbECCAmrCGArgLkMNUdgOBzqpUAFwAP4unxXfYKX2+YGPAEvwGPlNvABvNkiSo8NxOkVuFj/nLYG+BsA7IN3I+J4MQQAAAAASUVORK5CYII=",
    },
    {
      value: "RON",
      label: "Romanian Leu",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIpSURBVHja7JdNjtMwFMd/TjKUj+lUQkKIHRdgzw6BOAcSJ+IUwIYDcA8WcwU+pOnQNE0c2++xmLR1Op3ai6GzGW9sNX7pL//n/8uLUVXuchTc8bgHMEAJTIb5mCMAtgLO3n/8fFFWJhnx/dOXrDv//HCaob3hxbevTytgVpSGd69fpoOqt1kAj948TO7pz88BZhUw8UGwNnC56NAhL6wFUba/ya9hpVEGr9s4/H48xA7XjNmugWI2A+sAJhWABKG1jq73CW6bpYB2ReJ6h3p3JSqAC0rbedouAaBtFoCktp2cIH0E4L2wXDma1iUimzwFEgBaVeB9BBCEurE0bb9OO3s9IZkAiW0KaN/HCgQWjb01BVKcqgrWRmfAC/Wyp7X+OqqJ52UmgNkfv/ZOEHD9GGDRWOzGBbtWW4/V2Fprqxmzk4Lypke/2us8OjoDXqhXFuckP7nK/vUhgE0VclAWsQKB5arH+RTARV6Rv5SkDcuzaeyCgA9CkFRzInmvGUnsCwFxfnwGVEFSAHo7AEZlXAmDFxQQPZICqoiLS7H3QIEmU3Dg5EXuUZGb3lMbgOD8+AyUVUny/5MK6NZuergPCsGPU1CWQ4XKVuCwxMlHCbLtCUXDbi35z42gQSQCUBXMEQlMBFCt3WUMTJ88SERO81rt03RPKLoFCKDUi7/JoPl8kQUwr9NqDqckGOA58Ap4duS2/A/wwwzfBNNhPuawQG3uP07vGuDfALalRDFDQZuoAAAAAElFTkSuQmCC",
    },
    {
      value: "SAR",
      label: "Saudi Riyal",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASmSURBVHja7JfLbhRHFIa/6utcPJcQfAnYY8cYG1kEIS5RImXDEiTzAnmTbPMOiAfIAyACS3YWUliYEAQYhoCJ7bEte0w87b53V2XRMz0ey4hNZG+oTXXPnK7+65z//0+1UEpxkkPjhMcXAALQAbs7H+dIgdAAqjd/ubmra8f7fk1o3P/1/ikDqOlC58blG8cK4MWHFwA1A7ATmRBGIXvuHgrVrY0AyO/7NRMDMYf/P+rZw3H1cp0ojgBsA0BKSRAFBFFwLLsPzIAkSQAwAGIZ40UefuQPBEolQYFSCiEEQhMomV0rpeiZmBDZjlEZrTVNI00lQmS/afqg2EzTJEqiPoA0SXF9FzdwBwIt00LXdCzDIk5i/MCnaBcJwgDbshkqDiGEoON1sjgzi3MDl3KhjJQSwzDo+J28LAC6ppOkBzKQyATHdwYApDLlzNdnuHzuMvWhOrVSjYd/PORU5RRBFDA+PI5lWpTsEqdrp1lqLnH+7Hla7RYbuxvc+v4Wu84ujudw7/G9PDu9jIVxeKAESYzjOXiBl5NHScXUyBSz47PYpk2r3cINXDpeh2uz19B1nVq5RnOtiUCQyIQ362+olqoUC0XcwGV9e50dZwc/9Ell2ienUkcA8J0BDshU8uzdn5iGyVBpiDAKmZ2YZc/do7nepO20GamOMD81z9LbJS5OXWTxxSJXZq6w2d5ko72Bbdm0dlpESYQf+TlXUpX2VNAvwb63TxAHuWxSmfJu4z1xmtAYabDwwwJvW29Z2VjhQuMClWKFmbMzTAxP8OzdX/iRz/TYNB/3P9LutFleXWZuYo5quYoXeHihlxEZQZqkROkBAHGaZSBO4n4GpKRoF5kcnaRslXn09BEvP7xkamyK5lqT63PXSdKEp38/xfE6LD5fpDHaIE5i5hvzFKwCzfUmZbuM4zsEUYAmMjVESUTPebMMJAn7/j5x2gcQxzEzZ2ewdItz4+dY/mcZ27S5ev4qK1srPHj8gNs/3ebJqye8Wn3F2Fdj+JFPtVTl9dprpr+ZZrO9SZRErO2sYehGX4a6Sa1cy5vR3OTPk8tu4ObSOKgE27Splet4oYuu6ZncdIvVrVWq1Wq+Q0M3CKIAIQRxEmPoBvVynY7XyQgo+jI0dINKscL7395fyEmolEJKmUFSfbkEUYAXtvIFeuZjFazMO3wXTWgEBLl5GbpBkiZsd7bR0HID621ZSUUcx/3zQJIkGQAlkVJmc/e6Zxya0BAINKGhCQ0pZUYqkfm8VJKCWaAx3CCMQsI4zHvA4TUVKi937oRKUyglUd0U9B5WUjExMsHCjwt9JwFEN009f1FKUbCLjNZH2fp3C8d1uPv7XQzTONCQcpdBpnJQhrqmI5XK8593LwGr26vcuX/ns02mWq5y6dtLmLrJ3MQcSvT7xcFuKBB5LxDA3NCtoWXLtvBC75OLKxR85gDdS3fv2tTNI+NKdokoith/uJ+RME0HWXr02U0crMAnYw53viPjhMhLoPXQfg7A/3oQFSJr9T0OKJmRrlKsHBuIniyN7umUTqdzEqfyVACjwHfA8DG/fBt4LrrfBJXufJwjBBzx5eP0pAH8NwA4joR1D5V93wAAAABJRU5ErkJggg==",
    },
    {
      value: "SEK",
      label: "Swedish Krona",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJRSURBVHja7Je/bhNBEMZ/c3eJFVBihISgoIeCPIRLCkqeIR1FeiQeAKXPa0DNOyAhJGq6CIk4dhzfn90ZirN9exd7bTnIaTLNefa+OX07u9/MWMyM+7SEe7YHAgKkQG/23KV5oMiAo7efvv1NE4miv56etfx3Z6d3S70IXz4OnmZAPxVhcPwiHpENWu5a/Br7+XsI0M+AnlOjcJ6rSclclTJLyEKlehGcmnExnCISvA/PtRPbxT15vE/pFKCXAagqeeHISx/hXLS9ym+9+7x0OF/HZwCVN24Kz7SIfNSmLTeKXWN7aULprCHgVZkUnkk0A5O2V25PIE0TnNeGgPPG+KZkkrvVUdohMK22174ZRRUQqJwxzh03hds8A1Fs3Cy4QzUBVcbTimk3rba49GDXrVfXuavX58II8cvig3WvNlcBAryy0Ztf8Agsv60b6RSoZToV2XDrc2wPKJGj76+z+kUFjIGqYR7uYlUe12FWxpWLyl8TwM1SXLEb2wPpNwRMHSIe0J31IbOqIfDyw2cKp1R+NYGr85OW3z85v1MhOthPgPezOqAOI0GjZ9kmp3eY5AyowlLsnWKJYGYtZYUqqglIcKHtlvKsM2iEaxL8NgwNCTjvSZMUDVqW3fqotbxlWCLC6JIrnQt7gSdFiA/ItrQcbDuI+VkzSgC8N4TdmQBq2hAw8xsXs/9CQEA1uAN1hRQOD/YiUYctN4rdqCo384DHlNFoGA24vBy1/HX4jfoCeAGeA8fAsx2P5X+AH/PWdDh77tIKYCwPf07vm8C/AQB3zDSuwfvUHAAAAABJRU5ErkJggg==",
    },
    {
      value: "CHF",
      label: "Swiss Franc",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH9SURBVHja7Je/bhQxEIc/7210QkpyAgmiCCR4AVq6iFeg4QVoeCYaWhpegIqCjpYiJSAhIUCCkP1zu2t7hmI3Ou/dsrDJydfEjeVdj/15PD97bFSVXZaEHZdrAAPMgHlXxyweqFPg8OuTpz9JIs+fGI5fv7qVAgtMwo3HJ1Hnb05PARYpMFcvaF0jv8/hQpbGtPW6TI3p9xmS8brtWr9ksYDaAszTdjccuqzQqoqyeq0q1FkAOgCPLJfIchnH/3t7SBMAqHNoWaITAO68fNFrf3/2/P89kKbgXAjg0SxDi+Lybp1gq4A2TbAF1uLzHC3LSwPIFABVqOswBhyS5ZtBqN1RdVGH3zcAyuF+A/bGC9jAA2otZDnaUW1IDbj3/t3oqu6+fdNrf3l0MrT0djzr0PUYIC9akG1JrRjZzsbCLOnHgCtK2CKAPzsbleHs8GAFIM6B9yCyPa2PjeU9Yl3/HDAq6IjRp6P7vfaDb59H/49ewSr9k9A7R6p6NQ9MsVVFbAAg1qHoqAf+OabISmqh/P4C4MMtEO9glg7fbBNW1ZtQx/Mg73sA0uZDEwA+3jy+Wox6WeWEXmR1h0dJBA0iAYCoYiICmACglaG2Hkj296NBiK4AvAC/svOoOWEXbd4AR8BD4HbktPwH8MF0b4KDro5ZaiAz14/TXQP8GQBK9x49i7au3QAAAABJRU5ErkJggg==",
    },
    {
      value: "THB",
      label: "Thai Baht",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGSSURBVHja7JfPahsxEMZ/o8g428bZElLaQ+8ulDxD6LGHQF4v79BbHyWF+pZrodB/TuzVaqTJwet0sxjfqr34uwxII82n0XyDJGbGmHCMjAMBAY6AaWdLIgHBA6ffP13/5KhwMsTx9svnMw/U5oTq42XR+PHrN4DaA1M0YSGQf/+BrSxFNnYoU5HnPrtkPFw78HOvaqwNAFMPQE6wXkPTlDl+04DqUxHOzWwxigJE3h/6wOgEPMCHqxvO6op10Oez1lXJ1u4apze3z683Xk09TRfLA0TN/H0IhFZ7Ow537++6L+o+bHyjJqLmfwRUM8tVIMZcJO2tOrxz/Qwk7lftE6v/jYl31LPjXgZSQlMm5TKPE0mZVgc1YAa5EAFzgnbXLcA8xrjw3heVn6oymUw2nTDnXFz/25ijEUgpjUtgG9MD3J2/46SqsIdVGRW8fMH9uullwAwRKXZ6ESFbLwNmBiK42Um5K+heSB5IGfi1XBatga7jJAHeABfA68J1+AO4le5PMOtsSQRgKYfP6dgEHgcAXOm64+6mtEoAAAAASUVORK5CYII=",
    },
    {
      value: "TRY",
      label: "Turkish Lira",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMhSURBVHja7JcxbxNJFMd/s7u2jziOuaCYAKZJQwUV1UVUKC2YkziguOtA4hNQAeIj0CFFJ91BAcXlAyBRIGjuDoUCIhFSICSknKKQEGyv7d2dmUex9mbXlyAfnDYNTxqNtPt25vdm/u/NrBIR9tIc9ti+ASjABUr9Pk8zQOABE/+cP7+Jm/P8SnHo/v1JD6jiOOw7dSrX+cNXrwCqHlASa5EgwDabMEhLpeJ+OE2VyvrslMbD3w75OdUqRBFAyQNAa6TXQ3q9XKKXXg+JAYgBjMF2u9huN5/1LxSwaQDRGul0kB0AvFqN4okTeEePYn2f8MULwuXlr1sBzwOtUwDGIK0W4vsZx+9mZxm/cBF38nsQQa+vUzhyBK9ep/Po0b/8RwYAJAxTWxBFmHYb6XQSp7G5OapXrwIQ/P2M5u+/oVdXAXBrNZxymej9e7D2vwOIQBCkALTGttuJCL2D00xcuQJA768/2bhxMzOAfft2W/DFEiBJRCOVAGshvQISRdBuI32qfbM/oDwPRGjO/5pZmeE0Va5L5Zef8f9YwK3XCRYXPxd6/J3WyLAG8P0kNUonT8bJsblJ9Ho5C5Ay9/Bhxk6fpvLTBcpnG6xdurSrb8aiCBwnqwHd6QyKAzLYV2sxW1vYXQZ19u9HFYugFAowGxuYra2R0tCtVLZPQ6s1GBMLylqCJ0/iCA8cwKvXk+fDLXrzho937tB68IDVs2cozMzs6ptpxsRzDgBE61gY/dZaWIjz1HGYuHz584OFIZu3bhG9XqH7+PFIAMraZLsdAKN1LJC+g373jo3r1wEY//EcU7dv401PJ+/dqRrFY8fiXfL9uB6MEvmgiWQrodUaEdnee6B59y5iLZPXrlFuNCg3GoQrK5i1NYLFRT7OzydK/oJCEAedBqCfdmlr3btH8Pw5Y3NzFGZmsL5P7+lT/IcPY818xV0gCzCIfIejNVxaIlxa+t/Po8GcsQas3T7Dc7oNZQCsCCpHAJUC8JLCoxTO+HhuEGkAY4EPzWaud8K+2owCDgLHgamcr+XrwEvV/yeo9Ps8LQBa6tvP6V4DfBoAveP61Ibw9rIAAAAASUVORK5CYII=",
    },
    {
      value: "USD",
      label: "US Dollar",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALESURBVHja7Jc/aBNxFMc/l0STtqYtihgkYLOYitjuFuwiUgfBUOgSOqS6CNqmRRqLmyjBBDQ4FLRL/TOokEEhgyC4O7RSB0MHWxEtWLGtrW2Su/s9h8ZeUlF7rV4XHzy+995v+d77vnf3fpqIsJ3mYpvtPwENcAPeMjppJlD0APXHj9/44nZvrhh3d45tsvYuAk9GdwM0nTiRkZmZb3L9+jPbuBUDmjyA1zAUIyMviMXaSaVzDPSfJJ3O0V+JqRz9A1acSufQgC+XrlpvJRXCVua06nNXYz36m0kArwtAKUVPTzvJ5FPifR0kk0/pW4/x6jje10GhoEOhaHmx7OtzP50XQDfWOIbb2lISjz+SqakFicVGN4yx2OhWJQh7AAzDJB7vYHDwEclkF4nExnBo6DGz3Rfs959/F8aHGQDKBBSJxEOuXeuit/cemUz3hhBA6d82NfxSKlkStLZekcnJeTl2LC35/Jwt/CsS6LpJT88d7oycJRod5sH9c0Sjw9z/A4Lw8egp0MptLmI9V8br8prPB8WCJYGuK27fPkPk9E2y2T5ORzJks71EIqtxZC2uznd23kJ8y9Vj9zv7MZKGjlROQSg0JKHQZZmYmJVgMLFhDAYTW5YAIBwMJmR8/JPU1Z2XsTF7OL3nkH0PtMj7g20ChDUgHAhczC8tlTAM03ZD52ue258CjwfNX8eBty+bNSBsmmbe5XL2z6yUwu12N3sApve34jFMpKQ7swPs3IGxw2NNgTINRARRpv1tQtbFld3+q3VT3CjTsAgE34/j8/kclWBlZQVqa1cJTO89TI3XiyyvOCNBbQ3LpaK1E5pKVX/B/jkDDaWkQoKPr2hoaHBUgoWFBWhsXCXwLtBCY73fUQJzXxfXKmDqfpPPMu8oAfEDBUwN2AccAfY6vJbPAq+18p3AX0YnrQgsav8vp9tN4PsALYQJa7MTgzkAAAAASUVORK5CYII=",
    },
    {
      value: "UAH",
      label: "Ukrainian Hryvnia",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHESURBVHja7JfBbtQwEEDfxCkrDmUREqJ3kODCR/TIh/BPfAd3vgIhof4AByTakm6bxJ4ZDnG6jdktHMB76Vwcx5P4ecbjGYu7c0hpOLA8AAgQgFVua4oCQws8effh04/QSF3Ti/Dx/emzFliHRjh9dbK0yyx+pz8/e6FTjrFjvND78u0CYN0Cq2TOoMrlzcgclZJ/UEapCAudXVFcflvqPX38iFENYNUCmBn9mOijVjF/HxNJp7lagGjOdVRuKgEchYZRfQugamyisqkEEEJDmlwwASRzun5kM6RKse8MdwGiOl2fuB7rALjDkBZ7wOiGWG0PqPscBbMLjKs+0mcqQfAc0FIEdPne8d909q4866raEiCq06VENKtigTE1hCC359Vrv3z5Fb8CYqWD+AhkjazP3rQAbgkRBawSgOIety5wjwheEcCXAGaJJtQFMFsAKNwCyI7Uti9N7iovynS4q++Y2dICSMgpy++ZwP+4sv26vkiXqmNhAcJfTPDvZJoz14Sqek8F8X+yweyCZqLxgwHkMMwAclzRBdt6QM3g/Pxn1aI0l2gqwAvgLfC8cln+Hfgs+U5wnNuaMgCdPFxODw3wawAP/AN5ChKoqQAAAABJRU5ErkJggg==",
    },
    {
      value: "VND",
      label: "Vietnamese Dong",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAK4SURBVHja7Jc9axRRFIafMzM7k5jEjUERO0XRKgTE1tbGwir4DxTBXqwsBHut9BdYiD/AThDEQlSiYiWIjQQx0f2YvbP341jMrtldd8lsM2lyYLiwc3fOc+6877l3RFU5yIg44DgEECAGssFYZ3igSICjPzY3d4hrzi/CqadP1xKgSRSxePlyrfn7X74ANBMg0xDQoiC0WjC0pUg5TtpUZHzONBtP/ndiXtRsgrUAWQKAc6gxqDG1VK/GoCUAJYD3hF6P0OvNZ6FlQCF05yRoNAijAOocmufonADJeQ8xFO/mE7AmCTg3AuA92m6j3flKydYL1AjmVTofAKD9/sgrsBbf6aB5Xt1FDUjPdkFA3RJazAGgCkUxAuAcodOZKUJJFckGrUPLq3E6EB3LwUN6NmA+RuU9AUkhtGU2fAgwugJqLXQ66IBq0mpRoixccqzeMEisqAeJBVxptbU7OdoXpKFoX/j9JKP7ojGt9PLZzqGTGqDb/WeNyXA5dJ5B8RbW7hnSMwHCYDWGVWXQ/xqxc/8I9psF7Ox3YC1E0bgGXJ4Pm8Ps5v0eflxXjt81LF0r9gAEOs8zfj1YRH2rkg3jlZU9gOAceA8h7C+gHtjvCjI+122D2lBNhd6XOYfbsTpXCqPKJYGlqwUQ6L2O6b2Jyt+umBKqwjMkhPFO6J0jUa20Aum6p3HOsvtwkT+PMwBWbxtWbxnSC5b+p7iKD8c7YXAOVUUrACxsWLZvLpK/bFAqEXYfpRSfheyipdiSSgB+1AXBOUiS6TvbxPGl2BLMh//n9l4mZBuutMZ+51yRCYBh5fsBKJi3MdMyqJ19b1oMc0YAPoS9Pbym09AYQFBFagSQEYCyEw5WIFperg1iFMAHYLfVos4YKMULcBJYB07UfCz/CXyUwTfBymCsMwqgLYcfpwcN8HcAxaOgKWN6t2cAAAAASUVORK5CYII=",
    },
  ],
  _A = {
    class:
      "relative w-full px-4 py-6 sm:p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[20px] flex flex-col gap-4 justify-start",
  },
  $A = { class: "mb-2" },
  Ae = e(
    "div",
    { class: "text-white text-base font-medium leading-snug mb-3" },
    " Enter amount ",
    -1,
  ),
  ee = {
    class:
      "w-full p-2 bg-white/10 rounded-lg border border-white/20 items-center inline-flex gap-3",
  },
  te = {
    class:
      "rounded-lg bg-white/10 uppercase font-korolev font-bold text-white text-xl min-w-[103px] min-h-[50px]",
  },
  ae = { class: "vs__selected" },
  se = { class: "flex items-center gap-2 py-[3px]" },
  ne = {
    class:
      "size-5 overflow-hidden rounded-full justify-center flex items-center",
  },
  le = ["src"],
  oe = { class: "flag-text" },
  ie = { class: "flex items-center gap-2 py-[3px]" },
  re = ["src", "alt"],
  ce = { class: "flag-text" },
  ge = { class: "justify-start items-center gap-3 flex overflow-hidden" },
  de = {
    key: 0,
    class: "inline-flex items-center gap-1 bg-[#FF2A2A]/[20%] px-2 py-1 mt-3",
  },
  ue = e(
    "div",
    { class: "p-1" },
    [e("img", { src: YA, alt: "alert", class: "w-4 h-4" })],
    -1,
  ),
  we = { class: "text-[#FF2A2A] text-sm font-medium" },
  fe = { class: "relative flex items-center" },
  Be = e("div", { class: "flex-grow border-t border-gray-300" }, null, -1),
  me = e("div", { class: "flex-grow border-t border-gray-300" }, null, -1),
  Ce = {
    class:
      "w-full p-2 pr-3 bg-white/10 rounded-lg border border-white/20 justify-between items-center inline-flex mb-2 overflow-hidden",
  },
  pe = { class: "justify-start items-center gap-3 flex overflow-hidden" },
  Ie = {
    class:
      "flex items-center gap-2 w-full p-2.5 text-xl focus:outline-none rounded-lg bg-white/[12%] uppercase font-korolev font-bold text-white min-w-[90px]",
  },
  be = ["src"],
  Ee = e("span", null, "Lingo", -1),
  xe = R({
    __name: "BuyMain",
    setup(A) {
      const t = q(),
        n = _(),
        g = n.query.presetAmount,
        o = n.query.preselectedCurrency,
        { getBuyQuote: l } = vA(),
        a = b(Number(g) || 50),
        s = b("0.00"),
        B = X.find((w) => w.value === "USD"),
        d = b(X.find((w) => w.value === o) || B || X[0]);
      async function v() {
        if (!H.value) {
          await t.push({
            name: P.CONNECT_WALLET_V2,
            query: {
              redirect: K[P.BUY],
              presetAmount: a.value || 0,
              preselectedCurrency: d.value.value,
            },
          });
          return;
        }
        D.track("Buy Started", {
          fiatCurrency: d.value,
          fiatAmount: a.value,
          lingoAmount: s.value,
        }),
          rA("https://buy.kryptonim.com/redirect-form", {
            amount: a.value || 0,
            currency: d.value.value,
            convertedCurrency: "LINGO",
            blockchain: "Base",
            address: cA.value,
            theme: "dark",
            successUrl: `${window.location.origin}${K[P.BUY]}?purchaseSuccess=true`,
          });
      }
      const u = b(null),
        I = async () => {
          var w;
          if (((u.value = null), !!a.value)) {
            if (a.value < 3) {
              (s.value = "0.00"), (u.value = "Amount is too low");
              return;
            }
            try {
              const i = await l(
                a.value,
                (w = d.value) == null ? void 0 : w.value,
                "LINGO",
                "Base",
                d.value.value,
              );
              i && (s.value = Number(i).toFixed(2).toString());
            } catch {
              (s.value = "0.00"), (u.value = "Amount is too low");
            }
          }
        };
      nA(() => {
        a.value = null;
      }),
        Q(
          a,
          Z(() => {
            (u.value = null), a.value ? I() : (s.value = "0.00");
          }, 500),
          { immediate: !0 },
        ),
        Q(
          d,
          Z(() => {
            (u.value = null), a.value ? I() : (s.value = "0.00");
          }, 500),
          { immediate: !0 },
        );
      function U(w, i) {
        return console.log(i), w.filter((r) => J(r, i));
      }
      function J(w, i) {
        return (
          (w.label || "").toLocaleLowerCase().indexOf(i.toLocaleLowerCase()) >
            -1 ||
          (w.value || "").toLocaleLowerCase().indexOf(i.toLocaleLowerCase()) >
            -1
        );
      }
      return (w, i) => (
        E(),
        Y("div", _A, [
          e("div", $A, [
            Ae,
            e("div", ee, [
              e("div", te, [
                f(
                  m(lA),
                  {
                    modelValue: d.value,
                    "onUpdate:modelValue":
                      i[0] || (i[0] = (r) => (d.value = r)),
                    options: m(X),
                    class: "currency-select",
                    clearable: !1,
                    filter: U,
                  },
                  {
                    "selected-option-container": C(({ option: r }) => [
                      e("div", ae, [
                        e("div", se, [
                          e("div", ne, [
                            e(
                              "img",
                              {
                                class: "w-5 h-5 rounded-full object-none",
                                src: r.flag,
                                alt: "flag",
                              },
                              null,
                              8,
                              le,
                            ),
                          ]),
                          e("span", oe, S(r.value), 1),
                        ]),
                      ]),
                    ]),
                    option: C((r) => [
                      e("div", ie, [
                        e(
                          "img",
                          {
                            class: "w-5 h-5 rounded-full object-none",
                            src: r.flag,
                            alt: r.label,
                          },
                          null,
                          8,
                          re,
                        ),
                        e("span", ce, S(r.label), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "options"],
                ),
              ]),
              e("div", ge, [
                O(
                  e(
                    "input",
                    {
                      "onUpdate:modelValue":
                        i[1] || (i[1] = (r) => (a.value = r)),
                      type: "number",
                      placeholder: "0.00",
                      class: oA([
                        "text-white bg-transparent text-2xl font-bold font-korolev uppercase leading-normal tracking-wide outline-none focus:outline-none w-auto max-w-[63%] disabled:text-white/40",
                        u.value ? "!text-[#FF2A2A]" : "",
                      ]),
                    },
                    null,
                    2,
                  ),
                  [[j, a.value]],
                ),
              ]),
            ]),
            u.value
              ? (E(), Y("div", de, [ue, e("p", we, S(u.value), 1)]))
              : iA("", !0),
          ]),
          e("div", fe, [
            Be,
            f(DA, { class: "w-6 h-6 text-white/70 rotate-180 mx-2" }),
            me,
          ]),
          e("div", Ce, [
            e("div", pe, [
              e("div", Ie, [
                e(
                  "img",
                  { src: m(mA), alt: "N token", class: "size-5" },
                  null,
                  8,
                  be,
                ),
                Ee,
              ]),
              O(
                e(
                  "input",
                  {
                    "onUpdate:modelValue":
                      i[2] || (i[2] = (r) => (s.value = r)),
                    disabled: "",
                    type: "number",
                    placeholder: "0.00",
                    class:
                      "text-white bg-transparent text-2xl font-bold font-korolev uppercase leading-normal tracking-wide outline-none focus:outline-none w-auto disabled:text-white/40",
                  },
                  null,
                  512,
                ),
                [[j, s.value]],
              ),
            ]),
          ]),
          f(
            N,
            {
              class: "w-full mt-auto",
              "style-type": "tertiary",
              disabled: !a.value && !!m(H),
              onClick: v,
            },
            {
              default: C(() => [
                x(S(m(H) ? "" : "Connect wallet to ") + " buy ", 1),
              ]),
              _: 1,
            },
            8,
            ["disabled"],
          ),
        ])
      );
    },
  }),
  Ue = (A) => (uA("data-v-d93e5bc2"), (A = A()), wA(), A),
  he = {
    class:
      "text-black rounded-full bg-white absolute top-3 right-3 cursor-pointer",
  },
  Ye = { class: "text-center w-full h-full flex flex-col items-center" },
  ve = ["src"],
  Me = {
    class:
      "text-white text-[30px] leading-[120%] font-medium uppercase -tracking-[2px] mb-12",
  },
  Se = { class: "w-full mt-auto flex flex-col gap-2" },
  Xe = ["src"],
  Ne = Ue(() => e("span", null, "What are Power Miles?", -1)),
  Re = R({
    __name: "BuyPowerWidget",
    setup(A) {
      const t = b(!1);
      function n() {
        t.value = !0;
      }
      const g = gA(() => ({
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url("${xA}"), url("${UA}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }));
      return (
        Q(t, (o) => {
          o && D.track("FAQ Popup View");
        }),
        (o, l) => (
          E(),
          Y(
            "div",
            {
              class:
                "power-widget w-full max-w-[437px] h-auto bg-cover bg-center rounded-lg flex flex-col justify-start items-center gap-6 px-6 py-6 sm:pt-8 bg-black/70 shadow border border-[#ff9f00] backdrop-blur-[20px] relative",
              style: dA(g.value),
            },
            [
              e("div", he, [f(EA, { onClick: n })]),
              e("div", Ye, [
                e(
                  "img",
                  {
                    src: m(bA),
                    alt: "Power token",
                    width: 113,
                    height: "auto",
                    class: "mx-auto mb-6",
                  },
                  null,
                  8,
                  ve,
                ),
                e("div", Me, [
                  x(" Generate "),
                  f(CA, {
                    class: "ml-3 leading-none",
                    "image-class": "!h-10 mr-2",
                  }),
                  x(" and earn rewards "),
                ]),
                e("div", Se, [
                  f(
                    N,
                    {
                      class: "w-full flex items-center justify-center gap-2",
                      "style-type": "secondary",
                      onClick: l[0] || (l[0] = (a) => (t.value = !0)),
                    },
                    {
                      default: C(() => [
                        e(
                          "img",
                          { class: "h-4 w-auto", src: m(pA), alt: "Lightning" },
                          null,
                          8,
                          Xe,
                        ),
                        Ne,
                      ]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
              f(
                $,
                {
                  show: t.value,
                  "close-button": "",
                  "content-class": "!p-4",
                  onHide: l[1] || (l[1] = (a) => (t.value = !1)),
                },
                {
                  default: C(() => [
                    f(IA, {
                      "title-class": "text-center text-[24px] leading-[34px]",
                      open: "",
                      "hide-first": "",
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["show"],
              ),
            ],
            4,
          )
        )
      );
    },
  }),
  De = G(Re, [["__scopeId", "data-v-d93e5bc2"]]),
  Je = "/assets/lingo-purchased-CBtVxnyg.png",
  ke = e(
    "h2",
    {
      class:
        "text-white text-2xl leading-[140%] font-medium uppercase flex items-center justify-center",
    },
    " Congrats! ",
    -1,
  ),
  He = e(
    "p",
    { class: "text-center text-white/80 leading-[140%] text-lg mt-2" },
    " You successfully purchased $LINGO tokens. ",
    -1,
  ),
  Pe = ["src"],
  ye = { class: "flex max-sm:flex-col gap-4 mt-8" },
  Qe = R({
    __name: "BuyCongratsModal",
    props: { show: { type: Boolean } },
    emits: ["hide"],
    setup(A, { emit: t }) {
      const n = t;
      function g() {
        D.track("Share On X Started", { popup: "buySuccess" });
        const o = encodeURIComponent(
          F.claim[Math.floor(Math.random() * F.claim.length)] +
            `
https://app.lingocoin.site/claim`,
        ).replace(/%20/g, "+");
        window.open(`https://x.com/intent/post?text=${o}`, "_blank");
      }
      return (o, l) => (
        E(),
        fA(
          $,
          { show: o.show, onHide: l[2] || (l[2] = (a) => n("hide")) },
          {
            default: C(() => [
              ke,
              He,
              e(
                "img",
                {
                  src: m(Je),
                  alt: "Lingo staked",
                  class: "w-full h-auto mt-6",
                },
                null,
                8,
                Pe,
              ),
              e("div", ye, [
                f(
                  N,
                  {
                    class: "w-full",
                    icon: m(hA),
                    onClick: l[0] || (l[0] = (a) => g()),
                  },
                  { default: C(() => [x(" Share on X.com ")]), _: 1 },
                  8,
                  ["icon"],
                ),
                f(
                  N,
                  {
                    class: "w-full",
                    "style-type": "secondary",
                    onClick: l[1] || (l[1] = (a) => n("hide")),
                  },
                  { default: C(() => [x(" Finish ")]), _: 1 },
                ),
              ]),
            ]),
            _: 1,
          },
          8,
          ["show"],
        )
      );
    },
  }),
  ze = {
    class:
      "relative h-full max-md:mt-6 sm:px-4 pb-10 mx-auto w-full max-w-[1206px] text-white flex justify-center items-center",
  },
  Ge = { class: "w-full" },
  Le = {
    class:
      "flex flex-col lg:flex-row justify-center max-lg:items-center gap-5 w-full",
  },
  Ve = R({
    __name: "BuyWizardView",
    setup(A) {
      const t = _(),
        n = q();
      BA(() => {
        D.track("Buy Page View"),
          n.replace({
            query: {
              ...t.query,
              presetAmount: void 0,
              preselectedCurrency: void 0,
              purchaseSuccess: void 0,
            },
          });
      });
      const g = t.query.purchaseSuccess,
        o = b(g === "true");
      return (l, a) => (
        E(),
        Y("div", ze, [
          e("div", Ge, [
            f(
              tA,
              { "back-button": !1 },
              { title: C(() => [x(" Buy Lingo ")]), _: 1 },
            ),
            e("div", Le, [f(xe, { class: "flex-1" }), f(De)]),
          ]),
          f(
            Qe,
            {
              show: o.value,
              "content-class": "!py-6 !px-6",
              "container-class": "!max-w-[841px]",
              onHide: a[0] || (a[0] = (s) => (o.value = !1)),
            },
            null,
            8,
            ["show"],
          ),
        ])
      );
    },
  }),
  Ze = G(Ve, [["__scopeId", "data-v-2a39f5ce"]]);
export { Ze as default };
//# sourceMappingURL=BuyWizardView-Bk0xsTHq.js.map
