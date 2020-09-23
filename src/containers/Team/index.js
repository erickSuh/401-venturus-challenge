/* eslint-disable eqeqeq */
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { debounce } from "lodash";

import Header from "components/Header";
import BaseLayout from "components/BaseLayout";
import BaseColumn from "components/BaseColumn";
import Panel from "components/Panel";
import Placeholder from "components/Placeholder";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Button from "components/Button";
import ListRadio from "components/ListRadio";
import CustomTag from "components/CustomTag";

import {
  actionUserAddTeam,
  actionUserEditTeam,
  actionSearchPlayer,
} from "store/actions";
import { websiteValidator } from "utils/string";

import { Container, SubHeader } from "./styles";

function Team() {
  const { t } = useTranslation("team");
  const { user, search } = useSelector((store) => store);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [isValidWebsite, setIsValidWebsite] = useState(true);
  const [type, setType] = useState();
  const [isValidType, setIsValidType] = useState(true);
  const [tags, setTags] = useState([]);
  const [searchName, setSearchName] = useState("");
  console.log(search);

  const checkNameValid = (st, teamsList) =>
    st.length > 0 &&
    !teamsList.find((team) => team.name === st && team.id != id);

  const checkAllFieldsValid = () =>
    checkNameValid(name, user.teams) && websiteValidator(website);

  const debounceNameCheckIsValid = useCallback(
    debounce(async (st, teamsList) => {
      console.log("checando");
      setIsValidName(checkNameValid(st, teamsList));
    }, 1000),
    []
  );

  const debounceWebsiteCheckIsValid = useCallback(
    debounce(async (st) => {
      if (st.length === 0) {
        setIsValidWebsite(true);
      }
      setIsValidWebsite(websiteValidator(st));
    }, 1000),
    []
  );

  const debounceSearchPlayer = useCallback(
    debounce(async (st) => {
      dispatch(actionSearchPlayer(st));
    }, 1000),
    []
  );

  const handleChangeName = (e) => {
    setName(e.target.value);
    debounceNameCheckIsValid(e.target.value, user.teams);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeWebsite = (e) => {
    const string = e.target.value.replaceAll(" ", "");
    setWebsite(string);
    debounceWebsiteCheckIsValid(e.target.value);
  };

  const handleOnChangeType = (e) => {
    if (!isValidType) setIsValidType(true);
    setType(e.target.value);
  };

  const handleOnChangeTags = (e) => {
    e.persist();
    setTags(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!checkAllFieldsValid()) {
      setIsValidName(checkNameValid(name, user.teams));
      setIsValidWebsite(websiteValidator(website));
      setIsValidType(!!type);
      return;
    }
    try {
      if (id) {
        dispatch(
          actionUserEditTeam({
            id: Number.parseInt(id, 10),
            name,
            description,
            website,
            tags,
            type,
          })
        );
      } else {
        dispatch(
          actionUserAddTeam({
            name,
            description,
            website,
            type,
            tags: JSON.parse(tags).map((tag) => tag.value),
          })
        );
      }
      history.push("/my-account");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChangeSearch = (e) => {
    setSearchName(e.target.value);
    debounceSearchPlayer(e.target.value);
  };

  const listRadio = useMemo(
    () => [
      {
        id: "rad_real",
        key: "rad_real",
        name: "team_type",
        value: "real",
        label: "Real",
      },
      {
        id: "rad_fantasy",
        key: "rad_fantasy",
        name: "team_fantasy",
        value: "fantasy",
        label: "Fantasy",
      },
    ],
    []
  );

  useEffect(() => {
    if (id) {
      // TODO call api
      const findTeam = user.teams.find((team) => team.id == id);

      setName(findTeam.name);
      setDescription(findTeam.description);
      setWebsite(findTeam.website);
      setType(findTeam.type);
      setTags(findTeam.tags);
    }
  }, [id, user.teams]);

  return (
    <>
      <Header />
      <BaseLayout className="fadeUp">
        <Panel header={t("create_your_team")}>
          <SubHeader>{t("team_information")}</SubHeader>
          <Container>
            <BaseColumn>
              <Input
                id="inp_team_name"
                type="text"
                label={t("team_name")}
                placeholder={t("insert_team_name")}
                maxLength={50}
                value={name}
                onChange={handleChangeName}
                invalid={!isValidName}
              />
              <TextArea
                id="inp_team_description"
                value={description}
                onChange={handleChangeDescription}
                type="text"
                label={t("team_description")}
                resizable={false}
                maxLength={400}
              />
            </BaseColumn>
            <BaseColumn>
              <Input
                id="inp_team_website"
                placeholder={t("team_website_placeholder")}
                value={website}
                onChange={handleChangeWebsite}
                type="url"
                label={t("team_website")}
                invalid={!isValidWebsite}
              />
              <ListRadio
                list={listRadio}
                value={type}
                invalid={!isValidType}
                header={t("team_type")}
                onChange={handleOnChangeType}
              />
              <CustomTag
                header={t("tags")}
                onChange={handleOnChangeTags}
                tags={tags}
              />
            </BaseColumn>
          </Container>

          <SubHeader>{t("configure_squad")}</SubHeader>
          <Container>
            <BaseColumn>
              <Placeholder height="350px" />
            </BaseColumn>
            <BaseColumn>
              <Input
                id="inp_search_player"
                placeholder=""
                value={searchName}
                onChange={handleChangeSearch}
                type="text"
                label={t("search_player")}
              />
            </BaseColumn>
          </Container>

          <Container>
            <BaseColumn>
              <Button
                onClick={handleSave}
                label="Save"
                style={{ width: "100%" }}
              />
            </BaseColumn>
            <BaseColumn />
          </Container>
        </Panel>
      </BaseLayout>
    </>
  );
}

export default Team;
