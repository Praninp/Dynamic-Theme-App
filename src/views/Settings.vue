<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="settings-section">
      <h2>Account Settings</h2>
      <div class="setting-item">
        <label>
          <input type="checkbox" v-model="settings.notifications">
          Enable Notifications
        </label>
      </div>
      <div class="setting-item">
        <label>
          <input type="checkbox" v-model="settings.darkMode">
          Dark Mode
        </label>
      </div>
      <div class="setting-item">
        <label>Language</label>
        <select v-model="settings.language">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      <button @click="saveSettings">Save Settings</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        notifications: true,
        darkMode: false,
        language: 'en'
      }
    }
  },
  methods: {
    saveSettings() {
      console.log('Settings saved:', this.settings)
    }
  }
}
</script>

<style scoped>
.settings {
  max-width: 600px;
  margin: 0 auto;
}

.settings-section {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 1rem;
}

.setting-item {
  margin: 1rem 0;
}

select {
  margin-left: 1rem;
  padding: 0.25rem;
}

button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #3aa876;
}
</style> 