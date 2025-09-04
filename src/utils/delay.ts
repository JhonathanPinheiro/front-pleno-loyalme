export function delay(callback: () => void, timeout: number): void {
  setTimeout(callback, timeout)
}

export function delayRemoveSheet(callback: () => void) {
  delay(callback, 400)
}
