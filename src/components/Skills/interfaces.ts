export interface SkillsProps {
  title: string,
  skills: { alt?: string, icon: string }[],
  onShowMore?: VoidFunction;
  showMoreButton?: boolean
}