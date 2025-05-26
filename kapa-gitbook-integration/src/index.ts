import {
  createIntegration,
  FetchPublishScriptEventCallback,
  RuntimeContext,
  RuntimeEnvironment,
} from "@gitbook/runtime";

import script from "./script.raw.js";

type KapaRuntimeContext = RuntimeContext<
  RuntimeEnvironment<
    {},
    {
      // Required
      website_id?: string;
      project_name?: string;
      project_color?: string;
      project_logo?: string;

      // General style
      font_family?: string;

      // Floating widget display
      button_text?: string;
      button_hide?: string;
      button_position_top?: string;
      button_position_bottom?: string;
      button_position_left?: string;
      button_position_right?: string;
      button_height?: string;
      button_width?: string;
      button_padding?: string;
      button_bg_color?: string;
      button_border_radius?: string;
      button_border?: string;
      button_box_shadow?: string;
      button_text_font_size?: string;
      button_text_font_weight?: string;
      button_text_font_family?: string;
      button_text_color?: string;
      button_text_shadow?: string;
      button_animation_enabled?: string;

      // Modal display
      modal_title?: string;
      modal_title_font_family?: string;
      modal_title_font_weight?: string;
      modal_title_font_size?: string;
      modal_title_color?: string;
      modal_size?: string;
      modal_x_offset?: string;
      modal_y_offset?: string;
      modal_border_radius?: string;
      modal_header_min_height?: string;
      modal_header_padding?: string;
      modal_header_padding_top?: string;
      modal_header_padding_right?: string;
      modal_header_padding_bottom?: string;
      modal_header_padding_left?: string;
      modal_header_bg_color?: string;
      modal_header_border_bottom?: string;
      modal_body_bg_color?: string;
      modal_body_padding_top?: string;
      modal_body_padding_right?: string;
      modal_body_padding_bottom?: string;
      modal_body_padding_left?: string;
      modal_disclaimer?: string;
      modal_ask_ai_input_placeholder?: string;
      modal_search_input_placeholder?: string;
      modal_example_questions?: string;
      modal_image_hide?: string;
      modal_image_height?: string;
      modal_image_width?: string;    

      // Modal behavior
      modal_override_open_class?: string;
      modal_open_by_default?: string;

      // Switch display
      switch_color?: string;
      switch_border?: string;
      switch_border_radius?: string;
      switch_bg_color?: string;
      switch_show_icons?: string;

      // User tracking
      user_analytics_cookie_enabled?: string;
      
      // Search mode
      search_mode_enabled?: string;
      search_mode_default?: string;
      search_display_num_results?: string;
      search_include_source_names?: string;
      search_source_group_order?: string;
      search_keyboard_nav_enabled?: string;
      search_result_hover_bg_color?: string;
      search_result_primary_text_color?: string;
      search_result_secondary_text_color?: string;
      search_result_badge_bg_color?: string;
      search_result_badge_text_color?: string;
      search_show_more_button_text_color?: string;
      search_show_more_button_hover_bg_color?: string;
    }
  >
>;

