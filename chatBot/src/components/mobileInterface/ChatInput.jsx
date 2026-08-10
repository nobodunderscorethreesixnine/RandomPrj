import { Icon } from "@iconify/react";

export default function ChatInput({ value, onChange, onSend }) {
  function checkEnterKey(key) {
    if (key === "Enter") onSend();
  }
  return (
    <section className="flex items-center justify-center gap-3 border-4 border-dashed px-2">
      <textarea
        rows={2}
        value={value}
        onKeyUp={(e) => checkEnterKey(e.key)}
        onChange={(e) => onChange(e.target.value)}
        className="flex-2 text-2xl tracking-wide outline-none sm:text-xl"
      ></textarea>
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50%] border border-b-2 hover:cursor-pointer hover:shadow-[4px_1px_0px_0px]">
        <Icon
          onClick={() => onSend()}
          icon="material-symbols-light:send-outline"
          width={30}
          className=""
        />
      </div>
    </section>
  );
}
