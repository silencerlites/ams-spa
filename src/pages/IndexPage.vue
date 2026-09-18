<template>
  <q-page class="dashboard-page">
    <!-- BACKGROUND -->
    <div class="dashboard-grid"></div>

    <div class="dashboard-container">
      <!-- =========================================
           WELCOME
      ========================================== -->
      <section class="welcome-section animate-enter">
        <div class="welcome-copy">
          <div class="welcome-badge">
            <span class="welcome-dot"></span>

            SYSTEM ONLINE
          </div>

          <h1>
            Good morning, Cedric.
          </h1>

          <p>
            Here's what's happening with your accounting workspace today.
          </p>
        </div>

        <div class="welcome-actions">
          <q-btn
            flat
            no-caps
            class="date-button"
          >
            <q-icon
              name="calendar_today"
              size="18px"
            />

            September 19, 2026
          </q-btn>

          <q-btn
            unelevated
            no-caps
            class="create-button"
          >
            <q-icon
              name="add"
              size="20px"
            />

            New Transaction
          </q-btn>
        </div>
      </section>

      <!-- =========================================
           STATS
      ========================================== -->
      <section class="stats-grid">
        <article
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="stat-card animate-enter"
          :style="{
            animationDelay: `${0.12 + index * 0.08}s`,
          }"
        >
          <div class="stat-top">
            <div
              class="stat-icon"
              :class="stat.color"
            >
              <q-icon
                :name="stat.icon"
                size="22px"
              />
            </div>

            <div
              class="trend"
              :class="{
                down: stat.direction === 'down',
              }"
            >
              <q-icon
                :name="
                  stat.direction === 'down'
                    ? 'south_east'
                    : 'north_east'
                "
                size="14px"
              />

              {{ stat.change }}
            </div>
          </div>

          <div class="stat-label">
            {{ stat.label }}
          </div>

          <div class="stat-value">
            {{ stat.value }}
          </div>

          <div class="stat-footer">
            {{ stat.caption }}
          </div>

          <div
            class="stat-decoration"
            :class="stat.color"
          ></div>
        </article>
      </section>

      <!-- =========================================
           MAIN GRID
      ========================================== -->
      <section class="dashboard-main-grid">
        <!-- PERFORMANCE -->
        <article class="panel performance-panel animate-enter delay-5">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                FINANCIAL PERFORMANCE
              </div>

              <h2>
                Revenue overview
              </h2>
            </div>

            <q-btn
              flat
              no-caps
              class="period-button"
            >
              This Year

              <q-icon
                name="expand_more"
                size="18px"
              />
            </q-btn>
          </div>

          <div class="chart-summary">
            <div>
              <span>
                Total Revenue
              </span>

              <strong>
                ₱1,284,500
              </strong>
            </div>

            <div class="chart-growth">
              <q-icon
                name="trending_up"
                size="15px"
              />

              12.4%
            </div>
          </div>

          <div class="modern-chart">
            <div class="chart-grid-line line-a"></div>
            <div class="chart-grid-line line-b"></div>
            <div class="chart-grid-line line-c"></div>

            <div class="chart-bars">
              <div
                v-for="bar in chartBars"
                :key="bar.month"
                class="chart-column"
              >
                <div class="bar-wrapper">
                  <div
                    class="chart-bar"
                    :class="{
                      current: bar.current,
                    }"
                    :style="{
                      height: `${bar.value}%`,
                    }"
                  >
                    <div
                      v-if="bar.current"
                      class="bar-tooltip"
                    >
                      ₱284K
                    </div>
                  </div>
                </div>

                <span>
                  {{ bar.month }}
                </span>
              </div>
            </div>
          </div>
        </article>

        <!-- CASH FLOW -->
        <article class="panel cashflow-panel animate-enter delay-6">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                CASH FLOW
              </div>

              <h2>
                Balance
              </h2>
            </div>

            <q-btn
              flat
              round
              dense
              icon="more_horiz"
              class="panel-more"
            />
          </div>

          <div class="donut-wrapper">
            <div class="donut-chart">
              <div class="donut-center">
                <span>
                  NET
                </span>

                <strong>
                  ₱600K
                </strong>
              </div>
            </div>
          </div>

          <div class="cashflow-legend">
            <div>
              <span class="legend-dot income"></span>

              <div>
                <span>
                  Income
                </span>

                <strong>
                  ₱1.28M
                </strong>
              </div>
            </div>

            <div>
              <span class="legend-dot expense"></span>

              <div>
                <span>
                  Expenses
                </span>

                <strong>
                  ₱684K
                </strong>
              </div>
            </div>
          </div>
        </article>

        <!-- TRANSACTIONS -->
        <article class="panel transactions-panel animate-enter delay-7">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                ACTIVITY
              </div>

              <h2>
                Recent transactions
              </h2>
            </div>

            <q-btn
              flat
              no-caps
              class="view-all"
            >
              View All

              <q-icon
                name="arrow_forward"
                size="16px"
              />
            </q-btn>
          </div>

          <div class="transactions-table">
            <div
              v-for="transaction in transactions"
              :key="transaction.name"
              class="transaction-row"
            >
              <div
                class="transaction-icon"
                :class="transaction.color"
              >
                <q-icon
                  :name="transaction.icon"
                  size="19px"
                />
              </div>

              <div class="transaction-info">
                <strong>
                  {{ transaction.name }}
                </strong>

                <span>
                  {{ transaction.category }}
                  •
                  {{ transaction.date }}
                </span>
              </div>

              <div
                class="transaction-status"
                :class="transaction.status"
              >
                {{ transaction.status }}
              </div>

              <div
                class="transaction-amount"
                :class="{
                  income: transaction.type === 'income',
                }"
              >
                {{ transaction.amount }}
              </div>

              <q-btn
                flat
                round
                dense
                icon="more_horiz"
                class="transaction-more"
              />
            </div>
          </div>
        </article>

        <!-- QUICK ACTIONS -->
        <article class="panel quick-panel animate-enter delay-8">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                SHORTCUTS
              </div>

              <h2>
                Quick actions
              </h2>
            </div>
          </div>

          <div class="quick-grid">
            <button
              v-for="action in quickActions"
              :key="action.label"
              class="quick-action"
              type="button"
            >
              <div
                class="quick-icon"
                :class="action.color"
              >
                <q-icon
                  :name="action.icon"
                  size="21px"
                />
              </div>

              <span>
                {{ action.label }}
              </span>

              <q-icon
                name="north_east"
                size="16px"
                class="quick-arrow"
              />
            </button>
          </div>
        </article>
      </section>

      <!-- =========================================
           BOTTOM
      ========================================== -->
      <section class="dashboard-bottom">
        <!-- TASKS -->
        <article class="panel task-panel animate-enter delay-9">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                TASK MANAGEMENT
              </div>

              <h2>
                Pending tasks
              </h2>
            </div>

            <div class="task-count">
              4 Pending
            </div>
          </div>

          <div class="task-list">
            <div
              v-for="task in tasks"
              :key="task.title"
              class="task-row"
            >
              <q-checkbox
                v-model="task.done"
                color="green-7"
                size="sm"
              />

              <div class="task-copy">
                <strong
                  :class="{
                    completed: task.done,
                  }"
                >
                  {{ task.title }}
                </strong>

                <span>
                  {{ task.due }}
                </span>
              </div>

              <div
                class="priority"
                :class="task.priority"
              >
                {{ task.priority }}
              </div>
            </div>
          </div>
        </article>

        <!-- SYSTEM HEALTH -->
        <article class="panel system-panel animate-enter delay-10">
          <div class="panel-header">
            <div>
              <div class="panel-eyebrow">
                SYSTEM
              </div>

              <h2>
                System health
              </h2>
            </div>

            <div class="system-online">
              <span></span>

              Operational
            </div>
          </div>

          <div class="system-list">
            <div
              v-for="system in systems"
              :key="system.name"
              class="system-row"
            >
              <div class="system-icon">
                <q-icon
                  :name="system.icon"
                  size="19px"
                />
              </div>

              <div>
                <strong>
                  {{ system.name }}
                </strong>

                <span>
                  {{ system.description }}
                </span>
              </div>

              <div class="system-check">
                <q-icon
                  name="check_circle"
                  size="20px"
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stats = [
  {
    label: 'Total Revenue',
    value: '₱1.28M',
    change: '12.4%',
    caption: 'Compared to last month',
    icon: 'payments',
    color: 'green',
    direction: 'up',
  },
  {
    label: 'Total Expenses',
    value: '₱684K',
    change: '4.8%',
    caption: 'Compared to last month',
    icon: 'receipt_long',
    color: 'orange',
    direction: 'down',
  },
  {
    label: 'Net Income',
    value: '₱600K',
    change: '18.6%',
    caption: 'Compared to last month',
    icon: 'trending_up',
    color: 'blue',
    direction: 'up',
  },
  {
    label: 'Pending Invoices',
    value: '24',
    change: '8.2%',
    caption: '4 require attention',
    icon: 'request_quote',
    color: 'purple',
    direction: 'down',
  },
]

