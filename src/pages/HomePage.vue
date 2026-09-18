<template>
  <q-page class="home-page">
    <!-- =========================================
         BACKGROUND EFFECTS
    ========================================== -->
    <div class="page-grid"></div>

    <div class="page-orb orb-left"></div>
    <div class="page-orb orb-right"></div>

    <!-- =========================================
         NAVBAR
    ========================================== -->
    <header class="navbar">
      <div class="navbar-inner">
        <div class="brand">
          <div class="brand-mark">
            S
          </div>

          <div class="brand-copy">
            <strong>SRJJ</strong>
            <span>Accounting Services</span>
          </div>
        </div>

        <nav class="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#security">Security</a>
        </nav>

        <q-btn
          unelevated
          no-caps
          class="nav-login-btn"
          to="/login"
        >
          Login

          <q-icon
            name="arrow_forward"
            size="17px"
          />
        </q-btn>
      </div>
    </header>

    <main>
      <!-- =========================================
           HERO
      ========================================== -->
      <section
        id="home"
        class="hero-section"
      >
        <div class="hero-scan"></div>

        <div class="hero-container">
          <!-- LEFT -->
          <div class="hero-copy">
            <div class="hero-chip hero-animate hero-delay-1">
              <span class="chip-pulse"></span>

              Secure Accounting Workspace
            </div>

            <h1 class="hero-title hero-animate hero-delay-2">
              Accounting made
              <span>clearer, smarter,</span>
              and more secure.
            </h1>

            <p class="hero-description hero-animate hero-delay-3">
              A modern accounting management platform designed
              to simplify financial operations, improve visibility,
              and keep sensitive information protected.
            </p>

            <div class="hero-actions hero-animate hero-delay-4">
              <q-btn
                unelevated
                no-caps
                class="primary-btn"
                to="/login"
              >
                <span>Access Workspace</span>

                <q-icon
                  name="arrow_forward"
                  size="18px"
                  class="primary-arrow"
                />
              </q-btn>

              <q-btn
                flat
                no-caps
                class="secondary-btn"
                href="#features"
              >
                Explore Features

                <q-icon
                  name="south"
                  size="15px"
                />
              </q-btn>
            </div>

            <div class="trust-row hero-animate hero-delay-5">
              <div class="trust-item">
                <q-icon name="verified_user" />
                Secure Login
              </div>

              <div class="trust-dot"></div>

              <div class="trust-item">
                <q-icon name="shield" />
                Protected Data
              </div>

              <div class="trust-dot"></div>

              <div class="trust-item">
                <q-icon name="lock" />
                Controlled Access
              </div>
            </div>
          </div>

          <!-- =========================================
               DASHBOARD PREVIEW
          ========================================== -->
          <div class="preview-wrapper hero-animate hero-delay-3">
            <div class="preview-glow"></div>

            <div class="dashboard-card">
              <div class="dashboard-top">
                <div>
                  <div class="dashboard-eyebrow">
                    ACCOUNTING OVERVIEW
                  </div>

                  <div class="dashboard-title">
                    Financial Dashboard
                  </div>
                </div>

                <div class="live-badge">
                  <span class="live-dot"></span>

                  Live
                </div>
              </div>

              <!-- STATS -->
              <div class="stats-grid">
                <div class="stat-card">
                  <div class="stat-header">
                    <div class="stat-icon green">
                      <q-icon name="payments" />
                    </div>

                    <span class="stat-up">
                      +12.4%
                    </span>
                  </div>

                  <div class="stat-label">
                    Total Revenue
                  </div>

                  <div class="stat-value">
                    ₱1.28M
                  </div>
                </div>

                <div class="stat-card">
                  <div class="stat-header">
                    <div class="stat-icon orange">
                      <q-icon name="receipt_long" />
                    </div>

                    <span class="stat-muted">
                      38%
                    </span>
                  </div>

                  <div class="stat-label">
                    Expenses
                  </div>

                  <div class="stat-value">
                    ₱684K
                  </div>
                </div>
              </div>

              <!-- CHART -->
              <div class="chart-card">
                <div class="chart-header">
                  <div>
                    <div class="chart-eyebrow">
                      PERFORMANCE
                    </div>

                    <div class="chart-title">
                      Monthly cash flow
                    </div>
                  </div>

                  <span class="chart-year">
                    2026
                  </span>
                </div>

                <div class="chart">
                  <span class="grid-line line-1"></span>
                  <span class="grid-line line-2"></span>
                  <span class="grid-line line-3"></span>

                  <div class="bars">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                    <div class="bar bar-4"></div>
                    <div class="bar bar-5"></div>
                    <div class="bar bar-6"></div>
                    <div class="bar bar-7 orange"></div>
                  </div>
                </div>

                <div class="months">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>

              <!-- ACTIVITY -->
              <div class="activity-card">
                <div class="activity-icon">
                  <q-icon
                    name="task_alt"
                    size="18px"
                  />
                </div>

                <div class="activity-copy">
                  <strong>
                    Reconciliation completed
                  </strong>

                  <span>
                    Updated 12 minutes ago
                  </span>
                </div>

                <q-icon
                  name="more_horiz"
                  class="activity-more"
                />
              </div>
            </div>

            <!-- FLOATING STATUS -->
            <div class="floating-card floating-security">
              <div class="floating-icon">
                <q-icon
                  name="shield"
                  size="18px"
                />
              </div>

              <div>
                <strong>Secure</strong>
                <span>Protected access</span>
              </div>
            </div>

            <div class="floating-card floating-online">
              <span class="online-pulse"></span>

              <div>
                <strong>System Online</strong>
                <span>All services operational</span>
              </div>
            </div>
          </div>
        </div>

        <div class="scroll-indicator">
          <span>SCROLL</span>

          <div class="scroll-line">
            <span></span>
          </div>
        </div>
      </section>

      <!-- =========================================
           FEATURES
      ========================================== -->
      <section
        id="features"
        class="features-section"
      >
        <div class="section-container">
          <div class="section-heading reveal">
            <div class="section-kicker">
              PLATFORM FEATURES
            </div>

            <h2>
              Built for a better
              <span>accounting workflow.</span>
            </h2>

            <p>
              Everything you need to manage financial operations
              securely and efficiently from one workspace.
            </p>
          </div>

          <div class="features-grid">
            <article class="feature-card reveal">
              <div class="feature-top">
                <div class="feature-icon">
                  <q-icon
                    name="account_balance_wallet"
                    size="22px"
                  />
                </div>

                <span class="feature-number">
                  01
                </span>
              </div>

              <h3>
                Financial Management
              </h3>

              <p>
                Manage records, transactions, balances,
                and financial data through one organized platform.
              </p>

              <div class="feature-action">
                Explore

                <q-icon
                  name="north_east"
                  size="16px"
                />
              </div>
            </article>

            <article class="feature-card feature-middle reveal">
              <div class="feature-top">
                <div class="feature-icon orange">
                  <q-icon
                    name="analytics"
                    size="22px"
                  />
                </div>

                <span class="feature-number">
                  02
                </span>
              </div>

              <h3>
                Reports & Analytics
              </h3>

              <p>
                Understand financial performance using
                structured reporting and useful operational insights.
              </p>

              <div class="feature-action">
                Explore

                <q-icon
                  name="north_east"
                  size="16px"
                />
              </div>
            </article>

            <article class="feature-card reveal">
              <div class="feature-top">
                <div class="feature-icon">
                  <q-icon
                    name="admin_panel_settings"
                    size="22px"
                  />
                </div>

                <span class="feature-number">
                  03
                </span>
              </div>

              <h3>
                Secure Access
              </h3>

              <p>
                Protect sensitive information through
                secure authentication and controlled authorization.
              </p>

              <div class="feature-action">
                Explore

                <q-icon
                  name="north_east"
                  size="16px"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- =========================================
           SECURITY
      ========================================== -->
      <section
        id="security"
        class="security-section"
      >
        <div class="security-card reveal">
          <div class="security-copy">
            <div class="security-kicker">
              <q-icon
                name="shield"
                size="16px"
              />

              SECURITY FIRST
            </div>

            <h2>
              Financial data deserves
              <span>serious protection.</span>
            </h2>

            <p>
              Multiple layers of authentication and authorization
              help ensure that sensitive information remains available
              only to authorized personnel.
            </p>

            <div class="security-list">
              <div class="security-item">
                <div class="check">
                  <q-icon
                    name="check"
                    size="14px"
                  />
                </div>

                Two-factor authentication
              </div>

              <div class="security-item">
                <div class="check">
                  <q-icon
                    name="check"
                    size="14px"
                  />
                </div>

                Cloudflare Turnstile protection
              </div>

              <div class="security-item">
                <div class="check">
                  <q-icon
                    name="check"
                    size="14px"
                  />
                </div>

                Secure account sessions
              </div>
            </div>

            <q-btn
              unelevated
              no-caps
              class="security-btn"
              to="/login"
            >
              Secure Login

              <q-icon
                name="arrow_forward"
                size="17px"
              />
            </q-btn>
          </div>

          <!-- SECURITY ANIMATION -->
          <div class="security-visual">
            <div class="radar-circle radar-circle-1"></div>
            <div class="radar-circle radar-circle-2"></div>
            <div class="radar-circle radar-circle-3"></div>

            <div class="security-core">
              <div class="core-glow"></div>

              <q-icon
                name="shield"
                size="68px"
              />
            </div>

            <div class="security-node node-1">
              <q-icon
                name="lock"
                size="17px"
              />
            </div>

            <div class="security-node node-2">
              <q-icon
                name="key"
                size="17px"
              />
            </div>

            <div class="security-node node-3">
              <q-icon
                name="verified_user"
                size="17px"
              />
            </div>

            <div class="orbit-dot"></div>
          </div>
        </div>
      </section>

      <!-- =========================================
           CTA
      ========================================== -->
      <section class="cta-section">
        <div class="cta-card reveal">
          <div>
            <div class="cta-kicker">
              AUTHORIZED PERSONNEL
            </div>

            <h2>
              Ready to enter your workspace?
            </h2>

            <p>
              Continue securely to the SRJJ Accounting
              Management System.
            </p>
          </div>

          <q-btn
            unelevated
            no-caps
            class="cta-btn"
            to="/login"
          >
            Continue to Login

            <q-icon
              name="arrow_forward"
              size="18px"
            />
          </q-btn>
        </div>
      </section>
    </main>

    <!-- =========================================
         FOOTER
    ========================================== -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            S
          </div>

          <div>
            <strong>SRJJ</strong>
            <span>Accounting Services</span>
          </div>
        </div>

        <div class="copyright">
          © 2026 SRJJ Accounting Services
        </div>

        <div class="footer-status">
          <span></span>

          Secure System
        </div>
      </div>
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
} from 'vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const elements =
    document.querySelectorAll<HTMLElement>('.reveal')

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add('show')

        observer?.unobserve(entry.target)
      })
    },
    {
      threshold: 0.14,
    },
  )

  elements.forEach(element => {
    observer?.observe(element)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
/* ==========================================
   PAGE
========================================== */

.home-page {
  position: relative;

  min-height: 100vh;

  overflow-x: hidden;

  background:
    #f6f9f7;

  color:
    #17271d;
}

/* ==========================================
   GLOBAL BACKGROUND
========================================== */

.page-grid {
  position: fixed;

  inset: 0;

  z-index: 0;

  pointer-events: none;

  opacity: 0.35;

  background-image:
    linear-gradient(
      rgba(31, 122, 69, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(31, 122, 69, 0.03) 1px,
      transparent 1px
    );

  background-size:
    50px
    50px;

  mask-image:
    linear-gradient(
      to bottom,
      #000,
      transparent 75%
    );

  animation:
    grid-movement
    28s
    linear
    infinite;
}

@keyframes grid-movement {
  from {
    background-position:
      0
      0;
  }

  to {
    background-position:
      50px
      50px;
  }
}

.page-orb {
  position: fixed;

  z-index: 0;

  border-radius: 50%;

  pointer-events: none;

  filter:
    blur(8px);
}

.orb-left {
  width: 450px;
  height: 450px;

  top: -200px;
  left: -180px;

  background:
    rgba(31, 122, 69, 0.06);

  animation:
    orb-left-motion
    15s
    ease-in-out
    infinite;
}

.orb-right {
  width: 420px;
  height: 420px;

  right: -180px;
  top: 300px;

  background:
    rgba(246, 128, 27, 0.05);

  animation:
    orb-right-motion
    17s
    ease-in-out
    infinite;
}

@keyframes orb-left-motion {
  0%,
  100% {
    transform:
      translate(0, 0)
      scale(1);
  }

  50% {
    transform:
      translate(60px, 50px)
      scale(1.12);
  }
}

@keyframes orb-right-motion {
  0%,
  100% {
    transform:
      translate(0, 0)
      scale(1);
  }

  50% {
    transform:
      translate(-55px, 65px)
      scale(1.1);
  }
}

/* ==========================================
   NAVBAR
========================================== */

.navbar {
  position: sticky;

  top: 0;

  z-index: 100;

  border-bottom:
    1px solid
    rgba(31, 122, 69, 0.07);

  background:
    rgba(248, 250, 249, 0.82);

  backdrop-filter:
    blur(20px);

  animation:
    nav-enter
    0.65s
    ease-out
    both;
}

@keyframes nav-enter {
  from {
    opacity: 0;

    transform:
      translateY(-20px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

.navbar-inner {
  display: flex;

  align-items: center;

  max-width: 1180px;

  min-height: 72px;

  margin: 0 auto;

  padding:
    0
    26px;
}

.brand {
  display: flex;

  align-items: center;

  gap: 10px;
}

.brand-mark {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 12px;

  background:
    linear-gradient(
      145deg,
      #145e35,
      #25834d
    );

  color: #ffffff;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 20px;

  font-weight: 700;

  box-shadow:
    0
    9px
    22px
    rgba(31, 122, 69, 0.16);

  transition:
    transform
    0.25s
    ease;
}

.brand:hover
  .brand-mark {
  transform:
    rotate(-6deg)
    scale(1.05);
}

.brand-copy strong,
.brand-copy span {
  display: block;
}

.brand-copy strong {
  color: #27412f;

  font-size: 14px;
}

.brand-copy span {
  margin-top: 2px;

  color: #86958c;

  font-size: 9px;
}

.nav-links {
  display: flex;

  gap: 30px;

  margin-left: auto;
}

.nav-links a {
  position: relative;

  padding:
    8px
    0;

  color: #617568;

  font-size: 12px;
  font-weight: 500;

  text-decoration: none;
}

.nav-links a::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 1px;

  width: 0;
  height: 2px;

  border-radius: 99px;

  background: #1e7b44;

  transition:
    width
    0.25s
    ease;
}

.nav-links a:hover {
  color: #1e7b44;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-login-btn {
  min-height: 39px;

  margin-left: 32px;

  padding:
    0
    16px;

  border-radius: 10px;

  background:
    #176b3c !important;

  color: #ffffff;

  font-size: 11px;

  font-weight: 700;
}

.nav-login-btn
  :deep(.q-btn__content) {
  gap: 7px;
}

/* ==========================================
   HERO
========================================== */

.hero-section {
  position: relative;

  z-index: 1;

  min-height:
    calc(100vh - 72px);

  display: flex;

  align-items: center;

  padding:
    95px
    26px
    110px;

  overflow: hidden;
}

.hero-scan {
  position: absolute;

  top: -100px;
  left: 0;

  width: 100%;
  height: 120px;

  background:
    linear-gradient(
      to bottom,
      transparent,
      rgba(31, 122, 69, 0.035),
      transparent
    );

  pointer-events: none;

  animation:
    hero-scan
    10s
    linear
    infinite;
}

@keyframes hero-scan {
  from {
    transform:
      translateY(-150px);
  }

  to {
    transform:
      translateY(110vh);
  }
}

.hero-container {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    minmax(0, 0.94fr)
    minmax(470px, 1.06fr);

  align-items: center;

  gap: 85px;

  width: 100%;

  max-width: 1180px;

  margin: 0 auto;
}

/* ==========================================
   HERO ENTRANCE
========================================== */

.hero-animate {
  opacity: 0;

  animation:
    hero-enter
    0.75s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.hero-delay-1 {
  animation-delay:
    0.1s;
}

.hero-delay-2 {
  animation-delay:
    0.2s;
}

.hero-delay-3 {
  animation-delay:
    0.3s;
}

.hero-delay-4 {
  animation-delay:
    0.4s;
}

.hero-delay-5 {
  animation-delay:
    0.5s;
}

@keyframes hero-enter {
  from {
    opacity: 0;

    transform:
      translateY(25px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}

/* ==========================================
   HERO CHIP
========================================== */

.hero-chip {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding:
    7px
    12px;

  border:
    1px solid
    #d5e5da;

  border-radius: 999px;

  background:
    rgba(237, 247, 240, 0.85);

  color: #2c7950;

  font-size: 10px;

  font-weight: 700;
}

.chip-pulse {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #2f9e61;

  animation:
    chip-pulse
    1.8s
    ease-out
    infinite;
}

@keyframes chip-pulse {
  0% {
    box-shadow:
      0 0 0 0
      rgba(47, 158, 97, 0.35);
  }

  70% {
    box-shadow:
      0 0 0 7px
      rgba(47, 158, 97, 0);
  }

  100% {
    box-shadow:
      0 0 0 0
      rgba(47, 158, 97, 0);
  }
}

/* ==========================================
   HERO COPY
========================================== */

.hero-title {
  max-width: 610px;

  margin:
    24px
    0
    0;

  color: #182a1f;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      46px,
      5vw,
      65px
    );

  line-height: 1.04;

  letter-spacing:
    -1.8px;
}

.hero-title span {
  display: block;

  color: #1e7b44;
}

.hero-description {
  max-width: 530px;

  margin:
    23px
    0
    0;

  color: #6b7e71;

  font-size: 14px;

  line-height: 1.8;
}

.hero-actions {
  display: flex;

  gap: 12px;

  margin-top: 30px;
}

.primary-btn {
  position: relative;

  min-height: 49px;

  padding:
    0
    21px;

  overflow: hidden;

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      #ff8b25,
      #f77812
    ) !important;

  color: #ffffff;

  font-size: 12px;
  font-weight: 700;

  box-shadow:
    0
    12px
    28px
    rgba(246, 122, 19, 0.23);

  transition:
    transform
    0.25s
    ease,
    box-shadow
    0.25s
    ease;
}

.primary-btn::before {
  content: '';

  position: absolute;

  top: -70%;
  left: -60%;

  width: 30%;
  height: 250%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );

  transform:
    rotate(18deg);

  animation:
    button-shine
    4.5s
    1.8s
    infinite;
}

@keyframes button-shine {
  0% {
    left: -60%;
  }

  25% {
    left: 135%;
  }

  100% {
    left: 135%;
  }
}

.primary-btn:hover {
  transform:
    translateY(-2px);

  box-shadow:
    0
    16px
    35px
    rgba(246, 122, 19, 0.3);
}

.primary-btn
  :deep(.q-btn__content) {
  gap: 9px;
}

.primary-arrow {
  transition:
    transform
    0.2s
    ease;
}

.primary-btn:hover
  .primary-arrow {
  transform:
    translateX(4px);
}

.secondary-btn {
  min-height: 49px;

  padding:
    0
    16px;

  color: #557260;

  font-size: 12px;

  font-weight: 600;
}

.secondary-btn
  :deep(.q-btn__content) {
  gap: 7px;
}

/* ==========================================
   TRUST
========================================== */

.trust-row {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 35px;

  color: #788b80;

  font-size: 10px;
}

.trust-item {
  display: flex;

  align-items: center;

  gap: 5px;
}

.trust-item
  .q-icon {
  color: #478f61;
}

.trust-dot {
  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: #b7c4bb;
}

/* ==========================================
   PREVIEW
========================================== */

.preview-wrapper {
  position: relative;
}

.preview-glow {
  position: absolute;

  inset:
    10%
    8%;

  border-radius: 50%;

  background:
    rgba(31, 122, 69, 0.11);

  filter:
    blur(65px);

  animation:
    preview-glow
    4s
    ease-in-out
    infinite;
}

@keyframes preview-glow {
  0%,
  100% {
    opacity: 0.5;

    transform:
      scale(0.9);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.1);
  }
}

.dashboard-card {
  position: relative;

  z-index: 3;

  padding: 24px;

  border:
    1px solid
    #dce7df;

  border-radius: 24px;

  background:
    rgba(255, 255, 255, 0.88);

  backdrop-filter:
    blur(22px);

  box-shadow:
    0
    35px
    80px
    rgba(34, 79, 48, 0.13);

  animation:
    dashboard-float
    6s
    1s
    ease-in-out
    infinite;
}

@keyframes dashboard-float {
  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-7px);
  }
}

.dashboard-top {
  display: flex;

  align-items: center;
  justify-content: space-between;
}

.dashboard-eyebrow,
.chart-eyebrow {
  color: #94a399;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 1px;
}

.dashboard-title {
  margin-top: 4px;

  color: #2c4534;

  font-size: 17px;

  font-weight: 700;
}

.live-badge {
  display: flex;

  align-items: center;

  gap: 6px;

  padding:
    5px
    9px;

  border-radius: 999px;

  background: #edf8f1;

  color: #398158;

  font-size: 9px;
}

.live-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #32a163;

  animation:
    live-pulse
    1.7s
    infinite;
}

@keyframes live-pulse {
  0% {
    box-shadow:
      0
      0
      0
      0
      rgba(50, 161, 99, 0.35);
  }

  70% {
    box-shadow:
      0
      0
      0
      7px
      rgba(50, 161, 99, 0);
  }

  100% {
    box-shadow:
      0
      0
      0
      0
      rgba(50, 161, 99, 0);
  }
}

/* ==========================================
   STATS
========================================== */

.stats-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 12px;

  margin-top: 20px;
}

