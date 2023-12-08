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
      website_id?: string;
      project_name?: string;
      project_color?: string;
      project_logo?: string;
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
      button_hide?: string;
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
      modal_title_font_family?: string;
      modal_title_font_weight?: string;
      modal_title_font_size?: string;
      modal_title_color?: string;
      modal_override_open_class?: string;
      modal_open_by_default?: string;
      modal_title?: string;
      modal_disclaimer?: string;
      modal_example_questions?: string;
      modal_image_hide?: string;
      modal_image_height?: string;
      modal_image_width?: string;
      switch_color?: string;
      switch_border?: string;
      switch_border_radius?: string;
      switch_bg_color?: string;
      switch_show_icons?: string;
      button_text?: string;
      font_family?: string;
      serch_mode_enabled?: string;
      serch_mode_default?: string;
      serch_display_num_results?: string;
      serch_include_source_names?: string;
      serch_source_group_order?: string;
      serch_keyboard_nav_enabled?: string;
      serch_result_hover_bg_color?: string;
      serch_result_primary_text_color?: string;
      serch_result_secondary_text_color?: string;
      serch_result_badge_bg_color?: string;
      serch_result_badge_text_color?: string;
      serch_show_more_button_text_color?: string;
      serch_show_more_button_hover_bg_color?: string;
    }
  >
>;

export const handleFetchEvent: FetchPublishScriptEventCallback = async (
  event,
  { environment }: KapaRuntimeContext
) => {
  const website_id = environment.spaceInstallation.configuration.website_id;
  const project_name = environment.spaceInstallation.configuration.project_name;
  const project_color =
    environment.spaceInstallation.configuration.project_color;
  const project_logo = environment.spaceInstallation.configuration.project_logo;

  const config = {
    button_position_top:
      environment.spaceInstallation.configuration.button_position_top,
    button_position_bottom:
      environment.spaceInstallation.configuration.button_position_bottom,
    button_position_left:
      environment.spaceInstallation.configuration.button_position_left,
    button_position_right:
      environment.spaceInstallation.configuration.button_position_right,
    button_hide: environment.spaceInstallation.configuration.button_hide,
    modal_override_open_class:
      environment.spaceInstallation.configuration.modal_override_open_class,
    modal_open_by_default:
      environment.spaceInstallation.configuration.modal_open_by_default,
    modal_title: environment.spaceInstallation.configuration.modal_title,
    modal_disclaimer:
      environment.spaceInstallation.configuration.modal_disclaimer,
    modal_example_questions:
      environment.spaceInstallation.configuration.modal_example_questions,
    modal_image_hide:
      environment.spaceInstallation.configuration.modal_image_hide,
    modal_image_height:
      environment.spaceInstallation.configuration.modal_image_height,
    modal_image_width:
      environment.spaceInstallation.configuration.modal_image_width,
    button_height: environment.spaceInstallation.configuration.button_height,
    button_width: environment.spaceInstallation.configuration.button_width,
    button_padding: environment.spaceInstallation.configuration.button_padding,
    button_bg_color:
      environment.spaceInstallation.configuration.button_bg_color,
    button_border_radius:
      environment.spaceInstallation.configuration.button_border_radius,
    button_border: environment.spaceInstallation.configuration.button_border,
    button_box_shadow:
      environment.spaceInstallation.configuration.button_box_shadow,
    button_text_font_size:
      environment.spaceInstallation.configuration.button_text_font_size,
    button_text_font_weight:
      environment.spaceInstallation.configuration.button_text_font_weight,
    button_text_font_family:
      environment.spaceInstallation.configuration.button_text_font_family,
    button_text_color:
      environment.spaceInstallation.configuration.button_text_color,
    button_text_shadow:
      environment.spaceInstallation.configuration.button_text_shadow,
    modal_size: environment.spaceInstallation.configuration.modal_size,
    modal_x_offset: environment.spaceInstallation.configuration.modal_x_offset,
    modal_y_offset: environment.spaceInstallation.configuration.modal_y_offset,
    modal_border_radius:
      environment.spaceInstallation.configuration.modal_border_radius,
    modal_header_min_height:
      environment.spaceInstallation.configuration.modal_header_min_height,
    modal_header_padding:
      environment.spaceInstallation.configuration.modal_header_padding,
    modal_header_padding_top:
      environment.spaceInstallation.configuration.modal_header_padding_top,
    modal_header_padding_right:
      environment.spaceInstallation.configuration.modal_header_padding_right,
    modal_header_padding_bottom:
      environment.spaceInstallation.configuration.modal_header_padding_bottom,
    modal_header_padding_left:
      environment.spaceInstallation.configuration.modal_header_padding_left,
    modal_header_bg_color:
      environment.spaceInstallation.configuration.modal_header_bg_color,
    modal_header_border_bottom:
      environment.spaceInstallation.configuration.modal_header_border_bottom,
    modal_body_bg_color:
      environment.spaceInstallation.configuration.modal_body_bg_color,
    modal_body_padding_top:
      environment.spaceInstallation.configuration.modal_body_padding_top,
    modal_body_padding_right:
      environment.spaceInstallation.configuration.modal_body_padding_right,
    modal_body_padding_bottom:
      environment.spaceInstallation.configuration.modal_body_padding_bottom,
    modal_body_padding_left:
      environment.spaceInstallation.configuration.modal_body_padding_left,
    modal_title_font_family:
      environment.spaceInstallation.configuration.modal_title_font_family,
    modal_title_font_weight:
      environment.spaceInstallation.configuration.modal_title_font_family,
    modal_title_font_size:
      environment.spaceInstallation.configuration.modal_title_font_size,
    modal_title_color:
      environment.spaceInstallation.configuration.modal_title_color,
    switch_color: environment.spaceInstallation.configuration.switch_color,
    switch_border: environment.spaceInstallation.configuration.switch_border,
    switch_border_radius:
      environment.spaceInstallation.configuration.switch_border_radius,
    switch_bg_color:
      environment.spaceInstallation.configuration.switch_bg_color,
    switch_show_icons:
      environment.spaceInstallation.configuration.switch_show_icons,
    button_text: environment.spaceInstallation.configuration.button_text,
    font_family: environment.spaceInstallation.configuration.font_family,
    serch_mode_enabled:
      environment.spaceInstallation.configuration.serch_mode_enabled,
    serch_mode_default:
      environment.spaceInstallation.configuration.serch_mode_default,
    serch_display_num_results:
      environment.spaceInstallation.configuration.serch_display_num_results,
    serch_include_source_names:
      environment.spaceInstallation.configuration.serch_include_source_names,
    serch_source_group_order:
      environment.spaceInstallation.configuration.serch_source_group_order,
    serch_keyboard_nav_enabled:
      environment.spaceInstallation.configuration.serch_keyboard_nav_enabled,
    serch_result_hover_bg_color:
      environment.spaceInstallation.configuration.serch_result_hover_bg_color,
    serch_result_primary_text_color:
      environment.spaceInstallation.configuration
        .serch_result_primary_text_color,
    serch_result_secondary_text_color:
      environment.spaceInstallation.configuration
        .serch_result_secondary_text_color,
    serch_result_badge_bg_color:
      environment.spaceInstallation.configuration.serch_result_badge_bg_color,
    serch_result_badge_text_color:
      environment.spaceInstallation.configuration.serch_result_badge_text_color,
    serch_show_more_button_text_color:
      environment.spaceInstallation.configuration
        .serch_show_more_button_text_color,
    serch_show_more_button_hover_bg_color:
      environment.spaceInstallation.configuration
        .serch_show_more_button_hover_bg_color,
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
