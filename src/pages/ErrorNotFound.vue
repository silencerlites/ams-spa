<template>
  <q-page class="error-page">
    <!-- =====================================
         ANIMATED BACKGROUND
    ====================================== -->
    <div class="background-grid"></div>
    <div class="scan-line"></div>

    <div class="orb orb-green"></div>
    <div class="orb orb-orange"></div>

    <!-- Floating error particles -->
    <div class="error-particles">
      <span class="particle particle-1">×</span>
      <span class="particle particle-2">!</span>
      <span class="particle particle-3">404</span>
      <span class="particle particle-4">×</span>
      <span class="particle particle-5">!</span>
      <span class="particle particle-6">?</span>
    </div>

    <!-- =====================================
         MAIN WRAPPER
    ====================================== -->
    <div class="error-wrapper">
      <!-- BRAND -->
      <div class="brand">
        <div class="brand-mark">
          S
        </div>

        <div class="brand-content">
          <strong>
            SRJJ
          </strong>

          <span>
            Accounting Services
          </span>
        </div>

        <div class="system-indicator">
          <span class="system-indicator-dot"></span>

          System Active
        </div>
      </div>

      <!-- =====================================
           ERROR CARD
      ====================================== -->
      <div class="error-card">
        <div class="top-accent"></div>

        <!-- Animated warning strips -->
        <div class="warning-strip warning-strip-left"></div>
        <div class="warning-strip warning-strip-right"></div>

        <!-- Decorative giant background 404 -->
        <div class="background-number">
          404
        </div>

        <div class="error-content">
          <!-- STATUS -->
          <div class="status-badge">
            <div class="error-pulse">
              <span></span>
            </div>

            <span class="status-text">
              ERROR · PAGE NOT FOUND
            </span>
          </div>

          <!-- =====================================
               ERROR ICON
          ====================================== -->
          <div class="error-icon-area">
            <div class="radar-ring radar-ring-1"></div>
            <div class="radar-ring radar-ring-2"></div>
            <div class="radar-ring radar-ring-3"></div>

            <div class="error-icon-glow"></div>

            <div class="error-icon-box">
              <q-icon
                name="warning_amber"
                size="44px"
              />

              <div class="icon-error-badge">
                !
              </div>
            </div>
          </div>

          <!-- =====================================
               GLITCH 404
          ====================================== -->
          <div
            class="glitch-number"
            data-text="404"
          >
            404
          </div>

          <!-- TITLE -->
          <h1 class="error-title">
            Something went
            <span>
              off the books.
            </span>
          </h1>

          <!-- DESCRIPTION -->
          <p class="error-description">
            The page you're trying to access could not be found.
            It may have been moved, removed, or the address may
            no longer be valid.
          </p>

          <!-- =====================================
               SYSTEM ERROR MESSAGE
          ====================================== -->
          <div class="system-message">
            <div class="terminal-top">
              <div class="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span class="terminal-label">
                SYSTEM MESSAGE
              </span>
            </div>

            <div class="terminal-content">
              <span class="terminal-prefix">
                &gt;
              </span>

              <span class="terminal-text">
                ERROR_ROUTE_NOT_FOUND
              </span>

              <span class="terminal-cursor"></span>
            </div>
          </div>

          <!-- DIVIDER -->
          <div class="signal-divider">
            <span></span>
            <span></span>
            <span class="signal-active"></span>
            <span></span>
            <span></span>
          </div>

          <!-- =====================================
               ACTIONS
          ====================================== -->
          <div class="actions">
            <q-btn
              unelevated
              no-caps
              class="home-btn"
              to="/"
            >
              <q-icon
                name="home"
                size="18px"
              />

              <span>
                Return to Home
              </span>

              <q-icon
                name="arrow_forward"
                size="17px"
                class="home-arrow"
              />
            </q-btn>

            <q-btn
              flat
              no-caps
              class="back-btn"
              @click="goBack"
            >
              <q-icon
                name="west"
                size="16px"
              />

              Previous page
            </q-btn>
          </div>

          <!-- =====================================
               HELP
          ====================================== -->
          <div class="help-box">
            <div class="help-icon">
              <q-icon
                name="support_agent"
                size="19px"
              />
            </div>

            <div class="help-copy">
              <strong>
                Still having trouble?
              </strong>

              <span>
                Contact your system administrator if you believe
                this page should be available.
              </span>
            </div>

            <div class="help-status">
              <span></span>

              Support
            </div>
          </div>
        </div>
      </div>

      <!-- =====================================
           FOOTER
      ====================================== -->
      <div class="page-footer">
        <div class="secure-status">
          <q-icon
            name="verified_user"
            size="14px"
          />

          Secure System
        </div>

        <div class="footer-separator"></div>

        <div class="copyright">
          © 2026 SRJJ Accounting Services
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  void router.push('/')
}
</script>

