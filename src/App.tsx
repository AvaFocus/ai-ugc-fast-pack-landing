import { CheckCircle2Icon } from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { FAQItem } from './components/FAQItem';
export function App() {
  return <main className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI UGC FAST PACK — 5 videos ready to shoot in 10 minutes
          </h1>

          <p className="text-lg md:text-xl text-purple-100 mb-10 leading-relaxed">
  Get 5 video ideas, 5 scripts, 5 hooks, 5 CTAs and 5 AI prompts — ready to shoot instantly.
</p>

          <div className="space-y-3 mb-10 text-left max-w-2xl mx-auto">
            {['5 UGC concepts designed to sell, not just look pretty', 'Short scripts (8–12 sec) with a native TikTok creator tone', '5 AI prompts to generate visuals (NanoBanana / Midjourney / ComfyUI)', '1 clean PDF, ready to copy-paste into your workflow', 'Perfect for TikTok Shop sellers, small e-com brands & creators'].map((item, index) => <div key={index} className="flex items-start gap-3">
                <CheckCircle2Icon className="w-6 h-6 text-purple-300 flex-shrink-0 mt-0.5" />
                <span className="text-purple-50">{item}</span>
              </div>)}
          </div>

          <a href="https://buy.stripe.com/cNi9AUe9Ae1WgSzasmeZ200" target="_blank" rel="noreferrer" className="inline-block">
            <Button size="large" className="mb-4">
              Get My FAST PACK – £47
            </Button>
          </a>

          <p className="text-sm text-purple-200">
           No subscription. Try once. Get your pack instantly.

          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            How does it work?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                You send me your product
              </h3>
              <p className="text-gray-600">
                One simple sheet: product name, type, benefits, target,
                platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                I generate your UGC pack with AI
              </h3>
              <p className="text-gray-600">
                5 concepts, 5 scripts, 5 hooks, 5 CTAs, 5 visual prompts, 1
                naming pack – all structured.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-2xl font-bold text-purple-600 mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                You post and test
              </h3>
              <p className="text-gray-600">
                You can record multiple videos in less than an hour, without
                creators and without brainstorming.
              </p>
            </div>
          </div>

          <p className="text-center text-purple-600 font-semibold">
            ➡️ Total time on your side: under 10 minutes.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What you get with the FAST PACK
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <div className="space-y-4">
              {['5 UGC video concepts (structure + camera angle + mood)', '5 short scripts (8–12 sec, TikTok native tone)', '5 strong hooks that stop the scroll', '5 CTAs adapted to TikTok Shop / Reels / Shorts', '5 AI prompts to generate visuals', '1 naming pack (file names for your videos)', '1 clean PDF deliverable, ready to use'].map((item, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2Icon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>)}
            </div>
          </div>

          <p className="text-center text-gray-700">
            👉 One pack = several days of content ideas for TikTok / Reels.
          </p>
        </div>
      </section>

      {/* Is This For You Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Is the FAST PACK for you?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FeatureCard icon="🛒" title="TikTok Shop sellers (UK / EU)" description="You want more product-focused content without spending hours on ideas." />
            <FeatureCard icon="💄" title="Small e-commerce brands (beauty, skincare, accessories, nutrition…)" description="You don't have consistent UGC yet but you want to test quickly." />
            <FeatureCard icon="🎯" title="Brands just starting on TikTok / Reels" description="You're not sure what to post or how to structure a video that sells." />
            <FeatureCard icon="🎥" title="Creators who want to delegate ideation & scripts" description="You keep the filming, you outsource the brain." />
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-gray-800 font-medium">
              If you're low on ideas, time or creative energy, this pack was
              made for you.
            </p>
          </div>
        </div>
      </section>

      {/* Example Pack Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What does a pack look like?
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-2">
                Example product
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                Night Repair Cream – Face
              </h3>
            </div>

            <div className="space-y-6">
              {[{
              title: 'Concept 1: Morning Glow',
              description: 'POV selfie, soft morning light, 10-second script (wake-up + application).'
            }, {
              title: 'Concept 2: Texture Macro',
              description: 'Close-up on the cream, sensory focus, short "texture & feeling" script.'
            }, {
              title: 'Concept 3: Before / After',
              description: 'Simple transition, honest testimonial + clear CTA.'
            }, {
              title: 'Concept 4: Night Routine',
              description: 'Full evening ritual, cosy mood, self-care message.'
            }, {
              title: 'Concept 5: Honest Review',
              description: 'Creator talking to camera, benefits + social proof.'
            }].map((concept, index) => <div key={index} className="border-l-4 border-purple-200 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {concept.title}
                  </h4>
                  <p className="text-gray-600">{concept.description}</p>
                </div>)}
            </div>
          </div>

          <p className="text-center text-gray-700">
            📄 You receive a clean, structured PDF with your 5 concepts, 5 scripts, 5 hooks, 5 CTAs and 5 AI prompts — ready to use instantly in TikTok Shop or hand over to a creator.

          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            One simple pack, one simple price
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-8 md:p-10 border-2 border-purple-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                AI UGC FAST PACK
              </h3>
              <div className="text-5xl font-bold text-purple-600">£47</div>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-gray-900 mb-4">You get:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['5 concepts', '5 scripts', '5 hooks', '5 CTAs', '5 visual prompts', '1 naming pack', '1 PDF deliverable'].map((item, index) => <div key={index} className="flex items-center gap-2">
                    <CheckCircle2Icon className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 text-center">
                No subscription. No long-term contract. You try it once. If you
                like the results and want more, we talk.
              </p>
            </div>

            <div className="text-center">
              <a href="https://buy.stripe.com/cNi9AUe9Ae1WgSzasmeZ200" target="_blank" rel="noreferrer" className="inline-block w-full md:w-auto">
                <Button size="large" className="w-full">
                  Get My FAST PACK – £47
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <FAQItem question="How long does it take to receive my pack?" answer="Within 10 minutes once I have your product sheet." />
            <FAQItem question="Do you record the videos for me?" answer="No. I send the ideas, scripts, hooks, CTAs and AI prompts so you or your creator can film fast." />
            <FAQItem question="Which platforms does this work for?" answer="TikTok, TikTok Shop, Instagram Reels, YouTube Shorts and UGC ads." />
            <FAQItem question="What if I don't have a TikTok Shop account yet?" answer="Use the pack for Reels/Shorts now and keep the scripts for your launch." />
            <FAQItem question="What if my audience is not in the UK?" answer="Yes. If your people are on TikTok/IG, I adapt the tone in English or French." />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to have 5 videos ready to shoot in 10 minutes?
          </h2>

          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            You already have the product. You're just missing the ideas that
            sell. Let AI do the brainstorming for you.
          </p>

          <a href="https://buy.stripe.com/cNi9AUe9Ae1WgSzasmeZ200" target="_blank" rel="noreferrer" className="inline-block">
            <Button size="large">Get My FAST PACK – £47</Button>
          </a>

        </div>
      </section>
    </main>;
}
