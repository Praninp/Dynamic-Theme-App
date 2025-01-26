<template>
  <div class="layout">
    <!-- Header -->
    <header class="header">
      <div class="logo">
        <h1>My App</h1>
      </div>
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <ThemeSwitcher />
    </header>

    <div class="main-container">
      <!-- Left Navigation -->
      <nav class="left-nav">
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
        </ul>
      </nav>

      <!-- Content Pane -->
      <main class="content">
        <router-view></router-view>
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 My Vue App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  components: {
    ThemeSwitcher
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--primary);
  color: var(--text);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--headerBg);
  color: var(--text);
  box-shadow: 0 2px 8px var(--shadow);

  .logo {
    h1 {
      color: var(--text);
      font-size: 1.5rem;
    }
  }

  .main-nav {
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      
      a {
        text-decoration: none;
        color: var(--text);
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.3s ease;
        
        &:hover {
          color: var(--accent);
          background-color: var(--secondary);
        }
        
        &.router-link-active {
          color: var(--accent);
          background-color: var(--secondary);
        }
      }
    }
  }
}

.main-container {
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
}

.left-nav {
  width: 250px;
  background-color: var(--sidebarBg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow);

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 1rem;
      
      a {
        display: block;
        text-decoration: none;
        color: var(--text);
        padding: 0.75rem 1rem;
        border-radius: 6px;
        transition: all 0.3s ease;
        
        &:hover {
          color: var(--accent);
          background-color: var(--secondary);
        }
        
        &.router-link-active {
          color: var(--accent);
          background-color: var(--secondary);
          font-weight: 600;
        }
      }
    }
  }
}

.content {
  flex: 1;
  background-color: var(--contentBg);
  color: var(--text);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow);
}

.footer {
  padding: 1.5rem 2rem;
  background-color: var(--footerBg);
  color: var(--text);
  text-align: center;
  margin-top: 1rem;
  box-shadow: 0 -2px 8px var(--shadow);
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    padding: 1rem;
  }

  .left-nav {
    width: 100%;
    padding: 1rem;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>