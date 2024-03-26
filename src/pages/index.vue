<script setup>
import { ref } from "vue";
import { banner } from "~/utils/commands";
// TODO: continue to expand on features, add observer to main containers to check scroll height and add padding/margin if needed
const theme = computed(() =>
  useCookie("theme", {
    default: () => "default",
    watch: "shallow",
  })
);

useHead({
  htmlAttrs: {
    class: theme.value,
  },
});

const inputRef = ref();
const terminalRef = ref(0);
const containerRef = ref();

const history = useState("history");

const { setCommand, setHistory, setLastCommandIndex, clearHistory } =
  useHistory([]);

const forceRerender = () => {
  terminalRef.value += 1;
};

onMounted(async () => {
  if (history.value?.length === 0) {
    setHistory(await banner());
    forceRerender();
  }

  if (containerRef.value.offsetHeight <= containerRef.value.scrollHeight) {
    containerRef.value.style.paddingRight = "20px";
    containerRef.value.scrollTo(0, containerRef.value.scrollHeight);
  } else if (containerRef.value.style.paddingRight) {
    containerRef.value.style.removeProperty("paddingRight");
  }
});

onUpdated(() => {
  // if (historyRef.value === 0 && history.value?.length > 0) {
  //   forceRerender();
  // }

  if (containerRef.value.offsetHeight <= containerRef.value.scrollHeight) {
    containerRef.value.style.paddingRight = "5px";
    containerRef.value.scrollTo(0, containerRef.value.scrollHeight);
  } else if (containerRef.value.style.paddingRight) {
    containerRef.value.style.removeProperty("paddingRight");
  }
});

onUnmounted(() => {
  if (terminalRef.value > 0) terminalRef.value = 0;
});

const screenClicked = (e) => {
  watchEffect(() => {
    if (inputRef.value?.inputRef) {
      inputRef.value.inputRef.focus();
    }
  });
};
</script>

<template>
  <main
    class="w-full h-full bg-light-background dark:bg-dark-background p-1 sm:p2"
  >
    <div
      class="h-full border-2 rounded border-light-yellow dark:border-dark-yellow overflow-hidden p-2 sm:p-3 md:p-5"
      @click="screenClicked"
    >
      <div
        ref="containerRef"
        class="h-full scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-hidden"
      >
        <div class="max-w-full xl:max-w-4xl">
          <TerminalHistory :key="terminalRef" />
          <TerminalInput
            v-if="containerRef"
            ref="inputRef"
            :key="terminalRef"
            :containerRef="containerRef"
            :setHistory="setHistory"
            :clearHistory="clearHistory"
            :setCommand="setCommand"
            :setLastCommandIndex="setLastCommandIndex"
          />
        </div>
      </div>
    </div>
  </main>
</template>