const chartBars = [
  {
    month: 'Jan',
    value: 43,
  },
  {
    month: 'Feb',
    value: 54,
  },
  {
    month: 'Mar',
    value: 47,
  },
  {
    month: 'Apr',
    value: 65,
  },
  {
    month: 'May',
    value: 58,
  },
  {
    month: 'Jun',
    value: 76,
  },
  {
    month: 'Jul',
    value: 68,
    current: true,
  },
  {
    month: 'Aug',
    value: 83,
  },
]

const transactions = [
  {
    name: 'Client Payment',
    category: 'Revenue',
    date: 'Today',
    amount: '+ ₱84,000',
    status: 'Completed',
    type: 'income',
    icon: 'south_west',
    color: 'green',
  },
  {
    name: 'Office Supplies',
    category: 'Operations',
    date: 'Today',
    amount: '- ₱12,450',
    status: 'Completed',
    type: 'expense',
    icon: 'north_east',
    color: 'orange',
  },
  {
    name: 'Consulting Services',
    category: 'Professional Fee',
    date: 'Yesterday',
    amount: '+ ₱45,000',
    status: 'Pending',
    type: 'income',
    icon: 'work_outline',
    color: 'blue',
  },
  {
    name: 'Software Subscription',
    category: 'Technology',
    date: 'Sep 17',
    amount: '- ₱8,500',
    status: 'Completed',
    type: 'expense',
    icon: 'computer',
    color: 'purple',
  },
]

