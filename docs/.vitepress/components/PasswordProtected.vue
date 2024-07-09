<template>
  <div>
    <div v-if="authenticated" class="content">
      <slot></slot>
    </div>
    <div v-else class="password-protected">
      <div class="password-form">
        <input 
          v-model="password" 
          type="password" 
          placeholder="Digite a senha" 
          class="password-input"
          @keyup.enter="checkPassword"
        >
        <button 
          @click="checkPassword" 
          class="password-button"
        >
          Entrar
        </button>
      </div>
      <p v-if="wrongPassword" class="password-error">
        Senha incorreta, tente novamente.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      authenticated: false,
      wrongPassword: false
    };
  },
  methods: {
    checkPassword() {
      const correctPassword = '123'; // Substitua '123' pela senha desejada
      if (this.password === correctPassword) {
        this.authenticated = true;
        this.wrongPassword = false;
      } else {
        this.wrongPassword = true;
      }
    }
  }
};
</script>

<style scoped>
.password-protected {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid var(--vp-c-default-2);
  border-radius: var(--vp-c-light-1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--vp-c-default-soft);
}

.password-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.password-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--vp-c-default-2);
  border-radius: var(--vp-c-light-1);
  font-size: 1rem;
  background-color: var(--vp-c-default-1);
  color: var(--vp-c-text-1);
}

.password-button {
  padding: 10px 20px;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-button-brand-text);
  border: none;
  border-radius: var(--vp-c-light-1);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.password-button:hover {
  background-color: var(--vp-c-brand-2);
}

.password-error {
  margin-top: 10px;
  padding: 10px;
  background-color: var(--vp-c-danger-soft);
  border: 1px solid var(--vp-c-danger-2);
  border-radius: var(--vp-c-light-1);
  color: var(--vp-c-danger-3);
  text-align: center;
}

.content {
  padding: 20px;
  background-color: var(--vp-c-default-1);
  border-radius: var(--vp-c-light-1);
  border: 1px solid var(--vp-c-default-2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

