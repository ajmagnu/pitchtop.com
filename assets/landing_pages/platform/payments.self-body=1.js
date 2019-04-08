Strut.ready(function() {
    // function e(e) {
    //     var t = e.querySelector("[name=email]")
    //       , n = e.querySelector("[name=payment_methods].other-field")
    //       , r = Strut.queryArray("[name=payment_methods]", e)
    //       , i = r.filter(function(e) {
    //         return e.checked
    //     })
    //       , s = i.map(function(e) {
    //         return e.value
    //     });
    //     return n.value && s.push(n.value),
    //     {
    //         payment_methods: s,
    //         email: t.value
    //     }
    // }
    // function t(t) {
    //     var n = document.querySelector("meta[name=csrf-token]").getAttribute("content")
    //       , r = e(t)
    //       , i = new XMLHttpRequest;
    //     i.open("POST", t.action),
    //     i.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
    //     i.setRequestHeader("x-stripe-csrf-token", n),
    //     i.send(JSON.stringify(r))
    // }
    // var n = document.querySelector(".notify-box")
    //   , r = n.querySelector(".notify-form")
    //   , i = n.querySelector(".notify-close")
    //   , s = r.querySelector(".methods")
    //   , o = r.querySelector(".methods-dropdown")
    //   , u = r.querySelector(".other")
    //   , a = u.querySelector(".other-field")
    //   , f = r.querySelector(".email")
    //   , l = f.querySelector(".email-field")
    //   , c = f.querySelector(".submit-button")
    //   , h = n.querySelector(".notify-error.methods")
    //   , p = n.querySelector(".notify-error.email");
    // o.addEventListener("click", function() {
    //     n.classList.add("methods-open")
    // }),
    // i.addEventListener("click", function() {
    //     n.classList.remove("methods-open"),
    //     h.style.display = "none",
    //     p.style.display = "none"
    // }),
    // a.addEventListener("input", function() {
    //     this.value.length ? u.classList.add("active") : u.classList.remove("active")
    // }),
    // a.addEventListener("focus", function() {
    //     s.classList.add("active")
    // }),
    // a.addEventListener("blur", function() {
    //     s.classList.remove("active")
    // }),
    // l.addEventListener("focus", function() {
    //     f.classList.add("active")
    // }),
    // l.addEventListener("blur", function() {
    //     f.classList.remove("active")
    // }),
    // r.addEventListener("submit", function(e) {
    //     e.preventDefault(),
    //     h.style.display = "none",
    //     p.style.display = "none";
    //     var i = function() {
    //         var e = s.querySelectorAll('input[type="checkbox"]:checked');
    //         return e.length || a.value.length
    //     }();
    //     if (!i)
    //         n.classList.add("methods-open"),
    //         h.style.display = "block";
    //     else {
    //         var o = l.value.length && l.checkValidity();
    //         o ? (t(r),
    //         n.classList.add("form-submitted")) : (l.focus(),
    //         p.style.display = "block")
    //     }
    // })
});
var retinaSuffix = Strut.isRetina ? "@2x" : "";
if (!Strut.supports.masks)
    document.body.classList.add("mask-fallback");
else {
    Strut.load.images(["ground-shadow.png", "phone-controls.svg", "phone-device.jpg", "phone-mask.svg", "phone-screen.svg", "tablet-controls.svg", "tablet-device.jpg", "tablet-mask.svg", "tablet-screen.svg", "tablet-shadow.png"].map(function(e) {
        return "https://www.stripe.com/img/v3/payments/devices-header/" + e
    }), function() {
        document.querySelector(".devices-header").classList.add("loaded")
    }),
    Strut.load.images(["ground-shadow.png", "phone-controls.svg", "phone-device.jpg", "phone-mask.svg", "phone-screen" + retinaSuffix + ".jpg", "laptop-controls.svg", "laptop-device.jpg", "laptop-mask.svg", "laptop-screen" + retinaSuffix + ".jpg", "laptop-shadow.png"].map(function(e) {
        return "https://www.stripe.com/img/v3/payments/devices-dashboard/" + e
    }), function() {
        // document.querySelector(".devices-dashboard").classList.add("loaded")
    });
    // var dashboardDevices = document.querySelector(".devices-dashboard")
    //   , dashboardPhoneLink = document.querySelector(".devices-dashboard .phone-link");
    // dashboardPhoneLink.addEventListener("mouseenter", function() {
    //     dashboardDevices.classList.add("phone-hover")
    // }),
    // dashboardPhoneLink.addEventListener("mouseleave", function() {
    //     dashboardDevices.classList.remove("phone-hover")
    // })
}
Strut.load.images(["back" + retinaSuffix + ".png", "front" + retinaSuffix + ".png"].map(function(e) {
    return "https://www.stripe.com/img/v3/payments/graphic-checkout/" + e
}), function() {
    // document.querySelector(".checkout-graphic").classList.add("loaded")
}),
Strut.load.images(["back-shadow.png", "back-site.svg", "front-shadow.png", "front-site.svg"].map(function(e) {
    return "https://www.stripe.com/img/v3/payments/graphic-platforms/" + e
}), function() {
    // document.querySelector(".graphic-platforms").classList.add("loaded")
}),
function() {
    window.$ && window.$.ajaxPrefilter && $(function() {
        return $.ajaxPrefilter(function(e, t, n) {
            var r, i;
            return i = $("meta[name=csrf-token]"),
            r = i ? i.attr("content") : "",
            n.setRequestHeader("x-stripe-csrf-token", r)
        })
    })
}
.call(this);
