<script lang="ts">
  import { SquareArrowOutUpRight } from 'lucide-svelte';

  interface Product {
    company: string;
    name: string;
    goods?: string;
    liability?: string;
    vehicle?: string;
    other: string;
    discount: string;
    inclusions: string;
    price: string;
  }

  let { product }: { product: Product } = $props();

  const companyName = $derived(product.company);
  const productName = $derived(product.name);
  const goodsCoverage = $derived(product.goods);
  const liabilityCoverage = $derived(product.liability);
  const vehicleCoverage = $derived(product.vehicle);
  const otherCoverage = $derived(product.other);
  const discount = $derived(product.discount);
  const inclusions = $derived(product.inclusions);
  const price = $derived(product.price);
  let logo = $state<string | null>(null);

  // Dynamically load the company logo when the product changes.
  $effect(() => {
    const loadLogo = async () => {
      logo = (await import(`$lib/resources/logos/${product.company}.png`)).default;
    };
    loadLogo();
  });

</script>

<div class="combined-shadow flex flex-col lg:flex-row items-stretch m-4 lg:m-[30px] bg-[#FDFDFD] w-full max-w-screen-lg rounded-3xl lg:w-3/4">
  <div class="grid grid-cols-1 lg:grid-cols-4 flex-grow">
    <!-- Header section -->
    <div class="lg:col-span-full flex justify-stretch items-center border-b">
      <img src={logo} alt={`Logo of ${companyName}`} class="max-h-[64px] p-[1rem] max-w-[128px] px-4 border-r"/>
      <!--<h3 class="text-lg">{companyName}</h3>-->
      <div class="grow flex justify-center font-bold text-xl">{productName}</div>
    </div>
    
    <!-- Main content wrapper -->
    <div class="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 px-4">
      <!-- First row of details -->
      {#if goodsCoverage}
        <div class="pt-4 flex flex-col items-start text-left">
          <h4 class="font-medium text-sm text-secondary">GOODS</h4>
          <p>{goodsCoverage}</p>
        </div>
      {/if}
      {#if liabilityCoverage}
        <div class="pt-4 flex flex-col items-start text-left">
          <h4 class="font-medium text-sm text-secondary">LIABILITY</h4>
          <p >{liabilityCoverage}</p>
        </div>
      {/if}
      {#if vehicleCoverage}
        <div class="pt-4 flex flex-col items-start text-left">
          <h4 class="font-medium text-sm text-secondary">VEHICLE</h4> 
          <p >{vehicleCoverage}</p>
        </div>
      {/if}
      <div class="pt-4 flex flex-col items-start text-left">
        <h4 class="font-medium text-sm text-secondary">OTHER</h4>
        <p >{otherCoverage}</p>
      </div>
      <!-- Discount section -->
      <div class="col-span-full flex py-4">
        <h4 class="mr-2 font-medium text-secondary">Discount:</h4>
        <p class="text-secondary-dark">{discount}</p>
      </div>

      <!-- Second row of details -->
      <div class="hidden col-span-full lg:flex py-4 border-t">
        <div class="flex-grow flex flex-row gap-4 hover-link">
          <a href="/policies/private-health" class="flex flex-row">
            <h4 class="font-medium text-lg text-primary px-2">Private Health </h4>
            <SquareArrowOutUpRight class="text-primary"/>
          </a>
        </div>
        <div class="flex-grow flex flex-row gap-4 hover-link">
          <a href="/policies/legal-insurance" class="flex flex-row">
            <h4 class="font-medium text-primary px-2">Legal Insurance</h4>
            <SquareArrowOutUpRight class="text-primary"/>
          </a>
        </div>
        <div class="flex-grow flex flex-row gap-4 hover-link">
          <a href="/policies/roadside-assist" class="flex flex-row">
            <h4 class="font-medium text-lg text-primary px-2">Roadside Assist </h4>
            <SquareArrowOutUpRight class="text-primary"/>
          </a>
        </div>
      </div>
    </div>

    <!-- Inclusions section -->
    <div class="col-span-full lg:col-span-1 lg:row-start-2 lg:row-span-2 flex flex-col py-3 lg:pb-0 bg-neutral-offwhite lg:rounded-bl-3xl px-4">
      <h4 class="mb-2 font-medium">Inclusions</h4>
      <div class="grid grid-cols-2 lg:grid-cols-1 gap-4">
        <div>
          <h4 class="font-medium text-sm text-secondary">PARTIES</h4>
          <p >{inclusions}</p>
        </div>
        <div>
          <h4 class="font-medium text-sm text-secondary">COVERAGE</h4>
          <p >{inclusions}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="price_box lg:rounded-r-3xl max-lg:rounded-b-3xl bg-primary-light flex flex-col items-center justify-center px-6 py-2 flex-shrink-0 flex-grow-0">
    <div class="flex lg:flex-col items-center justify-center">
      <p class="text-center text-primary text-">Just</p>
      <p class="text-center text-4xl lg:text-6xl text-dark-black px-2">{price}</p>
      <p class="text-center text-primary lg:mb-4">a year</p>
    </div>
    <button class="bg-primary-dark hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg w-full transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light">Go to {companyName}</button>
  </div>
</div>

<style>
  .combined-shadow{
    box-shadow: 0px 4px 4px #00000030, 0px 12px 12px #00000015;}

  .hover-link a {
    text-decoration: none;
    position: relative;
    padding-bottom: 4px;
  }

  .hover-link a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #d4ebf7;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  .hover-link a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

</style>

