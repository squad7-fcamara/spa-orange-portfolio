import { useRef, useState } from 'react'
import FloatInput from "../FloatInput/FloatInput";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../../api/apiRest";

import PrimaryButton from "../PrimaryButton"
import SecondaryButton from "../SecondaryButton"

import {
  BackgroundFilter, ModalContentCardAdd, Container, Content, Title, Subtitle, TextArea, Image, ColumnImage, ColumnContent, ButtonContainer, FooterSubtitleContent,
  FooterButtonContent
} from "./StyledModalCardAdd"
import "./styles.css"


import { MdCollections } from "react-icons/md";
import ConfirmationButton from '../ConfirmButtons/ConfirmButton';

const ModalCardAdd = ( {closeModal} ) => {

  // testando UPLOAD IMAGE
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [image, setImage] = useState()
  const [statusConfirmation, setStatusConfirmation] = useState(false)



  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile)

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImageSrc(null);
    }
  };

  // EXTRA - REMOVER IMAGEM
  const handleRemoveImage = () => {
    
    setImageSrc(null);
    
    if (fileInputRef.current) {

      fileInputRef.current.value = '';

    }
  };

  //fim da area de teste de UPLOAD

  // Confirmação de comunicação com a API
  const userId = '4';
  const { register, handleSubmit, formState: { errors } } = useForm();

  const notifyAlert = () => {

    toast.error('Erro ao realizar a adição de projeto. Tente novamente', {

      iconTheme: {
        primary: '#fff',
        secondary: '#DD0000',
      },

      style: {
        background: "#DD0000",
        color: "white",
        minWidth: "20rem",
      }

    }

    )


  }


  const onSubmitProjectToApi = async (data) => {
    
    try {

      const response = await api.post('projeto', {
        IdUsuario: userId,
        Titulo: data?.titulo,
        Imagem: image,
        Tag: data?.tag,
        Link: data?.link,
        Descricao: data?.descricao
      } , {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      notifyAlert(response.status);
      setStatusConfirmation(true)

    } catch (error) {
      notifyAlert();
    }
  };

  // Fim da confirmação de comunicação com a API


  return (
    <>
    {
      statusConfirmation ? <ConfirmationButton onClick={ closeModal } />:

      (

      <BackgroundFilter>
        <ModalContentCardAdd>
          <form className="form" onSubmit={handleSubmit(onSubmitProjectToApi)} method="POST" >
            <Container>
              <Title>Adicionar Projeto</Title>

              <ColumnImage>
                <Subtitle>Selecione o conteúdo que você deseja fazer upload</Subtitle>

                <Image
                  className={`card-without-add-image ${imageSrc ? 'card-with-project' : ''}`}
                  onMouseDown={handleRemoveImage}
                  imageproject={imageSrc}
                >

                  {imageSrc ? (

                    // COM A IMAGEM
                    <div className="image-container" onClick={handleRemoveImage}>
                      <img src={imageSrc} alt="Imagem Selecionada" />

                    </div>

                  ) : (
                    
                    // SEM A IMAGEM
                    <ButtonContainer onClick={handleClick}>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        
                      />

                      <MdCollections className="icon" size={"54px"} color="#323232" />

                      <p className="text-add">Compartilhe seu talento com milhares de pessoas</p>
                    </ButtonContainer>
                  )}

                </Image>

              </ColumnImage>

              <ColumnContent>
                <Content>

                  <Toaster
                    containerClassName="alert"
                    containerStyle={{
                      position: 'absolute',
                      marginTop: '2.5rem',
                      marginBottom: '1rem',
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
                    
                  />
                  <FloatInput
                    id_value="input-add-project-input-teste"
                    label={"tag"}
                    type={"text"}
                    name={"addProjectTitle"}
                    register={register}
                    required={true}
                    classes={errors.title && "required"}
                  />
                  <FloatInput id_value="input-add-project-input-teste"
                    label={"link"}
                    type={"text"}
                    name={"projectTitle"}
                    register={register}
                    required={true}
                    classes={errors.title && "required"}
                  />

                  <TextArea className="label">
                    <textarea rows="6" cols="42" {...register('descricao', { required: true })} />
                    <label >Descrição</label>
                  </TextArea >

                </Content>
              </ColumnContent>

              <FooterSubtitleContent>

                <Subtitle>Visualizar publicação</Subtitle>
              </FooterSubtitleContent>
              <FooterButtonContent>

                <PrimaryButton type="submit" text={"SALVAR"} />
                <SecondaryButton onClick={ closeModal } text={"CANCELAR"} />
              </FooterButtonContent>
            </Container>
          </form>
        </ModalContentCardAdd>
      </BackgroundFilter>
      )
    }
    </>
  )
}

export default ModalCardAdd