<style scoped>
/* ==========================================
   PAGE
========================================== */

.error-page {
  position: relative;

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 34px 20px;

  overflow: hidden;

  background:
    radial-gradient(
      circle at 12% 15%,
      rgba(30, 123, 68, 0.09),
      transparent 29%
    ),
    radial-gradient(
      circle at 87% 82%,
      rgba(244, 126, 27, 0.08),
      transparent 27%
    ),
    linear-gradient(
      145deg,
      #f8faf9 0%,
      #f2f6f3 100%
    );
}

/* ==========================================
   BACKGROUND GRID
========================================== */

.background-grid {
  position: absolute;

  inset: 0;

  opacity: 0.48;

  background-image:
    linear-gradient(
      rgba(31, 122, 69, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(31, 122, 69, 0.035) 1px,
      transparent 1px
    );

  background-size:
    44px
    44px;

  mask-image:
    radial-gradient(
      circle at center,
      #000 0%,
      transparent 76%
    );

  pointer-events: none;

  animation:
    grid-move
    22s
    linear
    infinite;
}

@keyframes grid-move {
  from {
    background-position:
      0
      0;
  }

  to {
    background-position:
      44px
      44px;
  }
}

/* ==========================================
   SCAN LINE
========================================== */

.scan-line {
  position: absolute;

  top: -15%;
  left: 0;

  width: 100%;
  height: 110px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(31, 122, 69, 0.015),
      rgba(31, 122, 69, 0.055),
      rgba(31, 122, 69, 0.015),
      transparent
    );

  pointer-events: none;

  animation:
    scan-page
    8s
    linear
    infinite;
}

@keyframes scan-page {
  from {
    transform:
      translateY(-120px);
  }

  to {
    transform:
      translateY(calc(100vh + 220px));
  }
}

/* ==========================================
   BACKGROUND ORBS
========================================== */

.orb {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(4px);
}

.orb-green {
  width: 380px;
  height: 380px;

  top: -190px;
  left: -150px;

  background:
    rgba(31, 122, 69, 0.075);

  animation:
    orb-green
    12s
    ease-in-out
    infinite;
}

.orb-orange {
  width: 340px;
  height: 340px;

  right: -150px;
  bottom: -170px;

  background:
    rgba(245, 128, 29, 0.075);

  animation:
    orb-orange
    14s
    ease-in-out
    infinite;
}

@keyframes orb-green {
  0%,
  100% {
    transform:
      translate(0, 0)
      scale(1);
  }

  50% {
    transform:
      translate(45px, 35px)
      scale(1.12);
  }
}

@keyframes orb-orange {
  0%,
  100% {
    transform:
      translate(0, 0)
      scale(1);
  }

  50% {
    transform:
      translate(-42px, -32px)
      scale(1.09);
  }
}

/* ==========================================
   ERROR PARTICLES
========================================== */

.error-particles {
  position: absolute;

  inset: 0;

  pointer-events: none;

  overflow: hidden;
}

.particle {
  position: absolute;

  color:
    rgba(31, 122, 69, 0.13);

  font-family:
    monospace;

  font-weight: 700;

  user-select: none;

  animation:
    particle-float
    8s
    ease-in-out
    infinite;
}

.particle-1 {
  top: 14%;
  left: 12%;

  font-size: 32px;

  animation-delay:
    -1s;
}

.particle-2 {
  top: 24%;
  right: 12%;

  color:
    rgba(239, 126, 28, 0.15);

  font-size: 26px;

  animation-delay:
    -3s;
}

