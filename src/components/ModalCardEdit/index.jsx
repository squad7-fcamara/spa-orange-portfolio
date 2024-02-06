import { useEffect, useRef, useState } from "react";
import FloatInput from "../FloatInput/FloatInput";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../../api/apiRest";

import SecondaryButton from "../SecondaryButton";

import {
  BackgroundFilter,
  ModalContentCardAdd,
  Container,
  Content,
  Title,
  Subtitle,
  TextArea,
  Image,
  ColumnImage,
  ColumnContent,
  ButtonContainer,
  FooterSubtitleContent,
  FooterButtonContent,
} from "./StyledModalCardEdit";
import "./styles.css";

import { MdCollections } from "react-icons/md";
import { base64ToUrl } from "../../utils/createImageUrl";
import ConfirmationButton from "../ConfirmButtons/ConfirmButton";
import ModalVisualProject from "../ModalVisualProject";
import InputTags from "../InputTags/InputTags";
import PrimaryButton2 from "../PrimaryButton/PrimaryButton";

const ModalCardEdit = ({ selectedProject, closed, onClose, fullName }) => {
  // testando UPLOAD IMAGE
  const fileInputRef = useRef(null);
  const [image, setImage] = useState()
  const [statusConfirmation, setStatusConfirmation] = useState(false)
  const [previewData, setPreviewData] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [tags, setTags] = useState('')


  const getTags = (tags) => {
    const formattedTags = `${tags.join(";")}`;
    setTags(formattedTags);
  };

  const handlePreview = () => {
    const formData = getValues();
    setPreviewData(formData);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageBlob(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImageBlob(null);
    }
  };

  // EXTRA - REMOVER IMAGEM
  const handleRemoveImage = () => {
    setImageBlob(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  //fim da area de teste de UPLOAD

  // Confirmação de comunicação com a API
  const userId = "5";
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const notifyAlert = () => {
    toast.error("Erro ao realizar a adição de projeto. Tente novamente", {
      iconTheme: {
        primary: "#fff",
        secondary: "#DD0000",
      },

      style: {
        background: "#DD0000",
        color: "white",
        minWidth: "20rem",
      },
    });
  };

  const [imageBlob, setImageBlob] = useState("");

  useEffect(() => {
    const url = base64ToUrl(
      selectedProject.arquivoImagem.contentType,
      selectedProject.arquivoImagem.fileContents
    );
    setImageBlob(url);
  }, [selectedProject]);

  useEffect(() => {
    if (showModal) {
      handlePreview();
    }
    console.log(tags)
  }, [showModal]);

  const onSubmitProjectToApi = async (data) => {
    try {
      await api.put(
        "projeto",
        {
          IdProjeto: selectedProject.idProjeto,
          IdUsuario: userId,
          Titulo: data?.titulo,
          Imagem: image,
          Tag: tags,
          Link: data?.link,
          Descricao: data?.descricao,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setStatusConfirmation(true);
    } catch (error) {
      notifyAlert(error.status);
    }
  };

  // Fim da confirmação de comunicação com a API

  return (
    <>
      {statusConfirmation ? (
        <ConfirmationButton
          text={"Projeto editado com sucesso!"}
          onClick={onClose}
        />
      ) : (
        <BackgroundFilter className={closed ? "closed" : ""}>
          <ModalContentCardAdd>
            <form
              className="form"
              onSubmit={handleSubmit(onSubmitProjectToApi)}
              method="POST"
            >
              <Container>
                <Title>Editar projeto</Title>

                <ColumnImage>
                  <Subtitle>
                    Selecione o conteúdo que você deseja fazer upload
                  </Subtitle>

                  <Image
                    className={`card-without-add-image ${
                      imageBlob ? "card-with-project" : ""
                    }`}
                    onMouseDown={handleRemoveImage}
                    imageproject={imageBlob}
                  >
                    {imageBlob ? (
                      // COM A IMAGEM
                      <div
                        className="image-container"
                        onClick={handleRemoveImage}
                      >
                        <img src={imageBlob} alt="Imagem Selecionada" />
                      </div>
                    ) : (
                      // SEM A IMAGEM
                      <ButtonContainer onClick={handleClick}>
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />

                        <MdCollections
                          className="icon"
                          size={"54px"}
                          color="#323232"
                        />

                        <p className="text-add">
                          Compartilhe seu talento com milhares de pessoas
                        </p>
                      </ButtonContainer>
                    )}
                  </Image>
                </ColumnImage>

                <ColumnContent>
                  <Content>
                    <Toaster
                      containerClassName="alert"
                      containerStyle={{
                        position: "absolute",
                        marginTop: "2.5rem",
                        marginBottom: "1rem",
                      }}
                    />
                    <FloatInput
                      id_value="input-add-project-input-teste"
                      label={"titulo"}
                      type={"text"}
                      name={"addProjectTitle"}
                      register={register}
                      required={true}
                      classes={errors.title && "required"}
                      value={selectedProject.titulo}
                    />

                    <InputTags values={selectedProject.tag} getTags={getTags} />

                    <FloatInput
                      id_value="input-add-project-input-teste"
                      label={"link"}
                      type={"text"}
                      name={"projectTitle"}
                      register={register}
                      required={true}
                      classes={errors.title && "required"}
                      value={selectedProject.link}
                    />

                    <TextArea className="label">
                      <textarea
                        rows="6"
                        cols="42"
                        defaultValue={selectedProject.descricao}
                        {...register("descricao", { required: true })}
                      />
                      <label>Descrição</label>
                    </TextArea>
                  </Content>
                </ColumnContent>

                <FooterSubtitleContent>
                  {showModal && (
                    <ModalVisualProject
                      goBack={() => setShowModal(false)}
                      preview={previewData}
                      image={imageBlob}
                      tags={tags}
                      fullName={fullName}
                      selectedProject={selectedProject}
                      way={"edit"}
                    />
                  )}

                  <Subtitle onClick={() => setShowModal(true)}>
                    Visualizar publicação
                  </Subtitle>
                </FooterSubtitleContent>
                <FooterButtonContent>
                  <PrimaryButton2 type="submit" text={"SALVAR"} />
                  <SecondaryButton onClick={onClose} text={"CANCELAR"} />
                </FooterButtonContent>
              </Container>
            </form>
          </ModalContentCardAdd>
        </BackgroundFilter>
      )}
    </>
  );
};

export default ModalCardEdit;
