<template>
  <div class="theme-switcher">
    <select v-model="selectedTheme" @change="changeTheme">
      <option value="light">Light Theme</option>
      <option value="dark">Dark Theme</option>
      <option value="blue">Blue Theme</option>
    </select>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { themes, applyTheme } from '@/utils/ThemeProvider'

export default {
  name: 'ThemeSwitcher',
  setup() {
    const selectedTheme = ref('light')

    const changeTheme = () => {
      const theme = themes[selectedTheme.value]
      applyTheme(theme)
      localStorage.setItem('selected-theme', selectedTheme.value)
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('selected-theme') || 'light'
      selectedTheme.value = savedTheme
      applyTheme(themes[savedTheme])
    })

    return {
      selectedTheme,
      changeTheme
    }
  }
}
</script>

<style scoped>
.theme-switcher {
  margin: 1rem;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--primary);
  color: var(--text);
  cursor: pointer;
}

select:hover {
  border-color: var(--accent);
}
</style> 