<template>
  <q-page class="otp-page">
    <div class="otp-shell">
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
                Secure Verification
              </span>
            </div>

            <h1 class="brand-title">
              One more step
              <span>
                to stay secure.
              </span>
            </h1>

            <p class="brand-description">
              Enter the verification code sent to your
              registered email address to complete your
              secure sign in.
            </p>
          </div>

          <div class="brand-features">
            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="mail_outline"
                  size="17px"
                />
              </div>

              <span>
                Email verification
              </span>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="schedule"
                  size="17px"
                />
              </div>

              <span>
                Time-limited security code
              </span>
            </div>

            <div class="feature">
              <div class="feature-icon">
                <q-icon
                  name="security"
                  size="17px"
                />
              </div>

              <span>
                Protected authentication
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
           OTP PANEL
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
                name="shield"
                size="24px"
              />
            </div>

            <div class="form-title">
              Verify Your Identity
            </div>

            <div class="form-subtitle">
              Enter the 6-digit verification code sent to your email
            </div>

            <div class="step-indicator">
              <span class="step active"></span>
              <span class="step active"></span>
            </div>
          </div>

          <q-form
            class="otp-form"
            @submit.prevent="handleVerifyOtp"
          >
            <div class="otp-label">
              VERIFICATION CODE
            </div>

            <div class="otp-field">
              <!-- Real input -->
              <q-input
                :model-value="otp"
                autofocus
                type="text"
                inputmode="numeric"
                maxlength="6"
                autocomplete="one-time-code"
                class="otp-input"
                :disable="authStore.otpLoading"
                :rules="otpRules"
                hide-bottom-space
                @focus="isOtpFocused = true"
                @blur="isOtpFocused = false"
                @update:model-value="sanitizeOtp"
              />

              <!-- Visual OTP boxes -->
              <div
                class="otp-boxes"
                aria-hidden="true"
              >
                <div
                  v-for="(digit, index) in otpDigits"
                  :key="index"
                  class="otp-box"
                  :class="{
                    active:
                      isOtpFocused &&
                      index === activeBoxIndex,
                    filled:
                      Boolean(digit),
                  }"
                >
                  {{ digit }}
                </div>
              </div>
            </div>

            <div class="otp-helper">
              <q-icon
                name="mail_outline"
                size="15px"
              />

              <span>
                Code sent to your registered email
              </span>
            </div>

            <q-btn
              type="submit"
              unelevated
              no-caps
              class="verify-btn full-width"
              :loading="authStore.otpLoading"
              :disable="!isOtpValid"
            >
              <span class="verify-content">
                Verify & Continue

                <q-icon
                  name="arrow_forward"
                  size="17px"
                />
              </span>
            </q-btn>

            <q-btn
              flat
              no-caps
              class="different-email-btn full-width"
              :disable="authStore.otpLoading"
              @click="handleBackToLogin"
            >
              <q-icon
                name="west"
                size="15px"
                class="q-mr-sm"
              />

              Use a different email
            </q-btn>

            <div class="security-note">
              <q-icon
                name="lock"
                size="14px"
              />

              <span>
                Your verification code is securely validated
              </span>
            </div>
          </q-form>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import { useOtp } from '@/composables/auth/useOtp'

const {
  otp,
  otpRules,
  isOtpValid,
  authStore,
  sanitizeOtp,
  handleVerifyOtp,
  handleBackToLogin,
} = useOtp()

const isOtpFocused =
  ref(false)

const otpDigits =
  computed(() =>
    Array.from(
      { length: 6 },
      (_, index) =>
        otp.value[index] ?? '',
    ),
  )

const activeBoxIndex =
  computed(() =>
    Math.min(
      otp.value.length,
      5,
    ),
  )
</script>

<style scoped>
/* ==========================================
   PAGE
========================================== */

.otp-page {
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

.otp-shell {
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
    rgba(255, 138, 31, 0.18);
}

.brand-glow-two {
  width: 330px;
  height: 330px;

  bottom: -170px;
  left: -100px;

  background:
    rgba(255, 255, 255, 0.08);
}

/* ==========================================
   BRAND
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
    rgba(255, 255, 255, 0.28);

  border-radius: 13px;

  background:
    rgba(255, 255, 255, 0.12);

  backdrop-filter:
    blur(10px);

  color: #ffffff;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 24px;
  font-weight: 700;
}

.brand-name {
  display: flex;
  flex-direction: column;

  line-height: 1.2;
}

.brand-name-main {
  font-size: 20px;
  font-weight: 700;
}

.brand-name-accent {
  margin-top: 2px;

  color: #ffad65;

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
    rgba(255, 255, 255, 0.18);

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.09);

  color:
    rgba(255, 255, 255, 0.9);

  font-size: 12px;
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

  color: #ffad65;
}

.brand-description {
  max-width: 365px;

  margin:
    19px
    0
    0;

  color:
    rgba(255, 255, 255, 0.75);

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
    rgba(255, 255, 255, 0.84);

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
    rgba(255, 255, 255, 0.1);

  color: #ffd1a8;
}

.brand-footer {
  margin-top: 32px;

  color:
    rgba(255, 255, 255, 0.48);

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

  background: #ffffff;
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

  background: #edf5f0;

  color: #1c7341;

  font-size: 19px;
}

.mobile-brand-title {
  color: #173723;

  font-weight: 700;
}

.mobile-brand-subtitle {
  color: #718378;

  font-size: 11px;
}

/* ==========================================
   HEADER
========================================== */

.form-header {
  margin-bottom: 31px;

  text-align: center;
}

.security-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  margin:
    0
    auto
    15px;

  border-radius: 15px;

  background:
    linear-gradient(
      145deg,
      #edf7f1,
      #e2f1e8
    );

  color: #1e7b44;

  box-shadow:
    0 7px 18px
    rgba(31, 122, 69, 0.08);
}

