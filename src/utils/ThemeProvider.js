export const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    text: '#2c3e50',
    accent: '#42b983',
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
    headerBg: '#ffffff',
    sidebarBg: '#f8f9fa',
    contentBg: '#ffffff',
    footerBg: '#f8f9fa'
  },
  dark: {
    primary: '#1e2433',
    secondary: '#2c3e50',
    text: '#e0e6ed',
    accent: '#4dc0b5',
    border: '#34495e',
    shadow: 'rgba(0, 0, 0, 0.2)',
    headerBg: '#2c3e50',
    sidebarBg: '#2a3447',
    contentBg: '#283142',
    footerBg: '#2c3e50'
  },
  blue: {
    primary: '#1a237e',
    secondary: '#0288d1',
    text: '#ffffff',
    accent: '#26c6da',
    border: '#1565c0',
    shadow: 'rgba(0, 0, 0, 0.2)',
    headerBg: '#1a237e',
    sidebarBg: '#0d47a1',
    contentBg: '#0a2472',
    footerBg: '#1a237e'
  }
}

export function applyTheme(theme) {
  const root = document.documentElement
  Object.keys(theme).forEach(key => {
    root.style.setProperty(`--${key}`, theme[key])
  })
} 