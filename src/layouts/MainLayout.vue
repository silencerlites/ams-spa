<template>
  <q-layout view="lHh Lpr lFf" class="admin-layout">
    <!-- =====================================
         HEADER
    ====================================== -->
    <q-header class="admin-header">
      <q-toolbar class="header-toolbar">
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="menu-button"
          aria-label="Toggle navigation"
          @click="toggleLeftDrawer"
        />

        <div class="header-title">
          <div class="page-eyebrow">
            ADMIN PORTAL
          </div>

          <div class="page-title">
            {{ currentPageTitle }}
          </div>
        </div>

        <q-space />

        <!-- SEARCH -->
        <q-input
          v-model="search"
          borderless
          dense
          debounce="300"
          placeholder="Search anything..."
          class="header-search"
        >
          <template #prepend>
            <q-icon
              name="search"
              size="19px"
            />
          </template>

          <template #append>
            <div class="search-shortcut">
              CTRL K
            </div>
          </template>
        </q-input>

        <!-- NOTIFICATIONS -->
        <q-btn
          flat
          round
          class="header-action"
        >
          <q-icon
            name="notifications_none"
            size="22px"
          />

          <span class="notification-dot"></span>

          <q-menu
            anchor="bottom right"
            self="top right"
            :offset="[0, 10]"
            class="notification-menu"
          >
            <div class="notification-panel">
              <div class="notification-header">
                <div>
                  <strong>
                    Notifications
                  </strong>

                  <span>
                    You have 3 unread notifications
                  </span>
                </div>

                <q-btn
                  flat
                  dense
                  round
                  icon="more_horiz"
                />
              </div>

              <q-separator />

              <div class="notification-item">
                <div class="notification-icon success">
                  <q-icon
                    name="task_alt"
                    size="19px"
                  />
                </div>

                <div class="notification-content">
                  <strong>
                    Reconciliation completed
                  </strong>

                  <p>
                    Monthly reconciliation has been completed successfully.
                  </p>

                  <span>
                    12 minutes ago
                  </span>
                </div>
              </div>

              <div class="notification-item">
                <div class="notification-icon orange">
                  <q-icon
                    name="receipt_long"
                    size="19px"
                  />
                </div>

                <div class="notification-content">
                  <strong>
                    Financial report ready
                  </strong>

                  <p>
                    September financial report is available for review.
                  </p>

                  <span>
                    1 hour ago
                  </span>
                </div>
              </div>

              <div class="notification-item">
                <div class="notification-icon blue">
                  <q-icon
                    name="person_add_alt"
                    size="19px"
                  />
                </div>

                <div class="notification-content">
                  <strong>
                    New user request
                  </strong>

                  <p>
                    A new account request requires administrator approval.
                  </p>

                  <span>
                    3 hours ago
                  </span>
                </div>
              </div>
            </div>
          </q-menu>
        </q-btn>

        <div class="header-divider"></div>

        <!-- PROFILE -->
        <q-btn
          flat
          no-caps
          class="profile-button"
        >
          <div class="profile-avatar">
            CL
          </div>

          <div class="profile-copy">
            <strong>
              Cedric Liera
            </strong>

            <span>
              Administrator
            </span>
          </div>

          <q-icon
            name="keyboard_arrow_down"
            size="19px"
            class="profile-arrow"
          />

          <q-menu
            anchor="bottom right"
            self="top right"
            :offset="[0, 10]"
            class="profile-menu"
          >
            <q-list class="profile-menu-list">
              <q-item class="profile-menu-header">
                <q-item-section avatar>
                  <div class="menu-avatar">
                    CL
                  </div>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="menu-profile-name">
                    Cedric Liera
                  </q-item-label>

                  <q-item-label caption>
                    Administrator
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                clickable
                v-close-popup
              >
                <q-item-section avatar>
                  <q-icon
                    name="person_outline"
                    size="20px"
                  />
                </q-item-section>

                <q-item-section>
                  My Profile
                </q-item-section>
              </q-item>

              <q-item
                clickable
                v-close-popup
              >
                <q-item-section avatar>
                  <q-icon
                    name="settings"
                    size="20px"
                  />
                </q-item-section>

                <q-item-section>
                  Settings
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                clickable
                v-close-popup
                class="logout-item"
              >
                <q-item-section avatar>
                  <q-icon
                    name="logout"
                    size="20px"
                  />
                </q-item-section>

                <q-item-section>
                  Sign Out
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- =====================================
         DRAWER
    ====================================== -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="280"
      :breakpoint="1024"
      class="admin-drawer"
    >
      <div class="drawer-wrapper">
        <!-- BRAND -->
        <div class="drawer-brand">
          <div class="brand-logo">
            S
          </div>

          <div class="brand-copy">
            <strong>
              SRJJ
            </strong>

            <span>
              Accounting Services
            </span>
          </div>
        </div>

        <!-- WORKSPACE -->
        <div class="workspace-card">
          <div class="workspace-icon">
            <q-icon
              name="business"
              size="20px"
            />
          </div>

          <div class="workspace-copy">
            <span>
              CURRENT WORKSPACE
            </span>

            <strong>
              SRJJ Accounting
            </strong>
          </div>

          <q-icon
            name="unfold_more"
            size="18px"
            class="workspace-arrow"
          />
        </div>

        <!-- =====================================
             NAVIGATION
        ====================================== -->
        <div class="navigation">
          <!-- OVERVIEW -->
          <div class="nav-section">
            <div class="nav-label">
              OVERVIEW
            </div>

            <q-list class="nav-list">
              <q-item
                v-for="item in primaryMenu"
                :key="item.label"
                clickable
                v-ripple
                :to="item.to"
                :active="isActive(item.to)"
                active-class="nav-active"
                class="nav-item"
              >
                <q-item-section avatar>
                  <div class="nav-icon">
                    <q-icon
                      :name="item.icon"
                      size="21px"
                    />
                  </div>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    {{ item.label }}
                  </q-item-label>
                </q-item-section>

                <q-item-section
                  v-if="item.badge"
                  side
                >
                  <q-badge class="nav-badge">
                    {{ item.badge }}
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- MANAGEMENT -->
          <div class="nav-section">
            <div class="nav-label second-label">
              MANAGEMENT
            </div>

            <q-list class="nav-list">
              <q-item
                v-for="item in managementMenu"
                :key="item.label"
                clickable
                v-ripple
                :to="item.to"
                :active="isActive(item.to)"
                active-class="nav-active"
                class="nav-item"
              >
                <q-item-section avatar>
                  <div class="nav-icon">
                    <q-icon
                      :name="item.icon"
                      size="21px"
                    />
                  </div>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    {{ item.label }}
                  </q-item-label>
                </q-item-section>

                <q-item-section
                  v-if="item.badge"
                  side
                >
                  <q-badge class="nav-badge orange">
                    {{ item.badge }}
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- SYSTEM -->
          <div class="nav-section">
            <div class="nav-label second-label">
              SYSTEM
            </div>

            <q-list class="nav-list">
              <q-item
                v-for="item in systemMenu"
                :key="item.label"
                clickable
                v-ripple
                :to="item.to"
                :active="isActive(item.to)"
                active-class="nav-active"
                class="nav-item"
              >
                <q-item-section avatar>
                  <div class="nav-icon">
                    <q-icon
                      :name="item.icon"
                      size="21px"
                    />
                  </div>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    {{ item.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <!-- =====================================
             FOOTER
        ====================================== -->
        <div class="drawer-footer">
          <div class="security-status">
            <div class="security-status-icon">
              <q-icon
                name="shield"
                size="20px"
              />
            </div>

            <div class="security-copy">
              <strong>
                System secured
              </strong>

              <span>
                All services operational
              </span>
            </div>

            <span class="online-status-dot"></span>
          </div>

          <div class="version">
            <span>
              SRJJ AMS
            </span>

            <span>
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </q-drawer>

    <!-- =====================================
         CONTENT
    ====================================== -->
    <q-page-container class="admin-page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import {
  useRoute,
} from 'vue-router'

interface MenuItem {
  label: string
  icon: string
  to: string
  badge?: string
}

const route = useRoute()

const search = ref('')

const leftDrawerOpen = ref(true)

const primaryMenu: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'grid_view',
    to: '/dashboard',
  },
  {
    label: 'Analytics',
    icon: 'analytics',
    to: '/analytics',
  },
  {
    label: 'Reports',
    icon: 'bar_chart',
    to: '/reports',
  },
]