.stat-card {
  padding: 14px;

  border:
    1px solid
    #e4ebe6;

  border-radius: 14px;

  background: #fbfcfb;

  transition:
    transform
    0.25s
    ease,
    box-shadow
    0.25s
    ease;
}

.stat-card:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0
    12px
    25px
    rgba(41, 82, 52, 0.08);
}

.stat-header {
  display: flex;

  align-items: center;

  justify-content: space-between;
}

.stat-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  border-radius: 10px;
}

.stat-icon.green {
  background: #eaf6ee;

  color: #2d8050;
}

.stat-icon.orange {
  background: #fff2e7;

  color: #ef821d;
}

.stat-up {
  color: #2d8d59;

  font-size: 9px;

  font-weight: 700;
}

.stat-muted {
  color: #98a59d;

  font-size: 9px;
}

.stat-label {
  margin-top: 13px;

  color: #87978d;

  font-size: 9px;
}

.stat-value {
  margin-top: 2px;

  color: #294130;

  font-size: 17px;

  font-weight: 700;
}

/* ==========================================
   CHART
========================================== */

.chart-card {
  margin-top: 13px;

  padding: 15px;

  border:
    1px solid
    #e6ece8;

  border-radius: 14px;

  background: #ffffff;
}

.chart-header {
  display: flex;

  justify-content: space-between;
}

