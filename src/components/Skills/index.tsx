import { SkillsProps } from "./interfaces";
import Badge from "../Badge";
import { useTranslations } from "next-intl";

export default function Skills({ skills, title, onShowMore, showMoreButton }: SkillsProps) {
  const t = useTranslations('HomePage');

  return (
    <section className="max-w-3xl mt-4 mb-4">
      <strong className='inline-block uppercase mb-2'>{title}:</strong>

      <p className="flex justify-center items-center gap-2 flex-wrap" itemProp="knowsAbout">
        {skills.map(({ icon, alt }) => <Badge
          alt={alt || ""}
          src={icon}
        />)}

        {!showMoreButton && onShowMore && <span onClick={onShowMore} className='text-sm underline cursor-pointer'>{t('seeMoreLabel')}...</span>}
      </p>
    </section>
  )
}