const quickActions = [
  {
    label: 'Add Transaction',
    icon: 'add_card',
    color: 'green',
  },
  {
    label: 'Create Invoice',
    icon: 'post_add',
    color: 'orange',
  },
  {
    label: 'Generate Report',
    icon: 'analytics',
    color: 'blue',
  },
  {
    label: 'Add Client',
    icon: 'person_add_alt',
    color: 'purple',
  },
]

const tasks = ref([
  {
    title: 'Review September financial report',
    due: 'Due today',
    priority: 'High',
    done: false,
  },
  {
    title: 'Approve pending reimbursement',
    due: 'Due tomorrow',
    priority: 'Medium',
    done: false,
  },
  {
    title: 'Verify monthly reconciliation',
    due: 'Sep 21',
    priority: 'Medium',
    done: false,
  },
  {
    title: 'Archive August reports',
    due: 'Sep 23',
    priority: 'Low',
    done: false,
  },
])

const systems = [
  {
    name: 'Authentication',
    description: 'All authentication services operational',
    icon: 'verified_user',
  },
  {
    name: 'Database',
    description: 'Connected and responding normally',
    icon: 'storage',
  },
  {
    name: 'Mail Service',
    description: 'Email delivery service operational',
    icon: 'mail_outline',
  },
]
</script>

<style scoped>
/* ==========================================
   PAGE
========================================== */

.dashboard-page {
  position: relative;

  min-height: 100vh;

  overflow: hidden;

  background: #f5f8f6;
}

