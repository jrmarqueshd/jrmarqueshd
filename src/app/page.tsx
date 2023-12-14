import Image from 'next/image';
import { RiGithubLine } from 'react-icons/ri';
import { FiLinkedin, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

import Background from '@/components/Background';

import profilePic from '../../public/me.png';
import Badge from '@/components/Badge';

export default function Home() {
	return (
		<div className="relative">
			<Background />

			<div className="flex justify-center items-center min-h-screen px-1 absolute top-0 bottom-0 right-0 left-0 z-100">
				<main
					itemScope
					itemType="https://schema.org/Person"
					className="flex justify-center items-center flex-col text-center text-gray-200"
				>
					<div className="hidden-element">
						<span itemProp="name">Gilmar dos Santos Marques Junior</span>
						<span itemProp="nationality">Brasileiro</span>
						<span itemProp="workLocation">Brasil</span>
						<span itemProp="gender">Homem</span>
						<span itemProp="worksFor">CWI | Estratégia e Software</span>
						<span itemProp="worksFor">WeJam – your digital goals</span>
						<span itemProp="worksFor">Labi Exames – Melhores preços em exames laboratoriais de qualidade</span>
						<span itemProp="alumniOf">Formado pela Rocketseat · Evolua rápido como a tecnologia.</span>
						<span itemProp="alumniOf">Anhaguera Educacional de São Bernardo do Campo</span>
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
							Desenvolvedor Front-End Senior
						</strong>

						<p className="text-sm mt-0">
							Sou amante de tecnologia, e adoro estudar coisas novas que surgem no ecossistema de desenvolvimento.
						</p>

						<p className="text-sm mt-0">
							Também adoro temas que envolvam: música, animes e coisas da infância, vídeo game, novidades sobre
							programação.
						</p>
					</section>

					<section className="max-w-3xl mt-2">
						<strong>Onde mais me destaco:</strong>

						<p className="flex justify-center items-center gap-2 flex-wrap" itemProp="knowsAbout">
							<Badge
								alt="React"
								src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
							/>
							<Badge
								alt="TypeScript"
								src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
							/>
							<Badge
								alt="html5"
								src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
							/>
							<Badge
								alt="CSS3"
								src="https://img.shields.io/badge/-CSS3-2965f1?style=flat-square&logo=css3&logoColor=white"
							/>
							<Badge
								alt="Sass"
								src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
							/>
							<Badge
								alt="Styled Components"
								src="https://img.shields.io/badge/-Styled_Components-db7093?style=flat-square&logo=styled-components&logoColor=white"
							/>
							<Badge
								alt="Docker"
								src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white"
							/>
							<Badge
								alt="Bitbucket Pipelines"
								src="https://img.shields.io/badge/-Bitbucket_Pipelines-0357D1?style=flat-square&logo=bitbucket&logoColor=white"
							/>
							<Badge
								alt="Insomnia"
								src="https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white"
							/>
							<Badge
								alt="Redux"
								src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white"
							/>
							<Badge
								alt="Context API"
								src="https://img.shields.io/badge/-Context_API-5849be?style=flat-square&logo=react&logoColor=white"
							/>
							<Badge
								alt="React Redux"
								src="https://img.shields.io/badge/-React_Redux-764abc?style=flat-square&logo=react&logoColor=white"
							/>
							<Badge
								alt="Rest API"
								src="https://img.shields.io/badge/-Rest_API-8ab4f8?style=flat-square&logo=javascript&logoColor=white"
							/>
							<Badge
								alt="git"
								src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
							/>
							<Badge
								alt="React Native"
								src="https://img.shields.io/badge/-React_Native-45b8d8?style=flat-square&logo=react&logoColor=white"
							/>
							<Badge
								alt="Gulp"
								src="https://img.shields.io/badge/-Gulp-cf4647?style=flat-square&logo=gulp&logoColor=white"
							/>
							<Badge
								alt="Prettier"
								src="https://img.shields.io/badge/-Prettier-c596c7?style=flat-square&logo=prettier&logoColor=white"
							/>
							<Badge
								alt="Eslint"
								src="https://img.shields.io/badge/-Eslint-4b32c3?style=flat-square&logo=eslint&logoColor=white"
							/>
							<Badge
								alt="Nodejs"
								src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
							/>
							<Badge
								alt="Yarn"
								src="https://img.shields.io/badge/-Yarn-2188b6?style=flat-square&logo=yarn&logoColor=white"
							/>
							<Badge
								alt="Cypress"
								src="https://img.shields.io/badge/-Cypress-04c38e?style=flat-square&logo=cypress&logoColor=white"
							/>
							<Badge
								alt="Jest"
								src="https://img.shields.io/badge/-Jest-df162b?style=flat-square&logo=jest&logoColor=white"
							/>
							<Badge
								alt="Storybook"
								src="https://img.shields.io/badge/-Storybook-CC6699?style=flat-square&logo=storybook&logoColor=white"
							/>
						</p>
					</section>

					<section className="max-w-3xl mt-8">
						<strong>Onde me encontrar:</strong>

						<div className="flex items-center justify-center gap-2">
							<a href="https://github.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<RiGithubLine />
							</a>
							<a href="https://www.linkedin.com/in/jrmarqueshd/" target="_blank" rel="noreferrer nooppener">
								<FiLinkedin />
							</a>
							<a href="https://www.facebook.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<FiFacebook />
							</a>
							<a href="https://www.instagram.com/jrmarqueshd" target="_blank" rel="noreferrer nooppener">
								<FiInstagram />
							</a>
							<a itemProp="email" href="mailto:jrmarqueshd@gmail.com" rel="noreferrer nooppener">
								<FiMail />
							</a>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
