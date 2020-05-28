import React, { useState } from 'react';

import { Container, ContentTextOrUrl } from './styles';

const Dashboard: React.FC = () => {
  const [valueEachCharacter, setvalueEachCharacter] = useState('');
  const [valueTextOrUrl, setValueTextOrUrl] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement | any>) => {
    setvalueEachCharacter(event.currentTarget.value);
  };

  const handleTextOrUrl = (event: React.FormEvent) => {
    event.preventDefault();
    setValueTextOrUrl(valueEachCharacter);
  };

  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${valueTextOrUrl}&size=300x300`;

  return (
    <Container>
      <ContentTextOrUrl>
        <h4>Conteúdo do QR code</h4>

        <textarea
          placeholder="Digite aqui o texto ou URL"
          value={valueEachCharacter}
          onChange={handleChange}
          maxLength={500}
        />
        <button onClick={handleTextOrUrl} type="submit">
          Gerar
        </button>

        <div>
          <img src={url} alt="" />
        </div>
      </ContentTextOrUrl>

      <div>
        <h1>Bem-vindo ao gerador de QR Code!</h1>
        <h2>
          Digite um texto ou cole uma URL no campo ao lado, para gerar seu QR
          Code.
        </h2>
      </div>
    </Container>
  );
};

export default Dashboard;
