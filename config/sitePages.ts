export type Page = {
	name: string;
	link: string;
};

export type SitePages = Record<string, Page> | null;

export const sitePages: SitePages = null;
