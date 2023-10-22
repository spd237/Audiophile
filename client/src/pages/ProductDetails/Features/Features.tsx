export default function Features({
  features,
}: {
  features: string | undefined;
}) {
  return (
    <article className="mt-[88px] lg:mt-0 lg:max-w-[635px]">
      <h3 className="uppercase font-bold leading-9 text-2xl ">features</h3>
      <p
        className="font-medium text-[15px] leading-6 opacity-50 my-6"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {features}
      </p>
    </article>
  );
}