const managementMenu: MenuItem[] = [
  {
    label: 'Transactions',
    icon: 'receipt_long',
    to: '/transactions',
    badge: '12',
  },
  {
    label: 'Accounts',
    icon: 'account_balance_wallet',
    to: '/accounts',
  },
  {
    label: 'Invoices',
    icon: 'request_quote',
    to: '/invoices',
    badge: '4',
  },
  {
    label: 'Clients',
    icon: 'groups',
    to: '/clients',
  },
]

const systemMenu: MenuItem[] = [
  {
    label: 'Users & Roles',
    icon: 'manage_accounts',
    to: '/users',
  },
  {
    label: 'Audit Logs',
    icon: 'history',
    to: '/audit-logs',
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/settings',
  },
]

const allMenuItems = computed(() => [
  ...primaryMenu,
  ...managementMenu,
  ...systemMenu,
])

const currentPageTitle = computed(() => {
  return (
    allMenuItems.value.find(
      item => route.path === item.to,
    )?.label ?? 'Dashboard'
  )
})

const toggleLeftDrawer = () => {
  leftDrawerOpen.value =
    !leftDrawerOpen.value
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<style scoped>
/* ==========================================
   LAYOUT
========================================== */

.admin-layout {
  background: #f5f8f6;
}

.admin-page-container {
  background: #f5f8f6;
}

/* ==========================================
   HEADER
========================================== */

.admin-header {
  background:
    rgba(255, 255, 255, 0.94);

  color: #344b3b;

  border-bottom:
    1px solid #e3e9e5;

  box-shadow: none;

  backdrop-filter:
    blur(18px);
}

.header-toolbar {
  min-height: 74px;

  padding:
    0
    24px;
}

.menu-button {
  margin-right: 15px;

  color: #718279;
}

.header-title {
  display: flex;

  flex-direction: column;
}

.page-eyebrow {
  color: #98a49d;

  font-size: 10px;
  line-height: 1;

  font-weight: 700;

  letter-spacing: 1.1px;
}

.page-title {
  margin-top: 5px;

  color: #344b3b;

  font-size: 18px;
  line-height: 1.2;

  font-weight: 700;
}

/* ==========================================
   HEADER SEARCH
========================================== */

.header-search {
  width: 290px;

  margin-right: 15px;

  padding:
    0
    13px;

  border:
    1px solid
    #e0e7e2;

  border-radius: 12px;

  background: #f7f9f8;
}

.header-search
  :deep(.q-field__control) {
  height: 42px;

  min-height: 42px;
}

.header-search
  :deep(.q-field__native) {
  color: #607368;

  font-size: 13px;
}

.header-search
  :deep(.q-icon) {
  color: #899990;
}

.search-shortcut {
  padding:
    3px
    6px;

  border:
    1px solid
    #dde5df;

  border-radius: 5px;

  color: #94a098;

  font-size: 9px;

  font-weight: 600;
}

/* ==========================================
   HEADER ACTIONS
========================================== */

.header-action {
  position: relative;

  width: 42px;
  height: 42px;

  color: #65796d;
}

.notification-dot {
  position: absolute;

  top: 8px;
  right: 8px;

  width: 8px;
  height: 8px;

  border:
    2px solid
    #ffffff;

  border-radius: 50%;

  background: #ef8626;

  box-shadow:
    0 0 0 2px
    rgba(239, 134, 38, 0.08);
}

.header-divider {
  width: 1px;
  height: 30px;

  margin:
    0
    12px;

  background: #e1e8e3;
}

/* ==========================================
   PROFILE
========================================== */

.profile-button {
  min-height: 47px;

  padding:
    4px
    7px;

  border-radius: 12px;
}

.profile-button
  :deep(.q-btn__content) {
  flex-wrap: nowrap;
}

.profile-avatar {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  border-radius: 11px;

  background:
    linear-gradient(
      145deg,
      #548c6a,
      #72a183
    );

  color: #ffffff;

  font-size: 12px;
  font-weight: 700;
}

.profile-copy {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  margin-left: 10px;
}

.profile-copy strong {
  color: #41564a;

  font-size: 13px;
  line-height: 1.2;

  font-weight: 600;
}

.profile-copy span {
  margin-top: 3px;

  color: #8c9a92;

  font-size: 11px;
}

.profile-arrow {
  margin-left: 10px;

  color: #94a098;
}

/* ==========================================
   DRAWER
========================================== */

.admin-drawer {
  background: #ffffff;

  border-right:
    1px solid
    #e4ebe6 !important;
}

.admin-drawer
  :deep(.q-drawer__content) {
  display: flex;

  flex-direction: column;

  height: 100%;

  overflow: hidden;
}

.drawer-wrapper {
  display: flex;

  flex-direction: column;

  height: 100%;
  min-height: 100%;

  padding:
    20px
    15px
    15px;

  box-sizing: border-box;

  overflow: hidden;
}

/* ==========================================
   BRAND
========================================== */

.drawer-brand {
  display: flex;

  align-items: center;

  min-height: 52px;

  padding:
    0
    8px;

  margin-bottom: 21px;

  flex-shrink: 0;
}

.brand-logo {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 44px;
  height: 44px;

  border-radius: 13px;

  background:
    linear-gradient(
      145deg,
      #568c6c,
      #73a184
    );

  color: #ffffff;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 22px;

  font-weight: 700;

  box-shadow:
    0
    8px
    22px
    rgba(72, 130, 94, 0.17);
}

.brand-copy {
  display: flex;

  flex-direction: column;

  margin-left: 11px;
}

.brand-copy strong {
  color: #42574a;

  font-size: 17px;
  line-height: 1.1;

  font-weight: 700;
}

.brand-copy span {
  margin-top: 4px;

  color: #8b9991;

  font-size: 11px;
}

/* ==========================================
   WORKSPACE
========================================== */

.workspace-card {
  display: flex;

  align-items: center;

  padding: 12px;

  margin-bottom: 21px;

  border:
    1px solid
    #e2e9e4;

  border-radius: 14px;

  background:
    linear-gradient(
      145deg,
      #f8faf9,
      #fbfcfb
    );

  flex-shrink: 0;
}

.workspace-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  flex-shrink: 0;

  border-radius: 11px;

  background: #e6efe9;

  color: #4b805f;
}

