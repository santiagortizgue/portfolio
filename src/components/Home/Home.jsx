import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Fade from 'react-reveal/Fade';

import './Home.scss';
import Store from '../../utils/stores/Stores';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import NavigationButton from 'components/NavigationButton/NavigationButton';

const Home = () => {
  const stores = useContext(Store);
  const [recent_index, setRecentIndex] = useState(calcIndex());

  //if the second value of useEffect is empty array [], the behavior its the same as componentDidMount
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('resize', updateWidth);
    }
  }, []);

  function updateWidth() {
    setRecentIndex(calcIndex());
  };

  function calcIndex() {
    let v = 0;
    if(window.innerWidth >= 1440){
      v = 3;
    }else{
      v = 2;
    }

    return v;
  }

  stores.uiStore.actualLink = 0;

  return (
    <div className="Home">

      <div className="Home-top">
        <Fade top timeout={1000}>
          <div style={{ backgroundImage: "url('./img/home_photo.jpg')" }} className="Home-img">
          <svg viewBox="0 0 14 236">
                <path d="M9.34 46.4668C9.33333 46.3135 9.31333 46.1868 9.28 46.0868C9.24667 45.9801 9.17 45.9001 9.05 45.8468C8.93 45.7868 8.73667 45.7568 8.47 45.7568L4.64 45.7568C4.46 45.7568 4.28667 45.7535 4.12 45.7468C3.95333 45.7335 3.82667 45.7235 3.74 45.7168C3.74667 45.8235 3.75333 45.9568 3.76 46.1168C3.76 46.2768 3.76333 46.3935 3.77 46.4668L3 46.4668L2.99 43.5568C2.99 42.8968 3.09 42.3268 3.29 41.8468C3.48333 41.3601 3.74667 40.9635 4.08 40.6568C4.41333 40.3435 4.78667 40.1101 5.2 39.9568C5.60667 39.8035 6.01667 39.7268 6.43 39.7268C6.83667 39.7268 7.25 39.8001 7.67 39.9468C8.09 40.0868 8.47667 40.3101 8.83 40.6168C9.17667 40.9235 9.46 41.3235 9.68 41.8168C9.89333 42.3101 10 42.9068 10 43.6068L10 46.4668L9.34 46.4668ZM8.36 44.3068C8.54 44.3068 8.71333 44.3101 8.88 44.3168C9.04667 44.3235 9.17333 44.3335 9.26 44.3468C9.25333 44.2801 9.25333 44.1901 9.26 44.0768C9.26 43.9568 9.26333 43.8335 9.27 43.7068C9.27 43.5801 9.27 43.4768 9.27 43.3968C9.27 43.0301 9.19667 42.7168 9.05 42.4568C8.90333 42.1901 8.70667 41.9735 8.46 41.8068C8.20667 41.6335 7.92333 41.5068 7.61 41.4268C7.29667 41.3468 6.97333 41.3068 6.64 41.3068C5.62 41.3068 4.87333 41.5135 4.4 41.9268C3.92667 42.3335 3.68 42.8835 3.66 43.5768C3.65333 43.7368 3.67 43.8735 3.71 43.9868C3.74333 44.0935 3.82 44.1735 3.94 44.2268C4.06 44.2801 4.25 44.3068 4.51 44.3068L8.36 44.3068ZM7.59 35.6156C7.31 35.6156 7.11 35.659 6.99 35.7456C6.86333 35.8323 6.78333 35.9523 6.75 36.1056C6.71667 36.2523 6.70333 36.4156 6.71 36.5956L6.72 36.8556L8.36 36.8556C8.54 36.8556 8.71 36.859 8.87 36.8656C9.03 36.8723 9.15333 36.8823 9.24 36.8956L9.24 35.5556C9.24 35.3556 9.19667 35.1623 9.11 34.9756C9.01667 34.789 8.86667 34.6356 8.66 34.5156C8.44667 34.3956 8.16 34.3356 7.8 34.3356L7.8 33.6856L10 33.7356L10 39.0156L9.34 39.0156C9.33333 38.8623 9.31333 38.7356 9.28 38.6356C9.24667 38.529 9.17 38.449 9.05 38.3956C8.93 38.3356 8.73667 38.3056 8.47 38.3056L4.64 38.3056C4.46 38.3056 4.28667 38.3023 4.12 38.2956C3.95333 38.2823 3.82667 38.2723 3.74 38.2656C3.74667 38.3723 3.75333 38.5056 3.76 38.6656C3.76 38.8256 3.76333 38.9423 3.77 39.0156L3 39.0156L3 34.0156L4.94 33.9556L4.94 34.6156C4.57333 34.6156 4.29667 34.679 4.11 34.8056C3.92333 34.9323 3.8 35.089 3.74 35.2756C3.67333 35.4623 3.64333 35.6456 3.65 35.8256L3.66 36.1856C3.66 36.3256 3.68 36.4456 3.72 36.5456C3.75333 36.6456 3.83333 36.7223 3.96 36.7756C4.08 36.829 4.27 36.8556 4.53 36.8556L6.03 36.8556L6.03 35.6856L5.16 35.7256L5.16 34.9556L7.59 34.9556L7.59 35.6156ZM10.06 30.1437L4.69 32.4437C4.52333 32.5104 4.35 32.5737 4.17 32.6337C3.99 32.6937 3.84667 32.7237 3.74 32.7237C3.74667 32.9437 3.75667 33.1237 3.77 33.2637L3 33.2637L3 30.3137L3.66 30.3137C3.65333 30.5604 3.70667 30.7504 3.82 30.8837C3.93333 31.0104 4.13667 31.0137 4.43 30.8937C4.80333 30.7404 5.18 30.5871 5.56 30.4337C5.94 30.2804 6.31667 30.1271 6.69 29.9737C6.97 29.8604 7.21667 29.7637 7.43 29.6837C7.63667 29.6037 7.86667 29.5104 8.12 29.4037L8.12 29.3937C7.92 29.3204 7.69667 29.2437 7.45 29.1637C7.20333 29.0771 6.96667 28.9937 6.74 28.9137C6.38667 28.7871 6.03667 28.6604 5.69 28.5337C5.34333 28.4071 4.99667 28.2804 4.65 28.1537C4.53667 28.1204 4.38333 28.0671 4.19 27.9937C3.99667 27.9137 3.84667 27.8304 3.74 27.7437C3.74667 27.8504 3.75333 27.9871 3.76 28.1537C3.76 28.3204 3.76333 28.4404 3.77 28.5137L3 28.5137L3 26.2637L3.66 26.2637C3.66667 26.4904 3.75 26.6871 3.91 26.8537C4.07 27.0204 4.34333 27.1771 4.73 27.3237C5.61667 27.6571 6.50333 27.9904 7.39 28.3237C8.27667 28.6571 9.16667 28.9904 10.06 29.3237L10.06 30.1437ZM7.59 22.3637C7.31 22.3637 7.11 22.407 6.99 22.4937C6.86333 22.5803 6.78333 22.7003 6.75 22.8537C6.71667 23.0003 6.70333 23.1637 6.71 23.3437L6.72 23.6037L8.36 23.6037C8.54 23.6037 8.71 23.607 8.87 23.6137C9.03 23.6203 9.15333 23.6303 9.24 23.6437L9.24 22.3037C9.24 22.1037 9.19667 21.9103 9.11 21.7237C9.01667 21.537 8.86667 21.3837 8.66 21.2637C8.44667 21.1437 8.16 21.0837 7.8 21.0837L7.8 20.4337L10 20.4837L10 25.7637L9.34 25.7637C9.33333 25.6103 9.31333 25.4837 9.28 25.3837C9.24667 25.277 9.17 25.197 9.05 25.1437C8.93 25.0837 8.73667 25.0537 8.47 25.0537L4.64 25.0537C4.46 25.0537 4.28667 25.0503 4.12 25.0437C3.95333 25.0303 3.82667 25.0203 3.74 25.0137C3.74667 25.1203 3.75333 25.2537 3.76 25.4137C3.76 25.5737 3.76333 25.6903 3.77 25.7637L3 25.7637L3 20.7637L4.94 20.7037L4.94 21.3637C4.57333 21.3637 4.29667 21.427 4.11 21.5537C3.92333 21.6803 3.8 21.837 3.74 22.0237C3.67333 22.2103 3.64333 22.3937 3.65 22.5737L3.66 22.9337C3.66 23.0737 3.68 23.1937 3.72 23.2937C3.75333 23.3937 3.83333 23.4703 3.96 23.5237C4.08 23.577 4.27 23.6037 4.53 23.6037L6.03 23.6037L6.03 22.4337L5.16 22.4737L5.16 21.7037L7.59 21.7037L7.59 22.3637ZM10 19.5234L9.34 19.5234C9.33333 19.3701 9.31333 19.2434 9.28 19.1434C9.24667 19.0368 9.17 18.9568 9.05 18.9034C8.93 18.8434 8.73667 18.8134 8.47 18.8134L4.64 18.8134C4.46 18.8134 4.28667 18.8101 4.12 18.8034C3.95333 18.7901 3.82667 18.7801 3.74 18.7734C3.74667 18.8801 3.75333 19.0134 3.76 19.1734C3.76 19.3334 3.76333 19.4501 3.77 19.5234L3 19.5234L3 16.6534L3.66 16.6534C3.66667 16.8001 3.68667 16.9268 3.72 17.0334C3.75333 17.1401 3.83 17.2234 3.95 17.2834C4.06333 17.3368 4.25667 17.3634 4.53 17.3634L8.36 17.3634C8.54 17.3634 8.71 17.3668 8.87 17.3734C9.03 17.3801 9.15333 17.3901 9.24 17.4034L9.24 16.0634C9.23333 15.6701 9.09667 15.3634 8.83 15.1434C8.55667 14.9168 8.14667 14.8034 7.6 14.8034L7.6 14.1334L10 14.1934L10 19.5234ZM10.16 10.1583C10.16 10.7916 10.0533 11.3316 9.84 11.7783C9.62667 12.2183 9.34333 12.5749 8.99 12.8483C8.63 13.1216 8.23333 13.3216 7.8 13.4483C7.36666 13.5749 6.93333 13.6383 6.5 13.6383C6.08 13.6383 5.65666 13.5683 5.23 13.4283C4.79666 13.2816 4.4 13.0649 4.04 12.7783C3.68 12.4849 3.39 12.1183 3.17 11.6783C2.95 11.2383 2.84 10.7216 2.84 10.1283C2.84 9.52161 2.95 8.99828 3.17 8.55828C3.39 8.11828 3.68333 7.75828 4.05 7.47828C4.41 7.19828 4.80333 6.99161 5.23 6.85828C5.65666 6.71828 6.08 6.64828 6.5 6.64828C6.91333 6.64828 7.33333 6.72161 7.76 6.86828C8.18666 7.00828 8.58333 7.22495 8.95 7.51828C9.31 7.80495 9.60333 8.16828 9.83 8.60828C10.05 9.04828 10.16 9.56495 10.16 10.1583ZM9.43 10.0483C9.43 9.70161 9.34666 9.41161 9.18 9.17828C9.00666 8.94495 8.78333 8.75828 8.51 8.61828C8.23666 8.47828 7.94 8.37828 7.62 8.31828C7.29333 8.25828 6.97666 8.22828 6.67 8.22828C6.05666 8.22828 5.51666 8.30161 5.05 8.44828C4.58333 8.59495 4.21666 8.81828 3.95 9.11828C3.68333 9.41161 3.55666 9.79161 3.57 10.2583C3.57666 10.5983 3.67 10.8849 3.85 11.1183C4.02333 11.3516 4.25 11.5383 4.53 11.6783C4.80333 11.8183 5.10333 11.9183 5.43 11.9783C5.75666 12.0383 6.07333 12.0683 6.38 12.0683C6.69333 12.0683 7.02666 12.0349 7.38 11.9683C7.73333 11.8949 8.06667 11.7816 8.38 11.6283C8.69333 11.4749 8.94667 11.2683 9.14 11.0083C9.33333 10.7483 9.43 10.4283 9.43 10.0483ZM9.34 5.91992C9.33333 5.76659 9.31333 5.63992 9.28 5.53992C9.24666 5.43325 9.17 5.35325 9.05 5.29992C8.93 5.23992 8.73666 5.20992 8.47 5.20992L4.64 5.20992C4.46 5.20992 4.28666 5.20659 4.12 5.19992C3.95333 5.18659 3.82666 5.17659 3.74 5.16992C3.74666 5.27659 3.75333 5.40992 3.76 5.56992C3.76 5.72992 3.76333 5.84659 3.77 5.91992L3 5.91992C2.99333 5.44659 2.99 4.97326 2.99 4.49992C2.99 4.02659 2.98666 3.55325 2.98 3.07992C2.97333 2.49325 3.05 1.98325 3.21 1.54992C3.37 1.10992 3.61666 0.773255 3.95 0.539922C4.28333 0.299922 4.71666 0.186588 5.25 0.199921C5.60333 0.206588 5.94666 0.316588 6.28 0.529921C6.61333 0.736588 6.89 1.04992 7.11 1.46992C7.33 1.88325 7.45 2.40659 7.47 3.03992C7.47666 3.31325 7.47666 3.55325 7.47 3.75992L8.35 3.75992C8.53666 3.75992 8.71333 3.76325 8.88 3.76992C9.04666 3.77659 9.17333 3.78659 9.26 3.79992C9.25333 3.72659 9.25 3.63325 9.25 3.51992C9.24333 3.40659 9.24 3.29659 9.24 3.18992C9.23333 3.07659 9.23 2.99659 9.23 2.94992L10 2.94992L10 5.91992L9.34 5.91992ZM6.72 3.75992C6.74 3.61992 6.75 3.46992 6.75 3.30992C6.75 2.75659 6.61333 2.35992 6.34 2.11992C6.06 1.87325 5.66666 1.74992 5.16 1.74992C4.82666 1.74992 4.56 1.79659 4.36 1.88992C4.16 1.97659 4.01333 2.08992 3.92 2.22992C3.82 2.36992 3.75666 2.51659 3.73 2.66992C3.69666 2.82325 3.68 2.96325 3.68 3.08992C3.68 3.29659 3.72333 3.45992 3.81 3.57992C3.89666 3.69992 4.11666 3.75992 4.47 3.75992L6.72 3.75992Z" fill="#0A0D17"/>
                <path d="M9.34003 135.346C9.33336 135.192 9.31336 135.066 9.28003 134.966C9.2467 134.859 9.17003 134.779 9.05003 134.726C8.93003 134.666 8.7367 134.636 8.47003 134.636L4.64003 134.636C4.46003 134.636 4.2867 134.632 4.12003 134.626C3.95336 134.612 3.8267 134.602 3.74003 134.596C3.7467 134.702 3.75336 134.836 3.76003 134.996C3.76003 135.156 3.76336 135.272 3.77003 135.346L3.00003 135.346L2.99003 132.436C2.99003 131.776 3.09003 131.206 3.29003 130.726C3.48336 130.239 3.7467 129.842 4.08003 129.536C4.41336 129.222 4.7867 128.989 5.20003 128.836C5.6067 128.682 6.0167 128.606 6.43003 128.606C6.8367 128.606 7.25003 128.679 7.67003 128.826C8.09003 128.966 8.4767 129.189 8.83003 129.496C9.1767 129.802 9.46003 130.202 9.68003 130.696C9.89336 131.189 10 131.786 10 132.486L10 135.346L9.34003 135.346ZM8.36003 133.186C8.54003 133.186 8.71336 133.189 8.88003 133.196C9.0467 133.202 9.17336 133.212 9.26003 133.226C9.25336 133.159 9.25336 133.069 9.26003 132.956C9.26003 132.836 9.26336 132.712 9.27003 132.586C9.27003 132.459 9.27003 132.356 9.27003 132.276C9.27003 131.909 9.1967 131.596 9.05003 131.336C8.90336 131.069 8.7067 130.852 8.46003 130.686C8.2067 130.512 7.92336 130.386 7.61003 130.306C7.2967 130.226 6.97336 130.186 6.64003 130.186C5.62003 130.186 4.87336 130.392 4.40003 130.806C3.9267 131.212 3.68003 131.762 3.66003 132.456C3.65336 132.616 3.67003 132.752 3.71003 132.866C3.74336 132.972 3.82003 133.052 3.94003 133.106C4.06003 133.159 4.25003 133.186 4.51003 133.186L8.36003 133.186ZM7.59003 124.495C7.31003 124.495 7.11003 124.538 6.99003 124.625C6.86336 124.711 6.78336 124.831 6.75003 124.985C6.7167 125.131 6.70336 125.295 6.71003 125.475L6.72003 125.735L8.36003 125.735C8.54003 125.735 8.71003 125.738 8.87003 125.745C9.03003 125.751 9.15336 125.761 9.24003 125.775L9.24003 124.435C9.24003 124.235 9.1967 124.041 9.11003 123.855C9.0167 123.668 8.8667 123.515 8.66003 123.395C8.4467 123.275 8.16003 123.215 7.80003 123.215L7.80003 122.565L10 122.615L10 127.895L9.34003 127.895C9.33336 127.741 9.31336 127.615 9.28003 127.515C9.2467 127.408 9.17003 127.328 9.05003 127.275C8.93003 127.215 8.7367 127.185 8.47003 127.185L4.64003 127.185C4.46003 127.185 4.2867 127.181 4.12003 127.175C3.95336 127.161 3.8267 127.151 3.74003 127.145C3.7467 127.251 3.75336 127.385 3.76003 127.545C3.76003 127.705 3.76336 127.821 3.77003 127.895L3.00003 127.895L3.00003 122.895L4.94003 122.835L4.94003 123.495C4.57336 123.495 4.2967 123.558 4.11003 123.685C3.92336 123.811 3.80003 123.968 3.74003 124.155C3.67336 124.341 3.64336 124.525 3.65003 124.705L3.66003 125.065C3.66003 125.205 3.68003 125.325 3.72003 125.425C3.75336 125.525 3.83336 125.601 3.96003 125.655C4.08003 125.708 4.27003 125.735 4.53003 125.735L6.03003 125.735L6.03003 124.565L5.16003 124.605L5.16003 123.835L7.59003 123.835L7.59003 124.495ZM5.24003 117.614C4.6867 117.701 4.2667 117.894 3.98003 118.194C3.69336 118.494 3.55336 118.878 3.56003 119.344C3.56003 119.631 3.64003 119.884 3.80003 120.104C3.96003 120.318 4.1667 120.424 4.42003 120.424C4.7267 120.424 4.98003 120.291 5.18003 120.024C5.38003 119.758 5.59336 119.351 5.82003 118.804C5.92003 118.551 6.0367 118.291 6.17003 118.024C6.30336 117.758 6.46336 117.511 6.65003 117.284C6.83003 117.058 7.04336 116.874 7.29003 116.734C7.53003 116.594 7.81336 116.524 8.14003 116.524C8.53336 116.524 8.88336 116.631 9.19003 116.844C9.4967 117.058 9.7367 117.358 9.91003 117.744C10.0767 118.124 10.16 118.571 10.16 119.084C10.16 119.351 10.1167 119.641 10.03 119.954C9.95003 120.261 9.83003 120.551 9.67003 120.824L10.09 120.794L10.09 121.564L7.75003 121.564L7.75003 120.904C8.31003 120.811 8.73336 120.598 9.02003 120.264C9.30003 119.924 9.44003 119.521 9.44003 119.054C9.44003 118.701 9.3467 118.414 9.16003 118.194C8.97336 117.968 8.75336 117.854 8.50003 117.854C8.2667 117.854 8.07336 117.938 7.92003 118.104C7.7667 118.264 7.6367 118.468 7.53003 118.714C7.42336 118.954 7.32003 119.201 7.22003 119.454C7.0467 119.881 6.85336 120.268 6.64003 120.614C6.42003 120.954 6.16003 121.224 5.86003 121.424C5.55336 121.624 5.18336 121.724 4.75003 121.724C4.54336 121.724 4.33003 121.684 4.11003 121.604C3.88336 121.524 3.6767 121.394 3.49003 121.214C3.2967 121.034 3.14003 120.794 3.02003 120.494C2.90003 120.194 2.84003 119.824 2.84003 119.384C2.84003 119.118 2.88003 118.828 2.96003 118.514C3.04003 118.194 3.16003 117.921 3.32003 117.694L2.91003 117.734L2.91003 116.954L5.24003 116.954L5.24003 117.614ZM3.66003 112.808C3.6667 112.954 3.6867 113.081 3.72003 113.188C3.75336 113.294 3.83003 113.378 3.95003 113.438C4.06336 113.491 4.2567 113.518 4.53003 113.518L8.36003 113.518C8.54003 113.518 8.71336 113.521 8.88003 113.528C9.0467 113.534 9.17336 113.544 9.26003 113.558C9.2467 113.451 9.24003 113.318 9.24003 113.158C9.23336 112.991 9.23003 112.874 9.23003 112.808L10 112.808L10 115.678L9.34003 115.678C9.33336 115.524 9.31336 115.398 9.28003 115.298C9.2467 115.191 9.17003 115.111 9.05003 115.058C8.93003 114.998 8.7367 114.968 8.47003 114.968L4.64003 114.968C4.46003 114.968 4.2867 114.964 4.12003 114.958C3.95336 114.944 3.8267 114.934 3.74003 114.928C3.7467 115.034 3.75336 115.168 3.76003 115.328C3.76003 115.488 3.76336 115.604 3.77003 115.678L3.00003 115.678L3.00003 112.808L3.66003 112.808ZM10.16 108.668C10.16 109.388 10.0034 110.001 9.69003 110.508C9.37003 111.014 8.94003 111.401 8.40003 111.668C7.86003 111.934 7.26003 112.068 6.60003 112.068C6.1467 112.068 5.6967 111.998 5.25003 111.858C4.80336 111.711 4.40003 111.494 4.04003 111.208C3.67336 110.921 3.38336 110.561 3.17003 110.128C2.95003 109.688 2.84003 109.178 2.84003 108.598C2.84003 108.418 2.86003 108.214 2.90003 107.988C2.93336 107.761 2.9867 107.534 3.06003 107.308C3.13336 107.074 3.22336 106.868 3.33003 106.688L2.91003 106.728L2.91003 105.958L5.24003 105.958L5.24003 106.608C4.6867 106.694 4.27003 106.908 3.99003 107.248C3.71003 107.588 3.5667 107.994 3.56003 108.468C3.56003 108.814 3.64003 109.118 3.80003 109.378C3.96003 109.631 4.17336 109.841 4.44003 110.008C4.7067 110.174 5.01003 110.301 5.35003 110.388C5.69003 110.468 6.04003 110.508 6.40003 110.508C6.97336 110.508 7.48336 110.428 7.93003 110.268C8.3767 110.108 8.73003 109.874 8.99003 109.568C9.24336 109.254 9.37003 108.871 9.37003 108.418C9.37003 108.291 9.36003 108.141 9.34003 107.968C9.32003 107.794 9.29003 107.621 9.25003 107.448C9.21003 107.274 9.16003 107.128 9.10003 107.008L8.17003 107.008C7.99003 107.008 7.8167 107.004 7.65003 106.998C7.48336 106.984 7.3567 106.974 7.27003 106.968C7.2767 107.074 7.28336 107.208 7.29003 107.368C7.29003 107.528 7.29336 107.644 7.30003 107.718L6.53003 107.718L6.53003 105.058L7.19003 105.058C7.1967 105.204 7.22003 105.328 7.26003 105.428C7.30003 105.528 7.38003 105.604 7.50003 105.658C7.62003 105.704 7.8067 105.728 8.06003 105.728L9.66003 105.728L9.66003 105.968C9.66003 106.161 9.6867 106.354 9.74003 106.548C9.79336 106.741 9.85336 106.948 9.92003 107.168C9.98003 107.374 10.0334 107.601 10.08 107.848C10.1334 108.094 10.16 108.368 10.16 108.668ZM10.1 99.0687L6.01003 102.269C5.8967 102.355 5.7767 102.445 5.65003 102.539C5.52336 102.632 5.39336 102.725 5.26003 102.819L5.26003 102.829L8.36003 102.809C8.54003 102.809 8.71336 102.812 8.88003 102.819C9.0467 102.825 9.17336 102.835 9.26003 102.849C9.2467 102.742 9.24003 102.609 9.24003 102.449C9.23336 102.282 9.23003 102.165 9.23003 102.099L10 102.099L10 104.379L9.34003 104.379C9.33336 104.225 9.31336 104.099 9.28003 103.999C9.2467 103.892 9.17003 103.812 9.05003 103.759C8.93003 103.699 8.7367 103.669 8.47003 103.669L4.64003 103.689C4.46003 103.689 4.2867 103.685 4.12003 103.679C3.95336 103.672 3.8267 103.662 3.74003 103.649C3.7467 103.755 3.75336 103.892 3.76003 104.059C3.76003 104.219 3.76336 104.335 3.77003 104.409L3.00003 104.409L3.00003 102.839L6.86003 99.7787C7.07336 99.612 7.2567 99.4753 7.41003 99.3687C7.56336 99.2553 7.6967 99.1587 7.81003 99.0787L7.81003 99.0687L4.64003 99.0687C4.46003 99.0687 4.2867 99.0653 4.12003 99.0587C3.95336 99.052 3.8267 99.0453 3.74003 99.0387C3.7467 99.1453 3.75336 99.2787 3.76003 99.4387C3.76003 99.5987 3.76336 99.7153 3.77003 99.7887L3.00003 99.7887L3.00003 97.5087L3.66003 97.5087C3.6667 97.6553 3.6867 97.782 3.72003 97.8887C3.75336 97.9953 3.83003 98.0787 3.95003 98.1387C4.06336 98.192 4.2567 98.2187 4.53003 98.2187L10.1 98.2187L10.1 99.0687Z" fill="#0A0D17"/>
                <path d="M9.34003 235.5C9.33336 235.347 9.31336 235.22 9.28003 235.12C9.2467 235.013 9.17003 234.933 9.05003 234.88C8.93003 234.82 8.7367 234.79 8.47003 234.79L4.64003 234.79C4.46003 234.79 4.2867 234.787 4.12003 234.78C3.95336 234.767 3.8267 234.757 3.74003 234.75C3.7467 234.857 3.75336 234.99 3.76003 235.15C3.76003 235.31 3.76336 235.427 3.77003 235.5L3.00003 235.5C2.99336 235.027 2.99003 234.553 2.99003 234.08C2.99003 233.607 2.9867 233.133 2.98003 232.66C2.97336 232.073 3.05003 231.563 3.21003 231.13C3.37003 230.69 3.6167 230.353 3.95003 230.12C4.28336 229.88 4.7167 229.767 5.25003 229.78C5.60336 229.787 5.9467 229.897 6.28003 230.11C6.61336 230.317 6.89003 230.63 7.11003 231.05C7.33003 231.463 7.45003 231.987 7.47003 232.62C7.4767 232.893 7.4767 233.133 7.47003 233.34L8.35003 233.34C8.5367 233.34 8.71336 233.343 8.88003 233.35C9.0467 233.357 9.17336 233.367 9.26003 233.38C9.25336 233.307 9.25003 233.213 9.25003 233.1C9.24336 232.987 9.24003 232.877 9.24003 232.77C9.23336 232.657 9.23003 232.577 9.23003 232.53L10 232.53L10 235.5L9.34003 235.5ZM6.72003 233.34C6.74003 233.2 6.75003 233.05 6.75003 232.89C6.75003 232.337 6.61336 231.94 6.34003 231.7C6.06003 231.453 5.6667 231.33 5.16003 231.33C4.8267 231.33 4.56003 231.377 4.36003 231.47C4.16003 231.557 4.01336 231.67 3.92003 231.81C3.82003 231.95 3.7567 232.097 3.73003 232.25C3.6967 232.403 3.68003 232.543 3.68003 232.67C3.68003 232.877 3.72336 233.04 3.81003 233.16C3.8967 233.28 4.1167 233.34 4.47003 233.34L6.72003 233.34ZM10 229.172L9.34003 229.172C9.33336 229.019 9.31336 228.892 9.28003 228.792C9.2467 228.685 9.17003 228.605 9.05003 228.552C8.93003 228.492 8.7367 228.462 8.47003 228.462L4.64003 228.462C4.46003 228.462 4.2867 228.459 4.12003 228.452C3.95336 228.439 3.8267 228.429 3.74003 228.422C3.7467 228.529 3.75336 228.662 3.76003 228.822C3.76003 228.982 3.76336 229.099 3.77003 229.172L3.00003 229.172C2.99336 228.699 2.99003 228.225 2.99003 227.752C2.99003 227.279 2.9867 226.805 2.98003 226.332C2.97336 225.745 3.04003 225.235 3.18003 224.802C3.32003 224.369 3.5467 224.035 3.86003 223.802C4.17336 223.569 4.5967 223.459 5.13003 223.472C5.5567 223.485 5.94336 223.635 6.29003 223.922C6.6367 224.209 6.89336 224.645 7.06003 225.232C7.11336 225.105 7.20003 224.982 7.32003 224.862C7.44003 224.735 7.5667 224.629 7.70003 224.542L8.40003 224.072C8.74003 223.852 8.98003 223.669 9.12003 223.522C9.25336 223.369 9.3267 223.179 9.34003 222.952L10 222.952L10 224.602C9.91336 224.722 9.79003 224.842 9.63003 224.962C9.46336 225.075 9.27336 225.199 9.06003 225.332L7.86003 226.072C7.59336 226.239 7.40003 226.379 7.28003 226.492L7.28003 227.012L8.35003 227.012C8.5367 227.012 8.71336 227.015 8.88003 227.022C9.0467 227.029 9.17336 227.039 9.26003 227.052C9.25336 226.979 9.25003 226.885 9.25003 226.772C9.24336 226.659 9.24003 226.549 9.24003 226.442C9.23336 226.329 9.23003 226.249 9.23003 226.202L10 226.202L10 229.172ZM6.56003 226.532C6.56003 225.979 6.4367 225.582 6.19003 225.342C5.9367 225.102 5.5567 224.982 5.05003 224.982C4.73003 224.982 4.48003 225.032 4.30003 225.132C4.11336 225.232 3.9767 225.359 3.89003 225.512C3.7967 225.659 3.74003 225.809 3.72003 225.962C3.69336 226.115 3.68003 226.242 3.68003 226.342C3.68003 226.549 3.72336 226.712 3.81003 226.832C3.8967 226.952 4.1167 227.012 4.47003 227.012L6.52003 227.012C6.5267 226.939 6.5367 226.862 6.55003 226.782C6.5567 226.702 6.56003 226.619 6.56003 226.532ZM10.16 219.035C10.16 219.669 10.0534 220.209 9.84003 220.655C9.6267 221.095 9.34336 221.452 8.99003 221.725C8.63003 221.999 8.23336 222.199 7.80003 222.325C7.3667 222.452 6.93336 222.515 6.50003 222.515C6.08003 222.515 5.6567 222.445 5.23003 222.305C4.7967 222.159 4.40003 221.942 4.04003 221.655C3.68003 221.362 3.39003 220.995 3.17003 220.555C2.95003 220.115 2.84003 219.599 2.84003 219.005C2.84003 218.399 2.95003 217.875 3.17003 217.435C3.39003 216.995 3.68336 216.635 4.05003 216.355C4.41003 216.075 4.80336 215.869 5.23003 215.735C5.6567 215.595 6.08003 215.525 6.50003 215.525C6.91336 215.525 7.33336 215.599 7.76003 215.745C8.1867 215.885 8.58336 216.102 8.95003 216.395C9.31003 216.682 9.60336 217.045 9.83003 217.485C10.05 217.925 10.16 218.442 10.16 219.035ZM9.43003 218.925C9.43003 218.579 9.3467 218.289 9.18003 218.055C9.0067 217.822 8.78336 217.635 8.51003 217.495C8.2367 217.355 7.94003 217.255 7.62003 217.195C7.29336 217.135 6.9767 217.105 6.67003 217.105C6.0567 217.105 5.5167 217.179 5.05003 217.325C4.58336 217.472 4.2167 217.695 3.95003 217.995C3.68336 218.289 3.5567 218.669 3.57003 219.135C3.5767 219.475 3.67003 219.762 3.85003 219.995C4.02336 220.229 4.25003 220.415 4.53003 220.555C4.80336 220.695 5.10336 220.795 5.43003 220.855C5.7567 220.915 6.07336 220.945 6.38003 220.945C6.69336 220.945 7.0267 220.912 7.38003 220.845C7.73336 220.772 8.0667 220.659 8.38003 220.505C8.69336 220.352 8.9467 220.145 9.14003 219.885C9.33336 219.625 9.43003 219.305 9.43003 218.925ZM9.34003 214.797C9.33336 214.644 9.31336 214.517 9.28003 214.417C9.2467 214.31 9.17003 214.23 9.05003 214.177C8.93003 214.117 8.7367 214.087 8.47003 214.087L4.64003 214.087C4.46003 214.087 4.2867 214.084 4.12003 214.077C3.95336 214.064 3.8267 214.054 3.74003 214.047C3.7467 214.154 3.75336 214.287 3.76003 214.447C3.76003 214.607 3.76336 214.724 3.77003 214.797L3.00003 214.797L2.99003 211.887C2.99003 211.227 3.09003 210.657 3.29003 210.177C3.48336 209.69 3.7467 209.294 4.08003 208.987C4.41336 208.674 4.7867 208.44 5.20003 208.287C5.6067 208.134 6.0167 208.057 6.43003 208.057C6.8367 208.057 7.25003 208.13 7.67003 208.277C8.09003 208.417 8.4767 208.64 8.83003 208.947C9.1767 209.254 9.46003 209.654 9.68003 210.147C9.89336 210.64 10 211.237 10 211.937L10 214.797L9.34003 214.797ZM8.36003 212.637C8.54003 212.637 8.71336 212.64 8.88003 212.647C9.0467 212.654 9.17336 212.664 9.26003 212.677C9.25336 212.61 9.25336 212.52 9.26003 212.407C9.26003 212.287 9.26336 212.164 9.27003 212.037C9.27003 211.91 9.27003 211.807 9.27003 211.727C9.27003 211.36 9.1967 211.047 9.05003 210.787C8.90336 210.52 8.7067 210.304 8.46003 210.137C8.2067 209.964 7.92336 209.837 7.61003 209.757C7.2967 209.677 6.97336 209.637 6.64003 209.637C5.62003 209.637 4.87336 209.844 4.40003 210.257C3.9267 210.664 3.68003 211.214 3.66003 211.907C3.65336 212.067 3.67003 212.204 3.71003 212.317C3.74336 212.424 3.82003 212.504 3.94003 212.557C4.06003 212.61 4.25003 212.637 4.51003 212.637L8.36003 212.637ZM3.66003 204.657C3.6667 204.804 3.6867 204.93 3.72003 205.037C3.75336 205.144 3.83003 205.227 3.95003 205.287C4.06336 205.34 4.2567 205.367 4.53003 205.367L7.28003 205.367C7.83336 205.367 8.26336 205.29 8.57003 205.137C8.87003 204.984 9.08003 204.787 9.20003 204.547C9.32003 204.3 9.3867 204.044 9.40003 203.777C9.42003 203.224 9.25336 202.794 8.90003 202.487C8.5467 202.18 8.00003 202.027 7.26003 202.027L4.64003 202.027C4.46003 202.027 4.2867 202.024 4.12003 202.017C3.95336 202.01 3.8267 202 3.74003 201.987C3.7467 202.094 3.75336 202.23 3.76003 202.397C3.76003 202.557 3.76336 202.674 3.77003 202.747L3.00003 202.747L3.00003 200.427L3.66003 200.427C3.6667 200.574 3.6867 200.7 3.72003 200.807C3.75336 200.914 3.83003 200.997 3.95003 201.057C4.06336 201.11 4.2567 201.137 4.53003 201.137L7.03003 201.137C7.7967 201.137 8.41003 201.26 8.87003 201.507C9.32336 201.747 9.65336 202.08 9.86003 202.507C10.06 202.927 10.16 203.404 10.16 203.937C10.16 204.497 10.08 204.964 9.92003 205.337C9.76003 205.71 9.5367 206.007 9.25003 206.227C8.96336 206.44 8.63336 206.594 8.26003 206.687C7.8867 206.774 7.4867 206.817 7.06003 206.817L4.64003 206.817C4.46003 206.817 4.2867 206.814 4.12003 206.807C3.95336 206.794 3.8267 206.784 3.74003 206.777C3.7467 206.884 3.75336 207.017 3.76003 207.177C3.76003 207.337 3.76336 207.454 3.77003 207.527L3.00003 207.527L3.00003 204.657L3.66003 204.657ZM5.24003 194.588C4.13336 194.768 3.57336 195.328 3.56003 196.268C3.56003 196.615 3.64003 196.918 3.80003 197.178C3.96003 197.438 4.17336 197.655 4.44003 197.828C4.7067 197.995 5.01003 198.121 5.35003 198.208C5.69003 198.288 6.04003 198.328 6.40003 198.328C6.97336 198.328 7.48336 198.248 7.93003 198.088C8.37003 197.921 8.7167 197.681 8.97003 197.368C9.22336 197.055 9.35003 196.675 9.35003 196.228C9.35003 195.808 9.24336 195.391 9.03003 194.978C8.81003 194.565 8.5067 194.218 8.12003 193.938L8.56003 193.458C9.0067 193.785 9.3467 194.128 9.58003 194.488C9.8067 194.848 9.96003 195.201 10.04 195.548C10.12 195.888 10.16 196.195 10.16 196.468C10.16 196.981 10.07 197.448 9.89003 197.868C9.70336 198.288 9.45003 198.651 9.13003 198.958C8.80336 199.258 8.4267 199.491 8.00003 199.658C7.5667 199.818 7.10003 199.898 6.60003 199.898C6.1467 199.898 5.6967 199.825 5.25003 199.678C4.80336 199.531 4.40003 199.315 4.04003 199.028C3.67336 198.735 3.38336 198.368 3.17003 197.928C2.95003 197.488 2.84003 196.978 2.84003 196.398C2.84003 196.138 2.88336 195.855 2.97003 195.548C3.05003 195.235 3.17003 194.941 3.33003 194.668L2.91003 194.708L2.91003 193.938L5.24003 193.938L5.24003 194.588ZM5.26003 187.693C4.72003 187.693 4.32003 187.803 4.06003 188.023C3.79336 188.243 3.66336 188.543 3.67003 188.923L3.67003 189.403L8.36003 189.403C8.54003 189.403 8.71336 189.407 8.88003 189.413C9.0467 189.42 9.17336 189.43 9.26003 189.443C9.2467 189.33 9.24003 189.187 9.24003 189.013C9.23336 188.833 9.23003 188.71 9.23003 188.643L10 188.643L10 191.563L9.34003 191.563C9.33336 191.41 9.31336 191.283 9.28003 191.183C9.2467 191.077 9.17003 190.997 9.05003 190.943C8.93003 190.883 8.7367 190.853 8.47003 190.853L3.68003 190.853L3.68003 191.313C3.68669 191.693 3.81669 191.993 4.07003 192.213C4.32336 192.433 4.72003 192.543 5.26003 192.543L5.26003 193.203L3.00003 193.153L3.00003 187.093L5.26003 187.033L5.26003 187.693Z" fill="#0A0D17"/>
                <line x1="6.00003" y1="57" x2="6.00003" y2="87"/>
                <line x1="6.00003" y1="146" x2="6.00003" y2="176"/>
          </svg>
          </div>
        </Fade>
        <Fade timeout={1000} bottom cascade delay={350}>
          <div className="Home-topInfo">
            <h3>Hi, I’m Santiago</h3>
            <h4>My <strong>creativity</strong> allows me to build<br></br> <strong className="Home-strongColor">experiences</strong> & <strong className="Home-strongColor">interfaces</strong></h4>
          </div>
        </Fade>
      </div>

      <Fade bottom timeout={750} cascade>
      <div className="Home-whatIDo">
            <div className="Home-whatLeft">
                <h3>What I Do</h3>
            </div>

        <div className="Home-whatRight">

          <div className="Home-profile">

            <h2 className="Home-whatTitle">Work Experience</h2>

            {stores.uiStore.arrayWhatProfile.map((elem) => {
            return (
              <h3 key={elem.id} className="Home-whatText">{elem.data}</h3>
            )
          })}
          
          </div>

          <div className="Home-other">

            <h2 className="Home-whatTitle">Habilities</h2>

            {stores.uiStore.arrayWhatOther.map((elem) => {
            return (
                <h3 key={elem.id} className="Home-whatText">{elem.data}</h3>
            )
          })}
            
          </div>

        </div>
      </div>
      </Fade>

      <Fade timeout={750}>
      <div className="Home-recentWork">
        
        <h3 className="Home-leftRecent">Recent Work</h3>

        <div className="Home-rightRecent">
          <div className="Home-containerRecent">
            {stores.projectStore.arrayProjects.map((elem, index) => {
              if (index >= recent_index) {
                return ('');
              }
              return (
                  <ProjectCard key={index} project={elem} />
              )
            })}
          </div>

          <Fade right timeout={750} delay={250}>
            <NavigationButton route={"/projects"} text={"See all projects"} type={"right"}/>
          </Fade>
        </div>
      </div>

      <div className="Home-contact">
        <div className="Home-leftContact">

          <Fade timeout={750} left>
            <img src='/img/ContactImg.png' alt="Call to Action" className="Home-contactImg"/>
          </Fade>
          <Fade timeout={750} delay={150}>
            <h5>Let’s <strong> work </strong> together!</h5>
          </Fade>
          <Fade timeout={750} delay={350}>
            <h3>{stores.uiStore.email}</h3>
          </Fade>
        </div>
        <div className="Home-rightContact">
          <div className="Home-containerContact">
            <h3>More</h3>
            <h5>About me</h5>
            <a target='_blank' rel='noopener noreferrer' href="./file/CV.pdf" className="Home-cv">Download CV</a>
          </div>
        </div>
      </div>
      </Fade>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>

    </div>
  )
}

export default observer(Home);
