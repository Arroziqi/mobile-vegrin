import { useState } from 'react'

export function useStepper(totalSteps: number) {
  const [step, setStep] = useState(0)

  const next = () => setStep(s => Math.min(s + 1, totalSteps - 1))
  const prev = () => setStep(s => Math.max(s - 1, 0))

  return {
    step,
    next,
    prev,
    isLast: step === totalSteps - 1,
  }
}
