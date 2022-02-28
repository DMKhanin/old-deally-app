import Router from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const handleAuthSSR = async (ctx, token) => {

  // // if (!tokeb) {
  // //   if (!lsToken) {
  // //     ctx.res.writeHead(302, {
  // //       Location: '/dashboard/login'
  // //     })
  // //     ctx.res.end()
  // //   }
  // }

  if (typeof window !== 'undefined') {
    // alert(token);
    if (!token) {
      Router.push('/dashboard/logout')
    }

    const response = await fetch(process.env.API_URL + "/passport/check", { headers: { 'x-access-token': token } });
    const data = await response.json();

    if (data.user) {
      return data.user;
    } else {
      Router.push('/dashboard/logout')
    }
  }

  // try {
  //   const response = await fetch(process.env.API_URL + "/pasport/check", { headers: { 'x-access-token': token } });
  //   const data = await response.json();
  //   // console.log(data);
  //   if (data.user) {
  //     return data.user;
  //   } else {
  //     Router.push('/dashboard/login')
  //   }
  // } catch (err) {
  //   if (ctx.res) {
  //     ctx.res.writeHead(302, {
  //       Location: '/dashboard/login'
  //     })
  //     ctx.res.end()
  //   } else {
  //     Router.push('/dashboard/login')
  //   }
  // }
}

export default handleAuthSSR;