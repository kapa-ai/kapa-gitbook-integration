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
      native_ai_experience?: boolean;
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
      modal_with_overlay?: string;
      modal_overlay_bg_color?: string;
      modal_overlay_opacity?: string;
      modal_inner_flex_direction?: string;
      modal_inner_justify_content?: string;
      modal_inner_max_width?: string;
      modal_inner_position_right?: string;
      modal_inner_position_left?: string;
      modal_inner_position_bottom?: string;
      modal_z_index?: string;
      modal_lock_scroll?: string;

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
      search_input_show_icon?: string;
      search_result_primary_title_font_size?: string;
      search_result_secondary_title_font_size?: string;
      search_ask_ai_cta_text_color?: string;
      search_ask_ai_cta_hover_text_color?: string;
      search_ask_ai_cta_bg_color?: string;
      search_ask_ai_cta_hover_bg_color?: string;
      search_ask_ai_cta_border?: string;
      search_ask_ai_cta_text_font_size?: string;
      search_source_ids_include?: string;
      search_source_ids_order?: string;
      search_result_link_target?: string;
      search_show_ask_ai_cta?: string;

      // Localization & Scaling
      language?: string;
      scale_factor?: string;

      // Font sizes
      font_size_xs?: string;
      font_size_sm?: string;
      font_size_md?: string;
      font_size_lg?: string;
      font_size_xl?: string;

      // Colors
      hyperlink_color?: string;
      question_text_color?: string;
      answer_text_color?: string;

      // Button enhancements
      button_hover_bg_color?: string;
      button_image?: string;
      button_image_height?: string;
      button_image_width?: string;
      button_z_index?: string;
      button_hover_animation_enabled?: string;

      // Modal general
      modal_image?: string;
      modal_close_button_hide?: string;
      modal_disclaimer_bg_color?: string;
      modal_disclaimer_text_color?: string;
      modal_disclaimer_font_size?: string;
      modal_full_screen?: string;
      modal_full_screen_on_mobile?: string;
      modal_header_logo_hide_on_mobile?: string;
      modal_example_questions_title?: string;
      modal_example_questions_col_span?: string;
      modal_footer?: string;

      // Modal behavior
      modal_override_open_class_search?: string;
      modal_override_open_class_ask_ai?: string;
      modal_override_open_id?: string;
      modal_override_open_id_search?: string;
      modal_override_open_id_ask_ai?: string;
      modal_override_open_selector?: string;
      modal_override_open_selector_search?: string;
      modal_override_open_selector_ask_ai?: string;
      modal_open_on_command_k?: string;
      modal_command_k_search_mode_default?: string;
      modal_image_ask_ai?: string;
      modal_image_search?: string;
      modal_title_search?: string;
      modal_title_ask_ai?: string;

      // Query input
      query_input_font_size?: string;
      query_input_text_color?: string;
      query_input_placeholder_text_color?: string;
      query_input_border_color?: string;
      query_input_focus_border_color?: string;
      submit_query_button_bg_color?: string;

      // Conversation buttons
      conversation_buttons_icons_only?: string;

      // Answer copy button
      answer_copy_button_height?: string;
      answer_copy_button_width?: string;
      answer_copy_button_padding_x?: string;
      answer_copy_button_padding_y?: string;
      answer_copy_button_border?: string;
      answer_copy_button_border_radius?: string;
      answer_copy_button_bg_color?: string;
      answer_copy_button_hover_bg_color?: string;
      answer_copy_button_text_color?: string;
      answer_copy_button_font_size?: string;
      answer_copy_button_icon_size?: string;
      answer_copy_button_box_shadow?: string;

      // Thread clear button
      thread_clear_button_height?: string;
      thread_clear_button_width?: string;
      thread_clear_button_padding_x?: string;
      thread_clear_button_padding_y?: string;
      thread_clear_button_border?: string;
      thread_clear_button_border_radius?: string;
      thread_clear_button_bg_color?: string;
      thread_clear_button_hover_bg_color?: string;
      thread_clear_button_text_color?: string;
      thread_clear_button_font_size?: string;
      thread_clear_button_icon_size?: string;
      thread_clear_button_box_shadow?: string;

      // Answer feedback button
      answer_feedback_button_height?: string;
      answer_feedback_button_width?: string;
      answer_feedback_button_padding_x?: string;
      answer_feedback_button_padding_y?: string;
      answer_feedback_button_border?: string;
      answer_feedback_button_active_border?: string;
      answer_feedback_button_border_radius?: string;
      answer_feedback_button_bg_color?: string;
      answer_feedback_button_active_bg_color?: string;
      answer_feedback_button_active_hover_bg_color?: string;
      answer_feedback_button_hover_bg_color?: string;
      answer_feedback_button_text_color?: string;
      answer_feedback_button_active_text_color?: string;
      answer_feedback_button_font_size?: string;
      answer_feedback_button_icon_size?: string;
      answer_feedback_button_box_shadow?: string;

      // CTA button
      cta_button_height?: string;
      cta_button_width?: string;
      cta_button_padding_x?: string;
      cta_button_padding_y?: string;
      cta_button_border?: string;
      cta_button_border_radius?: string;
      cta_button_bg_color?: string;
      cta_button_hover_bg_color?: string;
      cta_button_text_color?: string;
      cta_button_font_size?: string;
      cta_button_icon_size?: string;
      cta_button_box_shadow?: string;

      // Example question button
      example_question_button_height?: string;
      example_question_button_width?: string;
      example_question_button_padding_x?: string;
      example_question_button_padding_y?: string;
      example_question_button_border?: string;
      example_question_button_border_radius?: string;
      example_question_button_bg_color?: string;
      example_question_button_hover_bg_color?: string;
      example_question_button_text_color?: string;
      example_question_button_font_size?: string;
      example_question_button_box_shadow?: string;

      // Deep thinking button
      deep_thinking_button_bg_color?: string;
      deep_thinking_button_active_bg_color?: string;
      deep_thinking_button_hover_bg_color?: string;
      deep_thinking_button_active_hover_bg_color?: string;
      deep_thinking_button_active_hover_text_color?: string;
      deep_thinking_button_text_color?: string;
      deep_thinking_button_active_text_color?: string;
      deep_thinking_button_font_size?: string;
      deep_thinking_button_icon_size?: string;

      // Source links
      source_link_primary_heading_text_color?: string;
      source_link_secondary_heading_text_color?: string;
      source_link_border?: string;
      source_link_bg_color?: string;
      source_link_hover_bg_color?: string;

      // Switch enhancements
      switch_label_padding_x?: string;
      switch_label_padding_y?: string;
      switch_label_font_size?: string;
      switch_label_font_weight?: string;

      // Behavioral/Functional
      source_group_ids_include?: string;
      consent_required?: string;
      consent_screen_title?: string;
      consent_screen_disclaimer?: string;
      consent_screen_accept_button_text?: string;
      consent_screen_reject_button_text?: string;
      answer_cta_button_enabled?: string;
      answer_cta_button_text?: string;
      answer_cta_button_link?: string;
      footer_tos_privacy_links?: string;
      kapa_branding_hide?: string;
      kapa_branding_text?: string;
      uncertain_answer_callout?: string;
      user_satisfaction_feedback_enabled?: string;
      bot_protection_mechanism?: string;
      user_analytics_fingerprint_enabled?: string;

      // MCP Integration
      mcp_enabled?: string;
      mcp_server_url?: string;
      mcp_button_text?: string;
    }
  >
