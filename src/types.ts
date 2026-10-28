export type ExternalLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  education: string;
  /** Opening sentence, with one phrase underlined in the hero. */
  headline: { before: string; highlight: string; after: string };
  opening: string;
  context: string;
  availabilityTag: string;
  availability: string;
  email: string;
  linkedin: ExternalLink;
  github: ExternalLink;
  sourceCode: ExternalLink;
  footnote: string;
};

/** A result shown as "before → after", or as a single value when there is no baseline. */
export type Metric = {
  before?: string;
  value: string;
  label: string;
};

export type Delta = Metric & {
  before: string;
  projectId: string;
  projectLabel: string;
};

export type Sticker = {
  kicker: string;
  text: string;
  tone: "paper" | "accent" | "ink";
  rotation: number;
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

export type Flow = {
  caption: string;
  steps: readonly FlowStep[];
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

/** Video with controls, played on demand. */
export type VideoMedia = MediaBase & {
  kind: "video";
  sources: readonly VideoSource[];
  poster: string;
};

/** Short muted clip that loops while visible (converted from a GIF). */
export type LoopMedia = MediaBase & {
  kind: "loop";
  src: string;
  poster: string;
};

export type ImageMedia = MediaBase & {
  kind: "image";
  src: string;
};

export type Media = VideoMedia | LoopMedia | ImageMedia;

export type DetailBlock =
  | { kind: "text"; heading: string; body: string }
  | { kind: "list"; heading: string; items: readonly string[] };

export type StatGroup = {
  heading: string;
  items: readonly Metric[];
};

export type FeaturedProject = {
  id: string;
  name: string;
  subtitle: string;
  status: string;
  facts: readonly Metric[];
  summary: string;
  /** One item renders as a single player, several as a gallery. */
  showcase: readonly Media[];
  showcaseNote?: string;
  flow: Flow;
  details: readonly [DetailBlock, ...DetailBlock[]];
  /** Extra media placed under the first detail block. */
  aside?: Media;
  stats?: StatGroup;
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
  flow: Flow;
  stack: string;
};

export type ResearchItem = {
  tag: string;
  title: string;
  description: string;
  result: string;
  metric?: Metric;
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
