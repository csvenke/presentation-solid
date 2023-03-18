import { ConclusionSlide } from "./slides/ConclusionSlide";
import {
  DemoBusinessRulesSlide,
  GraphqlAPIDemoSlide,
  RemixAppDemoSlide,
  RestApiDemoSlide,
} from "./slides/DemoSlide";
import { DependencyInversionSlide } from "./slides/DependencyInversionSlide";
import { InterfaceSegregationSlide } from "./slides/InterfaceSegregationSlide";
import { IntroductionSlide } from "./slides/IntroductionSlide";
import { LiskovSubstitutionSlide } from "./slides/LiskovSubstitutionSlide";
import { OpenClosedPrincipleSlide } from "./slides/OpenClosedPrincipleSlide";
import { SingleResponsiblitySlide } from "./slides/SingleResponsiblitySlide";
import { TableOfContentsSlide } from "./slides/TableOfContentsSlide";
import { TitleScreenSlide } from "./slides/TitleScreenSlide";

export const ALL_SLIDES = [
  TitleScreenSlide,
  TableOfContentsSlide,
  IntroductionSlide,
  SingleResponsiblitySlide,
  OpenClosedPrincipleSlide,
  LiskovSubstitutionSlide,
  InterfaceSegregationSlide,
  DependencyInversionSlide,
  DemoBusinessRulesSlide,
  GraphqlAPIDemoSlide,
  RestApiDemoSlide,
  RemixAppDemoSlide,
  ConclusionSlide,
];