.chart-title {
  margin-top: 4px;

  color: #3a5242;

  font-size: 12px;

  font-weight: 700;
}

.chart-year {
  color: #89978f;

  font-size: 9px;
}

.chart {
  position: relative;

  height: 120px;

  margin-top: 15px;
}

.grid-line {
  position: absolute;

  left: 0;

  width: 100%;

  height: 1px;

  background: #edf2ee;
}

.line-1 {
  top: 25%;
}

.line-2 {
  top: 50%;
}

.line-3 {
  top: 75%;
}

.bars {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: flex-end;

  justify-content: space-around;

  padding:
    0
    8px;
}

.bar {
  width: 19px;

  border-radius:
    5px
    5px
    2px
    2px;

  background:
    linear-gradient(
      180deg,
      #258b55,
      #61af79
    );

  transform-origin:
    bottom;

  animation:
    bar-grow
    1.2s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

.bar-1 {
  height: 38%;

  animation-delay:
    0.45s;
}

.bar-2 {
  height: 49%;

  animation-delay:
    0.55s;
}

.bar-3 {
  height: 44%;

  animation-delay:
    0.65s;
}

.bar-4 {
  height: 68%;

  animation-delay:
    0.75s;
}

.bar-5 {
  height: 61%;

  animation-delay:
    0.85s;
}

.bar-6 {
  height: 80%;

  animation-delay:
    0.95s;
}

.bar-7 {
  height: 72%;

  animation-delay:
    1.05s;
}

.bar.orange {
  background:
    linear-gradient(
      180deg,
      #f58a22,
      #ffb366
    );
}

@keyframes bar-grow {
  from {
    transform:
      scaleY(0);
  }

  to {
    transform:
      scaleY(1);
  }
}

.months {
  display: flex;

  justify-content: space-around;

  margin-top: 7px;

  color: #99a69d;

  font-size: 8px;
}

/* ==========================================
   ACTIVITY
========================================== */

.activity-card {
  display: flex;

  align-items: center;

  margin-top: 13px;

  padding:
    12px;

  border-radius: 13px;

  background: #f9fbf9;
}

.activity-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  border-radius: 9px;

  background: #eaf6ee;

  color: #2e8050;
}

