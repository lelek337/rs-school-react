import React from 'react';
import img from '../../assets/Error.gif';

interface IerrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: IerrorMessageProps) {
  return (
    <>
      <h2 className="text-center text-red-500">{error}</h2>
      <img src={img} alt="Error" />
    </>
  );
}
