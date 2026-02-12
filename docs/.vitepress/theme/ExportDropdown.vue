<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const { lang } = useData();

const isEnglish = computed(() =>
  (lang.value || "").toLowerCase().startsWith("en")
);

const ui = computed(() =>
  isEnglish.value ? { export: "Download PDF" } : { export: "下载 PDF" }
);

const pdfHref = computed(() =>
  isEnglish.value
    ? withBase("/downloads/en/debugging-work-instruction.pdf")
    : withBase("/downloads/zh-cn/作业指导书-调试.pdf")
);

const pdfDownloadName = computed(() =>
  isEnglish.value
    ? "debugging-work-instruction.pdf"
    : "作业指导书-调试.pdf"
);
</script>

<template>
  <div class="mc-export">
    <a class="mc-export__btn" :href="pdfHref" :download="pdfDownloadName" :aria-label="ui.export">
      <span class="mc-export__sr-only">{{ ui.export }}</span>
      <svg
        class="mc-export__icon"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.004 4.004a1 1 0 0 1-1.414 0l-4.004-4.004a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.mc-export {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.mc-export::before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: "";
}

@media (max-width: 959px) {
  .mc-export::before {
    display: none;
  }

  .mc-export__btn {
    padding: 0 !important;
  }
}

.mc-export__btn {
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  border: 0;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: color 0.25s;
  text-decoration: none;
}

.mc-export__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.mc-export__icon {
  display: block;
}

.mc-export__btn:hover {
  color: var(--vp-c-text-2);
}
</style>
