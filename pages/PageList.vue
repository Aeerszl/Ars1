<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import LocationIcon from '~/components/ui/LocationIcon.vue';

// İlan tür tanımı
interface Ilan {
  id: number;
  title: string; // Başlık eklendi
  name: string;
  description: string;
  features: string;
  email: string;
  type: string;
  date: string;
  location: string; // Konum ekledik
  status: string;
}

const ilanlar = ref<Ilan[]>([]);
const selectedIlan = ref<Ilan | null>(null); // Detay için seçilen ilan

// localStorage'dan onaylanmış ilanları çekme
const fetchApprovedIlanlar = () => {
  const data = JSON.parse(localStorage.getItem('ilanlar') || '[]') as Ilan[];
  ilanlar.value = data.filter((ilan) => ilan.status === 'approved');
};

// Sayfa yüklendiğinde onaylanmış ilanları al
fetchApprovedIlanlar();

// Mail gönderme fonksiyonu
const sendEmail = (email: string, name: string, title: string) => {
  const subject = `"${name}" şirketi"  "${title}" ilanına başvuru maili`;
  const body = `
NOT: Adınızı, soyadınızı, iletişim bilgilerinizi, kısaca bu işe neden başvurduğunuzu yazınız ve özgeçmişinizi yükleyiniz.
Bizimle çalışmak istediğiniz için teşekkür ederiz.`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Detay gösterimi
const showDetails = (ilan: Ilan) => {
  selectedIlan.value = ilan;
};

// Detayları kapatma
const closeDetails = () => {
  selectedIlan.value = null;
};
</script>

<template>
  <div class="page-container">
    <h1 class="text-2xl mb-6 mt-8 text-center font-bold">İlanlar</h1>

    <!-- Detay Görünümü -->
    <div v-if="selectedIlan" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card class="bg-white shadow-lg p-6 sm:p-8 lg:p-12">
        <CardHeader>
          <CardTitle class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            {{ selectedIlan.title }}
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl">
          <p><strong>İş Yeri İsmi:</strong> {{ selectedIlan.name }}</p>
          <p><strong>İş Tanımı:</strong> {{ selectedIlan.description }}</p>
          <p><strong>Aranan Özellikler:</strong> {{ selectedIlan.features }}</p>
          <p><strong>E-posta:</strong> {{ selectedIlan.email }}</p>
          <p><strong>Son Geçerlilik Tarihi:</strong> {{ selectedIlan.date }}</p>
          <p><strong>Konum:</strong> {{ selectedIlan.location }}</p>
        </CardContent>
        <CardFooter class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 lg:mt-8">
          <Button @click="sendEmail(selectedIlan.email, selectedIlan.name, selectedIlan.title)" class="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl">
            Mail ile Başvur
          </Button>
          <Button @click="closeDetails" class="w-full sm:w-auto bg-gray-400 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl">
            Kapat
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- İlan Listesi -->
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6"
    >
      <div
        v-for="ilan in ilanlar"
        :key="ilan.id"
        class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <Card class="flex flex-col justify-between h-full p-6">
          <CardHeader class="p-4">
            <CardTitle class="text-lg font-semibold text-gray-800 truncate">
              {{ ilan.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="p-4 flex-grow">
            <p class="truncate mb-2">
              <strong>İş Tanımı:</strong> {{ ilan.description.slice(0, 50) }}...
            </p>
            <p class="font-bold text-gray-900">{{ ilan.name }}</p>
            <p class="text-gray-500 flex items-center mt-1 text-sm">
              <LocationIcon class="mr-1" />
              {{ ilan.location }}
            </p>
          </CardContent>
          <CardFooter class="p-4 flex justify-between items-center">
            <Button
              @click="showDetails(ilan)"
              class=" bg-blue-900 text-white hover:bg-blue-600 px-4 py-2 rounded w-full text-center"
            >
              Detay
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px; /* Kart aralığını artırdık */
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Kart sayısını 3'e düşürdük */
  }
}

.card-footer {
  margin-top: auto;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
