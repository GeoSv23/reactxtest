export const Typography = ({ variant = "h3", children, className }) => {
  const variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "span",
    subtitle2: "span",
    subtitle3: "span",
    body1: "p",
    body2: "p",
    body3: "p",
    caption: "span",
    overline: "span",
  };

  const Component = variants[variant];
  console.log(Component);

  return <Component className={className}>{children}</Component>;
};
