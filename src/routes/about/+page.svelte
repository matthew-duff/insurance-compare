<script lang="ts">
  import { ShieldCheck, Users, Lightbulb } from 'lucide-svelte';
</script>

<div class="bg-dark-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto">
    <header class="text-center mb-12">
      <h1 class="text-5xl font-bold text-primary-dark tracking-tight">
        About InsurPick
      </h1>
      <p class="mt-4 text-xl text-primary-dark">
        Your Trusted Partner in Navigating the World of Insurance.
      </p>
      <img class="mt-4" src="src/assets/umbrella.jpg" alt="Umbrella">
    </header>

    <section class="bg-white shadow-xl rounded-lg p-8 mb-12">
      <h2 class="text-3xl font-semibold text-primary-dark mb-6">Our Story</h2>
      <div class="space-y-6 text-lg text-dark-black">
        <p>
          Welcome to InsurPick! We founded our company with a simple mission: to demystify the
          often complex world of insurance. We recognized that finding the right coverage can be a
          daunting task, filled with jargon and uncertainty. That's why we're dedicated to
          providing a clear, straightforward, and supportive experience for everyone.
        </p>
        <p>
          Our platform is built on the principle of empowerment. We strive to equip you with the
          knowledge and tools necessary to confidently select insurance policies—be it for your car,
          boat, home, or motorcycle—that genuinely protect what you value most.
        </p>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold text-primary-dark mb-8 text-center">Our Core Values</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div class="p-3 bg-primary-light rounded-full mb-4">
            <ShieldCheck class="h-10 w-10 text-primary" />
          </div>
          <h3 class="text-xl font-medium text-primary-dark mb-2">Transparency</h3>
          <p class="text-primary-dark">
            We believe in clear, honest communication. No hidden fees, no confusing terms—just
            straightforward advice.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div class="p-3 bg-primary-light rounded-full mb-4">
            <Users class="h-10 w-10 text-primary" />
          </div>
          <h3 class="text-xl font-medium text-primary-dark mb-2">Customer First</h3>
          <p class="text-primary-dark">
            Your needs are our priority. We're committed to finding the best solutions for you and
            providing exceptional support.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div class="p-3 bg-primary-light rounded-full mb-4">
            <Lightbulb class="h-10 w-10 text-primary" />
          </div>
          <h3 class="text-xl font-medium text-primary-dark mb-2">Innovation</h3>
          <p class="text-primary-dark">
            We continuously strive to improve our platform and services, making insurance simpler
            and more accessible for everyone.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white shadow-xl rounded-lg p-8">
      <h2 class="text-3xl font-semibold text-primary-dark mb-6">Our Commitment</h2>
      <div class="space-y-6 text-lg text-dark-black">
        <p>
          At InsurPick, integrity and exceptional customer service are the cornerstones of our
          business. Our dedicated team of experienced professionals is here to guide you at every
          juncture, from deciphering coverage details to managing your policy effectively.
        </p>
        <p>
          Thank you for considering InsurPick. We are eager to assist you in securing not just
          insurance, but also peace of mind.
        </p>
      </div>
    </section>
  </div>
</div>
