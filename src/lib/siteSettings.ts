import { reader } from './reader';
import {
  PHONE as FALLBACK_PHONE,
  EMAIL as FALLBACK_EMAIL,
  ADDRESS as FALLBACK_ADDRESS,
  POSTCODE as FALLBACK_POSTCODE,
  OPENING_HOURS as FALLBACK_HOURS,
} from '../data/site';

export async function getSiteSettings() {
  const s = await reader.singletons.siteSettings.read();
  const phone = s?.phone || FALLBACK_PHONE;
  return {
    PHONE: phone,
    PHONE_HREF: 'tel:+44' + phone.replace(/^0/, '').replace(/\s/g, ''),
    EMAIL: s?.email || FALLBACK_EMAIL,
    ADDRESS: s?.address || FALLBACK_ADDRESS,
    POSTCODE: s?.postcode || FALLBACK_POSTCODE,
    OPENING_HOURS:
      s?.openingHours?.map(h => ({ day: h.day, opens: h.opens, closes: h.closes })) ??
      FALLBACK_HOURS,
  };
}

const PNG_SLUGS = new Set(['slates', 'fascias-and-guttering']);
export function productImagePath(slug: string): string {
  return `/images/products/${slug}.${PNG_SLUGS.has(slug) ? 'png' : 'jpg'}`;
}
