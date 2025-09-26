<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import chevron from '$lib/resources/icons/chevron-down.svg';

  type ControlOption = string | { value: string; label: string };

  type Control = {
    id: string;
    label: string;
    options: ControlOption[];
  };

  type $$Props = {
    controls: Control[]; 
    sortControls?: Control[]; // Optional sort controls
    onselection?: (event: CustomEvent<{ controlId: string; value: string }>) => void;
  };

  let { controls, sortControls = [], onselection = () => {} }: $$Props = $props();

  let selectedValues = $state({});

  function handleSelect(controlId: string, value: string) {
    selectedValues[controlId] = value;
    if (onselection) {
      onselection(new CustomEvent('selection', { detail: { controlId, value } }));
    }
  }

  function handleSliderChange(controlId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const control = [...controls, ...sortControls].find(c => c.id === controlId);
    if (control) {
      const selectedOption = control.options[parseInt(value, 10)];
      const optionValue = typeof selectedOption === 'string' ? selectedOption : selectedOption.value;
      handleSelect(controlId, optionValue);
    }
  }

  function getSliderValue(control: Control): number {
    if (!selectedValues[control.id]) return 0;
    const selectedOptionValue = selectedValues[control.id];
    const index = control.options.findIndex(opt => 
      (typeof opt === 'string' ? opt : opt.value) === selectedOptionValue
    );
    return index >= 0 ? index : 0;
  }

  function formatValue(value: string | undefined): string {
    // If the control is a sort control, find the label for the value
    const sortControl = sortControls.find(sc => sc.options.some(opt => typeof opt !== 'string' && opt.value === value));
    if (sortControl) {
      const selectedOption = sortControl.options.find(opt => typeof opt !== 'string' && opt.value === value) as { value: string; label: string } | undefined;
      if (selectedOption) {
        return selectedOption.label;
      }
    }
    return value || 'Not Selected';
  }

  function clearFilter(controlId: string) {
    selectedValues[controlId] = '';
    handleSelect(controlId, ''); // Notify parent about clearance
  }

  // Combine filter and sort controls for rendering logic, if sortControls are present
  let allControls = $derived([...controls, ...sortControls]);

</script>