.workspace-copy {
  display: flex;

  flex-direction: column;

  min-width: 0;

  margin-left: 10px;
}

.workspace-copy span {
  color: #9ba69f;

  font-size: 9px;
  line-height: 1;

  font-weight: 700;

  letter-spacing: 0.7px;
}

.workspace-copy strong {
  margin-top: 5px;

  color: #52675a;

  font-size: 13px;

  font-weight: 600;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
}

.workspace-arrow {
  margin-left: auto;

  color: #97a39b;
}

/* ==========================================
   NAVIGATION
========================================== */

.navigation {
  flex: 1;

  min-height: 0;

  overflow-y: auto;
  overflow-x: hidden;

  padding-right: 3px;

  scrollbar-width: thin;

  scrollbar-color:
    #d8dfda
    transparent;
}

.navigation::-webkit-scrollbar {
  width: 5px;
}

.navigation::-webkit-scrollbar-track {
  background: transparent;
}

.navigation::-webkit-scrollbar-thumb {
  border-radius: 999px;

  background: #d7dfd9;
}

.navigation::-webkit-scrollbar-thumb:hover {
  background: #c3cec6;
}

.nav-section {
  width: 100%;
}

.nav-label {
  margin:
    0
    12px
    10px;

  color: #9ea9a2;

  font-size: 10px;
  line-height: 1.2;

  font-weight: 800;

  letter-spacing: 1.3px;
}