.dashboard-grid {
  position: absolute;

  inset: 0;

  opacity: 0.28;

  pointer-events: none;

  background-image:
    linear-gradient(
      rgba(31, 122, 69, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(31, 122, 69, 0.025) 1px,
      transparent 1px
    );

  background-size: 46px 46px;

  mask-image:
    linear-gradient(
      to bottom,
      #000,
      transparent 75%
    );
}

.dashboard-container {
  position: relative;

  z-index: 2;

  max-width: 1480px;

  margin: 0 auto;

  padding: 32px;
}

/* ==========================================
   ANIMATION
========================================== */

.animate-enter {
  opacity: 0;

  animation:
    enter-up
    0.65s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

@keyframes enter-up {
  from {
    opacity: 0;

    transform: translateY(22px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}

.delay-5 {
  animation-delay: 0.4s;
}

.delay-6 {
  animation-delay: 0.48s;
}

.delay-7 {
  animation-delay: 0.55s;
}

.delay-8 {
  animation-delay: 0.62s;
}

.delay-9 {
  animation-delay: 0.7s;
}

.delay-10 {
  animation-delay: 0.78s;
}

/* ==========================================
   WELCOME
========================================== */

.welcome-section {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 28px;
}

.welcome-badge {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 7px 11px;

  border: 1px solid #d6e6db;

  border-radius: 999px;

  background: #edf7f0;

  color: #2d7950;

  font-size: 10px;

  line-height: 1.2;

  font-weight: 800;

  letter-spacing: 0.8px;
}

.welcome-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #2fa061;

  animation:
    welcome-pulse
    1.8s
    infinite;
}

@keyframes welcome-pulse {
  0% {
    box-shadow:
      0 0 0 0
      rgba(47, 160, 97, 0.35);
  }

  70% {
    box-shadow:
      0 0 0 7px
      rgba(47, 160, 97, 0);
  }

  100% {
    box-shadow:
      0 0 0 0
      rgba(47, 160, 97, 0);
  }
}

.welcome-copy h1 {
  margin: 14px 0 0;

  color: #213628;

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 32px;

  line-height: 1.2;
}

.welcome-copy p {
  margin: 7px 0 0;

  color: #78887e;

  font-size: 13px;

  line-height: 1.6;
}

.welcome-actions {
  display: flex;

  gap: 10px;
}

.date-button {
  min-height: 43px;

  padding: 0 14px;

  border: 1px solid #dfe7e1;

  border-radius: 11px;

  background: #ffffff;

  color: #667a6d;

  font-size: 12px;
}

.date-button :deep(.q-btn__content) {
  gap: 8px;
}

.create-button {
  min-height: 43px;

  padding: 0 16px;

  border-radius: 11px;

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
    9px
    22px
    rgba(246, 122, 18, 0.2);
}

.create-button :deep(.q-btn__content) {
  gap: 8px;
}

/* ==========================================
   STATS
========================================== */

.stats-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;

  margin-bottom: 18px;
}

.stat-card {
  position: relative;

  overflow: hidden;

  padding: 20px;

  border: 1px solid #e0e8e2;

  border-radius: 17px;

  background:
    rgba(255, 255, 255, 0.94);

  box-shadow:
    0
    10px
    30px
    rgba(38, 79, 50, 0.04);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0
    18px
    38px
    rgba(38, 79, 50, 0.09);
}

.stat-top {
  display: flex;

  justify-content: space-between;
}

.stat-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 42px;
  height: 42px;

  border-radius: 12px;
}

.stat-icon.green {
  background: #e8f5ec;

  color: #287d4e;
}

.stat-icon.orange {
  background: #fff1e4;

  color: #eb7e1c;
}

.stat-icon.blue {
  background: #e9f2f8;

  color: #447c9e;
}

.stat-icon.purple {
  background: #f0eafa;

  color: #7958a6;
}

.trend {
  display: flex;

  align-items: center;

  gap: 3px;

  height: 25px;

  padding: 0 8px;

  border-radius: 999px;

  background: #edf7f0;

  color: #2e8455;

  font-size: 10px;

  font-weight: 700;
}

.trend.down {
  background: #fff2e8;

  color: #de7b28;
}

.stat-label {
  margin-top: 16px;

  color: #87968d;

  font-size: 12px;

  line-height: 1.4;
}

.stat-value {
  margin-top: 5px;

  color: #2a4231;

  font-size: 25px;

  line-height: 1.2;

  font-weight: 700;
}

.stat-footer {
  margin-top: 7px;

  color: #9ba69f;

  font-size: 10px;

  line-height: 1.4;
}

.stat-decoration {
  position: absolute;

  right: -30px;
  bottom: -40px;

  width: 100px;
  height: 100px;

  border-radius: 50%;

  opacity: 0.045;
}

.stat-decoration.green {
  background: #188149;
}

.stat-decoration.orange {
  background: #ef831e;
}

.stat-decoration.blue {
  background: #4384ae;
}

.stat-decoration.purple {
  background: #7959a4;
}

/* ==========================================
   MAIN PANELS
========================================== */

.dashboard-main-grid {
  display: grid;

  grid-template-columns:
    minmax(0, 1.7fr)
    minmax(300px, 0.7fr);

  gap: 18px;
}

.panel {
  padding: 22px;

  border: 1px solid #e0e8e2;

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.95);

  box-shadow:
    0
    10px
    30px
    rgba(38, 79, 50, 0.04);
}

