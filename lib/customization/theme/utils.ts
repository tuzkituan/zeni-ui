import { themes } from ".";

export type ITheme = Record<string, string>;

export type IThemes = Record<string, ITheme>;

export type IMappedTheme = Record<string, string | null>;

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    // primary color
    "--color-primary": variables.primaryBase || "",
    "--color-primary-100": variables.primary100 || "",
    "--color-primary-90": variables.primary90 || "",
    "--color-primary-80": variables.primary80 || "",
    "--color-primary-70": variables.primary70 || "",
    "--color-primary-60": variables.primary60 || "",
    "--color-primary-50": variables.primary50 || "",
    "--color-primary-40": variables.primary40 || "",
    "--color-primary-30": variables.primary30 || "",
    "--color-primary-20": variables.primary20 || "",
    "--color-primary-10": variables.primary10 || "",

    // neutral color
    "--color-neutral": variables.neutralBase || "",
    "--color-neutral-100": variables.neutral100 || "",
    "--color-neutral-90": variables.neutral90 || "",
    "--color-neutral-80": variables.neutral80 || "",
    "--color-neutral-70": variables.neutral70 || "",
    "--color-neutral-60": variables.neutral60 || "",
    "--color-neutral-50": variables.neutral50 || "",
    "--color-neutral-40": variables.neutral40 || "",
    "--color-neutral-30": variables.neutral30 || "",
    "--color-neutral-20": variables.neutral20 || "",
    "--color-neutral-10": variables.neutral10 || "",
    "--color-neutral-5": variables.neutral5 || "",

    // success
    "--color-success": variables.successBase || "",
    "--color-success-100": variables.success100 || "",
    "--color-success-90": variables.success90 || "",
    "--color-success-80": variables.success80 || "",
    "--color-success-70": variables.success70 || "",
    "--color-success-60": variables.success60 || "",
    "--color-success-50": variables.success50 || "",
    "--color-success-40": variables.success40 || "",
    "--color-success-30": variables.success30 || "",
    "--color-success-20": variables.success20 || "",
    "--color-success-10": variables.success10 || "",

    // warning
    "--color-warning": variables.warningBase || "",
    "--color-warning-100": variables.warning100 || "",
    "--color-warning-90": variables.warning90 || "",
    "--color-warning-80": variables.warning80 || "",
    "--color-warning-70": variables.warning70 || "",
    "--color-warning-60": variables.warning60 || "",
    "--color-warning-50": variables.warning50 || "",
    "--color-warning-40": variables.warning40 || "",
    "--color-warning-30": variables.warning30 || "",
    "--color-warning-20": variables.warning20 || "",
    "--color-warning-10": variables.warning10 || "",

    // error
    "--color-error": variables.errorBase || "",
    "--color-error-100": variables.error100 || "",
    "--color-error-90": variables.error90 || "",
    "--color-error-80": variables.error80 || "",
    "--color-error-70": variables.error70 || "",
    "--color-error-60": variables.error60 || "",
    "--color-error-50": variables.error50 || "",
    "--color-error-40": variables.error40 || "",
    "--color-error-30": variables.error30 || "",
    "--color-error-20": variables.error20 || "",
    "--color-error-10": variables.error10 || "",

    // info
    "--color-info": variables.infoBase || "",
    "--color-info-100": variables.info100 || "",
    "--color-info-90": variables.info90 || "",
    "--color-info-80": variables.info80 || "",
    "--color-info-70": variables.info70 || "",
    "--color-info-60": variables.info60 || "",
    "--color-info-50": variables.info50 || "",
    "--color-info-40": variables.info40 || "",
    "--color-info-30": variables.info30 || "",
    "--color-info-20": variables.info20 || "",
    "--color-info-10": variables.info10 || "",
  };
};

export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme => {
  return { ...extending, ...newTheme };
};