.second-label {
  margin-top: 26px;
}

.nav-list {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

/* ==========================================
   NAV ITEM
========================================== */

.nav-item {
  position: relative;

  min-height: 51px;

  padding:
    0
    13px;

  border-radius: 14px;

  color: #687b70;

  font-size: 13px;

  font-weight: 500;

  transition:
    background
    0.2s
    ease,
    color
    0.2s
    ease,
    transform
    0.2s
    ease;
}

.nav-item
  :deep(.q-item__label) {
  font-size: 13px;

  line-height: 1.3;
}

.nav-item
  :deep(.q-item__section--avatar) {
  min-width: 44px;
}

.nav-item:hover {
  background: #f5f8f6;

  color: #526b5b;

  transform:
    translateX(2px);
}

/* ==========================================
   NAV ICON
========================================== */

.nav-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  border-radius: 11px;

  color: #74887a;

  transition:
    background
    0.2s
    ease,
    color
    0.2s
    ease,
    transform
    0.2s
    ease;
}

.nav-item:hover
  .nav-icon {
  background: #eef3f0;

  color: #597564;
}

/* ==========================================
   ACTIVE NAV
========================================== */

.nav-active {
  position: relative;

  background:
    #eef4f0 !important;

  color:
    #397756 !important;

  font-weight: 700;
}

.nav-active::before {
  content: '';

  position: absolute;

  left: 0;
  top: 11px;

  width: 4px;
  height: 29px;

  border-radius:
    0
    999px
    999px
    0;

  background: #4f8d68;
}

.nav-active
  .nav-icon {
  background: #dcebe1;

  color: #43845f;
}

.nav-active:hover {
  background:
    #eaf2ed !important;

  color:
    #397756 !important;
}

/* ==========================================
   BADGES
========================================== */

.nav-badge {
  min-width: 24px;

  padding:
    4px
    7px;

  border-radius: 999px;

  background: #e8f1eb;

  color: #4c8061;

  font-size: 10px;

  font-weight: 700;

  text-align: center;
}

