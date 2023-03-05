/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React from "react";
import Button from "../core/Button.component";

interface SocialConnectProps {
  social: "Google" | "GitHub";
}

type FullSocialConnectProps = SocialConnectProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const SocialConnect = ({
  social,
  className,
  color: _,
  ...props
}: FullSocialConnectProps) => {
  const ButtonClass = classNames(
    "text-gray-600 border border-gray-200 flex items-center justify-center gap-x-2",
    className
  );

  return (
    <Button color="none" className={ButtonClass} {...props}>
      <span>
        <img
          src={`/assets/social/${social.toLowerCase()}.png`}
          alt={social}
          className="!w-6 !h-6"
        />
      </span>
      <span className="!font-bold">Autentifica-te cu {social}</span>
    </Button>
  );
};

export default SocialConnect;
