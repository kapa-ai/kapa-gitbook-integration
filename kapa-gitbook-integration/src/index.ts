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
      button_hide?: string;
      modal_override_open_class?: string;
      modal_open_by_default?: string;
      modal_search_placeholder?: string;
      modal_title?: string;
      modal_disclaimer?: string;
      modal_hide_image?: string;
      button_text?: string;
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
    modal_search_placeholder:
      environment.spaceInstallation.configuration.modal_search_placeholder,
    modal_title: environment.spaceInstallation.configuration.modal_title,
    modal_disclaimer:
      environment.spaceInstallation.configuration.modal_disclaimer,
    modal_hide_image:
      environment.spaceInstallation.configuration.modal_hide_image,
    button_text: environment.spaceInstallation.configuration.button_text,
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
      parsedScript = parsedScript.replace(`<${key.toUpperCase()}>`, "undefined");
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
