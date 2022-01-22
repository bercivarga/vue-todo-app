export default function (): string {
  return new Date().toJSON().slice(0, 10);
}
