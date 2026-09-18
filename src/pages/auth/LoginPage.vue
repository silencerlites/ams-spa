<template>
  <q-page class="login-page">
    <div class="login-shell">
      <!-- ================================
           BRAND PANEL
      ================================= -->
      <section class="brand-panel">
        <div class="brand-glow brand-glow-one"></div>
        <div class="brand-glow brand-glow-two"></div>

        <div class="brand-pattern"></div>

        <div class="brand-content">
          <div class="brand-logo">
            <div class="brand-mark">
              S
            </div>

            <div class="brand-name">
              <span class="brand-name-main">
                SRJJ
              </span>

              <span class="brand-name-accent">
                Accounting Services
              </span>
            </div>
          </div>

          <div class="brand-message">
            <div class="brand-badge">
              <q-icon
                name="verified_user"
                size="16px"
              />

              <span>
                Secure Workspace
              </span>
            </div>

            <h1 class="brand-title">
              Accounting made
              <span>
                secure & simple.
              </span>
            </h1>

            <p class="brand-description">
              Access your SRJJ Accounting Management System
              securely and manage your workspace in one place.
            </p>
          </div>

          <div class="brand-features">
            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="lock"
                  size="17px"
                />
              </div>

              <span>
                Secure authentication
              </span>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="shield"
                  size="17px"
                />
              </div>

              <span>
                Protected access
              </span>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="admin_panel_settings"
                  size="17px"
                />
              </div>

              <span>
                Authorized personnel only
              </span>
            </div>
          </div>

          <div class="brand-footer">
            SRJJ Accounting Services
            <span>•</span>
            Philippines
          </div>
        </div>
      </section>

      <!-- ================================
           LOGIN PANEL
      ================================= -->
      <section class="form-panel">
        <div class="mobile-brand">
          <div class="brand-mark brand-mark-small">
            S
          </div>

          <div>
            <div class="mobile-brand-title">
              SRJJ
            </div>

            <div class="mobile-brand-subtitle">
              Accounting Services
            </div>
          </div>
        </div>

        <div class="form-wrapper">
          <div class="form-header">
            <div class="security-icon">
              <q-icon
                name="lock"
                size="24px"
              />
            </div>

            <div class="form-title">
              Authorized Personnel Only
            </div>

            <div class="form-subtitle">
              Use your credentials to continue
            </div>

            <div class="step-indicator">
              <span class="step active"></span>
              <span class="step"></span>
            </div>
          </div>

          <q-form
            class="login-form"
            @submit.prevent="submitLogin"
          >
            <!-- EMAIL -->
            <div class="field-group">
              <label class="field-label">
                EMAIL ADDRESS
              </label>

              <q-input
                v-model="form.email"
                outlined
                type="email"
                autocomplete="email"
                placeholder="name@srjj.com.ph"
                class="auth-input"
                :disable="authStore.loading"
                :rules="emailRules"
                hide-bottom-space
              >
                <template #prepend>
                  <q-icon
                    name="mail_outline"
                  />
                </template>
              </q-input>
            </div>

            <!-- PASSWORD -->
            <div class="field-group">
              <label class="field-label">
                PASSWORD
              </label>

              <q-input
                v-model="form.password"
                outlined
                :type="
                  showPassword
                    ? 'text'
                    : 'password'
                "
                autocomplete="current-password"
                placeholder="Enter your password"
                class="auth-input"
                :disable="authStore.loading"
                :rules="passwordRules"
                hide-bottom-space
              >
                <template #prepend>
                  <q-icon
                    name="lock_outline"
                  />
                </template>

                <template #append>
                  <q-icon
                    class="cursor-pointer"
                    :name="
                      showPassword
                        ? 'visibility_off'
                        : 'visibility'
                    "
                    @click="togglePassword"
                  />
                </template>
              </q-input>
            </div>

            <!-- TURNSTILE -->
            <div class="turnstile-section">
              <TurnstileWidget
                ref="turnstileRef"
                @success="setTurnstileToken"
                @expired="clearTurnstileToken"
                @error="handleTurnstileError"
              />
            </div>

            <!-- CONTINUE -->
            <q-btn
              type="submit"
              unelevated
              no-caps
              class="continue-btn full-width"
              :loading="authStore.loading"
              :disable="
                authStore.loading ||
                !turnstileToken
              "
            >
              <span class="continue-content">
                Continue

                <q-icon
                  name="arrow_forward"
                  size="17px"
                />
              </span>
            </q-btn>

            <div class="security-note">
              <q-icon
                name="verified_user"
                size="15px"
              />

              <span>
                Protected by secure verification
              </span>
            </div>
          </q-form>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TurnstileWidget from '@/components/auth/TurnstileWidget.vue'
import { useLogin } from '@/composables/auth/useLogin'

const turnstileRef =
  ref<{
    reset: () => void
  } | null>(null)

const {
  form,
  showPassword,
  turnstileToken,
  emailRules,
  passwordRules,
  authStore,
  togglePassword,
  setTurnstileToken,
  clearTurnstileToken,
  handleTurnstileError,
  handleLogin,
} = useLogin()

