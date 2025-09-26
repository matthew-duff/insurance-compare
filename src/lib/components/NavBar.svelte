<script lang="ts">
  import { page } from '$app/stores';
  import { Bike, Briefcase, Car, FileText, Home, Menu, User, X } from 'lucide-svelte';

  type IconComponent = typeof Home;

  type NavItem = {
    name: string;
    href: string;
    icon: IconComponent;
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Car Insurance', href: '/policies/car-insurance', icon: Car },
    { name: 'Boat Insurance', href: '/policies/boat-insurance', icon: Briefcase },
    { name: 'Motorcycle Insurance', href: '/policies/motorcycle-insurance', icon: Bike },
    { name: 'About', href: '/about', icon: FileText }
  ];

  let isMobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  let currentPath = $derived($page.url.pathname);
</script>

<nav class="bg-primary-dark shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-white font-bold text-xl">
          InsurPick
        </a>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          {#each navItems as item}
            <a
              href={item.href}
              class="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                {currentPath === item.href
                ? 'bg-primary text-white'
                : 'text-neutral-offwhite hover:bg-primary-dark hover:text-white'}"
            >
              {#if item.icon === Home}
                <Home class="h-5 w-5 mr-2" />
              {:else if item.icon === Car}
                <Car class="h-5 w-5 mr-2" />
              {:else if item.icon === User}
                <User class="h-5 w-5 mr-2" />
              {:else if item.icon === Briefcase}
                <Briefcase class="h-5 w-5 mr-2" />
              {:else if item.icon === Bike}
                <Bike class="h-5 w-5 mr-2" />
              {:else if item.icon === FileText}
                <FileText class="h-5 w-5 mr-2" />
              {/if}
              {item.name}
            </a>
          {/each}
        </div>
      </div>
      <div class="-mr-2 flex md:hidden">
        <button
          type="button"
          onclick={toggleMobileMenu}
          class="bg-primary-dark inline-flex items-center justify-center p-2 rounded-md text-neutral-offwhite hover:text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          {#if isMobileMenuOpen}
            <X class="block h-6 w-6" aria-hidden="true" />
          {:else}
            <Menu class="block h-6 w-6" aria-hidden="true" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if isMobileMenuOpen}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each navItems as item}
          <a
            href={item.href}
            class="flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ease-in-out
              {currentPath === item.href
              ? 'bg-primary text-white'
              : 'text-neutral-offwhite hover:bg-primary-dark hover:text-white'}"
            onclick={() => isMobileMenuOpen = false}
          >
            {#if item.icon === Home}
              <Home class="h-5 w-5 mr-3" />
            {:else if item.icon === Car}
              <Car class="h-5 w-5 mr-3" />
            {:else if item.icon === User}
              <User class="h-5 w-5 mr-3" />
            {:else if item.icon === Briefcase}
              <Briefcase class="h-5 w-5 mr-3" />
            {:else if item.icon === Bike}
              <Bike class="h-5 w-5 mr-3" />
            {:else if item.icon === FileText}
              <FileText class="h-5 w-5 mr-3" />
            {/if}
            {item.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

