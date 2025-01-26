<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h3>Statistics</h3>
        <p>View your latest statistics here</p>
      </div>
      <div class="dashboard-card">
        <h3>Recent Activity</h3>
        <p>Check your recent activities</p>
      </div>
      <div class="dashboard-card">
        <h3>Updates</h3>
        <p>Latest system updates</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 1rem;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.dashboard-card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style> 