const submitLogin =
  async () => {
    const success =
      await handleLogin()

    if (!success) {
      clearTurnstileToken()

      turnstileRef.value
        ?.reset()
    }
  }
</script>

<style scoped>
/* ==========================================
   PAGE
========================================== */

.login-page {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(25, 116, 64, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 80%,
      rgba(255, 132, 28, 0.06),
      transparent 28%
    ),
    #f4f7f5;
}

/* ==========================================
   SHELL
========================================== */

.login-shell {
  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(430px, 1fr);

  width: 100%;
  max-width: 1000px;

  min-height: 650px;

  background: #ffffff;

  border:
    1px solid
    rgba(26, 94, 56, 0.12);

  border-radius: 28px;

  overflow: hidden;

  box-shadow:
    0 35px 90px
    rgba(24, 73, 46, 0.14);
}

/* ==========================================
   BRAND PANEL
========================================== */

.brand-panel {
  position: relative;

  min-height: 650px;

  overflow: hidden;

  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      #0f4f2c 0%,
      #176a3a 55%,
      #1f7a45 100%
    );
}

.brand-content {
  position: relative;

  z-index: 3;

  display: flex;
  flex-direction: column;

  height: 100%;

  padding:
    45px
    42px
    35px;
}

.brand-pattern {
  position: absolute;

  inset: 0;

  opacity: 0.08;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.35)
      1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.35)
      1px,
      transparent 1px
    );

  background-size:
    42px
    42px;
}

.brand-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(5px);
}

.brand-glow-one {
  width: 300px;
  height: 300px;

  top: -120px;
  right: -100px;

  background:
    rgba(
      255,
      138,
      31,
      0.18
    );
}

.brand-glow-two {
  width: 330px;
  height: 330px;

  bottom: -170px;
  left: -100px;

  background:
    rgba(
      255,
      255,
      255,
      0.08
    );
}

/* ==========================================
   BRAND LOGO
========================================== */

.brand-logo {
  display: flex;
  align-items: center;

  gap: 13px;
}

.brand-mark {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.28
    );

  border-radius: 13px;

  background:
    rgba(
      255,
      255,
      255,
      0.12
    );

  backdrop-filter:
    blur(10px);

  color:
    #ffffff;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 24px;
  font-weight: 700;
}

.brand-name {
  display: flex;

  flex-direction:
    column;

  line-height: 1.2;
}

.brand-name-main {
  font-size: 20px;
  font-weight: 700;
}

.brand-name-accent {
  margin-top: 2px;

  color:
    #ffad65;

  font-size: 12px;
}

/* ==========================================
   BRAND MESSAGE
========================================== */

.brand-message {
  margin-top: auto;
  margin-bottom: 42px;
}

.brand-badge {
  display: inline-flex;

  align-items: center;

  gap: 7px;

  padding:
    7px
    11px;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.18
    );

  border-radius:
    999px;

  background:
    rgba(
      255,
      255,
      255,
      0.09
    );

  font-size: 12px;

  color:
    rgba(
      255,
      255,
      255,
      0.9
    );
}

.brand-title {
  max-width: 380px;

  margin:
    22px
    0
    0;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 37px;
  line-height: 1.16;

  font-weight: 700;
}

.brand-title span {
  display: block;

  color:
    #ffad65;
}

.brand-description {
  max-width: 365px;

  margin:
    19px
    0
    0;

  color:
    rgba(
      255,
      255,
      255,
      0.75
    );

  font-size: 14px;
  line-height: 1.75;
}

/* ==========================================
   BRAND FEATURES
========================================== */

.brand-features {
  display: flex;

  flex-direction: column;

  gap: 12px;

  margin-bottom: auto;
}

.feature {
  display: flex;

  align-items: center;

  gap: 11px;

  color:
    rgba(
      255,
      255,
      255,
      0.84
    );

  font-size: 13px;
}

.feature-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  border-radius: 9px;

  background:
    rgba(
      255,
      255,
      255,
      0.1
    );

  color:
    #ffd1a8;
}

.brand-footer {
  margin-top: 32px;

  color:
    rgba(
      255,
      255,
      255,
      0.48
    );

  font-size: 11px;
}

.brand-footer span {
  margin:
    0
    6px;
}

/* ==========================================
   FORM PANEL
========================================== */

.form-panel {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding:
    52px
    54px;

  background:
    #ffffff;
}

.form-wrapper {
  width: 100%;
  max-width: 390px;
}

/* ==========================================
   MOBILE BRAND
========================================== */

.mobile-brand {
  display: none;
}

.brand-mark-small {
  width: 37px;
  height: 37px;

  border:
    1px solid
    #d8e3db;

  background:
    #edf5f0;

  color:
    #1c7341;

  font-size: 19px;
}

.mobile-brand-title {
  color:
    #173723;

  font-weight: 700;
}

.mobile-brand-subtitle {
  color:
    #718378;

  font-size: 11px;
}

/* ==========================================
   FORM HEADER
========================================== */

.form-header {
  text-align: center;

  margin-bottom: 32px;
}

