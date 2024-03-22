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
const historyRef = ref(0);
const containerRef = ref();

const history = useState("history");

const { setCommand, setHistory, setLastCommandIndex, clearHistory } =
  useHistory([]);

const forceRerender = () => {
  historyRef.value += 1;
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
    containerRef.value.style.paddingRight = "10px";
    containerRef.value.scrollTo(0, containerRef.value.scrollHeight);
  } else if (containerRef.value.style.paddingRight) {
    containerRef.value.style.removeProperty("paddingRight");
  }
});

onUnmounted(() => {
  if (historyRef.value > 0) historyRef.value = 0;
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
  <div
    class="max-w-full h-dvh text-light-foreground dark:text-dark-foreground text-sm md:min-w-full md:text-base"
    @click="screenClicked"
  >
    <main
      class="w-full h-full bg-light-background dark:bg-dark-background p-1 sm:p2"
    >
      <div
        class="h-full border-2 rounded border-light-yellow dark:border-dark-yellow overflow-hidden p-2 sm:p-3 md:p-5"
      >
        <div
          ref="containerRef"
          class="h-full scrollbar-thin scrollbar-webkit overflow-y-auto overflow-x-hidden"
        >
          <div class="max-w-full xl:max-w-4xl">
            <TerminalHistory :key="historyRef" />
            <TerminalInput
              v-if="containerRef"
              ref="inputRef"
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
  </div>
</template>
