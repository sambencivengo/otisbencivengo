export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col w-50 h-50 bg-red-800 justify-center items-center italic font-semibold text-xl">
          <p >
            Stay tuned ❤️ </p>
          <p>
            - R & S
          </p>
        </div>
      </main>
    </div>
  );
}