.particle-3 {
  bottom: 17%;
  left: 13%;

  font-size: 17px;

  animation-delay:
    -5s;
}

.particle-4 {
  bottom: 20%;
  right: 17%;

  font-size: 30px;

  animation-delay:
    -2s;
}

.particle-5 {
  top: 52%;
  left: 5%;

  color:
    rgba(239, 126, 28, 0.15);

  font-size: 22px;

  animation-delay:
    -4s;
}

.particle-6 {
  top: 10%;
  right: 27%;

  font-size: 19px;

  animation-delay:
    -6s;
}

@keyframes particle-float {
  0%,
  100% {
    opacity: 0.35;

    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    opacity: 1;

    transform:
      translateY(-22px)
      rotate(12deg);
  }
}

/* ==========================================
   MAIN WRAPPER
========================================== */

.error-wrapper {
  position: relative;

  z-index: 10;

  width: 100%;
  max-width: 535px;

  animation:
    wrapper-enter
    0.7s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes wrapper-enter {
  from {
    opacity: 0;

    transform:
      translateY(25px)
      scale(0.97);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

/* ==========================================
   BRAND
========================================== */

.brand {
  display: flex;
  align-items: center;

  margin-bottom: 17px;

  animation:
    brand-enter
    0.55s
    0.08s
    ease-out
    both;
}

@keyframes brand-enter {
  from {
    opacity: 0;

    transform:
      translateY(-10px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

.brand-mark {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 39px;
  height: 39px;

  border-radius: 11px;

  background:
    linear-gradient(
      145deg,
      #145d34,
      #25834d
    );

  color: #ffffff;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 19px;
  font-weight: 700;

  box-shadow:
    0
    9px
    20px
    rgba(30, 123, 68, 0.17);

  transition:
    transform
    0.25s
    ease;
}

.brand-mark:hover {
  transform:
    rotate(-6deg)
    scale(1.06);
}

.brand-content {
  display: flex;

  flex-direction: column;

  margin-left: 10px;
}

.brand-content strong {
  color: #294232;

  font-size: 13px;
}

.brand-content span {
  margin-top: 1px;

  color: #87978d;

  font-size: 9px;
}

.system-indicator {
  display: flex;

  align-items: center;

  gap: 6px;

  margin-left: auto;

  color: #74887b;

  font-size: 9px;
}

.system-indicator-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #2da260;

  animation:
    system-pulse
    2s
    infinite;
}

@keyframes system-pulse {
  0%,
  100% {
    box-shadow:
      0
      0
      0
      3px
      rgba(45, 162, 96, 0.1);
  }

  50% {
    box-shadow:
      0
      0
      0
      7px
      rgba(45, 162, 96, 0);
  }
}

/* ==========================================
   CARD
========================================== */

.error-card {
  position: relative;

  overflow: hidden;

  border:
    1px solid
    rgba(211, 226, 216, 0.96);

  border-radius: 27px;

  background:
    rgba(255, 255, 255, 0.9);

  backdrop-filter:
    blur(22px);

  box-shadow:
    0
    35px
    90px
    rgba(35, 79, 49, 0.13);

  animation:
    card-error-enter
      0.65s
      cubic-bezier(0.22, 1, 0.36, 1)
      both,
    card-float
      6s
      1.3s
      ease-in-out
      infinite;
}

@keyframes card-error-enter {
  0% {
    opacity: 0;

    transform:
      translateY(25px)
      scale(0.96);
  }

  55% {
    transform:
      translateY(-2px)
      translateX(-1px)
      scale(1.003);
  }

  60% {
    transform:
      translateY(0)
      translateX(2px);
  }

  66% {
    transform:
      translateX(-2px);
  }

  72% {
    transform:
      translateX(1px);
  }

  100% {
    opacity: 1;

    transform:
      translate(0)
      scale(1);
  }
}

@keyframes card-float {
  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-4px);
  }
}

/* ==========================================
   TOP ACCENT
========================================== */

.top-accent {
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 5px;

  background:
    linear-gradient(
      90deg,
      #1e7b44 0%,
      #1e7b44 63%,
      #667f42 79%,
      #f2871e 100%
    );

  background-size:
    200%
    100%;

  animation:
    accent-slide
    4s
    linear
    infinite;
}

@keyframes accent-slide {
  from {
    background-position:
      100%
      0;
  }

  to {
    background-position:
      -100%
      0;
  }
}

/* ==========================================
   WARNING STRIPS
========================================== */

.warning-strip {
  position: absolute;

  z-index: 1;

  width: 70px;
  height: 5px;

  opacity: 0.15;

  background:
    repeating-linear-gradient(
      90deg,
      #f5841e 0,
      #f5841e 8px,
      transparent 8px,
      transparent 13px
    );
}

.warning-strip-left {
  top: 22px;
  left: 18px;
}

.warning-strip-right {
  right: 18px;
  bottom: 18px;
}

/* ==========================================
   BACKGROUND NUMBER
========================================== */

.background-number {
  position: absolute;

  top: -29px;
  left: 50%;

  transform:
    translateX(-50%);

  color:
    rgba(31, 122, 69, 0.028);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 220px;

  font-weight: 700;

  line-height: 1;

  letter-spacing: -13px;

  user-select: none;

  pointer-events: none;

  animation:
    background-number-pulse
    5s
    ease-in-out
    infinite;
}

@keyframes background-number-pulse {
  0%,
  100% {
    opacity: 0.65;

    transform:
      translateX(-50%)
      scale(1);
  }

  50% {
    opacity: 1;

    transform:
      translateX(-50%)
      scale(1.035);
  }
}

/* ==========================================
   ERROR CONTENT
========================================== */

.error-content {
  position: relative;

  z-index: 5;

  padding:
    42px
    42px
    34px;

  text-align: center;
}

/* ==========================================
   STATUS BADGE
========================================== */

.status-badge {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding:
    7px
    11px;

  border:
    1px solid
    rgba(231, 164, 108, 0.25);

  border-radius: 999px;

  background:
    rgba(255, 245, 236, 0.76);

  color: #c56a22;

  font-size: 9px;
  font-weight: 800;

  letter-spacing: 0.85px;

  animation:
    status-enter
    0.55s
    0.15s
    ease-out
    both;
}

@keyframes status-enter {
  from {
    opacity: 0;

    transform:
      translateY(-8px)
      scale(0.9);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

.error-pulse {
  position: relative;

  width: 8px;
  height: 8px;
}

.error-pulse span {
  position: absolute;

  inset: 0;

  border-radius: 50%;

  background: #f07e1a;

  animation:
    error-status-pulse
    1.4s
    infinite;
}

@keyframes error-status-pulse {
  0% {
    box-shadow:
      0 0 0 0
      rgba(240, 126, 26, 0.35);
  }

  70% {
    box-shadow:
      0 0 0 7px
      rgba(240, 126, 26, 0);
  }

  100% {
    box-shadow:
      0 0 0 0
      rgba(240, 126, 26, 0);
  }
}

.status-text {
  animation:
    error-text-flicker
    5s
    infinite;
}

@keyframes error-text-flicker {
  0%,
  94%,
  100% {
    opacity: 1;
  }

  95% {
    opacity: 0.45;
  }

  96% {
    opacity: 1;
  }

  97% {
    opacity: 0.6;
  }
}

/* ==========================================
   ERROR ICON
========================================== */

.error-icon-area {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;

  margin:
    19px
    auto
    0;

  animation:
    icon-enter
    0.6s
    0.22s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes icon-enter {
  from {
    opacity: 0;

    transform:
      scale(0.75);
  }

  to {
    opacity: 1;

    transform:
      scale(1);
  }
}

.error-icon-glow {
  position: absolute;

  width: 90px;
  height: 90px;

  border-radius: 50%;

  background:
    rgba(241, 129, 30, 0.12);

  filter:
    blur(20px);

  animation:
    icon-glow
    2.6s
    ease-in-out
    infinite;
}

@keyframes icon-glow {
  0%,
  100% {
    opacity: 0.6;

    transform:
      scale(0.85);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.2);
  }
}

.radar-ring {
  position: absolute;

  border:
    1px solid
    rgba(239, 127, 28, 0.12);

  border-radius: 50%;

  animation:
    radar-wave
    3s
    infinite;
}

.radar-ring-1 {
  width: 75px;
  height: 75px;

  animation-delay:
    0s;
}

.radar-ring-2 {
  width: 95px;
  height: 95px;

  animation-delay:
    0.6s;
}

.radar-ring-3 {
  width: 115px;
  height: 115px;

  animation-delay:
    1.2s;
}

@keyframes radar-wave {
  0% {
    opacity: 0;

    transform:
      scale(0.65);
  }

  40% {
    opacity: 0.7;
  }

  100% {
    opacity: 0;

    transform:
      scale(1.15);
  }
}

.error-icon-box {
  position: relative;

  z-index: 5;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  border:
    1px solid
    #f1d8c3;

  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      #fffaf6,
      #fff1e5
    );

  color: #ef7f1e;

  box-shadow:
    0
    13px
    30px
    rgba(239, 127, 30, 0.13);

  animation:
    icon-error-motion
    4s
    1.2s
    ease-in-out
    infinite;
}

@keyframes icon-error-motion {
  0%,
  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  40% {
    transform:
      translateY(-5px);
  }

  44% {
    transform:
      translateY(-5px)
      rotate(-2deg);
  }

  48% {
    transform:
      translateY(-5px)
      rotate(2deg);
  }

  52% {
    transform:
      translateY(-5px)
      rotate(-1deg);
  }

  57% {
    transform:
      translateY(-5px)
      rotate(0);
  }
}

.icon-error-badge {
  position: absolute;

  top: -6px;
  right: -6px;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border:
    3px solid
    #ffffff;

  border-radius: 50%;

  background: #f17e1c;

  color: #ffffff;

  font-size: 10px;
  font-weight: 800;

  animation:
    badge-bounce
    2.2s
    infinite;
}

@keyframes badge-bounce {
  0%,
  100% {
    transform:
      scale(1);
  }

  50% {
    transform:
      scale(1.16);
  }
}

/* ==========================================
   GLITCH 404
========================================== */

.glitch-number {
  position: relative;

  display: inline-block;

  margin-top: 4px;

  color: #1e7b44;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 76px;
  line-height: 1;

  font-weight: 700;

  letter-spacing: -4px;

  text-shadow:
    0
    8px
    25px
    rgba(31, 122, 69, 0.1);

  animation:
    glitch-main
    6s
    infinite;
}

.glitch-number::before,
.glitch-number::after {
  content:
    attr(data-text);

  position: absolute;

  inset: 0;

  pointer-events: none;
}

.glitch-number::before {
  color:
    rgba(242, 128, 30, 0.65);

  transform:
    translateX(2px);

  clip-path:
    inset(
      5%
      0
      70%
      0
    );

  animation:
    glitch-before
    3.8s
    infinite
    steps(1);
}

.glitch-number::after {
  color:
    rgba(31, 122, 69, 0.42);

  transform:
    translateX(-2px);

  clip-path:
    inset(
      65%
      0
      5%
      0
    );

  animation:
    glitch-after
    4.5s
    infinite
    steps(1);
}

@keyframes glitch-main {
  0%,
  91%,
  100% {
    transform:
      translate(0);
  }

  92% {
    transform:
      translate(-2px, 1px);
  }

  93% {
    transform:
      translate(3px, -1px);
  }

  94% {
    transform:
      translate(-1px);
  }

  95% {
    transform:
      translate(0);
  }
}

@keyframes glitch-before {
  0%,
  88%,
  100% {
    transform:
      translateX(2px);
  }

  89% {
    transform:
      translateX(-5px);
  }

  91% {
    transform:
      translateX(4px);
  }

  93% {
    transform:
      translateX(1px);
  }
}

@keyframes glitch-after {
  0%,
  84%,
  100% {
    transform:
      translateX(-2px);
  }

  85% {
    transform:
      translateX(5px);
  }

  87% {
    transform:
      translateX(-4px);
  }

  89% {
    transform:
      translateX(-1px);
  }
}

/* ==========================================
   TITLE
========================================== */

.error-title {
  margin:
    17px
    0
    0;

  color: #182c1f;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 29px;
  line-height: 1.2;

  letter-spacing: -0.5px;

  animation:
    content-up
    0.55s
    0.32s
    ease-out
    both;
}

.error-title span {
  display: block;

  color: #1e7b44;
}

/* ==========================================
   DESCRIPTION
========================================== */

.error-description {
  max-width: 390px;

  margin:
    13px
    auto
    0;

  color: #718278;

  font-size: 12px;
  line-height: 1.7;

  animation:
    content-up
    0.55s
    0.38s
    ease-out
    both;
}

@keyframes content-up {
  from {
    opacity: 0;

    transform:
      translateY(12px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

/* ==========================================
   TERMINAL ERROR
========================================== */

.system-message {
  max-width: 350px;

  margin:
    19px
    auto
    0;

  overflow: hidden;

  border:
    1px solid
    #dce5df;

  border-radius: 11px;

  background:
    #18261d;

  text-align: left;

  box-shadow:
    0
    8px
    20px
    rgba(25, 44, 31, 0.09);

  animation:
    terminal-enter
    0.55s
    0.46s
    ease-out
    both;
}

@keyframes terminal-enter {
  from {
    opacity: 0;

    transform:
      translateY(8px)
      scale(0.97);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

.terminal-top {
  display: flex;

  align-items: center;

  padding:
    7px
    10px;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.06);

  background:
    rgba(255, 255, 255, 0.025);
}

.terminal-dots {
  display: flex;

  gap: 4px;
}

.terminal-dots span {
  width: 5px;
  height: 5px;

  border-radius: 50%;
}

.terminal-dots span:nth-child(1) {
  background: #f17e1c;
}

.terminal-dots span:nth-child(2) {
  background: #e4a63f;
}

.terminal-dots span:nth-child(3) {
  background: #36a766;
}

.terminal-label {
  margin-left: auto;

  color:
    rgba(255, 255, 255, 0.35);

  font-family: monospace;

  font-size: 7px;

  letter-spacing: 0.8px;
}

.terminal-content {
  display: flex;

  align-items: center;

  min-height: 37px;

  padding:
    0
    11px;

  font-family: monospace;

  font-size: 9px;
}

.terminal-prefix {
  margin-right: 7px;

  color: #f2871f;
}

.terminal-text {
  color: #79c895;
}

.terminal-cursor {
  width: 6px;
  height: 12px;

  margin-left: 3px;

  background: #77c993;

  animation:
    terminal-cursor
    0.8s
    steps(1)
    infinite;
}

@keyframes terminal-cursor {
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
   SIGNAL DIVIDER
========================================== */

.signal-divider {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 5px;

  height: 20px;

  margin:
    15px
    0
    11px;

  animation:
    content-up
    0.55s
    0.5s
    ease-out
    both;
}

.signal-divider span {
  width: 4px;
  height: 4px;

  border-radius: 99px;

  background: #ceddd3;

  animation:
    signal-wave
    1.5s
    ease-in-out
    infinite;
}

.signal-divider span:nth-child(1) {
  animation-delay: 0s;
}

.signal-divider span:nth-child(2) {
  animation-delay: 0.12s;
}

.signal-divider span:nth-child(3) {
  animation-delay: 0.24s;
}

.signal-divider span:nth-child(4) {
  animation-delay: 0.36s;
}

.signal-divider span:nth-child(5) {
  animation-delay: 0.48s;
}

.signal-divider .signal-active {
  background: #1e7b44;
}

@keyframes signal-wave {
  0%,
  100% {
    height: 4px;
  }

  50% {
    height: 14px;
  }
}

/* ==========================================
   BUTTONS
========================================== */

.actions {
  display: flex;

  flex-direction: column;

  gap: 8px;

  animation:
    content-up
    0.55s
    0.56s
    ease-out
    both;
}

.home-btn {
  position: relative;

  min-height: 48px;

  overflow: hidden;

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      #ff8a23,
      #f77812
    ) !important;

  color: #ffffff;

  font-size: 12px;
  font-weight: 700;

  box-shadow:
    0
    11px
    27px
    rgba(246, 122, 18, 0.23);

  transition:
    transform
    0.2s
    ease,
    box-shadow
    0.2s
    ease;
}

.home-btn :deep(.q-btn__content) {
  gap: 8px;
}

.home-btn::before {
  content: '';

  position: absolute;

  top: -60%;
  left: -60%;

  width: 30%;
  height: 230%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.42),
      transparent
    );

  transform:
    rotate(20deg);

  animation:
    button-shine
    4s
    1.2s
    ease-in-out
    infinite;
}

@keyframes button-shine {
  0% {
    left: -60%;
  }

  23% {
    left: 135%;
  }

  100% {
    left: 135%;
  }
}

.home-btn:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0
    16px
    32px
    rgba(246, 122, 18, 0.3);
}

.home-arrow {
  transition:
    transform
    0.2s
    ease;
}

.home-btn:hover
  .home-arrow {
  transform:
    translateX(4px);
}

.back-btn {
  min-height: 39px;

  border-radius: 10px;

  color: #5c7564;

  font-size: 11px;

  font-weight: 600;
}

.back-btn :deep(.q-btn__content) {
  gap: 7px;
}

.back-btn
  :deep(.q-icon) {
  transition:
    transform
    0.2s
    ease;
}

.back-btn:hover
  :deep(.q-icon) {
  transform:
    translateX(-4px);
}

/* ==========================================
   HELP BOX
========================================== */

.help-box {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-top: 17px;

  padding:
    11px
    12px;

  border:
    1px solid
    #e1e8e3;

  border-radius: 12px;

  background:
    #f9fbfa;

  text-align: left;

  animation:
    content-up
    0.55s
    0.62s
    ease-out
    both;

  transition:
    transform
    0.2s
    ease,
    box-shadow
    0.2s
    ease;
}

.help-box:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0
    9px
    24px
    rgba(39, 88, 54, 0.07);
}

.help-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 34px;
  height: 34px;

  border-radius: 10px;

  background: #eaf5ee;

  color: #397d53;
}

.help-copy {
  flex: 1;
}

.help-copy strong {
  display: block;

  color: #455e4d;

  font-size: 10px;
}

.help-copy span {
  display: block;

  margin-top: 2px;

  color: #8a9990;

  font-size: 8px;
  line-height: 1.45;
}

.help-status {
  display: flex;

  align-items: center;

  gap: 5px;

  color: #72867a;

  font-size: 8px;
}

.help-status span {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #31a15e;

  animation:
    help-dot
    1.8s
    infinite;
}

@keyframes help-dot {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }
}

/* ==========================================
   FOOTER
========================================== */

.page-footer {
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  padding:
    16px
    6px
    0;

  animation:
    footer-enter
    0.55s
    0.72s
    ease-out
    both;
}

@keyframes footer-enter {
  from {
    opacity: 0;

    transform:
      translateY(8px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

.secure-status {
  display: flex;

  align-items: center;

  gap: 5px;

  color: #648073;

  font-size: 8px;
}

.secure-status .q-icon {
  color: #2d8050;
}

.footer-separator {
  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: #b8c5bc;
}

.copyright {
  color: #95a199;

  font-size: 8px;
}

/* ==========================================
   MOBILE
========================================== */

@media (
  max-width: 600px
) {
  .error-page {
    align-items: flex-start;

    padding:
      22px
      14px;
  }

  .error-content {
    padding:
      38px
      20px
      26px;
  }

  .error-card {
    border-radius: 21px;
  }

  .glitch-number {
    font-size: 66px;
  }

  .error-title {
    font-size: 25px;
  }

  .error-description {
    font-size: 11px;
  }

  .system-message {
    width: 100%;
  }

  .background-number {
    font-size: 165px;
  }

  .error-particles {
    opacity: 0.55;
  }

  .system-indicator {
    display: none;
  }

  .page-footer {
    flex-direction: column;

    gap: 7px;
  }

  .footer-separator {
    display: none;
  }
}

/* ==========================================
   REDUCED MOTION
========================================== */

@media (
  prefers-reduced-motion:
  reduce
) {
  *,
  *::before,
  *::after {
    animation-duration:
      0.01ms !important;

    animation-iteration-count:
      1 !important;

    transition-duration:
      0.01ms !important;

    scroll-behavior:
      auto !important;
  }
}
</style>