.panel-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;
}

.panel-eyebrow {
  color: #9aa69e;

  font-size: 9px;

  line-height: 1.2;

  font-weight: 800;

  letter-spacing: 1px;
}

.panel-header h2 {
  margin: 5px 0 0;

  color: #354d3c;

  font-size: 16px;

  line-height: 1.3;
}

.panel-more {
  color: #98a59d;
}

.period-button,
.view-all {
  min-height: 35px;

  padding: 0 10px;

  color: #6f8376;

  font-size: 11px;
}

.period-button :deep(.q-btn__content),
.view-all :deep(.q-btn__content) {
  gap: 6px;
}

/* ==========================================
   REVENUE CHART
========================================== */

.chart-summary {
  display: flex;

  align-items: flex-end;

  margin-top: 23px;
}

.chart-summary span,
.chart-summary strong {
  display: block;
}

.chart-summary span {
  color: #8d9b92;

  font-size: 11px;
}

.chart-summary strong {
  margin-top: 4px;

  color: #294130;

  font-size: 25px;
}

.chart-growth {
  display: flex;

  align-items: center;

  gap: 4px;

  margin-left: 13px;

  padding: 5px 8px;

  border-radius: 999px;

  background: #edf7f0;

  color: #2f8455;

  font-size: 10px;

  font-weight: 700;
}

.modern-chart {
  position: relative;

  height: 220px;

  margin-top: 22px;
}

.chart-grid-line {
  position: absolute;

  left: 0;

  width: 100%;
  height: 1px;

  background: #eef2ef;
}

.line-a {
  top: 25%;
}

.line-b {
  top: 50%;
}

.line-c {
  top: 75%;
}

.chart-bars {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: flex-end;

  justify-content: space-around;
}

.chart-column {
  display: flex;

  flex: 1;

  flex-direction: column;

  align-items: center;

  height: 100%;
}

.bar-wrapper {
  display: flex;

  flex: 1;

  align-items: flex-end;
}

