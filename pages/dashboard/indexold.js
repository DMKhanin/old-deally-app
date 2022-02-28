import handleAuthSSR from "../../helpers/handleAuthSSR";
import Head from 'next/head'
import { Cookies } from 'react-cookie';
import { createShop, deleteShop, getShops } from "../../api/DashboardAPI";
import ButtonSmall from "../../components/ButtonSmall";
import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ShopCard from '../../components/ShopCard';
import Modal from 'react-modal';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Router, { useRouter } from "next/router";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import EmptyCardVertical from "../../components/EmptyCardVertical";
import Loader from "../../components/Loader";
import EmptyCardHorizontal from "../../components/EmptyCardHorizontal";
import { wrapper } from "../../store";

const Index = ({ user }) => {
  const [shops, setShops] = useState([]);
  const [shopsLoaded, setShopsLoaded] = useState(false);
  const router = useRouter();
  const [createShopModalOpened, setCreateShopModalOpened] = useState(false);
  const [formLoadingState, setFormLoadingState] = useState(false);
  const [shopName, setShopName] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const shopFormRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getShops();
      setShops(data.list);
      setShopsLoaded(true);
    }

    fetchData();
  }, [])

  const _openModal = () => {
    setCreateShopModalOpened(true);
  }

  const _closeModal = () => {
    setCreateShopModalOpened(false);
  }



  const transliterate = (word) => {
    var answer = ""
      , a = {};

    a["Ё"] = "YO"; a["Й"] = "I"; a["Ц"] = "TS"; a["У"] = "U"; a["К"] = "K"; a["Е"] = "E"; a["Н"] = "N"; a["Г"] = "G"; a["Ш"] = "SH"; a["Щ"] = "SCH"; a["З"] = "Z"; a["Х"] = "H"; a["Ъ"] = "'";
    a["ё"] = "yo"; a["й"] = "i"; a["ц"] = "ts"; a["у"] = "u"; a["к"] = "k"; a["е"] = "e"; a["н"] = "n"; a["г"] = "g"; a["ш"] = "sh"; a["щ"] = "sch"; a["з"] = "z"; a["х"] = "h"; a["ъ"] = "'";
    a["Ф"] = "F"; a["Ы"] = "I"; a["В"] = "V"; a["А"] = "a"; a["П"] = "P"; a["Р"] = "R"; a["О"] = "O"; a["Л"] = "L"; a["Д"] = "D"; a["Ж"] = "ZH"; a["Э"] = "E";
    a["ф"] = "f"; a["ы"] = "i"; a["в"] = "v"; a["а"] = "a"; a["п"] = "p"; a["р"] = "r"; a["о"] = "o"; a["л"] = "l"; a["д"] = "d"; a["ж"] = "zh"; a["э"] = "e";
    a["Я"] = "Ya"; a["Ч"] = "CH"; a["С"] = "S"; a["М"] = "M"; a["И"] = "I"; a["Т"] = "T"; a["Ь"] = "'"; a["Б"] = "B"; a["Ю"] = "YU";
    a["я"] = "ya"; a["ч"] = "ch"; a["с"] = "s"; a["м"] = "m"; a["и"] = "i"; a["т"] = "t"; a["ь"] = "'"; a["б"] = "b"; a["ю"] = "yu";

    for (let i in word) {
      if (word.hasOwnProperty(i)) {
        if (a[word[i]] === undefined) {
          answer += word[i];
        } else {
          answer += a[word[i]];
        }
      }
    }
    return answer;
  }

  useEffect(() => {
    if (shopsLoaded === true && shops?.length <= 0) {
      router.push('/dashboard/create');
    }
  }, [shopsLoaded, shops]);

  const _onSubmitShopForm = async () => {
    setFormLoadingState(true);
    const formData = new FormData(shopFormRef.current);
    const { name, slug } = Object.fromEntries(formData);
    const { data } = await createShop({ name, slug });
    setFormLoadingState(false);
    router.push('/dashboard/shop/' + data.shop._id);
  }

  const _onDeleteShop = async (shopId) => {
    setShopsLoaded(false);
    await deleteShop({ shopId });
    const { data } = await getShops();
    setShopsLoaded(true);
    setShops(data.list);
  }

  return (
    <>
      <Head>
        <title>Deally | Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="pt-5 mt-5">
        <Container>
          <Row>
            <Col><h1>Shops</h1></Col>
            {shops?.length > 0 &&
              <Col Col className="d-flex justify-content-end">
                <ButtonSmall onClick={() => _openModal()}>Create new</ButtonSmall>
              </Col>
            }
          </Row>
          <Row className="mt-5">
            {shops?.length <= 0 && !shopsLoaded &&
              <Loader />
            }
            {shops?.length <= 0 && shopsLoaded &&
              <EmptyCardVertical
                imgSrc="/images/dashboard/shops-empty.png"
                buttonText="Create new"
                onClickButton={() => _openModal()}
              >
                You don't seem to have any shops yet...<br></br>Create and start earning now!
              </EmptyCardVertical>
            }
            {shops.map((shop) =>
              <Col xs={3} key={shop._id}>
                <div className="mb-4">
                  <ShopCard
                    onClick={(_id) => { router.push(`/dashboard/shop/${_id}`) }}
                    onDelete={(_id) => { _onDeleteShop(_id) }}
                    {...shop} />
                </div>
              </Col>
            )}
          </Row>
        </Container>
        <Modal
          closeTimeoutMS={500}
          isOpen={createShopModalOpened}
          onRequestClose={() => _closeModal()}
          style={{ content: { width: '440px', height: '452px', left: '50%', top: '200px', transform: 'translateX(-50%)' } }}
          contentLabel="Example Modal"
        >
          <>
            <h2 style={{ fontSize: '28px' }}>New shop</h2>
            <form ref={shopFormRef} onSubmit={handleSubmit(_onSubmitShopForm)}>
              <div className="pt-5">
                <Input
                  type="text"
                  status="default"
                  label="Shop name"
                  name="name"
                  validators={{
                    required: 'Name cannot be empty',
                    minLength: {
                      value: 3,
                      message: 'Min length 3 symbols'
                    },
                    maxLength: {
                      value: 255,
                      message: 'Max length 255 symbols'
                    }
                  }}
                  register={register}
                  state={errors.name ? 'error' : null}
                  errorMessageComponent={<ErrorMessage errors={errors} name="name" />}
                  onChange={(e) => { setShopName(e.target.value) }} />
              </div>
              <div className="pt-4">
                <Input
                  type="text"
                  status="default"
                  label="Shop slug"
                  name="slug"
                  validators={{
                    required: 'Slug cannot be empty',
                    minLength: {
                      value: 3,
                      message: 'Min length 3 symbols'
                    },
                    maxLength: {
                      value: 255,
                      message: 'Max length 80 symbols'
                    },
                  }}
                  register={register}
                  state={errors.slug ? 'error' : null}
                  defaultValue={transliterate(shopName)}
                  errorMessageComponent={<ErrorMessage errors={errors} name="slug" />}
                  onChange={() => { }} />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  style="primary"
                  onClick={() => { }}
                  state={formLoadingState ? 'loading' : false}>
                  Create shop
                </Button>
              </div>
            </form>
          </>
        </Modal>
      </div>
    </>
  )
};


Index.getInitialProps = wrapper.getInitialPageProps(store => async (ctx) => {
  // console.log('store.getState().user');
  // console.log(store.getState().user);
  // console.log('store.getState().user');
  
  // Router.push('/dashboard/create');
  // if (!ctx.req) {
  //   console.log('CLIENT');
  //   const userToken = store.getState().user?.token;
  //   if (userToken) {
  //     const user = await handleAuthSSR(ctx, userToken);
  //     return { user }
  //   }
  //   Router.push('/dashboard/login')
  // }

  // Router.push('/dashboard/login')
});

export default Index;