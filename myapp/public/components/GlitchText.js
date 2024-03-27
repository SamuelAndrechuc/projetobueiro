import React, { useEffect, useState } from 'react';

const GlitchText = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((v) => !v);
    }, 500); // Alterna a visibilidade a cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="text-3xl lg:text-5xl font-bold mb-6 font-ibmPlexMono"
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        color: '#ff0000', // Cor vermelha para destacar o efeito de glitch, ajuste conforme necessário
        // Inclua aqui qualquer outro estilo específico
      }}
    >
      {children}
    </span>
  );
};
