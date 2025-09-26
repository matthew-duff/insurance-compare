<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import NoPolicies from "$lib/components/NoPolicies.svelte";
  import ProductCard from "$lib/components/ProductCard.svelte";
  import Toolbar from "$lib/components/ToolBar.svelte";
  import type { policies as PoliciesStore } from "$lib/stores/policyStore.ts"; // Import type

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

  interface PolicyCategory { // Define PolicyCategory if not already defined
    title: string;
    fields: string[];
    products: Product[];
  }

  let { policies }: { policies: PolicyCategory | undefined } = $props();
  
  let products = $derived(policies?.products || []);

  let selectedValues = $state({
    provider: '',
    cost: '',
    goods: '',
    liability: '',
    vehicle: ''
  });

  let selectedSort = $state('price-asc'); // Default sort: price ascending

  let product_view = $derived(sortProducts(filterProducts(products)));

  $effect(() => {
    if (policies) {
      resetFilters();
    }
  });

  function convertAmountToNumber(amount: string | undefined): number {
    if (!amount) return 0;
    const amountString = amount.replace(/[$,]/g, '');
    let numericValue: number;

    if (amountString.endsWith('K')) {
      numericValue = parseFloat(amountString) * 1000;
    } else if (amountString.endsWith('M')) {
      numericValue = parseFloat(amountString) * 1000000;
    } else {
      numericValue = parseFloat(amountString);
    }
    return numericValue;
  }

  function filterProducts(products: Product[]) {
    return products.filter(product => {
      // If no filters are selected, show all products
      if (!Object.values(selectedValues).some(value => value)) {
        return true;
      }

      // Filter by provider
      if (selectedValues.provider && product.company !== selectedValues.provider) {
        return false;
      }

      // Filter by goods coverage (minimum amount)
      if (selectedValues.goods) {
        const selectedGoods = convertAmountToNumber(selectedValues.goods);
        const productGoods = convertAmountToNumber(product.goods);
        if (productGoods < selectedGoods) return false;
      }

      // Filter by liability coverage (minimum amount)
      if (selectedValues.liability) {
        const selectedLiability = convertAmountToNumber(selectedValues.liability);
        const productLiability = convertAmountToNumber(product.liability);
        if (productLiability < selectedLiability) return false;
      }

      // Filter by vehicle coverage (minimum amount)
      if (selectedValues.vehicle) {
        const selectedVehicle = convertAmountToNumber(selectedValues.vehicle);
        const productVehicle = convertAmountToNumber(product.vehicle);
        if (productVehicle < selectedVehicle) return false;
      }

      // Filter by maximum cost
      if (selectedValues.cost) {
        const price = parseInt(product.price.replace('$', ''));
        const maxPrice = parseInt(selectedValues.cost.replace(/[^0-9]/g, ''));
        if (price > maxPrice) return false;
      }

      // If all active filters pass, include the product
      return true;
    });
  }

  function sortProducts(productsToSort: Product[]): Product[] {
    const sorted = [...productsToSort]; // Create a new array to avoid mutating the original
    switch (selectedSort) {
      case 'price-asc':
        sorted.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        break;
      case 'price-desc':
        sorted.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        break;
      case 'name-az':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      // Add more cases if needed
    }
    return sorted;
  }

  let controls = [
    {
      id: 'cost',
      label: 'Cost',
      options: ['Under $100', 'Under $200', 'Under $300']
    },
    {
      id: 'provider',
      label: 'Provider',
      options: ['RACQ', 'QBE', 'HCI', 'CLEAR']
    },
    {
      id: 'goods', 
      label: 'Goods Coverage',
      options: ['$500K', '$1M', '$2M', '$3M', '$5M', '$7M', '$10M']
    },
    {
      id: 'liability',
      label: 'Liability Coverage',
      options: ['$2000', '$3000', '$5000', '$7000', '$8000', '$10000', '$12000', '$15000', '$20000']
    },
    {
      id: 'vehicle',
      label: 'Vehicle Coverage',
      options: ['$1000', '$2000', '$3000', '$4000', '$5000', '$7000', '$8000', '$10000']
    }
  ];

  let sortControls = [
    {
      id: 'sort',
      label: 'Sort By',
      options: [
        { value: 'price-asc', label: 'Price: Low to High' },
        { value: 'price-desc', label: 'Price: High to Low' },
        { value: 'name-az', label: 'Name: A-Z' },
      ]
    }
  ];
  
  function handleSelection(controlId: string, value: string) {
    if (controlId === 'sort') {
      selectedSort = value;
    } else {
      selectedValues[controlId] = value;
    }
  }
  
  function resetFilters() {
    selectedValues = {
      provider: '',
      cost: '',
      goods: '',
      liability: '',
      vehicle: ''
    };
  }
</script>

<div class="title-section">
  <div class="title-headline">
    <h1 class="text-4xl font-bold mt-[140px]">Compare {policies.title} Insurance Policies</h1>
    <h2 class="text-xl font-medium text-secondary">Find the best insurance policy, guaranteed.</h2>
  </div>
</div>
<Toolbar 
  {controls}
  {sortControls}
  onselection={(event) => {
    const { controlId, value } = event.detail;
    handleSelection(controlId, value);
  }}
/>
<div class="comparison-section">
  {#if product_view.length === 0}
    <NoPolicies 
      selectedValues={selectedValues} 
      onReset={resetFilters}
    />
  {:else}
    {#each product_view as product}
      <ProductCard {product} />
    {/each}
  {/if}
</div>

<style>
  .title-section {
    height: 320px;
    background-color: #F0F0F0;
    display: flex;
    justify-content: center;
  }

  .title-headline {
    margin: 30px;
    width: 75vw;
    border-radius: 1.5rem
  }

  .comparison-section {
    background-color: #F0F0F0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 400px;
  }
</style>