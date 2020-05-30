![Shortly UI tokens](src/images/shortly-ui.png)

[JSON](tokens/shortly-tokens.json) · [SCSS](tokens/shortly-tokens.scss) · [CSS](tokens/shortly-tokens.css)

Design tokens for Shortly

- colors
- typography
- borders
- z-index

## Setup

Create an `.env` with the following variables:

```
FIGMA_TOKEN='FIGMA TOKEN'
FIGMA_FILE_ID='FIGMA FILE ID'
```

## Sync tokens

```
$ npm run tokens:sync
```

## Tokens

```
{
  "color-white": "#ffffff",
  "color-violet-light": "#9e9aa7",
  "color-gray-20": "#dedede",
  "color-dark": "#232127",
  "color-dark-blue": "#35323e",
  "color-error": "#f46262",
  "color-secondary": "#3b3054",
  "color-primary": "#2bd0d0",
  "color-violet-lighter": "#f0f1f6",
  "spacing-xl": "4rem",
  "spacing-lg": "2rem",
  "spacing-md": "1rem",
  "spacing-sm": "0.5rem",
  "spacing-xs": "0.25rem",
  "font-family-primary": "Poppins",
  "font-weight-bold": 700,
  "font-weight-regular": 500,
  "font-size-xxl": "4.625rem",
  "font-size-xl": "2.625rem",
  "font-size-lg": "1.75rem",
  "font-size-md": "1.25rem",
  "font-size-base": "1rem",
  "border-radius-base": "4px",
  "border-radius-circle": "50%",
  "z-index-top": 999,
  "z-index-modal": 400,
  "z-index-toast": 300,
  "z-index-tooltip": 200,
  "z-index-masked": 100,
  "z-index-default": 1
}
```
