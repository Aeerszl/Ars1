<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import BadgeCheckIcon from '~/components/ui/BadgeCheckIcon.vue'
import BadgeXIcon from '~/components/ui/BadgeXIcon.vue'
// Ilan tür tanımı
interface Ilan {
  id: number
  title: string // Başlık eklendi
  name: string
  location: string // Konum eklendi
  description: string
  features: string
  email: string
  type: string
  date: string // YYYY-MM-DD formatında olmalı
  status: string // "pending" veya "approved"
}

const ilanlar = ref<Ilan[]>([])
const email = ref('')
const password = ref('')
const isLoggedIn = ref(false)
const errorMessage = ref('')

// Kullanıcı giriş kontrolü
const handleLogin = () => {
  if (email.value === 'random@gmail.com' && password.value === '123123') {
    isLoggedIn.value = true
    fetchIlanlar()
  } else {
    errorMessage.value = 'E-posta veya şifre hatalı.'
  }
}

// Süresi dolmuş ilanları kaldırma
const removeExpiredIlanlar = () => {
  const today = new Date().toISOString().split('T')[0] // Bugünün tarihini alın
  ilanlar.value = ilanlar.value.filter((ilan) => ilan.date >= today)
  localStorage.setItem('ilanlar', JSON.stringify(ilanlar.value)) // Güncel listeyi kaydedin
}

// localStorage'dan ilanları çekme
const fetchIlanlar = () => {
  const data = JSON.parse(localStorage.getItem('ilanlar') || '[]') as Ilan[]
  ilanlar.value = data
  removeExpiredIlanlar() // Süresi dolmuş ilanları kontrol et ve kaldır
}

// İlan onaylama
const onaylaIlan = (id: number) => {
  ilanlar.value = ilanlar.value.map((ilan) =>
    ilan.id === id ? { ...ilan, status: 'approved' } : ilan
  )
  localStorage.setItem('ilanlar', JSON.stringify(ilanlar.value))
}

// İlan reddetme
const reddetIlan = (id: number) => {
  ilanlar.value = ilanlar.value.filter((ilan) => ilan.id !== id)
  localStorage.setItem('ilanlar', JSON.stringify(ilanlar.value))
}
</script>

<template>
  <div v-if="!isLoggedIn" class="min-h-screen flex justify-center items-center bg-gray-100">
    <Card class="max-w-md w-full p-6 md:p-8 shadow-lg">
      <CardHeader class="text-center">
        <CardTitle class="text-2xl font-semibold">Admin Giriş</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-6">
          <div>
            <Label for="email" class="block text-lg font-medium text-gray-700">E-posta</Label>
            <Input
              v-model="email"
              id="email"
              type="email"
              placeholder="E-posta adresinizi girin"
              class="w-full text-lg"
            />
          </div>
          <div>
            <Label for="password" class="block text-lg font-medium text-gray-700">Şifre</Label>
            <Input
              v-model="password"
              id="password"
              type="password"
              placeholder="Şifrenizi girin"
              class="w-full text-lg"
            />
          </div>
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm mt-4 text-center">{{ errorMessage }}</p>
      </CardContent>
      <CardFooter>
        <Button @click="handleLogin" class="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white">
          Giriş Yap
        </Button>
      </CardFooter>
    </Card>
  </div>

  <div v-else class="min-h-screen p-6 bg-gray-100 page-container">
    <h1 class="text-2xl mb-6 mt-8 text-center font-bold">Admin Paneli</h1>
    <div v-for="ilan in ilanlar" :key="ilan.id" class="mb-4">
      <Card>
        <CardHeader>
          <CardTitle>{{ ilan.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>İş Yeri İsmi:</strong> {{ ilan.name }}</p>
          <p><strong>Konum:</strong> {{ ilan.location }}</p>
          <p><strong>İş Tanımı:</strong> {{ ilan.description }}</p>
          <p><strong>Aranan Özellikler:</strong> {{ ilan.features }}</p>
          <p><strong>E-posta:</strong> {{ ilan.email }}</p>
          <p><strong>Son Geçerlilik Tarihi:</strong> {{ ilan.date }}</p>
        </CardContent>
        <CardFooter class="flex justify-end space-x-2">
          <Button
            class="bg-red-500 hover:bg-red-600 text-white"
            @click="reddetIlan(ilan.id)"
          >
           <BadgeXIcon/>
          </Button>
          <Button
            :class="{
              'bg-green-500 hover:bg-green-600 text-white': ilan.status !== 'approved',
              'bg-gray-400 text-white cursor-not-allowed': ilan.status === 'approved',
            }"
            :disabled="ilan.status === 'approved'"
            @click="onaylaIlan(ilan.id)"
          >
            <template v-if="ilan.status === 'approved'">Onaylandı</template>
            <template v-else><BadgeCheckIcon/></template>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
