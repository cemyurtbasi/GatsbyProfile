import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

import DenizakvariumDisplay from './../images/products/denizakvarium-io-display.png';
import BulutumDisplay from './../images/products/bulutum-display.png';
import CountrysearchDisplay from './../images/products/countrysearch-display.png';
import PoketestDisplay from './../images/products/poketest-display.png';
import SistembulDisplay from './../images/products/sistembul-display.png';
import SpotifycloneDisplay from './../images/products/spotifyclone-display.png';
import ThyopetDisplay from './../images/products/thyopet-display.png';
import DestekBuybackDisplay from './../images/products/destekbuyback-display.png';
import DijipolDisplay from './../images/products/dijipol-display.png';
import TebomDisplay from './../images/products/tebom-display.png';

export default () => {

  // const freelanceData = [
  //   { name: "Dijipol", url: "https://www.dijipol.com/", displayImage: DijipolDisplay },
  //    { name: "Tebom", url: "https://www.tebom.net/", displayImage: TebomDisplay },
  // ]
  const myProductsData = [
    { name: "CountrySearch", url: "https://countrysearch.cemyurtbasi.com/", displayImage: CountrysearchDisplay },
    { name: "SpotifyClone", url: "https://spotify.cemyurtbasi.com/", displayImage: SpotifycloneDisplay },
    { name: "Poketest", url: "https://poketest.cemyurtbasi.com/", displayImage: PoketestDisplay },
    { name: "Dijipol", url: "https://www.dijipol.com/", displayImage: DijipolDisplay },
  ]
  const companyProductsData = [
    { name: "DenizAkvaryumIo", url: "https://www.denizakvaryum.io/", displayImage: DenizakvariumDisplay },
    { name: "DestekBuyback", url: "https://destekbuyback.com/", displayImage: DestekBuybackDisplay },
    { name: "Bulutum", url: "https://www.bulutum.com/", displayImage: BulutumDisplay },
    { name: "Sistembul", url: "https://www.sistembul.com/", displayImage: SistembulDisplay },
    { name: "ThyOpet", url: "http://www.thyopet.com/ana-sayfa", displayImage: ThyopetDisplay },
  ]

  const products = [
    { title: "Company products", list: companyProductsData },
    // { title: "Freelance products", list: freelanceData },
    { title: "Owned products", list: myProductsData },
  ]

  const redirectToLink = (url) => {
    window.open(url, '_blank').focus();
  }


  return (

    <div className="c-content-box">
      <Helmet title="Let's play" />

      <HeadlineWithFocus>
        Playground
      </HeadlineWithFocus>
      <div className="playGroundList">
        {products.map(({ title, list }) => {
          return <div className="playGroundList-group">
            <h2 className="playGroundList-group__title">
              {title}
            </h2>
            <div className="playGroundList-group-list">
              {list.map(({ name, url, displayImage }, index) => {
                return <div className="playGroundList-group-list-item" key={index}>
                  <img
                    onClick={() => redirectToLink(url)}
                    src={displayImage}
                    alt={name}
                    title={name}
                  />
                  <div className="playGroundList-group-list-item-info">
                    <span>{name}</span>
                  </div>
                </div>
              })}
            </div>
          </div>
        })}
      </div>
    </div>
  )
};
