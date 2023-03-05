import Text from "@/components/core/Text.component";
import React from "react";

interface SidebarLinkGroupProps {
  title?: string;
  children?: React.ReactNode;
}

const SidebarLinkGroup = ({ children, title }: SidebarLinkGroupProps) => {
  return (
    <div className="border-t border-neutral-200 pt-8">
      {title && (
        <Text as="p" className="px-2 mb-2 !text-sm text-neutral-600">
          {title}
        </Text>
      )}
      <ul className="flex flex-col gap-y-2">{children}</ul>
    </div>
  );
};

export default SidebarLinkGroup;
