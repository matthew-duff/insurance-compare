<script lang="ts">
  import { page } from '$app/stores';
  
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const insuranceLinks = [
    { name: 'Car Insurance', href: '/policies/car-insurance' },
    { name: 'Life Insurance', href: '/policies/life-insurance' },
    { name: 'Travel Insurance', href: '/policies/travel-insurance' }
  ];
</script>

<footer class="footer-wrapper">
  <div class="footer-content">
    <!-- Main footer sections -->
    <div class="footer-sections">
      <div class="footer-section">
        <h3>Company</h3>
        <ul>
          {#each companyLinks as link}
            <li>
              <a 
                href={link.href}
                class={$page.url.pathname === link.href ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="footer-section">
        <h3>Insurance</h3>
        <ul>
          {#each insuranceLinks as link}
            <li>
              <a 
                href={link.href}
                class={$page.url.pathname === link.href ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          {#each legalLinks as link}
            <li>
              <a 
                href={link.href}
                class={$page.url.pathname === link.href ? 'active' : ''}
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">
          © {currentYear} Insurance Compare. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

<style>
  :root {
    --main-bg-color: #1E293B;
    --footer-text-color: #F8FAFC;
    --footer-link-color: #CBD5E1;
    --footer-link-hover-color: #F8FAFC;
    --footer-border-color: #334155;
  }

  .footer-wrapper {
    background-color: var(--main-bg-color);
    color: #F8FAFC;
    padding: 4rem 0 0;
    margin-top: 4rem;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding-bottom: 3rem;
  }

  .footer-section h3 {
    color: #F8FAFC;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section ul li {
    margin-bottom: 0.75rem;
  }

  .footer-section ul li a {
    color: #CBD5E1;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }

  .footer-section ul li a:hover {
    color: #F8FAFC;
  }

  .footer-section ul li a.active {
    color: #4F46E5;
  }

  .footer-bottom {
    border-top: 1px solid #334155;
    padding: 1.5rem 0;
  }

  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .copyright {
    color: #94A3B8;
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    .footer-sections {
      grid-template-columns: repeat(2, 1fr);
    }

    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .footer-sections {
      grid-template-columns: 1fr;
    }
  }
</style>