.activity-copy {
  margin-left: 9px;
}

.activity-copy strong,
.activity-copy span {
  display: block;
}

.activity-copy strong {
  color: #485f50;

  font-size: 9px;
}

.activity-copy span {
  margin-top: 2px;

  color: #99a59d;

  font-size: 8px;
}

.activity-more {
  margin-left: auto;

  color: #9ba69f;
}

/* ==========================================
   FLOATING CARDS
========================================== */

.floating-card {
  position: absolute;

  z-index: 5;

  display: flex;

  align-items: center;

  padding:
    10px
    12px;

  border:
    1px solid
    #dce7df;

  border-radius: 12px;

  background:
    rgba(255, 255, 255, 0.97);

  box-shadow:
    0
    16px
    36px
    rgba(37, 79, 49, 0.12);
}

.floating-card strong,
.floating-card span {
  display: block;
}

.floating-card strong {
  color: #395140;

  font-size: 9px;
}

.floating-card span {
  margin-top: 2px;

  color: #89978f;

  font-size: 8px;
}

.floating-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  margin-right: 8px;

  border-radius: 9px;

  background: #eaf5ee;

  color: #2b8050;
}

.floating-security {
  top: 82px;
  right: -47px;

  animation:
    floating-one
    5s
    ease-in-out
    infinite;
}

