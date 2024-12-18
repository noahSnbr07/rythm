export default function parseDuration(duration: string): number {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) throw new Error(`Invalid duration format: ${duration}`);

  const [, hours, minutes, seconds] = match.map(Number);
  return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
}
