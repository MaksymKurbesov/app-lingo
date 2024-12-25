import { x as _, d as p } from "./discord-icon-D3eB18iY.js";
import {
  d as h,
  s as x,
  o as b,
  q as n,
  a as w,
  b as g,
  e,
  h as d,
  w as y,
  B as k,
  f as u,
  m as o,
  i as C,
  O as I,
  ac as v,
  L as N,
  x as B,
} from "./index-COVov2sH.js";
(function () {
  try {
    var t =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {},
      s = new t.Error().stack;
    s &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[s] = "042ee363-f186-42a1-bd58-f0da673a9ee2"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-042ee363-f186-42a1-bd58-f0da673a9ee2"));
  } catch {}
})();
const L = {
    class:
      "flex-col justify-center mx-auto items-center flex h-full self-center py-12",
  },
  R = { class: "flex-col justify-start items-start flex" },
  D = e(
    "h1",
    {
      class:
        "text-center text-white text-5xl font-medium uppercase leading-none drop-shadow-[0_0_56px_rgba(0,0,0,0.5)] mb-8",
    },
    " Lingo dashboard ",
    -1,
  ),
  V = e(
    "p",
    {
      class:
        "max-w-[440px] opacity-70 text-center text-white text-base font-medium leading-relaxed mb-10",
    },
    " Your all-in-one platform for the Lingo ecosystem – seamlessly claim, stake, and earn rewards ",
    -1,
  ),
  W = {
    class:
      "w-full p-1 bg-white/20 rounded-lg border border-white/30 backdrop-blur-[10px] justify-start items-center gap-1 inline-flex mb-5",
  },
  j = e(
    "div",
    { class: "mt-6 mb-14 text-center" },
    [
      e("p", { class: "text-center text-sm mx-auto text-white/60" }, [
        o(" You'll be redirected to Coinbase to create a wallet."),
        e("br"),
        o("Return to the Lingo Dashboard once it’s set up. "),
      ]),
    ],
    -1,
  ),
  T = { class: "justify-start items-center gap-4 inline-flex" },
  q = { href: "https://x.com/Lingocoins", target: "_blank" },
  E = ["src"],
  A = { href: "https://discord.com/invite/lingo", target: "_blank" },
  P = ["src"],
  Y = h({
    __name: "ConnectWalletView",
    setup(t) {
      const s = C(),
        i = I();
      // x(
      // 	B,
      // 	(r) => {
      // 		if (r) {
      // 			const { redirect: a, ...c } = i.query,
      // 				l = a;
      // 			l ? s.push({ path: l, query: c }) : s.push({ name: N.START_EARNING });
      // 		}
      // 	},
      // 	{ immediate: !0 },
      // );
      function f() {
        n.track("Wallet Creation Initiated"),
          window.open("https://wallet.coinbase.com/smart-wallet", "_blank");
      }
      b(() => {
        n.track("Wallet Connect Page View");
      });
      function m() {
        n.track("Wallet Connect Started");
      }
      return (r, a) => (
        w(),
        g("div", L, [
          e("div", R, [
            D,
            V,
            e("div", W, [d(v, { onConnectClick: m })]),
            d(
              k,
              {
                "style-type": "secondary",
                class: "w-full",
                onClick: a[0] || (a[0] = (c) => f()),
              },
              { default: y(() => [o(" Create new wallet ")]), _: 1 },
            ),
          ]),
          j,
          e("div", T, [
            e("a", q, [e("img", { src: u(_), alt: "X" }, null, 8, E)]),
            e("a", A, [e("img", { src: u(p), alt: "X" }, null, 8, P)]),
          ]),
        ])
      );
    },
  });
export { Y as default };
//# sourceMappingURL=ConnectWalletView-joaHNKDI.js.map
