

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hoşgeldiniz Mesajı -->
    <section class="bg-blue-900 text-white py-12 text-center">
      <h1 class="text-4xl font-bold">Hoşgeldiniz</h1>
      <p class="mt-2 text-lg">
        Erciyes Üniversitesi Araştırma Dekanlığı'nın resmi iş ilanı yayınlama web sitesine hoş geldiniz.
      </p>
      <span class="italic"> "Hızlı ve güvenilir iş ilanları için doğru yerdesiniz!"</span>
    </section>

    <!-- Bilgilendirme İçerikleri ve İstatistikler -->
    <section class="py-12 px-4">
      <div class="container mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-blue-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">100+ İş İlanı</h2>
          <p class="mt-2 text-gray-600">Her gün güncellenen iş ilanlarıyla fırsatları keşfedin.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-green-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">50+ Firma</h2>
          <p class="mt-2 text-gray-600">Güvenilir firmalarla iletişime geçin ve iş ortaklıkları kurun.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-purple-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">1.000+ Kullanıcı</h2>
          <p class="mt-2 text-gray-600">Platformumuzdaki kullanıcı topluluğuna katılın.</p>
        </div>
      </div>
    </section>

    <!-- Görsellerle Anlatım (Artık simgelerle anlatım) -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10 bg-gray-50">
      <!-- Kart 1 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-blue-600 text-4xl mb-4">
          <MegaphoneIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Hızlı ve Güvenilir İş İlanları</h3>
        <p class="text-gray-600">İş ilanlarınızı yayınlayarak doğru yeteneklere hızla ulaşın.</p>
      </div>

      <!-- Kart 2 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-yellow-500 text-4xl mb-4">
          <PeopleIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Firmalar ve Adaylar İçin Bir Araya Gelme Noktası</h3>
        <p class="text-gray-600">Şirketlerin yetenek arayışlarını destekliyoruz, adaylara yeni fırsatlar sunuyoruz.</p>
      </div>

      <!-- Kart 3 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-green-600 text-4xl mb-4">
          <CheckIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Admin Onayı ile Kaliteli İçerik</h3>
        <p class="text-gray-600">Tüm ilanlar, kaliteli bir deneyim sağlamak için admin onayına tabidir.</p>
      </div>

      <!-- Kart 4 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-green-600 text-4xl mb-4">
          <ArrowUpIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Hemen İş İlanı Yayınlayın</h3>
        <p class="text-gray-600">Şirketiniz için aradığınız profesyonelleri bulmak şimdi daha kolay!</p>
      </div>

      <!-- Kart 5 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-blue-900 text-4xl mb-4">
          <SearchIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">İlanları Hemen Keşfedin</h3>
        <p class="text-gray-600">Fırsatları yakalayın! Güncel iş ilanlarına kolayca ulaşabilirsiniz.</p>
      </div>

      <!-- Kart 6 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-pink-600 text-4xl mb-4">
          <GlobeIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Herkese Açık ve Kullanıcı Dostu</h3>
        <p class="text-gray-600">Üyelik gerekmeden, herkesin erişebileceği ilanlar burada.</p>
      </div>
    </section>

    <!-- Kullanıcı Bilgilendirme Alanları -->
    <section class="py-12 px-4">
      <div class="container mx-auto grid md:grid-cols-2 gap-8">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-blue-600 text-4xl mb-4">
            <PlusIcon />
          </div>
          <h2 class="text-2xl font-bold text-blue-900">Yeni İş İlanı Eklemek için</h2>
          <p class="mt-2 text-gray-600">
            İş ilanınızı kolayca ekleyin ve daha fazla insana ulaşın.
          </p>
          <NuxtLink
            to="/ilanEkle"
            class="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >İş İlanı Ekle</NuxtLink>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-green-600 text-4xl mb-4">
            <MenuIcon />
          </div>
          <h2 class="text-2xl font-bold text-blue-900">İlanları İncelemek için</h2>
          <p class="mt-2 text-gray-600">
            En yeni iş ilanlarını keşfedin ve başvurunuzu yapın.
          </p>
          <NuxtLink
            to="/PageList"
            class="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >İş İlanlarını Gör</NuxtLink>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>
import MegaphoneIcon from '~/components/ui/MegaphoneIcon';
import CheckIcon from '~/components/ui/CheckIcon';
import GlobeIcon from '~/components/ui/GlobeIcon';
import ArrowUpIcon from '~/components/ui/ArrowUpIcon';
import PeopleIcon from '~/components/ui/PeopleIcon.vue';
import SearchIcon from '~/components/ui/SearchIcon.vue';
</script>

<style scoped>
/* Responsive tasarımı geliştirmek için ek stiller yazılabilir. */
</style>
