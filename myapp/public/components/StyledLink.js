// components/StyledLink.js
import Link from 'next/link';

const StyledLink = ({ href, children }) => (
  <Link href={href} className="hover:underline">{children}</Link>
);

export default StyledLink;
