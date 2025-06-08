import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto my-12 px-8">
      <div className="flex flex-row items-start gap-4">
        <div>
          <Image
            src="/automagic-logo.png"
            alt="Automagic Systems"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="font-sora-sans font-medium text-2xl">Automagic Systems</h1>
          <p className="mt-2">Human-first automation for a post-boring world</p>
        </div>
      </div>

      <div className="mt-2 space-y-1">
        <p>
          Since the dawn of AI, one thing has become clear: humans should do less of the dull stuff and stay in charge.
        </p>
        <p>
          At Automagic Systems, we build tools that automate the mundane, while keeping people in control.
        </p>

        <p className="font-sora-sans font-medium">
          Because AI is here to serve, not to rule.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-sora-sans font-medium text-2xl">Products</h2>
        <Link href="https://zenfin.app?utm_source=automagic-landing&utm_medium=referral&utm_campaign=automagic-landing" target="_blank" className="space-y-2 bg-gradient-to-b from-white/10 to-white/0 p-4 rounded-lg border-white/20 border border-solid hover:border-white/40 transition-colors hover:bg-white/5 flex flex-col md:flex-row items-center gap-2 md:gap-8">
          <div className="h-12 md:h-12 w-36 relative">
            <Image src="/zenfin-white.png" alt="Zenfin" layout="fill" objectFit="contain" />
          </div>
          <div>
            <h4 className="font-sora-sans font-bold">Zenfin</h4>
            <p>Turns WhatsApp chats into personal money tracking and insights. No spreadsheets, no dashboards, no stress. Just chat like a human, we’ll handle the boring bits.</p>
          </div>
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="font-sora-sans font-medium text-2xl">Our believes</h2>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Every system should have a brain.</li>
          <li>Humans should be the boss, not the AI.</li>
          <li>Good automation feels like magic.</li>
          <li>AI isn't the future, it’s here late.</li>
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="font-sora-sans font-medium text-2xl">Contact</h2>
        <p>automagic[at]abidf.com</p>
      </div>
    </div>
  );
}
