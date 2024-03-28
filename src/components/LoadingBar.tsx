export default defineComponent({
  name: "LoadingBar",
  props: {
    throttle: {
      type: Number,
      default: 200,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    height: {
      type: Number,
      default: 3,
    },
    color: {
      type: [String, Boolean],
      default:
        "text-light-foreground dark:text-dark-foreground bg-light-foreground dark:bg-dark-foreground",
    },
    estimatedProgress: {
      type: Function as unknown as () => (
        duration: number,
        elapsed: number
      ) => number,
      required: false,
    },
    containerRef: {
      type: HTMLElement,
      required: false,
    },
  },
  setup: (props) => {
    const { progress, isLoading } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress,
    });

    const containerRefScrollHeight = reactive({
      mountedHeight: 0,
      currentHeight: 0,
    });

    const percentage = computed(
      () => Math.round((progress.value + Number.EPSILON) * 100) / 100
    );

    onMounted(() => {
      if (props?.containerRef) {
        containerRefScrollHeight.mountedHeight =
          props.containerRef.scrollHeight;
      }
    });

    onUpdated(() => {
      if (
        props?.containerRef &&
        containerRefScrollHeight.currentHeight !==
          containerRefScrollHeight.mountedHeight
      ) {
        containerRefScrollHeight.currentHeight =
          containerRefScrollHeight.mountedHeight;
        props.containerRef.scrollTo(0, props.containerRef.scrollHeight);
      }
    });

    return () => (
      <div
        class={`flex-row flex-nowrap justify-center w-full`}
        style={`display: ${isLoading.value ? `flex` : `none`};`}
      >
        <p class={`pl-2`}>{`[`}</p>
        <div class={`relative w-full flex flex-nowrap`}>
          <div
            class={`overflow-hidden z-10 absolute left-0 top-0 ${props.color}`}
            style={`width: ${percentage.value}%;`}
            // style={`width: ${50}%; background: ${props.color};`}
          >
            test
          </div>
          <div
            class={`bar-background h-[${props.height}px] w-full relative top-0`}
          ></div>
        </div>
        <p class={`min-w-20`}>{`] ${percentage.value}%`}</p>
      </div>
    );
  },
});