.nav-badge.orange {
  background: #fff1e6;

  color: #dd812f;
}

/* ==========================================
   DRAWER FOOTER
========================================== */

.drawer-footer {
  flex-shrink: 0;

  margin-top: 15px;

  padding-top: 15px;

  border-top:
    1px solid
    #edf1ee;
}

.security-status {
  display: flex;

  align-items: center;

  padding: 11px;

  border:
    1px solid
    #edf2ee;

  border-radius: 14px;

  background: #f7faf8;
}

.security-status-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 37px;
  height: 37px;

  margin-right: 9px;

  border-radius: 11px;

  background: #e3efe7;

  color: #4a8661;
}

.security-copy {
  display: flex;

  flex-direction: column;

  min-width: 0;
}

.security-copy strong {
  color: #50675a;

  font-size: 12px;
  line-height: 1.2;

  font-weight: 600;
}

.security-copy span {
  margin-top: 4px;

  color: #95a199;

  font-size: 10px;

  white-space: nowrap;
}

.online-status-dot {
  width: 7px;
  height: 7px;

  margin-left: auto;

  flex-shrink: 0;

  border-radius: 50%;

  background: #57a374;

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
      rgba(87, 163, 116, 0.35);
  }

  70% {
    box-shadow:
      0
      0
      0
      7px
      rgba(87, 163, 116, 0);
  }

  100% {
    box-shadow:
      0
      0
      0
      0
      rgba(87, 163, 116, 0);
  }
}

.version {
  display: flex;

  justify-content: space-between;

  margin-top: 11px;

  padding:
    0
    8px;

  color: #a1aca5;

  font-size: 9px;
}

/* ==========================================
   NOTIFICATION MENU
========================================== */

.notification-menu {
  overflow: hidden;

  border:
    1px solid
    #e1e8e3;

  border-radius: 15px;

  box-shadow:
    0
    20px
    50px
    rgba(36, 75, 48, 0.13);
}

.notification-panel {
  width: 360px;

  background: #ffffff;
}

.notification-header {
  display: flex;

  align-items: center;

  padding: 18px;
}

.notification-header strong {
  display: block;

  color: #3b5343;

  font-size: 14px;
}

.notification-header span {
  display: block;

  margin-top: 3px;

  color: #8b9991;

  font-size: 11px;
}

.notification-header
  .q-btn {
  margin-left: auto;

  color: #89978f;
}

.notification-item {
  display: flex;

  gap: 11px;

  padding:
    15px
    18px;

  cursor: pointer;

  transition:
    background
    0.2s
    ease;
}

.notification-item:hover {
  background: #f8faf9;
}

.notification-icon {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 39px;
  height: 39px;

  border-radius: 11px;
}

.notification-icon.success {
  background: #e8f4ec;

  color: #4c8562;
}

.notification-icon.orange {
  background: #fff0e4;

  color: #e5832c;
}

.notification-icon.blue {
  background: #eaf2f7;

  color: #56819b;
}

.notification-content strong {
  color: #405748;

  font-size: 12px;

  font-weight: 600;
}

.notification-content p {
  margin:
    4px
    0;

  color: #78887e;

  font-size: 11px;

  line-height: 1.5;
}

.notification-content > span {
  color: #9ba69f;

  font-size: 10px;
}

/* ==========================================
   PROFILE MENU
========================================== */

.profile-menu {
  overflow: hidden;

  border:
    1px solid
    #e0e8e2;

  border-radius: 14px;

  box-shadow:
    0
    20px
    45px
    rgba(34, 70, 44, 0.14);
}

.profile-menu-list {
  min-width: 230px;

  font-size: 13px;
}

.profile-menu-header {
  min-height: 70px;
}

.menu-avatar {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 39px;
  height: 39px;

  border-radius: 11px;

  background:
    #5d9270;

  color: #ffffff;

  font-size: 12px;

  font-weight: 700;
}

.menu-profile-name {
  font-size: 13px;

  font-weight: 700;
}

.logout-item {
  color: #ca693e;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (
  max-width: 900px
) {
  .header-search {
    display: none;
  }
}

@media (
  max-width: 700px
) {
  .profile-copy,
  .profile-arrow {
    display: none;
  }

  .header-toolbar {
    padding:
      0
      16px;
  }
}

@media (
  max-width: 500px
) {
  .page-eyebrow {
    display: none;
  }

  .header-toolbar {
    min-height: 66px;

    padding:
      0
      11px;
  }

  .page-title {
    font-size: 16px;
  }

  .header-divider {
    margin:
      0
      6px;
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
  }
}
</style>