import React, { ComponentProps } from "react";
import NextLink from "next/link";

const Link = ({ href, children, ...others }: ComponentProps<"a">) => (
  <NextLink href={href ?? ""}>
    <a {...others}>{children}</a>
  </NextLink>
);

export default Link;
