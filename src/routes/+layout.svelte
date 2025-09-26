<script lang="ts">
    import "/src/app.css";
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from "$lib/components/NavBar.svelte";

    let { children } = $props();
</script>

<div class="app-container">
    <main class="main-content">
        <NavBar />
        {@render children()}
        <Footer />
    </main>
</div>

<style>
    .app-container {
        display: flex;
    }

    .main-content {
        flex-grow: 1;
    }
</style>