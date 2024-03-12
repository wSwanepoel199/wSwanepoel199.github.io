<script setup lang="jsx">
import { render } from "vue";
import { Fragment } from "vue/jsx-runtime";

const history = useState("history");
const labelRef = ref();
const inputRef = ref();
const historyRef = ref();
const renderKey = ref(0);

const indentAmount = ref([0]);
const dropInput = ref([false]);

const reRender = () => {
  renderKey.value++;
};

// let observer;

onMounted(() => {
  // observer = new ResizeObserver((entries) => {
  //   console.log("entries", entries);
  //   entries.forEach((entry) => {
  //     // console.log(indentAmount.value, dropInput.value);
  //     // console.log(labelRef.value, inputRef.value);
  //     const cr = entry.contentRect;
  //     console.log("Entry: ", entry);
  //     console.log("Element: ", entry.target);
  //     console.log("Element size: ", cr.width, cr.height);
  //     console.log("Element padding: ", cr.top, cr.left);
  //     if (labelRef.value && inputRef.value) {
  //       indentAmount.value = labelRef.value.map((el) => el.offsetWidth);
  //       dropInput.value = inputRef.value.map((el, index) => {
  //         return el.offsetWidth <= indentAmount.value[index] + 10;
  //       });
  //     }
  //   });
  // });
  if (history.value.length >= 1) {
    // console.log(labelRef);
    reRender();
  }

  console.log(labelRef.value, inputRef.value);

  // if (labelRef.value && inputRef.value) {
  //   console.log(labelRef.value, inputRef.value);
  //   const indentArray = labelRef.value.map((el) => el.offsetWidth);
  //   // indentAmount.value =
  //   const dropArray = inputRef.value.map(
  //     (el, index) => el.offsetWidth <= indentAmount.value[index]
  //   );
  //   // dropInput.value =
  //   console.log(indentArray, dropArray);
  // }
});

onUpdated(() => {
  // console.log(historyRef.value);
  // if (historyRef.value && typeof historyRef.value === "HTMLDivElement")
  //   observer.observe(historyRef.value);

  console.log(
    labelRef.value,
    inputRef.value,
    indentAmount.value,
    dropInput.value
  );

  if (labelRef.value && inputRef.value) {
    callOnce(() => {
      console.log(labelRef.value, inputRef.value);
      const indentArray = labelRef.value.map((el) => el.offsetWidth);
      indentAmount.value = indentArray;
      const dropArray = inputRef.value.map(
        (el, index) => el.offsetWidth <= indentAmount.value[index]
      );
      dropInput.value = dropArray;
    });
  }
});

onUnmounted(() => {
  if (renderKey.value && renderKey.value > 0) renderKey.value = 0;
});
console.log(renderKey);
</script>

<template>
  <div
    :key="renderKey"
    ref="historyRef"
    class="w-full"
    id="command_history"
    v-if="renderKey"
  >
    <section>
      <div v-for="entry in history" :key="entry">
        {{ console.log(entry, indentAmount.value, dropInput.value) }}
        <div classList="flex flex-row">
          <div ref="labelRef" id="label" class="flex-shrink z-10 relative">
            <UserIdentifier />
          </div>
          <div ref="inputRef" class="relative input flex-grow min-w-full mr-1">
            {{ entry.command }}
          </div>
        </div>
        <div classList="mb-2 leading-[normal]">
          <RenderOutput :output="entry.output" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.shrunk {
  margin-top: 20px;
  text-indent: 0;
}
.input {
  word-break: break-word;
  overflow-wrap: break-word;
  position: relative;
}
</style>