.security-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  margin:
    0
    auto
    14px;

  border-radius: 14px;

  background:
    #eef7f1;

  color:
    #1e7b44;
}

.form-title {
  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 27px;
  line-height: 1.25;

  font-weight: 700;

  color:
    #16281c;
}

.form-subtitle {
  margin-top: 7px;

  color:
    #667b6d;

  font-size: 14px;
}

.step-indicator {
  display: flex;

  justify-content: center;

  gap: 8px;

  margin-top: 20px;
}

.step {
  width: 30px;
  height: 5px;

  border-radius: 99px;

  background:
    #d7e5dc;
}

.step.active {
  background:
    #1e7b44;
}

/* ==========================================
   FORM
========================================== */

.login-form {
  display: flex;

  flex-direction: column;

  gap: 18px;
}

.field-group {
  width: 100%;
}

.field-label {
  display: block;

  margin:
    0
    0
    7px
    3px;

  color:
    #3e654d;

  font-size: 11px;
  line-height: 15px;

  font-weight: 700;

  letter-spacing: 0.75px;
}

/* ==========================================
   INPUTS
========================================== */

.auth-input
  :deep(
    .q-field__control
  ) {
  height: 44px;
  min-height: 44px;

  border-radius: 13px;

  background:
    #f8faf9;
}

.auth-input
  :deep(
    .q-field__control::before
  ) {
  border:
    1px solid
    #d8e1db;

  border-radius: 13px;
}

.auth-input
  :deep(
    .q-field__control::after
  ) {
  border:
    1px solid
    #92b5a0;

  border-radius: 13px;
}

.auth-input
  :deep(
    .q-field__control-container
  ) {
  height: 44px;
}

.auth-input
  :deep(
    .q-field__native
  ),
.auth-input
  :deep(
    .q-field__input
  ) {
  height: 44px;
  min-height: 44px;

  padding-top: 0;
  padding-bottom: 0;

  color:
    #3e604c;

  font-size: 13px;
  line-height: 44px;
}

.auth-input
  :deep(
    .q-field__native::placeholder
  ),
.auth-input
  :deep(
    .q-field__input::placeholder
  ) {
  color:
    #809288;

  opacity: 1;
}

/* ==========================================
   INPUT ICONS
========================================== */

.auth-input
  :deep(
    .q-field__marginal
  ) {
  height: 44px;
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-input
  :deep(
    .q-field__prepend
  ) {
  height: 44px;

  display: flex;
  align-items: center;

  padding-right: 9px;
}

.auth-input
  :deep(
    .q-field__append
  ) {
  height: 44px;

  display: flex;
  align-items: center;

  padding-left: 9px;
}

.auth-input
  :deep(
    .q-field__prepend .q-icon
  ),
.auth-input
  :deep(
    .q-field__append .q-icon
  ) {
  color:
    #91a59a;

  font-size: 17px;
}

/* ==========================================
   TURNSTILE
========================================== */

.turnstile-section {
  display: flex;

  justify-content: center;

  width: 100%;

  margin:
    3px
    0;
}

.form-panel
  :deep(
    .turnstile-wrapper
  ) {
  width: 100%;
}

.form-panel
  :deep(
    .turnstile-container
  ) {
  display: flex;

  justify-content: center;

  width: 100%;
}

/* ==========================================
   BUTTON
========================================== */

.continue-btn {
  min-height: 47px;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      #ff8b25 0%,
      #ff7411 100%
    ) !important;

  color:
    #ffffff;

  font-size: 14px;
  font-weight: 700;

  box-shadow:
    0 11px 25px
    rgba(
      245,
      124,
      25,
      0.24
    );

  transition:
    transform
    0.2s ease,
    box-shadow
    0.2s ease;
}

.continue-btn:not(.disabled):hover {
  transform:
    translateY(-1px);

  box-shadow:
    0 14px 30px
    rgba(
      245,
      124,
      25,
      0.3
    );
}

.continue-content {
  display: inline-flex;

  align-items: center;

  gap: 8px;
}

/* ==========================================
   SECURITY NOTE
========================================== */

.security-note {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 6px;

  margin-top: -3px;

  color:
    #829187;

  font-size: 11px;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (
  max-width: 850px
) {
  .login-page {
    padding:
      20px
      14px;
  }

  .login-shell {
    display: block;

    max-width:
      500px;

    min-height:
      auto;
  }

  .brand-panel {
    display:
      none;
  }

  .form-panel {
    display: block;

    padding:
      32px
      28px
      38px;
  }

  .mobile-brand {
    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 35px;
  }

  .form-wrapper {
    max-width:
      100%;
  }
}

@media (
  max-width: 480px
) {
  .login-page {
    padding:
      0;

    align-items:
      stretch;
  }

  .login-shell {
    width:
      100%;

    max-width:
      none;

    min-height:
      100vh;

    border:
      none;

    border-radius:
      0;

    box-shadow:
      none;
  }

  .form-panel {
    min-height:
      100vh;

    padding:
      28px
      20px;
  }

  .form-title {
    font-size:
      24px;
  }
}
</style>