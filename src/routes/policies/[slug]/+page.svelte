<script lang="ts">
  import ProductPage from '$lib/components/ProductPage.svelte';

  export let data: { policy: any }; 
</script>

<ProductPage policies={data.policy} />