<template>
  <div class="container mx-auto my-8 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Dinamik Kartlar -->
      <Card
        v-for="(card, index) in paginatedCards"
        :key="index"
        class="relative flex flex-col justify-between h-full p-4 border rounded-lg shadow-md"
      >
      

        <!-- İçerik -->
        <div class="flex-1">
          <CardHeader class="mb-2">
              <!-- Sağ üst köşede website linki -->
  <div class="absolute top-2 right-2">
    <a 
      :href="card.website" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="text-blue-500 hover:text-blue-700 underline"
    >
      <goIcon/>
  </a>
  </div>
            <CardTitle class="text-lg font-semibold">
              {{ card.title}}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">
              {{ truncatedDescription(card.description) }}
              <!-- Devamını oku bağlantısı -->
              <span 
                v-if="stripHtml(card.description).length >= 250" 
                class="text-blue-900 cursor-pointer" 
                @click="openDialog(card.description, card.title)">
                ... Devamını oku
              </span>
            </p>
          </CardContent>
        </div>

        <!-- Sabit Buton -->
        <CardFooter class="mt-auto">
          <Button
            class="w-full bg-blue-500 text-white hover:bg-blue-600"
            @click="openCollaborationForm(card.title)"
          >
            İş birliği  <HandshakeIcon/>
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- Pagination -->
    <Pagination 
      v-slot="{ page }" 
      :total="97" 
      :sibling-count="1" 
      show-edges 
      :default-page="1" 
      :itemsPerPage="9"
    >
      <PaginationList 
        v-slot="{ items }" 
        class="flex items-center gap-2 justify-center flex-wrap sm:gap-4 sm:flex-nowrap"
      >
        <!-- İlk Sayfa Butonu -->
        <PaginationFirst class="hidden sm:block" />
        
        <!-- Önceki Sayfa Butonu -->
        <PaginationPrev class="w-8 h-8 flex items-center justify-center text-sm sm:w-10 sm:h-10 sm:px-4 border border-gray-300 rounded-md hover:bg-gray-200" />

        <!-- Sayfa Numaraları -->
        <template v-for="(item, index) in items" :key="'pagination-' + index">
          <PaginationListItem 
            v-if="item.type === 'page'" 
            :value="item.value" 
            as-child
          >
            <Button 
              :variant="item.value === page ? 'default' : 'outline'" 
              class="w-8 h-8 text-sm flex items-center justify-center border sm:w-10 sm:h-10 sm:px-4 sm:py-2 sm:text-base rounded-md hover:bg-blue-100"
              @click="goToPage(item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          
          <!-- Noktalı Eleman -->
          <PaginationEllipsis v-else class="text-gray-500 text-sm sm:text-base px-2" />
        </template>

        <!-- Sonraki Sayfa Butonu -->
        <PaginationNext class="w-8 h-8 flex items-center justify-center text-sm sm:w-10 sm:h-10 sm:px-4 border border-gray-300 rounded-md hover:bg-gray-200" />
        
        <!-- Son Sayfa Butonu -->
        <PaginationLast class="hidden sm:block" />
      </PaginationList>
    </Pagination>

  </div>

  <!-- Dialog -->
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <Button variant="outline" class="hidden">Open Description</Button>
    </DialogTrigger>
    <DialogContent 
      class="w-full max-w-[90%] sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg">
      <DialogHeader class="text-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">{{ fullTitle }}</h2> <!-- Başlık burada -->
      </DialogHeader>
      <div class="overflow-y-auto max-h-[70vh] text-gray-900">
        <p>{{ fullDescription }}</p>
      </div>
      <DialogFooter class="flex justify-end mt-4">
        <Button 
          @click="isDialogOpen = false" 
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Kapat
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

