export const PageContainer = (props: {
  children: React.ReactNode;
}) => {
  return (
    <main className="bg-secondary-dark pb-12">
      <div className="max-w-container mx-auto px-4 min-h-[calc(100vh-200px)]">
        {props.children}
      </div>
    </main>
  );
}