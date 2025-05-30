(function () {
  var w = window;
  var d = document;
  if (w.__KAPA_WIDGET_LOADED__) return;

  const WEBSITE_ID = "<WEBSITE_ID>";
  const PROJECT_NAME = "<PROJECT_NAME>";
  const PROJECT_COLOR = "<PROJECT_COLOR>";
  const PROJECT_LOGO = "<PROJECT_LOGO>";

  const config = {
    // Required
    WEBSITE_ID: "<WEBSITE_ID>",
    PROJECT_NAME: "<PROJECT_NAME>",
    PROJECT_COLOR: "<PROJECT_COLOR>",
    PROJECT_LOGO: "<PROJECT_LOGO>",

    // General style
    FONT_FAMILY: "<FONT_FAMILY>",

    // Floating widget display
    BUTTON_TEXT: "<BUTTON_TEXT>",
    BUTTON_HIDE: "<BUTTON_HIDE>",
    BUTTON_POSITION_TOP: "<BUTTON_POSITION_TOP>",
    BUTTON_POSITION_BOTTOM: "<BUTTON_POSITION_BOTTOM>",
    BUTTON_POSITION_LEFT: "<BUTTON_POSITION_LEFT>",
    BUTTON_POSITION_RIGHT: "<BUTTON_POSITION_RIGHT>",
    BUTTON_HEIGHT: "<BUTTON_HEIGHT>",
    BUTTON_WIDTH: "<BUTTON_WIDTH>",
    BUTTON_PADDING: "<BUTTON_PADDING>",
    BUTTON_BG_COLOR: "<BUTTON_BG_COLOR>",
    BUTTON_BORDER_RADIUS: "<BUTTON_BORDER_RADIUS>",
    BUTTON_BORDER: "<BUTTON_BORDER>",
    BUTTON_BOX_SHADOW: "<BUTTON_BOX_SHADOW>",
    BUTTON_TEXT_FONT_SIZE: "<BUTTON_TEXT_FONT_SIZE>",
    BUTTON_TEXT_FONT_WEIGHT: "<BUTTON_TEXT_FONT_WEIGHT>",
    BUTTON_TEXT_FONT_FAMILY: "<BUTTON_TEXT_FONT_FAMILY>",
    BUTTON_TEXT_COLOR: "<BUTTON_TEXT_COLOR>",
    BUTTON_TEXT_SHADOW: "<BUTTON_TEXT_SHADOW>",
    BUTTON_ANIMATION_ENABLED: "<BUTTON_ANIMATION_ENABLED>",

    // Modal display
    MODAL_TITLE: "<MODAL_TITLE>",
    MODAL_TITLE_FONT_FAMILY: "<MODAL_TITLE_FONT_FAMILY>",
    MODAL_TITLE_FONT_WEIGHT: "<MODAL_TITLE_FONT_WEIGHT>",
    MODAL_TITLE_FONT_SIZE: "<MODAL_TITLE_FONT_SIZE>",
    MODAL_TITLE_COLOR: "<MODAL_TITLE_COLOR>",
    MODAL_SIZE: "<MODAL_SIZE>",
    MODAL_X_OFFSET: "<MODAL_X_OFFSET>",
    MODAL_Y_OFFSET: "<MODAL_Y_OFFSET>",
    MODAL_BORDER_RADIUS: "<MODAL_BORDER_RADIUS>",
    MODAL_HEADER_MIN_HEIGHT: "<MODAL_HEADER_MIN_HEIGHT>",
    MODAL_HEADER_PADDING: "<MODAL_HEADER_PADDING>",
    MODAL_HEADER_PADDING_TOP: "<MODAL_HEADER_PADDING_TOP>",
    MODAL_HEADER_PADDING_RIGHT: "<MODAL_HEADER_PADDING_RIGHT>",
    MODAL_HEADER_PADDING_BOTTOM: "<MODAL_HEADER_PADDING_BOTTOM>",
    MODAL_HEADER_PADDING_LEFT: "<MODAL_HEADER_PADDING_LEFT>",
    MODAL_HEADER_BG_COLOR: "<MODAL_HEADER_BG_COLOR>",
    MODAL_HEADER_BORDER_BOTTOM: "<MODAL_HEADER_BORDER_BOTTOM>",
    MODAL_BODY_BG_COLOR: "<MODAL_BODY_BG_COLOR>",
    MODAL_BODY_PADDING_TOP: "<MODAL_BODY_PADDING_TOP>",
    MODAL_BODY_PADDING_RIGHT: "<MODAL_BODY_PADDING_RIGHT>",
    MODAL_BODY_PADDING_BOTTOM: "<MODAL_BODY_PADDING_BOTTOM>",
    MODAL_BODY_PADDING_LEFT: "<MODAL_BODY_PADDING_LEFT>",
    MODAL_DISCLAIMER: "<MODAL_DISCLAIMER>",
    MODAL_ASK_AI_INPUT_PLACEHOLDER: "<MODAL_ASK_AI_INPUT_PLACEHOLDER>",
    MODAL_SEARCH_INPUT_PLACEHOLDER: "<MODAL_SEARCH_INPUT_PLACEHOLDER>",
    MODAL_EXAMPLE_QUESTIONS: "<MODAL_EXAMPLE_QUESTIONS>",
    MODAL_IMAGE_HIDE: "<MODAL_IMAGE_HIDE>",
    MODAL_IMAGE_HEIGHT: "<MODAL_IMAGE_HEIGHT>",
    MODAL_IMAGE_WIDTH: "<MODAL_IMAGE_WIDTH>",

    // Modal behavior
    MODAL_OVERRIDE_OPEN_CLASS: "<MODAL_OVERRIDE_OPEN_CLASS>",
    MODAL_OPEN_BY_DEFAULT: "<MODAL_OPEN_BY_DEFAULT>",

    // Switch display
    SWITCH_COLOR: "<SWITCH_COLOR>",
    SWITCH_BORDER: "<SWITCH_BORDER>",
    SWITCH_BORDER_RADIUS: "<SWITCH_BORDER_RADIUS>",
    SWITCH_BG_COLOR: "<SWITCH_BG_COLOR>",
    SWITCH_SHOW_ICONS: "<SWITCH_SHOW_ICONS>",

    // User tracking
    USER_ANALYTICS_COOKIE_ENABLED: "<USER_ANALYTICS_COOKIE_ENABLED>",

    // Search mode
    SEARCH_MODE_ENABLED: "<SEARCH_MODE_ENABLED>",
    SEARCH_MODE_DEFAULT: "<SEARCH_MODE_DEFAULT>",
    SEARCH_DISPLAY_NUM_RESULTS: "<SEARCH_DISPLAY_NUM_RESULTS>",
    SEARCH_INCLUDE_SOURCE_NAMES: "<SEARCH_INCLUDE_SOURCE_NAMES>",
    SEARCH_SOURCE_GROUP_ORDER: "<SEARCH_SOURCE_GROUP_ORDER>",
    SEARCH_KEYBOARD_NAV_ENABLED: "<SEARCH_KEYBOARD_NAV_ENABLED>",
    SEARCH_RESULT_HOVER_BG_COLOR: "<SEARCH_RESULT_HOVER_BG_COLOR>",
    SEARCH_RESULT_PRIMARY_TEXT_COLOR: "<SEARCH_RESULT_PRIMARY_TEXT_COLOR>",
    SEARCH_RESULT_SECONDARY_TEXT_COLOR: "<SEARCH_RESULT_SECONDARY_TEXT_COLOR>",
    SEARCH_RESULT_BADGE_BG_COLOR: "<SEARCH_RESULT_BADGE_BG_COLOR>",
    SEARCH_RESULT_BADGE_TEXT_COLOR: "<SEARCH_RESULT_BADGE_TEXT_COLOR>",
    SEARCH_SHOW_MORE_BUTTON_TEXT_COLOR: "<SEARCH_SHOW_MORE_BUTTON_TEXT_COLOR>",
    SEARCH_SHOW_MORE_BUTTON_HOVER_BG_COLOR: "<SEARCH_SHOW_MORE_BUTTON_HOVER_BG_COLOR>",
  };

  var l = function () {
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kapa.ai/kapa-widget.bundle.js";
    s.setAttribute("data-website-id", WEBSITE_ID);
    s.setAttribute("data-project-name", PROJECT_NAME);
    s.setAttribute("data-project-color", PROJECT_COLOR);
    s.setAttribute("data-project-logo", PROJECT_LOGO);

    for (const [key, value] of Object.entries(config)) {
      const kebabCaseKey = key.replaceAll("_", "-").toLowerCase();
      if (value !== `<${key}>` && value !== "undefined") {
        s.setAttribute(`data-${kebabCaseKey}`, value);
      }
    }

    var x = d.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);

    w.__KAPA_WIDGET_LOADED__ = true;
  };
  if (w.attachEvent) {
    w.attachEvent("onload", l);
  } else {
    w.addEventListener("load", l, false);
  }
})();
