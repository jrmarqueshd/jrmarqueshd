'use client'

import Image from 'next/image';
import { RiGithubLine } from 'react-icons/ri';
import { FiLinkedin, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

import Background from '@/components/Background';

import profilePic from '../../public/me.png';
import { useState } from 'react';
import I18nButton from '@/components/I18nButton';
import Skills from '@/components/Skills';

export default function Home() {
	const [showMoreSkills, setShowMoreSkills] = useState(false)
	const t = useTranslations('HomePage');

	return (
		<div className="relative">
			<Background />


			<div className="flex justify-center items-center min-h-screen px-1 absolute top-0 bottom-0 right-0 left-0 z-100">
				<I18nButton />

				<main
					itemScope
					itemType="https://schema.org/Person"
					className="flex justify-center items-center flex-col text-center text-gray-200"
				>
					<div className="hidden-element">
						<span itemProp="name">Gilmar dos Santos Marques Junior</span><br />
						<span itemProp="nationality">Brasileiro</span><br />
						<span itemProp="workLocation">Brasil</span><br />
						<span itemProp="gender">Homem</span><br />
						<span itemProp="worksFor">CWI | Estratégia e Software</span><br />
						<span itemProp="worksFor">WeJam – your digital goals</span><br />
						<span itemProp="worksFor">Labi Exames – Melhores preços em exames laboratoriais de qualidade</span><br />
						<span itemProp="alumniOf">Formado pela Rocketseat · Evolua rápido como a tecnologia.</span><br />
						<span itemProp="alumniOf">Anhaguera Educacional de São Bernardo do Campo</span><br />
					</div>

					<Image
						itemProp="image"
						className="rounded-full h-40 w-40"
						src={profilePic}
						alt="Foto de Junior Marques, usando óculos preto e sorrindo."
					/>

					<section className="mb-2 max-w-screen-md">
						<h1 className="text-3xl mt-4 mb-1">
							<span itemProp="givenName">Junior</span> <span itemProp="familyName">Marques</span>
						</h1>

						<strong className="block text-base mb-4 uppercase" itemProp="jobTitle">
							{t('jobTitle')}
						</strong>

						<p className="text-sm mt-0">
							{t('introducing')}
						</p>

						<p className="text-sm mt-0">
							{t('introducingComplement')}
						</p>
					</section>

					<Skills
						title={t('skillsTitle')}
						onShowMore={() => setShowMoreSkills(true)}
						showMoreButton={showMoreSkills}
						skills={[
							{
								alt: "React",
								icon: "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
							},
							{
								alt: "TypeScript",
								icon: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
							},
							{
								alt: "html5",
								icon: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
							},
							{
								alt: "CSS3",
								icon: "https://img.shields.io/badge/-CSS3-2965f1?style=flat-square&logo=css3&logoColor=white"
							},
							{
								alt: "Sass",
								icon: "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
							},
							{
								alt: "Styled Components",
								icon: "https://img.shields.io/badge/-Styled_Components-db7093?style=flat-square&logo=styled-components&logoColor=white"
							},
							{
								alt: "Redux",
								icon: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white"
							},
							{
								alt: "React Redux",
								icon: "https://img.shields.io/badge/-React_Redux-764abc?style=flat-square&logo=react&logoColor=white"
							},
							{
								alt: "Rest API",
								icon: "https://img.shields.io/badge/-Rest_API-8ab4f8?style=flat-square&logo=javascript&logoColor=white"
							},
							{
								alt: "git",
								icon: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
							},
							{
								alt: "Prettier",
								icon: "https://img.shields.io/badge/-Prettier-c596c7?style=flat-square&logo=prettier&logoColor=white"
							},
							{
								alt: "Eslint",
								icon: "https://img.shields.io/badge/-Eslint-4b32c3?style=flat-square&logo=eslint&logoColor=white"
							},
							{
								alt: "Nodejs",
								icon: "https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
							},
							{
								alt: "Playwright",
								icon: "https://img.shields.io/badge/-Playwright-04c38e?style=flat-square&logo=airplayvideo&logoColor=white"
							},
							{
								alt: "BiomeJS",
								icon: "https://img.shields.io/badge/-BiomeJS-60a5fa?style=flat-square&logo=biome&logoColor=white"
							},
							{
								alt: "Tailwind",
								icon: "https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"
							}
						]}
					/>

					{showMoreSkills && (
						<Skills
							title={t('moreSkillsTitle')}
							skills={[
								{
									alt: "PHP",
									icon: "https://img.shields.io/badge/-PHP-blue?style=flat-square&logo=php&logoColor=white"
								},
								{
									alt: "Bitbucket Pipelines",
									icon: "https://img.shields.io/badge/-Bitbucket_Pipelines-0357D1?style=flat-square&logo=bitbucket&logoColor=white"
								},
								{
									alt: "Jest",
									icon: "https://img.shields.io/badge/-Jest-df162b?style=flat-square&logo=jest&logoColor=white"
								},
								{
									alt: "Insomnia",
									icon: "https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white"
								},
								{
									alt: "Context API",
									icon: "https://img.shields.io/badge/-Context_API-5849be?style=flat-square&logo=react&logoColor=white"
								},
								{
									alt: "React Native",
									icon: "https://img.shields.io/badge/-React_Native-45b8d8?style=flat-square&logo=react&logoColor=white"
								},
								{
									alt: "Gulp",
									icon: "https://img.shields.io/badge/-Gulp-cf4647?style=flat-square&logo=gulp&logoColor=white"
								},
								{
									alt: "ExpressJS",
									icon: "https://img.shields.io/badge/-ExpressJS-000000?style=flat-square&logo=express&logoColor=white"
								},
								{
									alt: "Cypress",
									icon: "https://img.shields.io/badge/-Cypress-04c38e?style=flat-square&logo=cypress&logoColor=white"
								},
								{
									alt: "Storybook",
									icon: "https://img.shields.io/badge/-Storybook-CC6699?style=flat-square&logo=storybook&logoColor=white"
								}
							]}
						/>
					)}


					<section className="max-w-3xl mt-8">
						<strong>{t('socialsTitle')}:</strong>

						<div className="flex items-center justify-center gap-2">
							<a href="https://github.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<RiGithubLine title="Github" />
							</a>
							<a href="https://www.linkedin.com/in/jrmarqueshd/" target="_blank" rel="noreferrer nooppener">
								<FiLinkedin title="Linkedin" />
							</a>
							<a href="https://www.instagram.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<FiInstagram title="Instagram" />
							</a>
							<a href="https://www.facebook.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<FiFacebook title="Facebook" />
							</a>
							<a itemProp="email" href="mailto:jrmarqueshd@gmail.com" rel="noreferrer nooppener">
								<FiMail title="email" />
							</a>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
