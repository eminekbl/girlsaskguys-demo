<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top ">
      <div class="container-fluid">
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand d-md-none" href="#">
          <img src="@/assets/Logo.png" alt="">
        </a>

        <div class="navbar-collapse collapse justify-content-between" id="navbarsExample05" style="">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item" v-for="menu in menuList">
              <a class="nav-link active d-flex align-items-center gap-1" aria-current="page" :href="menu.link">
                <img :src="menu.icon" alt="menu icon" height="32" width="32">{{ menu.name }}
              </a>
            </li>

          </ul>
          <a class="navbar-brand d-none d-md-block" href="#">
            <img src="@/assets/Logo.png" alt="">
          </a>
          <div class="d-flex gap-5 align-items-center">
            <div class="btn btn-light">
              <img src="@/assets/icons/message-add.svg" alt="">
              Sor
            </div>
            <div class="btn btn-text text-white">
              <img src="@/assets/icons/profile-circle.svg" alt="">
              Giriş Yap / Üye Ol
            </div>

          </div>
        </div>
      </div>
    </nav>
    <div class="top-bar d-none d-md-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center p-2 gap-3">
        <div v-for="image in images" class="d-flex rounded border border-1 gap-2 p-1 m-auto align-items-center">
          <img class="rounded" :src="image.download_url" :alt="image.author" width="32" height="32">
          <div class="">
            {{ image.author }}
          </div>
        </div>
      </div>
      <div class="stacked-images d-flex">
        <div class="d-flex rounded border border-1 p-1 m-auto">
          <img v-for="image in images" class="rounded stacked-image" :src="image.download_url" :alt="image.author"
               width="32" height="32">
        </div>
      </div>
    </div>
  </header>

</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import MenuIcon from '@/assets/icons/menu.svg';
import DiscoverIcon from '@/assets/icons/discover.svg';
import SearchIcon from '@/assets/icons/search.svg';
import axios from "axios";

interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export default defineComponent({
  name: "Header",
  data() {

    return {
      menuList: [
        {
          name: "Menu",
          icon: MenuIcon,
          link: "#"
        }, {
          name: "Keşfet",
          icon: DiscoverIcon,
          link: "#"
        }, {
          name: "Ara",
          icon: SearchIcon,
          link: "#"
        },
      ]
    };
  },

  setup() {
    const images = ref<Image[]>([]);
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?limit=4&page=${randomPage}`)
        images.value = response.data.map(image => ({
          ...image,
          download_url: `https://picsum.photos/id/${image.id}/32/32`
        }));
      } catch (error) {
        console.error('Error fetching images:', error);
      }

    };

    onMounted(fetchImages);
    return {
      images
    };
  }
});
</script>

<style scoped>
header{
  margin-top: var(--navbar-height);
}
.navbar {
  background-color: #7545FF;
  min-height: var(--navbar-height);
}

.top-bar {

  height: 60px;
  box-shadow: 0px 1px 4px 0px #00000014;

}

.stacked-image {
  border: 2px solid white;
  width: 32px;
  height: 32px;
  margin-left: -16px; /* Önceki resmin ortasından başlamak için negatif margin */
  transition: all 0.3s ease;
}

.stacked-image:first-child {
  margin-left: 0; /* İlk resim için margin yok */
}

.stacked-image:hover {
  transform: scale(1.2);
}
</style>
