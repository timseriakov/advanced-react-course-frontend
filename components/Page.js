import { arrayOf, node, oneOf } from 'prop-types';

export default function Page({ children }) {
  return <div>{children}</div>;
}

Page.propTypes = {
  children: oneOf([arrayOf(node), node]),
};
