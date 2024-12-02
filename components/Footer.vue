
<script setup lang="ts">
const currentYear = new Date().getFullYear(); // Dinamik olarak yılı al

import LocationIcon from '~/components/ui/LocationIcon.vue';
import PhoneIcon from './ui/PhoneIcon.vue';
import MailIcon from './ui/MailIcon.vue';
import FacebookIcon from './ui/FacebookIcon.vue';
import XIcon from './ui/XIcon.vue';
import YoutubeIcon from './ui/YoutubeIcon.vue';
import InstagramIcon from './ui/InstagramIcon.vue';
</script>
<template>
  <footer class="bg-gray-800 text-white py-4 mt-12">
    <div class="container mx-auto">
  
      <!-- İletişim Bilgileri ve Sosyal Medya İkonları -->
      <div class="flex flex-col md:flex-row justify-between items-start">
  <!-- İletişim Bilgileri -->
  <div class="mb-6 md:mb-0">
    <h3 class="text-sm font-semibold mb-2">İletişim Bilgileri</h3>
    <p class="text-xs flex items-center mb-1">
      <a
        href="https://maps.app.goo.gl/NCYfo3anfrxz9t8K8"
        target="_blank"
        class="flex items-center text-white hover:underline"
      >
        <LocationIcon class="text-blue-400 text-lg mr-2" />
        ERÜ Araştırma Dekanlığı, Köşk, Fakülte İçi Küme Evleri No:4, 38030 Melikgazi/Kayseri
      </a>
    </p>
    <p class="text-xs flex items-center mb-1">
      <a href="tel:+903522076666" class="flex items-center text-white hover:underline">
        <PhoneIcon class="text-blue-400 text-lg mr-2" />
        +90 352 207 66 66 / 12500
      </a>
    </p>
    <p class="text-xs flex items-center">
      <a href="mailto:ardek@erciyes.edu.tr" class="flex items-center text-white hover:underline">
        <MailIcon class="text-blue-400 text-lg mr-2" />
        ardek@erciyes.edu.tr
      </a>
    </p>
  </div>
</div>


      <!-- Sosyal Medya İkonları -->
      <div class="text-right">
        <h3 class="text-sm font-semibold mb-2">Bizi Takip Edin</h3>
        <div class="flex space-x-4 justify-end">
          <a href="https://www.facebook.com/EruMedya" target="_blank">
            <FacebookIcon class="text-white text-xl hover:text-blue-400 transition-colors duration-300" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FArdekErciyes" target="_blank">
            <XIcon class="text-white text-xl hover:text-[#060d12] transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/ardekerciyes/" target="_blank">
            <InstagramIcon class="text-white text-xl hover:text-[#E4405F] transition-colors duration-300" />
          </a>
          <a href="https://www.youtube.com/user/EruMedya" target="_blank">
            <YoutubeIcon class="text-white text-xl hover:text-[#FF0000] transition-colors duration-300" />
          </a>
        </div>
      </div>

      <!-- Telif Hakkı -->
      <div class="mt-4 text-center border-t border-gray-600 pt-4">
    <p class="text-xs">&copy; {{ currentYear }} Erciyes Üniversitesi | Tüm Hakları Saklıdır.</p>
  </div>
    </div>
  </footer>
</template>


<style scoped>
/* Footer stilini burada ekleyebilirsin */
</style>
