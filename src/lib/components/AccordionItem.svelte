<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';

  let { title, content }: { title: string; content: string } = $props();
  let open = $state(false);

  function toggle() {
    open = !open;
  }
</script>

<div class="border-b border-gray-200 py-4">
  <button
    onclick={toggle}
    class="w-full flex justify-between items-center text-left text-lg font-medium text-primary-dark hover:text-primary focus:outline-none"
  >
    <span>{title}</span>
    <ChevronDown class={`transform transition-transform duration-300 ${open ? 'rotate-180' : ''} h-5 w-5`} />
  </button>
  {#if open}
    <div class="mt-3 pt-3 text-dark-grey">
      <p>{@html content}</p>
    </div>
  {/if}
</div> 