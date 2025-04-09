import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Web Development',
    id: 'tier-web',
    href: '#',
    price: { monthly: '$19', annually: '$199' },
    description: 'Full-stack web solutions tailored for performance and scalability.',
    features: [
      'Responsive Design',
      'API Integration',
      'SEO Optimization',
      '48-hour support response time',
    ],
    projects: [
      {
        name: 'Freelancer Dashboard',
        description: 'A custom dashboard to manage client projects and invoices.',
        tech: 'React, Tailwind CSS, Node.js',
      },
      {
        name: 'Portfolio Site',
        description: 'Personal portfolio with blog and contact features.',
        tech: 'Next.js, Vercel, Markdown',
      },
    ],
    mostPopular: true,
  },
  {
    name: 'Desktop Application',
    id: 'tier-desktop',
    href: '#',
    price: { monthly: '$29', annually: '$299' },
    description: 'Cross-platform desktop apps using modern tech.',
    features: [
      'Electron.js setup',
      'Native-feel UI',
      'Database storage',
      '24-hour support response time',
    ],
    projects: [
      {
        name: 'Inventory Manager',
        description: 'Offline desktop tool for managing small business inventory.',
        tech: 'Electron, SQLite, React',
      },
      {
        name: 'Markdown Note App',
        description: 'Note-taking desktop app with local persistence.',
        tech: 'Electron, TypeScript',
      },
    ],
    mostPopular: true,
  },
  {
    name: 'Android Application',
    id: 'tier-android',
    href: '#',
    price: { monthly: '$59', annually: '$599' },
    description: 'Native and cross-platform mobile solutions.',
    features: [
      'Push Notifications',
      'Cloud Sync',
      'In-App Purchases',
      '1-hour dedicated support',
    ],
    projects: [
      {
        name: 'Fitness Tracker App',
        description: 'Tracks workouts, goals, and progress with local storage.',
        tech: 'React Native, Firebase',
      },
      {
        name: 'Expense Tracker',
        description: 'Budgeting app with monthly report generation.',
        tech: 'Flutter, SQLite',
      },
    ],
    mostPopular: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicesSection() {
  return (
    <div className="bg-black pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className=" text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Services
          </p>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10 transform transition duration-300 ease-in-out hover:scale-105 hover:ring-indigo-400'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg/8 font-semibold text-white">
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm/6 text-gray-300">{tier.description}</p>

              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-sm font-semibold text-white mb-2">Sample Projects:</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {tier.projects.map((project) => (
                    <li key={project.name}>
                      <p className="font-medium text-white">{project.name}</p>
                      <p className="text-gray-400">{project.description}</p>
                      <p className="text-gray-500 text-xs italic">{project.tech}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