.form-title {
  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 27px;
  line-height: 1.25;

  font-weight: 700;

  color: #16281c;
}

.form-subtitle {
  max-width: 330px;

  margin:
    8px
    auto
    0;

  color: #667b6d;

  font-size: 13px;
  line-height: 1.6;
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

  background: #d7e5dc;
}

.step.active {
  background: #1e7b44;
}

/* ==========================================
   FORM
========================================== */

.otp-form {
  display: flex;

  flex-direction: column;

  align-items: center;
}

.otp-label {
  align-self: flex-start;

  margin:
    0
    0
    9px
    2px;

  color: #3e654d;

  font-size: 11px;
  line-height: 15px;

  font-weight: 700;

  letter-spacing: 0.75px;
}

/* ==========================================
   OTP FIELD
========================================== */

.otp-field {
  position: relative;

  width: 288px;
  height: 48px;
}

.otp-input {
  position: absolute;

  inset: 0;

  z-index: 10;

  width: 288px;
  height: 48px;

  opacity: 0;

  cursor: text;
}

.otp-input
  :deep(.q-field__control) {
  width: 288px;

  height: 48px;
  min-height: 48px;
}

.otp-input
  :deep(.q-field__bottom),
.otp-input
  :deep(.q-field__messages) {
  display: none;
}

/* ==========================================
   OTP BOXES
========================================== */

.otp-boxes {
  position: absolute;

  inset: 0;

  display: grid;

  grid-template-columns:
    repeat(6, 48px);

  width: 288px;
  height: 48px;

  pointer-events: none;
}

.otp-box {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  box-sizing: border-box;

  border-top:
    1px solid
    #d3ded6;

  border-bottom:
    1px solid
    #d3ded6;

  border-right:
    1px solid
    #d3ded6;

  background:
    #fafcfb;

  color:
    #203a2b;

  font-size: 16px;

  font-weight: 600;
}

.otp-box:first-child {
  border-left:
    1px solid
    #d3ded6;

  border-radius:
    10px
    0
    0
    10px;
}

.otp-box:last-child {
  border-radius:
    0
    10px
    10px
    0;
}

/* ==========================================
   OTP FOCUS
========================================== */

.otp-box.active {
  z-index: 2;

  background:
    #ffffff;

  box-shadow:
    inset 0 0 0 2px
    #1e7b44;
}

.otp-box:first-child.active {
  border-radius:
    10px
    0
    0
    10px;
}

.otp-box:last-child.active {
  border-radius:
    0
    10px
    10px
    0;
}

.otp-box.active::after {
  content: '';

  position: absolute;

  top: 14px;
  left: 50%;

  width: 1px;
  height: 20px;

  background: #253d2e;

  transform:
    translateX(-50%);

  animation:
    otp-caret
    1s
    steps(1)
    infinite;
}

.otp-box.active:not(:empty)::after {
  left: 68%;
}

@keyframes otp-caret {
  0%,
  49% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

/* ==========================================
   OTP HELPER
========================================== */

.otp-helper {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 6px;

  margin-top: 15px;

  color: #73867a;

  font-size: 11px;
}

/* ==========================================
   VERIFY BUTTON
========================================== */

.verify-btn {
  min-height: 47px;

  margin-top: 27px;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      #ff8b25 0%,
      #ff7411 100%
    ) !important;

  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  box-shadow:
    0 11px 25px
    rgba(245, 124, 25, 0.24);

  transition:
    transform
    0.2s ease,
    box-shadow
    0.2s ease;
}

.verify-btn:not(.disabled):hover {
  transform:
    translateY(-1px);

  box-shadow:
    0 14px 30px
    rgba(245, 124, 25, 0.3);
}

.verify-btn.disabled {
  opacity: 0.55 !important;
}

.verify-content {
  display: inline-flex;

  align-items: center;

  gap: 8px;
}

/* ==========================================
   BACK BUTTON
========================================== */

.different-email-btn {
  min-height: 37px;

  margin-top: 8px;

  color: #53715f;

  font-size: 12px;
  font-weight: 600;
}

/* ==========================================
   SECURITY NOTE
========================================== */

.security-note {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 6px;

  margin-top: 13px;

  color: #89988f;

  font-size: 10px;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (
  max-width: 850px
) {
  .otp-page {
    padding:
      20px
      14px;
  }

  .otp-shell {
    display: block;

    max-width: 500px;

    min-height: auto;
  }

  .brand-panel {
    display: none;
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
    max-width: 100%;
  }
}

@media (
  max-width: 480px
) {
  .otp-page {
    padding: 0;

    align-items: stretch;
  }

  .otp-shell {
    width: 100%;

    max-width: none;

    min-height: 100vh;

    border: none;

    border-radius: 0;

    box-shadow: none;
  }

  .form-panel {
    min-height: 100vh;

    padding:
      28px
      20px;
  }

  .form-title {
    font-size: 24px;
  }

  .otp-field,
  .otp-input {
    width: 264px;
  }

  .otp-input
    :deep(.q-field__control) {
    width: 264px;
  }

  .otp-boxes {
    width: 264px;

    grid-template-columns:
      repeat(6, 44px);
  }

  .otp-box {
    width: 44px;
  }
}
</style>