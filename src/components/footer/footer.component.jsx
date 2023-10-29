import React from 'react';
import { TileLayer, Marker, Tooltip } from "react-leaflet"
import { FooterContainer, MapWrapper, FooterImage, FooterDescription } from "./footer.styles";
import Image from "./footer-image.png"
const Footer = () => {
  const coord = [39.9320, 32.8374]

  return (
    <FooterContainer>
      <FooterImage>
        <img src={Image} alt="" />
      </FooterImage>

      <FooterDescription>
        <h3>
          İletişim
        </h3>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <span>
          Email: bilgi@tesodev.com
        </span>
      </FooterDescription>

      <MapWrapper center={coord} zoom={20}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
          <Tooltip permanent>
            This tooltip uses the font defined by .leaflet-container
          </Tooltip>
        </Marker>
      </MapWrapper>
    </FooterContainer>
  );
}

export default Footer;
