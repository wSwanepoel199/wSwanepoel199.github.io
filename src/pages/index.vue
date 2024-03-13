<script setup>
import { ref, getCurrentInstance } from "vue";
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
const command = useState("command");
const lastCommandIndex = useState("lastCommandIndex");

// const history = useState("history", () => [
//   { command: "this" },
//   { command: "is" },
//   { command: "a" },
//   { command: "test" },
//   { command: "history" },
// ]);

const { setCommand, setHistory, setLastCommandIndex, clearHistory } =
  useHistory([]);

const forceRerender = () => {
  historyRef.value += 1;
};

onMounted(async () => {
  console.log("calling after history check");
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
  console.log(historyRef.value, history.value);
  // if (historyRef.value === 0 && history.value?.length > 0) {
  //   forceRerender();
  // }

  if (containerRef.value.offsetHeight <= containerRef.value.scrollHeight) {
    containerRef.value.style.paddingRight = "20px";
    containerRef.value.scrollTo(0, containerRef.value.scrollHeight);
  } else if (containerRef.value.style.paddingRight) {
    containerRef.value.style.removeProperty("paddingRight");
  }
});

onUnmounted(() => {
  if (historyRef.value > 0) historyRef.value = 0;
});

// onUpdated(() => {
//   console.log(history);
// });

const screenClicked = (e) => {
  watchEffect(() => {
    // console.log(inputRef.value);
    if (inputRef.value?.inputRef) {
      inputRef.value.inputRef.focus();
    }
  });
};
</script>

<template>
  <div
    class="max-w-full h-screen text-light-foreground dark:text-dark-foreground text-sm md:min-w-full md:text-base"
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
          <div class="max-w-sm md:max-w-md lg:max-w-lg">
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
