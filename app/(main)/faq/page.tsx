import { randomUUID } from 'crypto';
import faq from './faq.json'

function QuestionAndAnswer({ question, answer }: { question: string; answer: string }) {

  return (
    <div className='flex flex-col gap-1'>
      <p className="font-jules font-bold text-wedding-red text-xl md:text-2xl">{question}</p>
      <p className="font-cormorant leading-[20px] text-xl ">{answer}</p>
    </div>
  )
}
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-4">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-12 tracking-[12px] md:tracking-[20px] font-cormorant">FAQ</h1>

      {/* FAQ Section */}
      <section className="mb-16">
        <div>
          <ul className="space-y-8 text-lg leading-relaxed">
            {faq.map(item =>
              <li key={randomUUID()} className="flex items-start">
                <QuestionAndAnswer question={item.q} answer={item.a} />
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
