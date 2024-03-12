
export default defineComponent({
  props: {
    output: Object
  },
  render: ({ output: Output }) => {
    return (
      <div><Output /></div>
    );
  }
});
