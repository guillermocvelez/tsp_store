<template>
  <section class="main-section">
    <div>
      <header class="main-header">
        <div>
          <img src="@/assets/icons/headerIcon.svg" alt="header-icon">
        </div>
        <nav>
          <ul>
            <li>
              <router-link :to="{name: 'about'}">Acerca de</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'products'}">Productos</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <div class="cta-container">
        <div>
          <h1>¡Renueva tu estilo con nuestras camisetas exclusivas!</h1>
          <p>Explora nuestra colección única de camisetas diseñadas para destacar. Ya sea que busques comodidad para el día a día o un look que hable por ti, aquí encontrarás la opción perfecta. ¡Compra ahora y recibe envío gratis en pedidos seleccionados!</p>
        </div>
        <button @click="goToProducts">
          Encuentra una camiseta
        </button>
        <div></div>
      </div>
    </div>

    <div class="find_container">
      <div class="auth_actions-container">
        <button class="login-link">
          Iniciar sesión
        </button>
        <button class="register-link">
          Registrarse
        </button>
      </div>
      <img class="hero-img" src="@/assets/images/Hero.png" alt="hero-img">
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const  goToProducts = () => {
  router.push({name: 'products'})
}


</script>

<style scoped>
.main-section {
  height: 100vh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
}

.cta-container {
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #6b6b6b;
  }

  button {
    margin-top: 32px;
    background-color: black;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }

}

.find_container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: black;
}

.hero-img{
  position: absolute;
  right: 0;
  bottom: 0;
  height: 65vh;
}

.main-header {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
}



nav>ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap:32px;
  align-items: center;
}

a {
  color: black;
  font-weight: 500;
}

.auth_actions-container{
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 16px;

  .register-link {
    background-color: white;
    color: black;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }
  .login-link {
    background-color: black;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid white;
    cursor: pointer;
  }
}


</style>

