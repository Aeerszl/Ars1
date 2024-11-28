<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar />
    <!-- Sayfa İçeriği -->
    <main class="flex-grow">
      <slot />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'; // <!-- NavbarApp.vue yerine Navbar.vue -->
import Footer from '@/components/Footer.vue'; // <!-- FooterApp.vue yerine Footer.vue -->
</script>
