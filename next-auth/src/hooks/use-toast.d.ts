import { Hook } from 'react';

declare module '@hooks/use-toast' {
  export const useToast: Hook<{ toast: (message: string) => void }>;
}