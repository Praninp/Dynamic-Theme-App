<template>
  <router-view></router-view>
</template>

<style>
:root {
  /* Default theme variables will be overridden by ThemeProvider */
  --primary: #ffffff;
  --secondary: #f8f9fa;
  --text: #2c3e50;
  --accent: #42b983;
  --border: #dee2e6;
  --shadow: rgba(0, 0, 0, 0.1);
  --headerBg: #ffffff;
  --sidebarBg: #f8f9fa;
  --contentBg: #ffffff;
  --footerBg: #f8f9fa;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
