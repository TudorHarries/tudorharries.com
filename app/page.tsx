import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer/hooks';

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.createdAt} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.createdAt), "LLLL d, yyyy")}
      </time>
      <div className="text-sm">
        {post.subtitle}
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.updatedAt), new Date(b.updatedAt)))

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="flex-col mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tudor Harries.</h2>
          <p className="mt-4 text-md leading-8 text-gray-600">
            Versatile, product-focused engineer. Currently at <Link className="text-orange-600 hover:text-orange-700" href="https://kaluza.com/">Kaluza</Link>.
          </p>
          <div className="flex py-4 space-x-4">
            <Link className="h-6 w-6" href="https://www.linkedin.com/in/tudorharries/">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link className="h-6 w-6" href="hhttps://github.com/TudorHarries">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
          </div>
        </div>
        
        <div className="py-8 flex flex-col justify-between lg:flex-row">
          <div className="w-1/2 mr-16">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h3>
            <p className="mt-4">
              Hi there! I&apos;m an enthusiastic engineer who thrives on versatility, with a focus on creating top-notch products. Right now, I&apos;m a Production Engineer at <Link className="text-orange-600 hover:text-orange-700" href="https://kaluza.com/">Kaluza</Link>, proudly contributing to the Reliability squad.
              I&apos;m passionate about full-stack, customer-centric development with experience building both internal tooling and customer-facing products. Additionally, I have experience in automating and administering cloud-based tools, embedding with internal teams in an SRE function, and having a strong involvement in the product side of things.
              <br /> 
              <br />
              Outside of work, I have a strong desire to learn and try new things and as a result I have many interests from baking and gardening to climbing and snowboarding. 
              Over the past few years I have developed a passion for volunteering, whether that&apos;s helping people switch careers into tech or supervising a nightclub welfare service. One of my proudest achievements is raising £2,800 for WWF by climbing Mt. Kilimanjaro, the tallest freestanding mountain in the world, as part of a student team. As a result of these experiences, I am a confident communicator who is capable of working within or leading a team. As important as technical skills are for an engineer, I truly believe that &quot;soft&quot; skills are essential and lead to better results, quicker.
            </p>
          </div>

          <div className="w-1/2 mt-16 lg:mt-0">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">2022-present</time>
                    <h3 className="text-lg font-semibold text-gray-900">Production Engineer @ Kaluza</h3>
                    <p className="mb-4 text-base font-normal text-gray-500">
                      Production Engineer on the Enablement and Release Engineering (formerly Developer Experience) team with work ranging from developing internal tooling and products, cloud administration, automation, and supporting other engineering teams across the platform.
                      <br />
                      <br />
                      Highlights include helping to build Kaluza&apos;s implementation of Backstage.io to improve discoverability and developer productivity; embedding with SRE and core platform teams to increase adoption of tooling and best practices; owning a project to revamp our support process; maintaining and improving legacy services, saving £1000s; writing high-quality documentation and delivering talks and workshops to both technical and non-technical audiences.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">2020-2021</time>
                    <h3 className="text-lg font-semibold text-gray-900">Software Engineer (Year in industry) @ Kaluza</h3>
                    <p className="text-base font-normal text-gray-500">
                      12-month Professional Training Year Placement (Year in Industry) as a software engineer on the Kaluza Home Moves team. This was a full-stack position using technologies such as Node.js, TypeScript (with a heavy functional focus using fp-ts), React, Apache Kafka, AWS, Terraform.
                      <br />
                      <br />
                      Highlights include owning a project from design to delivery in order to enable complex date changes, which involved dependencies across 3 teams and was key to team goals; rewriting asynchronous integration tests to be deterministic and up to 50% quicker; spotted quick win and reworked &quot;Move Out&quot; page to reduce cancelled direct debits before final statement by 18%; participated in and led both technical and product discussions, represented the team across the platform, and helped interview 4 engineering candidates.
                    </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">2018-2022</time>
                    <h3 className="text-lg font-semibold text-gray-900">Computer Science student @ University of Surrey</h3>
                    <p className="text-base font-normal text-gray-500">
                      First class degree in Computer Science with a year abroad at Brock University in Canada. Final year project  exploring the improvement of history education through a web app and NLP applications.
                    </p>
                </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
