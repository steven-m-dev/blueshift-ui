import { atom } from 'jotai/vanilla';

const namespace = atom<string | null>(null);
const preview = atom<boolean>(false);

export { namespace, preview };