.floating-online {
  left: -45px;
  bottom: 65px;

  animation:
    floating-two
    5.5s
    ease-in-out
    infinite;
}

@keyframes floating-one {
  0%,
  100% {
    transform:
      translateY(0)
      rotate(0);
  }

  50% {
    transform:
      translateY(-9px)
      rotate(1deg);
  }
}

@keyframes floating-two {
  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(8px);
  }
}

.online-pulse {
  width: 8px;
  height: 8px;

  margin-right: 9px;

  border-radius: 50%;

  background: #32a162;

  animation:
    online-pulse
    1.8s
    infinite;
}

@keyframes online-pulse {
  0% {
    box-shadow:
      0
      0
      0
      0
      rgba(50, 161, 98, 0.35);
  }

  70% {
    box-shadow:
      0
      0
      0
      8px
      rgba(50, 161, 98, 0);
  }

  100% {
    box-shadow:
      0
      0
      0
      0
      rgba(50, 161, 98, 0);
  }
}

/* ==========================================
   SCROLL INDICATOR
========================================== */

.scroll-indicator {
  position: absolute;

  bottom: 22px;
  left: 50%;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 7px;

  transform:
    translateX(-50%);

  color: #91a097;

  font-size: 7px;

  letter-spacing: 1.5px;
}