.chart-bar {
  position: relative;

  width: 26px;

  border-radius:
    6px
    6px
    2px
    2px;

  background:
    linear-gradient(
      180deg,
      #318d5b,
      #75b98c
    );

  transform-origin: bottom;

  animation:
    grow-bar
    1.1s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes grow-bar {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

.chart-bar.current {
  background:
    linear-gradient(
      180deg,
      #f78a23,
      #ffb066
    );

  box-shadow:
    0
    5px
    16px
    rgba(244, 132, 31, 0.16);
}

.bar-tooltip {
  position: absolute;

  top: -30px;
  left: 50%;

  padding: 5px 7px;

  transform: translateX(-50%);

  border-radius: 6px;

  background: #24392b;

  color: #ffffff;

  font-size: 9px;

  white-space: nowrap;
}

.chart-column > span {
  margin-top: 9px;

  color: #98a49c;

  font-size: 10px;
}

/* ==========================================
   CASH FLOW
========================================== */

.donut-wrapper {
  display: flex;

  justify-content: center;

  margin-top: 29px;
}

.donut-chart {
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 165px;
  height: 165px;

  border-radius: 50%;

  background:
    conic-gradient(
      #258553 0deg 232deg,
      #ef8a2a 232deg 360deg
    );

  box-shadow:
    0
    12px
    30px
    rgba(42, 99, 62, 0.1);
}

.donut-chart::before {
  content: '';

  position: absolute;

  width: 120px;
  height: 120px;

  border-radius: 50%;

  background: #ffffff;
}

.donut-center {
  position: relative;

  z-index: 2;

  text-align: center;
}

.donut-center span,
.donut-center strong {
  display: block;
}

.donut-center span {
  color: #98a49c;

  font-size: 9px;

  letter-spacing: 0.8px;
}

.donut-center strong {
  margin-top: 4px;

  color: #354c3c;

  font-size: 17px;
}

.cashflow-legend {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 12px;

  margin-top: 24px;
}

.cashflow-legend > div {
  display: flex;

  align-items: center;
}

.legend-dot {
  width: 9px;
  height: 9px;

  margin-right: 8px;

  border-radius: 50%;
}

.legend-dot.income {
  background: #258553;
}

.legend-dot.expense {
  background: #ef8a2a;
}

.cashflow-legend span,
.cashflow-legend strong {
  display: block;
}

.cashflow-legend div div span {
  color: #8e9b93;

  font-size: 10px;
}

.cashflow-legend strong {
  margin-top: 3px;

  color: #435a4a;

  font-size: 12px;
}

/* ==========================================
   TRANSACTIONS
========================================== */

.transactions-panel {
  margin-top: 18px;
}

.transactions-table {
  margin-top: 14px;
}

.transaction-row {
  display: grid;

  grid-template-columns:
    42px
    minmax(180px, 1fr)
    100px
    110px
    34px;

  align-items: center;

  gap: 12px;

  min-height: 64px;

  border-bottom: 1px solid #eef2ef;
}

.transaction-row:last-child {
  border-bottom: none;
}

.transaction-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 38px;
  height: 38px;

  border-radius: 11px;
}

.transaction-icon.green {
  background: #e8f5ec;

  color: #2b8050;
}

.transaction-icon.orange {
  background: #fff1e5;

  color: #ed801d;
}

.transaction-icon.blue {
  background: #eaf2f7;

  color: #4c819f;
}

.transaction-icon.purple {
  background: #f0eafa;

  color: #7859a3;
}

.transaction-info strong,
.transaction-info span {
  display: block;
}

.transaction-info strong {
  color: #405748;

  font-size: 12px;

  line-height: 1.3;
}

.transaction-info span {
  margin-top: 4px;

  color: #96a29a;

  font-size: 10px;

  line-height: 1.4;
}

.transaction-status {
  width: fit-content;

  padding: 5px 8px;

  border-radius: 999px;

  background: #edf7f0;

  color: #308257;

  font-size: 10px;

  font-weight: 600;

  text-transform: capitalize;
}

.transaction-status.Pending {
  background: #fff3e8;

  color: #d87b2b;
}

.transaction-amount {
  color: #6e8175;

  font-size: 12px;

  font-weight: 700;

  text-align: right;
}

.transaction-amount.income {
  color: #2d8556;
}

.transaction-more {
  color: #9ca79f;
}

/* ==========================================
   QUICK ACTIONS
========================================== */

.quick-panel {
  margin-top: 18px;
}

.quick-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 10px;

  margin-top: 16px;
}

.quick-action {
  display: flex;

  align-items: center;

  min-height: 64px;

  padding: 11px;

  border: 1px solid #e6ece8;

  border-radius: 13px;

  background: #fbfcfb;

  color: #4c6353;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.quick-action:hover {
  transform: translateY(-3px);

  border-color: #d1e1d6;

  box-shadow:
    0
    10px
    22px
    rgba(35, 80, 49, 0.06);
}

.quick-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 38px;
  height: 38px;

  margin-right: 10px;

  border-radius: 10px;
}

.quick-icon.green {
  background: #e8f5ec;

  color: #2b8050;
}

.quick-icon.orange {
  background: #fff1e5;

  color: #ed801d;
}

.quick-icon.blue {
  background: #eaf2f7;

  color: #4c819f;
}

.quick-icon.purple {
  background: #f0eafa;

  color: #7859a3;
}

.quick-action span {
  font-size: 11px;

  line-height: 1.3;

  font-weight: 600;
}

.quick-arrow {
  margin-left: auto;

  color: #9ca8a0;

  transition: transform 0.2s ease;
}

.quick-action:hover .quick-arrow {
  transform: translate(2px, -2px);
}

/* ==========================================
   BOTTOM GRID
========================================== */

