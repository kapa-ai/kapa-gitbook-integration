# Kapa.ai GitBook Integration

## Overview

This is a GitBook integration that embeds the Kapa.ai AI-powered documentation assistant into GitBook documentation sites. Kapa.ai learns from docs, API references, tutorials, forums, chat histories, and GitHub content to automatically answer developer questions.

## Architecture

### High-Level Flow

```
GitBook Site → Integration Handler → Configured Script → Kapa Widget
```

1. GitBook calls the integration when loading a documentation page
2. The integration handler reads user configuration from GitBook
3. Configuration values are injected into a JavaScript template
4. The configured script is injected into the GitBook page
5. The script dynamically loads and initializes the Kapa widget

### Key Components

#### 1. `gitbook-manifest.yaml`
- **Purpose**: Defines the integration metadata and configuration schema
- **Key sections**:
  - `scopes`: Requires `site:script:inject` permission to inject JavaScript
  - `configurations.site.properties`: Defines ~90 configuration parameters exposed to users
  - `target`: Set to `site` (site-level integration)
  - `contentSecurityPolicy`: Allows loading scripts from `https://widget.kapa.ai`

#### 2. `src/index.ts`
- **Purpose**: Integration runtime handler
- **Key function**: `handleFetchEvent()`
  - Reads configuration from `environment.siteInstallation` or `environment.spaceInstallation`
  - Performs template string replacement on `script.raw.js`
  - Replaces placeholders like `<WEBSITE_ID>`, `<BUTTON_BG_COLOR>`, etc. with actual values
  - Returns JavaScript response with caching headers (7 day cache)

- **TypeScript context**: `KapaRuntimeContext` defines all configuration properties
- **Fallback logic**: Checks both site and space installation configs (site takes precedence)

#### 3. `src/script.raw.js`
- **Purpose**: JavaScript template that gets injected into GitBook pages
- **Key features**:
  - Prevents duplicate loading via `window.__KAPA_WIDGET_LOADED__` flag
  - Contains placeholder strings like `<WEBSITE_ID>` that get replaced at runtime
  - Dynamically creates and loads the Kapa widget script tag
  - Applies configuration via data attributes (`data-*`)
  - **GitBook Native AI Integration**: Registers with `window.GitBook.registerAssistant()` to enable native AI experience

## Configuration System

### Configuration Flow

```
User configures in GitBook UI (snake_case)
    ↓
index.ts reads config values
    ↓
Replaces placeholders in script.raw.js (UPPER_SNAKE_CASE)
    ↓
Script converts to data attributes (kebab-case)
    ↓
Kapa widget receives configuration
```

### Example Configuration Mapping

| GitBook Config | Placeholder | Data Attribute | Description |
|---|---|---|---|
| `button_bg_color: "#FF0000"` | `<BUTTON_BG_COLOR>` | `data-button-bg-color="#FF0000"` | Button background color |
| `modal_title: "Help"` | `<MODAL_TITLE>` | `data-modal-title="Help"` | Modal title text |

### Configuration Categories

1. **Required Parameters**:
   - `website_id`: Kapa instance identifier
   - `project_name`: Display name
   - `project_color`: Primary color (HEX)
   - `project_logo`: Logo URL
   - `native_ai_experience`: Enable GitBook native AI integration

2. **Button Styling**: Position, colors, fonts, dimensions, animations
3. **Modal Styling**: Header, body, overlay, positioning, z-index
4. **Search Mode**: Source filtering, keyboard navigation, result display
5. **User Tracking**: Cookie-based analytics
6. **Switch Controls**: Toggle appearance customization

## Native AI Experience

When `native_ai_experience: true`:
- The floating Kapa button is hidden (`data-button-hide="true"`)
- Kapa registers with GitBook's assistant API
- Users interact with Kapa through GitBook's built-in AI interface
- Query submission happens via `window.Kapa("open", { mode: "ai", query, submit: true })`

## Development

### File Structure
```
kapa-gitbook-integration/
├── gitbook-manifest.yaml    # Integration definition
├── src/
│   ├── index.ts            # Runtime handler
│   └── script.raw.js       # Injected script template
├── assets/
│   ├── logo.png            # Integration icon
│   └── preview.png         # Preview image
├── package.json
└── tsconfig.json
```

### Scripts
- `npm run lint`: Run ESLint
- `npm run typecheck`: Type checking without emitting
- `npm run publish`: Publish integration to GitBook

### Dependencies
- `@gitbook/runtime`: Core integration runtime
- `@gitbook/cli`: CLI for development and publishing

### Adding New Configuration Parameters

To add a new configuration parameter:

1. **Add to `gitbook-manifest.yaml`**:
   ```yaml
   configurations:
     site:
       properties:
         my_new_param:
           type: string
           title: My New Parameter
           description: Description of what it does
   ```

2. **Add to TypeScript context in `src/index.ts`**:
   ```typescript
   type KapaRuntimeContext = RuntimeContext<
     RuntimeEnvironment<
       {},
       {
         // ... existing params
         my_new_param?: string;
       }
     >
   >;
   ```

3. **Add to config object in `src/index.ts`**:
   ```typescript
   const config = {
     // ... existing config
     my_new_param:
       environment.siteInstallation?.configuration?.my_new_param ??
       environment.spaceInstallation?.configuration?.my_new_param,
   };
   ```

4. **Add placeholder to `src/script.raw.js`**:
   ```javascript
   const config = {
     // ... existing config
     MY_NEW_PARAM: "<MY_NEW_PARAM>",
   };
   ```

5. The placeholder replacement happens automatically in the loop at `index.ts:420-429`

## Important Notes

### Template Replacement Logic
- Placeholders format: `<PARAMETER_NAME>` (uppercase with underscores)
- Undefined values are replaced with the string `"undefined"`
- Values are NOT replaced if they're empty/falsy (remains as placeholder)
- The script checks if `value !== '<KEY>' && value !== "undefined"` before setting attributes

### Caching
- Script responses are cached for 7 days (`Cache-Control: max-age=604800`)
- Configuration changes may take time to propagate due to caching

### Security
- Content Security Policy explicitly allows `https://widget.kapa.ai`
- Integration requires `site:script:inject` scope (powerful permission)
- No secrets are defined in the manifest

## Testing

When testing configuration changes:
1. Update the parameter in GitBook UI
2. Wait for cache expiration or clear cache
3. Reload the GitBook page
4. Inspect the injected script tag's data attributes
5. Verify the Kapa widget applies the configuration

## Publishing

The integration is published to GitBook's integration marketplace:
- Organization: `ivsGEIQW5yb7omcgTIQy`
- Visibility: `public`
- Categories: `analytics`

Use `npm run publish` to deploy changes (requires GitBook CLI authentication).
