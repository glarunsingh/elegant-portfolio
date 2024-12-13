import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { ExperienceEntry, EducationEntry, PublicationEntry, SkillsEntry } from '../components/curriculumEntry';
import { Link } from 'gatsby';
import * as icons from 'react-icons/ri';
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12">
        {/* Photo and social links */}
        <div className="flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24">
          {/* Photo */}
          <StaticImage
            src="../images/avatar.png"
            alt="Me"
            className="rounded-full h-64 w-64 object-cover mt-4"
          />
          {/* Social links */}
          <div className='flex flex-row mx-auto place-items-center space-x-8 overflow-visible'>
            <Link href="https://www.linkedin.com/in/glarunsingh/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="LinkedIn">
              <icons.RiLinkedinBoxFill size={32}></icons.RiLinkedinBoxFill>
            </Link>
            <Link href="https://github.com/glarunsingh" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Github">
              <icons.RiGithubFill size={32}></icons.RiGithubFill>
            </Link>
            <Link href="https://www.x.com/arunsinghg" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label="Twitter">
              <icons.RiTwitterFill size={32}></icons.RiTwitterFill>
            </Link>
            {/* <Link href="https://scholar.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='Google Scholar'>
              <i className="ai ai-google-scholar ai-size-32"></i>
            </Link> */}
            <Link href="https://drive.google.com/" target='_blank' className='hover:scale-125 cursor-pointer transition ease-in-out duration-300' aria-label='CV'>
              <i className="ai ai-cv ai-size-32"></i>
            </Link>
          </div>

          {/* Quick links */}
          <div className='hidden lg:flex flex-col w-1/3 items-start'>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#experience")} className='peer group-hover:underline'>Experience</button>
            </div>
            <div className='flex flex-row place-items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#education")} className='peer group-hover:underline'>Education</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Certification</button>
            </div>
            <div className='flex flex-row items-center group'>
                <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
                <button onClick={() => scrollTo("#publications")} className='peer hover:underline'>Skills</button>
            </div>
            <div className='flex flex-row items-center group'>
              <hr className='w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300'></hr>
              <button onClick={() => scrollTo("#contact")} className='peer hover:underline'>Contact</button>
            </div>
          </div>
        </div>

        {/* Text and content */}
        <div className="container flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Hi, I'm Arun Singh G</h1>

          <p className="mb-4">
          I am a Generative AI developer with a robust background in Robotic Process Automation and Software Testing. 
          I hold a Master’s degree in Computer Applications from Anna University and a Bachelor's degree from Vellore 
          Institute of Technology.
          </p>
          <p className="mb-4">
          Currently, I am a member of the GenAI CoE and R&D team. My role involves deeply understanding business problems, 
          researching the latest technologies in the market, conducting Proof of Concepts, and transforming these POCs 
          into business proposals that secure contracts from clients. I am continually learning about the latest RAG techniques, 
          Multi-Agent frameworks, and LLM models to develop the best possible solutions for various challenges.
          </p>
          <p className="mb-4">
          Beyond my technical expertise, I was born and raised in Tamil Nadu. In my leisure time, I enjoy a good game of badminton 
          and cricket with friends, reading self-help books and non-fictional stories. I am also an active trader and investor, 
          constantly learning about the stock market and global macroeconomic trends. I love traveling the world to broaden my
           understanding of different cultures, and I am working on improving my photography skills, though I have not quite mastered
            it yet!
          </p>

          {/* Timeline */}
          <section>
            <div id="experience" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Experience</h1>
            <ExperienceEntry
              date={'Sept\u00a02019 - Present'}
              title={'Generative AI Developer'}
              company={'Cognizant Technology Solutions, Chennai'}
              description={'Led the development and deployment of advanced Generative AI solutions using LangChain and Azure OpenAI models, and the Microsoft Autogen framework, driving innovation and digital transformation in AI applications'}
              tags={['Python', 'LLM', 'RAG', 'MultiAgent Framework']}
            />
            <ExperienceEntry
              date={'Jan\u00a02021 - Dec\u00a02021'}
              title={'Job 2'}
              company={'Company 2'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              tags={['Skill 1', 'Skill 2', 'Skill 3']}
            />
            <ExperienceEntry
              date={'Jan\u00a02020 - Dec\u00a02020'}
              title={'Job 1'}
              company={'Company 1'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              tags={['Skill 1', 'Skill 2', 'Skill 3']}
            />
          </section>

          <section>
            <div id="education" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Education</h1>
            <EducationEntry
              date={'2021 - 2022'}
              university={'University 2'}
              degree={'Degree 2'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              tags={['Subject 1', 'Subject 2', 'Subject 3']}
            />
            <EducationEntry
              date={'2020 - 2021'}
              university={'University 1'}
              degree={'Degree 1'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              tags={['Subject 1', 'Subject 2', 'Subject 3']}
            />
          </section>

          <section>
            <div id="publications" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Publications</h1>
            <PublicationEntry
              date={'2023'}
              title={'Publication 2'}
              authors={'Author 1, Author 2'}
              journal={'Journal 2'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            />
            <PublicationEntry
              date={'2022'}
              title={'Publication 1'}
              authors={'Author 1, Author 2, Author 3'}
              journal={'Journal 1'}
              tags={['Keyword 1', 'Keyword 2', 'Keyword 3']}
            />
          </section>

          <section id="contact">
            <div id="contact" className='-translate-y-16'/>
            <h1 className='text-2xl py-4 font-medium'>Contact</h1>
            <p>
              If you are interested in discussing, please feel free to reach out ! You can contact me at the following email adress: 
            </p>    
            <p>
              contact [dot] me @ email [dot] com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage