export type LevelId = 'mi' | 'mts';

export interface ProgramFeature {
  title: string;
  description: string;
  icon: string;
  items?: string[];
}

export interface LevelContent {
  id: LevelId;
  name: string;
  identity: string;
  tagline: string;
  headline: string;
  description: string;
  summary: string;
  photo: string;
  photoAlt: string;
  photoLabel: string;
  icon: string;
  secondaryCta: string;
  programHeader: { badge: string; title: string; description: string };
  programs: ProgramFeature[];
  finalCta: string;
  seoTitle: string;
  seoDescription: string;
  developmentNote?: string;
}
