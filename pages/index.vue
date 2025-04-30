<template>
  <section class="page bg-white px-3 py-3">
    <a href="https://www.jonathan-martz.de?ref=anfragen" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.jmse.cloud/jmse-logo.svg" class="mx-auto" alt="">
    </a>
    <section class="grid grid-cols-6 gap-3 prose">
      <div class="col-span-6 md:col-span-2">
        <img src="https://cdn.jmse.cloud/avatar-2024-modified.png" alt="">
      </div>
      <div class="col-span-6 md:col-span-4">
        <h3 class="font-bold text-lg text-black">Wer bin ich ?</h3>
        <p class="text-sm text-black">
          Ich bin Jonathan, 31 Jahr alt und seit 2012 Web Entwickler.
        </p>
        <p class="text-sm text-black">
          Hauptsächlich habe ich meine Erfahrung seit 2016 im Ecommerce gemacht bei der <br> Firma
          <a href="https://www.flagbit.de/?ref=jmartz" class="text-[#1f6fed] no-underline" target="_blank">
            Flagbit GmbH Co. KG</a>
        </p>
        <p class="text-sm text-black">Hauptberuflich entwickele ich aktuell an <br> der <a
            class="text-[#1f6fed] no-underline" href="https://autohaussoftware-genesys.de/?ref=jmartz" target="_blank">
            Software GeNeSys
          </a> mit.</p>
      </div>
      <div class="col-span-6">
        <h3 class="font-bold text-lg text-black">Entstehung Geschichte</h3>
        <p class="text-sm text-black">
          Angefangen hat alles 2023 während der Arbeitslosigkeit August - 2023.
          Mit dem eigenen Willen und der Unterstützung des Arbeitsamt habe ich das Gewerbe angemeldet.
        </p>
        <p class="text-sm block text-center text-black">Aktuell bin ich auf der Suche nach Kunden und Projekte zum
          Portfolio aufbau.</p>
      </div>
      <div class="col-span-6">
        <div class="divider divider-primary text-black mt-0">Anfragen</div>
        <form action="" class="grid grid-cols-6 gap-3" data-theme="light">
          <div class="col-span-6 md:col-span-2">
            <div class="form-control">
              <label class="floating-label">
                <span>Name</span>
                <input type="text" v-model="name" placeholder="John Doe" class="input w-full" />
              </label>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2">
            <div class="form-control">
              <label class="floating-label">
                <span>Email</span>
                <input type="email" v-model="email" placeholder="mail@jmartz.de" class="input w-full" />
              </label>
            </div>
          </div>
          <div class="col-span-6 md:col-span-2">
            <div class="form-control">
              <label class="floating-label">
                <span>Telefon</span>
                <input type="email" v-model="email" placeholder="02261 58639" class="input w-full" />
              </label>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3">
            <label class="floating-label">
              <span>Wonach suchst du ?</span>
              <select v-model="typ" class="select w-full">
                <option value="webseite">ein neue Webseite</option>
                <option value="shop">ein neuer Online Shop</option>
                <option value="neuer-shop">überarbeitung des Online Shop</option>
                <option value="neuer-webseite">überarbeitung des Webseite</option>
                <option value="sonstige">Sonstiges</option>
              </select>
            </label>
          </div>
          <div class="col-span-6 md:col-span-3">
            <label class="floating-label">
              <span>Was ist deine Preis Vorstellung ?</span>
              <select name="" id="" class="select w-full">
                <option value="200-500">200-500 €</option>
                <option value="500-2500">500-2500 €</option>
              </select>
            </label>
          </div>
          <div class="col-span-6">
            <button type="submit" class="btn btn-sm btn-primary btn-block px-3 py-3">Formular abschicken</button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
const name = ref('');
const email = ref('');
const typ = ref('webseite');
</script>

<style>
.background-pattern {
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image: radial-gradient(circle at center center, #000, #e5e5f7), repeating-radial-gradient(circle at center center, #000, #000, 10px, transparent 20px, transparent 10px);
  background-blend-mode: multiply;
}
</style>