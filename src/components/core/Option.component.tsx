export default function Option({
  children,
  ...props
}: { children?: React.ReactNode } & React.HTMLProps<HTMLOptionElement>) {
  return <option {...props}>{children}</option>;
}
