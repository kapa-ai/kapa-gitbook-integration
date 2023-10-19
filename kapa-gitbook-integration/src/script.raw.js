(function () {
    var w = window;
    var d = document;
    if (w.__KAPA_WIDGET_LOADED__) return;

    const WEBSITE_ID = '<WEBSITE_ID>';
    const PROJECT_NAME = '<PROJECT_NAME>';
    const PROJECT_COLOR = '<PROJECT_COLOR>';
    const PROJECT_LOGO = '<PROJECT_LOGO>';

    var l = function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "https://widget.kapa.ai/kapa-widget.bundle.js"
        s["data-website-id"] = WEBSITE_ID;
        s["data-project-name"] = PROJECT_NAME;
        s["data-project-color"] = PROJECT_COLOR;
        s["data-project-logo"] = PROJECT_LOGO;

        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        w.__KAPA_WIDGET_LOADED__ = true;
    };
    if (w.attachEvent) {
        w.attachEvent('onload', l);
    } else {
        w.addEventListener('load', l, false);
    }
})();