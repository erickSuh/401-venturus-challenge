import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Icon, IconContainer } from "./styles";

function Header() {
  const { t } = useTranslation("common");
  return (
    <Container>
      <IconContainer href="/">
        <Icon alt="icon" />
        {t("title")}
      </IconContainer>
    </Container>
  );
}

export default Header;
