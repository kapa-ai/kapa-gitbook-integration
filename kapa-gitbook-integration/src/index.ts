import {
  createIntegration,
  FetchPublishScriptEventCallback,
  RuntimeContext,
  RuntimeEnvironment,
} from '@gitbook/runtime';

import script from './script.raw.js';

type KapaRuntimeContext = RuntimeContext<
  RuntimeEnvironment<
      {},
      {
        website_id?: string;
        project_name?: string;
        project_color?: string;
        project_logo?: string;
      }
  >
>;

export const handleFetchEvent: FetchPublishScriptEventCallback = async (
  event,
  { environment }: KapaRuntimeContext
) => {
  const website_id = environment.spaceInstallation.configuration.website_id;
  const project_name = environment.spaceInstallation.configuration.project_name;
  const project_color = environment.spaceInstallation.configuration.project_color;
  const project_logo = environment.spaceInstallation.configuration.project_logo;

  if (!website_id || !project_name || !project_color || !project_logo) {
      return;
  }

  const parsedScript = script.replace(
    '<WEBSITE_ID>', website_id
  ).replace(
    '<PROJECT_NAME>', project_name
  ).replace(
    '<PROJECT_COLOR>', project_color
  ).replace(
    '<PROJECT_LOGO>', project_logo
  )

  return new Response(parsedScript, {
      headers: {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'max-age=604800',
      },
  });

};

export default createIntegration<KapaRuntimeContext>({
  fetch_published_script: handleFetchEvent,
});