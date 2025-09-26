<script lang="ts">
  import AccordionItem from '$lib/components/AccordionItem.svelte';
  import { Bike, Car, ChevronRight, Home as HomeIcon, Shield, Ship } from 'lucide-svelte';

  const insuranceTypes = [
    { name: 'Car Insurance', href: '/policies/car-insurance', icon: Car },
    { name: 'Boat Insurance', href: '/policies/boat-insurance', icon: Ship },
    { name: 'Motorcycle Insurance', href: '/policies/motorcycle-insurance', icon: Bike }
  ];

  const faqs = [
    {
      title: "What types of insurance can I compare?",
      content: "InsurPick allows you to compare a wide range of insurance types, including car, boat, and motorcycle insurance. We are continuously working to add more options to meet all your needs."
    },
    {
      title: "How does InsurPick help me find the best policy?",
      content: "We provide a simple, user-friendly platform to compare key features, coverage options, and prices from various top-rated insurance providers. Our goal is to give you clear, unbiased information so you can make an informed decision."
    },
    {
      title: "Is my personal information secure?",
      content: "Absolutely. We prioritize your privacy and security. We use industry-standard encryption and security protocols to protect your personal information. We only share your data with providers if you choose to proceed with a quote."
    },
    {
      title: "How much does it cost to use InsurPick?",
      content: "Using InsurPick to compare insurance policies is completely free for you. We may receive a commission from insurance providers if you purchase a policy through our platform, but this does not affect the price you pay or our impartiality."
    }
  ];
</script>

<div class="bg-neutral-offwhite">
  <!-- Hero Section -->
  <section class="bg-primary-dark text-white py-20 lg:py-32">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-4xl lg:text-6xl font-bold mb-6">
        Find Your Perfect Insurance, Simplified.
      </h1>
      <p class="text-lg lg:text-xl mb-10 text-dark-offwhite max-w-2xl mx-auto">
        At InsurPick, we make comparing and choosing insurance straightforward and stress-free. Get the right coverage for what matters most to you.
      </p>
      <a
        href="/about" 
        class="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center"
      >
        Learn More About Us <ChevronRight class="ml-2 h-5 w-5" />
      </a>
    </div>
  </section>

  <!-- Insurance Types Section -->
  <section class="py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-primary-dark mb-12 lg:mb-16">
        Coverage Tailored To Your Needs
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-black">
        {#each insuranceTypes as item}
          <a href={item.href} class="block bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
            <div class="flex flex-col items-center text-center">
              <div class="p-4 bg-primary-light rounded-full mb-6 inline-block">
                {#if item.icon === Car}
                  <Car class="h-10 w-10 text-primary" />
                {:else if item.icon === Ship}
                  <Ship class="h-10 w-10 text-primary" />
                {:else if item.icon === HomeIcon}
                  <HomeIcon class="h-10 w-10 text-primary" />
                {:else if item.icon === Bike}
                  <Bike class="h-10 w-10 text-primary" />
                {/if}
              </div>
              <h3 class="text-xl font-semibold text-primary-dark mb-2">{item.name}</h3>
              <p class="text-dark-grey mb-4">Explore tailored plans for your {item.name.toLowerCase().replace(' insurance', '')}.</p>
              <span class="text-primary font-medium hover:underline flex items-center">
                View Options <ChevronRight class="ml-1 h-4 w-4" />
              </span>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="bg-white py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-primary-dark mb-12 lg:mb-16">
        Why Choose InsurPick?
      </h2>
      <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div class="text-center p-6">
          <div class="p-4 bg-primary-light rounded-full mb-5 inline-block">
            <Shield class="h-10 w-10 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-primary-dark mb-2">Trusted Advice</h3>
          <p class="text-dark-grey">
            Clear, unbiased information to help you make confident decisions.
          </p>
        </div>
        <div class="text-center p-6">
           <div class="p-4 bg-primary-light rounded-full mb-5 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10 text-primary">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-primary-dark mb-2">Simple Process</h3>
          <p class="text-dark-grey">
            Easily compare policies and find the best rates in minutes.
          </p>
        </div>
        <div class="text-center p-6">
          <div class="p-4 bg-primary-light rounded-full mb-5 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-10 w-10 text-primary">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-primary-dark mb-2">Comprehensive Options</h3>
          <p class="text-dark-grey">
            A wide selection of plans from top-rated insurance providers.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="bg-neutral-offwhite py-16 lg:py-24">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl lg:text-4xl font-bold text-center text-primary-dark mb-12 lg:mb-16">
        Frequently Asked Questions
      </h2>
      <div class="max-w-3xl mx-auto">
        {#each faqs as faq}
          <AccordionItem title={faq.title} content={faq.content} />
        {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-16 lg:py-24 bg-primary-dark">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
        Ready to Find Your Ideal Coverage?
      </h2>
      <p class="text-lg lg:text-xl text-white mb-10 max-w-xl mx-auto">
        Take the first step towards peace of mind. Explore our policies today.
      </p>
      <a
        href="/policies/car-insurance" 
        class="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Explore Policies
      </a>
    </div>
  </section>
</div>