>;

export const handleFetchEvent: FetchPublishScriptEventCallback = async (
  event,
  { environment }: KapaRuntimeContext
) => {
  const native_ai_experience =
    environment.siteInstallation?.configuration?.native_ai_experience;
  const website_id =
    environment.siteInstallation?.configuration?.website_id ??
    environment.spaceInstallation?.configuration?.website_id;
  const project_name =
    environment.siteInstallation?.configuration?.project_name ??
    environment.spaceInstallation?.configuration?.project_name;
  const project_color =
    environment.siteInstallation?.configuration?.project_color ??
    environment.spaceInstallation?.configuration?.project_color;
  const project_logo =
    environment.siteInstallation?.configuration?.project_logo ??
    environment.spaceInstallation?.configuration?.project_logo;

  const config = {
    button_position_top:
      environment.siteInstallation?.configuration?.button_position_top ??
      environment.spaceInstallation?.configuration?.button_position_top,
    button_position_bottom:
      environment.siteInstallation?.configuration?.button_position_bottom ??
      environment.spaceInstallation?.configuration?.button_position_bottom,
    button_position_left:
      environment.siteInstallation?.configuration?.button_position_left ??
      environment.spaceInstallation?.configuration?.button_position_left,
    button_position_right:
      environment.siteInstallation?.configuration?.button_position_right ??
      environment.spaceInstallation?.configuration?.button_position_right,
    button_hide:
      environment.siteInstallation?.configuration?.button_hide ??
      environment.spaceInstallation?.configuration?.button_hide,
    modal_override_open_class:
      environment.siteInstallation?.configuration?.modal_override_open_class ??
      environment.spaceInstallation?.configuration?.modal_override_open_class,
    modal_open_by_default:
      environment.siteInstallation?.configuration?.modal_open_by_default ??
      environment.spaceInstallation?.configuration?.modal_open_by_default,
    modal_title:
      environment.siteInstallation?.configuration?.modal_title ??
      environment.spaceInstallation?.configuration?.modal_title,
    modal_disclaimer:
      environment.siteInstallation?.configuration?.modal_disclaimer ??
      environment.spaceInstallation?.configuration?.modal_disclaimer,
    modal_ask_ai_input_placeholder:
      environment.siteInstallation?.configuration
        ?.modal_ask_ai_input_placeholder ??
      environment.spaceInstallation?.configuration
        ?.modal_ask_ai_input_placeholder,
    modal_search_input_placeholder:
      environment.siteInstallation?.configuration
        ?.modal_search_input_placeholder ??
      environment.spaceInstallation?.configuration
        ?.modal_search_input_placeholder,
    modal_example_questions:
      environment.siteInstallation?.configuration?.modal_example_questions ??
      environment.spaceInstallation?.configuration?.modal_example_questions,
    modal_image_hide:
      environment.siteInstallation?.configuration?.modal_image_hide ??
      environment.spaceInstallation?.configuration?.modal_image_hide,
    modal_image_height:
      environment.siteInstallation?.configuration?.modal_image_height ??
      environment.spaceInstallation?.configuration?.modal_image_height,
    modal_image_width:
      environment.siteInstallation?.configuration?.modal_image_width ??
      environment.spaceInstallation?.configuration?.modal_image_width,
    button_height:
      environment.siteInstallation?.configuration?.button_height ??
      environment.spaceInstallation?.configuration?.button_height,
    button_width:
      environment.siteInstallation?.configuration?.button_width ??
      environment.spaceInstallation?.configuration?.button_width,
    button_padding:
      environment.siteInstallation?.configuration?.button_padding ??
      environment.spaceInstallation?.configuration?.button_padding,
    button_bg_color:
      environment.siteInstallation?.configuration?.button_bg_color ??
      environment.spaceInstallation?.configuration?.button_bg_color,
    button_border_radius:
      environment.siteInstallation?.configuration?.button_border_radius ??
      environment.spaceInstallation?.configuration?.button_border_radius,
    button_border:
      environment.siteInstallation?.configuration?.button_border ??
      environment.spaceInstallation?.configuration?.button_border,
    button_box_shadow:
      environment.siteInstallation?.configuration?.button_box_shadow ??
      environment.spaceInstallation?.configuration?.button_box_shadow,
    button_text_font_size:
      environment.siteInstallation?.configuration?.button_text_font_size ??
      environment.spaceInstallation?.configuration?.button_text_font_size,
    button_text_font_weight:
      environment.siteInstallation?.configuration?.button_text_font_weight ??
      environment.spaceInstallation?.configuration?.button_text_font_weight,
    button_text_font_family:
      environment.siteInstallation?.configuration?.button_text_font_family ??
      environment.spaceInstallation?.configuration?.button_text_font_family,
    button_text_color:
      environment.siteInstallation?.configuration?.button_text_color ??
      environment.spaceInstallation?.configuration?.button_text_color,
    button_text_shadow:
      environment.siteInstallation?.configuration?.button_text_shadow ??
      environment.spaceInstallation?.configuration?.button_text_shadow,
    modal_size:
      environment.siteInstallation?.configuration?.modal_size ??
      environment.spaceInstallation?.configuration?.modal_size,
    modal_x_offset:
      environment.siteInstallation?.configuration?.modal_x_offset ??
      environment.spaceInstallation?.configuration?.modal_x_offset,
    modal_y_offset:
      environment.siteInstallation?.configuration?.modal_y_offset ??
      environment.spaceInstallation?.configuration?.modal_y_offset,
    modal_border_radius:
      environment.siteInstallation?.configuration?.modal_border_radius ??
      environment.spaceInstallation?.configuration?.modal_border_radius,
    modal_header_min_height:
      environment.siteInstallation?.configuration?.modal_header_min_height ??
      environment.spaceInstallation?.configuration?.modal_header_min_height,
    modal_header_padding:
      environment.siteInstallation?.configuration?.modal_header_padding ??
      environment.spaceInstallation?.configuration?.modal_header_padding,
    modal_header_padding_top:
      environment.siteInstallation?.configuration?.modal_header_padding_top ??
      environment.spaceInstallation?.configuration?.modal_header_padding_top,
    modal_header_padding_right:
      environment.siteInstallation?.configuration?.modal_header_padding_right ??
      environment.spaceInstallation?.configuration?.modal_header_padding_right,
    modal_header_padding_bottom:
      environment.siteInstallation?.configuration
        ?.modal_header_padding_bottom ??
      environment.spaceInstallation?.configuration?.modal_header_padding_bottom,
    modal_header_padding_left:
      environment.siteInstallation?.configuration?.modal_header_padding_left ??
      environment.spaceInstallation?.configuration?.modal_header_padding_left,
    modal_header_bg_color:
      environment.siteInstallation?.configuration?.modal_header_bg_color ??
      environment.spaceInstallation?.configuration?.modal_header_bg_color,
    modal_header_border_bottom:
      environment.siteInstallation?.configuration?.modal_header_border_bottom ??
      environment.spaceInstallation?.configuration?.modal_header_border_bottom,
    modal_body_bg_color:
      environment.siteInstallation?.configuration?.modal_body_bg_color ??
      environment.spaceInstallation?.configuration?.modal_body_bg_color,
    modal_body_padding_top:
      environment.siteInstallation?.configuration?.modal_body_padding_top ??
      environment.spaceInstallation?.configuration?.modal_body_padding_top,
    modal_body_padding_right:
      environment.siteInstallation?.configuration?.modal_body_padding_right ??
      environment.spaceInstallation?.configuration?.modal_body_padding_right,
    modal_body_padding_bottom:
      environment.siteInstallation?.configuration?.modal_body_padding_bottom ??
      environment.spaceInstallation?.configuration?.modal_body_padding_bottom,
    modal_body_padding_left:
      environment.siteInstallation?.configuration?.modal_body_padding_left ??
      environment.spaceInstallation?.configuration?.modal_body_padding_left,
    modal_title_font_family:
      environment.siteInstallation?.configuration?.modal_title_font_family ??
      environment.spaceInstallation?.configuration?.modal_title_font_family,
    modal_title_font_weight:
      environment.siteInstallation?.configuration?.modal_title_font_weight ??
      environment.spaceInstallation?.configuration?.modal_title_font_weight,
    modal_title_font_size:
      environment.siteInstallation?.configuration?.modal_title_font_size ??
      environment.spaceInstallation?.configuration?.modal_title_font_size,
    modal_title_color:
      environment.siteInstallation?.configuration?.modal_title_color ??
      environment.spaceInstallation?.configuration?.modal_title_color,
    modal_with_overlay:
      environment.siteInstallation?.configuration?.modal_with_overlay ??
      environment.spaceInstallation?.configuration?.modal_with_overlay,
    modal_overlay_bg_color:
      environment.siteInstallation?.configuration?.modal_overlay_bg_color ??
      environment.spaceInstallation?.configuration?.modal_overlay_bg_color,
    modal_overlay_opacity:
      environment.siteInstallation?.configuration?.modal_overlay_opacity ??
      environment.spaceInstallation?.configuration?.modal_overlay_opacity,
    modal_inner_flex_direction:
      environment.siteInstallation?.configuration?.modal_inner_flex_direction ??
      environment.spaceInstallation?.configuration?.modal_inner_flex_direction,
    modal_inner_justify_content:
      environment.siteInstallation?.configuration
        ?.modal_inner_justify_content ??
      environment.spaceInstallation?.configuration?.modal_inner_justify_content,
    modal_inner_max_width:
      environment.siteInstallation?.configuration?.modal_inner_max_width ??
      environment.spaceInstallation?.configuration?.modal_inner_max_width,
    modal_inner_position_right:
      environment.siteInstallation?.configuration?.modal_inner_position_right ??
      environment.spaceInstallation?.configuration?.modal_inner_position_right,
    modal_inner_position_left:
      environment.siteInstallation?.configuration?.modal_inner_position_left ??
      environment.spaceInstallation?.configuration?.modal_inner_position_left,
    modal_inner_position_bottom:
      environment.siteInstallation?.configuration
        ?.modal_inner_position_bottom ??
      environment.spaceInstallation?.configuration?.modal_inner_position_bottom,
    modal_z_index:
      environment.siteInstallation?.configuration?.modal_z_index ??
      environment.spaceInstallation?.configuration?.modal_z_index,
    modal_lock_scroll:
      environment.siteInstallation?.configuration?.modal_lock_scroll ??
      environment.spaceInstallation?.configuration?.modal_lock_scroll,
    switch_color:
      environment.siteInstallation?.configuration?.switch_color ??
      environment.spaceInstallation?.configuration?.switch_color,
    switch_border:
      environment.siteInstallation?.configuration?.switch_border ??
      environment.spaceInstallation?.configuration?.switch_border,
    switch_border_radius:
      environment.siteInstallation?.configuration?.switch_border_radius ??
      environment.spaceInstallation?.configuration?.switch_border_radius,
    switch_bg_color:
      environment.siteInstallation?.configuration?.switch_bg_color ??
      environment.spaceInstallation?.configuration?.switch_bg_color,
    switch_show_icons:
      environment.siteInstallation?.configuration?.switch_show_icons ??
      environment.spaceInstallation?.configuration?.switch_show_icons,
    button_text:
      environment.siteInstallation?.configuration?.button_text ??
      environment.spaceInstallation?.configuration?.button_text,
    font_family:
      environment.siteInstallation?.configuration?.font_family ??
      environment.spaceInstallation?.configuration?.font_family,
    search_mode_enabled:
      environment.siteInstallation?.configuration?.search_mode_enabled ??
      environment.spaceInstallation?.configuration?.search_mode_enabled,
    search_mode_default:
      environment.siteInstallation?.configuration?.search_mode_default ??
      environment.spaceInstallation?.configuration?.search_mode_default,
    search_display_num_results:
      environment.siteInstallation?.configuration?.search_display_num_results ??
      environment.spaceInstallation?.configuration?.search_display_num_results,
    search_include_source_names:
      environment.siteInstallation?.configuration
        ?.search_include_source_names ??
      environment.spaceInstallation?.configuration?.search_include_source_names,
    search_source_group_order:
      environment.siteInstallation?.configuration?.search_source_group_order ??
      environment.spaceInstallation?.configuration?.search_source_group_order,
    search_keyboard_nav_enabled:
      environment.siteInstallation?.configuration
        ?.search_keyboard_nav_enabled ??
      environment.spaceInstallation?.configuration?.search_keyboard_nav_enabled,
    search_result_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.search_result_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.search_result_hover_bg_color,
    search_result_primary_text_color:
      environment.siteInstallation?.configuration
        ?.search_result_primary_text_color ??
      environment.spaceInstallation?.configuration
        ?.search_result_primary_text_color,
    search_result_secondary_text_color:
      environment.siteInstallation?.configuration
        ?.search_result_secondary_text_color ??
      environment.spaceInstallation?.configuration
        ?.search_result_secondary_text_color,
    search_result_badge_bg_color:
      environment.siteInstallation?.configuration
        ?.search_result_badge_bg_color ??
      environment.spaceInstallation?.configuration
        ?.search_result_badge_bg_color,
    search_result_badge_text_color:
      environment.siteInstallation?.configuration
        ?.search_result_badge_text_color ??
      environment.spaceInstallation?.configuration
        ?.search_result_badge_text_color,
    search_show_more_button_text_color:
      environment.siteInstallation?.configuration
        ?.search_show_more_button_text_color ??
      environment.spaceInstallation?.configuration
        ?.search_show_more_button_text_color,
    search_show_more_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.search_show_more_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.search_show_more_button_hover_bg_color,
    user_analytics_cookie_enabled:
      environment.siteInstallation?.configuration
        ?.user_analytics_cookie_enabled ??
      environment.spaceInstallation?.configuration
        ?.user_analytics_cookie_enabled,
    button_animation_enabled:
      environment.siteInstallation?.configuration?.button_animation_enabled ??
      environment.spaceInstallation?.configuration?.button_animation_enabled,
    search_input_show_icon:
      environment.siteInstallation?.configuration?.search_input_show_icon ??
      environment.spaceInstallation?.configuration?.search_input_show_icon,
    search_result_primary_title_font_size:
      environment.siteInstallation?.configuration
        ?.search_result_primary_title_font_size ??
      environment.spaceInstallation?.configuration
        ?.search_result_primary_title_font_size,
    search_result_secondary_title_font_size:
      environment.siteInstallation?.configuration
        ?.search_result_secondary_title_font_size ??
      environment.spaceInstallation?.configuration
        ?.search_result_secondary_title_font_size,
    search_ask_ai_cta_text_color:
      environment.siteInstallation?.configuration
        ?.search_ask_ai_cta_text_color ??
      environment.spaceInstallation?.configuration?.search_ask_ai_cta_text_color,
    search_ask_ai_cta_hover_text_color:
      environment.siteInstallation?.configuration
        ?.search_ask_ai_cta_hover_text_color ??
      environment.spaceInstallation?.configuration
        ?.search_ask_ai_cta_hover_text_color,
    search_ask_ai_cta_bg_color:
      environment.siteInstallation?.configuration?.search_ask_ai_cta_bg_color ??
      environment.spaceInstallation?.configuration?.search_ask_ai_cta_bg_color,
    search_ask_ai_cta_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.search_ask_ai_cta_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.search_ask_ai_cta_hover_bg_color,
    search_ask_ai_cta_border:
      environment.siteInstallation?.configuration?.search_ask_ai_cta_border ??
      environment.spaceInstallation?.configuration?.search_ask_ai_cta_border,
    search_ask_ai_cta_text_font_size:
      environment.siteInstallation?.configuration
        ?.search_ask_ai_cta_text_font_size ??
      environment.spaceInstallation?.configuration
        ?.search_ask_ai_cta_text_font_size,
    search_source_ids_include:
      environment.siteInstallation?.configuration?.search_source_ids_include ??
      environment.spaceInstallation?.configuration?.search_source_ids_include,
    search_source_ids_order:
      environment.siteInstallation?.configuration?.search_source_ids_order ??
      environment.spaceInstallation?.configuration?.search_source_ids_order,
    search_result_link_target:
      environment.siteInstallation?.configuration?.search_result_link_target ??
      environment.spaceInstallation?.configuration?.search_result_link_target,
    search_show_ask_ai_cta:
      environment.siteInstallation?.configuration?.search_show_ask_ai_cta ??
      environment.spaceInstallation?.configuration?.search_show_ask_ai_cta,
    language:
      environment.siteInstallation?.configuration?.language ??
      environment.spaceInstallation?.configuration?.language,
    scale_factor:
      environment.siteInstallation?.configuration?.scale_factor ??
      environment.spaceInstallation?.configuration?.scale_factor,
    font_size_xs:
      environment.siteInstallation?.configuration?.font_size_xs ??
      environment.spaceInstallation?.configuration?.font_size_xs,
    font_size_sm:
      environment.siteInstallation?.configuration?.font_size_sm ??
      environment.spaceInstallation?.configuration?.font_size_sm,
    font_size_md:
      environment.siteInstallation?.configuration?.font_size_md ??
      environment.spaceInstallation?.configuration?.font_size_md,
    font_size_lg:
      environment.siteInstallation?.configuration?.font_size_lg ??
      environment.spaceInstallation?.configuration?.font_size_lg,
    font_size_xl:
      environment.siteInstallation?.configuration?.font_size_xl ??
      environment.spaceInstallation?.configuration?.font_size_xl,
    hyperlink_color:
      environment.siteInstallation?.configuration?.hyperlink_color ??
      environment.spaceInstallation?.configuration?.hyperlink_color,
    question_text_color:
      environment.siteInstallation?.configuration?.question_text_color ??
      environment.spaceInstallation?.configuration?.question_text_color,
    answer_text_color:
      environment.siteInstallation?.configuration?.answer_text_color ??
      environment.spaceInstallation?.configuration?.answer_text_color,
    button_hover_bg_color:
      environment.siteInstallation?.configuration?.button_hover_bg_color ??
      environment.spaceInstallation?.configuration?.button_hover_bg_color,
    button_image:
      environment.siteInstallation?.configuration?.button_image ??
      environment.spaceInstallation?.configuration?.button_image,
    button_image_height:
      environment.siteInstallation?.configuration?.button_image_height ??
      environment.spaceInstallation?.configuration?.button_image_height,
    button_image_width:
      environment.siteInstallation?.configuration?.button_image_width ??
      environment.spaceInstallation?.configuration?.button_image_width,
    button_z_index:
      environment.siteInstallation?.configuration?.button_z_index ??
      environment.spaceInstallation?.configuration?.button_z_index,
    button_hover_animation_enabled:
      environment.siteInstallation?.configuration
        ?.button_hover_animation_enabled ??
      environment.spaceInstallation?.configuration
        ?.button_hover_animation_enabled,
    modal_image:
      environment.siteInstallation?.configuration?.modal_image ??
      environment.spaceInstallation?.configuration?.modal_image,
    modal_close_button_hide:
      environment.siteInstallation?.configuration?.modal_close_button_hide ??
      environment.spaceInstallation?.configuration?.modal_close_button_hide,
    modal_disclaimer_bg_color:
      environment.siteInstallation?.configuration?.modal_disclaimer_bg_color ??
      environment.spaceInstallation?.configuration?.modal_disclaimer_bg_color,
    modal_disclaimer_text_color:
      environment.siteInstallation?.configuration
        ?.modal_disclaimer_text_color ??
      environment.spaceInstallation?.configuration?.modal_disclaimer_text_color,
    modal_disclaimer_font_size:
      environment.siteInstallation?.configuration?.modal_disclaimer_font_size ??
      environment.spaceInstallation?.configuration?.modal_disclaimer_font_size,
    modal_full_screen:
      environment.siteInstallation?.configuration?.modal_full_screen ??
      environment.spaceInstallation?.configuration?.modal_full_screen,
    modal_full_screen_on_mobile:
      environment.siteInstallation?.configuration?.modal_full_screen_on_mobile ??
      environment.spaceInstallation?.configuration?.modal_full_screen_on_mobile,
    modal_header_logo_hide_on_mobile:
      environment.siteInstallation?.configuration
        ?.modal_header_logo_hide_on_mobile ??
      environment.spaceInstallation?.configuration
        ?.modal_header_logo_hide_on_mobile,
    modal_example_questions_title:
      environment.siteInstallation?.configuration
        ?.modal_example_questions_title ??
      environment.spaceInstallation?.configuration
        ?.modal_example_questions_title,
    modal_example_questions_col_span:
      environment.siteInstallation?.configuration
        ?.modal_example_questions_col_span ??
      environment.spaceInstallation?.configuration
        ?.modal_example_questions_col_span,
    modal_footer:
      environment.siteInstallation?.configuration?.modal_footer ??
      environment.spaceInstallation?.configuration?.modal_footer,
    modal_override_open_class_search:
      environment.siteInstallation?.configuration
        ?.modal_override_open_class_search ??
      environment.spaceInstallation?.configuration
        ?.modal_override_open_class_search,
    modal_override_open_class_ask_ai:
      environment.siteInstallation?.configuration
        ?.modal_override_open_class_ask_ai ??
      environment.spaceInstallation?.configuration
        ?.modal_override_open_class_ask_ai,
    modal_override_open_id:
      environment.siteInstallation?.configuration?.modal_override_open_id ??
      environment.spaceInstallation?.configuration?.modal_override_open_id,
    modal_override_open_id_search:
      environment.siteInstallation?.configuration
        ?.modal_override_open_id_search ??
      environment.spaceInstallation?.configuration?.modal_override_open_id_search,
    modal_override_open_id_ask_ai:
      environment.siteInstallation?.configuration
        ?.modal_override_open_id_ask_ai ??
      environment.spaceInstallation?.configuration?.modal_override_open_id_ask_ai,
    modal_override_open_selector:
      environment.siteInstallation?.configuration?.modal_override_open_selector ??
      environment.spaceInstallation?.configuration?.modal_override_open_selector,
    modal_override_open_selector_search:
      environment.siteInstallation?.configuration
        ?.modal_override_open_selector_search ??
      environment.spaceInstallation?.configuration
        ?.modal_override_open_selector_search,
    modal_override_open_selector_ask_ai:
      environment.siteInstallation?.configuration
        ?.modal_override_open_selector_ask_ai ??
      environment.spaceInstallation?.configuration
        ?.modal_override_open_selector_ask_ai,
    modal_open_on_command_k:
      environment.siteInstallation?.configuration?.modal_open_on_command_k ??
      environment.spaceInstallation?.configuration?.modal_open_on_command_k,
    modal_command_k_search_mode_default:
      environment.siteInstallation?.configuration
        ?.modal_command_k_search_mode_default ??
      environment.spaceInstallation?.configuration
        ?.modal_command_k_search_mode_default,
    modal_image_ask_ai:
      environment.siteInstallation?.configuration?.modal_image_ask_ai ??
      environment.spaceInstallation?.configuration?.modal_image_ask_ai,
    modal_image_search:
      environment.siteInstallation?.configuration?.modal_image_search ??
      environment.spaceInstallation?.configuration?.modal_image_search,
    modal_title_search:
      environment.siteInstallation?.configuration?.modal_title_search ??
      environment.spaceInstallation?.configuration?.modal_title_search,
    modal_title_ask_ai:
      environment.siteInstallation?.configuration?.modal_title_ask_ai ??
      environment.spaceInstallation?.configuration?.modal_title_ask_ai,
    query_input_font_size:
      environment.siteInstallation?.configuration?.query_input_font_size ??
      environment.spaceInstallation?.configuration?.query_input_font_size,
    query_input_text_color:
      environment.siteInstallation?.configuration?.query_input_text_color ??
      environment.spaceInstallation?.configuration?.query_input_text_color,
    query_input_placeholder_text_color:
      environment.siteInstallation?.configuration
        ?.query_input_placeholder_text_color ??
      environment.spaceInstallation?.configuration
        ?.query_input_placeholder_text_color,
    query_input_border_color:
      environment.siteInstallation?.configuration?.query_input_border_color ??
      environment.spaceInstallation?.configuration?.query_input_border_color,
    query_input_focus_border_color:
      environment.siteInstallation?.configuration
        ?.query_input_focus_border_color ??
      environment.spaceInstallation?.configuration?.query_input_focus_border_color,
    submit_query_button_bg_color:
      environment.siteInstallation?.configuration?.submit_query_button_bg_color ??
      environment.spaceInstallation?.configuration?.submit_query_button_bg_color,
    conversation_buttons_icons_only:
      environment.siteInstallation?.configuration
        ?.conversation_buttons_icons_only ??
      environment.spaceInstallation?.configuration
        ?.conversation_buttons_icons_only,
    answer_copy_button_height:
      environment.siteInstallation?.configuration?.answer_copy_button_height ??
      environment.spaceInstallation?.configuration?.answer_copy_button_height,
    answer_copy_button_width:
      environment.siteInstallation?.configuration?.answer_copy_button_width ??
      environment.spaceInstallation?.configuration?.answer_copy_button_width,
    answer_copy_button_padding_x:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_padding_x ??
      environment.spaceInstallation?.configuration?.answer_copy_button_padding_x,
    answer_copy_button_padding_y:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_padding_y ??
      environment.spaceInstallation?.configuration?.answer_copy_button_padding_y,
    answer_copy_button_border:
      environment.siteInstallation?.configuration?.answer_copy_button_border ??
      environment.spaceInstallation?.configuration?.answer_copy_button_border,
    answer_copy_button_border_radius:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_border_radius ??
      environment.spaceInstallation?.configuration
        ?.answer_copy_button_border_radius,
    answer_copy_button_bg_color:
      environment.siteInstallation?.configuration?.answer_copy_button_bg_color ??
      environment.spaceInstallation?.configuration?.answer_copy_button_bg_color,
    answer_copy_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.answer_copy_button_hover_bg_color,
    answer_copy_button_text_color:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_text_color ??
      environment.spaceInstallation?.configuration?.answer_copy_button_text_color,
    answer_copy_button_font_size:
      environment.siteInstallation?.configuration?.answer_copy_button_font_size ??
      environment.spaceInstallation?.configuration?.answer_copy_button_font_size,
    answer_copy_button_icon_size:
      environment.siteInstallation?.configuration?.answer_copy_button_icon_size ??
      environment.spaceInstallation?.configuration?.answer_copy_button_icon_size,
    answer_copy_button_box_shadow:
      environment.siteInstallation?.configuration
        ?.answer_copy_button_box_shadow ??
      environment.spaceInstallation?.configuration?.answer_copy_button_box_shadow,
    thread_clear_button_height:
      environment.siteInstallation?.configuration?.thread_clear_button_height ??
      environment.spaceInstallation?.configuration?.thread_clear_button_height,
    thread_clear_button_width:
      environment.siteInstallation?.configuration?.thread_clear_button_width ??
      environment.spaceInstallation?.configuration?.thread_clear_button_width,
    thread_clear_button_padding_x:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_padding_x ??
      environment.spaceInstallation?.configuration?.thread_clear_button_padding_x,
    thread_clear_button_padding_y:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_padding_y ??
      environment.spaceInstallation?.configuration?.thread_clear_button_padding_y,
    thread_clear_button_border:
      environment.siteInstallation?.configuration?.thread_clear_button_border ??
      environment.spaceInstallation?.configuration?.thread_clear_button_border,
    thread_clear_button_border_radius:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_border_radius ??
      environment.spaceInstallation?.configuration
        ?.thread_clear_button_border_radius,
    thread_clear_button_bg_color:
      environment.siteInstallation?.configuration?.thread_clear_button_bg_color ??
      environment.spaceInstallation?.configuration?.thread_clear_button_bg_color,
    thread_clear_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.thread_clear_button_hover_bg_color,
    thread_clear_button_text_color:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_text_color ??
      environment.spaceInstallation?.configuration?.thread_clear_button_text_color,
    thread_clear_button_font_size:
      environment.siteInstallation?.configuration?.thread_clear_button_font_size ??
      environment.spaceInstallation?.configuration?.thread_clear_button_font_size,
    thread_clear_button_icon_size:
      environment.siteInstallation?.configuration?.thread_clear_button_icon_size ??
      environment.spaceInstallation?.configuration?.thread_clear_button_icon_size,
    thread_clear_button_box_shadow:
      environment.siteInstallation?.configuration
        ?.thread_clear_button_box_shadow ??
      environment.spaceInstallation?.configuration?.thread_clear_button_box_shadow,
    answer_feedback_button_height:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_height ??
      environment.spaceInstallation?.configuration?.answer_feedback_button_height,
    answer_feedback_button_width:
      environment.siteInstallation?.configuration?.answer_feedback_button_width ??
      environment.spaceInstallation?.configuration?.answer_feedback_button_width,
    answer_feedback_button_padding_x:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_padding_x ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_padding_x,
    answer_feedback_button_padding_y:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_padding_y ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_padding_y,
    answer_feedback_button_border:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_border ??
      environment.spaceInstallation?.configuration?.answer_feedback_button_border,
    answer_feedback_button_active_border:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_active_border ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_active_border,
    answer_feedback_button_border_radius:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_border_radius ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_border_radius,
    answer_feedback_button_bg_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_bg_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_bg_color,
    answer_feedback_button_active_bg_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_active_bg_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_active_bg_color,
    answer_feedback_button_active_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_active_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_active_hover_bg_color,
    answer_feedback_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_hover_bg_color,
    answer_feedback_button_text_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_text_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_text_color,
    answer_feedback_button_active_text_color:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_active_text_color ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_active_text_color,
    answer_feedback_button_font_size:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_font_size ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_font_size,
    answer_feedback_button_icon_size:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_icon_size ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_icon_size,
    answer_feedback_button_box_shadow:
      environment.siteInstallation?.configuration
        ?.answer_feedback_button_box_shadow ??
      environment.spaceInstallation?.configuration
        ?.answer_feedback_button_box_shadow,
    cta_button_height:
      environment.siteInstallation?.configuration?.cta_button_height ??
      environment.spaceInstallation?.configuration?.cta_button_height,
    cta_button_width:
      environment.siteInstallation?.configuration?.cta_button_width ??
      environment.spaceInstallation?.configuration?.cta_button_width,
    cta_button_padding_x:
      environment.siteInstallation?.configuration?.cta_button_padding_x ??
      environment.spaceInstallation?.configuration?.cta_button_padding_x,
    cta_button_padding_y:
      environment.siteInstallation?.configuration?.cta_button_padding_y ??
      environment.spaceInstallation?.configuration?.cta_button_padding_y,
    cta_button_border:
      environment.siteInstallation?.configuration?.cta_button_border ??
      environment.spaceInstallation?.configuration?.cta_button_border,
    cta_button_border_radius:
      environment.siteInstallation?.configuration?.cta_button_border_radius ??
      environment.spaceInstallation?.configuration?.cta_button_border_radius,
    cta_button_bg_color:
      environment.siteInstallation?.configuration?.cta_button_bg_color ??
      environment.spaceInstallation?.configuration?.cta_button_bg_color,
    cta_button_hover_bg_color:
      environment.siteInstallation?.configuration?.cta_button_hover_bg_color ??
      environment.spaceInstallation?.configuration?.cta_button_hover_bg_color,
    cta_button_text_color:
      environment.siteInstallation?.configuration?.cta_button_text_color ??
      environment.spaceInstallation?.configuration?.cta_button_text_color,
    cta_button_font_size:
      environment.siteInstallation?.configuration?.cta_button_font_size ??
      environment.spaceInstallation?.configuration?.cta_button_font_size,
    cta_button_icon_size:
      environment.siteInstallation?.configuration?.cta_button_icon_size ??
      environment.spaceInstallation?.configuration?.cta_button_icon_size,
    cta_button_box_shadow:
      environment.siteInstallation?.configuration?.cta_button_box_shadow ??
      environment.spaceInstallation?.configuration?.cta_button_box_shadow,
    example_question_button_height:
      environment.siteInstallation?.configuration
        ?.example_question_button_height ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_height,
    example_question_button_width:
      environment.siteInstallation?.configuration
        ?.example_question_button_width ??
      environment.spaceInstallation?.configuration?.example_question_button_width,
    example_question_button_padding_x:
      environment.siteInstallation?.configuration
        ?.example_question_button_padding_x ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_padding_x,
    example_question_button_padding_y:
      environment.siteInstallation?.configuration
        ?.example_question_button_padding_y ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_padding_y,
    example_question_button_border:
      environment.siteInstallation?.configuration
        ?.example_question_button_border ??
      environment.spaceInstallation?.configuration?.example_question_button_border,
    example_question_button_border_radius:
      environment.siteInstallation?.configuration
        ?.example_question_button_border_radius ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_border_radius,
    example_question_button_bg_color:
      environment.siteInstallation?.configuration
        ?.example_question_button_bg_color ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_bg_color,
    example_question_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.example_question_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_hover_bg_color,
    example_question_button_text_color:
      environment.siteInstallation?.configuration
        ?.example_question_button_text_color ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_text_color,
    example_question_button_font_size:
      environment.siteInstallation?.configuration
        ?.example_question_button_font_size ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_font_size,
    example_question_button_box_shadow:
      environment.siteInstallation?.configuration
        ?.example_question_button_box_shadow ??
      environment.spaceInstallation?.configuration
        ?.example_question_button_box_shadow,
    deep_thinking_button_bg_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_bg_color ??
      environment.spaceInstallation?.configuration?.deep_thinking_button_bg_color,
    deep_thinking_button_active_bg_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_active_bg_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_active_bg_color,
    deep_thinking_button_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_hover_bg_color,
    deep_thinking_button_active_hover_bg_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_active_hover_bg_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_active_hover_bg_color,
    deep_thinking_button_active_hover_text_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_active_hover_text_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_active_hover_text_color,
    deep_thinking_button_text_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_text_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_text_color,
    deep_thinking_button_active_text_color:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_active_text_color ??
      environment.spaceInstallation?.configuration
        ?.deep_thinking_button_active_text_color,
    deep_thinking_button_font_size:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_font_size ??
      environment.spaceInstallation?.configuration?.deep_thinking_button_font_size,
    deep_thinking_button_icon_size:
      environment.siteInstallation?.configuration
        ?.deep_thinking_button_icon_size ??
      environment.spaceInstallation?.configuration?.deep_thinking_button_icon_size,
    source_link_primary_heading_text_color:
      environment.siteInstallation?.configuration
        ?.source_link_primary_heading_text_color ??
      environment.spaceInstallation?.configuration
        ?.source_link_primary_heading_text_color,
    source_link_secondary_heading_text_color:
      environment.siteInstallation?.configuration
        ?.source_link_secondary_heading_text_color ??
      environment.spaceInstallation?.configuration
        ?.source_link_secondary_heading_text_color,
    source_link_border:
      environment.siteInstallation?.configuration?.source_link_border ??
      environment.spaceInstallation?.configuration?.source_link_border,
    source_link_bg_color:
      environment.siteInstallation?.configuration?.source_link_bg_color ??
      environment.spaceInstallation?.configuration?.source_link_bg_color,
    source_link_hover_bg_color:
      environment.siteInstallation?.configuration?.source_link_hover_bg_color ??
      environment.spaceInstallation?.configuration?.source_link_hover_bg_color,
    switch_label_padding_x:
      environment.siteInstallation?.configuration?.switch_label_padding_x ??
      environment.spaceInstallation?.configuration?.switch_label_padding_x,
    switch_label_padding_y:
      environment.siteInstallation?.configuration?.switch_label_padding_y ??
      environment.spaceInstallation?.configuration?.switch_label_padding_y,
    switch_label_font_size:
      environment.siteInstallation?.configuration?.switch_label_font_size ??
      environment.spaceInstallation?.configuration?.switch_label_font_size,
    switch_label_font_weight:
      environment.siteInstallation?.configuration?.switch_label_font_weight ??
      environment.spaceInstallation?.configuration?.switch_label_font_weight,
    source_group_ids_include:
      environment.siteInstallation?.configuration?.source_group_ids_include ??
      environment.spaceInstallation?.configuration?.source_group_ids_include,
    consent_required:
      environment.siteInstallation?.configuration?.consent_required ??
      environment.spaceInstallation?.configuration?.consent_required,
    consent_screen_title:
      environment.siteInstallation?.configuration?.consent_screen_title ??
      environment.spaceInstallation?.configuration?.consent_screen_title,
    consent_screen_disclaimer:
      environment.siteInstallation?.configuration?.consent_screen_disclaimer ??
      environment.spaceInstallation?.configuration?.consent_screen_disclaimer,
    consent_screen_accept_button_text:
      environment.siteInstallation?.configuration
        ?.consent_screen_accept_button_text ??
      environment.spaceInstallation?.configuration
        ?.consent_screen_accept_button_text,
    consent_screen_reject_button_text:
      environment.siteInstallation?.configuration
        ?.consent_screen_reject_button_text ??
      environment.spaceInstallation?.configuration
        ?.consent_screen_reject_button_text,
    answer_cta_button_enabled:
      environment.siteInstallation?.configuration?.answer_cta_button_enabled ??
      environment.spaceInstallation?.configuration?.answer_cta_button_enabled,
    answer_cta_button_text:
      environment.siteInstallation?.configuration?.answer_cta_button_text ??
      environment.spaceInstallation?.configuration?.answer_cta_button_text,
    answer_cta_button_link:
      environment.siteInstallation?.configuration?.answer_cta_button_link ??
      environment.spaceInstallation?.configuration?.answer_cta_button_link,
    footer_tos_privacy_links:
      environment.siteInstallation?.configuration?.footer_tos_privacy_links ??
      environment.spaceInstallation?.configuration?.footer_tos_privacy_links,
    kapa_branding_hide:
      environment.siteInstallation?.configuration?.kapa_branding_hide ??
      environment.spaceInstallation?.configuration?.kapa_branding_hide,
    kapa_branding_text:
      environment.siteInstallation?.configuration?.kapa_branding_text ??
      environment.spaceInstallation?.configuration?.kapa_branding_text,
    uncertain_answer_callout:
      environment.siteInstallation?.configuration?.uncertain_answer_callout ??
      environment.spaceInstallation?.configuration?.uncertain_answer_callout,
    user_satisfaction_feedback_enabled:
      environment.siteInstallation?.configuration
        ?.user_satisfaction_feedback_enabled ??
      environment.spaceInstallation?.configuration
        ?.user_satisfaction_feedback_enabled,
    bot_protection_mechanism:
      environment.siteInstallation?.configuration?.bot_protection_mechanism ??
      environment.spaceInstallation?.configuration?.bot_protection_mechanism,
    user_analytics_fingerprint_enabled:
      environment.siteInstallation?.configuration
        ?.user_analytics_fingerprint_enabled ??
      environment.spaceInstallation?.configuration
        ?.user_analytics_fingerprint_enabled,
    mcp_enabled:
      environment.siteInstallation?.configuration?.mcp_enabled ??
      environment.spaceInstallation?.configuration?.mcp_enabled,
    mcp_server_url:
      environment.siteInstallation?.configuration?.mcp_server_url ??
      environment.spaceInstallation?.configuration?.mcp_server_url,
    mcp_button_text:
      environment.siteInstallation?.configuration?.mcp_button_text ??
      environment.spaceInstallation?.configuration?.mcp_button_text,
  };

  if (!website_id || !project_name || !project_color || !project_logo) {
    return;
  }

  let parsedScript = script
    .replace("<WEBSITE_ID>", website_id)
    .replace("<PROJECT_NAME>", project_name)
    .replace("<PROJECT_COLOR>", project_color)
    .replace("<PROJECT_LOGO>", project_logo)
    .replace("<NATIVE_AI_EXPERIENCE>", native_ai_experience ? "true" : "false");

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