.scroll-line {
  position: relative;

  width: 1px;
  height: 28px;

  overflow: hidden;

  background: #d3ddd6;
}

.scroll-line span {
  position: absolute;

  top: -10px;
  left: 0;

  width: 1px;
  height: 10px;

  background: #1e7b44;

  animation:
    scroll-motion
    1.8s
    infinite;
}

@keyframes scroll-motion {
  from {
    transform:
      translateY(0);
  }

  to {
    transform:
      translateY(38px);
  }
}

/* ==========================================
   REVEAL
========================================== */

.reveal {
  opacity: 0;

  transform:
    translateY(35px);

  transition:
    opacity
    0.8s
    cubic-bezier(0.22, 1, 0.36, 1),
    transform
    0.8s
    cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.show {
  opacity: 1;

  transform:
    translateY(0);
}

/* ==========================================
   FEATURES
========================================== */

.features-section {
  position: relative;

  z-index: 2;

  padding:
    105px
    26px;

  background:
    rgba(255, 255, 255, 0.9);
}

.section-container {
  max-width: 1120px;

  margin:
    0
    auto;
}

.section-heading {
  max-width: 630px;

  margin:
    0
    auto
    50px;

  text-align: center;
}

.section-kicker {
  color: #2e7b50;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1.3px;
}

.section-heading h2 {
  margin:
    14px
    0
    0;

  color: #1c3022;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 39px;

  line-height: 1.15;
}

.section-heading h2 span {
  display: block;

  color: #1e7b44;
}

.section-heading p {
  max-width: 540px;

  margin:
    16px
    auto
    0;

  color: #74857a;

  font-size: 12px;

  line-height: 1.7;
}

.features-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 18px;
}

.feature-card {
  position: relative;

  padding: 27px;

  overflow: hidden;

  border:
    1px solid
    #e0e8e2;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      #ffffff,
      #fafcfb
    );

  transition:
    transform
    0.3s
    ease,
    box-shadow
    0.3s
    ease,
    border-color
    0.3s
    ease;
}

.feature-card::before {
  content: '';

  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 3px;

  background:
    linear-gradient(
      90deg,
      #1e7b44,
      #f1841c
    );

  transform:
    scaleX(0);

  transform-origin:
    left;

  transition:
    transform
    0.35s
    ease;
}

.feature-card:hover::before {
  transform:
    scaleX(1);
}

.feature-card:hover {
  transform:
    translateY(-8px);

  border-color:
    #ccdfd2;

  box-shadow:
    0
    25px
    50px
    rgba(39, 84, 53, 0.1);
}

.feature-middle {
  transition-delay:
    0.08s;
}

.feature-card:nth-child(3) {
  transition-delay:
    0.16s;
}

.feature-top {
  display: flex;

  align-items: flex-start;

  justify-content: space-between;
}

.feature-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border-radius: 13px;

  background: #eaf6ee;

  color: #2b7d4e;

  transition:
    transform
    0.3s
    ease;
}

.feature-icon.orange {
  background: #fff2e6;

  color: #ed821d;
}

.feature-card:hover
  .feature-icon {
  transform:
    rotate(-5deg)
    scale(1.08);
}

.feature-number {
  color: #d8e3dc;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 27px;

  font-weight: 700;
}

