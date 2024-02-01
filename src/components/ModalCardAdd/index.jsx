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

const ModalCardAdd = () => {

  // testando UPLOAD IMAGE
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);


  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
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

  const notifyAlert = (status) => {

    if (status == 200) {
      toast.success('Projeto adicionado com sucesso!', {

        duration: Infinity,

        iconTheme: {
          primary: '#fff',
          secondary: '#2E7D32',
        },

        style: {
          background: "#2E7D32",
          color: "white",
          minWidth: "20rem",
        }
      }
      )
      return
    }

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
    console.log(data)
    console.log(data.imagem[0].name, data.imagem[0].type)
    try {
      // const formData = new FormData();
      // formData.append('IdUsuario', userId);
      // formData.append('Titulo', data.titulo);
      // formData.append('Tag', data.tag);
      // formData.append('Link', data.link);
      // formData.append('Descricao', data.descricao);

      // console.log(formData)

      // if (data.imagem[0]) {
      //   formData.append('Imagem', data.imagem[0]);
      // }

    //   "idProjeto": 3,
    // "idUsuario": 4,
    // "titulo": "Hackathon Squad 7",
    // "imagem": "caminho-imagem",
    // "tag": "tag",
    // "link": "www.github.com/joaooliveira/Squad7",
    // "descricao": "Projeto desenvolvido no Hackathon pelo Squad 7",
    // "dataCriacao": "01/29/2024 19:44:31",
    // "nomeCompleto": "João Oliveira"

    // console.log(imageSrc)

    // console.log({})

    console.log({
        IdProjeto: '',
        IdUsuario: userId,
        Titulo: data?.titulo,
        Imagem: `@${data.imagem[0].name};type=${data.imagem[0].type}`,
        // Imagem: `${imageSrc}`,
        Tag: data?.tag,
        Link: data?.link,
        Descricao: data?.descricao
    })

      const response = await api.post('projeto', {
        IdProjeto: '',
        IdUsuario: userId,
        Titulo: data?.titulo,
        Imagem: `@${data.imagem[0].name};type=${data.imagem[0].type}`,
        // Imagem: `${imageSrc}`,
        Tag: data?.tag,
        Link: data?.link,
        Descricao: data?.descricao
      });
      notifyAlert(response.status);
      console.log('Resposta da API:', response.data);
    } catch (error) {
      notifyAlert(error.status);
      console.log(error);
    }
  };

  // Fim da confirmação de comunicação com a API


  return (
    <>
      <BackgroundFilter>
        <ModalContentCardAdd>
          <form className="form" onSubmit={handleSubmit(onSubmitProjectToApi)} method="POST" >
            <Container>
              <Title>Adicionar Projeto</Title>

              <input value={userId} {...register('idUsuario')} ></input>
              <input type='file' id="picture" {...register('imagem')} ></input>

              <ColumnImage>
                <Subtitle>Selecione o conteúdo que você deseja fazer upload</Subtitle>

                <Image
                  className={`card-without-add-image ${imageSrc ? 'card-with-project' : ''}`}
                  onMouseDown={handleRemoveImage}
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

                <PrimaryButton type="submit" text={"ENTRAR"} />
                <SecondaryButton text={"CANCELAR"} />
              </FooterButtonContent>
            </Container>
          </form>
        </ModalContentCardAdd>
      </BackgroundFilter>
    </>
  )
}

export default ModalCardAdd