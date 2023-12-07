import { Container } from "./style";

import { MagnifyingGlass, X } from "@phosphor-icons/react";

export function Search({ onClick, ...rest }) {
  return (
    <Container>
      <div>
        <MagnifyingGlass size={32} />
      </div>
      <input {...rest} />
      <X onClick={onClick} size={32} />
    </Container>
  );
}