<div class="toolbar-wrapper">
  <div class="tools-section">
    {#each allControls as control (control.id)}
      <div class="filter-card {selectedValues[control.id] ? 'active' : ''}">
        <div class="filter-header">
          <h6 class="filter-label">{control.label}</h6>
          {#if selectedValues[control.id] && control.id !== 'sort'} <!-- Don't show clear for sort -->
            <button 
              class="clear-button" 
              onclick={() => clearFilter(control.id)}
              aria-label="Clear filter for {control.label}"
            >
              ×
            </button>
          {/if}
        </div>
        <p class="selected-value-display text-sm text-gray-600 mb-1">
          {formatValue(selectedValues[control.id])}
        </p>
        
        {#if ['goods', 'liability', 'vehicle'].includes(control.id) && control.id !== 'sort'}
          <!-- Slider for specific filter controls -->
          <div class="flex flex-col w-full">
            <input 
              type="range" 
              min="0" 
              max={control.options.length - 1} 
              value={getSliderValue(control)}
              class="range"
              oninput={(e) => handleSliderChange(control.id, e)}
              aria-labelledby="{control.id}-label"
            />
            <div class="slider-labels">
              <span class="text-xs text-gray-500">
                {#if control.options.length > 0}
                  {((opt) => typeof opt === 'string' ? opt : opt.label)(control.options[0])}
                {/if}
              </span>
              <span class="text-xs text-gray-500">
                {#if control.options.length > 0}
                  {((opt) => typeof opt === 'string' ? opt : opt.label)(control.options[control.options.length - 1])}
                {/if}
              </span>
            </div>
          </div>
        {:else}
          <!-- Regular dropdown for cost, provider, and sort -->
          <select 
            class="select"
            bind:value={selectedValues[control.id]}
            onchange={() => handleSelect(control.id, selectedValues[control.id])}
            aria-labelledby="{control.id}-label"
          >
            {#if control.id !== 'sort'}
              <option value="">Select {control.label.toLowerCase()}</option>
            {/if}
            {#each control.options as option}
              {#if typeof option === 'string'}
                <option value={option}>{option}</option>
              {:else}
                <option value={option.value}>{option.label}</option>
              {/if}
            {/each} 
          </select>
        {/if}
      </div> 
    {/each}
  </div>
</div>

<style>
  .toolbar-wrapper {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #F8FAFC; /* bg-slate-50 */
    border-bottom: 1px solid #E2E8F0; /* border-slate-200 */
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05); /* shadow-sm */
  }

  .tools-section {
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center cards if space allows */
    align-items: stretch; /* Make cards same height */
    padding: 1rem;
    gap: 1rem;
  }

  .filter-card {
    background: white;
    padding: 0.75rem 1rem; /* Adjusted padding */
    border-radius: 0.5rem; /* rounded-lg */
    border: 1px solid #E2E8F0; /* border-slate-200 */
    transition: all 0.2s ease-in-out;
    min-width: 200px; /* Ensure decent width */
    flex: 1 1 200px; /* Allow flex grow and shrink, base width 200px */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribute space for content */
  }

  .filter-card:hover {
    border-color: #CBD5E1; /* border-slate-300 */
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /* shadow-md */
  }

  .filter-card.active {
    border-color: #6366F1; /* border-indigo-500 */
    background-color: #EEF2FF; /* bg-indigo-50 */
  }

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem; /* Increased margin */
  }

  .filter-label {
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    color: #334155; /* text-slate-700 */
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .selected-value-display {
    font-size: 0.875rem; /* text-sm */
    color: #475569; /* text-slate-600 */
    margin-bottom: 0.5rem; /* Added margin */
    min-height: 1.25rem; /* Ensure space even if not selected */
  }

  .clear-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #E0E7FF; /* bg-indigo-100 */
    color: #4338CA; /* text-indigo-700 */
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem; /* Adjusted size */
    line-height: 1; /* Ensure '×' is centered */
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .clear-button:hover {
    background: #C7D2FE; /* bg-indigo-200 */
    color: #3730A3; /* text-indigo-800 */
  }

  .select {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem; /* rounded-md */
    border: 1px solid #D1D5DB; /* border-gray-300 */
    background-color: white;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #374151; /* text-gray-700 */
    appearance: none; /* Remove default system appearance */
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem; /* Make space for arrow */
  }

  .select:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #4F46E5; /* focus:border-indigo-500 */
    box-shadow: 0 0 0 2px #A5B4FC; /* focus:ring-indigo-300 focus:ring-opacity-50 */
  }


  /* Range Slider Styles */
  .range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px; /* Slider track height */
    background: #E5E7EB; /* bg-gray-200 - Slider track color */
    border-radius: 9999px; /* rounded-full */
    outline: none;
    margin: .75rem 0; /* Adjusted margin */
  }

  /* Webkit (Chrome, Safari, Edge) */
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px; /* Thumb width */
    height: 18px; /* Thumb height */
    background: #4F46E5; /* bg-indigo-600 - Thumb color */
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white; /* Optional: add a border to the thumb */
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: background-color 0.2s ease-in-out;
  }

  .range::-webkit-slider-thumb:hover {
    background: #4338CA; /* bg-indigo-700 */
  }

  /* Mozilla (Firefox) */
  .range::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #4F46E5;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: background-color 0.2s ease-in-out;
  }
  
  .range::-moz-range-thumb:hover {
    background: #4338CA;
  }

  .slider-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem; /* text-xs */
    color: #6B7280; /* text-gray-500 */
    padding: 0 0.125rem; /* Add slight padding to align with slider ends */
  }


  @media (min-width: 1024px) { /* lg breakpoint */
    .tools-section {
      padding: 1.5rem;
      justify-content: space-around; /* Distribute space more evenly on larger screens */
    }

    .filter-card {
      min-width: 220px; /* Slightly increase min-width */
      flex-basis: 0; /* Allow flex-grow to work more predictably */
    }
  }
</style>