.dashboard-bottom {
  display: grid;

  grid-template-columns:
    1.35fr
    0.65fr;

  gap: 18px;

  margin-top: 18px;
}

/* ==========================================
   TASKS
========================================== */

.task-count {
  padding: 5px 9px;

  border-radius: 999px;

  background: #fff2e7;

  color: #dd7925;

  font-size: 10px;

  font-weight: 700;
}

.task-list {
  margin-top: 13px;
}

.task-row {
  display: flex;

  align-items: center;

  min-height: 60px;

  border-bottom: 1px solid #edf1ee;
}

.task-row:last-child {
  border-bottom: none;
}

.task-copy {
  margin-left: 5px;
}

.task-copy strong,
.task-copy span {
  display: block;
}

.task-copy strong {
  color: #435a4a;

  font-size: 12px;

  line-height: 1.3;
}

.task-copy strong.completed {
  color: #99a59d;

  text-decoration: line-through;
}

.task-copy span {
  margin-top: 4px;

  color: #99a59d;

  font-size: 10px;
}

.priority {
  margin-left: auto;

  padding: 5px 8px;

  border-radius: 999px;

  font-size: 9px;

  font-weight: 600;

  text-transform: capitalize;
}

.priority.High {
  background: #fff0e6;

  color: #d96f25;
}

.priority.Medium {
  background: #fff8e9;

  color: #b58428;
}

.priority.Low {
  background: #edf7f0;

  color: #39805a;
}

/* ==========================================
   SYSTEM HEALTH
========================================== */

.system-online {
  display: flex;

  align-items: center;

  gap: 6px;

  color: #3a8559;

  font-size: 10px;

  font-weight: 600;
}

.system-online span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #32a162;

  animation:
    system-pulse
    1.8s
    infinite;
}

@keyframes system-pulse {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }
}

.system-list {
  margin-top: 15px;
}

.system-row {
  display: flex;

  align-items: center;

  min-height: 64px;

  border-bottom: 1px solid #edf1ee;
}

.system-row:last-child {
  border-bottom: none;
}

.system-icon {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 38px;
  height: 38px;

  margin-right: 11px;

  border-radius: 11px;

  background: #eaf5ee;

  color: #327d52;
}

.system-row strong,
.system-row span {
  display: block;
}

.system-row strong {
  color: #405748;

  font-size: 12px;

  line-height: 1.3;
}

.system-row div > span {
  margin-top: 4px;

  color: #96a29a;

  font-size: 10px;

  line-height: 1.4;
}

.system-check {
  margin-left: auto;

  color: #36a565;
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 1150px) {
  .stats-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .dashboard-main-grid,
  .dashboard-bottom {
    grid-template-columns: 1fr;
  }

  .quick-grid {
    grid-template-columns:
      repeat(4, 1fr);
  }
}

@media (max-width: 750px) {
  .dashboard-container {
    padding:
      22px
      16px;
  }

  .welcome-section {
    align-items: flex-start;

    flex-direction: column;

    gap: 18px;
  }

  .welcome-actions {
    width: 100%;
  }

  .date-button,
  .create-button {
    flex: 1;
  }

  .welcome-copy h1 {
    font-size: 28px;
  }

  .welcome-copy p {
    font-size: 12px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .quick-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .transaction-row {
    grid-template-columns:
      42px
      1fr
      auto;
  }

  .transaction-status,
  .transaction-more {
    display: none;
  }

  .panel-header h2 {
    font-size: 15px;
  }

  .stat-value {
    font-size: 23px;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding:
      18px
      12px;
  }

  .welcome-actions {
    flex-direction: column;
  }

  .welcome-copy h1 {
    font-size: 26px;
  }

  .welcome-badge {
    font-size: 9px;
  }

  .date-button,
  .create-button {
    width: 100%;

    font-size: 11px;
  }

  .quick-grid {
    grid-template-columns: 1fr;
  }

  .stat-label {
    font-size: 11px;
  }

  .transaction-info strong {
    font-size: 11px;
  }

  .transaction-info span {
    font-size: 9px;
  }

  .cashflow-legend {
    grid-template-columns: 1fr;

    gap: 9px;
  }
}

/* ==========================================
   REDUCED MOTION
========================================== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;
  }
}
</style>