.feature-card h3 {
  margin:
    21px
    0
    0;

  color: #2b4232;

  font-size: 15px;
}

.feature-card p {
  margin:
    11px
    0
    0;

  color: #77877d;

  font-size: 11px;

  line-height: 1.7;
}

.feature-action {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  margin-top: 22px;

  color: #2c7a4d;

  font-size: 10px;

  font-weight: 700;
}

.feature-action
  .q-icon {
  transition:
    transform
    0.25s
    ease;
}

.feature-card:hover
  .feature-action
  .q-icon {
  transform:
    translate(3px, -3px);
}

/* ==========================================
   SECURITY
========================================== */

.security-section {
  position: relative;

  z-index: 2;

  padding:
    95px
    26px;

  background: #f4f8f5;
}

.security-card {
  display: grid;

  grid-template-columns:
    1fr
    0.82fr;

  align-items: center;

  gap: 60px;

  max-width: 1060px;

  margin:
    0
    auto;

  padding: 58px;

  overflow: hidden;

  border-radius: 27px;

  background:
    linear-gradient(
      145deg,
      #145c34,
      #1f7c46
    );

  color: #ffffff;

  box-shadow:
    0
    30px
    70px
    rgba(22, 91, 52, 0.16);
}

.security-kicker {
  display: flex;

  align-items: center;

  gap: 7px;

  color: #bce1c9;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1px;
}

.security-copy h2 {
  margin:
    15px
    0
    0;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 38px;

  line-height: 1.12;
}

.security-copy h2 span {
  display: block;

  color: #ffae67;
}

.security-copy > p {
  max-width: 500px;

  margin:
    17px
    0
    0;

  color:
    rgba(255, 255, 255, 0.7);

  font-size: 12px;

  line-height: 1.75;
}

.security-list {
  display: flex;

  flex-direction: column;

  gap: 10px;

  margin-top: 24px;
}

.security-item {
  display: flex;

  align-items: center;

  gap: 8px;

  color:
    rgba(255, 255, 255, 0.88);

  font-size: 11px;
}

.check {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 21px;
  height: 21px;

  border-radius: 7px;

  background:
    rgba(255, 255, 255, 0.09);

  color: #ffad65;
}

.security-btn {
  min-height: 44px;

  margin-top: 27px;

  padding:
    0
    18px;

  border:
    1px solid
    rgba(255, 255, 255, 0.15);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.1) !important;

  color: #ffffff;

  font-size: 11px;

  font-weight: 700;
}

.security-btn
  :deep(.q-btn__content) {
  gap: 8px;
}

/* ==========================================
   SECURITY VISUAL
========================================== */

.security-visual {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 290px;
}

.radar-circle {
  position: absolute;

  border:
    1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 50%;

  animation:
    radar-pulse
    4s
    ease-out
    infinite;
}

.radar-circle-1 {
  width: 120px;
  height: 120px;
}

.radar-circle-2 {
  width: 185px;
  height: 185px;

  animation-delay:
    0.8s;
}

.radar-circle-3 {
  width: 250px;
  height: 250px;

  animation-delay:
    1.6s;
}

@keyframes radar-pulse {
  0% {
    opacity: 0.2;

    transform:
      scale(0.82);
  }

  50% {
    opacity: 0.75;
  }

  100% {
    opacity: 0;

    transform:
      scale(1.08);
  }
}

.security-core {
  position: relative;

  z-index: 4;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 105px;
  height: 105px;

  border:
    1px solid
    rgba(255, 255, 255, 0.15);

  border-radius: 29px;

  background:
    rgba(255, 255, 255, 0.08);

  color: #ffad65;

  backdrop-filter:
    blur(10px);

  animation:
    shield-float
    4s
    ease-in-out
    infinite;
}

@keyframes shield-float {
  0%,
  100% {
    transform:
      translateY(0);
  }

  50% {
    transform:
      translateY(-8px);
  }
}

.core-glow {
  position: absolute;

  width: 100px;
  height: 100px;

  border-radius: 50%;

  background:
    rgba(255, 173, 101, 0.12);

  filter:
    blur(25px);

  animation:
    core-glow
    2.5s
    infinite;
}

@keyframes core-glow {
  0%,
  100% {
    opacity: 0.5;

    transform:
      scale(0.85);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.25);
  }
}

.security-node {
  position: absolute;

  z-index: 5;

  display: flex;

  align-items: center;
  justify-content: center;

  width: 37px;
  height: 37px;

  border:
    1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 11px;

  background:
    rgba(255, 255, 255, 0.09);

  color: #d5f0dd;

  backdrop-filter:
    blur(8px);

  animation:
    node-float
    4s
    ease-in-out
    infinite;
}

.node-1 {
  top: 30px;
  right: 42px;
}

.node-2 {
  bottom: 30px;
  right: 55px;

  animation-delay:
    -1.2s;
}

.node-3 {
  left: 35px;
  top: 120px;

  animation-delay:
    -2.1s;
}

@keyframes node-float {
  0%,
  100% {
    transform:
      translateY(0)
      rotate(0);
  }

  50% {
    transform:
      translateY(-8px)
      rotate(4deg);
  }
}

.orbit-dot {
  position: absolute;

  z-index: 6;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #ffad65;

  box-shadow:
    0
    0
    12px
    rgba(255, 173, 101, 0.75);

  animation:
    orbit
    7s
    linear
    infinite;
}

