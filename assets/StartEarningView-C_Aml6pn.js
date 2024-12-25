import { n as S, A as _, l as N, _ as I } from "./FAQ.vue_vue_type_script_setup_true_lang-DE3qKmXf.js";
import {
  d as B,
  p as d,
  o as E,
  q as T,
  u as C,
  K as A,
  x,
  L as u,
  a as p,
  b as f,
  e,
  v as L,
  f as s,
  h as n,
  w as m,
  B as g,
  g as w,
  i as V,
  a9 as $,
  m as h,
  a7 as j,
  y as D,
  z as q,
  _ as G,
} from "./index-COVov2sH.js";
import { _ as M } from "./GetStartedWithStaking.vue_vue_type_script_setup_true_lang-Cv5TWRH9.js";
import { p as R } from "./power-token-C8TAXkdm.js";
(function () {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
      o = new t.Error().stack;
    o &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[o] = "153c95a7-874d-4484-849a-ab5512bd1e29"),
      (t._sentryDebugIdIdentifier = "sentry-dbid-153c95a7-874d-4484-849a-ab5512bd1e29"));
  } catch {}
})();
const z = "/assets/start-earning-header-CWJyO1jX.png",
  O = "/assets/earn-rewards-DaNFJG-u.png",
  r = (t) => (D("data-v-030796fd"), (t = t()), q(), t),
  P = {
    class:
      "relative h-full max-md:mt-6 mt-[34px] sm:px-4 pb-10 mx-auto w-full max-w-[1206px] text-white flex flex-col justify-center items-center",
  },
  H = { key: 0, class: "w-full" },
  W = r(() =>
    e(
      "h1",
      { class: "text-3xl lg:text-[64px] leading-[160%] font-semibold text-center uppercase" },
      " Start Earning ",
      -1,
    ),
  ),
  F = [W],
  J = {
    class:
      "relative w-full px-4 py-6 sm:p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[20px] flex gap-2 sm:gap-4 items-center justify-evenly",
  },
  K = { class: "flex flex-col justify-center gap-5 items-center" },
  X = ["src"],
  Q = r(() =>
    e(
      "h3",
      { class: "text-sm sm:text-[20px] leading-[120%] font-medium tracking-[-1px] uppercase text-center" },
      " Stake Lingo ",
      -1,
    ),
  ),
  U = { class: "flex flex-col justify-center gap-5 items-center" },
  Y = ["src"],
  Z = r(() =>
    e(
      "h3",
      { class: "text-sm sm:text-[20px] leading-[120%] font-medium tracking-[-1px] uppercase text-center" },
      " Generate power miles ",
      -1,
    ),
  ),
  ee = { class: "flex flex-col justify-center gap-5 items-center" },
  te = ["src"],
  se = r(() =>
    e(
      "h3",
      { class: "text-sm sm:text-[20px] leading-[120%] font-medium tracking-[-1px] uppercase text-center" },
      " Earn rewards ",
      -1,
    ),
  ),
  ae = { class: "w-full flex max-sm:flex-col items-center gap-4 mt-8" },
  ne = ["src"],
  oe = r(() => e("span", null, "What are Power Miles?", -1)),
  re = { key: 0, class: "text-center" },
  le = B({
    __name: "StartEarningView",
    setup(t) {
      const o = d(!1),
        l = d(!1);
      E(() => {
        T.track("Start Earning Page View");
      });
      const y = V(),
        { hasStakes: v, getMyStakes: k } = C(),
        i = d(!0);
      return (
        A(async () => {
          if (!x.value) {
            i.value = !1;
            return;
          }
          await k(), v.value ? await y.push({ name: u.STAKING_DASHBOARD }) : (i.value = !1);
        }),
        (ie, a) => {
          const b = $("router-link");
          return (
            p(),
            f("div", P, [
              i.value
                ? w("", !0)
                : (p(),
                  f("div", H, [
                    e(
                      "header",
                      {
                        class: "w-full p-10 bg-cover bg-center bg-no-repeat mb-10 rounded-2xl",
                        style: L(`background-image: url('${s(z)}')`),
                      },
                      F,
                      4,
                    ),
                    e("div", J, [
                      e("div", K, [e("img", { src: s(S), alt: "N Token", class: "w-10 sm:w-[70px]" }, null, 8, X), Q]),
                      n(_, { class: "text-white size-6 rotate-180" }),
                      e("div", U, [
                        e("img", { src: s(R), alt: "Power Token", class: "w-10 sm:w-[76px]" }, null, 8, Y),
                        Z,
                      ]),
                      n(_, { class: "text-white size-6 rotate-180" }),
                      e("div", ee, [
                        e("img", { src: s(O), alt: "Earn rewards", class: "h-10 sm:h-[80px]" }, null, 8, te),
                        se,
                      ]),
                    ]),
                    e("div", ae, [
                      n(
                        g,
                        {
                          class: "w-full flex items-center justify-center gap-2",
                          "style-type": "secondary",
                          onClick: a[0] || (a[0] = (c) => (l.value = !0)),
                        },
                        {
                          default: m(() => [
                            e("img", { class: "h-4 w-auto", src: s(N), alt: "Lightning" }, null, 8, ne),
                            oe,
                          ]),
                          _: 1,
                        },
                      ),
                      n(
                        g,
                        { class: "w-full", "style-type": "tertiary", onClick: a[1] || (a[1] = (c) => (o.value = !0)) },
                        { default: m(() => [h(" Get started ")]), _: 1 },
                      ),
                    ]),
                    s(x)
                      ? w("", !0)
                      : (p(),
                        f("div", re, [
                          n(
                            b,
                            {
                              to: { name: s(u).CONNECT_WALLET_V2, query: { redirect: s(j)[s(u).START_EARNING] } },
                              class:
                                "inline-block mx-auto text-center text-sm uppercase underline font-korolev font-bold tracking-[1.26px] mt-6",
                            },
                            { default: m(() => [h(" Already staked your $LINGO? Connect wallet ")]), _: 1 },
                            8,
                            ["to"],
                          ),
                        ])),
                    n(
                      M,
                      {
                        show: o.value,
                        "faq-modal": l.value,
                        onHide: a[2] || (a[2] = (c) => (o.value = !1)),
                        onHideFaq: a[3] || (a[3] = (c) => (l.value = !1)),
                      },
                      null,
                      8,
                      ["show", "faq-modal"],
                    ),
                    n(I, { class: "mt-[56px]" }),
                  ])),
            ])
          );
        }
      );
    },
  }),
  fe = G(le, [["__scopeId", "data-v-030796fd"]]);
export { fe as default };
//# sourceMappingURL=StartEarningView-C_Aml6pn.js.map
