

<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hoşgeldiniz Mesajı -->
    <section class="bg-blue-900 text-white py-12 text-center">
      <h1 class="text-4xl font-bold">Hoşgeldiniz</h1>
      <p class="mt-2 text-lg">
        "Erciyes Üniversitesi Araştırma ve İşbirliği İlanlarına Hoş Geldiniz"
      </p>
      <span class="italic"> "Yeni İşbirliği Fırsatları İçin Gruplara Göz Atın!"</span>
    </section>

    <!-- Bilgilendirme İçerikleri ve İstatistikler -->
    <section class="py-12 px-4">
      <div class="container mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-blue-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">"100+ Araştırma Grubu"</h2>
          <p class="mt-2 text-gray-600">Çeşitli alanlardaki araştırma gruplarına katılın ve iş birlikleri kurun.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-green-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">"10+ Araştırma Merkezi"</h2>
          <p class="mt-2 text-gray-600">Gelişmiş araştırma merkezleriyle iş birliği fırsatlarını keşfedin.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="text-purple-600 text-4xl mb-4">
          </div>
          <h2 class="text-2xl font-semibold text-blue-900">300+ Proje</h2>
          <p class="mt-2 text-gray-600">Çeşitli projelerde yer alarak deneyim kazanın ve katkı sağlayın</p>
        </div>
      </div>
    </section>

<!-- İş Birliği Teklifi Card -->
<section class="py-6 px-4">
  <Card class="w-[99%] max-w-screen-2xl mx-auto bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
  <div class="flex items-center space-x-4">
    <CardTitle class="text-xl sm:text-2xl font-semibold text-blue-900">
      İş Birliği Tekliflerinizi Bekliyoruz!
    </CardTitle>
    <CardDescription class="text-gray-600">
      Bizimle iş birliği yaparak projelerinizde yeni ufuklara yelken açın.
    </CardDescription>
  </div>
  <CardFooter>
    <Button
      class="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2"
      @click="isCollaborationFormOpen = true"
    >
      İş Birliği Teklif Et <Handshake />
    </Button>
  </CardFooter>
</Card>

</section>

<Dialog v-model:open="isCollaborationFormOpen">
  <DialogContent class="w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] p-6 bg-white rounded-lg shadow-lg">
    <DialogHeader class="text-center mb-4">
      <h2 class="text-2xl font-bold text-gray-800">İş Birliği Talebi</h2>
    </DialogHeader>
    <form @submit.prevent="submitCollaborationForm" class="space-y-4">
      <div>
        <Label for="name">Ad</Label>
        <Input id="name" v-model="collaborationForm.name" required />
      </div>
      <div>
        <Label for="surname">Soyad</Label>
        <Input id="surname" v-model="collaborationForm.surname" required />
      </div>
      <div>
        <Label for="email">E-posta</Label>
        <Input id="email" type="email" v-model="collaborationForm.email" required />
      </div>
      <div>
        <Label for="company">İş Yeri Adı</Label>
        <Input id="company" v-model="collaborationForm.company" required />
      </div>
      <div>
        <Label for="phone">Telefon Numarası (Zorunlu Değil)</Label>
        <Input id="phone" v-model="collaborationForm.phone" />
      </div>
      <div>
        <Label for="message">İş birliği konusu</Label>
        <Textarea id="message" v-model="collaborationForm.message" required />
      </div>
      <div>
        <Label for="message">İş birliğinden istenilenler </Label>
        <Textarea id="message" v-model="collaborationForm.message" required />
      </div>
      <DialogFooter class="flex justify-end">
        <Button type="submit" class="bg-blue-500 text-white hover:bg-blue-600">
          Gönder
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>



    
    <!-- Görsellerle Anlatım (Artık simgelerle anlatım) -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-16 bg-gray-50">
      <!-- Kart 1 -->
      <div class="bg-white rounded-lg shadow-lg p-2 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-blue-600 text-4xl mb-4">
          <MegaphoneIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Hızlı ve Güvenilir İş birliği</h3>
        <p class="text-gray-600">Araştırma gruplarıyla ve merkezleriyle hızlı ve etkili iş birlikleri kurun.</p>
      </div>

      <!-- Kart 2 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-yellow-400 text-4xl mb-4">
          <PeopleIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Araştırma Grupları ile İş birliği</h3>
        <p class="text-gray-600">Erciyes Üniversitesi'ndeki araştırma grupları ile birlikte projeler geliştirin ve iş birlikleri fırsatlarını keşfedin</p>
      </div>

      <!-- Kart 3 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-orange-600 text-4xl mb-4">
          <Network />
        </div>
        <h3 class="text-xl font-semibold mb-2">Araştırma Merkezleri ile Çalışma Fırsatları</h3>
        <p class="text-gray-600">Erciyes Üniversitesi'nin araştırma merkezleriyle iş birliği yaparak yeni projelere imza atın</p>
      </div>

      <!-- Kart 4 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-green-600 text-4xl mb-4">
          <Microscope />
        </div>
        <h3 class="text-xl font-semibold mb-2">Bilimsel Çalışmalarla Geleceği Şekillendirin</h3>
        <p class="text-gray-600">Araştırma gruplarıyla ortak projelere imza atarak bilimsel alanda etkili iş birlikleri yapın</p>
      </div>

      <!-- Kart 5 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-red-500 text-4xl mb-4">
          <SearchIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Projeleri Hemen Keşfedin</h3>
        <p class="text-gray-600">Fırsatları yakalayın! Güncel projelere kolayca ulaşabilirsiniz.</p>
      </div>

      <!-- Kart 6 -->
      <div class="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition transform hover:scale-105">
        <div class="text-pink-600 text-4xl mb-4">
          <GlobeIcon />
        </div>
        <h3 class="text-xl font-semibold mb-2">Herkese Açık ve Kullanıcı Dostu</h3>
        <p class="text-gray-600">Üyelik gerekmeden, herkesin erişebileceği imkanlar burada.</p>
      </div>
    </section>

    <!-- Kullanıcı Bilgilendirme Alanları 
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
    </section> -->
    </div>
</template>

<script setup>
import { Microscope } from 'lucide-vue-next';
import { Network } from 'lucide-vue-next';
import { Handshake } from 'lucide-vue-next';
import MegaphoneIcon from '~/components/ui/MegaphoneIcon';
import CheckIcon from '~/components/ui/CheckIcon';
import GlobeIcon from '~/components/ui/GlobeIcon';
import ArrowUpIcon from '~/components/ui/ArrowUpIcon';
import PeopleIcon from '~/components/ui/PeopleIcon.vue';
import SearchIcon from '~/components/ui/SearchIcon.vue';
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

// Dialog state'i tanımla
const isCollaborationFormOpen = ref(false)

// İş birliği formu için veriler
const collaborationForm = ref({
  name: '',
  surname: '',
  email: '',
  company: '',
  phone: '',
  message: ''
})

// Formu gönderme işlemi
const submitCollaborationForm = () => {
  console.log('Form gönderildi:', collaborationForm.value)
  isCollaborationFormOpen.value = false
}
</script>

<style scoped>
/* Responsive tasarımı geliştirmek için ek stiller yazılabilir. */
</style>