<!-- İş Birliği Formu Dialog -->
<Dialog v-model:open="isCollaborationFormOpen">
  <DialogContent class="w-full max-w-[98%] sm:max-w-[90%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[50%] p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-lg shadow-lg">
    <DialogHeader class="text-center mb-3 sm:mb-4">  
      <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800"> {{ fullTitle }} ile iş birliği talebi</h2> <!-- Başlık burada -->
    </DialogHeader>
    <div class="flex items-start">
      <form @submit.prevent="submitCollaborationForm" class="flex-1 w-full">
        <div class="mb-3">
          <Label for="name">Ad</Label>
          <Input id="name" v-model="collaborationForm.name" required />
        </div>
        <div class="mb-3">
          <Label for="surname">Soyad</Label>
          <Input id="surname" v-model="collaborationForm.surname" required />
        </div>
        <div class="mb-3">
          <Label for="email">E-posta</Label>
          <Input id="email" type="email" v-model="collaborationForm.email" required />
        </div>
        <div class="mb-3">
          <Label for="company">İş Yeri Adı</Label>
          <Input id="company" v-model="collaborationForm.company" required />
        </div>
        <div class="mb-3">
          <Label for="phone">Telefon Numarası (Zorunlu Değil)</Label>
          <Input id="phone" v-model="collaborationForm.phone" />
        </div>
        <div class="mb-3">
          <Label for="message">Mesaj</Label>
          <Textarea id="message" v-model="collaborationForm.message" required />
        </div>
        <DialogFooter class="flex justify-end mt-3">
          <Button type="submit" class="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Gönder
          </Button>
        </DialogFooter>
      </form>
    </div>
  </DialogContent>
</Dialog>

</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import HandshakeIcon from "~/components/ui/HandshakeIcon.vue";
import goIcon from "~/components/ui/goIcon.vue";
const totalCards = ref(3); // Toplam kart sayısı
const cards = ref([]); // Tüm kartlar
const currentPage = ref(1); // Geçerli sayfa numarası
const isDialogOpen = ref(false);
const isCollaborationFormOpen = ref(false);
const fullDescription = ref(""); 
const fullTitle = ref(""); // Başlık için yeni bir ref

const collaborationForm = ref({
  name: '',
  surname: '',
  email: '',
  company: '',
  phone: '',
  message: ''
});

// JSON dosyasını yükleme
onMounted(async () => {
  const response = await fetch("merkez.json");
  const data = await response.json();
  cards.value = data.hits; // Tüm kart verilerini yükle
});

// Sayfalama için kartları filtrele
const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * 9;
  const end = start + 9;
  return cards.value.slice(start, end); // Aktif sayfada gösterilecek kartlar
});

const totalPages = computed(() => {
  return Math.ceil(totalCards.value / 9); // 9 kart başına bir sayfa
});

// HTML etiketlerini temizlemek için yardımcı fonksiyon
const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

// Karakterleri sınırlamak için yardımcı fonksiyon
const truncatedDescription = (description) => {
  const stripped = stripHtml(description);
  return stripped.trim().length > 250 ? stripped.slice(0, 250) : stripped;
};

// Dialog'ı açmak ve tam açıklamayı göstermek için yardımcı fonksiyon
const openDialog = (description, title) => {
  fullDescription.value = stripHtml(description); // Açıklamayı temizle
  fullTitle.value = title; // Başlığı ata
  isDialogOpen.value = true; // Dialog'u aç
};

// İş Birliği Formu Dialog'unu açmak için yardımcı fonksiyon
const openCollaborationForm = (title,) => {
  fullTitle.value = title; // Başlığı ata

  isCollaborationFormOpen.value = true;
};

// İş Birliği Formunu göndermek için yardımcı fonksiyon
const submitCollaborationForm = () => {
  $fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(collaborationForm.value)
  });
  console.log('Collaboration Form:', collaborationForm.value);
  // Formu gönderme işlemi burada yapılabilir
  isCollaborationFormOpen.value = false; // Form gönderildikten sonra dialog'u kapat
};

// Sayfa değiştirildiğinde güncelleme yapmak için
const goToPage = (pageNumber) => {
  if (pageNumber > 0 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
  }
};
</script>

<style scoped>
/* Responsive grid ve kart stilleri */
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

img {
  object-fit: contain;
}
</style>