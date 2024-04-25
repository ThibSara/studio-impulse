import { Container } from '@/components/Container'

const stats = [
  { label: 'Projects completed', value: '500+' },
  { label: 'Years of experience', value: '10+' },
  { label: 'Satisfied clients', value: '200+' },
]

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-5xl font-medium tracking-tight text-gray-900 sm:text-5xl">Who we are</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                At impulse, we are a Paris-based web design agency passionate about creating stunning websites, user experiences, and interfaces. We believe in functional design that puts the user first, delivering intuitive and fluid interactions.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  With over a decade of experience in interaction design, we excel at crafting tools and websites that are fast, performant, and tailored to our clients&apos; needs. Our team of skilled designers and developers work closely with clients to understand their goals and deliver solutions that exceed expectations.
                </p>
                <p className="mt-10">
                  We take pride in our ability to create seamless user experiences that engage and delight. By leveraging the latest technologies and design trends, we ensure that every project we undertake is visually stunning, highly functional, and optimized for performance.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
