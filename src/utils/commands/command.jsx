import figlet from 'figlet';
import font from 'figlet/importable-fonts/DOS Rebel';
const config = {
  repo: ''
};

export const banner = async () => {
  figlet.parseFont("DOS Rebel", font);

  const bannerText = await figlet.text(
    "Portfolio\nTerminal",
    {
      font: "DOS Rebel",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      return data;
    }
  );
  // console.log(defineComponent(() => {
  //   return () => <div
  //     id="banner"
  //     className="whitespace-pre-wrap"
  //     style={{
  //       paddingTop: '1rem',
  //       gridTemplateRows: 'minmax(2.5rem, 12vmin) 1fr 5rem'
  //     }}
  //   >
  //     <pre className={``}
  //       style={{
  //         fontSize: "max(0.2rem, 1.5vmin)",
  //         lineHeight: 'normal',
  //       }}
  //     >
  //       {bannerText}
  //     </pre>
  //   </div>;
  // }));
  // return defineComponent(() => {
  //   return () => <div>
  //     <div
  //       id="banner"
  //       className="whitespace-pre-wrap"
  //       style={{
  //         paddingTop: '1rem',
  //         gridTemplateRows: 'minmax(2.5rem, 12vmin) 1fr 5rem'
  //       }}
  //     >
  //       <pre className={``}
  //         style={{
  //           fontSize: "max(0.2rem, 1.5vmin)",
  //           lineHeight: 'normal',
  //         }}
  //       >
  //         {bannerText}
  //       </pre>
  //     </div>
  //     <div
  //       className="whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full"
  //       style={{
  //         wordBreak: 'break-word'
  //       }}
  //     >
  //       <ul
  //         className='list-none text-xs sm:text-sm md:text-base'
  //         style={{ paddingLeft: '1rem' }}>
  //         <li style={{ paddingTop: '0.2rem' }}>
  //           {`Type 'help' to see the list of available commands.`}
  //         </li>
  //         <li style={{ paddingTop: '0.2rem' }}>
  //           {`Type 'sumfetch' to display summary.`}
  //         </li>
  //         <li style={{ paddingTop: '0.2rem' }}>
  //           {`Type 'repo' or click `}
  //           <u><a className="text-light-blue dark:text-dark-blue underline" href={config?.repo} target="_blank">here</a></u>
  //           {` for the Github repository.`}
  //         </li>
  //       </ul>
  //     </div>
  //   </div>;
  // });
  // return defineComponent(() => {
  return (
    <Fragment>
      <div
        id="banner"
        className="whitespace-pre-wrap"
        style={{
          paddingTop: '1rem',
          gridTemplateRows: 'minmax(2.5rem, 12vmin) 1fr 5rem'
        }}
      >
        <pre className={``}
          style={{
            fontSize: "max(0.2rem, 1.5vmin)",
            lineHeight: 'normal',
          }}
        >
          {bannerText}
        </pre>
      </div>
      <div
        className="whitespace-pre-wrap text-xs sm:text-sm md:text-base w-fill max-w-full"
        style={{
          wordBreak: 'break-word'
        }}
      >
        <ul
          className='list-none text-xs sm:text-sm md:text-base'
          style={{ paddingLeft: '1rem' }}>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'help' to see the list of available commands.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'sumfetch' to display summary.`}
          </li>
          <li style={{ paddingTop: '0.2rem' }}>
            {`Type 'repo' or click `}
            <u><a className="text-light-blue dark:text-dark-blue underline" href={config?.repo} target="_blank">here</a></u>
            {` for the Github repository.`}
          </li>
        </ul>
      </div>
    </Fragment>
  );
  // });
};