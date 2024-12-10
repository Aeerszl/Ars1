<template>
  <!-- Dil Seçimi--> 
     <!--
<div class="space-x-2">
    <a href="#" class="hover:text-gray-300">TR</a>
    <a href="#" class="hover:text-gray-300">EN</a>
  </div>--> 

  <!-- Alt Beyaz Menü Kısmı -->
  <div class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
       <img src="@/public/images/erülogo.png" alt="Logo" class="h-10 lg:mr-4" />
      <img src="@/public/images/erüarsdeklogo.png" alt="Logo" class="h-10 lg:mr-4" />
      <span class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-900">
  Araştırma Dekanlığı İş Birliği
</span>


      <!-- Menü Ikonu (Mobilde) -->
      <div class="block lg:hidden">
        <button class="text-blue-900 focus:outline-none" @click="toggleMenu">
          <MenuIcon class="w-6 h-6" />
        </button>
      </div>

      <!-- Menü Linkleri (Desktop ve Tablet İçin) -->
      <ul :class="{ hidden: isMenuOpen }" class="hidden lg:flex space-x-8 flex-1 pl-12">
        <li class="flex items-center space-x-2">
          <HomeIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">Ana Sayfa</NuxtLink>
        </li>
        <li class="flex items-center space-x-2">
          <groupIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/grup" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">Gruplar</NuxtLink>
        </li>
        <li class="flex items-center space-x-2">
          <merkezIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/merkez" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">Merkezler</NuxtLink>
        </li>
        
<!--<li class="flex items-center space-x-2">
          <ListIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/PageList" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">İlan Listesi</NuxtLink>
        </li>
        <li class="flex items-center space-x-2">
          <PlusIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/ilanEkle" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">İlan Ekle</NuxtLink>
        </li>-->
      </ul>

      <!-- Menü Linkleri (Mobilde) -->
      <ul v-if="isMenuOpen" class="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 space-y-4 text-center">
        <li class="flex items-center space-x-2" @click="closeMenu">
          <HomeIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/" class="text-xl font-semibold text-blue-900 hover:text-blue-700">Ana Sayfa</NuxtLink>
        </li>
        <li class="flex items-center space-x-2">
          <groupIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/grup" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">Gruplar</NuxtLink>
        </li>
        <li class="flex items-center space-x-2">
          <merkezIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/merkez" class="text-2xl font-semibold text-blue-900 hover:text-blue-700">Merkezler</NuxtLink>
        </li>
      <!--  
        <li class="flex items-center space-x-2" @click="closeMenu">
          <ListIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/PageList" class="text-xl font-semibold text-blue-900 hover:text-blue-700">İlan Listesi</NuxtLink>
        </li>

        <li class="flex items-center space-x-2" @click="closeMenu">
          <PlusIcon class="text-blue-900 text-lg" />
          <NuxtLink to="/ilanEkle" class="text-xl font-semibold text-blue-900 hover:text-blue-700">İlan Ekle</NuxtLink>
        </li>
        -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HomeIcon from '~/components/ui/HomeIcon'; // ShadCN ikonları import ediliyor.
import ListIcon from '~/components/ui/ListIcon';
import PlusIcon from '~/components/ui/PlusIcon';
import MenuIcon from '~/components/ui/MenuIcon';
import groupIcon from "./groupIcon.vue";
import merkezIcon from "./ui/merkezIcon.vue";
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false; // Menü kapatılıyor
}
</script>