export const handleFetchEvent: FetchPublishScriptEventCallback = async (
  event,
  { environment }: KapaRuntimeContext
) => {
  const website_id = environment.siteInstallation?.configuration?.website_id ?? environment.spaceInstallation?.configuration?.website_id;
  const project_name = environment.siteInstallation?.configuration?.project_name ?? environment.spaceInstallation?.configuration?.project_name;
  const project_color = environment.siteInstallation?.configuration?.project_color ?? environment.spaceInstallation?.configuration?.project_color;
  const project_logo = environment.siteInstallation?.configuration?.project_logo ?? environment.spaceInstallation?.configuration?.project_logo;
  
  const config = {
    button_position_top: environment.siteInstallation?.configuration?.button_position_top ?? environment.spaceInstallation?.configuration?.button_position_top,
    button_position_bottom: environment.siteInstallation?.configuration?.button_position_bottom ?? environment.spaceInstallation?.configuration?.button_position_bottom,
    button_position_left: environment.siteInstallation?.configuration?.button_position_left ?? environment.spaceInstallation?.configuration?.button_position_left,
    button_position_right: environment.siteInstallation?.configuration?.button_position_right ?? environment.spaceInstallation?.configuration?.button_position_right,
    button_hide: environment.siteInstallation?.configuration?.button_hide ?? environment.spaceInstallation?.configuration?.button_hide,
    modal_override_open_class: environment.siteInstallation?.configuration?.modal_override_open_class ?? environment.spaceInstallation?.configuration?.modal_override_open_class,
    modal_open_by_default: environment.siteInstallation?.configuration?.modal_open_by_default ?? environment.spaceInstallation?.configuration?.modal_open_by_default,
    modal_title: environment.siteInstallation?.configuration?.modal_title ?? environment.spaceInstallation?.configuration?.modal_title,
    modal_disclaimer: environment.siteInstallation?.configuration?.modal_disclaimer ?? environment.spaceInstallation?.configuration?.modal_disclaimer,
    modal_ask_ai_input_placeholder: environment.siteInstallation?.configuration?.modal_ask_ai_input_placeholder ?? environment.spaceInstallation?.configuration?.modal_ask_ai_input_placeholder,
    modal_search_input_placeholder: environment.siteInstallation?.configuration?.modal_search_input_placeholder ?? environment.spaceInstallation?.configuration?.modal_search_input_placeholder,
    modal_example_questions: environment.siteInstallation?.configuration?.modal_example_questions ?? environment.spaceInstallation?.configuration?.modal_example_questions,
    modal_image_hide: environment.siteInstallation?.configuration?.modal_image_hide ?? environment.spaceInstallation?.configuration?.modal_image_hide,
    modal_image_height: environment.siteInstallation?.configuration?.modal_image_height ?? environment.spaceInstallation?.configuration?.modal_image_height,
    modal_image_width: environment.siteInstallation?.configuration?.modal_image_width ?? environment.spaceInstallation?.configuration?.modal_image_width,
    button_height: environment.siteInstallation?.configuration?.button_height ?? environment.spaceInstallation?.configuration?.button_height,
    button_width: environment.siteInstallation?.configuration?.button_width ?? environment.spaceInstallation?.configuration?.button_width,
    button_padding: environment.siteInstallation?.configuration?.button_padding ?? environment.spaceInstallation?.configuration?.button_padding,
    button_bg_color: environment.siteInstallation?.configuration?.button_bg_color ?? environment.spaceInstallation?.configuration?.button_bg_color,
    button_border_radius: environment.siteInstallation?.configuration?.button_border_radius ?? environment.spaceInstallation?.configuration?.button_border_radius,
    button_border: environment.siteInstallation?.configuration?.button_border ?? environment.spaceInstallation?.configuration?.button_border,
    button_box_shadow: environment.siteInstallation?.configuration?.button_box_shadow ?? environment.spaceInstallation?.configuration?.button_box_shadow,
    button_text_font_size: environment.siteInstallation?.configuration?.button_text_font_size ?? environment.spaceInstallation?.configuration?.button_text_font_size,
    button_text_font_weight: environment.siteInstallation?.configuration?.button_text_font_weight ?? environment.spaceInstallation?.configuration?.button_text_font_weight,
    button_text_font_family: environment.siteInstallation?.configuration?.button_text_font_family ?? environment.spaceInstallation?.configuration?.button_text_font_family,
    button_text_color: environment.siteInstallation?.configuration?.button_text_color ?? environment.spaceInstallation?.configuration?.button_text_color,
    button_text_shadow: environment.siteInstallation?.configuration?.button_text_shadow ?? environment.spaceInstallation?.configuration?.button_text_shadow,
    modal_size: environment.siteInstallation?.configuration?.modal_size ?? environment.spaceInstallation?.configuration?.modal_size,
    modal_x_offset: environment.siteInstallation?.configuration?.modal_x_offset ?? environment.spaceInstallation?.configuration?.modal_x_offset,
    modal_y_offset: environment.siteInstallation?.configuration?.modal_y_offset ?? environment.spaceInstallation?.configuration?.modal_y_offset,
    modal_border_radius: environment.siteInstallation?.configuration?.modal_border_radius ?? environment.spaceInstallation?.configuration?.modal_border_radius,
    modal_header_min_height: environment.siteInstallation?.configuration?.modal_header_min_height ?? environment.spaceInstallation?.configuration?.modal_header_min_height,
    modal_header_padding: environment.siteInstallation?.configuration?.modal_header_padding ?? environment.spaceInstallation?.configuration?.modal_header_padding,
    modal_header_padding_top: environment.siteInstallation?.configuration?.modal_header_padding_top ?? environment.spaceInstallation?.configuration?.modal_header_padding_top,
    modal_header_padding_right: environment.siteInstallation?.configuration?.modal_header_padding_right ?? environment.spaceInstallation?.configuration?.modal_header_padding_right,
    modal_header_padding_bottom: environment.siteInstallation?.configuration?.modal_header_padding_bottom ?? environment.spaceInstallation?.configuration?.modal_header_padding_bottom,
    modal_header_padding_left: environment.siteInstallation?.configuration?.modal_header_padding_left ?? environment.spaceInstallation?.configuration?.modal_header_padding_left,
    modal_header_bg_color: environment.siteInstallation?.configuration?.modal_header_bg_color ?? environment.spaceInstallation?.configuration?.modal_header_bg_color,
    modal_header_border_bottom: environment.siteInstallation?.configuration?.modal_header_border_bottom ?? environment.spaceInstallation?.configuration?.modal_header_border_bottom,
    modal_body_bg_color: environment.siteInstallation?.configuration?.modal_body_bg_color ?? environment.spaceInstallation?.configuration?.modal_body_bg_color,
    modal_body_padding_top: environment.siteInstallation?.configuration?.modal_body_padding_top ?? environment.spaceInstallation?.configuration?.modal_body_padding_top,
    modal_body_padding_right: environment.siteInstallation?.configuration?.modal_body_padding_right ?? environment.spaceInstallation?.configuration?.modal_body_padding_right,
    modal_body_padding_bottom: environment.siteInstallation?.configuration?.modal_body_padding_bottom ?? environment.spaceInstallation?.configuration?.modal_body_padding_bottom,
    modal_body_padding_left: environment.siteInstallation?.configuration?.modal_body_padding_left ?? environment.spaceInstallation?.configuration?.modal_body_padding_left,
    modal_title_font_family: environment.siteInstallation?.configuration?.modal_title_font_family ?? environment.spaceInstallation?.configuration?.modal_title_font_family,
    modal_title_font_weight: environment.siteInstallation?.configuration?.modal_title_font_weight ?? environment.spaceInstallation?.configuration?.modal_title_font_weight,
    modal_title_font_size: environment.siteInstallation?.configuration?.modal_title_font_size ?? environment.spaceInstallation?.configuration?.modal_title_font_size,
    modal_title_color: environment.siteInstallation?.configuration?.modal_title_color ?? environment.spaceInstallation?.configuration?.modal_title_color,
    switch_color: environment.siteInstallation?.configuration?.switch_color ?? environment.spaceInstallation?.configuration?.switch_color,
    switch_border: environment.siteInstallation?.configuration?.switch_border ?? environment.spaceInstallation?.configuration?.switch_border,
    switch_border_radius: environment.siteInstallation?.configuration?.switch_border_radius ?? environment.spaceInstallation?.configuration?.switch_border_radius,
    switch_bg_color: environment.siteInstallation?.configuration?.switch_bg_color ?? environment.spaceInstallation?.configuration?.switch_bg_color,
    switch_show_icons: environment.siteInstallation?.configuration?.switch_show_icons ?? environment.spaceInstallation?.configuration?.switch_show_icons,
    button_text: environment.siteInstallation?.configuration?.button_text ?? environment.spaceInstallation?.configuration?.button_text,
    font_family: environment.siteInstallation?.configuration?.font_family ?? environment.spaceInstallation?.configuration?.font_family,
    search_mode_enabled: environment.siteInstallation?.configuration?.search_mode_enabled ?? environment.spaceInstallation?.configuration?.search_mode_enabled,
    search_mode_default: environment.siteInstallation?.configuration?.search_mode_default ?? environment.spaceInstallation?.configuration?.search_mode_default,
    search_display_num_results: environment.siteInstallation?.configuration?.search_display_num_results ?? environment.spaceInstallation?.configuration?.search_display_num_results,
    search_include_source_names: environment.siteInstallation?.configuration?.search_include_source_names ?? environment.spaceInstallation?.configuration?.search_include_source_names,
    search_source_group_order: environment.siteInstallation?.configuration?.search_source_group_order ?? environment.spaceInstallation?.configuration?.search_source_group_order,
    search_keyboard_nav_enabled: environment.siteInstallation?.configuration?.search_keyboard_nav_enabled ?? environment.spaceInstallation?.configuration?.search_keyboard_nav_enabled,
    search_result_hover_bg_color: environment.siteInstallation?.configuration?.search_result_hover_bg_color ?? environment.spaceInstallation?.configuration?.search_result_hover_bg_color,
    search_result_primary_text_color: environment.siteInstallation?.configuration?.search_result_primary_text_color ?? environment.spaceInstallation?.configuration?.search_result_primary_text_color,
    search_result_secondary_text_color: environment.siteInstallation?.configuration?.search_result_secondary_text_color ?? environment.spaceInstallation?.configuration?.search_result_secondary_text_color,
    search_result_badge_bg_color: environment.siteInstallation?.configuration?.search_result_badge_bg_color ?? environment.spaceInstallation?.configuration?.search_result_badge_bg_color,
    search_result_badge_text_color: environment.siteInstallation?.configuration?.search_result_badge_text_color ?? environment.spaceInstallation?.configuration?.search_result_badge_text_color,
    search_show_more_button_text_color: environment.siteInstallation?.configuration?.search_show_more_button_text_color ?? environment.spaceInstallation?.configuration?.search_show_more_button_text_color,
    search_show_more_button_hover_bg_color: environment.siteInstallation?.configuration?.search_show_more_button_hover_bg_color ?? environment.spaceInstallation?.configuration?.search_show_more_button_hover_bg_color,
    user_analytics_cookie_enabled: environment.siteInstallation?.configuration?.user_analytics_cookie_enabled ?? environment.spaceInstallation?.configuration?.user_analytics_cookie_enabled,
    button_animation_enabled: environment.siteInstallation?.configuration?.button_animation_enabled ?? environment.spaceInstallation?.configuration?.button_animation_enabled,
  };

  if (!website_id || !project_name || !project_color || !project_logo) {
    return;
  }

  let parsedScript = script
    .replace("<WEBSITE_ID>", website_id)
    .replace("<PROJECT_NAME>", project_name)
    .replace("<PROJECT_COLOR>", project_color)
    .replace("<PROJECT_LOGO>", project_logo);

  for (const [key, value] of Object.entries(config)) {
    if (value) {
      parsedScript = parsedScript.replace(`<${key.toUpperCase()}>`, value);
    } else {
      parsedScript = parsedScript.replace(
        `<${key.toUpperCase()}>`,
        "undefined"
      );
    }
  }

  return new Response(parsedScript, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "max-age=604800",
    },
  });
};

export default createIntegration<KapaRuntimeContext>({
  fetch_published_script: handleFetchEvent,
});
