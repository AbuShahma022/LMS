// Global typing for the Lottie web component used across pages.
declare namespace JSX {
  interface IntrinsicElements {
    "dotlottie-wc": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        autoplay?: boolean;
        loop?: boolean;
      },
      HTMLElement
    >;
  }
}
