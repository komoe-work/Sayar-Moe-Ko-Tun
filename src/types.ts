/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Version {
  fileName: string;
}

export interface Creative {
  id: string; // generated client-side id
  title: string;
  subtitle: string;
  headline: string;
  imageKey: string; // identifier to match background asset
  category: string;
}

export interface Campaign {
  id: number;
  name: string;
  description: string;
  creatives: Creative[];
}

export interface BrandProfile {
  name: string;
  overview: string;
  websiteUrl: string;
  brandValues: string[];
  visualAesthetics: string[];
  toneOfVoice: string[];
}

export type AspectRatioType = '9:16' | '1:1' | '16:9' | '3:4';

export interface VisualTheme {
  id: string;
  name: string;
  bgClass: string;
  textClass: string;
  accentClass: string;
  cardBg: string;
  borderClass: string;
  fontSans: string;
  fontDisplay: string;
  fontMono: string;
  overlayClass: string;
}
