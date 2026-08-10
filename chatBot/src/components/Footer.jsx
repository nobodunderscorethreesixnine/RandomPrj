import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-10 p-4 text-2xl">
      <a href="https://github.com/nobodunderscorethreesixnine/RandomPrj/tree/main/chatBot">
        <div className="flex w-3xs items-center justify-between border border-4 bg-[#7FBC8C] p-2">
          Github
          <Icon icon="devicon:github" />
        </div>
      </a>
    </footer>
  );
}
