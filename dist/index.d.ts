declare interface Tokens {
  "color-white": string;
  "color-violet-light": string;
  "color-gray-20": string;
  "color-dark": string;
  "color-dark-blue": string;
  "color-error": string;
  "color-secondary": string;
  "color-primary": string;
  "color-violet-lighter": string;
  "spacing-xl": string;
  "spacing-lg": string;
  "spacing-md": string;
  "spacing-sm": string;
  "spacing-xs": string;
  "font-family-primary": string;
  "font-weight-bold": number;
  "font-weight-regular": number;
  "font-size-xxl": string;
  "font-size-xl": string;
  "font-size-lg": string;
  "font-size-md": string;
  "font-size-base": string;
  "border-radius-base": string;
  "border-radius-circle": string;
  "z-index-top": number;
  "z-index-modal": number;
  "z-index-toast": number;
  "z-index-tooltip": number;
  "z-index-masked": number;
  "z-index-default": number;
}

declare let tokens: Tokens;
export = tokens;