@keyframes orbit {
  from {
    transform:
      rotate(0deg)
      translateX(115px)
      rotate(0deg);
  }

  to {
    transform:
      rotate(360deg)
      translateX(115px)
      rotate(-360deg);
  }
}

/* ==========================================
   CTA
========================================== */

.cta-section {
  position: relative;

  z-index: 2;

  padding:
    95px
    26px;

  background: #ffffff;
}

.cta-card {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 30px;

  max-width: 1060px;

  margin:
    0
    auto;

  padding:
    39px
    43px;

  border:
    1px solid
    #dce7e0;

  border-radius: 22px;

  background:
    linear-gradient(
      135deg,
      #f2f8f4,
      #fffaf5
    );

  transition:
    transform
    0.3s
    ease,
    box-shadow
    0.3s
    ease;
}

.cta-card:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0
    20px
    45px
    rgba(37, 80, 50, 0.08);
}

.cta-kicker {
  color: #2d7b4e;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1.1px;
}

.cta-card h2 {
  margin:
    10px
    0
    0;

  color: #213728;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 27px;
}

.cta-card p {
  margin:
    8px
    0
    0;

  color: #78887e;

  font-size: 11px;
}

.cta-btn {
  min-height: 46px;

  padding:
    0
    18px;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      #ff8b25,
      #f67812
    ) !important;

  color: #ffffff;

  font-size: 11px;

  font-weight: 700;

  box-shadow:
    0
    10px
    25px
    rgba(246, 122, 18, 0.2);
}

.cta-btn
  :deep(.q-btn__content) {
  gap: 8px;
}

/* ==========================================
   FOOTER
========================================== */

.footer {
  position: relative;

  z-index: 2;

  padding:
    24px
    26px;

  border-top:
    1px solid
    #e2e9e4;

  background: #f7f9f8;
}

.footer-inner {
  display: flex;

  align-items: center;

  max-width: 1080px;

  margin:
    0
    auto;
}

.footer-brand {
  display: flex;

  align-items: center;

  gap: 8px;
}

.footer-logo {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 31px;
  height: 31px;

  border-radius: 9px;

  background: #176a3b;

  color: #ffffff;

  font-family:
    Georgia,
    serif;

  font-size: 16px;
}

.footer-brand strong,
.footer-brand span {
  display: block;
}

.footer-brand strong {
  color: #415947;

  font-size: 10px;
}

.footer-brand span {
  margin-top: 2px;

  color: #87968d;

  font-size: 8px;
}

.copyright {
  margin:
    0
    auto;

  color: #8d9a92;

  font-size: 8px;
}

.footer-status {
  display: flex;

  align-items: center;

  gap: 6px;

  color: #688073;

  font-size: 8px;
}

.footer-status span {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #32a162;

  animation:
    footer-status
    2s
    infinite;
}

@keyframes footer-status {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }
}

/* ==========================================
   TABLET
========================================== */

@media (
  max-width: 1000px
) {
  .nav-links {
    display: none;
  }

  .hero-container {
    grid-template-columns:
      1fr;

    max-width: 700px;

    gap: 70px;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions,
  .trust-row {
    justify-content: center;
  }

  .preview-wrapper {
    max-width: 580px;

    margin:
      0
      auto;
  }

  .features-grid {
    grid-template-columns:
      1fr;
  }

  .security-card {
    grid-template-columns:
      1fr;

    text-align: center;
  }

  .security-copy > p {
    margin-left: auto;
    margin-right: auto;
  }

  .security-list {
    align-items: center;
  }

  .security-kicker {
    justify-content: center;
  }
}

/* ==========================================
   MOBILE
========================================== */

@media (
  max-width: 650px
) {
  .navbar-inner {
    min-height: 67px;

    padding:
      0
      16px;
  }

  .brand-copy span {
    display: none;
  }

  .nav-login-btn {
    margin-left: auto;
  }

  .hero-section {
    min-height: auto;

    padding:
      70px
      18px
      85px;
  }

  .hero-title {
    font-size: 41px;
  }

  .hero-description {
    font-size: 12px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    width: 100%;
  }

  .trust-row {
    flex-wrap: wrap;
  }

  .trust-dot {
    display: none;
  }

  .stats-grid {
    grid-template-columns:
      1fr;
  }

  .dashboard-card {
    padding: 17px;

    border-radius: 19px;
  }

  .floating-card {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }

  .features-section,
  .security-section,
  .cta-section {
    padding:
      70px
      18px;
  }

  .section-heading h2 {
    font-size: 31px;
  }

  .feature-card {
    padding: 23px;
  }

  .security-card {
    padding:
      38px
      22px;
  }

  .security-copy h2 {
    font-size: 31px;
  }

  .security-visual {
    min-height: 245px;

    transform:
      scale(0.8);
  }

  .cta-card {
    flex-direction: column;

    align-items: flex-start;

    padding:
      30px
      24px;
  }

  .cta-btn {
    width: 100%;
  }

  .footer-inner {
    flex-direction: column;

    gap: 15px;

    text-align: center;
  }

  .copyright {
    margin: 0;
  }
}

/* ==========================================
   ACCESSIBILITY
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

  .reveal {
    opacity: 1;

    transform: none;
  }
}
</style>