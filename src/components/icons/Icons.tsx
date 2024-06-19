import { LucideProps } from "lucide-react";

export const Icons = {
  logo: (props: LudideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#022C2290"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-folder-open-dot "
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  ),
};
