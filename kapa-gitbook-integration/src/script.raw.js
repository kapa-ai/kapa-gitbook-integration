(function () {
    var w = window;
    var d = document;
    if (w.__KAPA_WIDGET_LOADED__) return;

    const WEBSITE_ID = '<WEBSITE_ID>';
    const PROJECT_NAME = '<PROJECT_NAME>';
    const PROJECT_COLOR = '<PROJECT_COLOR>';
    const PROJECT_LOGO = '<PROJECT_LOGO>';

    const config = {
        BUTTON_POSITION_TOP: '<BUTTON_POSITION_TOP>',
        BUTTON_POSITION_BOTTOM: '<BUTTON_POSITION_BOTTOM>',
        BUTTON_POSITION_LEFT: '<BUTTON_POSITION_LEFT>',
        BUTTON_POSITION_RIGHT: '<BUTTON_POSITION_RIGHT>',
        BUTTON_HIDE: '<BUTTON_HIDE>',
        MODAL_OVERRIDE_OPEN_CLASS: '<MODAL_OVERRIDE_OPEN_CLASS>',
        MODAL_OPEN_BY_DEFAULT: '<MODAL_OPEN_BY_DEFAULT>',
        MODAL_SEARCH_PLACEHOLDER: '<MODAL_SEARCH_PLACEHOLDER>',
        MODAL_TITLE: '<MODAL_TITLE>',
        MODAL_DISCLAIMER: '<MODAL_DISCLAIMER>',
        MODAL_HIDE_IMAGE: '<MODAL_HIDE_IMAGE>',
        BUTTON_TEXT: '<BUTTON_TEXT>',
    };

    var l = function () {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "https://widget.kapa.ai/kapa-widget.bundle.js"
        s.setAttribute("data-website-id", WEBSITE_ID);
        s.setAttribute("data-project-name", PROJECT_NAME);
        s.setAttribute("data-project-color", PROJECT_COLOR);
        s.setAttribute("data-project-logo", PROJECT_LOGO);

        for (const [key, value] of Object.entries(config)) {
            const kebabCaseKey = key.replace("_", "-").toLowerCase();
            if (value !== 'undefined') {
                s.setAttribute(`data-${kebabCaseKey}`, value);
            }
        }

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