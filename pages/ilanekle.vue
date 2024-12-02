<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { type DateValue, CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const d = new Date() // Minimum tarih olarak bugünün tarihi
const date = ref(d.getDate())
const month = ref(d.getMonth() + 1)
const year = ref(d.getFullYear())
const router = useRouter()
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
const formData = ref({
  title: '', // Başlık
  name: '',
  description: '',
  features: '',
  email: '',
  type: '',
  location: '', // Konum
  date: '', // Tarih
})
const isFormSubmitted = ref(false)
const errorMessage = ref('')
const errorFields = ref<string[]>([])

const validateForm = () => {
  const { title, name, description, features, email, type, location } = formData.value
  errorFields.value = []

  if (!title) errorFields.value.push('Başlık')
  if (!name) errorFields.value.push('İş Yeri İsmi')
  if (!description) errorFields.value.push('İş Tanımı')
  if (!features) errorFields.value.push('Aranan Özellikler')
  if (!email) errorFields.value.push('E-posta')
  if (!type) errorFields.value.push('İlan Türü')
  if (!location) errorFields.value.push('Konum')

  if (errorFields.value.length > 0) {
    errorMessage.value = `Lütfen şu alanları doldurun: ${errorFields.value.join(', ')}.`
    return false
  }

  errorMessage.value = ''
  return true
}

// İlan ekle ve admin sayfasına yönlendirilmek üzere verileri gönder
const submitForm = () => {
  if (validateForm()) {
    formData.value.date = value.value.toString()
    // Admin verilerine ekle (localStorage üzerinden simüle ediyoruz)
    const existingData = JSON.parse(localStorage.getItem('ilanlar') || '[]')
    existingData.push({ ...formData.value, id: Date.now() }) // Her ilana bir ID ekledik
    localStorage.setItem('ilanlar', JSON.stringify(existingData))

    isFormSubmitted.value = true
  }
}

const goToHomePage = () => {
  router.push('/') // Ana sayfaya yönlendirme
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <Card
      v-if="!isFormSubmitted"
      class="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white shadow-md rounded-md"
    >
      <CardHeader>
        <CardTitle>İlan Ekle</CardTitle>
        <CardDescription>
          "Aradığınız niteliklerde bir eleman bulmak için hemen ilan ekleyin ve fırsatları kaçırmayın!"
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <!-- Başlık -->
            <div class="flex flex-col space-y-1.5">
              <Label for="title">Başlık</Label>
              <Input
                id="title"
                placeholder="İlan başlığını giriniz lütfen"
                v-model="formData.title"
                autocomplete="off"
              />
            </div>

            <!-- İş Yeri İsmi -->
            <div class="flex flex-col space-y-1.5">
              <Label for="name">İş Yeri İsmi</Label>
              <Input
                id="name"
                placeholder="İş yeri isminizi giriniz lütfen"
                v-model="formData.name"
                autocomplete="off"
              />
            </div>

            <!-- İş Tanımı -->
            <div class="flex flex-col space-y-1.5">
              <Label for="description">İş Tanımı</Label>
              <Textarea
                id="description"
                placeholder="İş tanımınızı giriniz lütfen"
                v-model="formData.description"
                autocomplete="off"
              />
            </div>

            <!-- Aranan Özellikler -->
            <div class="flex flex-col space-y-1.5">
              <Label for="features">Aranan Özellikler</Label>
              <Textarea
                id="features"
                placeholder="Aradığınız özellikleri giriniz lütfen"
                v-model="formData.features"
                autocomplete="off"
              />
            </div>

            <!-- E-posta -->
            <div class="flex flex-col space-y-1.5">
              <Label for="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                placeholder="E-posta adresinizi giriniz lütfen"
                v-model="formData.email"
                autocomplete="off"
              />
            </div>

            <!-- İlan Türü -->
            <div class="flex flex-col space-y-1.5">
              <Label for="type">İlan Türü</Label>
              <Select v-model="formData.type">
                <SelectTrigger id="type">
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Tam Zamanlı">Tam Zamanlı</SelectItem>
                  <SelectItem value="Yarı Zamanlı">Yarı Zamanlı</SelectItem>
                  <SelectItem value="Stajyer">Stajyer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <!-- Konum -->
            <div class="flex flex-col space-y-1.5">
              <Label for="location">Konum</Label>
              <Input
                id="location"
                placeholder="Konum bilgisini giriniz lütfen"
                v-model="formData.location"
                autocomplete="off"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter class="flex flex-col gap-4 px-6 pb-6">
        <div>
          <Label>Son Geçerlilik Tarihi</Label>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="w-full text-start font-normal"
              >
                <span>{{ value ? value.toString() : 'Tarih Seçin' }}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar
                v-model="value"
                locale="tr"
                :min-value="new CalendarDate(year, month, date)"
                :weekday-format="'short'"
                calendar-label="Son Geçerlilik Tarihi"
                initial-focus
                class="rounded-md border w-full"
              />
            </PopoverContent>
          </Popover>
        </div>

        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <Button
          class="w-full bg-blue-900 text-white hover:bg-blue-600"
          @click.prevent="submitForm"
        >
          İlan Ekle
        </Button>
      </CardFooter>
    </Card>

    <Card
      v-else
      class="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white shadow-md rounded-md"
    >
      <CardHeader>
        <CardTitle>Teşekkürler!</CardTitle>
        <CardDescription>
          İlanınız tarafımızca kontrol edildikten sonra yayınlanacaktır.
        </CardDescription>
      </CardHeader>
      <CardFooter class="flex flex-col gap-4 px-6 pb-6">
        <Button
          class="w-full bg-blue-500 text-white hover:bg-blue-600"
          @click="goToHomePage"
        >
          Ana Sayfaya Dön
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
