import LiveAgentConnect from '@/components/LiveAgentConnect';
import { SITE } from '@/lib/site';

export const metadata = {
  title: `Contact Us to Compare | ${SITE.brandFull}`,
  description:
    'Speak with a live agent or send us a message to compare internet and TV plans available at your address.',
};

export default function Page() {
  return <LiveAgentConnect disclosure={SITE.connectPageDisclosure} showAddress />;
}
