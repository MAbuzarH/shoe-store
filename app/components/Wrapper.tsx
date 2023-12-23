
interface WrapperProps {
children: React.ReactNode
styelsExtra?: string;
}
function Wrapper({ children, styelsExtra }: WrapperProps) {
  return <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${styelsExtra || ''} `}>{children}</div>;
}

export default Wrapper;
