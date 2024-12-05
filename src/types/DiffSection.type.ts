import { DiffType } from "../enum/DiffType.enum";
import { Section } from "./Section.type";

export type DiffSection = Section & { type: DiffType; siblings?: number };
