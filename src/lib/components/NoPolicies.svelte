<script lang="ts">
  const { selectedValues, onReset } = $props();
</script>

<div class="no-policies-box">
  <div class="no-policies-content">
    <h3 class="text-xl font-semibold text-gray-700 mb-2">No Policies Found</h3>
    <p class="text-gray-600 mt-4 mb-4">No insurance policies match your current filter criteria.</p>
    <button 
      class="reset-button mt-4"
      onclick={onReset}
    >
      Reset Filters
    </button>
  </div>
</div>

<style>
  .no-policies-box {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    margin: 2rem;
    width: calc(100% - 4rem);
    max-width: 600px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border: 1px solid #E2E8F0;
  }

  .no-policies-content {
    text-align: center;
    gap: 4px;
  }

  .reset-button {
    background-color: #4F46E5;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .reset-button:hover {
    background-color: #4338CA;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  .reset-button:active {
    transform: translateY(0);
  }
</style>