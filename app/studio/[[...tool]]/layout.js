export default function LabsLayout({ children }) {
  return (
    <div className="z-50 flex flex-col w-full h-full">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
