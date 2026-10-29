export type ExternalLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  education: string;
  /** Fields of work, shown as chips under the role. */
  areas: readonly string[];
  /** Opening sentence, with one phrase underlined in the hero. */
  headline: { before: string; highlight: string; after: string };
  opening: string;
  context: string;
  email: string;
  linkedin: ExternalLink;
  github: ExternalLink;
  footnote: string;
};

/** A result shown as "before → after". */
export type Delta = {
  before: string;
  value: string;
  label: string;
  projectId: string;
  projectLabel: string;
};

export type NavItem = {
  href: `#${string}`;
  label: string;
  /** Sections that light up this item while they cross the middle of the screen. */
  sectionIds: readonly string[];
};

export type FlowStep = {
  title: string;
  detail: string;
  highlight?: boolean;
};

type MediaBase = {
  id: string;
  /** Short name shown before the caption, e.g. "Copiloto". */
  label: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export type VideoSource = {
  src: string;
  type: "video/mp4" | "video/webm";
};

/** Muted video that loops while visible, with a pause button. */
export type VideoMedia = MediaBase & {
  kind: "video";
  sources: readonly VideoSource[];
  poster: string;
};

export type ImageMedia = MediaBase & {
  kind: "image";
  src: string;
};

export type Media = VideoMedia | ImageMedia;

/** Inline text; `{ strong }` pieces are shown in bold. */
export type RichText = string | readonly (string | { strong: string })[];

/** A bullet; the optional lead is shown in bold before the text ("Detecção: ..."). */
export type Bullet = {
  lead?: string;
  text: RichText;
};

export type DetailBlock = {
  heading: string;
  items: readonly Bullet[];
};

/** Plain-language steps ("Mede", "Analisa", "Propõe") shown before the technical diagram. */
export type HowItWorks = {
  heading: string;
  steps: readonly { title: string; text: string }[];
};

export type FeaturedProject = {
  id: string;
  name: string;
  subtitle: string;
  status: string;
  /** What the project is and what it changed; the first paragraph reads as the lead. */
  summary: readonly [string, ...string[]];
  /** One item renders as a single player, several as a gallery. */
  showcase: readonly Media[];
  showcaseNote?: string;
  howItWorks?: HowItWorks;
  flow: readonly FlowStep[];
  details: readonly [DetailBlock, ...DetailBlock[]];
  /** Extra media placed beside the detail bullets. */
  aside?: Media;
  /** One line of size figures, e.g. "270 rotas de API · 73 tabelas". */
  figures?: string;
  stack: string;
};

export type SideProject = {
  tag: string;
  title: string;
  description: string;
  result: string;
  stack: string;
};

export type OpenSourceProject = {
  id: string;
  title: string;
  repo: ExternalLink;
  summary: string;
  flow: readonly FlowStep[];
  stack: string;
};

export type ResearchItem = {
  tag: string;
  title: string;
  description: string;
  result: string;
  metric?: { value: string; label: string };
};

export type Experience = {
  period: string;
  role: string;
  org: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: readonly string[];
};

export type Certification = {
  issuer: string;
  title: string;
  href: string;
  meta?: string;
  thumbnail?: {
    src: string;
    width: number;
    height: number;
    /** Documents fill the frame; badges sit smaller in the middle. */
    shape: "document" | "badge";
  };
};
