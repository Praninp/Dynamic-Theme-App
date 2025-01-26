<template>
  <div class="profile">
    <h1>User Profile</h1>
    <div class="profile-content">
      <div class="profile-image">
        <img src="https://via.placeholder.com/150" alt="Profile Picture">
      </div>
      <div class="profile-details">
        <h2>John Doe</h2>
        <p>Email: john.doe@example.com</p>
        <p>Member since: January 2024</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
}

.profile-content {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.profile-image img {
  border-radius: 50%;
}

.profile-details {
  flex: 1;
}
</style> 